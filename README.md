# 🚀 Personal Portfolio

A fast, responsive, and futuristic personal portfolio built with **React**, **Vite**, **SCSS**, and **React Bits**. Showcases your Hero, About, Skills, Work, Testimonials, Contact form—and more—organized for easy customization and scalability.

---

## 📋 Table of Contents

1. [Demo](#-demo)
2. [Features](#-features)
3. [Tech Stack](#-tech-stack)
4. [Prerequisites](#-prerequisites)
5. [Installation & Setup](#-installation--setup)
6. [Available Scripts](#-available-scripts)
7. [Project Structure](#-project-structure)
8. [Deployment](#-deployment)
9. [Contributing](#-contributing)
10. [License](#-license)

---

## 🌐 Demo

> **Live preview coming soon!**  
> You can run locally by following the steps below.

---

## ✨ Features

- **Hero Section**
- **About Me**
- **Skills**
- **Work / Projects**
- **Testimonials**
- **Experience Timeline**
- **Education & Certifications**
- **Services Offered**
- **Blog / Articles**
- **Resume Download**
- **Clients & Logos**
- **Stats / Counters**
- **Awards & Recognition**
- **Open-Source Projects**
- **Newsletter Signup**
- **FAQ**
- **Back-to-Top Button**
- **Dark-Mode Toggle**
- **Contact Form**
- **Footer with Social Links**

---

## 🛠 Tech Stack

- **Framework:** React
- **Bundler:** Vite
- **Styling:** SCSS (global + partials)
- **UI Kit:** React Bits
- **Language:** JavaScript (ES6+)
- **Version Control:** Git

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) v14+
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A code editor (e.g. VS Code)

---

## 🔧 Installation & Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/ergishasani/Portfolio_Beta.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   npm install react-bits
   npm install -D sass
   ```

3. **Run the dev server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit `http://localhost:5173` (or the port Vite shows).

---

## 📜 Available Scripts

In the project directory, you can run:

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Start development server                    |
| `npm run build` | Build for production into `dist/`           |
| `npm run serve` | Preview production build locally (via Vite) |
| `npm run lint`  | Run ESLint (if configured)                  |

---

## 🗂 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── assets/
│   │   ├── images/                # static images
│   │   ├── icons/                 # SVG icons
│   │   └── styles/                # all SCSS files
│   │       ├── base/              # resets, typography, variables
│   │       ├── components/        # per-component SCSS
│   │       ├── utils/             # mixins & functions
│   │       └── main.scss          # global import entrypoint
│   │
│   ├── data/                      # JSON/JS content (testimonials, work, etc.)
│   │
│   ├── components/                # all React components (flat)
│   │   ├── About.jsx
│   │   ├── Awards.jsx
│   │   ├── BackToTop.jsx
│   │   ├── BlogList.jsx
│   │   ├── Clients.jsx
│   │   ├── ContactForm.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── Education.jsx
│   │   ├── FAQ.jsx
│   │   ├── Hero.jsx
│   │   ├── Newsletter.jsx
│   │   ├── OpenSource.jsx
│   │   ├── Resume.jsx
│   │   ├── Services.jsx
│   │   ├── Skills.jsx
│   │   ├── Stats.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Timeline.jsx
│   │   ├── Work.jsx
│   │   └── Footer.jsx
│   │
│   ├── hooks/                     # custom React hooks
│   ├── contexts/                  # React contexts (e.g. ThemeContext)
│   ├── utils/                     # helper modules / API wrappers
│   ├── App.jsx                    # root layout & router
│   └── index.jsx                  # entry point, import main.scss here
│
├── .gitignore
├── package.json
├── README.md                     # ← you are here
└── vite.config.js                # or webpack.config.js
```

---

## 🚀 Deployment

You can deploy the production build to any static-hosting service:

- **Netlify**: drag & drop your `dist/` folder or connect your repo.
- **Vercel**: import your Git repo, set root to `/`.
- **GitHub Pages**: build locally and push `dist/` to `gh-pages` branch.

---

## 🤝 Contributing

1. Fork this repo
2. Create a feature branch:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. Commit your changes and push:

   ```bash
   git commit -m "Add some feature"
   git push origin feature/YourFeature
   ```

4. Open a Pull Request—describe your changes and link any issues.

---

## 📄 License

This project is **MIT** licensed. See the [LICENSE](LICENSE) file for details.

---

> Crafted with ❤️ using React, Vite, SCSS & React Bits

```

```
