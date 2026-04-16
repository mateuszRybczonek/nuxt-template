# Nuxt Template

A production-ready Nuxt 3 template with PrimeVue, Tailwind CSS, and comprehensive linting configuration.

## Quick Start

Run the init script to set up a new project interactively:

```bash
./scripts/init-project.sh
```

This will prompt you for:

- **Project name** (kebab-case, e.g. `my-app`)
- **npm scope** (e.g. `@my-org`, optional)
- **App title** (shown in browser tab)
- **Dev/Prod API hosts**

It then automatically updates configs, resets git history, installs dependencies, and removes itself.

Once done, start developing:

```bash
pnpm dev
```

> For manual setup steps, see [GETTING_STARTED.md](./GETTING_STARTED.md).

## Features

- **Framework**: Nuxt 4 (SPA mode)
- **UI Library**: PrimeVue 4 with Aura theme
- **Styling**: Tailwind CSS 4 with PrimeUI integration
- **State Management**: Pinia with persistence support
- **Icons**: Nuxt Icon module
- **VueUse**: Collection of Vue Composition utilities
- **TypeScript**: Full TypeScript support with strict typing
- **Linting**: Comprehensive linting setup
  - oxlint for fast TypeScript/JavaScript linting
  - ESLint with Vue, TypeScript, and Unicorn plugins
  - Stylelint for CSS/Vue styles
  - Prettier for code formatting
  - Commitlint for conventional commits
- **Git Hooks**: Pre-commit hooks with simple-git-hooks
- **Auto-animate**: Smooth animations with FormKit Auto-animate

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- pnpm (recommended) or npm

### Installation

1. Clone or download this template
2. Install dependencies:

```bash
pnpm install
```

3. Copy `.env.example` to `.env` and configure your environment variables:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`

## Available Scripts

### Development

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm generate` - Generate static site
- `pnpm preview` - Preview production build

### Code Quality

- `pnpm lint` - Run all linters (oxlint, eslint, vue-tsc, stylelint, prettier)
- `pnpm lint.oxlint` - Run oxlint with auto-fix
- `pnpm lint.eslint` - Run ESLint with auto-fix
- `pnpm lint.tsc` - Run vue-tsc TypeScript checking
- `pnpm lint.stylelint` - Run Stylelint with auto-fix
- `pnpm lint.prettier` - Run Prettier formatting

## Project Structure

```
nuxt-template/
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── tailwind.css      # Tailwind and custom styles
│   ├── components/               # Vue components (auto-imported)
│   ├── composables/              # Composables (auto-imported)
│   ├── layouts/                  # Layout components
│   │   └── default.vue
│   ├── middleware/               # Route middleware
│   ├── pages/                    # Pages (auto-routing)
│   │   └── index.vue
│   ├── plugins/                  # Nuxt plugins
│   │   └── primevue.ts
│   ├── theme/                    # Theme configuration
│   │   └── aura.ts               # PrimeVue Aura theme
│   ├── types/                    # TypeScript type definitions
│   ├── utils/                    # Utility functions (auto-imported)
│   └── app.vue                   # Root component
├── public/                       # Static assets
├── server/                       # Server routes and middleware
│   ├── api/                      # API routes
│   ├── middleware/               # Server middleware
│   └── utils/                    # Server utilities
├── .gitignore
├── .prettierignore
├── commitlint.config.js          # Commitlint configuration
├── eslint.config.mjs             # ESLint configuration
├── nuxt.config.ts                # Nuxt configuration
├── oxlint.config.jsonc           # Oxlint configuration
├── package.json
├── prettier.config.mjs           # Prettier configuration
├── stylelint.config.mjs          # Stylelint configuration
├── tsconfig.json                 # TypeScript configuration
└── tsconfig.lint.json            # TypeScript lint configuration
```

## Configuration

### Nuxt Config

The main configuration is in `nuxt.config.ts`. Key settings:

