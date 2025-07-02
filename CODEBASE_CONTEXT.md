# UX Portfolio - Codebase Context & Architecture Guide

> **"Code that's not just written, but carved"** - A sophisticated Next.js portfolio showcasing UX design excellence through interactive experiences.

*Last Updated: June 29, 2025*

## Project Overview

This is **Vedant Darak's premium UX portfolio** built with Next.js 15 that demonstrates mastery of both design and technical implementation. The portfolio serves multiple purposes:

- **Professional Showcase**: UX case ### Key Dependencies & Tools

#### Animation & Interaction
- **`framer-motion`**: Advanced animation library (latest)
- **`@radix-ui/*`**: Headless UI primitives (v1.x series)
- **`lucide-react`**: Consistent icon system (v0.454.0)

#### Utilities & Styling
- **`tailwindcss`**: Utility-first CSS framework (v3.4.17)
- **`tailwind-merge`**: Conditional class handling (v2.5.5)
- **`class-variance-authority`**: Type-safe component variants (v0.7.1)
- **`clsx`**: Conditional class composition (v2.1.1)
- **`tailwindcss-animate`**: Animation utilities (v1.0.7)

#### Form & Validation
- **`react-hook-form`**: Performant form library (v7.54.1)
- **`@hookform/resolvers`**: Validation schema integration (v3.9.1)
- **`zod`**: Type-safe schema validation (v3.24.1)

#### Creative & Interactive
- **`p5`**: Creative coding library (v2.0.3)
- **`@types/p5`**: TypeScript definitions for P5.js (v1.7.6)

#### UI Enhancement Libraries
- **`react-day-picker`**: Date picker component (v8.10.1)
- **`recharts`**: Chart and data visualization (v2.15.0)
- **`sonner`**: Toast notification system (v1.7.1)
- **`vaul`**: Drawer component for mobile (v0.9.6)
- **`embla-carousel-react`**: Carousel implementation (v8.5.1)
- **`cmdk`**: Command menu component (v1.0.4)
- **`input-otp`**: OTP input component (v1.4.1)
- **`react-resizable-panels`**: Resizable panel layouts (v2.1.7)
- **`date-fns`**: Date utility library (v4.1.0)

#### Development & Build Tools
- **`typescript`**: Type safety and enhanced developer experience (v5)
- **`next`**: React framework with App Router and built-in optimizations (v15.2.4)
- **`postcss`**: CSS processing with autoprefixer (v8.5)
- **`@emotion/is-prop-valid`**: Prop validation for styled components (latest)
- **`autoprefixer`**: CSS vendor prefixing (v10.4.20)ng research-driven design process
- **Interactive Experiences**: Custom-built games showcasing technical and creative skills  
- **Personal Expression**: Creative writing and poetry sections
- **Technical Demonstration**: Advanced React patterns, animations, and modern web development

### Portfolio Owner: Vedant Darak
- **Role**: UX Practitioner & Designer
- **Focus**: Research-driven design, user-centered thinking, accessible digital experiences
- **Background**: 5 years experience, cognitive psychology & HCI background
- **Specialties**: Health tech, fintech, travel apps, information architecture

## Tech Stack & Architecture

### Core Technologies
- **Framework**: Next.js 15.2.4 with App Router (TypeScript 5, strict mode)
- **React**: React 19 with React DOM 19 (latest stable)
- **Styling**: Tailwind CSS 3.4.17 with custom design system & 8px baseline grid
- **Animations**: Framer Motion (latest) for sophisticated micro-interactions
- **UI Components**: Radix UI primitives (v1.x) + shadcn/ui component library
- **Theme System**: next-themes (latest) with seamless light/dark mode transitions
- **Type Safety**: Strict TypeScript 5 configuration (`strict: true`)
- **Package Manager**: pnpm for efficient dependency management

### Design Philosophy Implementation
- **8px Baseline Grid**: Mathematical spacing system throughout the entire portfolio
- **Micro-Interactions**: Precisely timed hover effects (1.02× scale), card flips (300ms Y-axis rotation)
- **Performance First**: Lazy loading, React.memo memoization, efficient re-renders
- **Accessibility**: Full ARIA implementation, focus management, keyboard navigation
- **Responsive**: Fluid layouts tested down to 320px mobile breakpoint
- **Visual Hierarchy**: Musical type scales, semantic color tokens, consistent spacing

### Animation Philosophy
- **Spring Physics**: Natural-feeling interactions using Framer Motion's spring animations
- **Intersection Observer**: Efficient scroll-triggered animations with proper margins
- **GPU Acceleration**: Transform-based animations for 60fps performance
- **Contextual Timing**: Staggered reveals (0.1-0.2s delays) for narrative flow

