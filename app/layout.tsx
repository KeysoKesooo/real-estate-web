import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Marci Metzger | Pahrump Real Estate Expert",
  description: "Experience excellence with Marci Metzger, a premier real estate broker with over 30 years of expertise in the Pahrump Valley and Ridge Realty Group.",
  keywords: ["Pahrump Real Estate", "Mountain Falls Homes", "Marci Metzger", "Ridge Realty Group", "Nevada Broker"],
  
  // Cleaned up for a single icon
  icons: {
    icon: "/favicon.ico", // Replace with your actual filename (e.g., "/logo.png")
    apple: "/apple-icon.png", // Usually safe to use the same if you don't have a specific apple-touch-icon
  },

  openGraph: {
    title: "Marci Metzger | Luxury Pahrump Real Estate",
    description: "30 Years of Excellence. Over $250M in Closed Volume.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}