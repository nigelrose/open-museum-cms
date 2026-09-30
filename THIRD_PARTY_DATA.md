# Third-Party Data and Catalogue References

Open Museum CMS itself is GPL-3.0-or-later. Third-party catalogues, datasets, vocabularies, and images are governed by their own terms.

## The Metropolitan Museum of Art Open Access

The repository documentation and optional vocabulary-building script are designed to work with The Met's Open Access dataset. The Met states that the select Open Access datasets are released under **Creative Commons Zero (CC0)** to the extent possible under law.

Open Museum CMS does not redistribute the full `MetObjects.csv` dataset. Users download the current file directly from The Met and may use `scripts/build_met_vocabulary.py` to derive local candidate vocabularies.

Source:
- https://metmuseum.github.io/
- https://github.com/metmuseum/openaccess

The Metropolitan Museum of Art does not endorse Open Museum CMS.

## British Museum Collection Online

The British Museum public catalogue was reviewed as a catalogue/search model. This project does **not** include a wholesale scrape or mirror of British Museum controlled vocabulary or website content.

The British Museum states that not all website content is under Creative Commons and directs users seeking text/data mining use to obtain permission. Accordingly, Open Museum CMS uses only generic museum terminology and structural observations rather than redistributing the British Museum database.

Source:
- https://www.britishmuseum.org/collection/collection-online/guide
- https://www.britishmuseum.org/terms-use/copyright-and-permissions

The British Museum does not endorse Open Museum CMS.

## Getty / CDWA / CCO

CDWA/CCO-style distinctions between Classification, Object/Work Type, creators/roles, materials/techniques, subjects, places, and textual references informed the data architecture. This repository does not bundle the Getty Art & Architecture Thesaurus or other Getty vocabulary datasets.

Source:
- https://www.getty.edu/publications/categories-description-works-art/

The J. Paul Getty Trust does not endorse Open Museum CMS.
