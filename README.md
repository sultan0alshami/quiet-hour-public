# Quiet Hour Theme - Salla Store Theme

A premium spa booking theme for Salla e-commerce platform.

## 🎨 Theme Features

- Modern, elegant design
- RTL (Arabic) support
- Responsive layout
- Spa-focused UI/UX
- Service booking integration

## 📁 Project Structure

```
quiet-hour-theme/
├── src/
│   ├── assets/         # Uncompiled CSS & JS (app.css/app.js)
│   ├── locales/        # Storefront translations
│   └── views/          # Twig layouts, pages, and components
├── public/             # Built assets copied from src/assets
├── package.json        # Build & watch scripts
├── twilight.json       # Theme metadata & component registry
└── README.md
```

## 🚀 Getting Started

1. Install build tools

   ```bash
   npm install
   ```

2. Compile storefront assets

   ```bash
   npm run build        # copies src/assets → public/
   npm run watch        # optional, rebuilds on file changes
   ```

3. Preview with Salla CLI

   ```bash
   salla theme serve
   ```

4. Publish from the project root (CLI will link to TwilightCI)

   ```bash
   salla theme publish
   ```

## 📚 Documentation

- [Salla Theme Development](https://docs.salla.dev/422968m0)
- [Salla CLI Documentation](https://github.com/SallaApp/Salla-CLI)

## 🔗 Related Projects

- **App Repository**: [quiet-hour](https://github.com/sultan0alshami/quiet-hour) - React SPA booking application

