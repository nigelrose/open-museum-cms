/**
 * Open Museum CMS
 * A Google Workspace collections-management foundation for small museums,
 * historical societies, archives, and community heritage organisations.
 *
 * Copyright (C) 2026 Nigel Klemenčič-Puglisevich
 * Contact: klemencicpuglisevich@gmail.com
 * Instagram: https://www.instagram.com/prositministru/
 *
 * Licensed under the GNU General Public License v3.0 or later.
 * See LICENSE in the project repository.
 */

const CMS = Object.freeze({
  VERSION: '0.2.0-alpha',
  SCHEMA_VERSION: 2,
  TERM_SEPARATOR: ' | ',
  MEASUREMENT_UNITS: {
    Weight: 'g', Length: 'mm', Width: 'mm', Height: 'mm', Depth: 'mm', Thickness: 'mm', Diameter: 'mm'
  },
  DATE_QUALIFIERS: ['Circa','Approximately','Before','After','Uncertain','Between'],
  VOCABULARY_SEED: {
    RecordType: ['Object / Collection Item','Archival Unit','Digital Record','Unresolved'],
    CatalogueStatus: ['Imported – needs review','In progress','Needs specialist review','Reviewed','Inactive'],
    CollectionArea: ['Archaeology & Antiquities','Archives & Documents','Art & Decorative Arts','Community & Social History','Costume & Textiles','Military & Service','Models & Miniatures','Natural History','Numismatics','Philately','Photography','Religious Life','Unclassified'],
    LocationCheckedStatus: ['Not yet checked','Yes','No'],
    DocumentationStatus: ['Not assessed','Documentation located','Partial documentation','No documentation located','Loan documentation','Review required','Unknown'],
    PhotoStatus: ['Not assessed','Source image','Mapping needed','Linked','Photography required','No photograph required'],
    ReviewPriority: ['High','Normal','Low'],
    PublicAccessStatus: ['Internal only','Approved for public access','Restricted'],
    LocationType: ['Building','Room','Case','Cabinet','Shelf','Drawer','Box','Exhibit','Off-site','Temporary','Other'],
    ReviewType: ['Catalogue review','Specialist review','Location verification','Documentation review','Rights review','Condition review','Other'],
    DateQualifier: ['Circa','Approximately','Before','After','Uncertain','Between'],

    // Broad, repeatable classifications. These are intentionally institution-neutral.
    Classification: [
      'Architecture','Archaeological Material','Arms & Armour','Art','Basketry','Books & Bound Materials',
      'Ceramics','Clothing & Costume','Communication Objects','Containers','Decorative Arts','Documents & Records',
      'Drawings','Furniture','Furnishings','Glass','Indigenous Material Culture','Jewellery & Personal Adornment',
      'Metalwork','Military & Service Objects','Musical Instruments','Natural History Specimens','Numismatic Objects',
      'Paintings','Photographic Objects','Photography','Prints','Religious & Ceremonial Objects','Sculpture','Textiles',
      'Tools & Equipment','Agricultural Objects','Toys & Games','Transportation Objects','Scientific Instruments',
      'Household & Domestic Objects','Food & Beverage Objects','Medical & Health Objects','Manuscripts','Mosaics & Architectural Decoration','Unclassified'
    ],

    // Curated starter terms informed by major museum catalogues. Institutions can freely add local terms.
    ObjectType: [
      'adze','album','amulet','anvil','apron','armchair','arrow','axe','awl','badge','bag','basket','bead','bench','blade',
      'blanket','book','bottle','bowl','box','brace','bracelet','brooch','buckle','bust','cabinet','candlestick','cap','carpet',
      'case','casket','chair','chalice','chest','chisel','coat','coin','comb','container','cup','cushion','dagger','dish','document',
      'door','drawing','dress','drill','ewer','fan','figurine','file','flask','fragment','frame','garment','goblet','hammer','harrow',
      'hat','hoe','hook','jar','jewellery','jug','knife','lamp','oil lamp','lantern','letter','level','lock','map','mask','medal',
      'medallion','model','mould','necklace','painting','panel','photograph','pitchfork','plane','plate','plough','plow','poster',
      'pot','print','programme','rake','rasp','relief','ring','robe','sculpture','screen','scythe','seal','shirt','shoe','sickle',
      'spindle','spoon','stamp','statue','stool','table','tablet','textile','tile','tool','tray','vase','vessel','waistcoat','weapon',
      'weaving','wrench','yoke','seed drill','cultivator','churn','flail','grain measure','pruning hook','harness','mallet','saw',
      'auger','tongs','pincers','pliers','spanner','screwdriver','rule','square','divider','compass','vise','clamp','basketry vessel',
      'shield','sword','helmet','drinking horn','headrest','tapestry','sampler','altarpiece','fresco','mosaic','engraving','etching',
      'watercolour','hanging scroll','scroll','manuscript','cartes-de-visite','cabinet card','postcard','negative','transparency',
      'herbarium sheet','fossil','mineral specimen','shell specimen','taxidermy specimen','specimen jar','archaeological sherd'
    ],
    Place: [],
    Culture: ['Unknown','Not recorded'],
    Period: ['Palaeolithic','Mesolithic','Neolithic','Chalcolithic','Bronze Age','Iron Age','Classical','Hellenistic','Roman','Late Antique','Byzantine','Medieval','Renaissance','Early Modern','18th century','19th century','20th century','Contemporary','Unknown'],
    SchoolStyle: ['Renaissance','Baroque','Rococo','Neoclassical','Romantic','Realist','Impressionist','Post-Impressionist','Arts and Crafts','Art Nouveau','Art Deco','Modernist','Cubist','Expressionist','Surrealist','Abstract','Pop Art','Minimalist','Contemporary','Unknown'],
    Material: [
      'Aluminium','Ash','Bamboo','Bark','Beech','Birch','Bone','Brass','Bronze','Canvas','Cardboard','Cane','Cedar','Ceramic','Charcoal','Cherry wood','Clay','Copper','Cotton','Earthenware',
      'Enamel','Fibre','Flax','Glass','Gold','Gold leaf','Gouache','Graphite','Hemp','Horn','Ink','Iron','Ivory','Jute','Leather','Limestone','Linen','Mahogany','Maple','Marble','Metal','Nylon','Oak','Oil paint','Paper',
      'Parchment','Pastel','Photographic emulsion','Photographic paper','Pigment','Pine','Plaster','Plastic','Polyester','Porcelain','Rattan','Rayon','Resin','Rosewood','Rubber',
      'Shell','Silk','Silver','Steel','Stone','Stoneware','Straw','Tempera','Textile','Tin','Vellum','Walnut','Watercolour','Wax','Wood','Wool','Wrought iron','Unknown'
    ],
    Technique: [
      'Albumen printing','Appliqué','Block printing','Braiding','Caning','Carving','Casting','Coiling','Collage','Crocheting','Dovetailing',
      'Drawing','Dyeing','Embossing','Embroidery','Enamelling','Engraving','Etching','Felting','Firing','Forging','Gelatin silver printing',
      'Gilding','Glazing','Hand building','Intaglio printing','Joinery','Knitting','Lace-making','Lacquering','Letterpress printing',
      'Lithography','Machining','Mortise and tenon','Moulding','Mould-made','Offset lithography','Oil painting','Painting','Pastel drawing','Photography','Plaiting',
      'Printing','Quilting','Relief printing','Screen printing','Sewing','Slip casting','Slip decoration','Soldering','Stamping','Tapestry weave','Tempera painting',
      'Turning','Twining','Upholstery','Watercolour painting','Weaving','Welding','Wheel throwing','Woodworking','Unknown'
    ],
    LifecycleStatus: ['Active','Deaccessioned','Deleted'],
    PartyType: ['Person','Organisation','Family','Community / Group','Unknown'],
    RoleType: ['Maker / Creator','Artist','Author','Designer','Manufacturer','Printer','Photographer','Donor','Bequeather','Depositor','Previous Owner','Collector','Subject','Publisher','Issuing Authority','Signer','Distributor','Retailer','User / Owner','Associated Person / Organisation','Other'],
    AttributionStatus: ['Documented','Attributed','Probable','Possible','Uncertain','Unknown'],
    AcquisitionMethod: ['Gift','Bequest','Purchase','Transfer','Exchange','Loan','Found in collection','Unknown','Other'],
    LegalDocumentStatus: ['Not assessed','None located','Pending','Complete','Incomplete','Missing','Not applicable'],
    OwnershipStatus: ['Not assessed','Museum-owned','Museum title documented','On deposit','Loan','Custody only','Unclear / review required','Unknown','Other'],
    ExhibitionType: ['Permanent','Temporary'],
    ExhibitionStatus: ['Concept','Planning','Shortlisting','Approved','Installed','Open','Closed','Deinstalled','Cancelled','Archived'],
    SelectionStatus: ['Candidate','Shortlisted','Selected','Installed','Removed'],
    ExhibitPriority: ['High','Medium','Low'],
    InterpretiveRole: ['Anchor object','Supporting object','Context object','Archival document','Photograph / image','Reproduction','Interactive / media','Other'],
    DeaccessionReason: ['Outside collecting mandate','Duplicate / redundant','Deteriorated beyond reasonable conservation','Hazardous material','Return / repatriation','Transfer to another institution','Legal / ownership issue','Loss / destruction','Other'],
    DispositionMethod: ['Return to donor / source','Transfer to another institution','Repatriation','Sale','Destruction','Retained as teaching / non-collection material','Lost / destroyed','Other'],
    MediaType: ['Photograph','Scan','Document','Audio','Video','3D model','Other'],
    MovementType: ['Relocation','Exhibition','Loan','Photography','Research','Conservation','Temporary location','Return','Other'],

    // Analysis-profile option lists.
    ArtWorkType: ['Painting','Drawing','Print','Photograph','Collage','Mixed media','Work on paper','Other'],
    ArtSupport: ['Canvas','Paper','Panel','Board','Wall','Textile','Metal','Glass','Other'],
    Orientation: ['Portrait','Landscape','Square','Circular','Irregular','Not applicable','Unknown'],
    SculptureType: ['Freestanding','Relief','Bust','Figure','Statuette','Architectural sculpture','Assemblage','Other'],
    SculptureProcess: ['Carved','Cast','Modelled','Constructed','Forged','Assembled','Mixed process','Unknown'],
    FurnitureType: ['Chair','Armchair','Stool','Bench','Table','Desk','Chest','Cabinet','Cupboard','Bed','Shelf','Screen','Other'],
    JoineryType: ['Mortise and tenon','Dovetail','Dowelled','Nailed','Screwed','Pegged','Glued','Jointed – other','Unknown'],
    TextileType: ['Garment','Household textile','Furnishing textile','Rug / carpet','Lace','Embroidery','Basketry / fibre work','Sample / fragment','Other'],
    TextileConstruction: ['Woven','Knitted','Crocheted','Felted','Twined','Coiled','Plaited','Lace-made','Non-woven','Other'],
    ToolPowerSource: ['Hand','Human-powered mechanical','Animal-powered','Water-powered','Steam-powered','Electric','Fuel-powered','Other / unknown'],
    ToolFunctionalCategory: ['Cutting','Shaping','Striking','Boring / drilling','Holding / gripping','Measuring / marking','Fastening','Harvesting','Soil preparation','Processing','Other'],
    AgriculturalActivity: ['Soil preparation','Sowing / planting','Cultivation','Harvesting','Threshing / processing','Dairy','Animal husbandry','Forestry','Horticulture','Transport','Other'],
    IndigenousSensitivity: ['Open','Community consultation recommended','Restricted','Ceremonially sensitive','Secret / sacred','Human remains / funerary','Unknown / review required'],
    RepatriationStatus: ['Not assessed','No active request','Research / provenance review','Consultation underway','Return / repatriation requested','Returned / repatriated','Other'],
    NaturalHistoryType: ['Zoology','Botany','Palaeontology','Geology / Mineralogy','Other'],
    ArchaeologyCompleteness: ['Complete','Near complete','Partial','Fragment','Multiple fragments','Unknown'],
    CeramicGlassForming: ['Hand built','Wheel thrown','Mould made','Blown','Cast','Pressed','Slumped','Other / unknown']
  },
  KEYS: {
    Records: 'RecordID', Accessions: 'AccessionID', Archive_Details: 'ArchiveDetailID',
    Coin_Details: 'CoinDetailID', Locations: 'LocationID', Movements: 'MovementID',
    Media: 'MediaID', Reviews: 'ReviewID', Measurements: 'MeasurementID',
    People_Orgs: 'PartyID', Record_Roles: 'RecordRoleID', Exhibitions: 'ExhibitionID',
    Exhibition_Items: 'ExhibitionItemID', Deaccessions: 'DeaccessionID',
    Record_Edit_History: 'EditHistoryID', Subjects: 'SubjectID', Record_Subjects: 'RecordSubjectID',
    Places: 'PlaceID', Record_Places: 'RecordPlaceID', Inscriptions_Marks: 'InscriptionID',
    Bibliography: 'ReferenceID', Record_References: 'RecordReferenceID',
    Natural_History_Details: 'NaturalHistoryID',
    Analysis_Profiles: 'ProfileID', Analysis_Fields: 'FieldID', Record_Analysis_Profiles: 'RecordAnalysisProfileID',
    Analysis_Values: 'AnalysisValueID', Users: 'Email', Audit_Log: 'AuditID'
  },
  ROLES: {
    Administrator: ['read','create','edit','move','review','media','locations','vocabulary','accessions','authorities','exhibits','deaccession','delete','admin'],
    Curator: ['read','create','edit','move','review','media','locations','vocabulary','accessions','authorities','exhibits','deaccession'],
    Collections: ['read','create','edit','move','review','media','locations','vocabulary','accessions','authorities','exhibits'],
    Volunteer: ['read','edit','review','media'],
    ReadOnly: ['read']
  }
});

const CMS_V04 = Object.freeze({
  SUBJECT_SEED: [
    'Migration','Immigration','Emigration','Community identity','National identity','Community organisations','Clubs and associations',
    'Religion','Religious life','Festivals and celebrations','Language','Education','Work and labour','Domestic life','Foodways','Family',
    'Childhood','Gender','Military service','War and conflict','Politics and government','Sport','Music','Dance','Art','Architecture','Craft',
    'Tourism','Maritime life','Agriculture','Commerce','Commemoration','Heritage and memory'
  ],
  VOCABULARY_SEED: {
    Certainty: ['Certain','Probable','Possible','Uncertain','Unknown'],
    IdentificationCertainty: ['Certain','Probable','Possible','Uncertain','Unknown'],
    PlaceType: ['Country','Region / Province','Island','City / Town / Village','Neighbourhood','Site','Building','Institution','Geographic feature','Other'],
    PlaceRole: ['Made / created in','Manufactured in','Published in','Printed in','Used in','Found in','Excavated at','Collected in','Acquired in','Associated with','Depicts / represents','Other'],
    InscriptionType: ['Inscription','Maker’s mark','Hallmark','Label','Stamp','Seal','Signature','Date mark','Ownership mark','Graffiti','Other'],
    ReferenceRole: ['Identification','Dating','Provenance','Publication','Exhibition','Conservation','Interpretation','Comparative material','General reference','Other'],
    DisplayStatus: ['Not on display','Scheduled for display','On display'],
    RoleType: ['Commissioned by','Engraver','Sculptor','Architect','Editor','Compiler','Recipient','Sender','Depicted Person','Interviewer','Interviewee','Performer','Organisation represented','Excavator','Finder','Conservator']
  }
});

const ANALYSIS_PROFILE_SEED = Object.freeze([
  {id:'ANP-ART',name:'Art & Works on Paper',description:'Compact descriptive and technical fields for paintings, drawings, prints, photographs, and related works.',triggerField:'Classifications',triggerValues:['Art','Paintings','Drawings','Prints'],guidance:'Use only fields that add useful analytical information; ordinary catalogue fields remain authoritative.',fields:[
    ['WorkType','Work type','select','ArtWorkType',''],['Support','Support / substrate','select','ArtSupport',''],['StyleMovement','Style / movement','text','',''],['SchoolWorkshop','School / workshop','text','',''],['EditionState','Edition / state','text','',''],['Orientation','Orientation','select','Orientation',''],['SignatureMark','Signature / artist mark','text','','']
  ]},
  {id:'ANP-SCULPTURE',name:'Sculpture',description:'Additional fields for sculpture and three-dimensional fine art.',triggerField:'Classifications',triggerValues:['Sculpture'],guidance:'Record process and physical presentation without duplicating Materials, Techniques, or Measurements.',fields:[
    ['SculptureType','Sculpture type','select','SculptureType',''],['Process','Process','select','SculptureProcess',''],['BaseMount','Base / mount','text','',''],['SurfaceFinish','Surface / finish','text','',''],['ComponentCount','Component count','number','',''],['CastEdition','Cast / edition number','text','','']
  ]},
  {id:'ANP-FURNITURE',name:'Historic Furniture',description:'Construction and furnishing details for furniture.',triggerField:'Classifications',triggerValues:['Furniture','Furnishings'],guidance:'Use this for construction analysis; use Materials and Techniques for controlled material/process terminology.',fields:[
    ['FurnitureType','Furniture type','select','FurnitureType',''],['PrimaryWood','Primary wood / species','text','',''],['Construction','Construction','textarea','',''],['Joinery','Joinery','select','JoineryType',''],['Upholstery','Upholstery','text','',''],['Finish','Finish','text','',''],['Hardware','Hardware / fittings','text','',''],['SetRelationship','Set / part relationship','text','','']
  ]},
  {id:'ANP-TEXTILES',name:'Textiles & Costume',description:'Fibre, construction, and decoration fields for textiles and clothing.',triggerField:'Classifications',triggerValues:['Textiles','Clothing & Costume'],guidance:'Keep community-specific names in the preferred Object Type and use this profile for technical description.',fields:[
    ['TextileType','Textile type','select','TextileType',''],['FibreDetail','Fibre / material detail','text','',''],['Construction','Construction','select','TextileConstruction',''],['WeaveStructure','Weave / structure','text','',''],['Decoration','Decoration technique','text','',''],['PatternMotif','Pattern / motif','text','',''],['GarmentComponent','Garment / component','text','','']
  ]},
  {id:'ANP-TOOLS',name:'Historic Tools & Implements',description:'Functional and mechanical analysis for hand tools and implements.',triggerField:'Classifications',triggerValues:['Tools & Equipment'],guidance:'Use locally appropriate tool names in Object Type; these fields support functional comparison.',fields:[
    ['FunctionalCategory','Functional category','select','ToolFunctionalCategory',''],['TradeOccupation','Trade / occupation','text','',''],['PowerSource','Power source','select','ToolPowerSource',''],['WorkingEnd','Working end','text','',''],['HandleGrip','Handle / grip','text','',''],['Mechanism','Mechanism','text','',''],['MakerModel','Maker / model','text','',''],['PatentSerial','Patent / serial number','text','','']
  ]},
  {id:'ANP-AGRICULTURE',name:'Agriculture & Rural Life',description:'Additional fields for agricultural implements and rural technology.',triggerField:'Classifications',triggerValues:['Agricultural Objects'],guidance:'Designed for practical cataloguing of rural-history collections without imposing a specialist thesaurus.',fields:[
    ['ImplementType','Implement type','text','',''],['Activity','Agricultural activity','select','AgriculturalActivity',''],['PowerDraft','Power / draft','select','ToolPowerSource',''],['CropLivestock','Crop / livestock association','text','',''],['WorkingPart','Working part','text','',''],['RegionalName','Regional / local name','text','',''],['MakerModel','Maker / model','text','',''],['PatentSerial','Patent / serial number','text','','']
  ]},
  {id:'ANP-INDIGENOUS',name:'Indigenous Cultural Context',description:'Optional community-informed context, cultural protocol, and sensitivity fields.',triggerField:'Classifications',triggerValues:['Indigenous Material Culture'],guidance:'Appears when staff intentionally classify a record as Indigenous Material Culture. Do not infer cultural identity from appearance. Prefer community-preferred terminology and record consultation/source. This profile is not a substitute for community consultation.',fields:[
    ['CommunityCulture','Community / culture preferred name','text','',''],['AttributionCertainty','Attribution certainty','select','Certainty',''],['IndigenousObjectName','Indigenous-language object name','text','',''],['Language','Language','text','',''],['CommunityUseMeaning','Community use / meaning','textarea','',''],['CulturalSensitivity','Cultural sensitivity','select','IndigenousSensitivity',''],['AccessDisplayGuidance','Access / display guidance','textarea','',''],['ConsultationSource','Community consultation / source','textarea','',''],['RepatriationStatus','Return / repatriation status','select','RepatriationStatus','']
  ]},
  {id:'ANP-PHOTOGRAPHY',name:'Historic Photography',description:'Process, format, mounting, and annotation fields for photographs as collection objects.',triggerField:'Classifications',triggerValues:['Photographic Objects','Photography'],guidance:'Use for photographs as museum objects. Media files that merely document another object remain in the Media tab.',fields:[
    ['PhotographicProcess','Photographic process','text','',''],['Format','Format','text','',''],['Support','Support / mount','text','',''],['PositiveNegative','Positive / negative / transparency','text','',''],['StudioMaker','Studio / maker detail','text','',''],['MountHousing','Mount / housing','text','',''],['ImageOrientation','Image orientation','select','Orientation',''],['Annotations','Annotations / photographer marks','textarea','','']
  ]},
  {id:'ANP-JEWELLERY',name:'Jewellery & Personal Adornment',description:'Compact construction and wear-context fields for jewellery and personal adornment.',triggerField:'Classifications',triggerValues:['Jewellery & Personal Adornment'],guidance:'Use ordinary Object Type, Materials, Techniques, inscriptions, and maker authorities first; use this profile for jewellery-specific observations.',fields:[
    ['AdornmentType','Adornment type','text','',''],['WearLocation','Wear / body location','text','',''],['Fastening','Fastening / closure','text','',''],['Setting','Setting / mounting','text','',''],['StonesInlays','Stones / inlays','text','',''],['Hallmarks','Hallmarks / assay marks','textarea','','']
  ]},
  {id:'ANP-ARMS-ARMOUR',name:'Arms & Armour',description:'Compact technical fields for weapons, armour, and related equipment.',triggerField:'Classifications',triggerValues:['Arms & Armour'],guidance:'Record technical observations without displacing maker, provenance, inscription, or historical-context fields elsewhere in the catalogue.',fields:[
    ['ArmsCategory','Category / form','text','',''],['ComponentPart','Component / part','text','',''],['Mechanism','Mechanism / action','text','',''],['CalibreGauge','Calibre / gauge','text','',''],['MakerModel','Maker / model detail','text','',''],['SerialMarks','Serial / proof / inspection marks','textarea','',''],['AssociatedEquipment','Associated equipment','text','','']
  ]},
  {id:'ANP-NATURAL-HISTORY',name:'Natural History',description:'Compact specimen identification, collection-event, locality, and context fields.',triggerField:'CollectionArea',triggerValues:['Natural History'],guidance:'A lightweight specimen profile, not a full biodiversity database. Use only the fields relevant to the specimen.',fields:[
    ['SpecimenType','Specimen type','select','NaturalHistoryType',''],['ScientificName','Scientific name','text','',''],['CommonName','Common name','text','',''],['IdentificationQualifier','Identification qualifier','text','',''],['Taxonomy','Taxonomy / classification','text','',''],['SpecimenCount','Specimen count','number','',''],['CollectorEvent','Collector / collection event','text','',''],['VerbatimLocality','Verbatim locality','textarea','',''],['GeologicalContext','Geological context','text','',''],['LabelText','Verbatim label text','textarea','','']
  ]},
  {id:'ANP-ARCHAEOLOGY',name:'Archaeology & Excavated Material',description:'Context and analytical fields for excavated material.',triggerField:'Classifications',triggerValues:['Archaeological Material'],guidance:'Use project/site identifiers and analytical terms appropriate to the institution’s archaeological practice.',fields:[
    ['ContextType','Context type','text','',''],['SiteFeatureContext','Site / feature / context number','text','',''],['DiagnosticType','Diagnostic type','text','',''],['WareIndustry','Ware / industry','text','',''],['Completeness','Completeness','select','ArchaeologyCompleteness',''],['SurfaceTreatment','Surface treatment','text','',''],['ResidueUseWear','Residue / use-wear','textarea','',''],['FieldCatalogueNumber','Field / catalogue number','text','','']
  ]},
  {id:'ANP-CERAMICS-GLASS',name:'Ceramics & Glass',description:'Compact forming, surface, and decoration fields for ceramic and glass objects.',triggerField:'Classifications',triggerValues:['Ceramics','Glass'],guidance:'Use with the normal Material and Technique fields; this profile records object-specific technical observations.',fields:[
    ['BodyMaterial','Body / material detail','text','',''],['FormingMethod','Forming method','select','CeramicGlassForming',''],['SurfaceTreatment','Surface treatment','text','',''],['GlazeFinish','Glaze / finish','text','',''],['Decoration','Decoration','text','',''],['FiringManufacture','Firing / manufacture notes','text','',''],['MakerMark','Maker / factory mark','text','','']
  ]}
]);

