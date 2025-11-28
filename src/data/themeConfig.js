export const themeConfig = {
    // Primitive Colors (from CSS :root)
    primitiveColors: {
        white: "#ffffff",
        black: "#000000",
        cream50: "#fcfcf9",
        cream100: "#fffffd",
        gray200: "#f5f5f5",
        gray300: "#a7a9a9",
        gray400: "#777c7c",
        slate500: "#626c71",
        slate900: "#134252",
        charcoal700: "#1f2121",
        charcoal800: "#262828",
        teal300: "#32b8c6",
        teal400: "#2da6b2",
        teal500: "#218089",
        teal600: "#1d7480",
        teal700: "#1a687d",
        teal800: "#299aa1",
        red400: "#ff5459",
        red500: "#c0152f",
        orange400: "#e68161",
        orange500: "#a84b2f",
    },

    // Semantic Colors - Light Mode (unchanged)
    lightMode: {
        background: "#fcfcf9",
        surface: "#fffffd",
        text: "#134252",
        textSecondary: "#626c71",
        primary: "#218089",
        primaryHover: "#1d7480",
        primaryActive: "#1a687d",
        secondary: "rgba(94, 82, 64, 0.12)",
        secondaryHover: "rgba(94, 82, 64, 0.2)",
        border: "rgba(94, 82, 64, 0.2)",
        cardBorder: "rgba(94, 82, 64, 0.12)",
        btnPrimaryText: "#fcfcf9",
        error: "#c0152f",
        success: "#218089",
        warning: "#a84b2f",
        info: "#626c71",
    },

    // DARK MODE SCOTTISH HEATHER
    darkMode: {
        background: "#1a0f2e",        // Very dark heather/purple
        surface: "#27143f",           // Darker card/section
        text: "#e8d5ff",              // Light heather/lavender
        textSecondary: "#bca8d6",     // Soft muted purple
        primary: "#b085d8",           // Heather purple
        primaryHover: "#c99fe0",      // Lighter heather
        primaryActive: "#9d6bc6",     // Classic heather
        secondary: "rgba(176,133,216,0.12)",
        secondaryHover: "rgba(176,133,216,0.2)",
        border: "rgba(176,133,216,0.22)",
        cardBorder: "rgba(176,133,216,0.14)",
        btnPrimaryText: "#1a0f2e",
        error: "#ff6b8a",
        success: "#b085d8",
        warning: "#ffc371",
        info: "#bca8d6",
    },

    // Always use CSS variables in components (responds to theme automatically)
    semanticColors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        textSecondary: "var(--color-text-secondary)",
        primary: "var(--color-primary)",
        primaryHover: "var(--color-primary-hover)",
        primaryActive: "var(--color-primary-active)",
        secondary: "var(--color-secondary)",
        border: "var(--color-border)",
        cardBorder: "var(--color-card-border)",
        error: "var(--color-error)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        info: "var(--color-info)",
        btnPrimaryText: "var(--color-btn-primary-text)",
    },

    fonts: {
        heading: "var(--font-family-base)",
        body: "var(--font-family-base)",
        mono: "var(--font-family-mono)",
    },

    spacing: {
        xs: "var(--space-4)",
        sm: "var(--space-8)",
        md: "var(--space-16)",
        lg: "var(--space-24)",
        xl: "var(--space-32)",
    },

    radius: {
        sm: "var(--radius-sm)",
        base: "var(--radius-base)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        full: "var(--radius-full)",
    },

    shadows: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
    },

    transitions: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        easing: "var(--ease-standard)",
    },
};

export const getCurrentThemeMode = () => {
    return document.documentElement.getAttribute('data-color-scheme') || 'light';
};

export const getCurrentThemeColors = () => {
    const mode = getCurrentThemeMode();
    return mode === 'dark' ? themeConfig.darkMode : themeConfig.lightMode;
};

export const colors = themeConfig.semanticColors;
export const spacing = themeConfig.spacing;
export const radius = themeConfig.radius;
export const shadows = themeConfig.shadows;
