# Data Model

Open Museum CMS uses one Google Sheet workbook as a lightweight relational datastore. Stable IDs connect tables.

## Core catalogue

- `Records` — primary catalogue records
- `Accessions` — acquisition/accession events
- `Locations` — hierarchical physical locations
- `Movements` — movement history
- `Media` — Drive-linked media metadata
- `Measurements` — repeatable measurements
- `Reviews` — catalogue/review events
- `Users` — CMS roles
- `Audit_Log` — procedural audit events
- `Record_Edit_History` — staff-facing edit history and reasons

## Authorities and relationships

- `People_Orgs` + `Record_Roles`
- `Places` + `Record_Places`
- `Subjects` + `Record_Subjects`
- `Bibliography` + `Record_References`
- `Inscriptions_Marks`

The relationship tables allow repeatable, role-specific associations rather than forcing a record to have only one maker, one place, or one subject.

## Core descriptive distinctions

A normal record can carry:

- broad repeatable `Classifications`;
- specific `ObjectTypeGenreForm`;
- `CultureText`;
- `PeriodText`;
- `SchoolStyleText`;
- structured date fields plus `DateDisplay`;
- separate Materials and Techniques;
- Description and Curatorial/Research Comments;
- Credit Line;
- controlled certainty.

## Analysis profiles

Specialist/analytical data are handled generically through:

- `Analysis_Profiles`
- `Analysis_Fields`
- `Record_Analysis_Profiles`
- `Analysis_Values`

This means Furniture, Textiles, Natural History, Tools, Art, etc. do **not** each require a large new database module. Profiles are small configurable field sets that appear only when relevant.

See [Analysis Profiles](ANALYSIS_PROFILES.md).

## Legacy specialist tables

The code retains compatibility with some earlier specialist structures, including `Archive_Details`, `Coin_Details`, and legacy Natural History data where present. New generic analytical development should prefer Analysis Profiles unless a genuinely relational specialist module is required.

## Exhibitions

- `Exhibitions`
- `Exhibition_Items`

## Collection lifecycle

- `Deaccessions`
- soft-deletion fields on `Records`

## Principles

- IDs are system keys; human-readable accession numbers and titles are not relational keys.
- Direct Sheet editing is possible, but procedural actions such as moves, deaccessioning, exhibition installation, and audited edits are safer in the web app.
- Legacy descriptive evidence should be preserved while data are progressively standardised.
- Specialist fields should remain optional and proportionate to the institution's needs.
