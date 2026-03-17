import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const linkedInPartnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

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
        {metaPixelId ? (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${metaPixelId}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        ) : null}
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
        {linkedInPartnerId ? (
          <>
            <Script id="linkedin-insight" strategy="afterInteractive">
              {`
                window._linkedin_partner_id = "${linkedInPartnerId}";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(window._linkedin_partner_id);
                (function(l) {
                  if (!l) {
                    window.lintrk = function(a, b) {
                      window.lintrk.q.push([a, b]);
                    };
                    window.lintrk.q = [];
                  }
                  var s = document.getElementsByTagName("script")[0];
                  var b = document.createElement("script");
                  b.type = "text/javascript";
                  b.async = true;
                  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                  s.parentNode.insertBefore(b, s);
                })(window.lintrk);
              `}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://px.ads.linkedin.com/collect/?pid=${linkedInPartnerId}&fmt=gif`}
                alt=""
              />
            </noscript>
          </>
        ) : null}
      </body>
    </html>
  );
}
