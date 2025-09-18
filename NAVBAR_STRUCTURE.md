# Navbar Structure Documentation

## Overview
This navbar implementation features hover dropdowns with mega cards for Product and Toolbox, and a mini card for Roles. All data is managed through a centralized `navData.ts` file.

## File Structure
```
src/
├── components/
│   └── Navbar/
│       ├── Navbar.tsx              # Main navbar component
│       ├── ProductMegaCard.tsx     # Wide mega card for Product dropdown
│       ├── RolesMiniCard.tsx       # Small card for Roles dropdown
│       └── ToolboxMegaCard.tsx     # Wide mega card for Toolbox dropdown
├── data/
│   └── navData.ts                  # Centralized navigation data
└── app/
    ├── product/
    │   └── [feature]/
    │       └── page.tsx            # Dynamic product feature pages
    ├── roles/
    │   └── [role]/
    │       └── page.tsx            # Dynamic role pages
    └── toolbox/
        └── [tool]/
            └── page.tsx            # Dynamic toolbox tool pages
```

## Features

### Product Dropdown
- **Type**: Mega Card (800px wide, centered)
- **Categories**: 3 categories with 5 features each (15 total)
  - Lead Generation
  - Email Outreach  
  - Analytics & Tracking
- **Routing**: `/product/[feature]` for each feature

### Roles Dropdown
- **Type**: Mini Card (256px wide, left-aligned)
- **Items**: 5 roles (Sales Teams, Marketing Teams, Recruiters, Agencies, Founders)
- **Routing**: `/roles/[role]` for each role

### Toolbox Dropdown
- **Type**: Mega Card (800px wide, centered)
- **Categories**: 3 categories with 5 tools each (15 total)
  - Email Tools
  - Data Tools
  - Automation Tools
- **Routing**: `/toolbox/[tool]` for each tool

## Data Management
All navigation data is centralized in `src/data/navData.ts`:
- `productCategories`: Array of categories with features
- `roles`: Array of role objects
- `toolboxCategories`: Array of categories with tools

## Dynamic Routing
- All feature/tool/role pages are dynamically generated
- Uses Next.js 15 dynamic routes with `[param]` syntax
- Includes `generateStaticParams()` for static generation
- 404 handling with `notFound()` for invalid routes

## Hover Behavior
- Dropdowns appear on hover with smooth animations
- Framer Motion used for animations
- Dropdowns disappear when mouse leaves
- Mobile menu includes simplified dropdown content

## Styling
- Tailwind CSS for styling
- Responsive design with mobile menu
- Smooth transitions and hover effects
- Consistent color scheme (blue primary, green for roles, purple for toolbox)
