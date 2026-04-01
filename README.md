# Topoo Docs Content

This repository is the pure content source for `doc.topoo.ai`.

It does not own:
- Next.js app code
- Fumadocs shell code
- deployment code
- Cloudflare configuration
- shared UI components

Those belong to `topoodoc`, which is the documentation system repository.

## What Lives Here

- `content/docs/**`
- `content/docs/**/meta.json`
- `topoodoc.content.json`

## What Does Not Live Here

- `app/`
- `components/`
- `fumadocs-system/`
- `package.json`
- `next.config.*`
- `wrangler.jsonc`

## Editing Model

Edit the documentation content directly under `content/docs/`.

Use `topoodoc.content.json` for site-level metadata such as:
- site title
- site description
- primary top navigation
- docs shell labels

## Publishing Model

This repo is consumed by the `topoodoc` system.

The system repository is responsible for:
- rendering the content with the Topoo docs shell
- building the static site
- deploying to `doc.topoo.ai`

## Consumed By Topoodoc

Inside the `topoodoc` system repository:

```bash
TOPOODOC_CONTENT_REPO=../topoo-docs pnpm content:build
TOPOODOC_CONTENT_REPO=../topoo-docs pnpm content:deploy
```

If you keep the two repositories side by side with the default names, `topoodoc` can also use `../topoo-docs` automatically without setting the env var.

## Current Boards

- `Topoo`
- `toAgent`
- `toWork`
- `toProject`
- `toMemory`
- `TopooUI`
