<div align="center">

# Hasnain's Portfolio

### A modern, fast, and minimal personal portfolio built with React & TypeScript

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)

[Live Demo](#) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## About

This repository contains the source code for my personal portfolio website — a space to showcase my projects, skills, and experience with a clean, fast, and responsive interface.

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 19 |
| **Language** | TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **Routing** | React Router DOM |
| **Icons** | Lucide React |
| **Linting** | Oxlint |
| **Utilities** | clsx, tailwind-merge |

## Project Structure

```
Portfolio-Hasnain/
├── public/              # Static assets (images, favicon, etc.)
├── src/                 # Application source code
├── remove_bg.py         # Utility script to remove white backgrounds from images
├── requirements.txt     # Python dependencies for remove_bg.py
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies & scripts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/irlhasnain/Portfolio-Hasnain.git

# Move into the project directory
cd Portfolio-Hasnain

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## Image Background Removal Script

This project includes a small Python utility (`remove_bg.py`) to strip white backgrounds from images before adding them to `public/`.

### Setup

```bash
pip install -r requirements.txt
```

### Usage

```bash
python remove_bg.py
```

> Edit the input/output paths inside `remove_bg.py` to point to your own image.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run Oxlint on the codebase |
| `npm run preview` | Preview the production build locally |

## Contributing

This is a personal portfolio project and not open for external contributions. However, if you spot a bug, feel free to open an [issue](../../issues).

## License

This is a personal and custom-built portfolio project. All rights reserved — this code is not licensed for public/open-source use, copying, or redistribution.

## Contact

**Hasnain**
GitHub — [@irlhasnain](https://github.com/irlhasnain)

---

<div align="center">
<sub>Built and maintained by Hasnain</sub>
</div>
