# Vocabularies and Source Catalogues

Open Museum CMS uses a **curated, editable starter vocabulary** rather than presenting another institution's terminology as a universal standard.

## Catalogue models reviewed

### British Museum Collection Online

The British Museum's public catalogue informed several design choices:

- broad and specific object terms;
- material and technique searching;
- cultures/periods;
- production place and findspot as distinct relationships;
- role-specific people/organisation relationships;
- faceted search, image-only and on-display filtering;
- retaining curatorial comments separately from basic description.

Open Museum CMS does **not** redistribute a wholesale scrape of British Museum terminology. The British Museum's current website permissions state that text/data mining requires permission, and not all website content is released under Creative Commons. The project therefore uses the catalogue as a structural reference and limits the included terms to generic museum terminology that is not dependent on copying the British Museum database.

### The Metropolitan Museum of Art Open Access

The Met publishes its Open Access collection dataset under **CC0**. Its data model includes useful fields such as Object Name, Culture, Period, Medium, Classification, artist/constituent roles, geography, dates, credit line, and subject tags.

Open Museum CMS includes:

- a curated starter vocabulary suitable for smaller museums;
- `scripts/build_met_vocabulary.py`, which can extract candidate vocabulary terms from a locally downloaded `MetObjects.csv` file;
- no 300+ MB copy of the Met dataset in this repository.

This allows an institution that wants a much larger art vocabulary to generate it from the current Met dataset without forcing thousands of irrelevant terms into every Open Museum CMS installation.

### CDWA / CCO / Getty practice

The generic model also follows the important distinction between:

- **Classification** — a broad, repeatable organising category; and
- **Object Type** — the more specific name for what the thing is.

For example:

```text
Classification: Furniture
Object Type: rolltop desk
```

or:

```text
Classification: Textiles | Clothing & Costume
Object Type: coat
```

## Local vocabularies remain authoritative

No external museum catalogue knows your collection as well as your institution and relevant communities do.

Use the starter terms as suggestions. Add local object names, agricultural implement names, trade terminology, community-preferred cultural terminology, archaeological typologies, and regional variants as needed.

For Indigenous/community material, community-preferred terminology and protocols take precedence over generic software lists.

## Importing Met-derived candidate terms

1. Download `MetObjects.csv` from The Met's official Open Access repository.
2. Run:

```bash
python scripts/build_met_vocabulary.py /path/to/MetObjects.csv --output met-vocabulary
```

3. Review the generated CSV files before importing anything.
4. Add only terms that are useful to your institution.

The script generates frequency-ranked candidate terms rather than blindly importing the entire corpus.
