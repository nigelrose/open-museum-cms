# Publishing This Project on GitHub

If you are the upstream maintainer:

1. Create an empty GitHub repository named `open-museum-cms`.
2. Download/extract the repository bundle.
3. From the extracted folder:

```bash
git init
git add .
git commit -m "Initial public Open Museum CMS alpha"
git branch -M main
git remote add origin <YOUR-GITHUB-REPOSITORY-URL>
git push -u origin main
```

Or upload the files using GitHub's web interface. Keep the directory structure intact.

## Recommended repository settings

- Description: `Open-source Google Workspace collections management for small museums, historical societies, archives, and community heritage organisations.`
- Topics: `museum`, `collections-management`, `google-apps-script`, `google-sheets`, `archives`, `heritage`, `open-source`, `historical-society`
- Enable Issues and Discussions if you want community feedback.
- Mark the repository as a **Template repository** once the first release is tested.
- Add branch protection to `main` when outside contributors begin submitting pull requests.

## First release

Create a GitHub Release tagged:

```text
v0.2.0-alpha
```

Attach the release ZIP if desired, and paste the corresponding `CHANGELOG.md` section into the release notes.

## Do not upload

- your institution's real catalogue Sheet;
- `.clasp.json`;
- Script Properties;
- Drive folder IDs;
- user lists;
- deployment URLs unless deliberately public;
- donor or restricted collection data.
