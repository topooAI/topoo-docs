# Content Model

This repository now treats documentation as data.

The canonical structure is:

- `blocks`
- `topics`
- `pages`

The markdown and MDX files under `content/docs/**` remain the page bodies.

But the repository structure is now defined by the data model under this folder, not by free-form folder layout alone.

## Layers

### `site.json`

Site-level content metadata:
- title
- description
- board ordering
- top-level ownership hints

### `blocks.json`

Top-level documentation lanes.

Each block is a documentation surface such as:
- `topoo`
- `toagent`
- `towork`
- `toproject`
- `tomemory`

### `topics.json`

Each topic belongs to exactly one block.

A topic is the unit that should appear in the left navigation as a knowledge lane.

### `pages.json`

Each page belongs to exactly one topic and maps to a concrete file path in `content/docs/**`.

## Current Rule

- `blocks / topics / pages` define structure
- `content/docs/**` provides the actual body content

That means:
- new blocks should be added in `blocks.json`
- new topics should be added in `topics.json`
- new page records should be added in `pages.json`
- page body files should be created under `content/docs/**`

## Ownership

This folder is content-owned.

It must not contain:
- rendering templates
- shell layout rules
- UI component composition rules
- `TopooUI` system-owned page structure
