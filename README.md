# Topoo Docs

This is the dedicated content repository for `doc.topoo.ai`.

It is intentionally separate from `topoodoc`:

- `topoodoc`: the reusable Fumadocs system product, starter, and shared shell
- `topoo-docs`: the actual Topoo documentation site content, navigation, and deployment target

This repo vendors its own `fumadocs-system/` folder, so it can build and deploy independently.

## Start

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Deploy

```bash
pnpm deploy
```

## GitHub Auto Deploy

This repo includes [deploy.yml](/Users/viosson/AITD/1_PROJECTS/P21_AITD_CHATBOX/workspaces/integration/topoo-docs/.github/workflows/deploy.yml).

Required GitHub secret:

- `CLOUDFLARE_API_TOKEN`

When that secret is present, every push to `main` can publish `doc.topoo.ai`.

## Structure

- `content/docs/` holds the published board content for Topoo, toAgent, toWork, toProject, toMemory, and TopooUI
- `docs.config.ts` defines the top navigation and board labels
- `fumadocs-system/` is the vendored docs shell from the `topoodoc` system repo
- `wrangler.jsonc` points deployment to `doc.topoo.ai`

## Source Of Truth

This repo is the content source of truth for the docs site.
It should not depend on the application monorepo at runtime.
