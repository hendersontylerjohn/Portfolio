# Portfolio

Personal portfolio for **Tyler Henderson** - Fenestration Technical Lead (NFRC compliance & standards strategy).

Live site: **https://hendersontylerjohn.github.io**

## Stack

Plain HTML5, CSS3, and vanilla JavaScript - no build step, no dependencies. Served straight from the repository root by GitHub Pages.

| File | Purpose |
| --- | --- |
| `index.html` | Single-page bilingual site (hero, about, experience, projects, skills, contact) |
| `styles.css` | Grayscale theme with a muted sage accent, mobile-first, reduced-motion aware |
| `script.js` | Scroll-reveal animations, sticky nav state, mobile menu, EN/FR language toggle |
| `assets/` | Resumes (EN/FR) and technical report PDFs, plus favicon/decorative SVGs |

### Bilingual content

The EN/FR toggle in the nav swaps text in place (`data-en`/`data-fr` attributes on `.i18n`
elements, `data-href-en`/`data-href-fr` on `.i18n-href` elements, `data-aria-en`/`data-aria-fr`
on `.i18n-aria` elements) via `script.js` - no page navigation, so scroll position and menu
state are preserved. The chosen language is remembered via `localStorage`. When editing page
copy, update both the visible English text and its `data-fr` (or `data-en`) counterpart.

## Local preview

Open `index.html` in a browser, or run any static server, e.g.:

```sh
python -m http.server
```

## Deployment

Pushing to `main` triggers GitHub Pages automatically - no build workflow needed.
