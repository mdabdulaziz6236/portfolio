import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Sora as FontDisplay,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans-family",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono-family",
});

export const fontDisplay = FontDisplay({
  subsets: ["latin"],
  variable: "--font-display-family",
  weight: ["500", "600", "700", "800"],
});
