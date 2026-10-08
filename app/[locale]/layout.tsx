import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import Header from "@/components/header";
import StickyWhatsApp from "@/components/sticky-whatsapp";
import BookingModal from "@/components/booking-modal";
import Ga4Tracker from "@/components/ga4-tracker";
import { BookingModalProvider } from "@/context/booking-modal-context";
import { SiteSettingsProvider } from "@/context/site-settings-context";
import { routing } from "@/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export const viewport: Viewport = {
  themeColor: "#042047",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;

  if (!routing.locales.includes(locale as any)) {
    return {};
  }

  const t = await getTranslations({
    locale,
    namespace: "metadata",
  });

  return {
    title: t("title") || "Aim Chess Academy | Unleash Your Inner Grandmaster with Aim Chess Academy",
    description: t("description") || "Empowering children's minds through structured chess coaching, FIDE certified trainers, monthly practice tournaments, and ISO certified curriculum. Book a free demo class today!",
    metadataBase: new URL("https://aimchessacademy.com"),
    icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
    alternates: {
      canonical: "/",
      languages: {
        en: "/",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("ogDescription"),
      url: "https://aimchessacademy.com",
      siteName: "AIM Chess Academy",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "AIM Chess Academy",
        },
      ],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  // Structured Data Schema for Educational Organization & Local SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Aim Chess Academy",
    "image": "https://aimchessacademy.com/logo.png",
    "telephone": "+91 99034 52493",
    "email": "contact@aimchessacademy.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nabapally, Choto Bazar, Surendranath Colony",
      "addressLocality": "Barasat",
      "postalCode": "700126",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "url": "https://aimchessacademy.com",
    "priceRange": "₹1600 - ₹2600 / month",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "20:30"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100083211338280",
      "https://www.instagram.com/aimchessacademy/",
      "https://www.linkedin.com/in/soumen-banerjee-43532b1ab/",
      "https://www.youtube.com/@Aimchessacademy",
      "https://g.co/kgs/y9aG7qE"
    ]
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SiteSettingsProvider>
        <BookingModalProvider>
          <div className="flex min-h-screen flex-col bg-[#f8fafc] text-[#042047] antialiased selection:bg-[#ffe80a] selection:text-[#042047]">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <StickyWhatsApp />
            <BookingModal />
            <Ga4Tracker />
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
        </BookingModalProvider>
      </SiteSettingsProvider>
    </NextIntlClientProvider>
  );
}