# Topoo Docs Content

This repository is the pure content source for `doc.topoo.ai`.

See also:
- [`REPO_BOUNDARY.md` in `topoodoc`](https://github.com/topooAI/topoodoc/blob/main/docs/REPO_BOUNDARY.md)

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
- `content-model/site.json`
- `content-model/blocks.json`
- `content-model/topics.json`
- `content-model/pages.json`

The content in this repo should stay text-first and schema-safe.

That means:
- narrative docs
- metadata
- ordering
- links
- plain markdown or mdx body content for true document pages
- block/topic/page records

It should not contain layout-owned TopooUI board pages or style-defining docs structures.

## What Does Not Live Here

- `app/`
- `components/`
- `fumadocs-system/`
- `package.json`
- `next.config.*`
- `wrangler.jsonc`

## Editing Model

Edit the documentation content directly under `content/docs/`.

The structural source of truth now lives under `content-model/`.

Use:
- `blocks.json` for top-level boards
- `topics.json` for left-nav knowledge lanes
- `pages.json` for concrete page/file mapping

`content/docs/**` remains the page body layer, but repository structure should now be reasoned about from the data model first, not from folders alone.

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

`TopooUI` is now system-owned and rendered from `topoodoc`, not from this repo.
