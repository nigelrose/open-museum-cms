# Troubleshooting

## "CMS is not installed"
Run `setupOpenMuseumCms()` from the target Google Sheet's Apps Script project.

## User cannot enter
Check:

1. the person is signed into the expected Google account;
2. `DomainRestriction` is either blank or matches the account domain;
3. their exact email exists in `Users`;
4. `Active` is TRUE;
5. their Role is valid.

## Media uploads fail
Check `MEDIA_ROOT_FOLDER_ID`, Drive API Advanced Service, and the deploying account's folder permissions. Run `verifyMediaRootFolder()`.

## Accession PDF uploads fail
Check `ACCESSION_DOCS_FOLDER_ID` and run `verifyAccessionDocsFolder()`.

## Sheet edits do not appear immediately
Some dashboard/vocabulary data use short caches. Run `clearCmsPerformanceCache()` after large direct Sheet edits if an immediate refresh is required.

## Web app feels slow
Google Apps Script can cold-start. Larger catalogues and faceted searches also require Sheet reads. Keep media in Drive rather than embedding binary data in Sheets, and avoid unnecessary direct proliferation of rows.

## Syntax error after copying code
Confirm the complete file was copied, not a partial code block. Use the repository files rather than copying formatted excerpts from documentation.