## Project Structure & Key Components

### `/app` - Next.js App Router Structure
```
app/
├── layout.tsx                 # Root layout with ThemeProvider + SiteHeader + CustomCursor
├── page.tsx                   # Main portfolio homepage with hero, projects, about, contact
├── globals.css                # Global styles and CSS custom properties
├── projects/                  # UX case studies & professional work
│   ├── health-track/          # Mobile health monitoring app case study
│   │   └── page.tsx           # Comprehensive case study with process documentation
│   ├── understanding-creative-block/ # Team project on fostering creativity
│   │   └── page.tsx           # Collaborative research project documentation
│   ├── backmarket-ia-redesign/ # Information architecture redesign project
│   │   └── page.tsx           # Case study with IA focus and user testing results
│   └── finance-dashboard/     # Financial data visualization project
│       └── page.tsx           # Dashboard design and implementation documentation
├── games/                     # Interactive experiences & technical demonstrations
│   ├── page.tsx               # Games landing page with filtering and categories
│   └── [slug]/                # Dynamic game routing system
│       ├── page.tsx           # Individual game pages with shared game components
│       └── not-found.tsx      # 404 handling for games with suggestions
├── knowledge-graph/           # Interactive knowledge visualization
│   └── page.tsx               # Knowledge graph visualization and exploration
└── poetry/                    # Creative writing & personal expression
    ├── page.tsx               # Poetry collection landing page
    └── [slug]/                # Individual poem pages
        ├── page.tsx           # Single poem display with typography focus
        └── not-found.tsx      # Custom 404 handling for poetry section
```

### Portfolio Content Architecture

#### **UX Case Studies** (`/projects/`)
- **HealthTrack Mobile App**: Health monitoring with medication tracking
  - User research process, wireframing, prototyping, usability testing
  - Challenge: Simplify complex health data while maintaining accuracy
  - Approach: Research-driven design with iterative testing
- **Understanding Creative Block**: Team project on fostering creativity
  - Collaborative research on creative barriers and solutions
  - Design thinking methodology applied to creative processes
  - User research and ideation frameworks

#### **Interactive Games** (`/games/`)
- **Blackjack 21**: Complete card game with advanced features
  - Multi-deck shoe management (2, 4, 6, 8 deck options)
  - Hi-Lo card counting system with running/true count display
  - Basic strategy recommendations integrated into gameplay
  - User authentication and progress tracking
  - Statistical analysis and detailed game summaries
- **Memory Match**: Brain-training with difficulty levels
- **Snake Game**: Classic arcade game with modern design
- **Extensible System**: Ready for additional games via `[slug]` routing

#### **Creative Content** (`/poetry/`)
- Personal creative writing showcasing artistic side
- Individual poem pages with typography focus
- Demonstrates range beyond UX design

### `/components` - Refined Component Library

```
components/
├── animated-text.tsx        # Character-by-character text reveal animations
├── construction-dashboard.tsx  # Interactive construction project visualization
├── count-up.tsx             # Animated numerical counter for statistics
├── custom-cursor.tsx        # Context-aware cursor system with magnetic effects
├── debug-cursor-info.tsx    # Development utility for cursor interaction debugging
├── finance-dashboard.tsx    # Financial data visualization dashboard
├── floating-section-nav.tsx # Page section navigation with scroll indicators
├── flowing-text.tsx         # Inline text effects for highlighted phrases
├── footer.tsx               # Site-wide footer with contact information
├── gradient-text.tsx        # Text with dynamic gradient color effects
├── insight-card.tsx         # Interactive cards for UX insights presentation
├── loading-screen.tsx       # Initial loading screen with branded animations
├── pixel-grid.tsx           # Creative pixel-based background patterns
├── project-page-wrapper.tsx # Standardized layout for project case studies
├── refined-button.tsx       # Enhanced button with spring physics animations
├── refined-magnetic-effect.tsx # Magnetic attraction effect for interactive elements
├── refined-project-card.tsx # Portfolio showcase cards with hover animations
├── scroll-animations.tsx    # Scroll-triggered animation system components
├── site-header.tsx          # Intelligent navigation with section awareness
├── story-components.tsx     # Rich narrative components for case studies
├── theme-provider.tsx       # Dark/light mode context provider
├── theme-toggle.tsx         # User-friendly theme switching control
├── top-down-tree.tsx        # Hierarchical visualization component
└── ui/                     # Shadcn UI components library (details omitted)
```

**Core Custom Components (The Heart of the Portfolio):**

- **`RefinedMagneticEffect`**: Sophisticated cursor interactions
  - Subtle magnetic attraction to interactive elements (intensity: 0.15, range: 100px)
  - Context-aware cursor states for different content types
  - Touch device detection for optimal mobile experience

