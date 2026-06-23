# Chain — Store routines (prototype)

Prototype of a new **Store routines** module inside the "Chain" retail web application.
Exported from Figma Make and continued in VS Code. Original Figma file:
https://www.figma.com/design/Osq6Wa6M4uNKqQupyc4QZW/Store-routines

The primary focus is the **Store routines** module. It also touches the **Items** and
**Promotions** modules, but those are secondary.

## Stack

- React 18.3.1 + Vite 6 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`) + shadcn/ui (Radix primitives)
- React Router v7, `motion` (Framer Motion), Recharts, Sonner, react-hook-form
- `@/` is aliased to `./src` (see `vite.config.ts` and `tsconfig.json`)

## Running locally

Standardized on **npm**.

```bash
npm install        # if this fails, see "Install quirks" below
npm run dev        # Vite dev server → http://localhost:5173/
npm run build      # production build
```

`/` redirects to `/store-routines`. Other routes: `/items`, `/items-in-promotions`, `/item-details`.

### Install quirks (Figma Make export + local env)

A plain `npm install` may fail for two reasons; the full workaround is:

```bash
npm install --legacy-peer-deps --cache ./.npm-cache
```

- `--legacy-peer-deps`: `@mui/material` peer ranges conflict with the pinned React → ERESOLVE.
- `--cache ./.npm-cache`: the dev machine's global `~/.npm` cache had root-owned files (old npm
  bug) → EACCES. Permanent fix: `sudo chown -R 501:20 ~/.npm`, after which the cache flag is
  unneeded. `.npm-cache/` is gitignored.

Note: `react`/`react-dom` were added to `dependencies` (Figma Make only listed them as optional
`peerDependencies`, so they weren't installed locally).

## Architecture

Entry: `src/main.tsx` → `src/app/App.tsx`. `App.tsx` is the central hub: routing plus a large
amount of state for selections, modals, and a desktop-style floating/dockable **window system**
(`WindowFrame.tsx`) with ~11 window types (details, prices, promotions, etc.).

Key locations under `src/app/`:

- **Store routines**: `components/StoreRoutinesModule.tsx`, `components/StoreRoutinesGrid.tsx`
  — quick-filter presets (Promotions / Local values / Local items), `ItemGroupPanel.tsx`
  (hierarchical group filter), configurable multi-column grid with sticky columns.
- **Items**: `components/ItemsModule.tsx`, `components/ItemsGrid.tsx`. `/items-in-promotions`
  is `ItemsModule` with `isPromotionGrid={true}`.
- **Promotions / prices**: `EditPromotionGrid.tsx`, `PromotionPriceGrid.tsx`, `ActivePriceGrid.tsx`,
  `FuturePriceGrid.tsx`, `PriceHistoryGrid.tsx`, `LocalValuesGrid.tsx`, `StorePriceGrid.tsx`.
- **Item details**: `components/ItemDetailsPage.tsx`, `ItemDeclaration.tsx`.
- **Layout**: `Sidebar.tsx`, `Header.tsx`, `Footer.tsx`, `EnvironmentHeader.tsx`.
- **Shared UI**: `components/ui/` (shadcn/ui).
- **State**: `contexts/ModifiedContext.tsx` tracks field-level modifications for save prompts.
- **Data**: `data/mockData.ts` — deterministic, seeded mock grocery items with price/promotion/
  classification/attribute fields. No backend; all data is mock.
- **Figma-generated imports**: `src/imports/` (large machine-generated components/SVGs).
  `figma:asset/<hash>` imports are resolved to `src/assets/` by a custom Vite plugin in
  `vite.config.ts` — keep that plugin.

## Conventions

- Components PascalCase; props interface `{Component}Props`; callbacks `on{Action}`; imperative
  handles `{Component}Handle`; constants UPPER_SNAKE_CASE.
- Brand colors used inline: primary teal `#1C7862`, active dark `#373737`, light gray `#EAEAEA`.
- Design guidelines: `guidelines/Guidelines.md`.

## Known stubs / incomplete areas

- Local Values tab in `ItemDetailsPage.tsx` (empty content block).
- Export (`ExportExcelModal.tsx`) and new-item creation (`NewItemModal.tsx` → `handleCreateItem`
  only logs) are not wired to real logic.
- `StorePriceGrid` integration and parts of `ItemDeclaration` are partially wired.
