# Exhibitions and Display Planning

Open Museum CMS supports both permanent and temporary exhibit planning.

## Permanent exhibit areas

Set `PermanentExhibitAreas` in **Setup → Institution & branding** (or in the `Settings` sheet), separated by `|` or line breaks. Saving through Setup seeds missing permanent exhibit records automatically; if you edit the Sheet directly, rerun `setupOpenMuseumCms()`.

## Exhibit item states

Typical selection progression:

```text
Candidate → Shortlisted → Selected → Installed → Removed
```

Exhibit assignments preserve installed/deinstalled dates and can become exhibition history.

## Direct Sheet entry

Advanced users can add rows to `Exhibition_Items`, but IDs must be unique and the `ExhibitionID` / `RecordID` must exist. Prefer the web app for routine work so status synchronisation and audit behaviour are applied consistently.
