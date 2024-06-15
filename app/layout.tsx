import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const inter = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pronity",
  description: "Create the best with happiness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "#000"}}>{children}</body>
    </html>
  );
}
