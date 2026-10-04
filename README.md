# Eman Fatima Portfolio (single long page)

```
index.html              page shell (navbar, sidebar overlay, footer, lightbox)
css/style.css           all styles (nav/sidebar, marquee and responsive rules at the bottom)
js/app.js               sections, data, contact form, navbar/sidebar logic
js/designs.js           the 36 graphic designs (titles/categories editable)
assets/img              images and certificates
assets/img/design       graphic design images (.webp)
assets/video            project demo videos
assets/cv               Eman-Fatima-CV.pdf  <- used by every "Download CV" button
```

## Quick edits
- GitHub numbers: `GH_STATS` at the top of `js/app.js` (repos, followers in K, contributions).
- Marquee words: `MARQUEE` array in `js/app.js`.
- Section order: `ORDER` array in `js/app.js`.
- Theme: the sun/moon button in the navbar switches light/dark (choice is saved; first visit follows the device setting).
- New CV: replace `assets/cv/Eman-Fatima-CV.pdf` (keep the same file name).

## Contact form (messages go to emanfatima13308@gmail.com)
The form uses FormSubmit (no backend needed). After deploying the site:
1. Send one test message from the live site.
2. Open the Gmail inbox, find the "Activate Form" email from FormSubmit, click the confirm button (one time only).
3. After that every message arrives in Gmail. Check Spam the first time.
It works on a deployed site (Netlify/Vercel/GitHub Pages), not by double-clicking index.html.

Deploy: drag this folder into Netlify.
