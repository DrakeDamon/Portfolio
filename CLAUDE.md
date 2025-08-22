# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based personal portfolio website showcasing David Damon's work as a Data Engineer and Full Stack Developer. The site is built with Create React App and uses styled-components for styling with a modern dark theme.

## Development Commands

- `npm start` - Runs the development server at http://localhost:3000
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Creates production build in the `build/` folder
- `npm run deploy` - Deploys to GitHub Pages (runs predeploy build first)

## Architecture & Structure

### Component Architecture
- **Single Page Application**: All content rendered on one page with smooth scrolling navigation
- **Modal System**: Project details displayed in overlay modals controlled by `openModal` state
- **Theme System**: Centralized theming using styled-components ThemeProvider with dark/light themes
- **Responsive Design**: Mobile-first approach with breakpoint-based styling

### Key Components
- `App.js` - Main component with ThemeProvider wrapper and modal state management
- `HeroSection` - Landing section with typewriter effect and personal introduction
- `Projects` - Filterable project showcase with category toggle buttons
- `ProjectDetails` - Modal component for detailed project information
- `Skills`, `Experience`, `Education`, `Certifications` - Portfolio sections

### Data Management
- `src/data/constants.js` - Central data store containing all portfolio content:
  - Personal bio and contact information
  - Skills categorized by technology stack
  - Work experience with detailed descriptions
  - Project data with technical specifications
  - Education and certification information

### Styling System
- **styled-components**: Component-level styling with theme integration
- **Theme files**: `src/themes/default.js` and `src/utils/Themes.js`
- **Color scheme**: Data-focused cyan primary (#00d4ff) with deep blue-black backgrounds
- **Typography**: Space Grotesk font family for modern, technical aesthetic

### Special Features
- **Typewriter effect**: Hero section uses typewriter-effect library for animated role display
- **Background animation**: Custom HeroBgAnimation component for visual interest
- **Email integration**: Uses @emailjs/browser for contact form functionality
- **GitHub Pages deployment**: Configured for static site hosting

## Key Dependencies

### Core Framework
- React 18.0.0 with react-dom and react-router-dom
- styled-components for CSS-in-JS styling

### UI Libraries
- Material-UI (@mui/material, @mui/icons-material) for some components
- react-icons for icon library
- typewriter-effect for animated text

### Utilities
- emailjs for contact form functionality
- react-scroll for smooth scrolling navigation
- gh-pages for deployment automation

## File Organization

```
src/
├── components/          # React components organized by feature
│   ├── About/
│   ├── Cards/           # Reusable card components
│   ├── HeroSection/
│   ├── Projects/
│   └── [other sections]/
├── data/
│   └── constants.js     # All portfolio data and content
├── images/              # Static image assets
├── themes/              # Theme configuration files
└── utils/
    └── Themes.js        # Theme definitions
```

## Development Notes

- The project uses GitHub Pages deployment with homepage set to "https://DrakeDamon.github.io/Portfolio"
- All styling uses theme variables for consistency and maintainability
- Project data includes detailed technical specifications, performance metrics, and architecture details
- The site is optimized for data engineering and development portfolio presentation
- Contact section is currently commented out in App.js but can be re-enabled

## Content Updates

To update portfolio content, modify `src/data/constants.js`:
- `Bio` object for personal information
- `skills` array for technical capabilities
- `experiences` array for work history
- `projects` array for project showcase
- `education` and `certifications` arrays for credentials