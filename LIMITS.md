# Limits, Capacity & Suitability

**Open Museum CMS** · Guidance for `v0.2.0-alpha`  
**Author and maintainer:** Nigel Klemenčič-Puglisevich

Open Museum CMS is intended primarily for small museums, historical societies, community archives, and other heritage organisations that need an approachable collections-management system without maintaining a conventional database server. Its Google Sheets and Google Apps Script architecture is deliberately simple, but it has practical performance limits.

> [!IMPORTANT]
> **Recommended planning limit: up to 3,000 catalogue records.** This is a *provisional recommendation*, not a software-enforced cap or a tested guarantee. The alpha release has not yet undergone systematic load testing across different collection sizes, account types, or numbers of users.

## Collection-size guidance

| Catalogue records | Guidance | What to consider |
| ---: | --- | --- |
| Fewer than 1,000 | Intended use | A reasonable starting point for small, relatively straightforward collections. |
| 1,000–3,000 | Recommended planning range | Review associated media, relationships, search performance, and staff workflows as the collection grows. |
| 3,000–5,000 | Conditional | Test a realistic copy of your catalogue before adopting or expanding the system. |
| 5,000–10,000 | Not recommended without substantial optimisation and benchmarking | Expect search, reporting, and concurrent-editing performance to become increasingly important. |
| More than 10,000 | Plan for a dedicated database or a substantially revised backend | Google Sheets should not be assumed to provide suitable performance at this scale. |

These ranges count **catalogue records, not individual physical objects**. One accession or archaeological assemblage may comprise many physical objects but occupy one catalogue record. Equally, one catalogue record may have numerous photographs, authority links, analyses, exhibition assignments, and edit-history entries. Those related entries also affect performance.

**These numbers are not automatic limits:** the application will not stop an institution from adding its 3,001st record. Institutions are responsible for evaluating whether their deployment remains suitable.

## What actually affects performance?

The number of catalogue records is only one consideration. Workloads differ substantially according to:

- **Related data:** photographs, media metadata, measurements, authorities, subject/place relationships, edit histories, and exhibition assignments.
- **Search complexity:** faceted searches can read and combine data across several Sheets. A search over richly linked records may be considerably slower than a simple title lookup.
- **Concurrent activity:** several people searching, cataloguing, uploading files, or moving objects at once create more load than a single-user deployment.
- **Image delivery:** original high-resolution images should remain in Drive; the catalogue should use appropriately sized previews and load large images only when needed.
- **Google service limits:** Apps Script execution, API quotas, Google Sheets size, Drive access, and account-specific restrictions may affect an institution's deployment. Google's published limits can change.

A technically permitted spreadsheet size should **not** be treated as an assurance that the CMS will remain responsive. Likewise, the number of images in Drive is not, by itself, a meaningful catalogue-record capacity measure.

For current platform limits, consult Google's own documentation: [Apps Script quotas](https://developers.google.com/apps-script/guides/services/quotas), [Google Sheets limits](https://support.google.com/drive/answer/37603), and [Google Drive API usage limits](https://developers.google.com/workspace/drive/api/guides/limits).

## When to reconsider this system

Consider a different backend or an experienced technical review if your organisation regularly experiences any of the following:

- Search and normal record-opening times are too slow for everyday staff work.
- A substantial number of users need to edit or search the catalogue simultaneously.
- The catalogue has thousands of records *and* extensive related data or complex reporting requirements.
- Your institution requires guaranteed uptime, formal support commitments, specialised integration, or robust transaction handling.
- Organisational policies, privacy requirements, or the sensitivity of your collections require infrastructure beyond this self-managed Google deployment.

Open Museum CMS is **not** intended to replace an institution's collections-management policy, legal advice, cultural protocols, privacy programme, or disaster-recovery plan. Sensitive cultural or location information, including information concerning Indigenous collections, warrants particular care.

## Backups and data integrity

Whatever the collection size, institutions should:

1. Keep regular, independently recoverable backups of their catalogue Sheet and associated Drive files.
2. Restrict access to the underlying Sheet and media folders as well as to the web app.
3. Perform procedural actions such as movements and deaccessioning through the web app; direct Sheet edits may bypass application validation and audit history.
4. Test new software versions on a copy of their data before updating a working deployment.
5. Periodically confirm that catalogue records can be exported and that media and documentation can be restored.

## Capacity-testing roadmap

Before a stable `v1.0` release, the project aims to test realistic collections of **5,000 catalogue records** with associated media metadata, authorities, exhibition assignments, and edit histories. Results should include startup time, record-opening time, search responsiveness, and concurrent-user behaviour. Until such results are published, **3,000 records remains conservative planning guidance, not a validated performance ceiling**.

For installation questions or help assessing a larger collection, see [Installation & Support](INSTALLATION_AND_SUPPORT.md).
