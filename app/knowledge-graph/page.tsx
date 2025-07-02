"use client";

import TopDownTree from '@/components/top-down-tree';
import { FadeIn } from '@/components/scroll-animations';

// Here we define the complete hierarchical structure of the portfolio.
// This data is a direct representation of the project's file system.
const portfolioData = {
  id: 'root',
  label: 'UX Portfolio',
  type: 'root' as const,
  children: [
    {
      id: 'app',
      label: 'app',
      type: 'folder' as const,
      children: [
        {
          id: 'app-games',
          label: 'games',
          type: 'folder' as const,
          children: [
            {
              id: 'app-games-slug',
              label: '[slug]',
              type: 'folder' as const,
              children: [
                { id: 'app-games-slug-not-found', label: 'not-found.tsx', type: 'file' as const },
                { id: 'app-games-slug-page', label: 'page.tsx', type: 'file' as const },
              ],
            },
            { id: 'app-games-page', label: 'page.tsx', type: 'file' as const },
          ],
        },
        {
          id: 'app-knowledge-graph',
          label: 'knowledge-graph',
          type: 'folder' as const,
          children: [{ id: 'app-knowledge-graph-page', label: 'page.tsx', type: 'file' as const }],
        },
        {
          id: 'app-poetry',
          label: 'poetry',
          type: 'folder' as const,
          children: [
            {
              id: 'app-poetry-slug',
              label: '[slug]',
              type: 'folder' as const,
              children: [
                { id: 'app-poetry-slug-not-found', label: 'not-found.tsx', type: 'file' as const },
                { id: 'app-poetry-slug-page', label: 'page.tsx', type: 'file' as const },
              ],
            },
            { id: 'app-poetry-page', label: 'page.tsx', type: 'file' as const },
          ],
        },
        {
          id: 'app-projects',
          label: 'projects',
          type: 'folder' as const,
          children: [
            {
              id: 'app-projects-backmarket-ia-redesign',
              label: 'backmarket-ia-redesign',
              type: 'folder' as const,
              children: [{ id: 'app-projects-backmarket-ia-redesign-page', label: 'page.tsx', type: 'file' as const }],
            },
            {
              id: 'app-projects-finance-dashboard',
              label: 'finance-dashboard',
              type: 'folder' as const,
              children: [{ id: 'app-projects-finance-dashboard-page', label: 'page.tsx', type: 'file' as const }],
            },
            {
              id: 'app-projects-health-track',
              label: 'health-track',
              type: 'folder' as const,
              children: [{ id: 'app-projects-health-track-page', label: 'page.tsx', type: 'file' as const }],
            },
            {
              id: 'app-projects-ucb',
              label: 'understanding-creative-block',
              type: 'folder' as const,
              children: [{ id: 'app-projects-ucb-page', label: 'page.tsx', type: 'file' as const }],
            },
          ],
        },
        { id: 'app-globals', label: 'globals.css', type: 'file' as const },
        { id: 'app-layout', label: 'layout.tsx', type: 'file' as const },
        { id: 'app-page', label: 'page.tsx', type: 'file' as const },
      ],
    },
    {
      id: 'components',
      label: 'components',
      type: 'folder' as const,
      children: [
        {
          id: 'components-ui',
          label: 'ui',
          type: 'folder' as const,
          children: [
            { id: 'ui-accordion', label: 'accordion.tsx', type: 'file' as const },
            { id: 'ui-alert-dialog', label: 'alert-dialog.tsx', type: 'file' as const },
            { id: 'ui-alert', label: 'alert.tsx', type: 'file' as const },
            { id: 'ui-aspect-ratio', label: 'aspect-ratio.tsx', type: 'file' as const },
            { id: 'ui-avatar', label: 'avatar.tsx', type: 'file' as const },
            { id: 'ui-badge', label: 'badge.tsx', type: 'file' as const },
            { id: 'ui-breadcrumb', label: 'breadcrumb.tsx', type: 'file' as const },
            { id: 'ui-button', label: 'button.tsx', type: 'file' as const },
            { id: 'ui-calendar', label: 'calendar.tsx', type: 'file' as const },
            { id: 'ui-card', label: 'card.tsx', type: 'file' as const },
            { id: 'ui-carousel', label: 'carousel.tsx', type: 'file' as const },
            { id: 'ui-chart', label: 'chart.tsx', type: 'file' as const },
            { id: 'ui-checkbox', label: 'checkbox.tsx', type: 'file' as const },
            { id: 'ui-collapsible', label: 'collapsible.tsx', type: 'file' as const },
            { id: 'ui-command', label: 'command.tsx', type: 'file' as const },
            { id: 'ui-context-menu', label: 'context-menu.tsx', type: 'file' as const },
            { id: 'ui-dialog', label: 'dialog.tsx', type: 'file' as const },
            { id: 'ui-drawer', label: 'drawer.tsx', type: 'file' as const },
            { id: 'ui-dropdown-menu', label: 'dropdown-menu.tsx', type: 'file' as const },
            { id: 'ui-form', label: 'form.tsx', type: 'file' as const },
            { id: 'ui-hover-card', label: 'hover-card.tsx', type: 'file' as const },
            { id: 'ui-input-otp', label: 'input-otp.tsx', type: 'file' as const },
            { id: 'ui-input', label: 'input.tsx', type: 'file' as const },
            { id: 'ui-label', label: 'label.tsx', type: 'file' as const },
            { id: 'ui-menubar', label: 'menubar.tsx', type: 'file' as const },
            { id: 'ui-navigation-menu', label: 'navigation-menu.tsx', type: 'file' as const },
            { id: 'ui-pagination', label: 'pagination.tsx', type: 'file' as const },
            { id: 'ui-popover', label: 'popover.tsx', type: 'file' as const },
            { id: 'ui-progress', label: 'progress.tsx', type: 'file' as const },
            { id: 'ui-radio-group', label: 'radio-group.tsx', type: 'file' as const },
            { id: 'ui-resizable', label: 'resizable.tsx', type: 'file' as const },
            { id: 'ui-scroll-area', label: 'scroll-area.tsx', type: 'file' as const },
            { id: 'ui-select', label: 'select.tsx', type: 'file' as const },
            { id: 'ui-separator', label: 'separator.tsx', type: 'file' as const },
            { id: 'ui-sheet', label: 'sheet.tsx', type: 'file' as const },
            { id: 'ui-sidebar', label: 'sidebar.tsx', type: 'file' as const },
            { id: 'ui-skeleton', label: 'skeleton.tsx', type: 'file' as const },
            { id: 'ui-slider', label: 'slider.tsx', type: 'file' as const },
            { id: 'ui-sonner', label: 'sonner.tsx', type: 'file' as const },
            { id: 'ui-switch', label: 'switch.tsx', type: 'file' as const },
            { id: 'ui-table', label: 'table.tsx', type: 'file' as const },
            { id: 'ui-tabs', label: 'tabs.tsx', type: 'file' as const },
            { id: 'ui-textarea', label: 'textarea.tsx', type: 'file' as const },
            { id: 'ui-toast', label: 'toast.tsx', type: 'file' as const },
            { id: 'ui-toaster', label: 'toaster.tsx', type: 'file' as const },
            { id: 'ui-toggle-group', label: 'toggle-group.tsx', type: 'file' as const },
            { id: 'ui-toggle', label: 'toggle.tsx', type: 'file' as const },
            { id: 'ui-tooltip', label: 'tooltip.tsx', type: 'file' as const },
            { id: 'ui-use-mobile', label: 'use-mobile.tsx', type: 'file' as const },
            { id: 'ui-use-toast', label: 'use-toast.ts', type: 'file' as const },
          ],
        },
        { id: 'components-animated-text', label: 'animated-text.tsx', type: 'file' as const },
        { id: 'components-construction-dashboard', label: 'construction-dashboard.tsx', type: 'file' as const },
        { id: 'components-count-up', label: 'count-up.tsx', type: 'file' as const },
        { id: 'components-custom-cursor', label: 'custom-cursor.tsx', type: 'file' as const },
        { id: 'components-debug-cursor-info', label: 'debug-cursor-info.tsx', type: 'file' as const },
        { id: 'components-finance-dashboard', label: 'finance-dashboard.tsx', type: 'file' as const },
        { id: 'components-floating-section-nav', label: 'floating-section-nav.tsx', type: 'file' as const },
        { id: 'components-flowing-text', label: 'flowing-text.tsx', type: 'file' as const },
        { id: 'components-footer', label: 'footer.tsx', type: 'file' as const },
        { id: 'components-gradient-text', label: 'gradient-text.tsx', type: 'file' as const },
        { id: 'components-insight-card', label: 'insight-card.tsx', type: 'file' as const },
        { id: 'components-loading-screen', label: 'loading-screen.tsx', type: 'file' as const },
        { id: 'components-pixel-grid', label: 'pixel-grid.tsx', type: 'file' as const },
        { id: 'components-project-page-wrapper', label: 'project-page-wrapper.tsx', type: 'file' as const },
        { id: 'components-refined-button', label: 'refined-button.tsx', type: 'file' as const },
        { id: 'components-refined-magnetic-effect', label: 'refined-magnetic-effect.tsx', type: 'file' as const },
        { id: 'components-refined-project-card', label: 'refined-project-card.tsx', type: 'file' as const },
        { id: 'components-scroll-animations', label: 'scroll-animations.tsx', type: 'file' as const },
        { id: 'components-site-header', label: 'site-header.tsx', type: 'file' as const },
        { id: 'components-story-components', label: 'story-components.tsx', type: 'file' as const },
        { id: 'components-theme-provider', label: 'theme-provider.tsx', type: 'file' as const },
        { id: 'components-theme-toggle', label: 'theme-toggle.tsx', type: 'file' as const },
        { id: 'components-top-down-tree', label: 'top-down-tree.tsx', type: 'file' as const },
      ],
    },
    {
      id: 'hooks',
      label: 'hooks',
      type: 'folder' as const,
      children: [
        { id: 'hooks-use-mobile', label: 'use-mobile.tsx', type: 'file' as const },
        { id: 'hooks-use-mouse', label: 'use-mouse-position.tsx', type: 'file' as const },
        { id: 'hooks-use-toast', label: 'use-toast.ts', type: 'file' as const },
      ],
    },
    {
      id: 'config',
      label: 'config',
      type: 'folder' as const,
      children: [
        { id: 'config-site', label: 'site.ts', type: 'file' as const },
      ],
    },
    {
      id: 'lib',
      label: 'lib',
      type: 'folder' as const,
      children: [
        { id: 'lib-utils', label: 'utils.ts', type: 'file' as const },
      ],
    },
    {
      id: 'styles',
      label: 'styles',
      type: 'folder' as const,
      children: [
        { id: 'styles-globals', label: 'globals.css', type: 'file' as const },
      ],
    },
    {
      id: 'public',
      label: 'public',
      type: 'folder' as const,
      children: [
        {
          id: 'public-images',
          label: 'images',
          type: 'folder' as const,
          children: [
            { id: 'public-images-vedant', label: 'vedant-portrait.png', type: 'file' as const },
            {
              id: 'public-images-card',
              label: 'card',
              type: 'folder' as const,
              children: []
            },
          ],
        },
        { id: 'public-placeholder-logo-png', label: 'placeholder-logo.png', type: 'file' as const },
        { id: 'public-placeholder-logo-svg', label: 'placeholder-logo.svg', type: 'file' as const },
        { id: 'public-placeholder-user', label: 'placeholder-user.jpg', type: 'file' as const },
        { id: 'public-placeholder-jpg', label: 'placeholder.jpg', type: 'file' as const },
        { id: 'public-placeholder-svg', label: 'placeholder.svg', type: 'file' as const },
      ],
    },
    { id: 'package.json', label: 'package.json', type: 'file' as const },
    { id: 'pnpm-lock.yaml', label: 'pnpm-lock.yaml', type: 'file' as const },
    { id: 'tailwind.config.ts', label: 'tailwind.config.ts', type: 'file' as const },
    { id: 'postcss.config.mjs', label: 'postcss.config.mjs', type: 'file' as const },
    { id: 'next.config.mjs', label: 'next.config.mjs', type: 'file' as const },
    { id: 'tsconfig.json', label: 'tsconfig.json', type: 'file' as const },
    { id: 'components.json', label: 'components.json', type: 'file' as const },
    { id: 'CODEBASE_CONTEXT.md', label: 'CODEBASE_CONTEXT.md', type: 'file' as const },
  ],
};

const KnowledgeGraphPage = () => {
  return (
    <main className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        <FadeIn>
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
              Project <span className="text-primary font-medium">Knowledge Graph</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A top-down view of this portfolio's architecture, representing the complete project structure with all directories and files.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mt-2">
              This interactive visualization demonstrates how the 8px baseline grid and clean architecture principles are applied throughout the codebase.
            </p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="mb-6 text-center">
            <h2 className="text-xl font-medium text-primary">Interactive Directory Structure</h2>
            <p className="text-sm text-muted-foreground">
              Click on folders to expand/collapse them and explore the entire codebase architecture
            </p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <TopDownTree data={portfolioData} />
          </div>
        </FadeIn>
      </div>
    </main>
  );
};

export default KnowledgeGraphPage;