const DEFAULT_SETTINGS = Object.freeze({
  InstitutionName: 'Your Museum',
  ShortName: 'Museum',
  SystemName: 'Open Museum CMS',
  DomainRestriction: '',
  Timezone: 'Etc/UTC',
  PrimaryColour: '#8B1E3F',
  PrimaryDarkColour: '#5B1229',
  BackgroundColour: '#FBF8F2',
  LogoURL: '',
  DefaultVenue: '',
  PermanentExhibitAreas: '',
  ContactEmail: '',
  SetupComplete: 'No'
});

function ensureSettingsSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet() || (_RUN.spreadsheet ? _RUN.spreadsheet : null);
  if (!ss) throw new Error('Open the target Google Sheet before running setupOpenMuseumCms().');
  let sh = ss.getSheetByName('Settings');
  if (!sh) sh = ss.insertSheet('Settings', 0);
  if (sh.getLastRow() === 0) {
    sh.getRange(1,1,1,4).setValues([['Setting','Value','Description','Required']]);
    sh.setFrozenRows(1);
  }
  const existing = sh.getLastRow() > 1 ? sh.getRange(2,1,sh.getLastRow()-1,4).getValues() : [];
  const present = new Set(existing.map(r=>String(r[0]||'')));
  const descriptions = {
    InstitutionName:'Name shown throughout the CMS.', ShortName:'Short institutional name.', SystemName:'Application subtitle/name.',
    DomainRestriction:'Optional Google Workspace domain, e.g. examplemuseum.org. Leave blank to rely only on the Users table.',
    Timezone:'Institution timezone for documentation; also set the Apps Script project timezone.',
    PrimaryColour:'Primary interface colour in hex.', PrimaryDarkColour:'Darker primary colour in hex.', BackgroundColour:'Page background colour in hex.',
    LogoURL:'Optional HTTPS URL for an institutional logo. Leave blank for the Open Museum CMS mark.', DefaultVenue:'Default venue used when creating exhibitions.',
    PermanentExhibitAreas:'Optional permanent exhibit names separated by | or line breaks. Blank means no permanent exhibits are pre-created.',
    ContactEmail:'Optional institutional CMS contact shown in documentation/configuration.',
    SetupComplete:'Set to Yes when initial configuration is complete.'
  };
  const toAdd=[];
  Object.keys(DEFAULT_SETTINGS).forEach(k=>{if(!present.has(k))toAdd.push([k,DEFAULT_SETTINGS[k],descriptions[k]||'',false]);});
  if(toAdd.length) sh.getRange(sh.getLastRow()+1,1,toAdd.length,4).setValues(toAdd);
  return sh;
}

function getCmsSettings_() {
  const out = Object.assign({}, DEFAULT_SETTINGS);
  try {
    const sh = getSpreadsheet_().getSheetByName('Settings');
    if (sh && sh.getLastRow() > 1) {
      sh.getRange(2,1,sh.getLastRow()-1,2).getValues().forEach(([k,v])=>{
        k=String(k||'').trim(); if(k) out[k] = v === null || v === undefined ? '' : String(v);
      });
    }
  } catch(e) {}
  return {
    institutionName: out.InstitutionName || DEFAULT_SETTINGS.InstitutionName,
    shortName: out.ShortName || DEFAULT_SETTINGS.ShortName,
    systemName: out.SystemName || DEFAULT_SETTINGS.SystemName,
    domainRestriction: String(out.DomainRestriction||'').trim().replace(/^@/,''),
    timezone: out.Timezone || DEFAULT_SETTINGS.Timezone,
    primaryColour: out.PrimaryColour || DEFAULT_SETTINGS.PrimaryColour,
    primaryDarkColour: out.PrimaryDarkColour || DEFAULT_SETTINGS.PrimaryDarkColour,
    backgroundColour: out.BackgroundColour || DEFAULT_SETTINGS.BackgroundColour,
    logoUrl: out.LogoURL || '',
    defaultVenue: out.DefaultVenue || '',
    permanentExhibitAreas: out.PermanentExhibitAreas || '',
    contactEmail: out.ContactEmail || '',
    setupComplete: String(out.SetupComplete || 'No')
  };
}

function getConfiguredPermanentExhibitAreas_() {
  return String(getCmsSettings_().permanentExhibitAreas || '')
    .split(/\r?\n|\|/).map(x=>x.trim()).filter(Boolean);
}

/* =========================
   Performance layer
   =========================
   - Request-local memoisation prevents the same sheet from being read repeatedly
     during a single Apps Script invocation.
   - Short Script Cache entries speed dashboard/bootstrap data across requests.
   - Large-table key/relation lookups use TextFinder so opening one record does
     not require loading every row of large sheets.

   Direct edits made in Google Sheets remain authoritative. Cached dashboard and
   vocabulary data may take up to the short TTL below to refresh.
*/
const PERF = Object.freeze({
  STATS_TTL_SECONDS: 45,
  ENUMS_TTL_SECONDS: 60,
  FAST_LOOKUP_ROW_THRESHOLD: 300,
  CACHE_PREFIX: 'open-museum-cms-v020a:'
});

let _RUN = {
  spreadsheet: null,
  tables: Object.create(null),
  headers: Object.create(null),
  listMap: null
};

function doGet() {
  const t = HtmlService.createTemplateFromFile('Index');
  t.version = CMS.VERSION;
  let title = 'Open Museum CMS';
  try {
    const s = getCmsSettings_();
    title = (s.institutionName ? s.institutionName + ' — ' : '') + s.systemName;
  } catch(e) {}
  return t.evaluate()
    .setTitle(title)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(name) {
  return HtmlService.createHtmlOutputFromFile(name).getContent();
}

/**
 * Idempotent base-schema installer.
 * It adds missing schema and seed data without overwriting catalogue descriptions.
 */
function installBaseSchema_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('Open Apps Script from the Google Sheet you want to use, then run setupOpenMuseumCms().');

  const props = PropertiesService.getScriptProperties();
  props.setProperty('SPREADSHEET_ID', ss.getId());
  ensureSettingsSheet_();

  ensureSheet_('Records', ['RecordID','MigrationID','RecordType','AccessionID','CatalogueStatus','PreferredTitle','ObjectTypeGenreForm','CollectionArea','ObjectClass','Quantity','UnitOfCount','Description','MakerCreatorText','DateDisplay','EarliestYear','LatestYear','PlaceOfOriginText','CultureCommunitySubjectsText','MaterialsTechniquesText','MeasurementsDisplay','InscriptionsMarks','ConditionSummary','CurrentLocationID','LegacyLocationText','LocationCheckedStatus','LegacyDonorSourceText','ProvenanceCustodialHistory','DocumentationStatus','RestrictionsSensitivity','PhotoStatus','PrimaryMediaURL','DigitalFolderURL','LegacyCataloguerDates','Notes','ReviewPriority','LastReviewedBy','LastReviewedDate','PublicAccessStatus','PublicTitle','PublicDescription','Active']);
  ensureSheet_('Users', ['Email','DisplayName','Role','Active','Notes']);
  ensureSheet_('Audit_Log', ['AuditID','Timestamp','UserEmail','Action','TableName','RecordID','Summary','DetailsJSON']);
  ensureSheet_('Measurements', ['MeasurementID','RecordID','MeasurementType','Value','Unit','Notes']);
  ensureSheet_('Lists', ['ListID','ListName','Value','SortOrder','Active','Notes']);
  ensureSheet_('Archive_Details', ['ArchiveDetailID','RecordID','ParentRecordID','LevelOfDescription','ReferenceCode','Extent','ScopeAndContent','Arrangement','Language','AccessConditions','ReproductionConditions','RelatedMaterial','ArchivistNotes']);
  ensureSheet_('Coin_Details', ['CoinDetailID','RecordID','SourceCoinNo','AuthorityRuler','PoliticalEntity','CoinDate','Mint','Denomination','Material','Mass_g','Diameter_mm','Thickness_mm','ObverseDescription','ObverseLegend','ReverseDescription','ReverseLegendMarks','Condition','Credit','Notes']);
  ensureSheet_('Locations', ['LocationID','LocationName','ParentLocationID','LocationType','ShortCode','Description','Active','QRCodeValue','Notes']);
  ensureSheet_('Movements', ['MovementID','RecordID','FromLocationID','ToLocationID','MovementDate','MovementType','Reason','AuthorisedByPartyID','MovedBy','ReturnDueDate','ReturnedDate','Notes']);
  ensureSheet_('Media', ['MediaID','RecordID','MediaType','FileName','ImagePath','FilePath','DriveURL','DriveFileID','IsPrimary','ViewDescription','CreatorPhotographerPartyID','CaptureDate','RightsStatement','PublicAccessStatus','Notes']);
  ensureSheet_('Reviews', ['ReviewID','RecordID','ReviewDate','ReviewedBy','ReviewType','Outcome','CatalogueStatusAfter','Notes']);
  ensureSheet_('Legacy_Migration', ['MigrationLogID','RecordID','MigrationID','SourceWorkbook','SourceSheet','SourceRow','LegacyCatalogueReferences','OriginalLocationText','MigrationAction','MigrationNotes']);
  ensureSheet_('People_Orgs', ['PartyID','PartyType','PreferredName','SortName','AlternateNames','DateOfBirthOrFoundation','DateOfDeathOrDissolution','PlaceAssociated','BiographicalNote','ContactDetailsInternal','ExternalAuthorityURL','Active']);
  ensureSheet_('Record_Roles', ['RecordRoleID','RecordID','PartyID','RoleType','RoleNote','AttributionStatus','StartDate','EndDate','Notes']);
  ensureSheet_('Accessions', ['AccessionID','AccessionNumber','AccessionDate','AcquisitionMethod','SourcePartyID','DonorSourceDisplay','ContactReference','AccessionSummary','LegalDocumentStatus','OwnershipStatus','LegalDocumentURL','DocumentationFolderURL','RestrictionsConditions','Notes','Active','CreatedBy','CreatedAt']);
  ensureSheet_('Exhibitions', ['ExhibitionID','ExhibitionTitle','Venue','StartDate','EndDate','ExhibitionStatus','Curator','ProjectFolderURL','Notes']);
  ensureSheet_('Exhibition_Items', ['ExhibitionItemID','ExhibitionID','RecordID','DisplayLocation','DisplayLabelURL','InstalledDate','DeinstalledDate','Notes']);
  ensureSheet_('Deaccessions', ['DeaccessionID','RecordID','DeaccessionDate','Reason','ApprovalReference','ApprovalDate','ApprovedBy','DispositionMethod','DispositionDate','Recipient','Notes','CreatedBy','CreatedAt']);
  ensureSheet_('Record_Edit_History', ['EditHistoryID','RecordID','UserEmail','DisplayName','EditedAt','Comment','Action']);

  ensureColumns_('Records', [
    'DateQualifier','DateStart','DateEnd','Classifications','Materials','Techniques',
    'LifecycleStatus','DeletedAt','DeletedBy','DeletionReason','CataloguedBy',
    'CultureText','PeriodText','SchoolStyleText','CreditLine'
  ]);
  ensureColumns_('People_Orgs', ['CreatedBy','CreatedAt','UpdatedBy','UpdatedAt']);
  ensureColumns_('Record_Roles', ['CreatedBy','CreatedAt']);
  ensureColumns_('Exhibitions', ['ExhibitionType','PlanningStatus','Description','CreatedBy','CreatedAt','UpdatedAt']);
  ensureColumns_('Exhibition_Items', ['SelectionStatus','Priority','InterpretiveRole','PlanningNotes','CreatedBy','CreatedAt']);
  ensureColumns_('Accessions', ['UpdatedBy','UpdatedAt','LegalDocumentFileID','LegalDocumentFileName']);

  seedControlledVocabularies_();
  seedConfiguredPermanentExhibitions_();
  seedInitialAdministrator_();

  return {
    ok: true,
    version: CMS.VERSION,
    spreadsheet: ss.getName(),
    user: Session.getActiveUser().getEmail() || '',
    permanentExhibits: getConfiguredPermanentExhibitAreas_().length,
    note: 'Base schema is ready. Existing catalogue descriptions were not overwritten.'
  };
}

/** Authority/research/search schema layer. Safe to run repeatedly. */
function installAuthoritySchema_() {
  installBaseSchema_();
  resetRunCache_();

  ensureSheet_('Subjects', ['SubjectID','PreferredTerm','AlternateTerms','ParentSubjectID','ScopeNote','ExternalAuthorityURL','Active','CreatedBy','CreatedAt','UpdatedBy','UpdatedAt']);
  ensureSheet_('Record_Subjects', ['RecordSubjectID','RecordID','SubjectID','Certainty','Notes','CreatedBy','CreatedAt']);
  ensureSheet_('Places', ['PlaceID','PreferredName','AlternateNames','PlaceType','ParentPlaceID','Country','Latitude','Longitude','ScopeNote','ExternalAuthorityURL','Active','CreatedBy','CreatedAt','UpdatedBy','UpdatedAt']);
  ensureSheet_('Record_Places', ['RecordPlaceID','RecordID','PlaceID','PlaceRole','Certainty','StartDate','EndDate','Notes','CreatedBy','CreatedAt']);
  ensureSheet_('Inscriptions_Marks', ['InscriptionID','RecordID','InscriptionType','Position','Language','Script','InscriptionText','Transliteration','Translation','Certainty','Notes','CreatedBy','CreatedAt','UpdatedBy','UpdatedAt']);
  ensureSheet_('Bibliography', ['ReferenceID','Citation','AuthorEditor','Title','Publication','Year','URLDOI','Notes','Active','CreatedBy','CreatedAt','UpdatedBy','UpdatedAt']);
  ensureSheet_('Record_References', ['RecordReferenceID','RecordID','ReferenceID','ReferenceRole','PageFigure','Notes','CreatedBy','CreatedAt']);

  ensureColumns_('Records', ['CuratorialComments','IdentificationCertainty','DisplayStatus','CurrentDisplayExhibitionID','CurrentDisplayLocation']);
  ensureColumns_('People_Orgs', ['NationalityCommunity','OccupationsTypes','Addresses','ExternalIdentifiers','InternalNotes']);
  ensureColumns_('Exhibition_Items', ['UpdatedBy','UpdatedAt']);

  seedV04Vocabularies_();
  seedSubjectsV04_();
  seedPlacesFromLegacyList_();
  [...new Set(readTableSafe_('Exhibition_Items').rows.map(x=>String(x.RecordID||'')).filter(Boolean))].forEach(syncRecordDisplayState_);
  clearCmsPerformanceCache();

  return {
    ok:true,
    version:CMS.VERSION,
    spreadsheet:getSpreadsheet_().getName(),
    subjects:readTableSafe_('Subjects').rows.length,
    places:readTableSafe_('Places').rows.length,
    note:'Authority, relationship, inscription, bibliography, display-state, exhibition-history, and faceted-search schema is ready. Legacy text fields were preserved.'
  };
}

/**
 * Optional analytical-profile layer.
 * Profiles are lightweight, repeatable analytical tools that sit alongside the core catalogue.
 */
function installAnalysisSchema_() {
  installAuthoritySchema_();
  resetRunCache_();

  ensureSheet_('Analysis_Profiles', ['ProfileID','ProfileName','Description','TriggerField','TriggerValues','Active','SortOrder','Guidance']);
  ensureSheet_('Analysis_Fields', ['FieldID','ProfileID','FieldName','Label','FieldType','OptionsListName','Unit','HelpText','Active','SortOrder']);
  ensureSheet_('Record_Analysis_Profiles', ['RecordAnalysisProfileID','RecordID','ProfileID','AddedBy','AddedAt']);
  ensureSheet_('Analysis_Values', ['AnalysisValueID','RecordID','ProfileID','FieldID','ValueText','Notes','UpdatedBy','UpdatedAt']);

  seedAnalysisProfiles_();
  seedControlledVocabularies_();
  seedV04Vocabularies_();
  clearCmsPerformanceCache();

  return {
    ok:true,
    version:CMS.VERSION,
    spreadsheet:getSpreadsheet_().getName(),
    profiles:readTableSafe_('Analysis_Profiles').rows.length,
    note:'Optional analysis profiles are ready. Natural History is one profile among art, sculpture, furniture, textiles, tools, agriculture, archaeology, ceramics/glass, and community-context tools.'
  };
}

/**
 * Backwards-compatibility helper. If an older installation contains Natural_History_Details,
 * its data remain untouched. New installations use the generic Analysis system instead.
 */
function installNaturalHistorySchema_() { return installAnalysisSchema_(); }

/**
 * Public first-time setup / idempotent upgrade entry point.
 * Run this function from Apps Script after opening the target Google Sheet.
 */
function setupOpenMuseumCms() {
  const result = installAnalysisSchema_();
  const ss = getSpreadsheet_();
  ensureSettingsSheet_();
  const settings = getCmsSettings_();
  const props = PropertiesService.getScriptProperties();
  props.setProperty('SCHEMA_VERSION', String(CMS.SCHEMA_VERSION));
  return Object.assign({}, result, {
    product:'Open Museum CMS',
    version:CMS.VERSION,
    schemaVersion:CMS.SCHEMA_VERSION,
    institution:settings.institutionName,
    note:'Setup/upgrade complete. Edit the Settings sheet, add users, configure Drive folders, then deploy the web app.'
  });
}

/** Current generic upgrade entry point. Safe to run repeatedly. */
function upgradeOpenMuseumCms() { return setupOpenMuseumCms(); }

/** Return the installed version/schema for troubleshooting. */
function openMuseumCmsStatus() {
  const settings=getCmsSettings_();
  return {version:CMS.VERSION,schemaVersion:CMS.SCHEMA_VERSION,institution:settings.institutionName,spreadsheet:getSpreadsheet_().getName()};
}

/** Adds any seed vocabulary terms that are not already present. */
function syncAllDisplayStatesV04() {
  requireUser_('exhibits');
  const ids=[...new Set(readTableSafe_('Exhibition_Items').rows.map(x=>String(x.RecordID||'')).filter(Boolean))];
  ids.forEach(syncRecordDisplayState_);
  return {ok:true,recordsSynced:ids.length};
}

