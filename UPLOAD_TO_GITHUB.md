# Uploading Open Museum CMS to Your New GitHub Repository

You already created the empty `open-museum-cms` repository. The easiest reliable route is to use GitHub Desktop or Git from a computer, because the repository contains nested folders such as `.github/`, `docs/`, `src/`, and `starter/`.

## Option A — Git command line

1. Download and extract the complete Open Museum CMS repository bundle.
2. Open a terminal inside the extracted `open-museum-cms` folder.
3. Run:

```bash
git init
git add .
git commit -m "Initial public Open Museum CMS alpha"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Use the repository URL GitHub gives you, for example an HTTPS or SSH URL.

## Option B — GitHub Desktop

1. Extract the bundle.
2. In GitHub Desktop choose **File → Add local repository** and select the extracted folder.
3. If prompted, create the repository metadata locally.
4. Commit all files with the message `Initial public Open Museum CMS alpha`.
5. Publish/push to the empty `open-museum-cms` repository you already created.

## After the first push

In GitHub repository settings:

- add the description: `Open-source Google Workspace collections management for small museums, historical societies, archives, and community heritage organisations.`
- add topics such as `museum`, `collections-management`, `google-apps-script`, `google-sheets`, `archives`, `heritage`, `historical-society`, and `open-source`;
- enable **Issues**;
- optionally enable **Discussions**;
- once you are satisfied that the alpha installation works from the public files, consider enabling **Template repository** so another museum can choose **Use this template**;
- create the first GitHub Release from tag `v0.2.0-alpha`.

## Important

Do not commit your Apps Script `.clasp.json`, Script Properties, user list, Drive folder IDs, deployment URLs, or private collection data.
