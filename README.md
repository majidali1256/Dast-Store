# DAST Store

DAST Store is a single-page fashion storefront built with vanilla JavaScript modules and served with Vite. It includes hash-based client-side routing, a product catalog, product detail pages, cart management, and a checkout/confirmation flow.

## Features

- Hash-based SPA routing (`#home`, `#catalog`, `#product`, `#checkout`, etc.)
- Product catalog sourced from a centralized data module
- Product detail page with size selection and related product suggestions
- Cart drawer with quantity updates, item removal, subtotal, and empty-state handling
- Local cart persistence using `localStorage`
- Checkout summary with dynamic totals and order confirmation flow
- Responsive UI styled with Tailwind CSS (loaded via CDN)

## Technology Stack

- **Runtime:** Browser (ES Modules)
- **Build/Dev Tooling:** [Vite](https://vitejs.dev/)
- **Language:** JavaScript (ESM)
- **Styling:** Tailwind CSS (CDN script in `index.html`) + custom CSS (`style.css`)
- **Package Manager:** npm (with `package-lock.json`)

## Prerequisites

- Node.js 18+ (recommended)
- npm

## Setup

```bash
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

This runs Vite on port `3001`.

## Build and Preview

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Configuration / Environment Variables

This project currently does **not** use environment variables or `.env` files.

## Usage

After starting the app, open the local URL shown by Vite and navigate with hash routes:

- `#home` — landing page
- `#catalog` — product listing with category filters
- `#product?id=<product-id>` — product detail page (example: `#product?id=obsidian-overcoat`)
- `#checkout` — checkout screen
- `#confirmation` — confirmation page
- `#care` and `#locator` — additional informational pages

Cart state is persisted in `localStorage` under the key `dast-cart`.

## Project Structure

```text
Dast-Store/
├── components/      # Reusable UI pieces (header, footer, cart drawer, toast)
├── data/            # Product catalog data
├── pages/           # Route-level page renderers
├── store/           # Client-side cart store and persistence
├── index.html       # App shell + Tailwind CDN config
├── main.js          # Router and app bootstrap
├── style.css        # Global/custom styles
└── package.json     # Scripts and tooling config
```

## Testing and Quality

There is currently no automated test or lint script defined in `package.json`.

Available npm scripts:

- `npm run dev`
- `npm run build`
- `npm run preview`

## Deployment Notes

This repository does not currently include provider-specific deployment configuration (such as Vercel, Netlify, or Docker files). A standard static deployment flow is:

1. Run `npm run build`
2. Deploy the generated `dist/` directory to your static hosting provider
