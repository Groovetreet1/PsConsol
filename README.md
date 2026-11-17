# PS5Consol

A modern, dependency-free website concept for a next-gen PS5 console showcase — landing page, journal, demo store and a 3D console-style login.

**🌐 Live demo:** https://groovetreet1.github.io/PsConsol/
**📦 Repository:** https://github.com/Groovetreet1/PsConsol

![Status](https://img.shields.io/badge/status-live%20concept-43e7ff)
![HTML](https://img.shields.io/badge/HTML5-multi--page-2f7bff)
![Languages](https://img.shields.io/badge/i18n-EN%20%7C%20FR%20%7C%20AR-8a5cff)
![No build](https://img.shields.io/badge/build-none-8a5cff)

## ✨ Highlights

- **Cinematic home page** with a pure-CSS PS5 console, floating glass chips and a 3D tilt effect
- **Animated bento features** — SSD speed meter, haptic pulses, ray sweeps and a 3D-audio equalizer
- **DualSense-style controller** drawn entirely in SVG/CSS
- **Horizontal game showcase** with snap scrolling, arrow controls and original SVG cover art
- **Tech specs table**, newsletter CTA with validation and toast feedback
- **About page** with story, values, animated stats and a milestone timeline
- **Journal (blog)** with a featured article, listing and full article pages
- **Demo store** with category filters, product grid and a slide-out cart (add, quantity, remove, subtotal)
- **3D console-style login** with a tilting console/controller scene, glass sign-in card, live OS clock, password reveal and a demo session state
- **Trilingual UI**: English, French and Arabic with full RTL support and a language switcher
- **Persistent cart** via `localStorage`
- Fully **responsive** (desktop / tablet / mobile) with a mobile menu
- **Accessible**: skip link, focus states, `aria` attributes, focus handling in the cart drawer and `prefers-reduced-motion` support
- Zero dependencies, zero build step

## 🗂️ Pages

| Page | File | Description |
| ---- | ---- | ----------- |
| Home | `index.html` | Hero, console showcase, features, immersion, games, specs and newsletter |
| About | `about.html` | Story, values, stats and timeline |
| Journal | `blog.html` | Featured post and article listing |
| Article | `article.html?post=<slug>` | Article reader with related posts |
| Store | `store.html` | Product filters, product grid and cart drawer |
| Sign in | `login.html` | 3D console-style demo login with session state |

The cart badge is shared across all pages. Cart data is stored under the `ps5consol-cart` key.

## 🌍 Languages

The site ships with an English / French / Arabic dictionary in `assets/js/i18n.js`.

- Use the **EN / FR / ع** switcher in the navigation.
- Force a language with `?lang=en`, `?lang=fr` or `?lang=ar` (useful for sharing links).
- The choice is remembered in `localStorage`.
- Arabic switches the document to `dir="rtl"` and the Tajawal typeface.
- To translate new content, add `data-i18n` (text), `data-i18n-html` (rich text), `data-i18n-placeholder` or `data-i18n-aria` attributes and add the key to each language block.

## 🛒 Demo store

The store is a front-end demo — **no payments are processed**.

- Products and prices live in `assets/js/store-data.js`.
- Cart logic lives in `assets/js/cart.js` (shared) and `assets/js/store.js` (UI).
- Maximum quantity per line is 9.
- Checkout shows a demo-only toast.

## 🔐 Demo login

`login.html` is a front-end concept only — **no credentials are sent or stored**.

- The 3D scene reacts to the pointer on desktop and the glass card has a depth tilt.
- Email + password validation, password reveal and a demo loading/success state.
- "Remember me" stores only the email under `ps5consol-demo-email`; the demo session lives in `sessionStorage` (`ps5consol-demo-session`) and ends with the tab.
- Sign out returns to the form without reloading the page.

## 🚀 Run locally

Just open `index.html` in a browser.

Or serve it with any static server (recommended, so relative URLs behave exactly like production):

```bash
npx serve .
# or
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## 📁 Structure

```
Ps5Consol/
├── index.html
├── about.html
├── blog.html
├── article.html
├── store.html
├── login.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   ├── covers/        # original game cover SVGs
│   │   └── products/      # original product SVGs
│   └── js/
│       ├── i18n.js        # EN / FR / AR dictionary + language switching
│       ├── main.js        # shared UI: nav, reveal, counters, toasts, carousel
│       ├── login.js       # 3D login scene, validation and demo session
│       ├── cart.js        # shared cart state + badge
│       ├── store-data.js  # product catalogue
│       ├── store.js       # store filters + cart drawer
│       ├── blog-data.js   # journal posts (trilingual)
│       └── blog.js        # blog listing + article renderer
└── README.md
```

## ✍️ Adding content

- **A game**: duplicate a `.game-card` in `index.html` and add a cover under `assets/img/covers/`.
- **A product**: add an entry to `window.STORE_PRODUCTS` in `assets/js/store-data.js` and the matching translation keys in `i18n.js`.
- **An article**: add an object to `window.BLOG_POSTS` in `assets/js/blog-data.js` (title, excerpt, quote and body in `en`, `fr`, `ar`).

## 🌐 Custom domain (optional)

GitHub Pages supports a custom domain at no extra cost. The domain itself must be purchased separately.

1. Buy a domain (for example from Namecheap, Porkbun, Cloudflare or a local `.ma` registrar).
2. In the repository, create a file named `CNAME` at the project root containing only the domain, e.g.:
   ```
   www.example.com
   ```
3. In the domain's DNS panel, add:
   - `CNAME` record: `www` → `groovetreet1.github.io`
   - For the apex/root domain, add `A` records pointing to GitHub Pages:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. In **GitHub → Settings → Pages → Custom domain**, enter the domain and enable **Enforce HTTPS** once the certificate is ready.

## 🎨 Design tokens

| Token    | Value                              |
| -------- | ---------------------------------- |
| Background | `#05060a`                        |
| Text     | `#f2f5ff`                          |
| Accent   | `#43e7ff → #2f7bff → #8a5cff`      |
| Display  | Sora                               |
| Body     | Inter                              |
| Arabic   | Tajawal                            |

## 📝 Disclaimer

This is a **fan-made concept website** for learning and portfolio purposes.
It is not affiliated with, endorsed by, or sponsored by Sony Interactive
Entertainment. "PlayStation" and "PS5" are trademarks of Sony Interactive
Entertainment.

## 📄 License

MIT — feel free to learn from it and build your own.
