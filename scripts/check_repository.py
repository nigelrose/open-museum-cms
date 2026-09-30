#!/usr/bin/env python3
"""Lightweight repository checks for Open Museum CMS."""
from pathlib import Path
import re, subprocess, tempfile, sys
root=Path(__file__).resolve().parents[1]
required=['README.md','LICENSE','THIRD_PARTY_DATA.md','docs/EASY_SETUP.md','docs/ANALYSIS_PROFILES.md','docs/VOCABULARIES_AND_SOURCES.md','src/Code.gs','src/Index.html','src/appsscript.json','starter/Open_Museum_CMS_Starter.xlsx','scripts/build_met_vocabulary.py']
missing=[p for p in required if not (root/p).exists()]
if missing:
    print('Missing required files:',*missing,sep='\n - ');sys.exit(1)
code=(root/'src/Code.gs').read_text(encoding='utf-8')
html=(root/'src/Index.html').read_text(encoding='utf-8')
for bad in ['maltesecanadianmuseum.ca','Maltese-Canadian Museum','@maltesecanadianmuseum.ca','mcmAccessionId','mcmRecordId']:
    if bad in code or bad in html:
        print('Institution-specific string still present:',bad);sys.exit(1)

# Alpha release should use the generic analysis layer rather than a dedicated Natural History UI.
if "tab('naturalhistory'" in html.lower():
    print('Dedicated Natural History tab detected; use Analysis Profiles instead.');sys.exit(1)
for expected in ['ANP-FURNITURE','ANP-TEXTILES','ANP-TOOLS','ANP-AGRICULTURE','ANP-INDIGENOUS','ANP-NATURAL-HISTORY']:
    if expected not in code:
        print('Missing expected analysis profile:',expected);sys.exit(1)


# Every client gas('api...') call should have a matching Apps Script function.
client_calls=set(re.findall(r"gas\(\s*['\"]([A-Za-z0-9_]+)['\"]",html))
server_functions=set(re.findall(r"\bfunction\s+([A-Za-z0-9_]+)\s*\(",code))
missing_api=sorted(x for x in client_calls if x not in server_functions)
if missing_api:
    print('Client calls missing Apps Script functions:',*missing_api,sep='\n - ');sys.exit(1)

# Accidental duplicate named functions are usually a merge/patch error.
function_names=re.findall(r"\bfunction\s+([A-Za-z0-9_]+)\s*\(",code)
duplicates=sorted({x for x in function_names if function_names.count(x)>1})
if duplicates:
    print('Duplicate Apps Script function names:',*duplicates,sep='\n - ');sys.exit(1)

# Use Node if available for parsing. Apps Script globals do not affect syntax parsing.
try:
    with tempfile.TemporaryDirectory() as td:
        p=Path(td)/'Code.js';p.write_text(code,encoding='utf-8')
        subprocess.run(['node','--check',str(p)],check=True)
        scripts=re.findall(r'<script[^>]*>([\s\S]*?)</script>',html,re.I)
        if scripts:
            q=Path(td)/'Index.js';q.write_text('\n'.join(scripts),encoding='utf-8')
            subprocess.run(['node','--check',str(q)],check=True)
except FileNotFoundError:
    print('Node not installed; skipped JavaScript parser check.')
except subprocess.CalledProcessError:
    sys.exit(1)
print('Open Museum CMS repository checks passed.')
