import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sector-32.aihp.in"),
  title: "Office Space for Rent in Sector 32 Gurgaon | AIHP Managed Workspaces",
  description: "Premium managed office spaces in Sector 32, Gurgaon. 20 to 500+ seats. Zero capex, move-in ready in 60 days. Book a free site visit with AIHP today.",
  openGraph: {
    title: "Office Space for Rent in Sector 32 Gurgaon | AIHP",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
