# Getting Started with Your New Project

Follow these steps to start a new project using this template:

## 1. Copy the Template

## 2. Customize Project Identity

### Update package.json

- Change `"name"` from `"@your-org/nuxt-template"` to your project name
- Update `"version"` if needed
- Add your project description

### Update nuxt.config.ts

- Change `title: 'Your App Name'` to your app name
- Update `kDevApiHost` and `kProdApiHost` with your API endpoints
- Configure runtime config as needed

### Update README.md

- Replace "Nuxt Template" with your project name
- Update the description and features
- Add project-specific documentation

### Update Landing Page

- Edit `app/pages/index.vue` to customize the welcome page

## 3. Configure Environment

```bash
# Copy environment template
cp .env.example .env

# Add your environment variables to .env
```

## 4. Install Dependencies

```bash
pnpm install
```

This will also set up git hooks automatically via the `prepare` script.

## 5. Start Development

```bash
pnpm dev
```

Visit `http://localhost:3000` to see your app.

## 6. Initialize Git Repository (if not already done)

If you want a fresh git history:

```bash
# Remove existing git history
rm -rf .git

# Initialize new repository
git init
git add .
git commit -m "Initial commit"

# Add your remote
git remote add origin <your-git-url>
git push -u origin master
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
