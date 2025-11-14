# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a landing page project exported from Figma (original design: https://www.figma.com/design/FqLVrxKjUhJiaGl2qrs9kt/Landing---Edits). It's built as a React + Vite application with TypeScript, featuring a dark-themed marketing page for "Pixel", a content monitoring and creation service.

## Commands

### Development
- **Start dev server**: `pnpm dev` or `npm run dev`
  - Runs on port 3000 by default
  - Opens browser automatically

- **Install dependencies**: `pnpm i` or `npm i`

- **Build for production**: `pnpm build` or `npm run build`
  - Output directory: `build/`
  - Target: ESNext

### Package Manager
- Project uses **pnpm** as the package manager (specified in package.json)
- pnpm version: 10.15.0

## Architecture

### Tech Stack
- **Build Tool**: Vite 6.3.5 with SWC React plugin for fast compilation
- **Framework**: React 18.3.1
- **UI Library**: Radix UI primitives (extensive collection for accessible components)
- **Styling**: Tailwind CSS with custom configuration
- **Additional Libraries**:
  - lucide-react for icons
  - next-themes for theme management
  - recharts for charts/data visualization
  - sonner for toast notifications
  - class-variance-authority for component variants

### Project Structure

#### Main Entry Point
- `index.html` → `src/main.tsx` → `src/App.tsx`
- Single-page application with all sections rendered in `App.tsx`

#### Component Organization
1. **Section Components** (`src/components/`): Main landing page sections
   - `Header.tsx` - Top navigation
   - `Hero.tsx` - Hero section with CTAs
   - `ProblemSection.tsx`
   - `SolutionSection.tsx`
   - `PerformanceSection.tsx`
   - `CustomersSection.tsx`
   - `TechnologySection.tsx`
   - `AITeamSection.tsx`
   - `PricingSection.tsx`
   - `FAQSection.tsx`
   - `FinalCTASection.tsx`
   - `StickyNav.tsx` - Sticky navigation wrapper

2. **UI Components** (`src/components/ui/`): Reusable Radix-based components
   - Comprehensive shadcn/ui-style component library
   - Includes: buttons, dialogs, dropdowns, forms, tooltips, etc.
   - `utils.ts` contains utility functions (likely cn() for class merging)

3. **Figma Imports** (`src/imports/`): Exported components from Figma
   - Button components: `TryDemo.tsx`, `GetStarted.tsx`, `CtaButtons.tsx`
   - SVG components and graphics
   - These may need refactoring when making significant changes

4. **Figma Components** (`src/components/figma/`):
   - `ImageWithFallback.tsx` - Handles Figma asset loading

5. **Assets** (`src/assets/`): Images exported from Figma with hash-based filenames

### Vite Configuration Details
- **Alias Resolution**: Extensive package versioning aliases (e.g., `vaul@1.1.2` → `vaul`)
- **Figma Assets**: Special alias pattern `figma:asset/[hash].png` maps to `src/assets/`
- **Path Alias**: `@` resolves to `./src`
- **Dev Server**: Port 3000, auto-open browser
- **Build Target**: ESNext (modern browsers)

### Layout Pattern
The app uses a two-column layout with:
- Sticky navigation on desktop (`StickyNav.tsx`)
- Main content sections flow vertically with responsive padding
- Dark theme (`bg-[#101118]`) throughout
- Custom fonts: 'HvDTrial Livory' (serif) and 'Open Sans' (sans-serif)

## Design Guidelines

Refer to `src/guidelines/Guidelines.md` for design system rules (currently template only).

## Key Patterns

1. **Figma-to-Code Workflow**: Many components are imported from `src/imports/` directory, suggesting Figma code generation
2. **Component Composition**: Sections import smaller UI components and Figma exports
3. **Styling Approach**: Tailwind utility classes with custom dark theme colors
4. **Responsive Design**: Mobile-first with breakpoints (md, lg) for larger screens
