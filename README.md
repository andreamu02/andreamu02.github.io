# andreamu02.github.io

Personal portfolio of **Andrea Mutti** — M.S. Cybersecurity student, focused on
offensive security, penetration testing, and embedded/automotive security.

Live at **[andreamu02.github.io](https://andreamu02.github.io)**.

## Stack

Built with [Astro](https://astro.build) as a static site, with Italian/English
(`/it`, `/en`) localization. All page content lives in `src/data/site.ts`.

## Development

```bash
npm install      # install dependencies
npm run dev      # local dev server at localhost:4321
npm run build    # production build to ./dist/
npm run preview  # preview the production build
```

## Deployment

Automatically built and deployed to GitHub Pages on push to `main`
via the workflow in `.github/workflows/deploy.yml`.
