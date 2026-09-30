# Releasing Open Museum CMS

1. Update `CMS.VERSION` in `src/Code.gs`.
2. Update `CITATION.cff` version/date.
3. Update `CHANGELOG.md`.
4. Run `python scripts/check_repository.py`.
5. Test installation against a copy of the starter workbook.
6. Test mobile and desktop interfaces.
7. Commit and tag, e.g.:

```bash
git tag -a v0.2.0-alpha -m "Open Museum CMS v0.2.0-alpha"
git push origin main --tags
```

8. Create a GitHub Release from the tag.

For schema changes, confirm `setupOpenMuseumCms()` remains idempotent and document any manual migration requirements.
