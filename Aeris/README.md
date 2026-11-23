# AERIS ONE — camera drone homepage

A single-page product site for a 249 g camera drone. A canyon flight scrubs with the scroll in the hero while a real-time 3D drone flies over it. The drone then splits into its parts over a 3D sonar terrain, faces a curved wall of aerial photos you can drag, flies through four flight-feature scenes drawn in white line-work, and hovers full-width over the spec numbers. Plain HTML, CSS and JavaScript with no build step.

## What's in the folder

```
index.html                  the whole page: markup, styles and scripts
cover.jpg                   portfolio thumbnail (800×500)
assets/
  frames/
    f_0001.webp … f_0324.webp   hero flight, 1920×1080 at 24 fps, drawn to a canvas as you scroll
    lq.webp                     low-res atlas of every frame, shown until the full frames arrive
  images/
    p_01.avif … p_10.avif       aerial stills on the Camera section's photo wall
  models/
    drone.glb                   the drone (meshopt-compressed): body, gimbal, 4 arms, 4 propellers
```

All paths are relative, so the folder works on its own: serve it with `python3 -m http.server`, drag it onto Netlify Drop, or open it from GitHub Pages. Opening `index.html` straight from disk won't load the model or frames, because browsers block those requests on `file://`.

## Libraries

Loaded from CDNs, no install needed: three.js 0.160 (GLTFLoader, meshopt decoder, RoomEnvironment) from jsDelivr, and Poppins from Google Fonts. The drone's colours are painted onto the model when it loads; the sonar terrain is an inline SVG.

## Reserve form

The form is set up for Netlify Forms (`data-netlify="true"`, a hidden `form-name` field and a honeypot). Deployed on Netlify, reservations appear under Forms in the site dashboard. GitHub Pages can't receive forms, so there the page shows a short note instead of sending anything.

## Before launch

- AERIS ONE, its prices, specs, dates and the FAQ answers are placeholders for a concept.
- The aerial stills and the 3D model are AI-generated.
- Point the footer links at real pages.
