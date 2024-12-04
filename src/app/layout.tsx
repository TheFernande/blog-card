import "./globals.css";
import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