- **`RefinedButton`**: Enhanced button component with physics
  - Spring-based hover animations with magnetic effects
  - Variant system (default, outline, ghost) with consistent behavior
  - Accessible focus states and keyboard navigation

- **`RefinedProjectCard`**: Portfolio project showcase cards
  - Hover animations with staggered tag reveals
  - Image optimization with Next.js Image component
  - Magnetic effects combined with scaling transformations

- **`CustomCursor`**: Context-aware cursor system
  - Project image detection (`data-project-image="true"`)
  - Performance optimized with passive listeners

- **`SiteHeader`**: Intelligent navigation component
  - Scroll-based section detection for homepage
  - Header visibility control based on scroll direction

- **`ProjectPageWrapper`**: Consistent layout for project pages
  - Standardized hero sections and navigation
  - Responsive content layout with proper spacing

- **`P5ParticleExhibit`**: Creative P5.js integration
  - Interactive particle systems for visual interest
  - Performance optimized canvas animations

- **`FloatingSectionNav`**: Page section navigation
  - Smooth scroll to section functionality
  - Visual progress indicators

- **`DebugCursorInfo`**: Development utility component
  - Real-time cursor position and interaction state debugging
  - Helpful for fine-tuning magnetic effects

- **`StoryComponents`**: Narrative content components
  - Rich content blocks for case study storytelling
  - Consistent typography and spacing
  - Smooth position tracking with optimized event listeners
  - Eye icon overlay for "view project" affordance
  - Performance optimized with passive listeners

- **`SiteHeader`**: Intelligent navigation component
  - Scroll-based section detection for homepage
  - Active state management across different routes
  - Mobile menu with smooth animations
  - Header visibility control based on scroll direction

**Animation System Components:**
- **`ScrollAnimations`**: Complete scroll-triggered animation library
  - `FadeIn`: Direction-based reveals (up/down/left/right) with configurable delays
  - `StaggerContainer`: Choreographed sequence animations for lists/grids
  - `StaggerItem`: Individual items in staggered sequences
  - `Parallax`: Depth-creating offset animations for visual interest
  - `ScaleOnScroll`: Progressive scaling effects tied to scroll position
  - Intersection Observer optimization with proper margins (-100px)

- **`AnimatedText`**: Text reveal animations with character-by-character timing
- **`FlowingText`**: Inline text effects for highlighted words/phrases

**Theme & Navigation Components:**
- **`ThemeProvider`**: Dark/light mode context and switching logic
- **`ThemeToggle`**: User-friendly theme switching interface

**UI Foundation (shadcn/ui Integration):**
- Complete component library: Button, Card, Badge, Dialog, etc.
- Custom theme integration with CSS custom properties
- Accessible by default with ARIA implementations
- Consistent with 8px baseline grid design system

### Current Development Status (June 2025)

### Recent Updates & Enhancements
- **Next.js 15.2.4**: Latest stable version with App Router optimizations
- **React 19**: Upgraded to latest React with improved performance and features
- **Component Library Expansion**: Added P5ParticleExhibit, ProjectPageWrapper, and enhanced navigation
- **TypeScript 5**: Latest TypeScript with improved type inference and performance
- **Dependency Updates**: All packages updated to latest stable versions for security and performance

### Active Features
- **Responsive Design**: Fully tested across all device sizes (320px - 2xl+)
- **Dark/Light Mode**: Complete theme system with smooth transitions
- **Accessibility**: WCAG AA compliant with full keyboard navigation
- **Performance**: Optimized for Core Web Vitals and mobile experience
- **Interactive Elements**: Advanced cursor effects and scroll animations

### Content Status
- **Project Showcases**: HealthTrack and Understanding Creative Block case studies
- **Interactive Games**: Blackjack system with advanced features
- **Creative Writing**: Poetry section with individual page routing
- **Technical Demonstrations**: P5.js integrations and animation libraries

## Key Features & Interactions

#### 1. **Advanced Cursor System**
- **Magnetic Effects**: Gentle attraction to interactive elements using mouse position calculations
- **Context Awareness**: Dynamic cursor states that change based on content type
  - Project images trigger special "view" cursor with eye icon
  - Interactive elements get subtle magnetic pull effect
  - Links and buttons have enhanced hover affordances
- **Performance Optimized**: 
  - Touch device detection to disable on mobile
  - Passive event listeners for smooth 60fps tracking
  - Efficient DOM queries with proper cleanup

