# preact-project-skeleton

A minimal Preact SPA skeleton with client-side routing (wouter-preact), SCSS, and Bun as the runtime/bundler.

## Stack

- **[Preact](https://preactjs.com/)** — fast 3kB React alternative
- **[wouter-preact](https://github.com/molefrog/wouter)** — lightweight client-side routing
- **[Bun](https://bun.sh/)** — runtime, bundler, and package manager
- **[sass-embedded](https://sass-lang.com/)** — SCSS support
- **[modern-normalize](https://github.com/sindresorhus/modern-normalize)** — CSS reset

## Project Structure

```
src/
├── index.html          # SPA shell (entry point)
├── client.tsx          # Preact render root
├── server.tsx          # Bun.serve dev server
├── routes/
│   └── index.tsx       # wouter-preact Router + routes
├── components/
│   ├── Layout.tsx      # Page layout (header, nav, footer)
│   └── Nav.tsx         # Navigation links
├── pages/
│   ├── Home.tsx        # / route
│   └── About.tsx       # /about route
└── styles/
    └── app.scss        # Global styles
```

## Getting Started

Install dependencies:

```bash
bun install
```

Start the dev server with hot reload:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `bun dev` | Start dev server with HMR |
| `start` | `bun start` | Start server (no HMR) |
| `build` | `bun run build.js` | Build to `dist/` |
| `test` | `bun test` | Run tests |

## Adding a Page

1. Create `src/pages/MyPage.tsx`
2. Import and add a `<Route path="/my-page" component={MyPage} />` in `src/routes/index.tsx`
3. Add a `<Link href="/my-page">My Page</Link>` in `src/components/Nav.tsx`