function seedControlledVocabularies() {
  const result = seedControlledVocabularies_();
  return {ok:true, added:result};
}

/**
 * Verifies the MEDIA_ROOT_FOLDER_ID script property.
 * This works with My Drive or a Shared Drive folder when Advanced Drive Service is enabled.
 */
function verifyMediaRootFolder() {
  const id = PropertiesService.getScriptProperties().getProperty('MEDIA_ROOT_FOLDER_ID');
  if (!id) throw new Error('MEDIA_ROOT_FOLDER_ID is not set in Project Settings > Script properties.');

  const folder = Drive.Files.get(id, {
    supportsAllDrives: true,
    fields: 'id,name,mimeType,driveId,parents'
  });

  if (folder.mimeType !== 'application/vnd.google-apps.folder') {
    throw new Error('MEDIA_ROOT_FOLDER_ID does not refer to a folder.');
  }

  return {
    ok:true,
    id:folder.id,
    name:folder.name,
    driveId:folder.driveId || '',
    sharedDrive: !!folder.driveId
  };
}

function verifyAccessionDocsFolder() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('ACCESSION_DOCS_FOLDER_ID') || props.getProperty('MEDIA_ROOT_FOLDER_ID');
  if (!id) throw new Error('Set ACCESSION_DOCS_FOLDER_ID (recommended) or MEDIA_ROOT_FOLDER_ID in Project Settings > Script properties.');

  const folder = Drive.Files.get(id, {
    supportsAllDrives: true,
    fields: 'id,name,mimeType,driveId,parents'
  });

  if (folder.mimeType !== 'application/vnd.google-apps.folder') {
    throw new Error('The configured accession-document location is not a Drive folder.');
  }

  return {
    ok:true,
    id:folder.id,
    name:folder.name,
    driveId:folder.driveId || '',
    sharedDrive: !!folder.driveId,
    usingFallback: !props.getProperty('ACCESSION_DOCS_FOLDER_ID')
  };
}

/* =========================
   Public API
   ========================= */

function apiGetPublicSettings(){ requireUser_('read'); return getCmsSettings_(); }

function apiBootstrap() {
  const user = requireUser_('read');

  let stats = cacheGetJson_('stats');
  if (!stats) {
    stats = getStats_();
    cachePutJson_('stats', stats, PERF.STATS_TTL_SECONDS);
  }

  let enums = cacheGetJson_('enums');
  if (!enums) {
    const lists = getListMap_();
    const values = name => (lists[name] || []).slice();
    enums = {
      recordType: values('RecordType'),
      catalogueStatus: values('CatalogueStatus'),
      collectionArea: values('CollectionArea'),
      locationCheckedStatus: values('LocationCheckedStatus'),
      documentationStatus: values('DocumentationStatus'),
      photoStatus: values('PhotoStatus'),
      reviewPriority: values('ReviewPriority'),
      publicAccessStatus: values('PublicAccessStatus'),
      locationType: values('LocationType'),
      reviewType: values('ReviewType'),
      dateQualifier: values('DateQualifier').length ? values('DateQualifier') : CMS.DATE_QUALIFIERS.slice(),
      classification: values('Classification'),
      place: values('Place'),
      material: values('Material'),
      technique: values('Technique'),
      lifecycleStatus: values('LifecycleStatus'),
      partyType: values('PartyType'),
      roleType: values('RoleType'),
      attributionStatus: values('AttributionStatus'),
      acquisitionMethod: values('AcquisitionMethod'),
      legalDocumentStatus: values('LegalDocumentStatus'),
      ownershipStatus: values('OwnershipStatus'),
      exhibitionStatus: values('ExhibitionStatus'),
      selectionStatus: values('SelectionStatus'),
      exhibitPriority: values('ExhibitPriority'),
      interpretiveRole: values('InterpretiveRole'),
      deaccessionReason: values('DeaccessionReason'),
      dispositionMethod: values('DispositionMethod'),
      certainty: values('Certainty'),
      identificationCertainty: values('IdentificationCertainty'),
      placeType: values('PlaceType'),
      placeRole: values('PlaceRole'),
      inscriptionType: values('InscriptionType'),
      referenceRole: values('ReferenceRole'),
      displayStatus: values('DisplayStatus'),
      objectType: values('ObjectType'),
      culture: values('Culture'),
      period: values('Period'),
      schoolStyle: values('SchoolStyle')
    };
    cachePutJson_('enums', enums, PERF.ENUMS_TTL_SECONDS);
  }

  return {
    version: CMS.VERSION,
    settings: getCmsSettings_(),
    user,
    stats,
    enums,
    media: {
      configured: !!PropertiesService.getScriptProperties().getProperty('MEDIA_ROOT_FOLDER_ID')
    },
    appUrl: ScriptApp.getService().getUrl() || '',
    analysisProfiles: getAnalysisProfilesForBootstrap_()
  };
}
function apiListRecords(params) {
  requireUser_('read');
  params = params || {};
  const q = String(params.q || '').trim().toLowerCase();
  const pageSize = Math.min(Math.max(Number(params.pageSize || 50), 10), 100);
  const page = Math.max(Number(params.page || 1), 1);

  let rows = readTable_('Records').rows;
  if (params.lifecycleStatus) {
    rows = rows.filter(r => recordLifecycle_(r) === String(params.lifecycleStatus));
  } else if (!params.includeAllLifecycle) {
    rows = rows.filter(r => recordLifecycle_(r) === 'Active');
  }

  if (q) {
    const fields = [
      'RecordID','MigrationID','PreferredTitle','ObjectTypeGenreForm','CollectionArea',
      'ObjectClass','Classifications','Description','MakerCreatorText','DateDisplay',
      'PlaceOfOriginText','CultureCommunitySubjectsText','MaterialsTechniquesText',
      'Materials','Techniques','LegacyDonorSourceText','ProvenanceCustodialHistory','CuratorialComments','CultureCommunitySubjectsText','CultureText','PeriodText','SchoolStyleText','CreditLine','Notes'
    ];
    const analysisByRecord = Object.create(null);
    readTableSafe_('Analysis_Values').rows.forEach(x=>{
      const id=String(x.RecordID||'');
      if(!analysisByRecord[id])analysisByRecord[id]=[];
      analysisByRecord[id].push(String(x.ValueText||''));
    });
    rows = rows.filter(r =>
      fields.some(f => String(r[f] || '').toLowerCase().includes(q)) ||
      String((analysisByRecord[String(r.RecordID||'')]||[]).join(' ')).toLowerCase().includes(q)
    );
  }

  if (params.recordType) rows = rows.filter(r => String(r.RecordType || '') === String(params.recordType));
  if (params.catalogueStatus) rows = rows.filter(r => String(r.CatalogueStatus || '') === String(params.catalogueStatus));
  if (params.collectionArea) rows = rows.filter(r => String(r.CollectionArea || '') === String(params.collectionArea));
  if (params.reviewPriority) rows = rows.filter(r => String(r.ReviewPriority || '') === String(params.reviewPriority));
  if (params.place) rows = rows.filter(r => String(r.PlaceOfOriginText || '') === String(params.place));
  if (params.classification) rows = rows.filter(r => splitTerms_(r.Classifications).includes(String(params.classification)));
  if (params.material) rows = rows.filter(r => splitTerms_(r.Materials).includes(String(params.material)));
  if (params.technique) rows = rows.filter(r => splitTerms_(r.Techniques).includes(String(params.technique)));

  if (params.photoQueue) {
    const allowed = new Set(['Source workbook image','Mapping needed','Photography required']);
    rows = rows.filter(r => allowed.has(String(r.PhotoStatus || '')));
  }

  if (params.photographCollection) {
    rows = rows.filter(r => String(r.CollectionArea || '') === 'Photography');
  }

  if (params.coinQueue) {
    const coinIds = new Set(readTableSafe_('Coin_Details').rows.map(x => String(x.RecordID || '')));
    rows = rows.filter(r => String(r.CollectionArea || '') === 'Numismatics' || coinIds.has(String(r.RecordID || '')));
  }

  const fromYear = parseSearchYear_(params.dateFromYear);
  const toYear = parseSearchYear_(params.dateToYear);
  if (fromYear !== null || toYear !== null) {
    rows = rows.filter(r => dateRangeMatches_(r, fromYear, toYear));
  }

  rows.sort((a,b) => String(a.PreferredTitle || a.RecordID || '').localeCompare(
    String(b.PreferredTitle || b.RecordID || ''), undefined, {numeric:true,sensitivity:'base'}
  ));

  const total = rows.length;
  const start = (page - 1) * pageSize;
  const locations = readTableSafe_('Locations').rows;
  const locMap = Object.fromEntries(locations.map(x => [String(x.LocationID || ''), x.LocationName || x.LocationID || '']));

  return {
    total,
    page,
    pageSize,
    pages: Math.max(1, Math.ceil(total / pageSize)),
    rows: rows.slice(start, start + pageSize).map(r => ({
      RecordID: r.RecordID || '',
      MigrationID: r.MigrationID || '',
      PreferredTitle: r.PreferredTitle || '(Untitled record)',
      RecordType: r.RecordType || '',
      CollectionArea: r.CollectionArea || '',
      DateDisplay: r.DateDisplay || '',
      CatalogueStatus: r.CatalogueStatus || '',
      ReviewPriority: r.ReviewPriority || '',
      PhotoStatus: r.PhotoStatus || '',
      LifecycleStatus: recordLifecycle_(r),
      AccessionID: r.AccessionID || '',
      CurrentLocationName: locMap[String(r.CurrentLocationID || '')] || r.LegacyLocationText || ''
    }))
  };
}

function apiFacetedSearch(params) {
  requireUser_('read');
  params = params || {};
  const pageSize = Math.min(Math.max(Number(params.pageSize || 24), 12), 60);
  const page = Math.max(Number(params.page || 1), 1);
  const q = String(params.q || '').trim().toLowerCase();

  const records = readTableSafe_('Records').rows.filter(r => recordLifecycle_(r) === 'Active');
  const media = readTableSafe_('Media').rows;
  const subjects = readTableSafe_('Subjects').rows.filter(r=>truthy_(r.Active,true));
  const subjectById = Object.fromEntries(subjects.map(x=>[String(x.SubjectID||''),x]));
  const subjectLinks = readTableSafe_('Record_Subjects').rows;
  const places = readTableSafe_('Places').rows.filter(r=>truthy_(r.Active,true));
  const placeById = Object.fromEntries(places.map(x=>[String(x.PlaceID||''),x]));
  const placeLinks = readTableSafe_('Record_Places').rows;
  const parties = readTableSafe_('People_Orgs').rows.filter(r=>truthy_(r.Active,true));
  const partyById = Object.fromEntries(parties.map(x=>[String(x.PartyID||''),x]));
  const partyLinks = readTableSafe_('Record_Roles').rows;
  const exhibitions = readTableSafe_('Exhibitions').rows;
  const exhibitionById = Object.fromEntries(exhibitions.map(x=>[String(x.ExhibitionID||''),x]));
  const exhibitItems = readTableSafe_('Exhibition_Items').rows;
  const analysisProfiles = readTableSafe_('Analysis_Profiles').rows.filter(r=>truthy_(r.Active,true));
  const profileById = Object.fromEntries(analysisProfiles.map(x=>[String(x.ProfileID||''),x]));
  const profileLinks = readTableSafe_('Record_Analysis_Profiles').rows;
  const analysisValues = readTableSafe_('Analysis_Values').rows;

  const meta = Object.create(null);
  records.forEach(r=>meta[String(r.RecordID||'')]={subjects:[],places:[],parties:[],exhibitions:[],media:[],profiles:[],analysisValues:[],search:''});
  subjectLinks.forEach(l=>{const m=meta[String(l.RecordID||'')];if(m)m.subjects.push(l)});
  placeLinks.forEach(l=>{const m=meta[String(l.RecordID||'')];if(m)m.places.push(l)});
  partyLinks.forEach(l=>{const m=meta[String(l.RecordID||'')];if(m)m.parties.push(l)});
  exhibitItems.forEach(l=>{const m=meta[String(l.RecordID||'')];if(m)m.exhibitions.push(l)});
  media.forEach(mr=>{const m=meta[String(mr.RecordID||'')];if(m)m.media.push(mr)});
  profileLinks.forEach(l=>{const m=meta[String(l.RecordID||'')];if(m)m.profiles.push(l)});
  analysisValues.forEach(v=>{const m=meta[String(v.RecordID||'')];if(m)m.analysisValues.push(v)});

  // Auto-triggered profiles are calculated even when the record has never been manually opened in Analysis.
  records.forEach(r=>{
    const m=meta[String(r.RecordID||'')];
    getApplicableAnalysisProfiles_(r).forEach(p=>{
      if(!m.profiles.some(x=>String(x.ProfileID)===String(p.ProfileID)))m.profiles.push({ProfileID:p.ProfileID,Auto:true});
    });
  });

  const arr=v=>Array.isArray(v)?v.map(String).filter(Boolean):(v?[String(v)]:[]);
  const filters={
    collectionArea:arr(params.collectionArea),recordType:arr(params.recordType),classification:arr(params.classification),
    objectType:arr(params.objectType),culture:arr(params.culture),period:arr(params.period),schoolStyle:arr(params.schoolStyle),
    material:arr(params.material),technique:arr(params.technique),catalogueStatus:arr(params.catalogueStatus),
    subjectId:arr(params.subjectId),placeId:arr(params.placeId),placeRole:arr(params.placeRole),partyId:arr(params.partyId),
    roleType:arr(params.roleType),identificationCertainty:arr(params.identificationCertainty),displayStatus:arr(params.displayStatus),
    exhibitionId:arr(params.exhibitionId),accessionState:arr(params.accessionState),hasImage:arr(params.hasImage),
    analysisProfile:arr(params.analysisProfile)
  };
  const fromYear=parseSearchYear_(params.dateFromYear),toYear=parseSearchYear_(params.dateToYear);
  const hasAny=(values,selected)=>!selected.length||values.some(v=>selected.includes(String(v)));

  function recordSearchText_(r){
    const m=meta[String(r.RecordID||'')]||{subjects:[],places:[],parties:[],exhibitions:[],profiles:[],analysisValues:[]};
    const linked=[
      ...m.subjects.map(l=>((subjectById[String(l.SubjectID||'')]||{}).PreferredTerm||'')),
      ...m.places.map(l=>((placeById[String(l.PlaceID||'')]||{}).PreferredName||'')),
      ...m.parties.map(l=>((partyById[String(l.PartyID||'')]||{}).PreferredName||'')),
      ...m.exhibitions.map(l=>((exhibitionById[String(l.ExhibitionID||'')]||{}).ExhibitionTitle||'')),
      ...m.profiles.map(l=>((profileById[String(l.ProfileID||'')]||{}).ProfileName||'')),
      ...m.analysisValues.map(v=>v.ValueText||'')
    ];
    return [r.RecordID,r.MigrationID,r.PreferredTitle,r.ObjectTypeGenreForm,r.CollectionArea,r.Classifications,r.Description,r.CuratorialComments,r.MakerCreatorText,r.DateDisplay,r.PlaceOfOriginText,r.CultureCommunitySubjectsText,r.CultureText,r.PeriodText,r.SchoolStyleText,r.CreditLine,r.Materials,r.Techniques,r.ProvenanceCustodialHistory,r.Notes,...linked].join(' ').toLowerCase();
  }
  records.forEach(r=>{meta[String(r.RecordID||'')].search=recordSearchText_(r)});

  function matches(r,exclude){
    const id=String(r.RecordID||''),m=meta[id];
    if(q && !m.search.includes(q))return false;
    if(exclude!=='collectionArea'&&!hasAny([r.CollectionArea],filters.collectionArea))return false;
    if(exclude!=='recordType'&&!hasAny([r.RecordType],filters.recordType))return false;
    if(exclude!=='classification'&&!hasAny(splitTerms_(r.Classifications),filters.classification))return false;
    if(exclude!=='objectType'&&!hasAny([r.ObjectTypeGenreForm],filters.objectType))return false;
    if(exclude!=='culture'&&!hasAny([r.CultureText],filters.culture))return false;
    if(exclude!=='period'&&!hasAny([r.PeriodText],filters.period))return false;
    if(exclude!=='schoolStyle'&&!hasAny([r.SchoolStyleText],filters.schoolStyle))return false;
    if(exclude!=='material'&&!hasAny(splitTerms_(r.Materials),filters.material))return false;
    if(exclude!=='technique'&&!hasAny(splitTerms_(r.Techniques),filters.technique))return false;
    if(exclude!=='catalogueStatus'&&!hasAny([r.CatalogueStatus],filters.catalogueStatus))return false;
    if(exclude!=='identificationCertainty'&&!hasAny([r.IdentificationCertainty||'Unknown'],filters.identificationCertainty))return false;
    if(exclude!=='displayStatus'&&!hasAny([r.DisplayStatus||'Not on display'],filters.displayStatus))return false;
    if(exclude!=='subjectId'&&!hasAny(m.subjects.map(x=>x.SubjectID),filters.subjectId))return false;
    if(exclude!=='placeId'&&!hasAny(m.places.map(x=>x.PlaceID),filters.placeId))return false;
    if(exclude!=='placeRole'&&!hasAny(m.places.map(x=>x.PlaceRole),filters.placeRole))return false;
    if(exclude!=='partyId'&&!hasAny(m.parties.map(x=>x.PartyID),filters.partyId))return false;
    if(exclude!=='roleType'&&!hasAny(m.parties.map(x=>x.RoleType),filters.roleType))return false;
    if(exclude!=='analysisProfile'&&!hasAny(m.profiles.map(x=>x.ProfileID),filters.analysisProfile))return false;
    if(exclude!=='exhibitionId'&&!hasAny(m.exhibitions.map(x=>x.ExhibitionID),filters.exhibitionId))return false;
    if(exclude!=='accessionState'&&filters.accessionState.length){const state=r.AccessionID?'Accessioned':'Unaccessioned';if(!filters.accessionState.includes(state))return false;}
    if(exclude!=='hasImage'&&filters.hasImage.length){const has=m.media.some(x=>String(x.DriveFileID||''));const state=has?'Has image':'No image';if(!filters.hasImage.includes(state))return false;}
    if((fromYear!==null||toYear!==null)&&!dateRangeMatches_(r,fromYear,toYear))return false;
    return true;
  }

  const countFacet=(key,getValues,labelMap)=>{
    const counts=Object.create(null);
    records.filter(r=>matches(r,key)).forEach(r=>{[...new Set((getValues(r)||[]).map(String).filter(Boolean))].forEach(v=>counts[v]=(counts[v]||0)+1)});
    return Object.keys(counts).map(v=>({value:v,label:labelMap&&labelMap[v]?labelMap[v]:v,count:counts[v]})).sort((a,b)=>b.count-a.count||a.label.localeCompare(b.label));
  };
  const subjectLabel=Object.fromEntries(subjects.map(x=>[String(x.SubjectID||''),x.PreferredTerm||x.SubjectID]));
  const placeLabel=Object.fromEntries(places.map(x=>[String(x.PlaceID||''),x.PreferredName||x.PlaceID]));
  const partyLabel=Object.fromEntries(parties.map(x=>[String(x.PartyID||''),x.PreferredName||x.PartyID]));
  const exhibitionLabel=Object.fromEntries(exhibitions.map(x=>[String(x.ExhibitionID||''),x.ExhibitionTitle||x.ExhibitionID]));
  const profileLabel=Object.fromEntries(analysisProfiles.map(x=>[String(x.ProfileID||''),x.ProfileName||x.ProfileID]));

  let filtered=records.filter(r=>matches(r,''));
  const sort=String(params.sort||'title_asc');
  const yearVal=r=>{const y=Number(r.EarliestYear);return Number.isFinite(y)?y:999999};
  if(sort==='title_desc')filtered.sort((a,b)=>String(b.PreferredTitle||'').localeCompare(String(a.PreferredTitle||''),undefined,{numeric:true,sensitivity:'base'}));
  else if(sort==='date_asc')filtered.sort((a,b)=>yearVal(a)-yearVal(b)||String(a.PreferredTitle||'').localeCompare(String(b.PreferredTitle||'')));
  else if(sort==='date_desc')filtered.sort((a,b)=>yearVal(b)-yearVal(a)||String(a.PreferredTitle||'').localeCompare(String(b.PreferredTitle||'')));
  else if(sort==='record_id')filtered.sort((a,b)=>String(a.RecordID||'').localeCompare(String(b.RecordID||''),undefined,{numeric:true}));
  else filtered.sort((a,b)=>String(a.PreferredTitle||a.RecordID||'').localeCompare(String(b.PreferredTitle||b.RecordID||''),undefined,{numeric:true,sensitivity:'base'}));

  const total=filtered.length,start=(page-1)*pageSize;
  const locations=readTableSafe_('Locations').rows,locMap=Object.fromEntries(locations.map(x=>[String(x.LocationID||''),x.LocationName||x.LocationID||'']));
  const resultRows=filtered.slice(start,start+pageSize).map(r=>{
    const mm=meta[String(r.RecordID||'')];
    const primary=mm.media.find(x=>truthy_(x.IsPrimary,false)&&x.DriveFileID)||mm.media.find(x=>x.DriveFileID)||null;
    return {RecordID:r.RecordID||'',PreferredTitle:r.PreferredTitle||'(Untitled record)',RecordType:r.RecordType||'',CollectionArea:r.CollectionArea||'',ObjectTypeGenreForm:r.ObjectTypeGenreForm||'',CultureText:r.CultureText||'',PeriodText:r.PeriodText||'',DateDisplay:r.DateDisplay||'',CatalogueStatus:r.CatalogueStatus||'',IdentificationCertainty:r.IdentificationCertainty||'',DisplayStatus:r.DisplayStatus||'Not on display',AccessionID:r.AccessionID||'',CurrentLocationName:locMap[String(r.CurrentLocationID||'')]||r.LegacyLocationText||'',PrimaryDriveFileID:primary?primary.DriveFileID:''};
  });

  return {total,page,pageSize,pages:Math.max(1,Math.ceil(total/pageSize)),rows:resultRows,facets:{
    collectionArea:countFacet('collectionArea',r=>[r.CollectionArea]),recordType:countFacet('recordType',r=>[r.RecordType]),
    classification:countFacet('classification',r=>splitTerms_(r.Classifications)),objectType:countFacet('objectType',r=>[r.ObjectTypeGenreForm]),
    culture:countFacet('culture',r=>[r.CultureText]),period:countFacet('period',r=>[r.PeriodText]),schoolStyle:countFacet('schoolStyle',r=>[r.SchoolStyleText]),
    material:countFacet('material',r=>splitTerms_(r.Materials)),technique:countFacet('technique',r=>splitTerms_(r.Techniques)),
    catalogueStatus:countFacet('catalogueStatus',r=>[r.CatalogueStatus]),identificationCertainty:countFacet('identificationCertainty',r=>[r.IdentificationCertainty||'Unknown']),
    displayStatus:countFacet('displayStatus',r=>[r.DisplayStatus||'Not on display']),subjectId:countFacet('subjectId',r=>((meta[String(r.RecordID||'')]||{}).subjects||[]).map(x=>x.SubjectID),subjectLabel),
    placeId:countFacet('placeId',r=>((meta[String(r.RecordID||'')]||{}).places||[]).map(x=>x.PlaceID),placeLabel),placeRole:countFacet('placeRole',r=>((meta[String(r.RecordID||'')]||{}).places||[]).map(x=>x.PlaceRole)),
    partyId:countFacet('partyId',r=>((meta[String(r.RecordID||'')]||{}).parties||[]).map(x=>x.PartyID),partyLabel),roleType:countFacet('roleType',r=>((meta[String(r.RecordID||'')]||{}).parties||[]).map(x=>x.RoleType)),
    analysisProfile:countFacet('analysisProfile',r=>((meta[String(r.RecordID||'')]||{}).profiles||[]).map(x=>x.ProfileID),profileLabel),
    exhibitionId:countFacet('exhibitionId',r=>((meta[String(r.RecordID||'')]||{}).exhibitions||[]).map(x=>x.ExhibitionID),exhibitionLabel),
    accessionState:countFacet('accessionState',r=>[r.AccessionID?'Accessioned':'Unaccessioned']),hasImage:countFacet('hasImage',r=>[((meta[String(r.RecordID||'')]||{}).media||[]).some(x=>x.DriveFileID)?'Has image':'No image'])
  }};
}