#### 2. **Sophisticated Scroll Animation System**
- **FadeIn Components**: Multi-directional reveals with physics-based easing
  - Direction options: up, down, left, right with configurable offsets
  - Delay system for narrative sequencing (0.2s, 0.4s, 0.6s, 0.8s)
  - Custom easing curve: `[0.21, 0.47, 0.32, 0.98]` for natural feel

- **StaggerContainer & StaggerItem**: Choreographed animations
  - Parent container controls overall timing and sequence
  - Child items animate in sequence with configurable delays (0.1-0.2s)
  - Perfect for project grids, feature lists, and content sections

- **Parallax Effects**: Depth and movement for visual interest
  - Offset-based animations tied to scroll position
  - Used strategically for hero images and section backgrounds
  - Subtle movement (30px offsets) to avoid motion sickness

- **ScaleOnScroll**: Progressive scaling based on viewport position
  - Smooth scale transitions for emphasis
  - Combined with other effects for compound animations
  - Performance optimized with transform-based scaling

- **Intersection Observer**: Efficient trigger detection
  - Proper margins (-100px) for early animation triggers
  - Once-only animations to prevent re-triggering
  - Optimized for battery life and performance

#### 3. **Theme & Visual System Excellence**
- **CSS Custom Properties**: Comprehensive design token architecture
  - Semantic color system: primary, secondary, muted, accent, destructive
  - Typography scale with mathematical ratios
  - Spacing system based on 8px baseline grid
  - Consistent border radius and shadow systems

- **Dark/Light Mode Implementation**:
  - Seamless switching with next-themes integration
  - Proper contrast ratios maintained across all components
  - Custom property cascade ensures consistent theming
  - No flash of unstyled content (FOUC) prevention

- **Typography & Spacing**:
  - Musical type scale for harmonious hierarchy
  - Consistent line heights and letter spacing
  - 8px baseline grid religiously followed
  - Fluid responsive scaling for mobile optimization

#### 4. **Interactive Project Showcase**
- **Project Cards**: Multi-layered hover interactions
  - Image scaling with overflow masking
  - Tag staggered reveals on hover
  - Magnetic cursor effects combined with card transforms
  - Smooth transitions with spring physics

- **Case Study Navigation**: 
  - Breadcrumb systems with back navigation
  - Progress indicators for long-form content
  - Related project suggestions
  - Download links for detailed case studies

#### 5. **Responsive Design Excellence**
- **Mobile-First Approach**: Designed from 320px up to 2xl breakpoints
- **Touch Interactions**: Optimized for touch devices with proper hit targets
- **Performance**: Image optimization, lazy loading, efficient re-renders
- **Accessibility**: Full keyboard navigation, screen reader optimization

## Special Projects

### Blackjack Game (`/app/games/blackjack-game/`)
A **complete standalone application** showcasing advanced React patterns and game development skills:

**Advanced Game Features:**
- **Multi-Deck Shoe Management**: Support for 2, 4, 6, 8 deck configurations
  - Fisher-Yates shuffling algorithm for true randomization
  - Shoe integrity validation using Hi-Lo count sum verification
  - Penetration settings for realistic casino simulation

- **Hi-Lo Card Counting System**: Full implementation of professional counting
  - Running count display with real-time updates
  - True count calculation based on remaining decks
  - Visual indicators for favorable/unfavorable counts
  - Educational overlay explaining counting methodology

- **Basic Strategy Integration**: 
  - Real-time strategy recommendations based on dealer up-card
  - Color-coded suggestions (Hit, Stand, Double, Split)
  - Strategy chart overlay for learning
  - Deviation tracking for advanced play

- **User System & Analytics**:
  - Local storage-based user authentication
  - Session tracking and game history
  - Statistical analysis (win rate, average bet, profit/loss)
  - Progress tracking for skill development
  - Detailed game summaries with key decisions

**Technical Implementation Excellence:**

- **Complex State Management**: 
  - Multi-hand gameplay support
  - Dealer AI with proper blackjack rules
  - Betting system with configurable limits
  - Game flow state machine (betting → dealing → playing → resolution)

- **Performance Optimizations**:
  - Card animation queuing for smooth dealing sequences
  - Efficient re-renders using React.memo and useMemo
  - Optimized card image loading and caching
  - Smooth 60fps animations using Framer Motion

- **Audio & Visual Polish**:
  - Card dealing sound effects
  - Win/loss audio feedback
  - Canvas-based confetti effects for big wins
  - Smooth card flip animations with realistic physics

**Game Architecture Components:**
```typescript
// Core game components demonstrating advanced React patterns
- PlayingCard: Animated card with flip states and loading
- CardDeck: Visual deck representation with count display  
- CardCountDisplay: Real-time counting interface with strategy
- StrategyPanel: Basic strategy recommendations engine
- GameOutcome: Modal/pill outcome displays with animations
- LoginScreen: User authentication and profile management
- GameHistory: Statistical tracking and analysis
```

