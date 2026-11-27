# Blendy — Real fruit smoothies

Landing hero for a fictional smoothie brand: a hand rises from below holding a cup that bursts into a fruit splash, over a rippling pool in the flavour's own colour. Three flavours (Mango, Berry, Kiwi) change with a liquid wave wipe, a letter-by-letter word drop, fruit that flies out the top and falls back in, and a rewind of the outgoing splash.

Live: https://mmbalbuenajr-hue.github.io/Portfolio/Blendy/

## Files

- `index.html`: the whole page (HTML, CSS and vanilla JavaScript, no build step).
- `assets/video/`: one clip per flavour plus a reversed copy for the rewind (`*-rev.mp4`), and `water.mp4`, the looping ripple overlay.
- `assets/images/fruit/`: transparent floating-fruit cut-outs.
- `cover.jpg`: portfolio thumbnail.

Fonts load from Google Fonts (Unbounded, Poppins, Baloo 2). The blue sky in each cup clip is keyed out live in WebGL, so the clips can sit on any backdrop.

## Notes

- Autoplay moves to the next flavour when each splash finishes; arrows, tabs, arrow keys and swipes also change flavour.
- With reduced motion turned on, flavours switch instantly and the decorative motion stops.
- Videos are fetched into memory before playing so seeking works on any static host.
