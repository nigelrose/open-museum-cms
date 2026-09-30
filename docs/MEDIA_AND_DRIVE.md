# Media and Google Drive

Media files remain in the deploying institution's Google Drive or Shared Drive. Open Museum CMS stores file metadata and Drive IDs in the `Media` table.

## Recommended layout

```text
Shared Drive
└── Collections Database
    ├── Assets
    └── Accession Documentation
```

Use Script Properties:

- `MEDIA_ROOT_FOLDER_ID`
- `ACCESSION_DOCS_FOLDER_ID`

The application uses authenticated Drive API calls for private image thumbnails and carousel previews; files do not need to be made public solely for the internal CMS.

Drive permissions still govern the separate **Open in Drive** link.
