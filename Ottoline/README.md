# Ottoline Booksellers — modern classics

A single-page bookshop concept. Twenty-four novels stand on a mahogany shelf; the featured book turns out to show its cover. Open it to see the book lying on a table, then read a short sample that ends in a blurred page and an "Add to bag" card. Plain HTML, CSS and JavaScript with no build step and no dependencies.

## What's in the folder

```
index.html                      the whole page: markup, styles and scripts
cover.jpg                       portfolio thumbnail (800×500)
assets/
  fonts/
    BodoniModa-Regular.woff2         display titles and small capitals
    InterTight-Medium-SemiBold.woff2 labels, buttons, body copy
    Newsreader-Regular.woff2         the pages inside the book
    Newsreader-Italic.woff2          italics inside the book
  images/
    book-covers.webp            all 24 covers on one sheet (cropped in CSS)
    book-spines.webp            all 24 spines on one sheet
    bookcase-wall.webp          the mahogany wall the shelf is built into
    table-top.webp              the table seen from above in the book view
```

All paths are relative, so the folder works on its own: open `index.html` directly, serve it with `python3 -m http.server`, or drag the folder onto Netlify Drop.

## How it works

- **Shelf:** a 3D row of books driven by one animation loop. Scroll, drag, use the arrows or the keyboard to browse; the decade tabs filter the shelf, sliding books off and on.
- **Lights:** the pin lights, back-wall pools and picture lights are separate layers over the wall image, so they switch on with a flicker and glow gently.
- **Book view and sample:** the book opens on the table; pages turn in 3D. The last spread is blurred with a prompt to buy.
- **Bag:** add books from the book view or the end of the sample. The bag lives in the page only (it empties on reload) and checkout is switched off.

## Before launch

- The sample pages are placeholder text. Replace them with licensed extracts from each publisher.
- Prices are illustrative, and the cover art is original placeholder design, not the publishers' jackets.
- Point "Help", "Instagram" and the Checkout button at real pages or a store backend.

## Accessibility and motion

Real buttons and links throughout, a live region announces each new book, the dialogs are labelled, and `prefers-reduced-motion` turns off the flicker, glow and long transitions.
