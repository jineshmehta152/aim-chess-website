"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { GA_MEASUREMENT_ID, GTM_ID, trackPageView } from "@/lib/analytics";

export default function Ga4Tracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname]);

  return (
    <>
      {/* 1. Google Analytics 4 (GA4) */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `}
          </Script>
        </>
      )}

      {/* 2. Google Tag Manager (GTM) */}
      {GTM_ID && (
        <Script id="google-tag-manager-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      )}
    </>
  );
}
