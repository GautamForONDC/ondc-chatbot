import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter from Google Fonts
import "./globals.css";

// Configure the Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Use --font-sans for simplicity
});

// We remove the Geist Mono import as it's not strictly needed here

export const metadata: Metadata = {
  title: "ONDC Policy Chatbot", // Updated title
  description: "A specialized chatbot using Gemini for ONDC policy queries.", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // Apply the Inter font variable globally
        className={`${inter.variable} font-sans antialiased`} 
      >
        {children}
      </body>
    </html>
  );
}
