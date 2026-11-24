# Lucky Dog Mobile Groomers — homepage concept

A single-page homepage for a mobile dog-grooming service, built from a desktop Figma mockup and made responsive for tablet and phone. The hero plays a looping animation of a groomer and the grooming van, the reviews and stats sections swing and count in, four short grooming reels play inside torn-paper frames, and the services, locations, FAQ and footer animate in on scroll. Plain HTML, CSS and JavaScript with no build step.

## What's in the folder

```
index.html              the whole page: markup, styles and the small script for the menu, reviews, locations and FAQ
cover.jpg               portfolio thumbnail (800×500)
assets/
  images/               badges, icons, photos, illustrations, paw textures (paws*.svg) and the hero poster
  video/
    hero.mp4            looping hero animation
    ph1–ph4.mp4         the four grooming reels
  js/
    gsap.min.js, ScrollTrigger.min.js   GSAP 3.12.5
    motion.js                           scroll reveals, hover effects and the paw cursor
```

All paths are relative, so the folder works on its own: serve it with `python3 -m http.server`, drag it onto Netlify Drop, or open it from GitHub Pages.

## Libraries

GSAP and ScrollTrigger are included in `assets/js`. Nunito Sans and Figtree load from Google Fonts. Motion is switched off for visitors who ask for reduced motion, and the cursor and hover effects only run on devices with a mouse.

## Forms

The page has no forms; the booking buttons are links.

## Before launch

- The FAQ answers, the city names under each state and `[PHONE NUMBER]` are placeholders.
- The reviews, stats and franchise copy come from the mockup; confirm them before publishing.
- Point the nav, footer and booking links at real pages.