function apiGetRecord(recordId) {
  requireUser_('read');
  const record = getByKey_('Records', recordId);
  if (!record) throw new Error('Record not found: ' + recordId);

  const isNumismatic =
    String(record.CollectionArea || '') === 'Numismatics' ||
    splitTerms_(record.Classifications).includes('Numismatic Objects');

  return {
    record,
    accession: record.AccessionID ? getByKey_('Accessions', record.AccessionID) : null,
    currentLocation: record.CurrentLocationID ? getByKey_('Locations', record.CurrentLocationID) : null,
    displayExhibition: record.CurrentDisplayExhibitionID ? getByKey_('Exhibitions', record.CurrentDisplayExhibitionID) : null,
    related: {
      // Load only what the record page needs immediately. Other tabs are lazy-loaded.
      media: rowsByField_('Media','RecordID',recordId),
      measurements: rowsByField_('Measurements','RecordID',recordId),
      coin: isNumismatic ? rowsByField_('Coin_Details','RecordID',recordId) : []
    }
  };
}

function apiGetRecordRelated(recordId, section) {
  requireUser_('read');
  if (!getByKey_('Records', recordId)) throw new Error('Record not found: ' + recordId);

  switch (String(section || '')) {
    case 'media':
      return rowsByField_('Media','RecordID',recordId);
    case 'authorities':
      return getRecordAuthorities_(recordId);
    case 'places':
      return getRecordPlaces_(recordId);
    case 'subjects':
      return getRecordSubjects_(recordId);
    case 'inscriptions':
      return rowsByField_('Inscriptions_Marks','RecordID',recordId);
    case 'references':
      return getRecordReferences_(recordId);
    case 'analysis':
      return apiGetRecordAnalysis(recordId);
    case 'archive':
      return rowsByField_('Archive_Details','RecordID',recordId);
    case 'movements':
      return rowsByField_('Movements','RecordID',recordId);
    case 'reviews':
      return rowsByField_('Reviews','RecordID',recordId);
    case 'exhibitions':
      return getRecordExhibitions_(recordId);
    case 'deaccessions':
      return rowsByField_('Deaccessions','RecordID',recordId);
    case 'migration':
      return rowsByField_('Legacy_Migration','RecordID',recordId);
    default:
      throw new Error('Unknown related section: ' + section);
  }
}

function getAnalysisProfilesForBootstrap_(){
  return readTableSafe_('Analysis_Profiles').rows.filter(r=>truthy_(r.Active,true)).sort((a,b)=>Number(a.SortOrder||999)-Number(b.SortOrder||999)).map(r=>({
    ProfileID:r.ProfileID,ProfileName:r.ProfileName,Description:r.Description,TriggerField:r.TriggerField,TriggerValues:r.TriggerValues,Guidance:r.Guidance
  }));
}

function seedAnalysisProfiles_(){
  const existingProfiles=readTableSafe_('Analysis_Profiles').rows;
  const existingFields=readTableSafe_('Analysis_Fields').rows;
  ANALYSIS_PROFILE_SEED.forEach((profile,index)=>{
    if(!existingProfiles.some(x=>String(x.ProfileID)===profile.id)){
      appendObject_('Analysis_Profiles',{ProfileID:profile.id,ProfileName:profile.name,Description:profile.description,TriggerField:profile.triggerField,TriggerValues:joinTerms_(profile.triggerValues),Active:true,SortOrder:index+1,Guidance:profile.guidance});
    }
    profile.fields.forEach((f,fieldIndex)=>{
      const fieldId=profile.id+'-'+f[0].replace(/[^A-Za-z0-9]/g,'').toUpperCase();
      if(!existingFields.some(x=>String(x.FieldID)===fieldId))appendObject_('Analysis_Fields',{FieldID:fieldId,ProfileID:profile.id,FieldName:f[0],Label:f[1],FieldType:f[2],OptionsListName:f[3],Unit:f[4],HelpText:'',Active:true,SortOrder:fieldIndex+1});
    });
  });
}

function getApplicableAnalysisProfiles_(record){
  const profiles=readTableSafe_('Analysis_Profiles').rows.filter(r=>truthy_(r.Active,true));
  return profiles.filter(p=>{
    const trigger=String(p.TriggerField||'').trim();
    if(!trigger)return false;
    const wanted=splitTerms_(p.TriggerValues);
    if(!wanted.length)return false;
    if(trigger==='CollectionArea')return wanted.includes(String(record.CollectionArea||''));
    if(trigger==='Classifications')return splitTerms_(record.Classifications).some(x=>wanted.includes(x));
    if(trigger==='ObjectTypeGenreForm')return wanted.includes(String(record.ObjectTypeGenreForm||''));
    return false;
  });
}

function apiGetRecordAnalysis(recordId){
  requireUser_('read');
  const record=getByKey_('Records',recordId); if(!record)throw new Error('Record not found: '+recordId);
  const allProfiles=readTableSafe_('Analysis_Profiles').rows.filter(r=>truthy_(r.Active,true));
  const fields=readTableSafe_('Analysis_Fields').rows.filter(r=>truthy_(r.Active,true));
  const manualLinks=rowsByField_('Record_Analysis_Profiles','RecordID',recordId);
  const autoProfiles=getApplicableAnalysisProfiles_(record);
  const ids=new Set([...autoProfiles.map(x=>String(x.ProfileID)),...manualLinks.map(x=>String(x.ProfileID))]);
  const values=rowsByField_('Analysis_Values','RecordID',recordId);
  const lists=getListMap_();
  return {
    profiles:[...ids].map(id=>{
      const p=allProfiles.find(x=>String(x.ProfileID)===id); if(!p)return null;
      return Object.assign({},p,{Auto:autoProfiles.some(x=>String(x.ProfileID)===id),Manual:manualLinks.some(x=>String(x.ProfileID)===id),Fields:fields.filter(f=>String(f.ProfileID)===id).sort((a,b)=>Number(a.SortOrder||999)-Number(b.SortOrder||999)).map(f=>Object.assign({},f,{Options:f.OptionsListName?(lists[String(f.OptionsListName)]||[]):[]})),Values:values.filter(v=>String(v.ProfileID)===id)});
    }).filter(Boolean).sort((a,b)=>Number(a.SortOrder||999)-Number(b.SortOrder||999)),
    available:allProfiles.filter(p=>!ids.has(String(p.ProfileID))).map(p=>({ProfileID:p.ProfileID,ProfileName:p.ProfileName,Description:p.Description,Guidance:p.Guidance}))
  };
}

function apiAddRecordAnalysisProfile(recordId,profileId){
  const user=requireUser_('edit');
  if(!getByKey_('Records',recordId))throw new Error('Record not found.');
  const profile=getByKey_('Analysis_Profiles',profileId); if(!profile)throw new Error('Analysis profile not found.');
  const existing=rowsByField_('Record_Analysis_Profiles','RecordID',recordId).find(x=>String(x.ProfileID)===String(profileId));
  if(!existing)appendObject_('Record_Analysis_Profiles',{RecordAnalysisProfileID:makeId_('RAP'),RecordID:recordId,ProfileID:profileId,AddedBy:user.email,AddedAt:new Date()});
  logAudit_(user.email,'ADD_ANALYSIS_PROFILE','Records',recordId,'Added analysis profile '+profile.ProfileName,{profileId});
  return apiGetRecordAnalysis(recordId);
}

function apiRemoveRecordAnalysisProfile(recordId,profileId){
  const user=requireUser_('edit');
  const record=getByKey_('Records',recordId);if(!record)throw new Error('Record not found.');
  if(getApplicableAnalysisProfiles_(record).some(x=>String(x.ProfileID)===String(profileId)))throw new Error('This profile is automatically applicable from the record classification/collection area. Change the trigger data or disable the profile instead.');
  const links=rowsByField_('Record_Analysis_Profiles','RecordID',recordId).filter(x=>String(x.ProfileID)===String(profileId));
  links.sort((a,b)=>b._sheetRow-a._sheetRow).forEach(x=>readTable_('Record_Analysis_Profiles').sheet.deleteRow(x._sheetRow));
  const vals=rowsByField_('Analysis_Values','RecordID',recordId).filter(x=>String(x.ProfileID)===String(profileId));
  vals.sort((a,b)=>b._sheetRow-a._sheetRow).forEach(x=>readTable_('Analysis_Values').sheet.deleteRow(x._sheetRow));
  invalidateTableCache_('Record_Analysis_Profiles');invalidateTableCache_('Analysis_Values');
  logAudit_(user.email,'REMOVE_ANALYSIS_PROFILE','Records',recordId,'Removed manual analysis profile',{profileId});
  return apiGetRecordAnalysis(recordId);
}

function apiSaveRecordAnalysis(recordId,profileId,values,editReason){
  const user=requireUser_('edit');
  const record=getByKey_('Records',recordId);if(!record)throw new Error('Record not found.');
  const profile=getByKey_('Analysis_Profiles',profileId);if(!profile)throw new Error('Analysis profile not found.');
  editReason=String(editReason||'').trim();if(!editReason)throw new Error('Reason for Edit is required.');
  values=values||{};
  const fields=readTableSafe_('Analysis_Fields').rows.filter(f=>String(f.ProfileID)===String(profileId)&&truthy_(f.Active,true));
  const existing=rowsByField_('Analysis_Values','RecordID',recordId).filter(v=>String(v.ProfileID)===String(profileId));
  fields.forEach(f=>{
    const text=String(values[f.FieldID]??'').trim();
    const row=existing.find(v=>String(v.FieldID)===String(f.FieldID));
    if(row)updateByKey_('Analysis_Values',row.AnalysisValueID,{ValueText:text,UpdatedBy:user.email,UpdatedAt:new Date()});
    else if(text)appendObject_('Analysis_Values',{AnalysisValueID:makeId_('ANV'),RecordID:recordId,ProfileID:profileId,FieldID:f.FieldID,ValueText:text,Notes:'',UpdatedBy:user.email,UpdatedAt:new Date()});
  });
  updateByKey_('Records',recordId,{CataloguedBy:mergeContributorNames_(record.CataloguedBy,user.displayName),LastReviewedBy:user.email,LastReviewedDate:new Date()});
  appendRecordEditHistory_(recordId,user,editReason,'Edited '+profile.ProfileName+' analysis');
  logAudit_(user.email,'UPDATE_ANALYSIS','Analysis_Values',recordId,'Updated '+profile.ProfileName+' analysis: '+editReason,{profileId});
  return apiGetRecordAnalysis(recordId);
}

function apiGetAdminConfig(){
  const user=requireUser_('admin');
  const settingsSheet=ensureSettingsSheet_();
  const settingsRows=settingsSheet.getLastRow()>1?settingsSheet.getRange(2,1,settingsSheet.getLastRow()-1,4).getValues().map(r=>({Setting:r[0],Value:r[1],Description:r[2],Required:r[3]})):[];
  const props=PropertiesService.getScriptProperties();
  const users=readTableSafe_('Users').rows.map(u=>({Email:u.Email,DisplayName:u.DisplayName,Role:u.Role,Active:truthy_(u.Active,true),Notes:u.Notes||''}));
  const profiles=readTableSafe_('Analysis_Profiles').rows.map(p=>({ProfileID:p.ProfileID,ProfileName:p.ProfileName,Description:p.Description,TriggerField:p.TriggerField,TriggerValues:p.TriggerValues,Active:truthy_(p.Active,true),SortOrder:p.SortOrder,Guidance:p.Guidance}));
  const listNames=[...new Set(readTableSafe_('Lists').rows.map(x=>String(x.ListName||'')).filter(Boolean))].sort();
  return {user,settingsRows,storage:{MEDIA_ROOT_FOLDER_ID:props.getProperty('MEDIA_ROOT_FOLDER_ID')||'',ACCESSION_DOCS_FOLDER_ID:props.getProperty('ACCESSION_DOCS_FOLDER_ID')||''},users,profiles,listNames};
}

function apiSaveSettingsAdmin(values){
  const user=requireUser_('admin'); values=values||{};
  const sh=ensureSettingsSheet_();const rows=sh.getLastRow()>1?sh.getRange(2,1,sh.getLastRow()-1,4).getValues():[];
  Object.keys(values).forEach(key=>{const idx=rows.findIndex(r=>String(r[0])===String(key));if(idx>=0){sh.getRange(idx+2,2).setValue(String(values[key]??''));}else{sh.appendRow([key,String(values[key]??''),'Added through Setup','']);}});
  resetRunCache_();seedConfiguredPermanentExhibitions_();clearCmsPerformanceCache();logAudit_(user.email,'ADMIN_SETTINGS','Settings','','Updated CMS settings',values);return getCmsSettings_();
}
function apiSaveStorageSettingsAdmin(values){const user=requireUser_('admin');const p=PropertiesService.getScriptProperties();['MEDIA_ROOT_FOLDER_ID','ACCESSION_DOCS_FOLDER_ID'].forEach(k=>{if(Object.prototype.hasOwnProperty.call(values||{},k)){const v=String(values[k]||'').trim();if(v)p.setProperty(k,v);else p.deleteProperty(k);}});logAudit_(user.email,'ADMIN_STORAGE','Settings','','Updated storage folder configuration',{});return {ok:true};}
function apiSaveUserAdmin(payload){const user=requireUser_('admin');payload=payload||{};const email=String(payload.Email||'').trim().toLowerCase();if(!email)throw new Error('Email is required.');if(!Object.prototype.hasOwnProperty.call(CMS.ROLES,String(payload.Role||'')))throw new Error('Choose a valid role.');const existing=getByKey_('Users',email);const row={Email:email,DisplayName:String(payload.DisplayName||email.split('@')[0]),Role:String(payload.Role),Active:!!payload.Active,Notes:String(payload.Notes||'')};if(existing)updateByKey_('Users',email,row);else appendObject_('Users',row);logAudit_(user.email,'ADMIN_USER','Users',email,'Saved CMS user',row);return apiGetAdminConfig();}
function apiListVocabularyTermsAdmin(listName){requireUser_('admin');return readTableSafe_('Lists').rows.filter(x=>String(x.ListName||'')===String(listName||'')).sort((a,b)=>Number(a.SortOrder||999)-Number(b.SortOrder||999)).map(x=>({ListID:x.ListID,Value:x.Value,Active:truthy_(x.Active,true),SortOrder:x.SortOrder,Notes:x.Notes||''}));}
function apiAddVocabularyTermAdmin(listName,value){
  const user=requireUser_('admin');
  listName=String(listName||'').trim();value=String(value||'').trim();
  if(!listName||!value)throw new Error('Vocabulary and term are required.');
  if(value.length>200)throw new Error('Vocabulary terms must be 200 characters or fewer.');
  const existing=readTableSafe_('Lists').rows.filter(x=>String(x.ListName||'')===listName);
  const match=existing.find(x=>String(x.Value||'').toLowerCase()===value.toLowerCase());
  if(match){if(!truthy_(match.Active,true))updateByKey_('Lists',match.ListID,{Active:true});return {ok:true,existing:true};}
  appendObject_('Lists',{ListID:makeId_('LST'),ListName:listName,Value:value,SortOrder:existing.length+1,Active:true,Notes:'Added through Setup by '+user.email});
  resetRunCache_();cacheRemove_('enums');logAudit_(user.email,'ADMIN_VOCAB','Lists','', 'Added vocabulary term '+value,{listName,value});return {ok:true};
}
function apiToggleVocabularyTermAdmin(listId,active){const user=requireUser_('admin');if(!getByKey_('Lists',listId))throw new Error('Vocabulary term not found.');updateByKey_('Lists',listId,{Active:!!active});resetRunCache_();cacheRemove_('enums');logAudit_(user.email,'ADMIN_VOCAB','Lists',listId,(active?'Activated':'Deactivated')+' vocabulary term',{});return {ok:true};}
function apiSaveAnalysisProfileAdmin(payload){const user=requireUser_('admin');payload=payload||{};const id=String(payload.ProfileID||'').trim();if(!id||!getByKey_('Analysis_Profiles',id))throw new Error('Analysis profile not found.');updateByKey_('Analysis_Profiles',id,{ProfileName:String(payload.ProfileName||''),Description:String(payload.Description||''),TriggerField:String(payload.TriggerField||''),TriggerValues:Array.isArray(payload.TriggerValues)?joinTerms_(payload.TriggerValues):String(payload.TriggerValues||''),Active:!!payload.Active,Guidance:String(payload.Guidance||'')});logAudit_(user.email,'ADMIN_ANALYSIS','Analysis_Profiles',id,'Updated analysis profile',payload);return apiGetAdminConfig();}

function apiListAnalysisFieldsAdmin(profileId){
  requireUser_('admin');
  profileId=String(profileId||'').trim();
  if(!profileId||!getByKey_('Analysis_Profiles',profileId))throw new Error('Analysis profile not found.');
  return readTableSafe_('Analysis_Fields').rows
    .filter(f=>String(f.ProfileID||'')===profileId)
    .sort((a,b)=>Number(a.SortOrder||999)-Number(b.SortOrder||999))
    .map(f=>({FieldID:f.FieldID,ProfileID:f.ProfileID,FieldName:f.FieldName,Label:f.Label,FieldType:f.FieldType,OptionsListName:f.OptionsListName||'',Unit:f.Unit||'',HelpText:f.HelpText||'',Active:truthy_(f.Active,true),SortOrder:f.SortOrder||''}));
}
function apiSaveAnalysisFieldAdmin(payload){
  const user=requireUser_('admin');payload=payload||{};
  const profileId=String(payload.ProfileID||'').trim();
  if(!profileId||!getByKey_('Analysis_Profiles',profileId))throw new Error('Analysis profile not found.');
  const label=String(payload.Label||'').trim();if(!label)throw new Error('Field label is required.');
  const allowed=['text','textarea','number','select'];
  const fieldType=String(payload.FieldType||'text');if(!allowed.includes(fieldType))throw new Error('Unsupported field type.');
  let fieldName=String(payload.FieldName||'').trim().replace(/[^A-Za-z0-9_]/g,'');
  if(!fieldName)fieldName=label.replace(/[^A-Za-z0-9]+/g,' ').trim().split(/\s+/).map((x,i)=>i?x.charAt(0).toUpperCase()+x.slice(1):x.toLowerCase()).join('')||'Field';
  const existingFields=readTableSafe_('Analysis_Fields').rows.filter(f=>String(f.ProfileID||'')===profileId);
  let fieldId=String(payload.FieldID||'').trim();
  if(!fieldId){
    if(existingFields.some(f=>String(f.FieldName||'').toLowerCase()===fieldName.toLowerCase()))throw new Error('That field name already exists in this profile.');
    fieldId=makeId_('ANF');
    appendObject_('Analysis_Fields',{FieldID:fieldId,ProfileID:profileId,FieldName:fieldName,Label:label,FieldType:fieldType,OptionsListName:String(payload.OptionsListName||''),Unit:String(payload.Unit||''),HelpText:String(payload.HelpText||''),Active:payload.Active!==false,SortOrder:Number(payload.SortOrder||existingFields.length+1)});
  }else{
    if(!getByKey_('Analysis_Fields',fieldId))throw new Error('Analysis field not found.');
    updateByKey_('Analysis_Fields',fieldId,{ProfileID:profileId,FieldName:fieldName,Label:label,FieldType:fieldType,OptionsListName:String(payload.OptionsListName||''),Unit:String(payload.Unit||''),HelpText:String(payload.HelpText||''),Active:!!payload.Active,SortOrder:Number(payload.SortOrder||999)});
  }
  resetRunCache_();logAudit_(user.email,'ADMIN_ANALYSIS_FIELD','Analysis_Fields',fieldId,'Saved analysis field '+label,{profileId,fieldName,fieldType});
  return apiListAnalysisFieldsAdmin(profileId);
}