**Business Logic Excellence:**
- **Deck Management**: Proper shoe creation, shuffling, and card dealing
- **Game Rules Engine**: Complete blackjack rules implementation
- **Betting System**: Configurable limits with validation
- **Count Accuracy**: Mathematically verified counting system
- **Strategy Engine**: Complete basic strategy decision matrix

### UX Case Studies Portfolio

**HealthTrack Mobile App** - Flagship case study demonstrating complete UX process:
- **Research Phase**: User interviews, persona development, journey mapping
- **Design Phase**: Information architecture, wireframing, prototyping
- **Testing Phase**: Usability testing, iteration, accessibility validation
- **Impact**: Quantified improvements in user engagement and task completion

**Process Documentation Excellence**:
- Before/after comparisons with metrics
- Design decision rationale with user research backing
- Accessibility considerations and implementations
- Technical constraints and solutions
- Stakeholder management and design system development

## Development Standards & Patterns

### TypeScript Excellence & Code Quality
- **Strict Configuration**: `strict: true` with no implicit any, strict null checks enabled
- **Interface First**: Public contracts use interface over type for extensibility
- **Proper Generics**: Reusable component patterns with type safety
- **Type Safety**: Event handlers, refs, state properly typed throughout
- **Documentation**: JSDoc comments for complex interfaces and business logic

### Component Architecture Philosophy
- **Composition Over Inheritance**: Flexible, reusable patterns following React best practices
- **Props Interface Design**: Clear, documented component APIs with default values
- **Ref Forwarding**: Proper React patterns for DOM access and imperative APIs
- **Motion Integration**: Framer Motion patterns for consistent animation implementation
- **Error Boundaries**: Graceful error handling with user-friendly fallbacks

### Performance Optimization Patterns
- **Memoization Strategy**: React.memo for expensive renders, useMemo for calculations
- **Lazy Loading**: Dynamic imports for heavy components and game modules
- **Efficient Updates**: Minimal re-render strategies using dependency arrays
- **Animation Optimization**: Transform-based animations, GPU acceleration
- **Image Optimization**: Next.js Image component with proper sizing and formats
- **Bundle Optimization**: Code splitting for games and large features

### Accessibility Standards Implementation
- **ARIA Excellence**: Proper roles, labels, descriptions for complex interactions
- **Focus Management**: Logical tab order, focus trapping in modals/games
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements
- **Screen Reader Support**: Semantic HTML, proper heading hierarchy
- **Color Contrast**: WCAG AA compliance in both light and dark themes
- **Motion Sensitivity**: Respects prefers-reduced-motion for accessibility

### State Management Philosophy
- **Local State First**: Component-level state for isolated functionality
- **Lifting Strategy**: Careful consideration before globalizing state
- **Context Usage**: Strategic use of React Context for theme and user preferences
- **Game State**: Complex state machines for game logic and flow control
- **Persistence**: Local storage for user preferences and game progress

### Code Organization & Architecture

#### Clean Architecture Implementation
```
/components/           # Reusable UI components with clear separation
  /*.tsx              # Individual feature components (refined-button.tsx, etc.)
  /ui/               # Base component library (shadcn/ui)
/hooks/               # Custom React hooks for reusable logic
  /use-mobile.tsx    # Mobile device detection hook
  /use-mouse-position.tsx # Mouse position tracking for animations
  /use-toast.ts      # Toast notification system hook
/lib/                 # Utility functions, business logic, type definitions
  /utils.ts          # General utility functions
/config/              # Configuration files
  /site.ts           # Site-wide configuration constants
/app/                 # Next.js routing and page components
  /projects/         # UX case studies organized by project
  /games/            # Interactive experiences and games
  /poetry/           # Creative writing section
  /knowledge-graph/  # Interactive knowledge visualization
```

#### Naming Conventions & Standards
- **Components**: PascalCase with descriptive names (`RefinedProjectCard.tsx`)
- **Files**: kebab-case for consistency (`refined-project-card.tsx`)
- **Props**: Descriptive interfaces with proper TypeScript (`RefinedProjectCardProps`)
- **Utilities**: camelCase functions with clear purpose (`calculateHandValue`)
- **Constants**: UPPER_SNAKE_CASE for application-wide constants
- **CSS Classes**: Tailwind utility classes with semantic custom classes

#### Git & Development Workflow
- **Feature Branches**: Clear branch naming with feature/ prefix
- **Commit Messages**: Conventional commits for clear history
- **Code Reviews**: Focus on accessibility, performance, and maintainability
- **Testing Strategy**: Component testing for critical user flows
- **Documentation**: README updates with feature additions

