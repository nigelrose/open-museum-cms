#!/usr/bin/env python3
"""Build reviewable vocabulary candidates from The Met Open Access MetObjects.csv.

The Met Open Access collection metadata is released under CC0. This script does not
download or redistribute the dataset; download the current MetObjects.csv directly
from The Met / metmuseum/openaccess repository, then run this locally.

Outputs are frequency-ranked candidates for local review. Do not blindly import every
term into a small museum catalogue: a useful controlled vocabulary is intentionally
smaller than a source corpus.
"""

from __future__ import annotations

import argparse
import csv
import json
import re
from collections import Counter
from pathlib import Path

FIELD_MAP = {
    "Object Name": ("ObjectType", True),
    "Classification": ("Classification", True),
    "Culture": ("Culture", True),
    "Period": ("Period", True),
    "Artist Role": ("RoleType", False),
    "Medium": ("MetMediumCandidate", False),
    "Tags": ("SubjectCandidate", False),
}

SEPARATOR_RE = re.compile(r"\s*\|\s*")
SPACE_RE = re.compile(r"\s+")


def clean(value: str) -> str:
    value = SPACE_RE.sub(" ", (value or "").strip())
    return value.strip(" ;|")


def split_multi(value: str) -> list[str]:
    value = clean(value)
    if not value:
        return []
    # The Met CSV commonly uses | for repeatable values. Do not split commas or
    # semicolons because those often belong inside a meaningful display term.
    return [clean(x) for x in SEPARATOR_RE.split(value) if clean(x)]


def header_lookup(fieldnames: list[str]) -> dict[str, str]:
    by_lower = {x.strip().lower(): x for x in fieldnames if x}
    out = {}
    for requested in FIELD_MAP:
        actual = by_lower.get(requested.lower())
        if actual:
            out[requested] = actual
    return out


def write_ranked(path: Path, source_field: str, list_name: str, counter: Counter,
                 min_count: int, limit: int) -> list[tuple[str, int]]:
    items = [(term, count) for term, count in counter.most_common()
             if count >= min_count]
    if limit > 0:
        items = items[:limit]
    with path.open("w", newline="", encoding="utf-8-sig") as f:
        w = csv.writer(f)
        w.writerow(["SourceField", "SuggestedListName", "Term", "Count", "Source", "Licence"])
        for term, count in items:
            w.writerow([source_field, list_name, term, count,
                        "The Metropolitan Museum of Art Open Access", "CC0"])
    return items


def main() -> int:
    ap = argparse.ArgumentParser(
        description="Extract reviewable vocabulary candidates from The Met Open Access MetObjects.csv."
    )
    ap.add_argument("csv_file", type=Path, help="Path to MetObjects.csv")
    ap.add_argument("--output", type=Path, default=Path("met-vocabulary"),
                    help="Output directory (default: met-vocabulary)")
    ap.add_argument("--min-count", type=int, default=2,
                    help="Minimum occurrences required (default: 2)")
    ap.add_argument("--limit", type=int, default=500,
                    help="Maximum terms per source field; 0 = unlimited (default: 500)")
    args = ap.parse_args()

    if not args.csv_file.exists():
        ap.error(f"File not found: {args.csv_file}")

    args.output.mkdir(parents=True, exist_ok=True)
    counters = {field: Counter() for field in FIELD_MAP}
    rows_read = 0

    # utf-8-sig handles the BOM used by some CSV exports.
    with args.csv_file.open("r", newline="", encoding="utf-8-sig", errors="replace") as f:
        reader = csv.DictReader(f)
        if not reader.fieldnames:
            raise SystemExit("The CSV does not contain a header row.")
        lookup = header_lookup(reader.fieldnames)
        missing = [x for x in FIELD_MAP if x not in lookup]
        if missing:
            print("Warning: source fields not found and skipped: " + ", ".join(missing))

        for row in reader:
            rows_read += 1
            for source_field, (list_name, _direct) in FIELD_MAP.items():
                actual = lookup.get(source_field)
                if not actual:
                    continue
                for term in split_multi(row.get(actual, "")):
                    counters[source_field][term] += 1

    direct_rows = []
    manifest = {
        "source": "The Metropolitan Museum of Art Open Access MetObjects.csv",
        "licence": "CC0",
        "rowsRead": rows_read,
        "minCount": args.min_count,
        "limitPerField": args.limit,
        "fields": {},
    }

    for source_field, (list_name, direct) in FIELD_MAP.items():
        safe = re.sub(r"[^a-z0-9]+", "_", source_field.lower()).strip("_")
        path = args.output / f"met_{safe}_candidates.csv"
        items = write_ranked(path, source_field, list_name, counters[source_field],
                             args.min_count, args.limit)
        manifest["fields"][source_field] = {
            "suggestedListName": list_name,
            "uniqueTerms": len(counters[source_field]),
            "termsWritten": len(items),
            "file": path.name,
            "directListImportRecommended": direct,
        }
        if direct:
            for term, count in items:
                direct_rows.append((list_name, term, count, source_field))

    # This file is shaped for easy review/copying into Open Museum CMS Lists.
    import_path = args.output / "open_museum_cms_list_candidates.csv"
    direct_rows.sort(key=lambda x: (x[0].lower(), -x[2], x[1].lower()))
    with import_path.open("w", newline="", encoding="utf-8-sig") as f:
        w = csv.writer(f)
        w.writerow(["ListName", "Value", "Count", "SourceField", "Active", "Notes"])
        for list_name, term, count, source_field in direct_rows:
            w.writerow([list_name, term, count, source_field, False,
                        "Met Open Access CC0 candidate — review locally before activation"])

    (args.output / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    print(f"Read {rows_read:,} rows")
    print(f"Wrote candidate files to {args.output}")
    print("Review terms before importing; the generated lists are candidates, not a universal thesaurus.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
