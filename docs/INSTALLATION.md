# Installation

## Requirements

- A Google account. Google Workspace is strongly recommended for organisational deployments.
- Permission to create/edit a Google Sheet and Apps Script project.
- Google Drive or Shared Drive storage for media.
- For domain-restricted access, an organisation-managed Google Workspace domain.

## 1. Create the catalogue Sheet

### Recommended
Upload `starter/Open_Museum_CMS_Starter.xlsx` to Google Drive and open it in Google Sheets. Convert/save it as a native Google Sheet if prompted.

### Alternative
Create a blank Google Sheet. `setupOpenMuseumCms()` creates the required schema.

## 2. Create the Apps Script project

From the target Sheet choose **Extensions → Apps Script**.

Create/replace these project files with the versions in `src/`:

- `Code.gs`
- `Index.html`
- `appsscript.json`

To edit the manifest, enable **Show "appsscript.json" manifest file in editor** under Apps Script project settings if necessary.

## 3. Run setup

Save the project, choose `setupOpenMuseumCms` in the function selector, and click **Run**.

Approve Google's permission prompts. Setup is designed to be idempotent: rerunning it should add missing schema rather than delete catalogue records.

The account that runs setup is added as the initial Administrator when Google exposes its email address. If it does not, add an Administrator manually to the `Users` sheet.

## 4. Configure Drive storage

Create one or preferably two organisational folders:

```text
Collections Database/Assets
Collections Database/Accession Documentation
```

Shared Drives are preferable where available because files are institution-owned rather than tied to one person's My Drive.

Copy each folder ID from its Drive URL. In Apps Script open **Project Settings → Script properties** and add:

```text
MEDIA_ROOT_FOLDER_ID = <Assets folder ID>
ACCESSION_DOCS_FOLDER_ID = <Accession Documentation folder ID>
```

The in-app **Setup** screen can also save these IDs once the first Test deployment exists.

Run `verifyMediaRootFolder` and `verifyAccessionDocsFolder` if you want to confirm access from Apps Script.

## 5. Enable Drive API

The manifest requests the Drive Advanced Service. If Apps Script still shows it as unavailable, click **Services → + → Drive API → Add**.

## 6. Create a Test deployment

Choose **Deploy → Test deployments → Web app** and open the `/dev` URL.

## 7. Finish setup in the CMS

As Administrator, choose **Setup** in the main navigation.

Use the guided page to configure:

- institution name and branding;
- optional Workspace domain restriction;
- Drive storage IDs;
- users and roles;
- controlled vocabularies;
- analysis profiles and their automatic triggers.

This is the preferred route for non-technical administrators. See [Easy Setup](EASY_SETUP.md).

## 8. Test normal work

Before production, test at least:

- record creation and editing;
- Advanced Search;
- media upload/thumbnail display;
- location moves;
- accessions;
- users with different roles;
- one or two analysis profiles relevant to your collections.

## 9. Deploy production

Choose **Deploy → New deployment → Web app**. The exact access options Google shows depend on the account/Workspace configuration. For organisational deployments, use the most restrictive suitable Google option and combine it with `DomainRestriction` plus the CMS `Users` table.

## 10. Optional friendly URL

Apps Script does not natively bind an arbitrary custom hostname. A DNS provider such as Cloudflare can redirect a memorable hostname (for example `cms.examplemuseum.org`) to the Apps Script `/exec` URL. A redirect changes the address bar; it is not custom hosting.

## Important

Before entering irreplaceable collection data, establish an organisational backup and access-management process.
