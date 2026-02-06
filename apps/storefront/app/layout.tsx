import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Nagel Paul - Ihr Fachhandel für Befestigungstechnik",
    template: "%s | Nagel Paul",
  },
  description:
    "Nagel Paul - Ihr zuverlässiger Partner für professionelle Befestigungstechnik. Nägel, Schrauben, Klammern und innovative LignoLoc Holznägel für Handwerk und Industrie.",
  keywords: [
    "Befestigungstechnik",
    "Nägel",
    "Schrauben",
    "Klammern",
    "LignoLoc",
    "Holznägel",
    "Nagel Paul",
    "Handwerk",
    "Industrie",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
