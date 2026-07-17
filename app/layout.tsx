import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ruhoneycomb.com"),

  title: {
    default: "RU Honeycomb Industries",
    template: "%s | RU Honeycomb Industries",
  },

  description:
    "RU Honeycomb Industries is a leading manufacturer of premium Honeycomb Cooling Pads for industrial, commercial, and agricultural cooling applications.",

  keywords: [
    "Honeycomb Cooling Pad",
    "Cooling Pad Manufacturer",
    "Honeycomb Pad",
    "Cooling Pads India",
    "Industrial Cooling",
    "Evaporative Cooling",
    "RU Honeycomb Industries",
  ],

  authors: [{ name: "RU Honeycomb Industries" }],

  creator: "RU Honeycomb Industries",

  openGraph: {
    title: "RU Honeycomb Industries",
    description:
      "Premium Honeycomb Cooling Pad Manufacturer in India",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="font-sans bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}