function apiGetRecordEditHistory(recordId) {
  requireUser_('read');
  const rows = rowsByField_('Record_Edit_History','RecordID',recordId);
  rows.sort((a,b)=>String(b.EditedAt||'').localeCompare(String(a.EditedAt||'')));
  return rows;
}

function apiSaveNaturalHistoryDetails(recordId, payload, editReason) {
  const user = requireUser_('edit');
  const record = getByKey_('Records', recordId);
  if (!record) throw new Error('Record not found: ' + recordId);
  const nhArea = getCmsSettings_().naturalHistoryCollectionArea || 'Natural History';
  if (String(record.CollectionArea || '') !== nhArea) {
    throw new Error('Natural History details are only available when Collection Area is ' + nhArea + '.');
  }

  editReason = String(editReason || '').trim();
  if (!editReason) throw new Error('Reason for Edit is required.');

  payload = payload || {};
  const existing = rowsByField_('Natural_History_Details','RecordID',recordId)[0] || null;

  const specimenCount = String(payload.SpecimenCount ?? '').trim();
  if (specimenCount && (!/^\d+$/.test(specimenCount) || Number(specimenCount) < 1)) {
    throw new Error('Specimen count must be a whole number of 1 or greater.');
  }

  const latitude = String(payload.Latitude ?? '').trim();
  const longitude = String(payload.Longitude ?? '').trim();
  if (latitude && (isNaN(Number(latitude)) || Number(latitude) < -90 || Number(latitude) > 90)) {
    throw new Error('Latitude must be between -90 and 90.');
  }
  if (longitude && (isNaN(Number(longitude)) || Number(longitude) < -180 || Number(longitude) > 180)) {
    throw new Error('Longitude must be between -180 and 180.');
  }

  const row = {
    RecordID: recordId,
    SpecimenType: String(payload.SpecimenType || ''),
    ScientificName: String(payload.ScientificName || ''),
    CommonName: String(payload.CommonName || ''),
    IdentificationQualifier: String(payload.IdentificationQualifier || ''),
    Kingdom: String(payload.Kingdom || ''),
    PhylumDivision: String(payload.PhylumDivision || ''),
    OrderName: String(payload.OrderName || ''),
    Family: String(payload.Family || ''),
    Genus: String(payload.Genus || ''),
    Species: String(payload.Species || ''),
    TypeStatus: String(payload.TypeStatus || 'Not a type'),
    SpecimenCount: specimenCount,
    Sex: String(payload.Sex || ''),
    LifeStage: String(payload.LifeStage || ''),
    AnatomicalElement: String(payload.AnatomicalElement || ''),
    PreparationPreservative: String(payload.PreparationPreservative || ''),
    CollectorPartyID: String(payload.CollectorPartyID || ''),
    CollectorText: String(payload.CollectorText || ''),
    CollectionDate: String(payload.CollectionDate || ''),
    FieldNumber: String(payload.FieldNumber || ''),
    VerbatimLocality: String(payload.VerbatimLocality || ''),
    PlaceID: String(payload.PlaceID || ''),
    Habitat: String(payload.Habitat || ''),
    Latitude: latitude,
    Longitude: longitude,
    GeologicalAge: String(payload.GeologicalAge || ''),
    FormationMember: String(payload.FormationMember || ''),
    LabelText: String(payload.LabelText || ''),
    Notes: String(payload.Notes || ''),
    UpdatedBy: user.email,
    UpdatedAt: new Date()
  };

  if (existing) {
    updateByKey_('Natural_History_Details', existing.NaturalHistoryID, row);
  } else {
    row.NaturalHistoryID = makeId_('NHS');
    appendObject_('Natural_History_Details', row);
  }

  updateByKey_('Records', recordId, {
    CataloguedBy: mergeContributorNames_(record.CataloguedBy, user.displayName),
    LastReviewedBy: user.email,
    LastReviewedDate: new Date()
  });

  appendRecordEditHistory_(recordId, user, editReason, 'Edited natural-history details');
  logAudit_(user.email,'UPDATE','Natural_History_Details',recordId,'Updated natural-history specimen details: ' + editReason,row);
  return apiGetRecord(recordId);
}

function apiCreateRecord(payload, measurements) {
  const user = requireUser_('create');
  const id = makeId_('REC');

  const row = Object.assign({
    RecordID: id,
    MigrationID: '',
    RecordType: 'Object / Collection Item',
    CatalogueStatus: 'In progress',
    PreferredTitle: 'Untitled record',
    ReviewPriority: 'Normal',
    PublicAccessStatus: 'Internal only',
    LifecycleStatus: 'Active',
    IdentificationCertainty: 'Unknown',
    DisplayStatus: 'Not on display',
    Active: true,
    CataloguedBy: user.displayName
  }, prepareRecordChanges_(payload || {}));

  appendObject_('Records', row);
  replaceMeasurements_(id, measurements || []);
  appendRecordEditHistory_(id, user, 'Record created', 'Created');
  logAudit_(user.email,'CREATE','Records',id,'Created collection record',{record:row,measurements:measurements||[]});
  return apiGetRecord(id);
}

function apiSaveRecord(recordId, changes, measurements, editReason) {
  const user = requireUser_('edit');
  const existing = getByKey_('Records', recordId);
  if (!existing) throw new Error('Record not found: ' + recordId);

  editReason = String(editReason || '').trim();
  if (!editReason) throw new Error('Reason for Edit is required.');

  const safe = prepareRecordChanges_(changes || {}, existing);
  safe.LastReviewedBy = user.email;
  safe.LastReviewedDate = new Date();
  safe.CataloguedBy = mergeContributorNames_(existing.CataloguedBy, user.displayName);

  updateByKey_('Records', recordId, safe);

  if (measurements !== undefined && measurements !== null) {
    replaceMeasurements_(recordId, measurements);
  }

  appendRecordEditHistory_(recordId, user, editReason, 'Edited');
  logAudit_(user.email,'UPDATE','Records',recordId,'Edited collection record: ' + editReason,{changes:safe,measurements:measurements,comment:editReason});
  return apiGetRecord(recordId);
}

function apiAddVocabularyTerm(listName, value) {
  const user = requireUser_('vocabulary');
  const allowed = ['Classification','Place','Material','Technique'];
  if (!allowed.includes(String(listName))) throw new Error('This vocabulary cannot be edited from the record form.');

  value = String(value || '').trim();
  if (!value) throw new Error('Enter a term.');
  if (value.length > 200) throw new Error('Vocabulary terms must be 200 characters or fewer.');

  const existing = getListValues_(listName);
  const match = existing.find(x => x.toLowerCase() === value.toLowerCase());
  if (match) return {added:false,value:match,values:existing};

  const nextOrder = existing.length + 1;
  appendObject_('Lists', {
    ListID: makeId_('LST'),
    ListName: listName,
    Value: value,
    SortOrder: nextOrder,
    Active: true,
    Notes: 'Added through Open Museum CMS by ' + user.email
  });

  return {added:true,value,values:getListValues_(listName)};
}


/* =========================
   v0.3 lifecycle / accessions / authorities / exhibits
   ========================= */

function apiDeleteRecord(recordId, reason) {
  const user = requireUser_('delete');
  const record = getByKey_('Records', recordId);
  if (!record) throw new Error('Record not found: ' + recordId);
  if (recordLifecycle_(record) === 'Deleted') return apiGetRecord(recordId);
  if (String(record.AccessionID || '').trim()) {
    throw new Error('This record is linked to an accession. Use Deaccession rather than Delete.');
  }
  reason = String(reason || '').trim();
  if (!reason) throw new Error('A deletion reason is required.');

  const snapshot = Object.assign({}, record);
  updateByKey_('Records', recordId, {
    LifecycleStatus: 'Deleted', Active: false, DeletedAt: new Date(), DeletedBy: user.email, DeletionReason: reason
  });
  logAudit_(user.email,'DELETE_RECORD','Records',recordId,'Removed non-accessioned record from active catalogue',{reason,snapshot});
  return apiGetRecord(recordId);
}

function apiRestoreDeletedRecord(recordId) {
  const user = requireUser_('delete');
  const record = getByKey_('Records', recordId);
  if (!record) throw new Error('Record not found: ' + recordId);
  if (recordLifecycle_(record) !== 'Deleted') throw new Error('Record is not deleted.');
  updateByKey_('Records', recordId, {LifecycleStatus:'Active',Active:true,DeletedAt:'',DeletedBy:'',DeletionReason:''});
  logAudit_(user.email,'RESTORE_RECORD','Records',recordId,'Restored deleted record',{});
  return apiGetRecord(recordId);
}

function apiDeaccessionRecord(payload) {
  const user = requireUser_('deaccession');
  payload = payload || {};
  const recordId = String(payload.RecordID || '');
  const record = getByKey_('Records', recordId);
  if (!record) throw new Error('Record not found: ' + recordId);
  if (recordLifecycle_(record) === 'Deleted') throw new Error('A deleted record cannot be deaccessioned. Restore it first.');
  if (recordLifecycle_(record) === 'Deaccessioned') throw new Error('This record is already deaccessioned.');

  const reason = String(payload.Reason || '').trim();
  if (!reason) throw new Error('A deaccession reason is required.');
  const id = makeId_('DEA');
  const row = {
    DeaccessionID:id, RecordID:recordId,
    DeaccessionDate:payload.DeaccessionDate || new Date(), Reason:reason,
    ApprovalReference:payload.ApprovalReference || '', ApprovalDate:payload.ApprovalDate || '', ApprovedBy:payload.ApprovedBy || '',
    DispositionMethod:payload.DispositionMethod || '', DispositionDate:payload.DispositionDate || '', Recipient:payload.Recipient || '',
    Notes:payload.Notes || '', CreatedBy:user.email, CreatedAt:new Date()
  };
  appendObject_('Deaccessions',row);
  updateByKey_('Records',recordId,{LifecycleStatus:'Deaccessioned',Active:false});
  logAudit_(user.email,'DEACCESSION','Records',recordId,'Deaccessioned collection record',row);
  return apiGetRecord(recordId);
}

function apiListAccessions(params) {
  requireUser_('read');
  params=params||{};
  const q=String(params.q||'').trim().toLowerCase();
  const records=readTableSafe_('Records').rows;
  const counts={}; records.forEach(r=>{if(r.AccessionID) counts[String(r.AccessionID)]=(counts[String(r.AccessionID)]||0)+1;});
  let rows=readTableSafe_('Accessions').rows.filter(r=>truthy_(r.Active,true));
  if(q) rows=rows.filter(r=>['AccessionNumber','DonorSourceDisplay','AccessionSummary','Notes'].some(f=>String(r[f]||'').toLowerCase().includes(q)));
  rows.sort((a,b)=>String(b.AccessionDate||'').localeCompare(String(a.AccessionDate||'')) || String(a.AccessionNumber||'').localeCompare(String(b.AccessionNumber||'')));
  return rows.map(r=>Object.assign({},r,{ItemCount:counts[String(r.AccessionID)]||0,SourceParty:getByKey_('People_Orgs',r.SourcePartyID)}));
}

function apiGetAccession(accessionId) {
  requireUser_('read');
  const accession=getByKey_('Accessions',accessionId);
  if(!accession) throw new Error('Accession not found: '+accessionId);
  const records=rowsByField_('Records','AccessionID',accessionId);
  return {accession,sourceParty:accession.SourcePartyID?getByKey_('People_Orgs',accession.SourcePartyID):null,records};
}
function apiCreateAccession(payload, documentPayload) {
  const user = requireUser_('accessions');
  const accession = createAccession_(payload || {}, user, documentPayload || null);
  return apiGetAccession(accession.AccessionID);
}

function apiCreateAccessionForRecord(recordId, payload, documentPayload) {
  const user = requireUser_('accessions');
  const record = getByKey_('Records', recordId);
  if (!record) throw new Error('Record not found.');
  if (recordLifecycle_(record) !== 'Active') throw new Error('Only active records can be accessioned.');

  const accession = createAccession_(payload || {}, user, documentPayload || null);
  updateByKey_('Records', recordId, {AccessionID: accession.AccessionID});
  logAudit_(user.email,'ASSIGN_ACCESSION','Records',recordId,'Created and assigned accession',{accessionId:accession.AccessionID});
  return apiGetRecord(recordId);
}

function apiSaveAccession(accessionId, payload, documentPayload) {
  const user = requireUser_('accessions');
  const existing = getByKey_('Accessions', accessionId);
  if (!existing) throw new Error('Accession not found.');

  const row = {
    AccessionNumber: payload.AccessionNumber || '',
    AccessionDate: payload.AccessionDate || '',
    AcquisitionMethod: payload.AcquisitionMethod || '',
    SourcePartyID: payload.SourcePartyID || '',
    DonorSourceDisplay: payload.DonorSourceDisplay || '',
    ContactReference: payload.ContactReference || '',
    AccessionSummary: payload.AccessionSummary || '',
    LegalDocumentStatus: payload.LegalDocumentStatus || 'Not assessed',
    OwnershipStatus: payload.OwnershipStatus || 'Unknown',
    DocumentationFolderURL: payload.DocumentationFolderURL || '',
    RestrictionsConditions: payload.RestrictionsConditions || '',
    Notes: payload.Notes || '',
    Active: true,
    UpdatedBy: user.email,
    UpdatedAt: new Date()
  };

  if (payload.LegalDocumentURL !== undefined) row.LegalDocumentURL = payload.LegalDocumentURL || '';

  if (documentPayload && documentPayload.base64) {
    const uploaded = uploadAccessionDocument_(accessionId, payload.AccessionNumber || existing.AccessionNumber || '', documentPayload);
    row.LegalDocumentURL = uploaded.url;
    row.LegalDocumentFileID = uploaded.id;
    row.LegalDocumentFileName = uploaded.name;
  }

  updateByKey_('Accessions', accessionId, row);
  logAudit_(user.email,'UPDATE','Accessions',accessionId,'Updated accession',row);
  return apiGetAccession(accessionId);
}

function createAccession_(payload, user, documentPayload) {
  const id = makeId_('ACC');
  const row = {
    AccessionID:id,
    AccessionNumber:payload.AccessionNumber||'',
    AccessionDate:payload.AccessionDate||'',
    AcquisitionMethod:payload.AcquisitionMethod||'',
    SourcePartyID:payload.SourcePartyID||'',
    DonorSourceDisplay:payload.DonorSourceDisplay||'',
    ContactReference:payload.ContactReference||'',
    AccessionSummary:payload.AccessionSummary||'',
    LegalDocumentStatus:payload.LegalDocumentStatus||'Not assessed',
    OwnershipStatus:payload.OwnershipStatus||'Unknown',
    LegalDocumentURL:payload.LegalDocumentURL||'',
    DocumentationFolderURL:payload.DocumentationFolderURL||'',
    RestrictionsConditions:payload.RestrictionsConditions||'',
    Notes:payload.Notes||'',
    Active:true,
    CreatedBy:user.email,
    CreatedAt:new Date(),
    UpdatedBy:user.email,
    UpdatedAt:new Date(),
    LegalDocumentFileID:'',
    LegalDocumentFileName:''
  };

  if (documentPayload && documentPayload.base64) {
    const uploaded = uploadAccessionDocument_(id, row.AccessionNumber, documentPayload);
    row.LegalDocumentURL = uploaded.url;
    row.LegalDocumentFileID = uploaded.id;
    row.LegalDocumentFileName = uploaded.name;
  }

  appendObject_('Accessions',row);
  logAudit_(user.email,'CREATE','Accessions',id,'Created accession',row);
  return row;
}

