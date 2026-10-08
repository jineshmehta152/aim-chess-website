import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://aimchessacademy.com"),
  title: "Aim Chess Academy | Unleash Your Inner Grandmaster with Aim Chess Academy",
  description: "Empowering children's minds through structured chess coaching, FIDE certified trainers, monthly practice tournaments, and ISO certified curriculum. Book a free demo class today!",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen bg-[#f8fafc] text-[#042047] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}