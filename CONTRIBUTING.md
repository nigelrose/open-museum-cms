# Contributing to Open Museum CMS

Thank you for helping improve Open Museum CMS. The project is intended to remain practical for small, resource-constrained heritage organisations.

## Before opening a pull request

1. Search existing issues first.
2. Keep institutional data, credentials, Drive IDs, deployment IDs, and personal data out of commits.
3. Explain the museum/collections-management use case, not only the technical change.
4. Preserve backwards compatibility where reasonably possible.
5. If a schema change is required, include an idempotent migration/setup path.
6. Test both desktop and mobile layouts.
7. Run `python scripts/check_repository.py` before submitting.

## Design principles

- **Human-readable first.** Staff and volunteers should not need database expertise for ordinary work.
- **Institution-owned data.** Each deployment uses the institution's own Google Workspace resources.
- **Preserve provenance.** Do not silently overwrite legacy catalogue evidence.
- **Authority control without over-complication.** Structured data should improve retrieval, not make cataloguing unusable.
- **Audit significant actions.** Destructive or procedural actions should be distinguishable from ordinary data correction.
- **Progressive enhancement.** Specialist modules should activate only where relevant.
- **Accessibility and mobile use matter.**
- **Vocabulary provenance matters.** Do not copy third-party thesauri or catalogue text into the repository without confirming reuse rights and documenting the source/licence.
- **Community terminology takes precedence.** For Indigenous and culturally sensitive material, local/community-preferred terminology and protocols must not be overridden by generic software defaults.

## Code style

The Apps Script backend is intentionally dependency-light. Avoid introducing build systems or frameworks unless they clearly improve maintainability for small institutions.

## Licensing contributions

By submitting a contribution, you agree that it may be distributed under the project's GPL-3.0-or-later licence.

## Contact

Maintainer: **Nigel Klemenčič-Puglisevich** — [klemencicpuglisevich@gmail.com](mailto:klemencicpuglisevich@gmail.com) · [@prositministru](https://www.instagram.com/prositministru/)
