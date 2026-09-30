# Cataloguing Basics

Open Museum CMS is designed so that most staff can catalogue a record without understanding the database structure.

## A simple rule: describe the object first

For most records, start with:

1. **Preferred Title** — a clear human-readable title.
2. **Object Type** — the most specific useful name for what it is.
3. **Classification** — one or more broad groupings.
4. **Date / Period** — structured where possible.
5. **Maker / Creator** — preferably linked through People & Organisations when known.
6. **Place** — use place relationships where the role is known.
7. **Materials** and **Techniques**.
8. **Measurements**.
9. **Description** — what is physically present.
10. **Curatorial / Research Comments** — interpretation, uncertainty, comparison, or research notes.
11. **Location**, **media**, and accession information.

Do not fill a field simply because it exists.

## Classification vs Object Type

Classification is broad and may repeat:

```text
Furniture
Decorative Arts
```

Object Type should be more specific:

```text
armchair
```

Another example:

```text
Classification: Tools & Equipment | Agricultural Objects
Object Type: sickle
```

This separation makes both browsing and specialist analysis more useful.

## Analysis profiles

When the record's Classification or Collection Area matches an Analysis Profile, the **Analysis** tab offers extra fields.

Examples:

- `Furniture` → Historic Furniture
- `Textiles` → Textiles & Costume
- `Agricultural Objects` → Agriculture & Rural Life
- `Tools & Equipment` → Historic Tools & Implements
- `Sculpture` → Sculpture
- `Natural History` Collection Area → Natural History

These fields are optional. Use them when they add real analytical value.

## People and roles

Prefer role-specific links over squeezing every name into a single maker field.

Examples:

```text
Made by
Designed by
Manufactured by
Photographed by
Donated by
Previous owner
Collected by
Depicted person
```

The legacy/free-text Maker/Creator field is still useful when migrating older catalogues, but structured relationships are better for new cataloguing.

## Places and place roles

A single object may relate to several places for different reasons:

```text
Made / created in
Used in
Found in
Excavated at
Collected in
Acquired in
Associated with
Depicts / represents
```

Do not collapse these into one vague Place of Origin when the distinction is known.

## Uncertainty

Do not force certainty that the evidence does not support.

Use qualifiers such as:

- Certain
- Probable
- Possible
- Uncertain
- Unknown

Preserve historic/verbatim labels and catalogue wording when useful, even after adding a standardised interpretation.

## Indigenous and culturally sensitive material

The software's generic terminology is never a substitute for community knowledge or protocols.

- Do not infer cultural identity from appearance alone.
- Prefer community-preferred names and terminology.
- Record consultation/source when possible.
- Use access/display guidance and sensitivity fields where appropriate.
- Treat repatriation/return status as institutional documentation, not as a software judgement.
