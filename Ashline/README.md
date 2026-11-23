# Ashline Freight — logistics homepage

A single-page homepage for a freight forwarder. A container train runs through the hero as you scroll, the stats count up with a second freight clip, the four process steps play short loops, a dot-matrix globe draws the scheduled lanes, and the quote form sits over a looping video at the foot of the page. Plain HTML, CSS and JavaScript with no build step.

## What's in the folder

```
index.html                  the whole page: markup, styles and scripts
cover.jpg                   portfolio thumbnail (800×500)
assets/
  images/
    hero-poster.jpg         first frame of the hero clip, shown while it loads
    freight-poster.jpg      first frame of the stats clip
    flow-*.jpg              posters for the four process clips
    foot-poster.jpg         poster for the footer loop
    red-wall.jpg            red container wall behind the lanes and service cards
  video/
    hero-1080.mp4, hero-720.mp4         scroll-scrubbed hero (720p on small screens)
    freight-1080.mp4, freight-720.mp4   scroll-scrubbed stats clip
    flow-brief|plan|move|deliver.mp4    process step loops
    foot-loop.mp4                       contact and footer background
```

All paths are relative, so the folder works on its own: serve it with `python3 -m http.server`, drag it onto Netlify Drop, or open it from GitHub Pages.

## Libraries

Loaded from CDNs, no install needed: GSAP 3.15 (ScrollTrigger, SplitText, CustomEase) and Lenis 1.3 from jsDelivr, and Exo 2 and Public Sans from Google Fonts. The globe's land dots are stored inline in the page as a small encoded data block.

## Quote form

The form is set up for Netlify Forms (`data-netlify="true"`, a hidden `form-name` field and a honeypot). Deployed on Netlify, submissions appear under Forms in the site dashboard. GitHub Pages can't receive forms, so there the page shows a short note instead of sending anything.

## Before launch

- hello@ashline.example and the figures, lanes and customer names are placeholders.
- Point the footer links at real pages.
