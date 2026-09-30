# Upgrading

The alpha project currently uses an idempotent setup/upgrade entry point:

```text
setupOpenMuseumCms
```

For an update:

1. Export/back up the Google Sheet.
2. Save a copy/version of the Apps Script project if appropriate.
3. Replace `src/Code.gs`, `src/Index.html`, and (when changed) `src/appsscript.json`.
4. Save.
5. Run `setupOpenMuseumCms()` again.
6. Test using a **Test deployment**.
7. Review the in-app **Setup** page, particularly after releases that add new vocabularies or analysis profiles.
8. Update the existing production deployment to a new version.

Setup functions are designed to add missing schema rather than delete data. Alpha releases can still change quickly; read the release notes and test against a copy whenever practical.

A formal sequential schema-migration runner is planned before 1.0.