### Design System Implementation

#### CSS Custom Properties Architecture
```css
/* Semantic color system */
--primary: hsl(var(--primary-hue) var(--primary-saturation) var(--primary-lightness))
--secondary: hsl(var(--secondary-hue) var(--secondary-saturation) var(--secondary-lightness))

/* Typography scale with mathematical ratios */
--text-xs: 0.75rem      /* 12px */
--text-sm: 0.875rem     /* 14px */
--text-base: 1rem       /* 16px */
--text-lg: 1.125rem     /* 18px */
--text-xl: 1.25rem      /* 20px */

/* 8px baseline spacing system */
--space-1: 0.5rem       /* 8px */
--space-2: 1rem         /* 16px */
--space-3: 1.5rem       /* 24px */
--space-4: 2rem         /* 32px */
```

#### Animation Timing System
```javascript
// Consistent animation timing across components
const ANIMATION_TIMINGS = {
  fast: 150,      // Quick feedback (button hovers)
  medium: 300,    // Card flips, modal transitions
  slow: 500,      // Page transitions, complex animations
  stagger: 100,   // Stagger delay between items
}

// Easing curves for natural movement
const EASING = {
  spring: [0.21, 0.47, 0.32, 0.98],
  smooth: [0.4, 0.0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55]
}
```

## Portfolio Content Strategy & Information Architecture

### Content Organization Philosophy
The portfolio follows a **narrative-driven architecture** that tells Vedant's professional story through three main pillars:

#### 1. **Professional Work** (`/projects/`)
- **Case Studies**: Complete UX process documentation
- **Process Focus**: Research → Design → Test → Iterate → Impact
- **Storytelling**: Each project tells a complete story with challenges, solutions, and outcomes
- **Metrics**: Quantified improvements and business impact where possible

#### 2. **Technical Demonstrations** (`/games/`)
- **Interactive Experiences**: Functional applications showcasing technical skills
- **Creative Problem Solving**: Games demonstrate both UX and development capabilities
- **User Engagement**: Playful interactions that encourage exploration
- **Skill Showcase**: Complex state management, animations, and user flows

#### 3. **Personal Expression** (`/poetry/`)
- **Creative Side**: Demonstrates range beyond professional work
- **Typography Focus**: Beautiful presentation of written content
- **Emotional Intelligence**: Shows empathy and communication skills
- **Holistic Perspective**: Rounds out the professional narrative

### SEO & Discoverability Strategy
- **Meta Tags**: Comprehensive meta descriptions for each page
- **Semantic HTML**: Proper heading hierarchy and structure
- **Alt Text**: Descriptive image alt text for accessibility and SEO
- **Structured Data**: JSON-LD schema for portfolio projects
- **Sitemap**: Dynamic sitemap generation for all content

### Content Management Considerations
- **Markdown Ready**: Content structure prepared for MDX integration
- **Asset Organization**: Systematic image and file organization
- **Version Control**: Git-based content versioning
- **Future CMS**: Architecture ready for headless CMS integration

## Key Dependencies & Tools

### Animation & Interaction
- `framer-motion`: Advanced animation library
- `@radix-ui/*`: Headless UI primitives
- `lucide-react`: Consistent icon system

### Utilities & Styling
- `tailwindcss`: Utility-first CSS framework
- `tailwind-merge`: Conditional class handling
- `class-variance-authority`: Type-safe component variants
- `clsx`: Conditional class composition

### Development & Build Tools
- `typescript`: Type safety and enhanced developer experience
- `next`: React framework with App Router and built-in optimizations
- `postcss`: CSS processing with autoprefixer
- `tailwindcss-animate`: Animation utilities for micro-interactions
- `pnpm`: Fast, efficient package management with workspace support

### Key Dependencies Deep Dive

#### Animation & Interaction Libraries
- **`framer-motion`**: Industry-leading animation library
  - Spring physics for natural motion
  - Gesture support for touch interactions
  - Layout animations for dynamic content
  - Performance optimizations with hardware acceleration

- **`@radix-ui/*`**: Accessible headless UI primitives
  - Dialog, Popover, Tooltip, and more
  - Built-in accessibility features
  - Customizable styling with Tailwind CSS
  - Keyboard navigation and focus management

- **`lucide-react`**: Beautiful, consistent icon system
  - Tree-shakeable SVG icons
  - Consistent stroke width and style
  - Large library covering all use cases

#### Styling & Design System
- **`tailwindcss`**: Utility-first CSS framework
  - Custom design token integration
  - Responsive design utilities
  - Dark mode support
  - Consistent spacing and typography

