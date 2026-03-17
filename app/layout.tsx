import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

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
        {googleAnalyticsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
