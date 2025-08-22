# Source Code Overview

This document provides a comprehensive overview of the `src` folder structure and the purpose of each directory within the portfolio React application.

## Root Level Files

### `App.js`
Main application component that serves as the entry point. Handles:
- Theme provider setup with `darkTheme`
- Router configuration with basename for GitHub Pages
- Global state management for modal system (`openModal`)
- Overall page layout and component orchestration

### `App.css`
Global CSS styles for the application

### `index.js`
React application entry point that renders the App component into the DOM

## Directory Structure

### `/components`
Contains all React components organized by feature/section. Each component follows a consistent structure with separate styling files where needed.

#### `/About`
- **Purpose**: About section component (currently minimal implementation)
- **Files**: 
  - `index.js` - Simple placeholder component
  - `AboutStyle.js` - Styled components for About section
- **Status**: Basic implementation, not heavily used in current layout

#### `/Cards`
- **Purpose**: Reusable card components for displaying different types of content
- **Files**:
  - `EducationCard.jsx` - Card component for education entries
  - `ExperienceCard.jsx` - Card component for work experience entries  
  - `ProjectCards.jsx` - Main project card with hover effects, tags, and modal trigger
- **Key Features**: 
  - Hover animations and effects
  - Tag system for technologies
  - Click handlers for modal opening
  - Member avatars display

#### `/Certifications`
- **Purpose**: Displays professional certifications section
- **Files**: `index.js` - Certification showcase component
- **Data Source**: Uses `certifications` array from constants.js

#### `/Contact`
- **Purpose**: Contact form section (currently commented out in main App)
- **Files**: `index.js` - Contact form with email integration
- **Integration**: Uses EmailJS for form submission

#### `/Education`
- **Purpose**: Educational background section
- **Files**: `index.js` - Education timeline/cards display
- **Data Source**: Uses `education` array from constants.js

#### `/Experience`
- **Purpose**: Professional experience section
- **Files**: `index.js` - Work experience cards/timeline
- **Data Source**: Uses `experiences` array from constants.js

#### `/Footer`
- **Purpose**: Site footer component
- **Files**: `index.js` - Footer with links and contact information
- **Content**: Typically includes social links, copyright, and contact details

#### `/HeroBgAnimation`
- **Purpose**: Animated background element for hero section
- **Files**:
  - `index.js` - Animation component logic
  - `HeroBgAnimationStyle.js` - Styled components for animations
- **Functionality**: Creates dynamic visual background effects

#### `/HeroSection`
- **Purpose**: Landing/hero section of the portfolio
- **Files**: `index.js` - Main hero component
- **Key Features**:
  - Typewriter effect for role animation
  - Personal introduction and bio
  - Profile image display
  - Resume download button
  - Responsive layout with left/right containers

#### `/Navbar`
- **Purpose**: Navigation header component
- **Files**:
  - `index.js` - Navigation logic and structure
  - `NavbarStyledComponent.js.js` - Styled components for navbar
- **Features**:
  - Responsive mobile menu
  - Smooth scroll navigation links
  - GitHub profile button
  - Logo and branding

#### `/ProjectDetails`
- **Purpose**: Modal component for detailed project information
- **Files**: `index.jsx` - Modal overlay with comprehensive project details
- **Features**:
  - Modal overlay system
  - Detailed project specifications
  - Technology tags and descriptions
  - Links to GitHub and live demos

#### `/Projects`
- **Purpose**: Projects showcase section
- **Files**:
  - `index.js` - Projects grid and filtering logic
  - `ProjectsStyle.js` - Styled components for projects section
- **Features**:
  - Category-based filtering (All, Web App, Data Engineering, etc.)
  - Project cards grid layout
  - Modal integration for detailed views

#### `/Skills`
- **Purpose**: Technical skills showcase
- **Files**: `index.js` - Skills categories and items display
- **Features**:
  - Categorized skill groups
  - Icon/logo display for each technology
  - Responsive grid layout
  - Card-based organization

### `/data`
- **Purpose**: Centralized data storage for all portfolio content
- **Files**: `constants.js` - Complete data structure including:
  - Personal bio information (`Bio`)
  - Skills categorized by type (`skills`)
  - Work experience details (`experiences`)
  - Project information with technical specs (`projects`)
  - Education background (`education`)
  - Certifications (`certifications`)
  - Timeline data (`TimeLineData`)

### `/images`
- **Purpose**: Static image assets
- **Files**:
  - `Headshot1.png`, `headshot.JPG`, `headshotcompressed.png` - Profile photos
  - `Udemy_logo.svg.png` - Certification logos
- **Usage**: Referenced throughout components for profile images and branding

### `/themes`
- **Purpose**: Theme configuration and styling definitions
- **Files**: `default.js` - Comprehensive theme object with:
  - Font definitions (Space Grotesk primary)
  - Color palette (data-focused cyan/blue scheme)
  - Responsive breakpoints
  - Consistent design tokens

### `/utils`
- **Purpose**: Utility functions and shared configurations
- **Files**: `Themes.js` - Theme definitions and exports:
  - `darkTheme` - Primary dark theme used throughout app
  - `lightTheme` - Alternative light theme (not currently active)

## Architecture Patterns

### Component Organization
- **Feature-based**: Components organized by portfolio sections
- **Reusable Cards**: Separate card components for different content types
- **Styled Components**: CSS-in-JS with theme integration
- **Data Separation**: All content centralized in constants.js

### State Management
- **Local State**: Component-level state for UI interactions
- **Modal State**: Global modal state managed in App.js
- **Theme Context**: Theme provided via styled-components ThemeProvider

### Styling Approach
- **Styled Components**: Primary styling solution with theme integration
- **Responsive Design**: Mobile-first with breakpoint-based styling
- **Consistent Theming**: Centralized color and typography system
- **Animation**: Hover effects and transitions throughout

### Data Flow
- **Static Data**: Portfolio content stored in constants.js
- **Props Drilling**: Data passed down through component hierarchy
- **Event Handling**: Modal and navigation interactions bubble up to App level