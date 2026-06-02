import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Selmasi | Smart Business Automation",
  description:
    "Selmasi helps schools and businesses automate follow-ups, reduce delays, improve response time, and build practical systems for growth.",
  keywords: "business automation, school automation, follow-up automation, South Africa",
  openGraph: {
    title: "Selmasi | Smart Business Automation",
    description:
      "Practical automation solutions for schools and growing businesses. Automate follow-ups, reduce delays, and build systems that support real growth.",
    url: "https://selmasi.africa",
    siteName: "Selmasi",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selmasi | Smart Business Automation",
    description:
      "Practical automation solutions for schools and growing businesses.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://selmasi.africa"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