- **App Directory**: `app/` (instead of default root)
- **SSR**: Disabled (SPA mode)
- **Components**: Auto-imported without path prefix
- **Dev Server**: Port 3000
- **Runtime Config**: Environment-specific API hosts

### Theme Customization

Edit `app/theme/aura.ts` to customize the PrimeVue theme:

```typescript
export const theme = {
  preset: definePreset(Aura, {
    semantic: {
      primary: {
        // Customize primary color palette
      },
    },
  }),
  options: {
    darkModeSelector: '.dark',
  },
}
```

### Tailwind CSS

Custom styles are in `app/assets/css/tailwind.css`. The template includes PrimeVue component customizations.

## Coding Standards

### Naming Conventions

- **Variables/Functions**: camelCase
- **Types/Classes/Interfaces**: PascalCase
- **Enums**: PascalCase with `E` prefix
- **Constants**: PascalCase with `k` prefix
- **Boolean variables**: Prefix with `is`, `has`, `can`, or `should`

### Code Style

- **Line length**: 130 characters max
- **Function length**: 60 lines max (excluding comments)
- **File length**: 270 lines max (excluding comments)
- **Max parameters**: 4 per function
- **Explicit return types**: Required for functions
- **Type imports**: Prefer separate type imports

### Linting

The template enforces strict linting rules:

- All files are automatically linted on commit via git hooks
- Oxlint runs first for fast checking, then ESLint for deeper analysis
- TypeScript strict mode is enabled
- Vue files are checked for style and TypeScript issues

## PrimeVue Components

PrimeVue components are auto-imported with the `Prime` prefix:

```vue
<template>
  <PrimeButton label="Click me" />
  <PrimeDialog v-model:visible="showDialog">
    <!-- Dialog content -->
  </PrimeDialog>
</template>
```

### Available Components

- Buttons, Inputs, Forms
- Data Tables, Trees
- Overlays (Dialog, Sidebar, Menu)
- Charts, Panels
- And many more...

See [PrimeVue documentation](https://primevue.org/) for full component list.

## State Management

Pinia is configured with persistence support:

```typescript
// composables/useExampleStore.ts
export const useExampleStore = defineStore('example', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
  },
  persist: true, // Enable persistence
})
```

## TypeScript

Full TypeScript support is configured:

- Strict mode enabled
- Auto-imports for components, composables, and utils
- Type definitions in `app/types/`

## Icons

Icons are available via Nuxt Icon:

```vue
<template>
  <Icon name="heroicons:home" />
  <Icon name="lucide:settings" />
</template>
```

Icon collections included:

- Heroicons
- Lucide
- Tabler
- SVG Spinners

## VueUse Integration

VueUse composables are auto-imported:

```vue
<script setup lang="ts">
const isDark = useDark()
const toggle = useToggle(isDark)
</script>
```

## Git Hooks

Pre-commit hooks automatically run linting on staged files. To bypass (not recommended):

```bash
git commit --no-verify
```

## Customization Tips

1. **Update app name**: Search and replace "Nuxt Template" and "@your-org/nuxt-template"
2. **Configure API host**: Update `kDevApiHost` and `kProdApiHost` in `nuxt.config.ts`
3. **Add favicon**: Replace files in `public/` directory
4. **Customize theme**: Edit `app/theme/aura.ts`
5. **Add environment variables**: Update `.env.example` and `nuxt.config.ts` runtimeConfig

## Deployment

### Static Generation

For static hosting (Netlify, Vercel, etc.):

```bash
pnpm generate
```

Output will be in `.output/public/`

### Node Server

For Node.js hosting:

```bash
pnpm build
```

Then deploy the `.output/` directory.

## Resources

- [Nuxt Documentation](https://nuxt.com)
- [PrimeVue Documentation](https://primevue.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [VueUse Documentation](https://vueuse.org)
- [Pinia Documentation](https://pinia.vuejs.org)

## License

MIT

---

**Happy coding!** 🚀
