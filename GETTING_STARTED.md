# Getting Started with Your New Project

## Quick Start (Recommended)

Run the init script to set up everything interactively:

```bash
./scripts/init-project.sh
```

This will prompt you for project name, npm scope, app title, and API hosts, then automatically update configs, reset git history, and install dependencies.

Once done, start developing:

```bash
pnpm dev
```

Visit `http://localhost:3000` to see your app.

## Manual Setup

If you prefer to set things up manually:

### 1. Update package.json

- Change `"name"` from `"@your-org/nuxt-template"` to your project name
- Update `"version"` if needed

### 2. Update nuxt.config.ts

- Change `title: 'Your App Name'` to your app name
- Update `kDevApiHost` and `kProdApiHost` with your API endpoints

### 3. Configure Environment

```bash
cp .env.example .env
```

### 4. Install Dependencies

```bash
pnpm install
```

### 5. Reset Git History

```bash
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```

## 7. Customize Theme (Optional)

Edit `app/theme/aura.ts` to customize colors:

```typescript
export const theme = {
  preset: definePreset(Aura, {
    semantic: {
      primary: {
        50: '{yourcolor.50}',
        // ... customize all shades
      },
    },
  }),
}
```

Available color options: slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

## 8. Add Your Code

Start building your application:

### Components

Add reusable components in `app/components/`

### Pages

Add new pages in `app/pages/` (auto-routing)

### Composables

Add shared logic in `app/composables/`

### Utils

Add utility functions in `app/utils/`

### API Routes

Add server routes in `server/api/`

### Types

Add TypeScript types in `app/types/`

## 9. Configure State Management

Create stores in `app/composables/`:

```typescript
// app/composables/useMyStore.ts
export const useMyStore = defineStore('my-store', {
  state: () => ({
    // your state
  }),
  actions: {
    // your actions
  },
  persist: true, // Enable localStorage persistence
})
```

## 10. Build for Production

```bash
# Build for Node.js hosting
pnpm build

# Or generate static site
pnpm generate
```

## What's Included

✅ **Framework & UI**

- Nuxt 4 (SPA mode)
- PrimeVue 4 with Aura theme
- Tailwind CSS 4
- PrimeIcons

✅ **State & Data**

- Pinia with persistence
- VueUse composables

✅ **Developer Experience**

- TypeScript with strict mode
- Comprehensive linting (oxlint, eslint, stylelint, prettier)
- Git hooks (pre-commit linting)
- Commitlint for conventional commits
- Auto-imports for components, composables, utils

✅ **Animations & Images**

- FormKit Auto-animate
- Nuxt Image module
- Nuxt Icon module

## Next Steps

1. Read through the [README.md](./README.md) for detailed documentation
2. Review [CLAUDE.md](./CLAUDE.md) for coding standards
3. Start building your features!

## Need Help?

- [Nuxt Documentation](https://nuxt.com)
- [PrimeVue Documentation](https://primevue.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

Happy coding! 🚀
