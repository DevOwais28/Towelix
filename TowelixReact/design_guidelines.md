# Towelix Design Guidelines

## Design Approach
**Reference-Based Approach** inspired by premium textile e-commerce (unitedtowel.com, Shopify stores, high-end manufacturer sites). The design emphasizes product quality, manufacturing excellence, and professional B2B aesthetics while maintaining consumer-friendly e-commerce patterns.

## Core Design Principles
1. **Premium Textile Focus**: Clean, spacious layouts that let product imagery breathe
2. **Trust & Quality**: Professional presentation emphasizing manufacturing expertise
3. **Dual Audience**: Seamlessly serve both B2B (owners) and B2C (customers)
4. **Product-Centric**: Large, high-quality imagery showcasing fabric texture and quality

## Typography
- **Primary Font**: Inter or Source Sans Pro (clean, professional)
- **Accent Font**: Playfair Display or Lora for headings (adds sophistication)
- **Hierarchy**:
  - H1: 4xl to 6xl, serif accent font for hero statements
  - H2: 3xl to 4xl for section headers
  - H3: xl to 2xl for product names, card titles
  - Body: base (16px) for readability
  - Small: sm for metadata, specs

## Layout System
**Spacing Units**: Consistent use of 4, 6, 8, 12, 16, 24 (Tailwind: p-4, p-6, gap-8, py-12, my-16, py-24)
- **Section Padding**: py-16 to py-24 for major sections
- **Card Spacing**: p-6 for product cards, p-8 for admin dashboard cards
- **Grid Gaps**: gap-6 for product grids, gap-8 for feature sections

## Color Palette (Textile-Inspired)
- **Navy Primary**: Deep navy (#1e3a5f) for headers, CTAs, trust elements
- **Warm Grey**: (#f5f5f0) for backgrounds, creating soft textile feel
- **White**: Clean backgrounds for product showcase
- **Accent Terracotta**: (#c97854) for highlights, sale badges, important CTAs
- **Dark Charcoal**: (#2d2d2d) for body text
- **Light Blue-Grey**: (#e8eef2) for table rows, subtle backgrounds

## Component Library

### Navigation
- **Desktop**: Full horizontal nav with role-based menu items, profile dropdown right-aligned
- **Sticky**: Fixed on scroll with subtle shadow (shadow-sm)
- **Mobile**: Hamburger menu with slide-in drawer
- **Height**: h-20 with logo max height of h-12

### Product Cards
- **Layout**: Vertical card with 4:5 aspect ratio image
- **Structure**: Image → Name (font-semibold, text-lg) → Material/Design (text-sm, text-gray-600) → Price if applicable
- **Hover**: Subtle scale (hover:scale-105) and shadow increase (hover:shadow-lg)
- **Grid**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4

### Admin Dashboard Cards
- **Metrics Cards**: White background, rounded-lg, p-6, shadow-md
- **Structure**: Icon (top-left, w-12 h-12 in accent color) → Label (text-sm, text-gray-600) → Value (text-3xl, font-bold) → Change indicator if applicable
- **Grid**: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6

### Tables (Admin)
- **Header**: bg-gray-100, font-semibold, text-left, px-6 py-4
- **Rows**: Alternating white/bg-gray-50, px-6 py-4, border-b
- **Actions**: Right-aligned with icon buttons (Edit/Delete)
- **Responsive**: Horizontal scroll on mobile

### Modals
- **Backdrop**: Fixed overlay with bg-black/50 backdrop-blur-sm
- **Container**: Centered, max-w-2xl, bg-white, rounded-xl, p-8, shadow-2xl
- **Header**: text-2xl font-bold mb-6
- **Actions**: Right-aligned button group with gap-3

### Buttons
- **Primary**: Navy background, white text, px-6 py-3, rounded-lg, font-semibold
- **Secondary**: Border with navy, transparent background, navy text
- **On Images**: bg-white/90 backdrop-blur-md with navy text (hero CTAs)
- **States**: Built-in hover and active states, no custom definitions needed

### Forms
- **Input Fields**: border-gray-300, rounded-lg, px-4 py-3, focus:ring-2 focus:ring-navy
- **Labels**: Block, font-medium, mb-2, text-gray-700
- **Spacing**: mb-6 between form groups

## Page-Specific Layouts

### Home Page
- **Hero**: Full viewport height (min-h-screen), large background image with overlay, centered content with large heading (text-5xl md:text-7xl) and dual CTAs
- **Categories**: 6-column grid (2 on mobile, 3 on tablet, 6 on desktop), card-based with category image and name
- **Featured Products**: 4-column grid showcasing best sellers
- **Quality Section**: 2-column split (image left, content right) with manufacturing details
- **Sections Count**: 5-7 comprehensive sections

### Products Page
- **Sidebar Filters**: Left sidebar (w-64) on desktop, drawer on mobile with filter groups
- **Main Grid**: Flex-1, 3-4 column product grid with pagination at bottom
- **Filter Pills**: Active filters shown as dismissible pills above grid

### Product Detail
- **Layout**: 2-column (image gallery left 50%, details right 50%) on desktop, stacked on mobile
- **Image Gallery**: Large main image with thumbnail strip below
- **Details Panel**: Sticky positioning, includes material specs, size selector, color swatches, add to cart
- **Tabs**: Material details, care instructions, shipping in tab interface below main section
- **Related Products**: 4-column grid at bottom

### Admin Dashboard
- **Sidebar**: Fixed left sidebar (w-64) with navigation, collapsible on mobile
- **Main Content**: Padding p-8, metrics cards at top, tables/charts below
- **Data Tables**: Full-width with search and filter controls above

## Images
Use high-quality textile/towel images throughout:

1. **Hero Image**: Large-scale image of premium towels with soft lighting, texture visible (min-h-screen background)
2. **Category Cards**: Clean product shots on white background for each category
3. **Product Cards**: High-res images showing fabric texture, consistent aspect ratio
4. **Product Detail Gallery**: 4-6 images per product showing different angles, textures, use cases
5. **About Us**: Manufacturing floor photos, quality control images, team photos
6. **Quality Section**: Close-up fabric weave shots, manufacturing process images

**Image Treatment**: Subtle rounded corners (rounded-lg), shadow on hover, consistent aspect ratios throughout

## Animations
Minimal, purposeful animations:
- **Transitions**: transition-all duration-300 for hover states
- **Page Transitions**: Subtle fade-in for route changes
- **Modal Entrance**: Fade + slight scale animation
- **Avoid**: Scroll-triggered animations, complex parallax effects

## Accessibility
- Minimum 16px body text
- Color contrast ratio 4.5:1 minimum
- Focus states: ring-2 ring-navy for all interactive elements
- Alt text for all product images
- ARIA labels for icon-only buttons