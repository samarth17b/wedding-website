# Ninisha &amp; Samarth — Wedding Website

A single-page wedding website for Ninisha &amp; Samarth, 14–15 November 2026 at
The Woodrose Club, Bengaluru. Built as plain HTML/CSS/JS (no build step) and hosted on
GitHub Pages.

## Structure
```
index.html        # the whole site (hero, schedule, ISB, RSVP, FAQ)
css/style.css     # all styles
js/main.js        # nav toggle, guest-segment show/hide, side-margin reveal
assets/           # botanical artwork, monogram, and photos
```

## Guest segments (invite-specific links)
Different guests are invited to different events. The page shows/hides events based on an
`?inv=` query parameter, so you can share a tailored link per guest group:

| Link | Sees |
|------|------|
| `…/wedding-website/` or `?inv=all` | Haldi, High Tea, Reception, Muhurtham |
| `…/wedding-website/?inv=reception-muhurtham` | Reception + Muhurtham (Sunday) |
| `…/wedding-website/?inv=reception` | Reception only |

This is for guest clarity, not security — it's a static site, so treat it as a courtesy,
not access control.

## RSVP
The RSVP section embeds a Google Form (responses collected in the couple's own Google
Sheet). To swap the form, replace the iframe `src` in `index.html`.

## Local preview
From this folder:
```
python -m http.server 5500
```
then open <http://localhost:5500>. (Open via a server, not by double-clicking the file, so
the CSS/images and relative paths resolve correctly.)

## Hosting
GitHub Pages, deployed from the `main` branch (`/root`). Live at
<https://samarth17b.github.io/wedding-website/>.
