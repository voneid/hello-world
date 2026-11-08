import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VZenPoint products",
  description:
    "Creating our own identity in providing services for a better tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
