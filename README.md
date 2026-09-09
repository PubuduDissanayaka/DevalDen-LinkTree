# Deval Den — LinkTree

LinkTree-style one-page site for **Deval Den**, an authentic Sri Lankan homemade shrimp chilli paste brand.

A single landing page that gathers every way to reach and follow Deval Den — order hotlines, email, Google Maps pickup location, and social links (Facebook, Instagram, TikTok) — plus the brand story, the 150g "Signature Recipe" product card, and the clean-spice promise (no MSG, no ginger).

## Links on the page

- 📞 Call line: +94 77 868 4448
- 📱 Direct hotline: +94 71 726 4087
- ✉️ Email: devalden.dd@gmail.com
- 📍 Google Maps pickup & kitchen location
- Facebook: @DevalDen.DD
- Instagram: @deval_den
- TikTok: @deval_den

## Tech stack

- Vanilla HTML5, CSS3, and a small vanilla JS file (no frameworks, no build step)
- Google Fonts: Outfit + Playfair Display
- Fully static — hosts anywhere (GitHub Pages, Netlify, any web server)

## Project structure

```
.
├── index.html          # Single landing page (all sections inline)
├── assets/
│   ├── styles.css      # All page styling
│   ├── linktree.js     # Small interactions
│   ├── deval-logo.jpg  # Brand logo
│   ├── product-jar.png # Product image
│   └── ambient-bg.jpg  # Background image
└── README.md
```

## Running locally

No dependencies or build step — just open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Security

All external links that open in a new tab use `rel="noopener noreferrer"`.

## Credits

Designed & developed by [DevTenent](https://devtenent.com) — Web Dev, SEO & Digital Marketing, Sri Lanka.