- **`tailwind-merge`**: Intelligent class merging
  - Prevents style conflicts
  - Optimizes class output
  - Conditional styling support

- **`class-variance-authority`**: Type-safe component variants
  - Button variants (primary, secondary, outline, ghost)
  - Size variants (sm, md, lg)
  - State variants (default, disabled, loading)

- **`clsx`**: Conditional class composition
  - Clean conditional styling
  - Array and object syntax support
  - TypeScript integration

#### Form & Validation
- **`react-hook-form`**: Performant form library
  - Minimal re-renders
  - Built-in validation
  - TypeScript integration
  - Accessibility features

- **`@hookform/resolvers`**: Validation schema integration
- **`zod`**: Type-safe schema validation
  - Runtime validation
  - TypeScript inference
  - Detailed error messages

#### UI Enhancement Libraries
- **`react-day-picker`**: Date picker component
- **`recharts`**: Chart and data visualization
- **`sonner`**: Toast notification system
- **`vaul`**: Drawer component for mobile
- **`embla-carousel-react`**: Carousel implementation

## User Experience & Interaction Design

### Navigation & Information Architecture
- **Header Navigation**: Intelligent scroll-based active states
  - Homepage: Scroll-spy navigation (Projects, About, Contact)
  - Subpages: Breadcrumb navigation with clear hierarchy
  - Mobile: Hamburger menu with smooth animations

- **Project Discovery**: Multiple pathways to content
  - Homepage project grid with hover previews
  - Games landing page with filtering and search
  - Cross-linking between related projects

- **Content Hierarchy**: Clear information architecture
  - Hero sections establish context and purpose
  - Progressive disclosure reveals detail on demand
  - Call-to-action buttons guide user flow

### Responsive Design Excellence
- **Breakpoint Strategy**: Mobile-first with strategic breakpoints
  - Mobile: 320px - 768px (touch-optimized interactions)
  - Tablet: 768px - 1024px (hybrid touch/cursor interactions)
  - Desktop: 1024px+ (enhanced cursor interactions)

- **Touch Interactions**: Optimized for mobile experience
  - Minimum 44px touch targets
  - Swipe gestures for carousels and navigation
  - Disabled cursor effects on touch devices

- **Performance Considerations**: 
  - Image optimization with Next.js Image component
  - Lazy loading for below-the-fold content
  - Efficient animation libraries with hardware acceleration

### Accessibility Excellence
- **Keyboard Navigation**: Full keyboard accessibility
  - Logical tab order throughout the application
  - Skip links for screen reader users
  - Focus indicators with high contrast

- **Screen Reader Support**:
  - Semantic HTML structure with proper headings
  - ARIA labels for complex interactions
  - Alt text for all images and graphics
  - Live regions for dynamic content updates

- **Color & Contrast**: WCAG AA compliance
  - High contrast ratios in both light and dark themes
  - Color is not the only means of conveying information
  - Focus indicators clearly visible

- **Motion Accessibility**: Respects user preferences
  - `prefers-reduced-motion` media query support
  - Alternative static layouts for motion-sensitive users
  - Optional animation controls in game interfaces

## Future Extensibility & Development Roadmap

### Ready for Enhancement Areas

#### 1. **Content Management System Integration**
- **Architecture Prepared**: File structure ready for headless CMS
- **MDX Support**: Content can be converted to MDX for rich formatting
- **Asset Management**: Systematic organization ready for DAM integration
- **API Routes**: Next.js API routes ready for dynamic content

#### 2. **Additional Games & Interactive Experiences**
- **Routing System**: `/games/[slug]` ready for new games
- **Component Library**: Reusable game components established
- **State Patterns**: Game state management patterns documented
- **Audio System**: Audio feedback framework in place

#### 3. **Enhanced Analytics & Performance Monitoring**
- **Core Web Vitals**: Performance optimization patterns established
- **User Analytics**: Ready for Google Analytics or alternative
- **Error Tracking**: Error boundary patterns for monitoring integration
- **A/B Testing**: Component structure supports variant testing

#### 4. **Internationalization (i18n)**
- **Content Structure**: Prepared for multi-language support
- **Component Architecture**: Text extraction ready
- **Routing**: Next.js i18n routing preparation
- **Asset Organization**: Language-specific asset structure

#### 5. **Advanced Interactions & Features**
- **WebGL Experiences**: Three.js integration possibilities
- **Progressive Web App**: Service worker and offline capability
- **Real-time Features**: WebSocket integration for collaborative games
- **AI Integration**: Ready for AI-powered features and content

