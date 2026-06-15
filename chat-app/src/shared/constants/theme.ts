export const palette = {
  // --- Primary: Indigo ---
  indigo50:  '#EEF2FF',
  indigo100: '#E0E7FF',
  indigo200: '#C7D2FE',
  indigo300: '#A5B4FC',
  indigo400: '#818CF8',
  indigo500: '#6366F1',  // primary brand
  indigo600: '#4F46E5',  // primary dark
  indigo700: '#4338CA',
  indigo800: '#3730A3',
  indigo900: '#312E81',

  // --- Accent: Violet ---
  violet50:  '#F5F3FF',
  violet100: '#EDE9FE',
  violet200: '#DDD6FE',
  violet300: '#C4B5FD',
  violet400: '#A78BFA',
  violet500: '#8B5CF6',  // accent brand
  violet600: '#7C3AED',
  violet700: '#6D28D9',
  violet800: '#5B21B6',
  violet900: '#4C1D95',

  // --- Neutrals ---
  white:     '#FFFFFF',
  black:     '#000000',

  gray50:    '#F9FAFB',
  gray100:   '#F3F4F6',
  gray200:   '#E5E7EB',
  gray300:   '#D1D5DB',
  gray400:   '#9CA3AF',
  gray500:   '#6B7280',
  gray600:   '#4B5563',
  gray700:   '#374151',
  gray800:   '#1F2937',
  gray900:   '#111827',
  gray950:   '#0D1117',

  // --- Semantic ---
  success:   '#22C55E',
  error:     '#EF4444',
  warning:   '#F59E0B',
  info:      '#6366F1',

  // --- Chat specific ---
  online:    '#22C55E',
  offline:   '#9CA3AF',
  typing:    '#8B5CF6',
  delivered: '#6366F1',
  read:      '#8B5CF6',

  // Transparent overlays
  overlay10: 'rgba(0,0,0,0.10)',
  overlay20: 'rgba(0,0,0,0.20)',
  overlay40: 'rgba(0,0,0,0.40)',
  overlay60: 'rgba(0,0,0,0.60)',
} as const;


// ─────────────────────────────────────────
// LIGHT THEME
// ─────────────────────────────────────────
export const lightTheme = {
  dark: false,

  colors: {
    // Backgrounds
    background:        palette.gray50,
    backgroundSecond:  palette.white,
    surface:           palette.white,
    surfaceSecond:     palette.gray100,

    // Brand
    primary:           palette.indigo500,
    primaryDark:       palette.indigo600,
    primaryLight:      palette.indigo100,
    accent:            palette.violet500,
    accentLight:       palette.violet100,

    // Text
    textPrimary:       palette.gray900,
    textSecondary:     palette.gray500,
    textTertiary:      palette.gray400,
    textInverse:       palette.white,
    textOnPrimary:     palette.white,

    // Border
    border:            palette.gray200,
    borderFocus:       palette.indigo400,

    // Chat bubbles
    bubbleSent:        palette.indigo500,
    bubbleSentText:    palette.white,
    bubbleReceived:    palette.white,
    bubbleReceivedText: palette.gray900,

    // Input
    inputBackground:   palette.gray100,
    inputBorder:       palette.gray200,
    inputBorderFocus:  palette.indigo400,
    inputText:         palette.gray900,
    inputPlaceholder:  palette.gray400,

    // Tab bar
    tabBarBackground:  palette.white,
    tabBarActive:      palette.indigo500,
    tabBarInactive:    palette.gray400,
    tabBarBorder:      palette.gray200,

    // Header
    headerBackground:  palette.white,
    headerText:        palette.gray900,
    headerBorder:      palette.gray200,
    headerIcon:        palette.gray700,

    // Status
    online:            palette.online,
    offline:           palette.offline,
    typing:            palette.typing,

    // Semantic
    success:           palette.success,
    error:             palette.error,
    warning:           palette.warning,
    info:              palette.info,

    // Misc
    overlay:           palette.overlay20,
    shadow:            palette.black,
    divider:           palette.gray100,
    unreadBadge:       palette.indigo500,
    unreadBadgeText:   palette.white,
    timestamp:         palette.gray400,
    icon:              palette.gray600,
    iconActive:        palette.indigo500,
  },
} as const;


