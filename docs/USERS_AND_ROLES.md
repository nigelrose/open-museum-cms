# Users and Roles

Access has two layers:

1. **Google authentication / optional domain restriction**
2. the Open Museum CMS **Users** table

A person must be active in the `Users` sheet to use the CMS even if they have an account in the permitted Workspace domain.

## Roles

### Administrator
Full application permissions, including delete, deaccession, vocabulary, and administration-sensitive actions.

### Curator
Broad collections and curatorial permissions, including deaccession workflows, but not hard/administrative delete permissions.

### Collections
Catalogue, move, review, upload media, manage locations, accessions, authorities, and exhibitions.

### Volunteer
Limited edit/review/media permissions.

### ReadOnly
View/search only.

## Adding a user

The easiest route is **Setup → Users & roles → Add user**. Advanced administrators may also add a row directly to `Users`:

```text
Email | DisplayName | Role | Active | Notes
```

Use the person's actual Google account email. For restricted organisational deployments, this will normally be an account in the institution's Workspace domain.

## Removing access

Set `Active` to `FALSE`. Avoid deleting historical user rows if they are referenced by audit history.