### Performance Optimization Opportunities
- **Bundle Analysis**: Webpack analyzer setup for optimization
- **Image Optimization**: Advanced formats (WebP, AVIF) implementation
- **Code Splitting**: Strategic splitting for larger features
- **Caching Strategy**: Advanced caching for static and dynamic content

### Accessibility Enhancements
- **Advanced Screen Reader**: Enhanced ARIA live regions
- **Voice Navigation**: Voice control integration possibilities
- **High Contrast Mode**: Enhanced contrast themes
- **Text Scaling**: Better support for large text preferences

### Development Experience Improvements
- **Storybook Integration**: Component documentation and testing
- **Unit Testing**: Jest and React Testing Library setup
- **E2E Testing**: Playwright or Cypress integration
- **Design System Documentation**: Living style guide development

---

## AI Assistant Guidelines

### When Working with This Portfolio

#### **Understanding Context**
- This is Vedant Darak's professional UX portfolio showcasing 5 years of experience
- Focus areas: Health tech, fintech, travel apps, research-driven design
- The codebase demonstrates both UX design excellence and technical implementation skills
- Every component follows the philosophy: "code that's not just written, but carved"

#### **Design Philosophy to Maintain**
- **8px Baseline Grid**: All spacing must follow the mathematical grid system
- **Micro-Interactions**: Hover effects at 1.02× scale, 300ms card flips with ease-in-out
- **Animation Timing**: Use established timing values (150ms, 300ms, 500ms) with spring physics
- **Performance First**: Always consider Core Web Vitals and mobile performance
- **Accessibility**: ARIA roles, keyboard navigation, and screen reader support are non-negotiable

#### **Code Standards to Follow**
- **TypeScript Strict**: No `any` types, use interfaces for public contracts
- **Component Composition**: Prefer composition over inheritance
- **Naming Conventions**: PascalCase components, kebab-case files, descriptive props
- **Animation Patterns**: Use Framer Motion with established easing curves
- **Responsive Design**: Test down to 320px, use mobile-first approach

#### **Common Tasks & Patterns**

**Adding New Components:**
- Follow the RefinedComponent naming pattern
- Include magnetic effects where appropriate
- Add proper TypeScript interfaces
- Include accessibility considerations
- Use the established animation timing system

**Modifying Animations:**
- Maintain spring physics: `[0.21, 0.47, 0.32, 0.98]`
- Use transform-based animations for performance
- Consider `prefers-reduced-motion` for accessibility
- Test animations at 60fps on mobile devices

**Content Updates:**
- Maintain the narrative flow of the portfolio
- Update case studies with proper UX process documentation
- Include quantified metrics and business impact
- Ensure content supports the professional brand

**Game Development:**
- Use the blackjack game as a reference for complex state management
- Follow the established component architecture for game UI
- Include proper error handling and user feedback
- Maintain performance with smooth 60fps interactions

#### **What Makes This Portfolio Special**
- **Technical Excellence**: Advanced React patterns, performance optimization, accessibility
- **Design Excellence**: Consistent 8px grid, thoughtful micro-interactions, beautiful typography
- **Professional Narrative**: Each project tells a complete UX story with process and impact
- **Interactive Experiences**: Games demonstrate both technical and creative skills
- **Holistic Presentation**: Professional work + technical demos + personal expression

#### **Key Metrics to Maintain**
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Accessibility**: WCAG AA compliance, keyboard navigation, screen reader support
- **Performance**: 60fps animations, optimized images, efficient re-renders
- **Mobile Experience**: Touch-optimized, 320px responsive, fast loading

## Development Philosophy

This codebase embodies the principle that **every line should feel intentional**. From the mathematical precision of the 8px spacing system to the carefully choreographed 300ms card flip animations, each decision serves the greater harmony of the user experience. 

The code architecture mirrors Vedant's UX design process: user-centered, iterative, research-driven, and focused on creating meaningful interactions that feel both effortless and delightful. The portfolio doesn't just showcase UX work—it IS a UX experience, demonstrating design thinking through code.

**"With each keystroke, feel the crack of solid ice giving way—code that's not just written, but carved."**

### Current State Summary (June 2025)
- **Production Ready**: Fully functional portfolio with polished interactions
- **Modern Architecture**: Next.js 15, React 19, TypeScript 5 foundation
- **Comprehensive Documentation**: This context file serves as complete reference
- **Performance Optimized**: Core Web Vitals compliant with 60fps animations
- **Accessibility First**: WCAG AA compliant with universal design principles
- **Scalable Foundation**: Ready for content expansion and feature additions

---

*This documentation serves as both technical reference and creative brief, ensuring that any AI assistance maintains the high standards and intentional design that define this professional portfolio.*

**Last Updated**: June 29, 2025
