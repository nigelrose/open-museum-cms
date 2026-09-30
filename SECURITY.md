# Security Policy

Open Museum CMS stores potentially sensitive collection, donor, location, accession, and internal administrative information.

## Do not report sensitive vulnerabilities publicly

For a security issue that could expose data, authentication, permissions, or institutional files, contact **Nigel Klemenčič-Puglisevich** at **klemencicpuglisevich@gmail.com** before opening a public GitHub issue.

## Deployment responsibilities

Each institution is responsible for:

- Google Workspace account security and MFA policies;
- permissions on the underlying Google Sheet and Drive/Shared Drive folders;
- deciding whether to restrict the web app to a Workspace domain;
- managing the `Users` table and role assignments;
- organisational backup, retention, privacy, and incident-response policies;
- reviewing sensitive cultural, donor, personal, archaeological, or location information before public release.

Never commit API keys, OAuth secrets, service-account JSON, private Drive URLs, spreadsheet IDs, or deployment URLs that you do not intend to disclose.
