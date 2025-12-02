# Knowledge Transfer Document - Quiet Hour Theme Project

## Purpose
This document contains essential knowledge and context about the Quiet Hour Theme project to help a new AI agent understand the project when working in a new repository or session.

---

## Project Overview

### Business Context
**Quiet Hour Men's Spa (ساعة هدؤ)** is a physical men's spa business with:
- **2 physical locations** in Aseer region, Saudi Arabia
- **Service areas:** Abha, Khamis Mushait, Ahad Rafidah
- **Services:** Massages, facials, Moroccan bath, pedicures, and service packages
- **Business Model:** Physical spa + **Active mobile/at-home service delivery**
- **Digital Status:** ✅ Online store is **LIVE and operational** on Salla platform
- **Mobile Services:** ✅ **Active** - All online orders automatically trigger at-home service delivery with equipment transport

### Project Purpose
This repository contains the **Salla e-commerce theme** for Quiet Hour's online store. The theme enables:
- Online service booking and sales
- Service catalog display
- Package presentation
- Customer testimonials
- Mobile-responsive design
- Arabic (RTL) and English support

---

## Technical Stack

### Platform & Framework
- **E-commerce Platform:** Salla (Saudi Arabia's leading e-commerce platform)
- **Theme Engine:** Salla Twilight Engine
- **Template Language:** Twig (primary), Liquid (legacy support)
- **Styling:** CSS3 with CSS Variables
- **JavaScript:** Vanilla JavaScript (ES6+)
- **Build Tools:** npm, Node.js
- **Version Control:** Git, GitHub

### Development Tools
- **CLI:** Salla CLI (`salla theme serve`, `salla theme publish`)
- **Local Development:** `salla theme serve` for local preview
- **Build Process:** Custom npm scripts
- **CI/CD:** GitHub Actions (TwilightCI)

---

## Project Structure

### Key Directories
```
quiet-hour-theme/
├── src/
│   ├── views/
│   │   ├── layouts/
│   │   │   └── master.twig          # Main layout
│   │   ├── pages/
│   │   │   ├── index.twig           # Homepage
│   │   │   └── product/index.twig  # Product pages
│   │   └── components/
│   │       ├── global/              # Global components (header, footer, mega-menu)
│   │       └── home/               # Home page components (17 components)
│   ├── assets/
│   │   ├── styles/app.css
│   │   └── scripts/app.js
│   └── locales/ar.json
├── public/                          # Compiled assets
├── twilight.json                    # Salla theme registry (CRITICAL FILE)
├── package.json                     # Build scripts
└── COMPANY_DOCUMENTATION.md         # Complete business documentation
```

### Critical Files
1. **twilight.json** - Complete theme registry with all 17 components, settings, and metadata
2. **src/views/layouts/master.twig** - Main theme layout
3. **src/views/pages/index.twig** - Homepage template
4. **package.json** - Build scripts (`npm run build`, `npm run watch`)
5. **COMPANY_DOCUMENTATION.md** - Full business context and services

---

## Components Overview

### Total Components: 17

#### Global Components (3)
1. `global.header` - Navigation with logo, menu, cart
2. `global.footer` - Multi-column footer
3. `global.mega-menu` - Advanced dropdown navigation

#### Home Page Components (14)
1. `home.hero` - Hero section
2. `home.about` - About section
3. `home.services` - Services showcase
4. `home.testimonials` - Customer reviews
5. `home.featured-products` - Featured products
6. `home.fixed-banner` - Fixed promotional banner
7. `home.fixed-products` - Fixed products showcase
8. `home.products-slider` - Product carousel
9. `home.photos-slider` - Photo gallery
10. `home.square-photos` - Square photo grid
11. `home.store-features` - Feature highlights
12. `home.parallax-background` - Parallax effect
13. `home.random-testimonials` - Dynamic testimonials
14. `home.youtube` - YouTube video integration

### Component Path Format
- Use dot notation: `global.header`, `home.hero`
- No file extension in paths
- Case-sensitive (kebab-case)

---

## Theme Features

### Design Features
- **Color Scheme:**
  - Primary: #4A3728 (Dark Brown)
  - Secondary: #E8DCC6 (Light Beige)
  - Background: #FFF8F0 (Cream)
- **RTL Support:** Full Arabic right-to-left layout
- **Responsive:** Mobile-first design
- **Spa-Focused:** Design optimized for wellness businesses

### Functional Features
- 17 pre-built components
- Drag-and-drop customization
- Service booking integration
- Product/service catalog
- Testimonials system
- Package display
- Media components (images, videos)

---

## Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Build assets
npm run build

# Watch mode
npm run watch

# Local preview
salla theme serve
```

### Publishing
```bash
# Build first
npm run build

# Publish to Salla
salla theme publish
```

### Git Workflow
- **Main branch:** Production-ready code
- **Dev branch:** Development and testing
- **Public branch:** Public repository version

---

## Important Context & Decisions

### Business Status
- ✅ **Online store is LIVE** - Not in development
- ✅ **Mobile services are ACTIVE** - All online orders trigger at-home delivery
- ✅ **Theme is operational** - Serving real customers

### Technical Decisions
1. **Twig over Liquid:** Converted from Liquid to Twig syntax
2. **Component-based:** Modular component architecture
3. **Build Process:** Assets compiled to `public/` directory
4. **Structure:** Follows Salla's "Theme Raed" starter structure

### Key Requirements
- All components must be registered in `twilight.json`
- Component paths must match file structure
- Use `component.settings` not `section.settings` in Twig
- Assets must be compiled before publishing

---

## Services & Pricing Context

### General Services (250 SAR each)
- Facial Cleansing (تنظيف بشرة)
- Moroccan Bath (حمام مغربي)
- Pedicure (بدكير)

### Massage Services (250 SAR each)
- Cupping Massage (مساج كاسات)
- Hot Stone Massage (مساج أحجار)
- Swedish Massage (مساج سويدي)
- Thai Massage (مساج تايلاندي)
- Relaxation Massage (مساج استرخائي)

### Service Packages
- Comfort Package: 300 SAR (Thai Massage + Moroccan Bath + Pedicure)
- VIP Package: 350 SAR (Mixed Massage + Cupping + Pedicure + Steam)
- Wedding Preparation: 450 SAR (Mixed Massage + Royal Moroccan Bath + Pedicure + Facial Mask)

---

## Contact Information

### Business Contacts
- **WhatsApp:** 0552407462
- **Email:** Saathdoo1@gmail.com
- **Development Email:** sultan12quiet@gmail.com
- **Website:** https://quiethour.sa
- **Support:** https://quiethour.sa/support

### Social Media
- Instagram: @QuietHour.sa
- TikTok: @QuietHour.sa
- Snapchat: @Quiet.Hour

### Operating Hours
- **Saturday-Thursday:** 11:00 AM - 10:00 PM
- **Friday:** 3:00 PM - 10:00 PM

---

## Repository Information

### Current Repository
- **Original:** https://github.com/sultan0alshami/quiet-hour-theme
- **Public:** https://github.com/sultan0alshami/quiet-hour-public

### Branches
- `main` - Production branch
- `dev` - Development branch (includes latest documentation)
- `public` - Public repository branch

---

## Common Tasks & Commands

### Adding a New Component
1. Create Twig file in `src/views/components/home/` or `global/`
2. Register in `twilight.json` with correct path
3. Add component schema with settings and blocks
4. Test locally with `salla theme serve`
5. Build and publish

### Updating Theme
1. Make changes in `src/` directory
2. Run `npm run build` to compile assets
3. Test locally
4. Commit changes
5. Push to repository
6. Publish via `salla theme publish`

### Troubleshooting
- **Port conflicts:** Use `salla theme serve --port 9000 --ws_port 9001`
- **Build errors:** Check `package.json` scripts
- **Component not showing:** Verify path in `twilight.json` matches file location
- **Publishing errors:** Ensure `twilight.json` is valid and all components registered

---

## Important Notes

### Do's
- ✅ Always build before publishing (`npm run build`)
- ✅ Test locally before pushing
- ✅ Keep `twilight.json` synchronized with actual components
- ✅ Use Twig syntax (`component.settings` not `section.settings`)
- ✅ Follow Salla's component path conventions

### Don'ts
- ❌ Don't publish without building
- ❌ Don't use Liquid syntax in new components
- ❌ Don't modify `public/` files directly (they're generated)
- ❌ Don't forget to register new components in `twilight.json`

---

## Related Projects

- **Booking App:** https://github.com/sultan0alshami/quiet-hour (React SPA)
- **Theme Repository:** https://github.com/sultan0alshami/quiet-hour-theme
- **Public Repository:** https://github.com/sultan0alshami/quiet-hour-public

---

## Documentation Files

1. **COMPANY_DOCUMENTATION.md** - Complete business documentation
2. **README.md** - Project overview
3. **THEME_STRUCTURE.md** - Technical structure guide
4. **QUICK_START.md** - Quick start guide
5. **GITHUB_SETUP.md** - GitHub setup instructions
6. **KNOWLEDGE_TRANSFER.md** - This file

---

## Key Takeaways for New Agent

1. **This is a LIVE business** - The online store is operational and serving real customers
2. **Mobile services are active** - All online orders result in at-home service delivery
3. **Theme is production-ready** - Not in development, it's live
4. **Follow Salla conventions** - Use Twig, register components properly, build before publish
5. **Business context matters** - This is a men's spa business, not a tech company
6. **Component-based architecture** - 17 components, modular design
7. **RTL support is critical** - Full Arabic support required

---

**Last Updated:** 2024  
**Maintained By:** Sultan Alshami - Quiet Hour Management Team

