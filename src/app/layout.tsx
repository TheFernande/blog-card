import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import "./globals.css";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Card",
  description: "Blog Card Component",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
