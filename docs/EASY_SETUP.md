# Easy Setup for Non-Technical Administrators

Open Museum CMS is intended to be manageable by museum staff, not only developers.

The only technical steps that normally require the Google Apps Script editor are the **initial installation** and **software upgrades**. Routine institutional configuration should happen in the CMS or Google Sheet.

## First installation

1. Start with `starter/Open_Museum_CMS_Starter.xlsx` or a blank Google Sheet.
2. Open **Extensions → Apps Script**.
3. Copy in the files from `src/`.
4. Run `setupOpenMuseumCms()` once.
5. Create a Web app **Test deployment**.
6. Open the Web app and choose **Setup**.

## The Setup screen

An Administrator can configure the following without editing source code.

### Institution

- institution name;
- short name;
- system name;
- colour palette;
- logo URL;
- optional Workspace domain restriction;
- contact email;
- default exhibition venue;
- permanent exhibition names.

### Storage

The Setup screen can save the two important folder IDs:

- media/assets folder;
- accession-document folder.

Shared Drives are recommended for organisations using Google Workspace because files remain organisation-owned.

### Users

Use **Setup → Users** to add/edit:

- Google account email;
- display name;
- role;
- active/inactive state;
- notes.

You do not need to edit `Users` directly unless you prefer the Sheet.

### Vocabularies

Use **Setup → Controlled vocabularies** to:

- browse the existing terms;
- add a new term;
- deactivate a term without deleting historical data;
- extend Object Type, Classification, Material, Technique, Period, Culture/Community, and other lists as your collection develops.

The defaults are a starting point, not an instruction to replace local terminology.

### Analysis profiles

Use **Setup → Analysis profiles** to:

- enable/disable a profile;
- rename it;
- edit its staff guidance;
- change whether it appears automatically;
- change the trigger values.

Examples:

```text
Historic Furniture
Trigger: Classification
Values: Furniture | Furnishings
```

```text
Agriculture & Rural Life
Trigger: Classification
Values: Agricultural Objects
```

A museum that does not collect Natural History can simply disable that profile. A museum with no arms collection can disable Arms & Armour. Nothing else changes.

Use **Manage fields** beside a profile to add, edit, reorder, deactivate, or connect its fields to an existing controlled list. Common field types are short text, long text, number, and controlled dropdown.

## What should remain simple

Do not create a specialist profile merely because a field could exist. Add one only when the extra information helps identification, research, care, interpretation, or retrieval.

The normal record should remain understandable to a volunteer cataloguer.

## Advanced customisation

The underlying configuration tables are still available in Google Sheets:

- `Settings`
- `Lists`
- `Analysis_Profiles`
- `Analysis_Fields`

Advanced administrators can still edit `Analysis_Fields` directly for bulk work, but ordinary field creation/editing is available from the Setup screen.
