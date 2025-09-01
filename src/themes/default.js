const themeDefault = {
  // Fonts: Keeping Space Grotesk, adding a fallback for robustness
  fonts: {
    title: "Space Grotesk, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    main: "Space Grotesk, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    accent: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" // Added for variety (e.g., buttons, captions)
  },
  // Colors: Modern, data/tech-inspired palette from darkTheme, refined for clarity
  colors: {
    bg: "#0a0f1b",        // Deeper blue-black from darkTheme, sleek and modern
    bgLight: "#1a1f2e",    // Lighter background for layering (cards, sections)
    primary: "#00d4ff",    // Vibrant cyan for highlights, buttons, data focus
    secondary: "#6b48ff",  // Modern purple accent, complements cyan, nods to original primary1
    textPrimary: "#F2F3F4", // Near-white for main text, high contrast
    textSecondary: "#b1b2b3", // Softer gray for secondary text
    card: "#141924",       // Dark card background, subtle and professional
    cardLight: "#1e2533",  // Lighter card variant for hierarchy
    button: "#00d4ff",     // Cyan for buttons, consistent with primary
    buttonHover: "#00b8d9", // Slightly darker cyan for hover states
    white: "#FFFFFF",      // Pure white for accents
    black: "#000000",      // Pure black for deep contrast
    footerBackground: "#070c16" // Darker blue-black for footer, modern twist on original
  },
  // Breakpoints: Updated for modern device sizes, using min-width for better control
  breakpoints: {
    sm: 'screen and (min-width: 640px)',  // Small: tablets, large phones
    md: 'screen and (min-width: 768px)',  // Medium: small tablets, iPads
    lg: 'screen and (min-width: 1024px)', // Large: laptops, small desktops
    xl: 'screen and (min-width: 1280px)', // Extra-large: desktops
    xxl: 'screen and (min-width: 1536px)' // Added for 2K+ screens, modern displays
  }
};

export default themeDefault;
