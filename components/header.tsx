"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  GraduationCap
} from "lucide-react";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const { openBookingModal } = useBookingModal();
  const { phone, getPhoneUrl, getWhatsAppUrl, banner_notice, isBannerVisible, whatsapp_display } = useSiteSettings();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("home") || "Home" },
    { href: "/about", label: t("about") || "About Us" },
    { href: "/courses", label: t("courses") || "Courses Offered" },
    { href: "/achievements", label: "Achievements" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: t("gallery") || "Gallery" },
    { href: "/faq", label: t("faq") || "FAQs" },
    { href: "/contact", label: t("contact") || "Contact Us" },
  ];

  return (
    <>
      {/* Top Notification Bar - Deep Navy with Bright Yellow Accent */}
      <div className="bg-[#042047] text-white text-[11px] sm:text-xs md:text-sm py-1.5 px-3 sm:px-4 border-b border-[#00aeef]/30">
        <div className="max-w-[1380px] mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center min-w-0">
            <span className="flex items-center gap-1.5 font-medium truncate">
              <Sparkles className="w-3.5 h-3.5 text-[#ffe80a] animate-pulse shrink-0" />
              {isBannerVisible && banner_notice ? (
                <span className="text-white/95 font-medium truncate">{banner_notice}</span>
              ) : (
                <>
                  <span className="hidden sm:inline">AIM Chess Academy · Empowering Children&apos;s Minds · FIDE Certified Trainers</span>
                  <span className="sm:hidden truncate">AIM Chess Academy · Online & Offline</span>
                </>
              )}
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 text-xs shrink-0">
            <a 
              href={getPhoneUrl()} 
              className="hidden md:flex items-center gap-1 text-[#00aeef] hover:text-[#ffe80a] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{phone}</span>
            </a>
            <a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-[#00aeef] hover:bg-[#009cd7] text-white font-bold px-2.5 sm:px-3 py-0.5 rounded-full transition-colors shadow-xs text-[11px] sm:text-xs"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "py-2 sm:py-2.5 px-3 sm:px-6" 
            : "py-2.5 sm:py-3 px-3 sm:px-6 lg:px-8 bg-white/95 backdrop-blur-md border-b border-slate-100/90 shadow-xs"
        }`}
      >
        <div 
          className={`max-w-[1440px] mx-auto flex items-center justify-between gap-1.5 2xl:gap-4 transition-all duration-300 ${
            isScrolled 
              ? "bg-white/98 backdrop-blur-md border border-[#00aeef]/30 rounded-full px-3.5 sm:px-6 2xl:px-8 py-1.5 sm:py-2 shadow-xl shadow-[#042047]/5" 
              : ""
          }`}
        >
          
          {/* Left: Official AIM Chess Academy Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-9 xs:h-10 sm:h-12 w-auto flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="AIM Chess Academy Logo" 
                  width={180} 
                  height={180} 
                  className="h-9 xs:h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center: Main Navigation in Pill Structure with Logo Colors */}
          <div 
            className={`hidden xl:flex items-center rounded-full px-3 2xl:px-5 py-1.5 shadow-xs bg-slate-50/80 backdrop-blur-sm transition-all duration-300 ${
              isScrolled
                ? "border-2 border-[#00aeef]"
                : "border-2 border-[#042047]/15"
            }`}
          >
            <nav className="flex items-center space-x-1.5 2xl:space-x-3.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors duration-150 whitespace-nowrap text-[12px] xl:text-[12.5px] 2xl:text-[14px] font-bold px-2 py-1 rounded-full ${
                      isActive 
                        ? "text-white bg-[#042047] shadow-xs"
                        : "text-[#042047] hover:text-[#00aeef] hover:bg-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: Enroll For Free Demo CTA Button */}
          <div className="hidden sm:flex items-center space-x-2 2xl:space-x-3 shrink-0">
            <button
              onClick={() => openBookingModal()}
              type="button"
              className="inline-flex items-center gap-1.5 bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black px-4 2xl:px-5 py-2 rounded-full text-xs 2xl:text-sm border-2 border-[#042047] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <GraduationCap className="w-4 h-4 shrink-0 text-[#042047]" />
              <span>{t("bookNow") || "Book Free Demo"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#042047] hover:bg-sky-50 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#00aeef]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/98 backdrop-blur-md border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200 shadow-xl rounded-b-3xl mt-2 border border-[#00aeef]/20">
            <div className="grid grid-cols-1 gap-1 max-h-[60vh] overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                      isActive 
                        ? "bg-[#042047] text-white" 
                        : "text-[#042047] hover:bg-sky-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal();
                }}
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black py-3 rounded-full text-sm shadow-md transition-colors cursor-pointer border-2 border-[#042047]"
              >
                <GraduationCap className="w-4 h-4" />
                <span>{t("bookNow") || "Book Free Demo"}</span>
              </button>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 border-2 border-[#042047] bg-white hover:bg-[#042047] hover:text-white text-[#042047] font-bold py-3 rounded-full text-sm shadow-sm transition-colors"
              >
                <span>{t("contact") || "Contact Us"}</span>
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#00aeef] hover:bg-[#009cd7] text-white font-bold py-2.5 rounded-full text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {whatsapp_display || phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
