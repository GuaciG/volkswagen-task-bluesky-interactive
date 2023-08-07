# Test for Bluesky Interactive - Volkswagen - React + Tailwindcss (Vite)

![Volkswagen Task for Bluesky Interactive](https://res.cloudinary.com/drpcjt13x/image/upload/v1691406473/Proyectos/Volkswagen%20Task%20-%20Bluesky%20Interactive/volkswagen_screenshot_okzov9.jpg)

## 💻 Vite Starter Kit: Basics

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Start by creating a new Vite project.

```
npm create vite@latest
```

Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start your build process
Run your build process with npm run dev.

```
npm run dev
```

## 🚀 Project Structure

Inside of your Vite project, you'll see the following folders and files:

```
/
├── public/
│   └── assets
│   └── vite.svg
├── src/
│   ├── components/...
│   └── App.css
|   └── App.jsx
|   └── index.css
|   └── main.jsx
└── index.html
└── package.json
└── tailwind.config.js
└── vite.config.js
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:5173`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
