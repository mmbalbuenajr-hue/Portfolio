# THAIKO · Thai street kitchen: homepage concept

A one-page homepage for a Bangkok-style street kitchen. The hero is a pinned scroll story: a plate of pad thai is assembled frame by frame as you scroll, with steam rising off the noodles and labels that track each ingredient. Below it are a painted-wall mural spanning three sections, a five-step "how we cook it" walkthrough, a menu where each dish shows a photo on hover, an Instagram-style feed, opening hours and a closing call to book. Plain HTML, CSS and JavaScript with no build step.

## What's in the folder

```
index.html              the whole page: markup, styles and the script (scroll story, WebGL video and steam, motion)
cover.jpg               portfolio thumbnail (800×500)
assets/
  fonts/                Archivo, Barlow Condensed and Source Sans 3 (WOFF2, self-hosted)
  images/               mural, textures, step photos, menu photos, feed posts and ingredient stickers
  video/
    dish.mp4            the scroll-scrubbed pad thai clip (colour on top, alpha mask below)
    still-0/1/2.webp    stills shown while the clip loads
```

All paths are relative, so the folder works on its own: serve it with `python3 -m http.server`, drag it onto Netlify Drop, or open it from GitHub Pages. Use a server rather than opening `index.html` straight from disk: browsers block WebGL from reading local files over `file://`, so the dish in the hero would not appear.

## Motion

The clip is drawn with WebGL and scrubbed by scroll position, so it never plays on its own. Reveals, parallax, magnetic buttons and the cursor-following menu preview are switched off or reduced for visitors who ask for reduced motion, and the hover effects only run on devices with a mouse.

## Forms

The page has no forms; "Book a table" and the contact buttons are links.

## Before launch

Address, phone number, email, prices and the Instagram handle are placeholders.
