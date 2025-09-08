module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#1A1A1A", // Deep canvas for content luminosity
        secondary: "#2D2D2D", // Subtle interface depth and separation
        accent: "#E6B17A", // Warm guidance and interactive moments
        
        // Background Colors
        background: "#0F0F0F", // Pure content focus environment
        surface: "#242424", // Card and component definition
        
        // Text Colors
        text: {
          primary: "#FFFFFF", // Clear content hierarchy and readability
          secondary: "#A0A0A0", // Supporting information without distraction
        },
        
        // Status Colors
        success: "#4CAF50", // green-500 - Positive confirmation and completion states
        warning: "#FF9800", // orange-500 - Attention without alarm for deadlines
        error: "#F44336", // red-500 - Clear problem identification and resolution
        
        // Additional Grays for Interface
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
      boxShadow: {
        'cinematic': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.1)',
        'subtle': '0 1px 6px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        'fast': '300ms',
        'cinematic': '400ms',
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}