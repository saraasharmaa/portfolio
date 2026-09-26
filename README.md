# Sara Sharma Portfolio v2

A redesigned static portfolio based on the updated Data Scientist résumé supplied with the project.

## Direction

Editorial old-money palette meets modern technology: warm ivory, forest green, oxblood and brass, with serif display typography, mono labels, grid/noise texture, and restrained motion.

Interactive behavior includes a preloader, scroll reveals, animated KPI counters, capability marquee, project filtering, project-detail modal, magnetic buttons, custom cursor, card tilt, image hover effects, and reduced-motion support.

The structure also takes cues from the supplied Squarespace portfolio reference, especially clean project presentation and dedicated work / résumé / contact sections. Squarespace describes its portfolio layouts as mobile-friendly and customizable for individual projects. Source: https://www.squarespace.com/websites/create-a-portfolio/

## Updated résumé

The uploaded résumé is included as:
assets/resumes/sara-sharma-data-scientist.pdf

The site is already wired to view and download it.

## Institutional images

The current cards use remote image URLs to keep this package small:
IIT Bombay: https://images.indianexpress.com/2026/02/IIT-Bombay.jpg?w=1600
NITI Aayog: https://bsmedia.business-standard.com/_media/bs/img/article/2024-10/23/thumb/fitandfill/1200X900/1729678919-1389.jpg
DRDO Bhawan: https://upload.wikimedia.org/wikipedia/commons/7/76/DRDO_Bhawan.jpg

For a production site, replacing these with local images you have permission to publish is recommended. The institution pages themselves link to IIT Bombay, NITI Aayog and DRDO official sites.

## Multiple targeted résumés

The interface is ready for additional PDFs. Put them in assets/resumes/ and add links in index.html.
Suggested filenames:
sara-sharma-ai-ml-engineer.pdf
sara-sharma-quantitative-analytics.pdf
sara-sharma-financial-economic-analysis.pdf
sara-sharma-policy-decision-intelligence.pdf
sara-sharma-ai-ml-research.pdf

## Local run

python3 -m http.server 8000

Then open http://localhost:8000

## Deploy

This is plain HTML/CSS/JS, so it can be deployed directly to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or another static host.

## What is optional from Sara

Nothing is required to run the current version.

For a fully personal final pass, useful additions are an optional professional headshot, project screenshots / demo links, and the actual targeted résumé PDFs to show in the multi-resume selector. No additional information is needed to use the résumé content already supplied.
