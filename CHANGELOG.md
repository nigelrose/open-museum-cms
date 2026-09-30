# Changelog

All notable changes to Open Museum CMS will be documented here.

The project follows [Semantic Versioning](https://semver.org/) once stable releases begin. Pre-1.0 versions may change more quickly.

## [0.2.0-alpha] — 2026-09-29

### Changed
- Reworked specialist cataloguing into configurable **Analysis Profiles** rather than giving one collection type disproportionate emphasis.
- Natural History is now one lightweight profile among art, sculpture, furniture, textiles, tools, agriculture, archaeology, ceramics/glass, photography, jewellery, arms/armour, and Indigenous/community cultural context.
- Added in-app Administrator **Setup** for institutional branding, users, storage folders, controlled vocabularies, and analysis-profile configuration.
- Added an in-app analysis-profile field builder so non-technical administrators can add/edit specialist fields without source-code changes.
- Expanded broad Classification, Object Type, Material, Technique, Period, style, and specialist option vocabularies.
- Advanced Search now facets on Object Type, Culture/Community, Period, School/Style, and applicable Analysis Profile.
- Added Culture/Community, Period, School/Style, and Credit Line to the core record.
- Genericised remaining Drive metadata keys.

### Added
- Historic Photography analysis profile.
- Jewellery & Personal Adornment analysis profile.
- Arms & Armour analysis profile.
- `scripts/build_met_vocabulary.py` for deriving candidate terms from The Met Open Access `MetObjects.csv` dataset.
- Documentation for vocabulary provenance/licensing and a non-technical setup workflow.

### Vocabulary/source policy
- The Met Open Access dataset can be used to derive optional vocabulary candidates under its CC0 release.
- British Museum catalogue structure informed search/relationship design, but British Museum website content is not wholesale scraped or redistributed in the project.

## [0.1.0-alpha] — 2026-09-29

### Added
- First public generic foundation derived from the project's working museum implementation.
- Configurable institutional branding and domain restriction.
- Google Sheets catalogue schema and Apps Script web application.
- Accessions, authorities, movements, media, reviews, exhibitions, deaccessions, and edit history.
- Faceted search and grid/list browsing.
- Place, subject, bibliography, inscription, and people/organisation authority structures.
- Initial Natural History specimen extension.
- Mobile-responsive interface.
- Shared Drive media and accession-document support.
- Starter workbook and installation documentation.