function uploadAccessionDocument_(accessionId, accessionNumber, payload) {
  const mime = String(payload.mimeType || '').toLowerCase();
  const fileName = String(payload.fileName || 'accession-document.pdf');
  if (mime !== 'application/pdf' && !fileName.toLowerCase().endsWith('.pdf')) {
    throw new Error('Accession documentation must be a PDF.');
  }

  const base64 = String(payload.base64 || '');
  if (!base64) throw new Error('The accession-document upload is empty.');
  if (Math.floor(base64.length * 0.75) > 12 * 1024 * 1024) {
    throw new Error('Accession-document uploads are currently limited to approximately 12 MB.');
  }

  const props = PropertiesService.getScriptProperties();
  const rootId = props.getProperty('ACCESSION_DOCS_FOLDER_ID') || props.getProperty('MEDIA_ROOT_FOLDER_ID');
  if (!rootId) throw new Error('Set ACCESSION_DOCS_FOLDER_ID in Project Settings > Script properties before uploading accession documentation.');

  const prefix = String(accessionNumber || accessionId).trim().replace(/[\\/:*?"<>|]+/g,'-');
  const safeName = prefix + ' - ' + fileName;
  const bytes = Utilities.base64Decode(base64);
  const blob = Utilities.newBlob(bytes,'application/pdf',safeName);

  const file = Drive.Files.create({
    name:safeName,
    mimeType:'application/pdf',
    parents:[rootId],
    appProperties:{openMuseumCmsAccessionId:accessionId}
  }, blob, {
    supportsAllDrives:true,
    fields:'id,name,webViewLink,driveId'
  });

  return {
    id:file.id,
    name:file.name,
    url:file.webViewLink || ('https://drive.google.com/open?id=' + file.id)
  };
}

function apiAssignRecordToAccession(recordId, accessionId) {
  const user=requireUser_('accessions');
  const record=getByKey_('Records',recordId); if(!record) throw new Error('Record not found.');
  if(recordLifecycle_(record)!=='Active') throw new Error('Only active records can be assigned to an accession.');
  if(!getByKey_('Accessions',accessionId)) throw new Error('Accession not found.');
  updateByKey_('Records',recordId,{AccessionID:accessionId});
  logAudit_(user.email,'ASSIGN_ACCESSION','Records',recordId,'Assigned record to accession',{accessionId}); return apiGetRecord(recordId);
}

function apiUnassignRecordFromAccession(recordId) {
  const user=requireUser_('accessions');
  const record=getByKey_('Records',recordId); if(!record) throw new Error('Record not found.');
  const old=record.AccessionID||''; updateByKey_('Records',recordId,{AccessionID:''});
  logAudit_(user.email,'UNASSIGN_ACCESSION','Records',recordId,'Removed accession link',{oldAccessionID:old}); return apiGetRecord(recordId);
}

function apiListPeopleOrgs(params) {
  requireUser_('read'); params=params||{}; const q=String(params.q||'').trim().toLowerCase();
  const roleRows=readTableSafe_('Record_Roles').rows; const counts={}; roleRows.forEach(r=>{if(r.PartyID)counts[String(r.PartyID)]=(counts[String(r.PartyID)]||0)+1;});
  let rows=readTableSafe_('People_Orgs').rows.filter(r=>truthy_(r.Active,true));
  if(q) rows=rows.filter(r=>['PreferredName','SortName','AlternateNames','PlaceAssociated','BiographicalNote','NationalityCommunity','OccupationsTypes','Addresses','ExternalIdentifiers'].some(f=>String(r[f]||'').toLowerCase().includes(q)));
  rows.sort((a,b)=>String(a.SortName||a.PreferredName||'').localeCompare(String(b.SortName||b.PreferredName||'')));
  return rows.map(r=>Object.assign({},r,{LinkedRecordCount:counts[String(r.PartyID)]||0}));
}

function apiGetParty(partyId) {
  requireUser_('read');
  const party=getByKey_('People_Orgs',partyId);
  if(!party) throw new Error('Authority record not found.');
  const links=rowsByField_('Record_Roles','PartyID',partyId);
  return {party,links:links.map(l=>Object.assign({},l,{Record:getByKey_('Records',l.RecordID)}))};
}
function apiSaveParty(payload) {
  const user=requireUser_('authorities'); payload=payload||{}; const id=String(payload.PartyID||'')||makeId_('PTY');
  const row={PartyType:payload.PartyType||'Person',PreferredName:payload.PreferredName||'',SortName:payload.SortName||'',AlternateNames:payload.AlternateNames||'',DateOfBirthOrFoundation:payload.DateOfBirthOrFoundation||'',DateOfDeathOrDissolution:payload.DateOfDeathOrDissolution||'',PlaceAssociated:payload.PlaceAssociated||'',NationalityCommunity:payload.NationalityCommunity||'',OccupationsTypes:payload.OccupationsTypes||'',Addresses:payload.Addresses||'',BiographicalNote:payload.BiographicalNote||'',ContactDetailsInternal:payload.ContactDetailsInternal||'',ExternalAuthorityURL:payload.ExternalAuthorityURL||'',ExternalIdentifiers:payload.ExternalIdentifiers||'',InternalNotes:payload.InternalNotes||'',Active:true,UpdatedBy:user.email,UpdatedAt:new Date()};
  if(!row.PreferredName.trim()) throw new Error('Preferred name is required.');
  if(payload.PartyID){ updateByKey_('People_Orgs',id,row); logAudit_(user.email,'UPDATE','People_Orgs',id,'Updated authority record',row); }
  else { row.PartyID=id; row.CreatedBy=user.email; row.CreatedAt=new Date(); appendObject_('People_Orgs',row); logAudit_(user.email,'CREATE','People_Orgs',id,'Created authority record',row); }
  return apiGetParty(id);
}

function apiLinkPartyToRecord(payload) {
  const user=requireUser_('authorities'); payload=payload||{};
  if(!getByKey_('Records',payload.RecordID)) throw new Error('Record not found.');
  if(!getByKey_('People_Orgs',payload.PartyID)) throw new Error('Authority record not found.');
  const duplicate=readTableSafe_('Record_Roles').rows.find(r=>String(r.RecordID||'')===String(payload.RecordID)&&String(r.PartyID||'')===String(payload.PartyID)&&String(r.RoleType||'')===String(payload.RoleType||''));
  if(duplicate) throw new Error('This authority is already linked to the record with that role.');
  const id=makeId_('RRL'); const row={RecordRoleID:id,RecordID:payload.RecordID,PartyID:payload.PartyID,RoleType:payload.RoleType||'Associated Person / Organisation',RoleNote:payload.RoleNote||'',AttributionStatus:payload.AttributionStatus||'Documented',StartDate:payload.StartDate||'',EndDate:payload.EndDate||'',Notes:payload.Notes||'',CreatedBy:user.email,CreatedAt:new Date()};
  appendObject_('Record_Roles',row); logAudit_(user.email,'LINK_AUTHORITY','Record_Roles',id,'Linked authority to collection record',row); return apiGetRecord(payload.RecordID);
}

function apiRemoveRecordRole(recordRoleId) {
  const user=requireUser_('authorities'); const row=getByKey_('Record_Roles',recordRoleId); if(!row) throw new Error('Relationship not found.');
  deleteRowByKey_('Record_Roles',recordRoleId); logAudit_(user.email,'UNLINK_AUTHORITY','Record_Roles',recordRoleId,'Removed authority link',row); return apiGetRecord(row.RecordID);
}

function apiListPlaces(params) {
  requireUser_('read'); params=params||{}; const q=String(params.q||'').toLowerCase();
  const links=readTableSafe_('Record_Places').rows,counts={}; links.forEach(r=>{if(r.PlaceID)counts[String(r.PlaceID)]=(counts[String(r.PlaceID)]||0)+1;});
  let rows=readTableSafe_('Places').rows.filter(r=>truthy_(r.Active,true));
  if(q)rows=rows.filter(r=>['PreferredName','AlternateNames','Country','ScopeNote','PlaceType'].some(f=>String(r[f]||'').toLowerCase().includes(q)));
  rows.sort((a,b)=>String(a.PreferredName||'').localeCompare(String(b.PreferredName||'')));
  return rows.map(r=>Object.assign({},r,{LinkedRecordCount:counts[String(r.PlaceID)]||0}));
}
function apiGetPlace(placeId){requireUser_('read');const place=getByKey_('Places',placeId);if(!place)throw new Error('Place authority not found.');const links=rowsByField_('Record_Places','PlaceID',placeId).map(l=>Object.assign({},l,{Record:getByKey_('Records',l.RecordID)}));return {place,links};}
function apiSavePlace(payload){const user=requireUser_('authorities');payload=payload||{};const id=String(payload.PlaceID||'')||makeId_('PLC');const row={PreferredName:payload.PreferredName||'',AlternateNames:payload.AlternateNames||'',PlaceType:payload.PlaceType||'Other',ParentPlaceID:payload.ParentPlaceID||'',Country:payload.Country||'',Latitude:payload.Latitude||'',Longitude:payload.Longitude||'',ScopeNote:payload.ScopeNote||'',ExternalAuthorityURL:payload.ExternalAuthorityURL||'',Active:true,UpdatedBy:user.email,UpdatedAt:new Date()};if(!String(row.PreferredName).trim())throw new Error('Preferred place name is required.');if(payload.PlaceID){updateByKey_('Places',id,row);logAudit_(user.email,'UPDATE','Places',id,'Updated place authority',row);}else{row.PlaceID=id;row.CreatedBy=user.email;row.CreatedAt=new Date();appendObject_('Places',row);logAudit_(user.email,'CREATE','Places',id,'Created place authority',row);}return apiGetPlace(id);}
function apiLinkPlaceToRecord(payload){const user=requireUser_('authorities');payload=payload||{};if(!getByKey_('Records',payload.RecordID))throw new Error('Record not found.');if(!getByKey_('Places',payload.PlaceID))throw new Error('Place not found.');const dupe=readTableSafe_('Record_Places').rows.find(r=>String(r.RecordID||'')===String(payload.RecordID)&&String(r.PlaceID||'')===String(payload.PlaceID)&&String(r.PlaceRole||'')===String(payload.PlaceRole||''));if(dupe)throw new Error('That place is already linked with this relationship.');const id=makeId_('RPL');const row={RecordPlaceID:id,RecordID:payload.RecordID,PlaceID:payload.PlaceID,PlaceRole:payload.PlaceRole||'Associated with',Certainty:payload.Certainty||'Certain',StartDate:payload.StartDate||'',EndDate:payload.EndDate||'',Notes:payload.Notes||'',CreatedBy:user.email,CreatedAt:new Date()};appendObject_('Record_Places',row);logAudit_(user.email,'LINK_PLACE','Record_Places',id,'Linked place to record',row);return apiGetRecord(payload.RecordID);}
function apiRemoveRecordPlace(id){const user=requireUser_('authorities');const row=getByKey_('Record_Places',id);if(!row)throw new Error('Place relationship not found.');deleteRowByKey_('Record_Places',id);logAudit_(user.email,'UNLINK_PLACE','Record_Places',id,'Removed place relationship',row);return apiGetRecord(row.RecordID);}

function apiListSubjects(params){requireUser_('read');params=params||{};const q=String(params.q||'').toLowerCase();const links=readTableSafe_('Record_Subjects').rows,counts={};links.forEach(r=>{if(r.SubjectID)counts[String(r.SubjectID)]=(counts[String(r.SubjectID)]||0)+1;});let rows=readTableSafe_('Subjects').rows.filter(r=>truthy_(r.Active,true));if(q)rows=rows.filter(r=>['PreferredTerm','AlternateTerms','ScopeNote'].some(f=>String(r[f]||'').toLowerCase().includes(q)));rows.sort((a,b)=>String(a.PreferredTerm||'').localeCompare(String(b.PreferredTerm||'')));return rows.map(r=>Object.assign({},r,{LinkedRecordCount:counts[String(r.SubjectID)]||0}));}
function apiGetSubject(subjectId){requireUser_('read');const subject=getByKey_('Subjects',subjectId);if(!subject)throw new Error('Subject authority not found.');const links=rowsByField_('Record_Subjects','SubjectID',subjectId).map(l=>Object.assign({},l,{Record:getByKey_('Records',l.RecordID)}));return {subject,links};}
function apiSaveSubject(payload){const user=requireUser_('authorities');payload=payload||{};const id=String(payload.SubjectID||'')||makeId_('SUB');const row={PreferredTerm:payload.PreferredTerm||'',AlternateTerms:payload.AlternateTerms||'',ParentSubjectID:payload.ParentSubjectID||'',ScopeNote:payload.ScopeNote||'',ExternalAuthorityURL:payload.ExternalAuthorityURL||'',Active:true,UpdatedBy:user.email,UpdatedAt:new Date()};if(!String(row.PreferredTerm).trim())throw new Error('Preferred subject term is required.');if(payload.SubjectID){updateByKey_('Subjects',id,row);logAudit_(user.email,'UPDATE','Subjects',id,'Updated subject authority',row);}else{row.SubjectID=id;row.CreatedBy=user.email;row.CreatedAt=new Date();appendObject_('Subjects',row);logAudit_(user.email,'CREATE','Subjects',id,'Created subject authority',row);}return apiGetSubject(id);}
function apiLinkSubjectToRecord(payload){const user=requireUser_('authorities');payload=payload||{};if(!getByKey_('Records',payload.RecordID))throw new Error('Record not found.');if(!getByKey_('Subjects',payload.SubjectID))throw new Error('Subject not found.');const dupe=readTableSafe_('Record_Subjects').rows.find(r=>String(r.RecordID||'')===String(payload.RecordID)&&String(r.SubjectID||'')===String(payload.SubjectID));if(dupe)throw new Error('That subject is already linked to this record.');const id=makeId_('RSU');const row={RecordSubjectID:id,RecordID:payload.RecordID,SubjectID:payload.SubjectID,Certainty:payload.Certainty||'Certain',Notes:payload.Notes||'',CreatedBy:user.email,CreatedAt:new Date()};appendObject_('Record_Subjects',row);logAudit_(user.email,'LINK_SUBJECT','Record_Subjects',id,'Linked subject to record',row);return apiGetRecord(payload.RecordID);}
function apiRemoveRecordSubject(id){const user=requireUser_('authorities');const row=getByKey_('Record_Subjects',id);if(!row)throw new Error('Subject relationship not found.');deleteRowByKey_('Record_Subjects',id);logAudit_(user.email,'UNLINK_SUBJECT','Record_Subjects',id,'Removed subject relationship',row);return apiGetRecord(row.RecordID);}

function apiListReferences(params){requireUser_('read');params=params||{};const q=String(params.q||'').toLowerCase();const links=readTableSafe_('Record_References').rows,counts={};links.forEach(r=>{if(r.ReferenceID)counts[String(r.ReferenceID)]=(counts[String(r.ReferenceID)]||0)+1;});let rows=readTableSafe_('Bibliography').rows.filter(r=>truthy_(r.Active,true));if(q)rows=rows.filter(r=>['Citation','AuthorEditor','Title','Publication','Year','URLDOI'].some(f=>String(r[f]||'').toLowerCase().includes(q)));rows.sort((a,b)=>String(a.Citation||a.Title||'').localeCompare(String(b.Citation||b.Title||'')));return rows.map(r=>Object.assign({},r,{LinkedRecordCount:counts[String(r.ReferenceID)]||0}));}
function apiGetReference(referenceId){requireUser_('read');const reference=getByKey_('Bibliography',referenceId);if(!reference)throw new Error('Reference not found.');const links=rowsByField_('Record_References','ReferenceID',referenceId).map(l=>Object.assign({},l,{Record:getByKey_('Records',l.RecordID)}));return {reference,links};}
function apiSaveReference(payload){const user=requireUser_('authorities');payload=payload||{};const id=String(payload.ReferenceID||'')||makeId_('REF');const row={Citation:payload.Citation||'',AuthorEditor:payload.AuthorEditor||'',Title:payload.Title||'',Publication:payload.Publication||'',Year:payload.Year||'',URLDOI:payload.URLDOI||'',Notes:payload.Notes||'',Active:true,UpdatedBy:user.email,UpdatedAt:new Date()};if(!String(row.Citation||row.Title).trim())throw new Error('Citation or title is required.');if(payload.ReferenceID){updateByKey_('Bibliography',id,row);logAudit_(user.email,'UPDATE','Bibliography',id,'Updated bibliographic reference',row);}else{row.ReferenceID=id;row.CreatedBy=user.email;row.CreatedAt=new Date();appendObject_('Bibliography',row);logAudit_(user.email,'CREATE','Bibliography',id,'Created bibliographic reference',row);}return apiGetReference(id);}
function apiLinkReferenceToRecord(payload){const user=requireUser_('edit');payload=payload||{};if(!getByKey_('Records',payload.RecordID))throw new Error('Record not found.');if(!getByKey_('Bibliography',payload.ReferenceID))throw new Error('Reference not found.');const dupe=readTableSafe_('Record_References').rows.find(r=>String(r.RecordID||'')===String(payload.RecordID)&&String(r.ReferenceID||'')===String(payload.ReferenceID)&&String(r.ReferenceRole||'')===String(payload.ReferenceRole||''));if(dupe)throw new Error('That reference is already linked with this role.');const id=makeId_('RRF');const row={RecordReferenceID:id,RecordID:payload.RecordID,ReferenceID:payload.ReferenceID,ReferenceRole:payload.ReferenceRole||'General reference',PageFigure:payload.PageFigure||'',Notes:payload.Notes||'',CreatedBy:user.email,CreatedAt:new Date()};appendObject_('Record_References',row);logAudit_(user.email,'LINK_REFERENCE','Record_References',id,'Linked reference to record',row);return apiGetRecord(payload.RecordID);}
function apiRemoveRecordReference(id){const user=requireUser_('edit');const row=getByKey_('Record_References',id);if(!row)throw new Error('Reference relationship not found.');deleteRowByKey_('Record_References',id);logAudit_(user.email,'UNLINK_REFERENCE','Record_References',id,'Removed reference relationship',row);return apiGetRecord(row.RecordID);}

function apiSaveInscription(payload){const user=requireUser_('edit');payload=payload||{};if(!getByKey_('Records',payload.RecordID))throw new Error('Record not found.');const id=String(payload.InscriptionID||'')||makeId_('INS');const row={RecordID:payload.RecordID,InscriptionType:payload.InscriptionType||'Inscription',Position:payload.Position||'',Language:payload.Language||'',Script:payload.Script||'',InscriptionText:payload.InscriptionText||'',Transliteration:payload.Transliteration||'',Translation:payload.Translation||'',Certainty:payload.Certainty||'Certain',Notes:payload.Notes||'',UpdatedBy:user.email,UpdatedAt:new Date()};if(!String(row.InscriptionText||row.Notes).trim())throw new Error('Enter inscription/mark text or a note.');if(payload.InscriptionID){updateByKey_('Inscriptions_Marks',id,row);logAudit_(user.email,'UPDATE','Inscriptions_Marks',id,'Updated inscription / mark',row);}else{row.InscriptionID=id;row.CreatedBy=user.email;row.CreatedAt=new Date();appendObject_('Inscriptions_Marks',row);logAudit_(user.email,'CREATE','Inscriptions_Marks',id,'Created inscription / mark',row);}return apiGetRecord(payload.RecordID);}
function apiDeleteInscription(id){const user=requireUser_('edit');const row=getByKey_('Inscriptions_Marks',id);if(!row)throw new Error('Inscription / mark not found.');deleteRowByKey_('Inscriptions_Marks',id);logAudit_(user.email,'DELETE','Inscriptions_Marks',id,'Deleted inscription / mark',row);return apiGetRecord(row.RecordID);}

function apiListExhibitions(type) {
  requireUser_('read');
  const itemRows=readTableSafe_('Exhibition_Items').rows; const counts={}; itemRows.forEach(r=>{if(r.ExhibitionID)counts[String(r.ExhibitionID)]=(counts[String(r.ExhibitionID)]||0)+1;});
  let rows=readTableSafe_('Exhibitions').rows;
  if(type) rows=rows.filter(r=>String(r.ExhibitionType||'')===String(type));
  rows.sort((a,b)=>String(a.ExhibitionTitle||'').localeCompare(String(b.ExhibitionTitle||'')));
  return rows.map(r=>Object.assign({},r,{ItemCount:counts[String(r.ExhibitionID)]||0}));
}

function apiGetExhibition(exhibitionId) {
  requireUser_('read');
  const exhibition=getByKey_('Exhibitions',exhibitionId);
  if(!exhibition) throw new Error('Exhibit plan not found.');
  const items=rowsByField_('Exhibition_Items','ExhibitionID',exhibitionId)
    .map(i=>Object.assign({},i,{Record:getByKey_('Records',i.RecordID)}));
  return {exhibition,items};
}
function apiCreateTemporaryExhibition(payload) {
  const user=requireUser_('exhibits'); payload=payload||{}; const title=String(payload.ExhibitionTitle||'').trim(); if(!title) throw new Error('Exhibit title is required.');
  const id=makeId_('EXH'); const row={ExhibitionID:id,ExhibitionTitle:title,Venue:payload.Venue||getCmsSettings_().defaultVenue||'',StartDate:payload.StartDate||'',EndDate:payload.EndDate||'',ExhibitionStatus:payload.ExhibitionStatus||'Concept',Curator:payload.Curator||'',ProjectFolderURL:payload.ProjectFolderURL||'',Notes:payload.Notes||'',ExhibitionType:'Temporary',PlanningStatus:payload.ExhibitionStatus||'Concept',Description:payload.Description||'',CreatedBy:user.email,CreatedAt:new Date(),UpdatedAt:new Date()};
  appendObject_('Exhibitions',row); logAudit_(user.email,'CREATE','Exhibitions',id,'Created temporary exhibit plan',row); return apiGetExhibition(id);
}

function apiUpdateExhibition(exhibitionId,payload) {
  const user=requireUser_('exhibits'); const existing=getByKey_('Exhibitions',exhibitionId); if(!existing) throw new Error('Exhibit plan not found.');
  const newStatus=payload.ExhibitionStatus||existing.ExhibitionStatus||'Planning';
  const safe={ExhibitionTitle:payload.ExhibitionTitle||existing.ExhibitionTitle,Venue:payload.Venue||'',StartDate:payload.StartDate||'',EndDate:payload.EndDate||'',ExhibitionStatus:newStatus,PlanningStatus:newStatus,Curator:payload.Curator||'',ProjectFolderURL:payload.ProjectFolderURL||'',Description:payload.Description||'',Notes:payload.Notes||'',UpdatedAt:new Date()};
  updateByKey_('Exhibitions',exhibitionId,safe);
  if(['Closed','Archived'].includes(newStatus)) {
    const items=rowsByField_('Exhibition_Items','ExhibitionID',exhibitionId);
    items.forEach(item=>{
      if(item.InstalledDate && !item.DeinstalledDate) updateByKey_('Exhibition_Items',item.ExhibitionItemID,{DeinstalledDate:payload.EndDate||new Date(),UpdatedBy:user.email,UpdatedAt:new Date()});
      syncRecordDisplayState_(item.RecordID);
    });
  } else {
    rowsByField_('Exhibition_Items','ExhibitionID',exhibitionId).forEach(item=>syncRecordDisplayState_(item.RecordID));
  }
  logAudit_(user.email,'UPDATE','Exhibitions',exhibitionId,'Updated exhibit plan',safe); return apiGetExhibition(exhibitionId);
}

function apiAddExhibitionItem(payload) {
  const user=requireUser_('exhibits'); payload=payload||{};
  if(!getByKey_('Exhibitions',payload.ExhibitionID)) throw new Error('Exhibit plan not found.');
  const record=getByKey_('Records',payload.RecordID); if(!record) throw new Error('Collection record not found.');
  if(recordLifecycle_(record)!=='Active') throw new Error('Only active holdings can be assigned to exhibits.');
  const dupe=readTableSafe_('Exhibition_Items').rows.find(r=>String(r.ExhibitionID||'')===String(payload.ExhibitionID)&&String(r.RecordID||'')===String(payload.RecordID));
  if(dupe) throw new Error('That record is already assigned to this exhibit.');
  const status=payload.SelectionStatus||'Candidate';
  const id=makeId_('EXI'); const row={ExhibitionItemID:id,ExhibitionID:payload.ExhibitionID,RecordID:payload.RecordID,DisplayLocation:payload.DisplayLocation||'',DisplayLabelURL:'',InstalledDate:status==='Installed'?(payload.InstalledDate||new Date()):'',DeinstalledDate:'',Notes:payload.Notes||'',SelectionStatus:status,Priority:payload.Priority||'Medium',InterpretiveRole:payload.InterpretiveRole||'Supporting object',PlanningNotes:payload.PlanningNotes||'',CreatedBy:user.email,CreatedAt:new Date(),UpdatedBy:user.email,UpdatedAt:new Date()};
  appendObject_('Exhibition_Items',row); syncRecordDisplayState_(payload.RecordID); logAudit_(user.email,'ADD_EXHIBIT_ITEM','Exhibition_Items',id,'Added record to exhibit plan',row); return apiGetExhibition(payload.ExhibitionID);
}

function apiUpdateExhibitionItem(itemId,payload) {
  const user=requireUser_('exhibits'); const existing=getByKey_('Exhibition_Items',itemId); if(!existing) throw new Error('Exhibit item not found.');
  const status=payload.SelectionStatus||existing.SelectionStatus||'Candidate';
  let installed=payload.InstalledDate!==undefined?payload.InstalledDate:existing.InstalledDate||'';
  let deinstalled=payload.DeinstalledDate!==undefined?payload.DeinstalledDate:existing.DeinstalledDate||'';
  if(status==='Installed'&&!installed) installed=new Date();
  if(status==='Installed') deinstalled='';
  if(status==='Removed'&&installed&&!deinstalled) deinstalled=new Date();
  const safe={DisplayLocation:payload.DisplayLocation||'',Notes:payload.Notes||'',SelectionStatus:status,Priority:payload.Priority||existing.Priority||'Medium',InterpretiveRole:payload.InterpretiveRole||existing.InterpretiveRole||'Supporting object',PlanningNotes:payload.PlanningNotes||'',InstalledDate:installed,DeinstalledDate:deinstalled,UpdatedBy:user.email,UpdatedAt:new Date()};
  updateByKey_('Exhibition_Items',itemId,safe); syncRecordDisplayState_(existing.RecordID); logAudit_(user.email,'UPDATE_EXHIBIT_ITEM','Exhibition_Items',itemId,'Updated exhibit item',safe); return apiGetExhibition(existing.ExhibitionID);
}

function apiRemoveExhibitionItem(itemId) {
  const user=requireUser_('exhibits'); const existing=getByKey_('Exhibition_Items',itemId); if(!existing) throw new Error('Exhibit item not found.');
  const ex=getByKey_('Exhibitions',existing.ExhibitionID)||{};
  const historic=!!existing.InstalledDate||['Installed','Closed','Archived'].includes(String(ex.ExhibitionStatus||ex.PlanningStatus||''));
  if(historic){
    updateByKey_('Exhibition_Items',itemId,{SelectionStatus:'Removed',DeinstalledDate:existing.DeinstalledDate||new Date(),UpdatedBy:user.email,UpdatedAt:new Date()});
    logAudit_(user.email,'REMOVE_EXHIBIT_ITEM','Exhibition_Items',itemId,'Marked historic exhibit item as removed',existing);
  } else {
    deleteRowByKey_('Exhibition_Items',itemId); logAudit_(user.email,'REMOVE_EXHIBIT_ITEM','Exhibition_Items',itemId,'Removed planning item',existing);
  }
  syncRecordDisplayState_(existing.RecordID); return apiGetExhibition(existing.ExhibitionID);
}

function apiListLocations() {
  requireUser_('read');
  return readTableSafe_('Locations').rows
    .filter(r => truthy_(r.Active, true))
    .sort((a,b) => String(a.LocationName || '').localeCompare(String(b.LocationName || '')));
}

function apiCreateLocation(payload) {
  const user = requireUser_('locations');
  const id = makeId_('LOC');
  const row = {
    LocationID: id,
    LocationName: payload.LocationName || 'Unnamed location',
    ParentLocationID: payload.ParentLocationID || '',
    LocationType: payload.LocationType || 'Other',
    ShortCode: payload.ShortCode || '',
    Description: payload.Description || '',
    Active: true,
    QRCodeValue: id,
    Notes: payload.Notes || ''
  };
  appendObject_('Locations', row);
  logAudit_(user.email,'CREATE','Locations',id,'Created location',row);
  return row;
}

function apiMoveRecord(payload) {
  const user = requireUser_('move');
  const recordId = String(payload.RecordID || '');
  const toLocationId = String(payload.ToLocationID || '');
  const record = getByKey_('Records', recordId);
  if (!record) throw new Error('Record not found: ' + recordId);

  const location = getByKey_('Locations', toLocationId);
  if (!location) throw new Error('Location not found: ' + toLocationId);

  const movementId = makeId_('MOV');
  const movement = {
    MovementID: movementId,
    RecordID: recordId,
    FromLocationID: record.CurrentLocationID || '',
    ToLocationID: toLocationId,
    MovementDate: new Date(),
    MovementType: payload.MovementType || 'Relocation',
    Reason: payload.Reason || '',
    MovedBy: user.email,
    ReturnDueDate: payload.ReturnDueDate || '',
    ReturnedDate: '',
    Notes: payload.Notes || ''
  };

  appendObject_('Movements', movement);
  updateByKey_('Records', recordId, {CurrentLocationID: toLocationId});
  logAudit_(user.email,'MOVE','Records',recordId,'Moved collection record',movement);
  return apiGetRecord(recordId);
}

function apiAddReview(payload) {
  const user = requireUser_('review');
  const recordId = String(payload.RecordID || '');
  if (!getByKey_('Records', recordId)) throw new Error('Record not found: ' + recordId);

  const reviewId = makeId_('REV');
  const review = {
    ReviewID: reviewId,
    RecordID: recordId,
    ReviewDate: new Date(),
    ReviewedBy: user.email,
    ReviewType: payload.ReviewType || 'Catalogue review',
    Outcome: payload.Outcome || '',
    CatalogueStatusAfter: payload.CatalogueStatusAfter || '',
    Notes: payload.Notes || ''
  };

  appendObject_('Reviews', review);

  if (payload.CatalogueStatusAfter) {
    updateByKey_('Records', recordId, {
      CatalogueStatus: payload.CatalogueStatusAfter,
      LastReviewedBy: user.email,
      LastReviewedDate: new Date()
    });
  }

  logAudit_(user.email,'REVIEW','Records',recordId,'Added review',review);
  return apiGetRecord(recordId);
}

function apiUploadMedia(payload) {
  const user = requireUser_('media');
  const recordId = String(payload.RecordID || '');
  if (!getByKey_('Records', recordId)) throw new Error('Record not found: ' + recordId);

  const base64 = String(payload.base64 || '');
  if (!base64) throw new Error('No file data supplied.');
  if (Math.floor(base64.length * 0.75) > 8 * 1024 * 1024) {
    throw new Error('v0.2 limits individual browser uploads to approximately 8 MB.');
  }

  const rootId = PropertiesService.getScriptProperties().getProperty('MEDIA_ROOT_FOLDER_ID');
  if (!rootId) {
    throw new Error('Media folder is not configured. Set MEDIA_ROOT_FOLDER_ID to the Shared Drive Assets folder ID.');
  }

  // Validate target folder and Shared Drive support.
  const folder = Drive.Files.get(rootId, {
    supportsAllDrives: true,
    fields: 'id,name,mimeType,driveId'
  });
  if (folder.mimeType !== 'application/vnd.google-apps.folder') {
    throw new Error('MEDIA_ROOT_FOLDER_ID does not point to a Drive folder.');
  }

  const bytes = Utilities.base64Decode(base64);
  const blob = Utilities.newBlob(
    bytes,
    payload.mimeType || 'application/octet-stream',
    payload.fileName || 'upload'
  );

  const metadata = {
    name: payload.fileName || 'upload',
    mimeType: payload.mimeType || 'application/octet-stream',
    parents: [rootId],
    appProperties: {
      openMuseumCmsRecordId: recordId
    }
  };

  const file = Drive.Files.create(metadata, blob, {
    supportsAllDrives: true,
    fields: 'id,name,mimeType,webViewLink,driveId'
  });

  const mediaId = makeId_('MED');
  const isImage = String(payload.mimeType || '').startsWith('image/');
  const url = file.webViewLink || ('https://drive.google.com/open?id=' + file.id);

  const row = {
    MediaID: mediaId,
    RecordID: recordId,
    MediaType: payload.MediaType || (isImage ? 'Photograph' : 'Document'),
    FileName: file.name || payload.fileName || 'upload',
    ImagePath: isImage ? url : '',
    FilePath: isImage ? '' : url,
    DriveURL: url,
    DriveFileID: file.id,
    IsPrimary: !!payload.IsPrimary,
    ViewDescription: payload.ViewDescription || '',
    CaptureDate: payload.CaptureDate || '',
    RightsStatement: payload.RightsStatement || '',
    PublicAccessStatus: payload.PublicAccessStatus || 'Internal only',
    Notes: payload.Notes || ''
  };

  appendObject_('Media', row);
  if (payload.IsPrimary) updateByKey_('Records', recordId, {PrimaryMediaURL: url});
  logAudit_(user.email,'MEDIA_UPLOAD','Media',mediaId,'Uploaded media to Drive',{recordId,fileId:file.id,driveId:file.driveId||'',fileName:file.name});

  return apiGetRecord(recordId);
}



/**
 * Return authenticated thumbnail data for private Google Drive / Shared Drive files.
 *
 * Direct <img src="https://drive.google.com/thumbnail?..."> URLs are unreliable for
 * private Shared Drive files inside Apps Script's sandboxed web-app frame because
 * the browser request may not carry the Drive authorisation context. This method
 * retrieves Drive's short-lived thumbnailLink server-side and fetches it using the
 * script's OAuth token, then returns a data URL to the authorised CMS user.
 */
function apiGetMediaThumbnails(fileIds) {
  requireUser_('read');

  const ids = [...new Set((fileIds || []).map(String).filter(Boolean))].slice(0, 20);
  if (!ids.length) return {};

  const cache = CacheService.getScriptCache();
  const result = {};
  const pending = [];
  const token = ScriptApp.getOAuthToken();

  ids.forEach(fileId => {
    const cacheKey = 'thumb:' + fileId;
    const cached = cache.get(cacheKey);
    if (cached) {
      result[fileId] = cached;
      return;
    }

    try {
      const file = Drive.Files.get(fileId, {
        supportsAllDrives: true,
        fields: 'id,mimeType,thumbnailLink'
      });

      if (!file.thumbnailLink) {
        result[fileId] = '';
        return;
      }

      pending.push({
        fileId,
        request: {
          url: file.thumbnailLink,
          method: 'get',
          headers: {Authorization: 'Bearer ' + token},
          muteHttpExceptions: true
        }
      });
    } catch (err) {
      result[fileId] = '';
    }
  });

  if (pending.length) {
    const responses = UrlFetchApp.fetchAll(pending.map(x => x.request));

    responses.forEach((response, i) => {
      const fileId = pending[i].fileId;
      const status = response.getResponseCode();

      if (status < 200 || status >= 300) {
        result[fileId] = '';
        return;
      }

      const blob = response.getBlob();
      const contentType = blob.getContentType() || 'image/jpeg';
      const dataUrl = 'data:' + contentType + ';base64,' +
        Utilities.base64Encode(blob.getBytes());

      result[fileId] = dataUrl;

      // Apps Script CacheService values are size-limited. Cache only compact thumbs.
      if (dataUrl.length < 90000) {
        try { cache.put('thumb:' + fileId, dataUrl, 600); } catch (e) {}
      }
    });
  }

  return result;
}

/** High-resolution authenticated Drive previews for the Overview carousel. */
function apiGetCarouselImages(fileIds, maxSize) {
  requireUser_('read');
  const ids=[...new Set((fileIds||[]).map(String).map(x=>x.trim()).filter(Boolean))].slice(0,8);
  if(!ids.length)return {};
  const size=Math.min(Math.max(Number(maxSize||2200),1200),2600);
  const token=ScriptApp.getOAuthToken(); const result={}; const pending=[];
  ids.forEach(fileId=>{
    try{
      const file=Drive.Files.get(fileId,{supportsAllDrives:true,fields:'id,name,mimeType,thumbnailLink'});
      if(!String(file.mimeType||'').toLowerCase().startsWith('image/')||!file.thumbnailLink){result[fileId]='';return;}
      let url=String(file.thumbnailLink);
      if(/=s\d+[^/?&]*$/i.test(url))url=url.replace(/=s\d+[^/?&]*$/i,'=s'+size);
      else if(/=[wh]\d+[^/?&]*$/i.test(url))url=url.replace(/=[wh]\d+[^/?&]*$/i,'=s'+size);
      else url+='=s'+size;
      pending.push({fileId,request:{url,method:'get',headers:{Authorization:'Bearer '+token},muteHttpExceptions:true}});
    }catch(err){result[fileId]='';}
  });
  if(!pending.length)return result;
  UrlFetchApp.fetchAll(pending.map(x=>x.request)).forEach((response,i)=>{
    const fileId=pending[i].fileId,status=response.getResponseCode();
    if(status<200||status>=300){result[fileId]='';return;}
    const blob=response.getBlob(),contentType=blob.getContentType()||'image/jpeg';
    result[fileId]='data:'+contentType+';base64,'+Utilities.base64Encode(blob.getBytes());
  });
  return result;
}

function apiGetOverviewMedia(limit) {
  requireUser_('read');
  limit = Math.min(Math.max(Number(limit || 10), 3), 18);

  const cached = cacheGetJson_('overviewMedia');
  if (cached && cached.length) return cached.slice(0, limit);

  const records = readTableSafe_('Records').rows.filter(r =>
    recordLifecycle_(r) === 'Active' &&
    String(r.RecordType || '') !== 'Archival Unit'
  );
  const recordMap = Object.fromEntries(records.map(r => [String(r.RecordID || ''), r]));

  const media = readTableSafe_('Media').rows.filter(m => {
    const r = recordMap[String(m.RecordID || '')];
    if (!r || !m.DriveFileID) return false;
    const name = String(m.FileName || '').toLowerCase();
    const type = String(m.MediaType || '').toLowerCase();
    return type.includes('photo') || type.includes('image') || /\.(jpe?g|png|webp|gif)$/i.test(name);
  });

  media.sort((a,b) => {
    const ap = truthy_(a.IsPrimary,false) ? 0 : 1;
    const bp = truthy_(b.IsPrimary,false) ? 0 : 1;
    return ap - bp || String(a.RecordID || '').localeCompare(String(b.RecordID || ''));
  });

  const seen = new Set();
  const result = [];
  media.forEach(m => {
    const rid = String(m.RecordID || '');
    if (seen.has(rid) || result.length >= 18) return;
    const r = recordMap[rid];
    if (!r) return;
    seen.add(rid);
    result.push({
      RecordID:rid,
      PreferredTitle:r.PreferredTitle || rid,
      CollectionArea:r.CollectionArea || '',
      DateDisplay:r.DateDisplay || '',
      DriveFileID:m.DriveFileID,
      FileName:m.FileName || '',
      ViewDescription:m.ViewDescription || ''
    });
  });

  cachePutJson_('overviewMedia', result, 300);
  return result.slice(0, limit);
}

/* =========================
   Structured dates
   ========================= */

function prepareRecordChanges_(payload, existing) {
  const safe = sanitiseRecordChanges_(payload || {});

  ['Classifications','Materials','Techniques'].forEach(field => {
    if (Array.isArray(payload[field])) safe[field] = joinTerms_(payload[field]);
  });

  const hasDateInput =
    Object.prototype.hasOwnProperty.call(payload,'DateQualifier') ||
    Object.prototype.hasOwnProperty.call(payload,'DateStart') ||
    Object.prototype.hasOwnProperty.call(payload,'DateEnd');

  if (hasDateInput) {
    const date = normaliseDateBundle_(
      payload.DateQualifier || '',
      payload.DateStart || '',
      payload.DateEnd || ''
    );
    safe.DateQualifier = date.qualifier;
    safe.DateStart = date.start;
    safe.DateEnd = date.end;
    safe.DateDisplay = date.display;
    safe.EarliestYear = date.earliestYear;
    safe.LatestYear = date.latestYear;
  }

  return safe;
}

function normaliseDateBundle_(qualifier, startText, endText) {
  qualifier = String(qualifier || '').trim();
  startText = String(startText || '').trim();
  endText = String(endText || '').trim();

  if (qualifier && !CMS.DATE_QUALIFIERS.includes(qualifier)) {
    throw new Error('Unrecognised date qualifier: ' + qualifier);
  }

  if (!startText) {
    if (qualifier === 'Between' || endText) throw new Error('A start date is required.');
    return {qualifier:'',start:'',end:'',display:'',earliestYear:'',latestYear:''};
  }

  const start = parseFlexibleDate_(startText);
  let end = null;

  if (qualifier === 'Between') {
    if (!endText) throw new Error('Between requires an end date.');
    end = parseFlexibleDate_(endText);
    if (end.ordinal < start.ordinal) throw new Error('The end date must be after the start date.');
  } else {
    endText = '';
  }

  let display;
  if (qualifier === 'Between') {
    display = formatEraDate_(start) + '–' + formatEraDate_(end);
  } else {
    const rendered = formatEraDate_(start);
    if (qualifier === 'Circa') display = 'c. ' + rendered;
    else if (qualifier === 'Approximately') display = 'approx. ' + rendered;
    else if (qualifier === 'Before') display = 'before ' + rendered;
    else if (qualifier === 'After') display = 'after ' + rendered;
    else if (qualifier === 'Uncertain') display = rendered + ' (uncertain)';
    else display = rendered;
  }

  let earliestYear = start.year;
  let latestYear = start.year;
  if (qualifier === 'Between') latestYear = end.year;
  if (qualifier === 'Before') earliestYear = '';
  if (qualifier === 'After') latestYear = '';

  return {
    qualifier,
    start:start.normalized,
    end:end ? end.normalized : '',
    display,
    earliestYear,
    latestYear
  };
}

function parseFlexibleDate_(text) {
  text = String(text || '').trim();

  let day = null, month = null, year = null, precision = null;
  let m;

  if ((m = text.match(/^(-?\d{1,4})$/))) {
    year = Number(m[1]);
    precision = 'year';
  } else if ((m = text.match(/^(\d{1,2})\/(-?\d{1,4})$/))) {
    month = Number(m[1]);
    year = Number(m[2]);
    precision = 'month';
  } else if ((m = text.match(/^(\d{1,2})\/(\d{1,2})\/(-?\d{1,4})$/))) {
    day = Number(m[1]);
    month = Number(m[2]);
    year = Number(m[3]);
    precision = 'day';
  } else {
    throw new Error('Dates must be YYYY, MM/YYYY, or DD/MM/YYYY. Use a negative year for BC, e.g. -200 or 03/-200.');
  }

  if (year === 0) throw new Error('Year 0 is not used; use -1 for 1 BC and 1 for AD 1.');
  if (month !== null && (month < 1 || month > 12)) throw new Error('Month must be between 1 and 12.');
  if (day !== null && (day < 1 || day > 31)) throw new Error('Day must be between 1 and 31.');

  const absYear = Math.abs(year);
  const yearText = (year < 0 ? '-' : '') + String(absYear);
  const mm = month === null ? null : String(month).padStart(2,'0');
  const dd = day === null ? null : String(day).padStart(2,'0');

  const normalized =
    precision === 'year' ? yearText :
    precision === 'month' ? (mm + '/' + yearText) :
    (dd + '/' + mm + '/' + yearText);

  // Sufficient for ordering accepted date formats, including BC years.
  const ordinal = year * 10000 + (month || 1) * 100 + (day || 1);

  return {day,month,year,precision,normalized,ordinal};
}

function formatEraDate_(parsed) {
  const y = Math.abs(parsed.year);
  const suffix = parsed.year < 0 ? ' BC' : '';

  if (parsed.precision === 'year') return String(y) + suffix;
  if (parsed.precision === 'month') return String(parsed.month).padStart(2,'0') + '/' + y + suffix;
  return String(parsed.day).padStart(2,'0') + '/' + String(parsed.month).padStart(2,'0') + '/' + y + suffix;
}

function parseSearchYear_(value) {
  if (value === '' || value === null || value === undefined) return null;
  const n = Number(value);
  if (!Number.isInteger(n) || n === 0) throw new Error('Search years must be whole numbers; use negative values for BC.');
  return n;
}

function dateRangeMatches_(record, fromYear, toYear) {
  let lower = record.EarliestYear === '' ? null : Number(record.EarliestYear);
  let upper = record.LatestYear === '' ? null : Number(record.LatestYear);

  if ((lower === null || isNaN(lower)) && record.DateStart) {
    try { lower = parseFlexibleDate_(record.DateStart).year; } catch (e) {}
  }
  if ((upper === null || isNaN(upper)) && record.DateEnd) {
    try { upper = parseFlexibleDate_(record.DateEnd).year; } catch (e) {}
  }
  if ((upper === null || isNaN(upper)) && lower !== null) upper = lower;
  if ((lower === null || isNaN(lower)) && upper !== null) lower = upper;

  // Undated records do not match explicit date-range searches.
  if (lower === null && upper === null) return false;

  const effectiveLow = lower === null ? -Infinity : lower;
  const effectiveHigh = upper === null ? Infinity : upper;
  if (fromYear !== null && effectiveHigh < fromYear) return false;
  if (toYear !== null && effectiveLow > toYear) return false;
  return true;
}

/* =========================
   Measurements
   ========================= */

function replaceMeasurements_(recordId, measurements) {
  if (!Array.isArray(measurements)) return;

  const table = readTable_('Measurements');
  const existingRows = table.rows
    .filter(r => String(r.RecordID || '') === String(recordId))
    .map(r => r._sheetRow)
    .sort((a,b) => b-a);

  existingRows.forEach(rowNumber => table.sheet.deleteRow(rowNumber));
  if (existingRows.length) invalidateTableCache_('Measurements');

  const clean = [];
  const seen = new Set();

  measurements.forEach(m => {
    const type = String(m.MeasurementType || '').trim();
    if (!Object.prototype.hasOwnProperty.call(CMS.MEASUREMENT_UNITS,type)) return;
    if (seen.has(type)) return;

    const value = Number(m.Value);
    if (!isFinite(value)) throw new Error(type + ' must be numeric.');
    if (value < 0) throw new Error(type + ' cannot be negative.');

    seen.add(type);
    const unit = CMS.MEASUREMENT_UNITS[type];
    const row = {
      MeasurementID: makeId_('MEA'),
      RecordID: recordId,
      MeasurementType: type,
      Value: value,
      Unit: unit,
      Notes: String(m.Notes || '')
    };
    appendObject_('Measurements', row);
    clean.push(row);
  });

  const display = clean.map(m => m.MeasurementType + ': ' + m.Value + ' ' + m.Unit).join('; ');
  updateByKey_('Records', recordId, {MeasurementsDisplay: display});
}

/* =========================
   Dashboard / vocab / auth
   ========================= */

function getStats_() {
  const allRecords = readTableSafe_('Records').rows;
  const records = allRecords.filter(r => recordLifecycle_(r) === 'Active');
  const photoQueue = new Set(['Source workbook image','Mapping needed','Photography required']);

  const s = {
    total:records.length,
    needsReview:0,
    highPriority:0,
    locationsUnchecked:0,
    photography:0,
    archives:0,
    photographs:0,
    deaccessioned:allRecords.filter(r=>recordLifecycle_(r)==='Deaccessioned').length,
    deleted:allRecords.filter(r=>recordLifecycle_(r)==='Deleted').length
  };

  records.forEach(r => {
    if (String(r.CatalogueStatus || '') === 'Imported – needs review') s.needsReview++;
    if (String(r.ReviewPriority || '') === 'High') s.highPriority++;
    if (String(r.LocationCheckedStatus || '') === 'Not yet checked') s.locationsUnchecked++;
    if (photoQueue.has(String(r.PhotoStatus || ''))) s.photography++;
    if (String(r.RecordType || '') === 'Archival Unit') s.archives++;
    if (String(r.CollectionArea || '') === 'Photography') s.photographs++;
  });

  return s;
}

function requireUser_(permission) {
  const email = String(Session.getActiveUser().getEmail() || '').trim().toLowerCase();
  if (!email) throw new Error('Google did not expose your signed-in Workspace identity to this deployment.');

  const domain = getCmsSettings_().domainRestriction;
  if (domain && !email.endsWith('@' + domain.toLowerCase())) {
    throw new Error('This CMS is restricted to the ' + domain + ' Workspace domain.');
  }

  const user = readTableSafe_('Users').rows.find(
    u => String(u.Email || '').trim().toLowerCase() === email
  );
  if (!user || !truthy_(user.Active,false)) throw new Error('Your account is not enabled for this Open Museum CMS installation.');

  const role = String(user.Role || 'ReadOnly');
  const permissions = CMS.ROLES[role] || [];
  if (permission && !permissions.includes(permission)) {
    throw new Error('Your role (' + role + ') does not permit this action.');
  }

  return {email,displayName:user.DisplayName || email.split('@')[0],role,permissions};
}

function seedControlledVocabularies_() {
  const table = readTable_('Lists');
  let added = 0;

  Object.keys(CMS.VOCABULARY_SEED).forEach(listName => {
    const existingForList = table.rows
      .filter(r => String(r.ListName || '') === listName)
      .map(r => String(r.Value || '').toLowerCase());

    CMS.VOCABULARY_SEED[listName].forEach((value,index) => {
      if (!existingForList.includes(String(value).toLowerCase())) {
        appendObject_('Lists', {
          ListID: makeId_('LST'),
          ListName:listName,
          Value:value,
          SortOrder:index+1,
          Active:true,
          Notes:'Open Museum CMS starter vocabulary'
        });
        added++;
      }
    });
  });

  return added;
}

function getListMap_() {
  if (_RUN.listMap) return _RUN.listMap;

  const map = Object.create(null);
  readTableSafe_('Lists').rows
    .filter(r => truthy_(r.Active,true))
    .sort((a,b) => Number(a.SortOrder || 9999) - Number(b.SortOrder || 9999))
    .forEach(r => {
      const name = String(r.ListName || '');
      const value = String(r.Value || '');
      if (!name || !value) return;
      if (!map[name]) map[name] = [];
      map[name].push(value);
    });

  _RUN.listMap = map;
  return map;
}

function getListValues_(listName) {
  return (getListMap_()[String(listName)] || []).slice();
}
function splitTerms_(value) {
  if (Array.isArray(value)) return value.map(String).map(x=>x.trim()).filter(Boolean);
  return String(value || '')
    .split(/\s*\|\s*/)
    .map(x => x.trim())
    .filter(Boolean);
}

function joinTerms_(values) {
  return [...new Set((values || []).map(String).map(x=>x.trim()).filter(Boolean))].join(CMS.TERM_SEPARATOR);
}


function recordLifecycle_(record) {
  const explicit=String(record && record.LifecycleStatus || '').trim();
  if(explicit) return explicit;
  return truthy_(record && record.Active,true) ? 'Active' : 'Active';
}

function getRecordAuthorities_(recordId) {
  return rowsByField_('Record_Roles','RecordID',recordId)
    .map(r=>Object.assign({},r,{Party:getByKey_('People_Orgs',r.PartyID)}));
}

function getRecordExhibitions_(recordId) {
  return rowsByField_('Exhibition_Items','RecordID',recordId)
    .map(r=>Object.assign({},r,{Exhibition:getByKey_('Exhibitions',r.ExhibitionID)}));
}
function getRecordPlaces_(recordId){return rowsByField_('Record_Places','RecordID',recordId).map(r=>Object.assign({},r,{Place:getByKey_('Places',r.PlaceID)}));}
function getRecordSubjects_(recordId){return rowsByField_('Record_Subjects','RecordID',recordId).map(r=>Object.assign({},r,{Subject:getByKey_('Subjects',r.SubjectID)}));}
function getRecordReferences_(recordId){return rowsByField_('Record_References','RecordID',recordId).map(r=>Object.assign({},r,{Reference:getByKey_('Bibliography',r.ReferenceID)}));}

function syncRecordDisplayState_(recordId){
  if(!recordId||!getByKey_('Records',recordId))return;
  const items=rowsByField_('Exhibition_Items','RecordID',recordId);
  let current=null,scheduled=null;
  items.forEach(item=>{
    const ex=getByKey_('Exhibitions',item.ExhibitionID); if(!ex)return;
    const exStatus=String(ex.ExhibitionStatus||ex.PlanningStatus||'');
    if(item.InstalledDate&&!item.DeinstalledDate&&exStatus==='Installed'&&!current)current={item,ex};
    if(!scheduled&&['Selected','Installed'].includes(String(item.SelectionStatus||''))&&['Approved','Installed'].includes(exStatus))scheduled={item,ex};
  });
  if(current)updateByKey_('Records',recordId,{DisplayStatus:'On display',CurrentDisplayExhibitionID:current.ex.ExhibitionID,CurrentDisplayLocation:current.item.DisplayLocation||current.ex.Venue||''});
  else if(scheduled)updateByKey_('Records',recordId,{DisplayStatus:'Scheduled for display',CurrentDisplayExhibitionID:scheduled.ex.ExhibitionID,CurrentDisplayLocation:scheduled.item.DisplayLocation||scheduled.ex.Venue||''});
  else updateByKey_('Records',recordId,{DisplayStatus:'Not on display',CurrentDisplayExhibitionID:'',CurrentDisplayLocation:''});
}

function seedV04Vocabularies_(){
  const existing=readTableSafe_('Lists').rows;let added=0;
  Object.keys(CMS_V04.VOCABULARY_SEED).forEach(name=>{
    const current=new Set(existing.filter(r=>String(r.ListName||'')===name).map(r=>String(r.Value||'').toLowerCase()));
    const start=existing.filter(r=>String(r.ListName||'')===name).length;
    CMS_V04.VOCABULARY_SEED[name].forEach((value,i)=>{if(!current.has(value.toLowerCase())){appendObject_('Lists',{ListID:makeId_('LST'),ListName:name,Value:value,SortOrder:start+i+1,Active:true,Notes:'Open Museum CMS controlled vocabulary'});added++;}});
  });
  resetRunCache_(); cacheRemove_('enums'); return added;
}
function seedSubjectsV04_(){
  const existing=readTableSafe_('Subjects').rows;let added=0;const user=Session.getActiveUser().getEmail()||'';
  CMS_V04.SUBJECT_SEED.forEach(term=>{if(!existing.some(r=>String(r.PreferredTerm||'').toLowerCase()===term.toLowerCase())){appendObject_('Subjects',{SubjectID:makeId_('SUB'),PreferredTerm:term,AlternateTerms:'',ParentSubjectID:'',ScopeNote:'',ExternalAuthorityURL:'',Active:true,CreatedBy:user,CreatedAt:new Date(),UpdatedBy:user,UpdatedAt:new Date()});added++;}});return added;
}
function seedPlacesFromLegacyList_(){
  const existing=readTableSafe_('Places').rows;
  const names=new Set(existing.map(r=>String(r.PreferredName||'').toLowerCase()));
  let added=0; const user=Session.getActiveUser().getEmail()||'';
  getListValues_('Place').forEach(name=>{
    if(names.has(String(name).toLowerCase()))return;
    appendObject_('Places',{PlaceID:makeId_('PLC'),PreferredName:name,AlternateNames:'',PlaceType:'Other',ParentPlaceID:'',Country:'',Latitude:'',Longitude:'',ScopeNote:'Migrated from legacy controlled Place list.',ExternalAuthorityURL:'',Active:true,CreatedBy:user,CreatedAt:new Date(),UpdatedBy:user,UpdatedAt:new Date()});
    names.add(String(name).toLowerCase()); added++;
  });
  return added;
}

function seedConfiguredPermanentExhibitions_() {
  const areas=getConfiguredPermanentExhibitAreas_();
  if(!areas.length) return 0;
  const existing=readTableSafe_('Exhibitions').rows;
  const settings=getCmsSettings_(); let added=0;
  areas.forEach(title=>{
    const found=existing.find(r=>String(r.ExhibitionType||'')==='Permanent'&&String(r.ExhibitionTitle||'').toLowerCase()===title.toLowerCase());
    if(!found){
      const slug=title.toUpperCase().replace(/&/g,'AND').replace(/[^A-Z0-9]+/g,'-').replace(/^-|-$/g,'');
      appendObject_('Exhibitions',{ExhibitionID:'EXH-PERM-'+slug,ExhibitionTitle:title,Venue:settings.defaultVenue||'Permanent Galleries',StartDate:'',EndDate:'',ExhibitionStatus:'Planning',Curator:'',ProjectFolderURL:'',Notes:'',ExhibitionType:'Permanent',PlanningStatus:'Planning',Description:'Future permanent-gallery planning area.',CreatedBy:Session.getActiveUser().getEmail()||'',CreatedAt:new Date(),UpdatedAt:new Date()});
      added++;
    }
  });
  return added;
}

function seedInitialAdministrator_() {
  const email=String(Session.getActiveUser().getEmail()||'').trim().toLowerCase();
  if(!email) return {ok:false,added:0,note:'Google did not expose an email address. Add an Administrator manually to the Users sheet.'};
  const existing=readTableSafe_('Users').rows;
  if(existing.some(r=>String(r.Email||'').trim().toLowerCase()===email)) return {ok:true,added:0};
  const display=email.split('@')[0];
  appendObject_('Users',{Email:email,DisplayName:display,Role:'Administrator',Active:true,Notes:'Initial administrator created by setupOpenMuseumCms().'});
  return {ok:true,added:1,email};
}

function deleteRowByKey_(tableName,keyValue) {
  const table=readTable_(tableName);
  const key=CMS.KEYS[tableName];
  const row=table.rows.find(r=>String(r[key]||'')===String(keyValue));
  if(!row) throw new Error('Could not find '+tableName+' row: '+keyValue);
  table.sheet.deleteRow(row._sheetRow);
  invalidateTableCache_(tableName);
}
/* =========================
   Sheets helpers
   ========================= */

function resetRunCache_(){_RUN={spreadsheet:null,tables:Object.create(null),headers:Object.create(null),listMap:null};}

function getSpreadsheet_() {
  if (_RUN.spreadsheet) return _RUN.spreadsheet;
  const id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!id) throw new Error('Open Museum CMS is not installed. Run setupOpenMuseumCms().');
  _RUN.spreadsheet = SpreadsheetApp.openById(id);
  return _RUN.spreadsheet;
}
function ensureSheet_(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet() || getSpreadsheet_();
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);

  if (sh.getLastRow() === 0) {
    sh.getRange(1,1,1,headers.length).setValues([headers]);
    sh.setFrozenRows(1);
  }
  return sh;
}

