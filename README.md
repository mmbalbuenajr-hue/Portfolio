# Aequitas Law — homepage

A single-page website for Aequitas, an independent law firm. Plain HTML, CSS and JavaScript with no build step and no dependencies: the 3D scenes are drawn with WebGL2 directly.

## What's in the repo

```
index.html                 the whole page: markup, styles and scripts
assets/
  favicon.svg              tab icon (the A-and-scales emblem)
  fonts/
    GeistMono-Variable.woff2   small labels and buttons
  images/
    avatar-*.jpg           the three faces in the firm statement
    partner-*.jpg          partner portraits
    practice-*.jpg         practice-area hover photos
    paper-texture.jpg      crumpled-paper overlay
  models/                  3D objects (GLB)
    bust.glb               hero
    scales-of-justice.glb, gavel.glb        scroll scenes
    ear.glb, magnifying-glass.glb,
    chess-knight.glb, approval-stamp.glb    "Our approach" steps
```

Geist and Inter load from Google Fonts.

## Run it locally

The 3D models are loaded with `fetch`, which browsers block when a page is opened straight from disk (`file://`). Serve the folder instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

or `npx serve .`

## Deploy

**GitHub Pages:** Settings → Pages → Deploy from a branch → `main`, folder `/ (root)`. The `.nojekyll` file makes Pages serve the files as they are.

**Netlify:** connect the repo (no build command, publish directory `/`), or drag the folder onto Netlify Drop.

## Enquiry form

The contact form is set up for **Netlify Forms**: on a Netlify deploy, submissions appear under *Forms → enquiry* in the Netlify dashboard, and you can turn on email notifications there. A hidden honeypot field (`company`) filters most spam.

On any other host (GitHub Pages included) there is no form backend, so the form tells visitors their enquiry couldn't be sent and asks them to email or call. To use another service (Formspree, Basin and the like), change the `fetch('/', …)` call near the end of `index.html` to that service's endpoint.

## Before launch

Replace the sample content: phone, email, address and hours in the contact section (and the "Sample address and contact details" line), the hero stats, partner names and bios, the three Insights articles, and the Privacy, Terms and Complaints links in the footer.

## Accessibility and motion

Respects `prefers-reduced-motion` (no scroll animation, the 3D shows still poses), keeps keyboard focus visible, and degrades to the text-only page where WebGL2 isn't available.
