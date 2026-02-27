import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bruno Belloso — Full Stack Developer",
  description:
    "Portfolio personal de Bruno Belloso, desarrollador Full Stack especializado en Next.js, Node.js, Python y automatización con IA.",
  keywords: ["Full Stack Developer", "Next.js", "Python", "AI", "Automation", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
