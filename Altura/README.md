# Altura — AI copilot homepage

A single-page concept site for Altura, an AI sales copilot. A hand holding a red rose rises
out of a dark, softly blurred rose wall while real rose petals drift through the hero. The
rest of the page sits on warm cream (`#F5F1E6`) with sharp-cornered hairline grids, framed
rose panels and editorial type, and nearly every section has its own scroll or hover
animation. Plain HTML, CSS and JavaScript with no build step.

## What's in the folder

```
index.html              the whole page: markup, styles and scripts
cover.jpg               portfolio thumbnail (800×500)
assets/
  images/
    roses.jpg           rose-wall background (hero, showcase panel, featured plan, CTA band)
    roses-sm.jpg        smaller crop for the three "How it works" visuals
    rose-hand.webp      transparent cut-out of the hand and rose in the hero
    petal.webp          transparent rose petal used by the falling-petal animation
  js/
    gsap.min.js         GSAP 3.15.1, drives the petals
```

All paths are relative, so the folder works on its own: open `index.html`, serve it with
`python3 -m http.server`, drag it onto Netlify Drop, or open it from GitHub Pages.

## Libraries

GSAP 3.15.1 (local copy) for the hero petals, and Geist / Geist Mono from Google Fonts.
Everything else is CSS: keyframes for the load sequence and looping UI demos, scroll-driven
animations (`animation-timeline: view()`) for the hero exit, quote fill, CTA reveal and
footer wordmark, plus a small IntersectionObserver that triggers the section reveals.

## Newsletter form

The footer sign-up is set up for Netlify Forms (`data-netlify="true"`, a hidden `form-name`
field and a honeypot). Deployed on Netlify, sign-ups appear under Forms in the site
dashboard. GitHub Pages can't receive forms, so there the page shows a short note instead of
sending anything.

## Notes

- Motion is turned off for visitors who set `prefers-reduced-motion`.
- The scroll-scrubbed effects need Chrome, Edge or Safari 26+; other browsers show their
  final state.
- Phones get 14 petals instead of 34, and the petals pause while the hero is off screen.
- The business, people, stats and prices are placeholders for this concept.
