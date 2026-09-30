# Configuration

Most institutional customisation is available through the web app's **Setup** section. The same values are stored in the `Settings` sheet so the institution retains direct access to its configuration.

## Settings

| Setting | Purpose |
|---|---|
| `InstitutionName` | Full institutional name shown in the interface |
| `ShortName` | Short name/initials used by the fallback mark |
| `SystemName` | Usually `Open Museum CMS` or a local name |
| `DomainRestriction` | Optional Google Workspace domain; blank disables domain checking |
| `Timezone` | Documentation value; also configure Apps Script's project timezone |
| `PrimaryColour` | Main interface colour, hex |
| `PrimaryDarkColour` | Darker button/link colour, hex |
| `BackgroundColour` | Page background colour, hex |
| `LogoURL` | Optional HTTPS logo URL; blank uses a text mark |
| `DefaultVenue` | Default venue for new exhibition plans |
| `PermanentExhibitAreas` | Permanent exhibit names separated by `|` or line breaks |
| `ContactEmail` | Optional local CMS support contact |
| `SetupComplete` | Used by the UI to hide/show the first-time setup reminder |

## Permanent exhibit areas

Example:

```text
Local History | Archaeology | Art | Community Life
```

Saving institution settings from the CMS Setup screen seeds any missing permanent exhibit planning records automatically. Existing exhibit records are not deleted.

## Controlled vocabularies

The `Lists` sheet is authoritative for dropdowns and suggestions. Administrators can also manage terms from **Setup → Controlled vocabularies**.

Important distinctions:

- **Classification** is broad and repeatable: e.g. `Furniture`, `Textiles`, `Paintings`, `Tools & Equipment`.
- **Object Type** is more specific: e.g. `armchair`, `sampler`, `oil lamp`, `plough`.
- **Collection Area** is local organisational grouping; it should reflect how your museum actually divides its holdings.
- **Culture / Community**, **Period**, and **School / Style** are suggestions rather than globally fixed authorities. Use terminology appropriate to your institution and communities.

Avoid renaming heavily used values casually. Deactivating a term is usually safer than deleting it.

## Analysis profiles

Analysis profiles are configured in `Analysis_Profiles` and `Analysis_Fields`. The Setup screen provides ordinary profile controls; advanced field editing remains available directly in the Sheet.

See [Analysis Profiles](ANALYSIS_PROFILES.md).