function ensureColumns_(sheetName, columnNames) {
  const sh = getSpreadsheet_().getSheetByName(sheetName);
  if (!sh) throw new Error('Required sheet not found: ' + sheetName);

  const lastCol = Math.max(sh.getLastColumn(),1);
  const headers = sh.getRange(1,1,1,lastCol).getValues()[0].map(String);

  columnNames.forEach(name => {
    if (!headers.includes(name)) {
      const newCol = sh.getLastColumn() + 1;
      sh.getRange(1,newCol).setValue(name);
      headers.push(name);
    }
  });
}

function getHeaderInfo_(name) {
  if (_RUN.headers[name]) return _RUN.headers[name];

  const sh = getSpreadsheet_().getSheetByName(name);
  if (!sh) return null;
  const lastCol = sh.getLastColumn();
  if (!lastCol) return {sheet:sh,headers:[],index:Object.create(null),lastCol:0};

  const headers = sh.getRange(1,1,1,lastCol).getValues()[0].map(String);
  const index = Object.create(null);
  headers.forEach((h,i)=>index[h]=i);
  return (_RUN.headers[name] = {sheet:sh,headers,index,lastCol});
}

function rowObject_(headers, values, sheetRow) {
  const obj = {_sheetRow:sheetRow};
  headers.forEach((h,j)=>obj[h]=serialiseValue_(values[j]));
  return obj;
}

