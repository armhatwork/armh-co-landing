'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag: any;
  }
}

export default function GoogleAnalytics({ GA_ID }: { GA_ID: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID) return;

    // Load gtag script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = window.gtag || function () {
      (window.gtag.q = window.gtag.q || []).push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, {
      page_path: window.location.pathname,
    });

    return () => {
      document.head.removeChild(script);
    };
  }, [GA_ID]);

  useEffect(() => {
    if (!GA_ID || !window.gtag) return;

    const url = pathname + searchParams.toString();
    window.gtag('config', GA_ID, {
      page_path: url,
    });
  }, [pathname, searchParams, GA_ID]);

  return null;
}
