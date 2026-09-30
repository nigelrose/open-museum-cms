# Installation & Support

**Open Museum CMS** · Installation guidance, personal assistance, and voluntary project support  
**Created and maintained by Nigel Klemenčič-Puglisevich**

Open Museum CMS is designed to help small museums, historical societies, community archives, and other heritage organisations manage their collections using Google Workspace. The software is free and open source under the [GPL-3.0-or-later licence](../LICENSE). You can install and use it yourself; **payment or a donation is not required**.

If your organisation would appreciate assistance setting things up, adapting the terminology to its collections, importing an existing catalogue, or training staff, you are welcome to contact me.

## Install Open Museum CMS yourself

Most organisations can begin without dedicated IT support. The basic process is:

1. **Prepare a Google account and storage.** Google Workspace is recommended, particularly if your institution has a Shared Drive, but review which Google deployment and access options are available to your account.
2. **Create your catalogue.** Upload [`starter/Open_Museum_CMS_Starter.xlsx`](../starter/Open_Museum_CMS_Starter.xlsx) to Google Drive and convert it to Google Sheets, or create a blank Google Sheet.
3. **Add the software.** In that Sheet, open **Extensions → Apps Script**. Add the contents of [`src/Code.gs`](../src/Code.gs) and [`src/Index.html`](../src/Index.html), and use the supplied [`src/appsscript.json`](../src/appsscript.json) manifest. You may need to enable the manifest in Apps Script's project settings.
4. **Run the initial setup.** Save the project, select `setupOpenMuseumCms` from the function menu, click **Run**, and approve the requested Google permissions. If Google cannot identify the setup account automatically, add an Administrator in the Sheet's `Users` tab.
5. **Set up media storage.** Create organisational folders for **Assets** and **Accession Documentation**. Configure `MEDIA_ROOT_FOLDER_ID` and `ACCESSION_DOCS_FOLDER_ID` in Apps Script's **Project Settings → Script properties**, or use the CMS Setup screen after creating your Test deployment. Add the **Drive API** under Apps Script **Services** if needed.
6. **Test the web app.** Choose **Deploy → Test deployments → Web app** and open its `/dev` URL. As Administrator, use **Setup** to enter your institution's name, colours, logo, users, controlled vocabularies, and optional analytical tools.
7. **Check your workflows.** Test catalogue creation and editing, Advanced Search, media upload, location tracking, accessions, and user permissions with **sample records**. Establish your own backup procedure before entering irreplaceable information.
8. **Deploy for staff.** Once testing is satisfactory, choose **Deploy → New deployment → Web app** and select the most restrictive suitable Google access settings. A domain restriction and the CMS `Users` table provide additional safeguards but do not replace Google account and Drive permissions.

For illustrated or more technical guidance, consult [Easy Setup](EASY_SETUP.md), [Installation](INSTALLATION.md), and [Configuration](CONFIGURATION.md). For collection-size considerations, read [Limits, Capacity & Suitability](LIMITS.md).

> [!NOTE]
> This is **alpha software**. Test with a copy of your data, keep independent backups of both Google Sheets and Drive media, and assess the suitability of the system for your institution's privacy, legal, ethical, and collections-management responsibilities.

## Would you like help installing it?

I welcome enquiries from museums and heritage organisations, especially small and volunteer-run institutions. Possible assistance includes initial installation and configuration; migration and cleaning of existing catalogues; development of locally appropriate controlled vocabularies and analytical profiles; setting up users, permissions, and Drive storage; training staff and volunteers; and reviewing a proposed workflow or future extension.

**Get in touch with Nigel Klemenčič-Puglisevich:**

- **Email (preferred for support enquiries):** [klemencicpuglisevich@gmail.com](mailto:klemencicpuglisevich@gmail.com)
- **Instagram:** [@prositministru](https://www.instagram.com/prositministru/)

When contacting me, it helps to mention your organisation, approximate number of catalogue records, whether you already use Google Workspace, what kind of collections you manage, and whether you are interested in remote or in-person assistance. Please **do not email confidential catalogue exports, donor records, passwords, or sensitive cultural information** without first agreeing on an appropriate way to share them.

### Fees for consultation or installation

I am happy to discuss your project and what level of support it needs. **Depending on the size of your institution, the complexity and scope of the work, and whether in-person assistance is requested, consultation, installation, training, travel, or other professional fees may apply.**

Please contact me for details. Any proposed paid work, including anticipated expenses and deliverables, should be discussed and agreed in advance. Organisations are always free to install the software themselves, without purchasing services.

Community contributions and GitHub issues are welcome, but please note that the open-source project does **not** currently provide guaranteed response times, contractual maintenance, or emergency support by default. Any separately arranged support should be defined in its own agreement.

## Help support the project

Open Museum CMS is made available as free, open-source software. If it benefits your institution, **voluntary contributions are appreciated** and help support continued development, bug fixes, documentation, accessibility improvements, and future features for community heritage organisations.

You can support the project through either of the following:

| Method | Details |
| --- | --- |
| **Interac e-Transfer (Canada)** | Send to **klemencicpuglisevich@gmail.com** |
| **PayPal** | [paypal.me/nrhkp](https://paypal.me/nrhkp) |

Contributions go to **Nigel Klemenčič-Puglisevich**, the project's creator and maintainer; they are not paid to an affiliated museum or charity. **No charitable tax receipt is offered**, and contributions should not be assumed to be tax-deductible. Donations are optional and do not buy preferential access, guaranteed support, or influence over development priorities. Please use a secure payment method and verify recipient details before sending funds.

If a financial contribution is not feasible, you can still support the project by reporting bugs, suggesting improvements, improving the documentation, or sharing the software with another heritage organisation. See [Contributing](../CONTRIBUTING.md).

---

**Open Museum CMS** · Open-source collections management for community heritage organisations  
**Author and maintainer:** Nigel Klemenčič-Puglisevich  
**Contact:** [klemencicpuglisevich@gmail.com](mailto:klemencicpuglisevich@gmail.com)