function readTable_(name) {
  if (_RUN.tables[name]) return _RUN.tables[name];

  const info = getHeaderInfo_(name);
  if (!info) throw new Error('Required sheet not found: ' + name);
  const sh = info.sheet;
  const lastRow = sh.getLastRow();

  if (lastRow < 2 || !info.lastCol) {
    return (_RUN.tables[name] = {headers:info.headers,rows:[],sheet:sh});
  }

  // Read only data rows; the header has already been read and cached.
  const values = sh.getRange(2,1,lastRow-1,info.lastCol).getValues();
  const rows = values
    .map((row,i)=>({row,i}))
    .filter(x=>x.row.some(v=>v!=='' && v!==null))
    .map(x=>rowObject_(info.headers,x.row,x.i+2));

  return (_RUN.tables[name] = {headers:info.headers,rows,sheet:sh});
}

function readTableSafe_(name) {
  const sh = getSpreadsheet_().getSheetByName(name);
  return sh ? readTable_(name) : {headers:[],rows:[],sheet:null};
}

function getByKey_(tableName, keyValue) {
  if (!keyValue) return null;
  const key = CMS.KEYS[tableName];
  if (!key) return null;

  // If the table has already been loaded in this request, reuse it.
  if (_RUN.tables[tableName]) {
    return _RUN.tables[tableName].rows.find(r=>String(r[key]||'')===String(keyValue)) || null;
  }

  const info = getHeaderInfo_(tableName);
  if (!info || info.index[key] === undefined) return null;
  const lastRow = info.sheet.getLastRow();
  if (lastRow < 2) return null;

  if (lastRow - 1 >= PERF.FAST_LOOKUP_ROW_THRESHOLD) {
    const keyRange = info.sheet.getRange(2,info.index[key]+1,lastRow-1,1);
    const found = keyRange.createTextFinder(String(keyValue))
      .matchEntireCell(true)
      .useRegularExpression(false)
      .findNext();
    if (!found) return null;
    const values = info.sheet.getRange(found.getRow(),1,1,info.lastCol).getValues()[0];
    return rowObject_(info.headers,values,found.getRow());
  }

  return readTable_(tableName).rows.find(r=>String(r[key]||'')===String(keyValue)) || null;
}

function rowsByField_(tableName, fieldName, value) {
  if (_RUN.tables[tableName]) {
    return _RUN.tables[tableName].rows.filter(r=>String(r[fieldName]||'')===String(value));
  }

  const info = getHeaderInfo_(tableName);
  if (!info || info.index[fieldName] === undefined) return [];
  const lastRow = info.sheet.getLastRow();
  if (lastRow < 2) return [];

  if (lastRow - 1 >= PERF.FAST_LOOKUP_ROW_THRESHOLD) {
    const fieldRange = info.sheet.getRange(2,info.index[fieldName]+1,lastRow-1,1);
    const found = fieldRange.createTextFinder(String(value))
      .matchEntireCell(true)
      .useRegularExpression(false)
      .findAll();
    return found.map(cell=>{
      const rowNo=cell.getRow();
      const values=info.sheet.getRange(rowNo,1,1,info.lastCol).getValues()[0];
      return rowObject_(info.headers,values,rowNo);
    });
  }

  return readTable_(tableName).rows.filter(r=>String(r[fieldName]||'')===String(value));
}

function appendObject_(tableName, obj) {
  const table = readTable_(tableName);
  table.sheet.appendRow(
    table.headers.map(h => obj[h] === undefined || obj[h] === null ? '' : obj[h])
  );
  invalidateTableCache_(tableName);
}

function updateByKey_(tableName, keyValue, changes) {
  const table = readTable_(tableName);
  const key = CMS.KEYS[tableName];
  const row = table.rows.find(r => String(r[key] || '') === String(keyValue));
  if (!row) throw new Error('Could not find ' + tableName + ' row: ' + keyValue);

  Object.entries(changes || {}).forEach(([field,value]) => {
    const col = table.headers.indexOf(field);
    if (col >= 0) {
      table.sheet.getRange(row._sheetRow,col+1).setValue(
        value === undefined || value === null ? '' : value
      );
    }
  });
  invalidateTableCache_(tableName);
}

function invalidateTableCache_(tableName) {
  delete _RUN.tables[tableName];
  delete _RUN.headers[tableName];
  if (tableName === 'Lists') {
    _RUN.listMap = null;
    cacheRemove_('enums');
  }
  if (tableName === 'Records' || tableName === 'Coin_Details') {
    cacheRemove_('stats');
  }
  if (tableName === 'Records' || tableName === 'Media') {
    cacheRemove_('overviewMedia');
  }
}

function cacheKey_(name) {
  return PERF.CACHE_PREFIX + name;
}

function cacheGetJson_(name) {
  try {
    const raw = CacheService.getScriptCache().get(cacheKey_(name));
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function cachePutJson_(name, value, ttlSeconds) {
  try {
    const raw = JSON.stringify(value);
    // Apps Script cache entries have a finite size; silently skip unusually large payloads.
    if (raw.length < 90000) CacheService.getScriptCache().put(cacheKey_(name),raw,ttlSeconds);
  } catch (e) {}
}

function cacheRemove_(name) {
  try { CacheService.getScriptCache().remove(cacheKey_(name)); } catch (e) {}
}

/** Optional: run manually after making bulk edits directly in Sheets. */
function clearCmsPerformanceCache() {
  const cache = CacheService.getScriptCache();
  cache.removeAll([cacheKey_('stats'),cacheKey_('enums'),cacheKey_('overviewMedia')]);
  _RUN = {spreadsheet:null,tables:Object.create(null),headers:Object.create(null),listMap:null};
  return {ok:true,message:'Open Museum CMS performance caches cleared.'};
}

/** Optional quick diagnostic from the Apps Script editor. */
function performanceCheck() {
  const t0=Date.now();
  const user=requireUser_('read');
  const t1=Date.now();
  const stats=getStats_();
  const t2=Date.now();
  const lists=getListMap_();
  const t3=Date.now();
  const records=readTable_('Records').rows.length;
  const t4=Date.now();
  return {
    userMs:t1-t0,
    statsMs:t2-t1,
    listsMs:t3-t2,
    recordsReadMs:t4-t3,
    totalMs:t4-t0,
    records,
    listGroups:Object.keys(lists).length,
    user:user.email
  };
}
function sanitiseRecordChanges_(obj) {
  const allowed = new Set([
    'RecordType','AccessionID','CatalogueStatus','PreferredTitle','ObjectTypeGenreForm',
    'CollectionArea','ObjectClass','Classifications','Quantity','UnitOfCount','Description',
    'MakerCreatorText','DateQualifier','DateStart','DateEnd','DateDisplay','EarliestYear',
    'LatestYear','PlaceOfOriginText','CultureCommunitySubjectsText','MaterialsTechniquesText',
    'Materials','Techniques','MeasurementsDisplay','InscriptionsMarks','ConditionSummary',
    'CurrentLocationID','LegacyLocationText','LocationCheckedStatus','LegacyDonorSourceText',
    'ProvenanceCustodialHistory','DocumentationStatus','RestrictionsSensitivity','PhotoStatus',
    'PrimaryMediaURL','DigitalFolderURL','Notes','ReviewPriority','PublicAccessStatus',
    'PublicTitle','PublicDescription','CuratorialComments','IdentificationCertainty','DisplayStatus','CurrentDisplayExhibitionID','CurrentDisplayLocation','CultureText','PeriodText','SchoolStyleText','CreditLine','Active','LifecycleStatus','DeletedAt','DeletedBy','DeletionReason'
  ]);

  const out = {};
  Object.keys(obj || {}).forEach(k => {
    if (allowed.has(k)) out[k] = obj[k];
  });
  return out;
}

function mergeContributorNames_(existing, displayName) {
  const names = String(existing || '')
    .split(',')
    .map(x => x.trim())
    .filter(Boolean);

  const candidate = String(displayName || '').trim();
  if (candidate && !names.some(x => x.toLowerCase() === candidate.toLowerCase())) {
    names.push(candidate);
  }
  return names.join(', ');
}

function appendRecordEditHistory_(recordId, user, comment, action) {
  appendObject_('Record_Edit_History', {
    EditHistoryID: makeId_('EDT'),
    RecordID: recordId,
    UserEmail: user.email || '',
    DisplayName: user.displayName || user.email || '',
    EditedAt: new Date(),
    Comment: String(comment || ''),
    Action: action || 'Edited'
  });
}

function logAudit_(email,action,tableName,recordId,summary,details) {
  appendObject_('Audit_Log', {
    AuditID:makeId_('AUD'),
    Timestamp:new Date(),
    UserEmail:email || '',
    Action:action || '',
    TableName:tableName || '',
    RecordID:recordId || '',
    Summary:summary || '',
    DetailsJSON:JSON.stringify(details || {})
  });
}

function makeId_(prefix) {
  return prefix + '-' + Utilities.getUuid().replace(/-/g,'').slice(0,10).toUpperCase();
}

function serialiseValue_(v) {
  if (Object.prototype.toString.call(v) === '[object Date]' && !isNaN(v)) {
    return Utilities.formatDate(
      v,
      Session.getScriptTimeZone() || 'America/Toronto',
      "yyyy-MM-dd'T'HH:mm:ss"
    );
  }
  return v;
}

function truthy_(v,blankDefault) {
  if (v === '' || v === null || v === undefined) return !!blankDefault;
  if (typeof v === 'boolean') return v;
  return !['false','no','0','inactive'].includes(String(v).trim().toLowerCase());
}
