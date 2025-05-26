# 🚀 Personal Portfolio

A fast, responsive, and futuristic personal portfolio built entirely with **Node.js**, **Express**, **EJS** templates, and **SCSS**. Showcases your Hero, About, Skills, Work, Testimonials, Contact form—and more—organized for easy customization and scalability.

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
> Run locally by following the steps below.

---

## ✨ Features

- **Server-rendered Templates** with EJS
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
- **Dark-Mode Toggle** (via client JS)
- **Contact Form** handled by Nodemailer
- **Footer with Social Links**

---

## 🛠 Tech Stack

- **Runtime & Framework:** Node.js, Express
- **Templating:** EJS
- **Styling:** SCSS (compiled with node-sass-middleware)
- **Mailer:** Nodemailer (for contact form submissions)
- **Version Control:** Git

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) v14+
- [npm](https://www.npmjs.com/)
- A code editor (e.g., VS Code)

---

## 🔧 Installation & Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/ergishasani/Portfolio_Beta.git
   cd Portfolio_Beta
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment**

   - Create a `.env` file in the root with your mail settings and port:

     ```env
     PORT=3000
     SMTP_HOST=smtp.example.com
     SMTP_PORT=587
     SMTP_USER=your@email.com
     SMTP_PASS=yourpassword
     ```

4. **Compile SCSS and start server**

   ```bash
   # In one terminal, watch SCSS
   npm run sass

   # In another terminal, start dev server
   npm run dev
   ```

5. **Open in browser**
   Visit `http://localhost:3000`.

---

## 📜 Available Scripts

| Command        | Description                                      |
| -------------- | ------------------------------------------------ |
| `npm run dev`  | Start Express server with nodemon                |
| `npm start`    | Start Express server in production mode          |
| `npm run sass` | Watch and compile SCSS (`scss/` → `public/css/`) |

---

## 🗂 Project Structure

```
portfolio/
├── scss/                   # SCSS source files
│   └── main.scss
├── public/                 # Static assets
│   ├── css/                # Compiled CSS
│   ├── js/                 # Client-side JavaScript
│   └── images/             # Images
├── views/                  # EJS templates
│   ├── partials/           # header.ejs, footer.ejs, etc.
│   ├── index.ejs           # Home page
│   ├── about.ejs           # About page
│   └── contact.ejs         # Contact page
├── routes/                 # Express routes
│   └── index.js
├── controllers/            # Route handlers
│   └── contactController.js
├── utils/                  # Helpers (e.g., mailer.js)
│   └── mailer.js
├── .env                    # Environment variables
├── package.json
└── server.js               # App entry point
```

---

## 🚀 Deployment

- Host on any Node.js-compatible platform (Heroku, Vercel, Render).
- **Steps:**

  1. Set environment variables on your host.
  2. Run `npm install` and `npm start`.

---

## 🤝 Contributing

1. Fork this repo

2. Create a feature branch:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. Commit and push:

   ```bash
   git commit -m "Add feature"
   git push origin feature/YourFeature
   ```

4. Open a Pull Request.

---

## 📄 License

This project is **MIT** licensed. See the [LICENSE](LICENSE) file for details.

---
