export const extendedPalette = {
  transparent: "transparent",
  current: "currentColor",

  black: "#000",
  white: "#fff",

  gray: {
    100: "#f7fafc",
    200: "#edf2f7",
    300: "#e2e8f0",
    400: "#cbd5e0",
    500: "#a0aec0",
    600: "#718096",
    700: "#4a5568",
    800: "#2d3748",
    900: "#1a202c",
  },
  red: {
    100: "#FDEDED",
    200: "#FBD1D1",
    300: "#F9B6B5",
    400: "#F47F7E",
    500: "#EF4847",
    600: "#D74140",
    700: "#8F2B2B",
    800: "#6C2020",
    900: "#481615",
  },
  orange: {
    100: "#fffaf0",
    200: "#feebc8",
    300: "#fbd38d",
    400: "#f6ad55",
    500: "#ed8936",
    600: "#dd6b20",
    700: "#c05621",
    800: "#9c4221",
    900: "#7b341e",
  },
  yellow: {
    100: "#fffff0",
    200: "#fefcbf",
    300: "#faf089",
    400: "#f6e05e",
    500: "#ecc94b",
    600: "#d69e2e",
    700: "#b7791f",
    800: "#975a16",
    900: "#744210",
  },
  green: {
    100: "#f0fff4",
    200: "#c6f6d5",
    300: "#9ae6b4",
    400: "#68d391",
    500: "#48bb78",
    600: "#38a169",
    700: "#2f855a",
    800: "#276749",
    900: "#22543d",
  },
  teal: {
    100: "#e6fffa",
    200: "#b2f5ea",
    300: "#81e6d9",
    400: "#4fd1c5",
    500: "#38b2ac",
    600: "#319795",
    700: "#2c7a7b",
    800: "#285e61",
    900: "#234e52",
  },
  blue: {
    100: "#ebf8ff",
    200: "#bee3f8",
    300: "#90cdf4",
    400: "#63b3ed",
    500: "#4299e1",
    600: "#3182ce",
    700: "#2b6cb0",
    800: "#2c5282",
    900: "#2a4365",
  },
  indigo: {
    100: "#ebf4ff",
    200: "#c3dafe",
    300: "#a3bffa",
    400: "#7f9cf5",
    500: "#667eea",
    600: "#5a67d8",
    700: "#4c51bf",
    800: "#434190",
    900: "#3c366b",
  },
  purple: {
    100: "#faf5ff",
    200: "#e9d8fd",
    300: "#d6bcfa",
    400: "#b794f4",
    500: "#9f7aea",
    600: "#805ad5",
    700: "#6b46c1",
    800: "#553c9a",
    900: "#44337a",
  },
  pink: {
    100: "#fff5f7",
    200: "#fed7e2",
    300: "#fbb6ce",
    400: "#f687b3",
    500: "#ed64a6",
    600: "#d53f8c",
    700: "#b83280",
    800: "#97266d",
    900: "#702459",
  },
};

interface Colors {
  primary: string;
  accent: string;

  bg1: string;
  bg2: string;

  textColor: string;
  secondaryTextColor: string;
  tertiaryTextColor: string;

  border: string;
}

export const light: Colors = {
  primary: extendedPalette.red["500"],
  accent: extendedPalette.teal["500"],
  bg1: "#f9fafb",
  bg2: "#ffffff",
  textColor: "#1f1f1f",
  secondaryTextColor: extendedPalette.gray["700"],
  tertiaryTextColor: extendedPalette.gray["600"],
  border: "#d2d6dc",
};

export const dark: Colors = {
  primary: extendedPalette.red["500"],
  accent: extendedPalette.teal["500"],
  bg1: "#1f1f1f",
  bg2: "#26282b",
  textColor: "#f8f8f8",
  secondaryTextColor: extendedPalette.gray["400"],
  tertiaryTextColor: extendedPalette.gray["500"],
  border: "#d2d6dc",
};
