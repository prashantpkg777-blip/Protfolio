# Prashant Kumar — Portfolio

A modern glassmorphism portfolio website built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

**🔗 Live site:** [prashantpkgportfolio.netlify.app](https://prashantpkgportfolio.netlify.app/)

---

## ✨ Features

- **Glassmorphism UI** — frosted glass panels, layered blur, gradient sheens, and ambient drifting background blobs
- **Animated terminal hero** — a typing-effect REPL that introduces who I am and what I build
- **About section** — bio, education timeline, and a framed photo card
- **Skills section** — grouped chips for languages, web tech, and tools
- **Projects section** — cards for Myntra Clone, Jarvis (voice assistant), and a weather app
- **Live view counter & like button** — real, shared counts powered by [CountAPI](https://countapi.mileshilliard.com/) (no backend required)
- **Fully responsive** — works from mobile to desktop
- **Accessible** — visible focus states, `prefers-reduced-motion` support, semantic markup

## 🛠️ Tech Stack

| Layer | Tools |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, backdrop-filter, grid/flexbox) |
| Interactivity | Vanilla JavaScript (no dependencies) |
| Fonts | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |
| View/Like counter | [CountAPI](https://countapi.mileshilliard.com/) |
| Hosting | [Netlify](https://www.netlify.com/) |

## 📁 Project Structure

```
├── index.html      # entire site — markup, styles, and scripts in one file
└── README.md
```

## 🚀 Running Locally

No build tools or dependencies needed.

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

Then just open `index.html` in your browser, or serve it locally:

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve .
```

Visit `http://localhost:8000`.

## 🚢 Deployment

Deployed on **Netlify** — drag-and-drop the folder in the Netlify dashboard, or connect the GitHub repo for automatic deploys on every push.

## ⚙️ Customization

- **Content** — name, education, skills, and project details live directly in the HTML markup under their respective `<section>` tags.
- **Colors** — all theme colors are CSS custom properties at the top of the `<style>` block (`:root`), so the whole palette can be changed from one place.
- **View/like counter keys** — the counter uses unique keys (`prashant_kumar_dev_portfolio_2026_views` / `_likes`) against the free CountAPI service. If you fork this project, change these keys to something unique to avoid sharing counts with the original site.

## 📬 Contact

- Email: [prashantpkg777@gmail.com](mailto:prashantpkg777@gmail.com)
- Location: Begusarai, Bihar, India

## 📄 License

This project is open for reference and learning. Feel free to fork it, but please don't reuse the personal content (name, photos, bio) as your own.

