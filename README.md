# Open Museum CMS

**Open Museum CMS** is an open-source collections-management foundation for small museums, historical societies, archives, community heritage organisations, and other not-for-profit collections that already use Google Workspace.

It combines **Google Sheets** as the institutional datastore, **Google Drive / Shared Drives** for media and documentation, and a custom **Google Apps Script web application** for day-to-day collections work.

> **Project status:** `v0.2.0-alpha` — functional and actively developed, but still an alpha release. Test against a copy of your data, keep backups, and adapt workflows to your own legal, ethical, archival, cultural, and collections-management obligations.

## The design goal

Open Museum CMS is deliberately designed for organisations that do **not** have a database administrator or technical department.

Ordinary staff should be able to:

- catalogue and search collections through a web interface;
- customise the institution name, colours, users, storage folders, vocabularies, and analytical tools from an **Administrator Setup** screen;
- use broad, familiar catalogue fields for most records;
- reveal extra analytical fields only when they are useful;
- keep the underlying Google Sheet accessible for exports, bulk cleanup, and institutional control.

The application therefore separates **core cataloguing** from **optional analysis profiles**. A chair remains a normal museum record; if it is classified as Furniture, a compact Furniture analysis profile becomes available. The same pattern applies to art, sculpture, textiles, tools, agricultural implements, archaeology, ceramics/glass, photography, jewellery, arms and armour, Indigenous cultural context, and Natural History.

## Core collections functions

- object, archival, photographic, numismatic, and digital records;
- accessioning and accession-document PDF storage;
- reversible deletion and documented deaccessioning;
- hierarchical storage locations and movement history;
- Google Drive / Shared Drive media management;
- people/organisation, place, subject, and bibliography authorities;
- role-specific people/object and place/object relationships;
- structured dates, measurements, inscriptions, and marks;
- edit history with mandatory reasons for catalogue edits;
- exhibition planning, display status, and exhibition history;
- faceted Advanced Search with list/grid results;
- mobile-responsive staff interface.

## Analytical profiles

The current starter profiles include:

- Art & Works on Paper
- Sculpture
- Historic Furniture
- Textiles & Costume
- Historic Tools & Implements
- Agriculture & Rural Life
- Indigenous Cultural Context
- Historic Photography
- Jewellery & Personal Adornment
- Arms & Armour
- Archaeology & Excavated Material
- Ceramics & Glass
- Natural History

Profiles are **analytical aids, not separate databases**. They can be renamed, disabled, manually assigned, or configured to appear automatically from Collection Area, Classification, or Object Type.

See [Analysis Profiles](docs/ANALYSIS_PROFILES.md).

For a practical staff-facing overview, see [Cataloguing Basics](docs/CATALOGUING_BASICS.md).

## Vocabulary approach

Open Museum CMS ships with a practical starter vocabulary rather than pretending one universal thesaurus will suit every museum.

The field structure and search behaviour were reviewed against major museum catalogues including the British Museum and The Metropolitan Museum of Art, together with CDWA/CCO-style distinctions between broad **Classification** and specific **Object Type**. The starter list is intentionally editable and extensible.

The repository also includes a script that can derive candidate terms from The Met's CC0 Open Access `MetObjects.csv` dataset. British Museum catalogue structure informed the software design, but British Museum website content is **not wholesale scraped or redistributed** in this repository; see [Vocabulary Sources and Licensing](docs/VOCABULARIES_AND_SOURCES.md).

## Designed for Google Workspace

Each institution deploys its **own copy** of Open Museum CMS. Your records do not pass through a shared Open Museum CMS server.

```text
Staff browser
    ↓
Google Apps Script web app
    ↓
Google Sheets catalogue  +  Google Drive / Shared Drive files
```

## Quick start

1. Upload [`starter/Open_Museum_CMS_Starter.xlsx`](starter/Open_Museum_CMS_Starter.xlsx) to your organisation's Google Drive and open/convert it in Google Sheets. A blank Google Sheet also works.
2. From the Sheet choose **Extensions → Apps Script**.
3. Add the three files in [`src/`](src/): `Code.gs`, `Index.html`, and `appsscript.json`.
4. Save, choose `setupOpenMuseumCms`, and click **Run**.
5. Approve Google's permission prompts.
6. Configure Drive folder IDs in **Apps Script → Project Settings → Script properties**.
7. Create a **Test deployment** as a Web app.
8. Open the CMS and, as Administrator, choose **Setup**. The Setup screen guides institutional branding, users, storage, vocabularies, and analysis profiles without requiring code edits.
9. Test thoroughly, then update/create the production Web app deployment.

See [Easy Setup](docs/EASY_SETUP.md) and [Installation](docs/INSTALLATION.md).

## Customisation without coding

Administrators can use the in-app **Setup** screen for:

- institution name and branding;
- Google Workspace domain restriction;
- Drive storage folder IDs;
- users and roles;
- controlled vocabulary terms;
- enabling/disabling or renaming analysis profiles;
- automatic analysis-profile triggers.

For advanced users, every configuration table remains visible in Google Sheets.

## Updates and forks

This repository is intended to be forked, adapted, and improved. Keep institutional data and secrets out of the public repository. Development with Google's `clasp` is documented in [Development](docs/DEVELOPMENT.md).

## Backups

Open Museum CMS does **not** replace an institutional backup policy. At minimum:

- use Google Workspace retention appropriate to your organisation;
- regularly export the catalogue Sheet;
- include Shared Drive files in organisational backup/retention planning;
- test restore procedures before relying on the system for irreplaceable records.

## Licence

Open Museum CMS is released under the **GNU General Public License v3.0 or later (GPL-3.0-or-later)**. See [`LICENSE`](LICENSE).

Third-party source datasets and vocabularies may have different licences. See [`THIRD_PARTY_DATA.md`](THIRD_PARTY_DATA.md).

## Author and credit

Open Museum CMS was created and is maintained by **Nigel Klemenčič-Puglisevich**.

- Email: [klemencicpuglisevich@gmail.com](mailto:klemencicpuglisevich@gmail.com)
- Instagram: [@prositministru](https://www.instagram.com/prositministru/)

Citation metadata is provided in [`CITATION.cff`](CITATION.cff).

## Contributing

Bug reports, feature proposals, documentation improvements, controlled-vocabulary suggestions, and code contributions are welcome. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) first.
