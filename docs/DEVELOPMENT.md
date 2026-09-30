# Development with GitHub and clasp

Google's `clasp` command-line tool lets you keep Apps Script source in Git instead of editing large files only in the browser.

## Install clasp

```bash
npm install -g @google/clasp
clasp login
```

## Connect a local clone to an Apps Script project

Clone your GitHub repository and copy `.clasp.json.example` to `.clasp.json`:

```bash
cp .clasp.json.example .clasp.json
```

Replace the placeholder `scriptId` with the Apps Script project ID from **Project Settings**. `.clasp.json` is ignored by Git because it is deployment-specific.

Then:

```bash
clasp push
```

To pull changes made in the Apps Script editor:

```bash
clasp pull
```

## Suggested Git workflow

```bash
git checkout -b feature/example
# edit and test
python scripts/check_repository.py
clasp push
git add .
git commit -m "Add example feature"
git push -u origin feature/example
```

Use a Test deployment before updating production.

## Branches

A simple model works well:

- `main` — releasable foundation
- feature/fix branches — development

Institutions maintaining local customisations may keep those in a separate private repository or fork.