// ─────────────────────────────────────────
// DARK THEME
// ─────────────────────────────────────────
export const darkTheme = {
  dark: true,

  colors: {
    // Backgrounds
    background:        palette.gray950,
    backgroundSecond:  palette.gray900,
    surface:           palette.gray900,
    surfaceSecond:     palette.gray800,

    // Brand
    primary:           palette.indigo400,
    primaryDark:       palette.indigo500,
    primaryLight:      palette.indigo900,
    accent:            palette.violet400,
    accentLight:       palette.violet900,

    // Text
    textPrimary:       '#F1F0FF',
    textSecondary:     palette.gray400,
    textTertiary:      palette.gray600,
    textInverse:       palette.gray900,
    textOnPrimary:     palette.white,

    // Border
    border:            palette.gray800,
    borderFocus:       palette.indigo400,

    // Chat bubbles
    bubbleSent:        palette.indigo500,
    bubbleSentText:    palette.white,
    bubbleReceived:    palette.gray800,
    bubbleReceivedText: '#F1F0FF',

    // Input
    inputBackground:   palette.gray800,
    inputBorder:       palette.gray700,
    inputBorderFocus:  palette.indigo400,
    inputText:         '#F1F0FF',
    inputPlaceholder:  palette.gray600,

    // Tab bar
    tabBarBackground:  palette.gray900,
    tabBarActive:      palette.indigo400,
    tabBarInactive:    palette.gray600,
    tabBarBorder:      palette.gray800,

    // Header
    headerBackground:  palette.gray900,
    headerText:        '#F1F0FF',
    headerBorder:      palette.gray800,
    headerIcon:        palette.gray300,

    // Status
    online:            palette.online,
    offline:           palette.gray600,
    typing:            palette.violet400,

    // Semantic
    success:           '#4ADE80',
    error:             '#F87171',
    warning:           '#FCD34D',
    info:              palette.indigo400,

    // Misc
    overlay:           palette.overlay60,
    shadow:            palette.black,
    divider:           palette.gray800,
    unreadBadge:       palette.indigo500,
    unreadBadgeText:   palette.white,
    timestamp:         palette.gray600,
    icon:              palette.gray400,
    iconActive:        palette.indigo400,
  },
} as const;


// ─────────────────────────────────────────
// TYPOGRAPHY
// ─────────────────────────────────────────
export const typography = {
  // Font sizes
  size: {
    xs:   11,
    sm:   13,
    base: 15,
    md:   16,
    lg:   18,
    xl:   20,
    '2xl': 24,
    '3xl': 30,
  },

  // Font weights (React Native string format)
  weight: {
    regular:   '400' as const,
    medium:    '500' as const,
    semibold:  '600' as const,
    bold:      '700' as const,
  },

  // Line heights
  lineHeight: {
    tight:   1.2,
    normal:  1.5,
    relaxed: 1.75,
  },
} as const;


// ─────────────────────────────────────────
// SPACING
// ─────────────────────────────────────────
export const spacing = {
  xs:   4,
  sm:   8,
  md:   12,
  base: 16,
  lg:   20,
  xl:   24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,
} as const;


// ─────────────────────────────────────────
// BORDER RADIUS
// ─────────────────────────────────────────
export const radius = {
  xs:   4,
  sm:   8,
  md:   12,
  lg:   16,
  xl:   20,
  full: 9999,

  // Chat specific
  bubbleSent:     { topLeft: 18, topRight: 4, bottomLeft: 18, bottomRight: 18 },
  bubbleReceived: { topLeft: 4, topRight: 18, bottomLeft: 18, bottomRight: 18 },
} as const;


// ─────────────────────────────────────────
// SHADOWS
// ─────────────────────────────────────────
export const shadows = {
  none: {},

  sm: {
    shadowColor:   palette.black,
    shadowOffset:  { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius:  2,
    elevation:     2,
  },

  md: {
    shadowColor:   palette.black,
    shadowOffset:  { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius:  8,
    elevation:     4,
  },

  lg: {
    shadowColor:   palette.black,
    shadowOffset:  { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius:  16,
    elevation:     8,
  },

  // Indigo glow — buttons, FAB
  primaryGlow: {
    shadowColor:   palette.indigo500,
    shadowOffset:  { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius:  12,
    elevation:     6,
  },
} as const;


// ─────────────────────────────────────────
// ANIMATION TIMINGS
// ─────────────────────────────────────────
export const animation = {
  fast:   150,
  normal: 250,
  slow:   400,
} as const;


// ─────────────────────────────────────────
// AVATAR SIZES
// ─────────────────────────────────────────
export const avatarSize = {
  xs:  28,
  sm:  36,
  md:  44,
  lg:  56,
  xl:  72,
  '2xl': 96,
} as const;


// ─────────────────────────────────────────
// TYPE EXPORTS
// ─────────────────────────────────────────
export type Theme      = typeof lightTheme;
export type ThemeColors = typeof lightTheme.colors;
export type Palette    = typeof palette;