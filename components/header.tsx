"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useBookingModal } from "@/context/booking-modal-context";
import { useSiteSettings } from "@/context/site-settings-context";
import { useCountrySelector, COUNTRY_OPTIONS } from "@/components/country-selector-modal";
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  GraduationCap,
  UserCheck,
  ChevronDown,
  Globe2
} from "lucide-react";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  // If this is a dedicated marketing landing page (/lp, /uae, /usa), suppress the standard navigation bar
  if (
    pathname === "/lp" || pathname.startsWith("/lp/") ||
    pathname === "/uae" || pathname.startsWith("/uae/") ||
    pathname === "/usa" || pathname.startsWith("/usa/")
  ) {
    return null;
  }
  const { openBookingModal, openStudentLoginModal } = useBookingModal();
  const { phone, getPhoneUrl, getWhatsAppUrl, banner_notice, isBannerVisible, whatsapp_display } = useSiteSettings();
  const { openSelector, selectedCountry } = useCountrySelector();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [desktopCoursesOpen, setDesktopCoursesOpen] = useState(false);
  const desktopCoursesRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCoursesMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDesktopCoursesOpen(true);
  };

  const handleCoursesMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setDesktopCoursesOpen(false);
    }, 200);
  };

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopCoursesRef.current && 
        !desktopCoursesRef.current.contains(event.target as Node)
      ) {
        setDesktopCoursesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopCoursesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDesktopCoursesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const courseSubLinks = [
    { href: "/courses", label: "All Courses Overview", badge: "Overview" },
    { href: "/courses/beginner", label: "Beginner (BG1–BG3)", badge: "Ages 5+" },
    { href: "/courses/intermediate", label: "Intermediate (IM1–IM6)", badge: "Tactics" },
    { href: "/courses/advanced", label: "Advanced (ADV 1–3)", badge: "FIDE Prep" },
    { href: "/courses/expert", label: "Expert (EXP 1–6)", badge: "Masters" },
    { href: "/courses/individual", label: "Individual 1-on-1", badge: "Personalized" },
    { href: "/courses/fide-group", label: "FIDE Rating Course", badge: "Elo Cohort" },
  ];

  // Primary navigation according to Launch Brief recommendation:
  // Courses | Rated Players | Coaches | Student Portal | Tournaments | Franchise | About | Contact | Choose Country
  const navLinks = [
    { href: "/courses", label: "Courses" },
    { href: "/achievements", label: "Rated Players" },
    { href: "/about#coaches", label: "Coaches" },
    { href: "/#portal-preview", label: "Student Portal" },
    { href: "/achievements#tournaments", label: "Tournaments" },
    { href: "/franchise", label: "Franchise" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
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
                  <span className="hidden sm:inline">AIM Chess Academy · International Online Chess Education · FIDE Certified Trainers</span>
                  <span className="sm:hidden truncate">AIM Chess Academy · International Online Coaching</span>
                </>
              )}
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 text-xs shrink-0">
            <button
              onClick={openSelector}
              type="button"
              className="hidden md:inline-flex items-center gap-1 text-[#ffe80a] hover:text-white transition-colors font-bold text-xs cursor-pointer"
            >
              <Globe2 className="w-3.5 h-3.5 text-[#00aeef]" />
              <span>Choose Country: {selectedCountry.flag} {selectedCountry.name}</span>
            </button>
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

          {/* Center (Mobile & Tablet): Compact Functional Country Selector per launch brief */}
          <div className="flex xl:hidden items-center justify-center min-w-0 mx-1 xs:mx-2">
            <button
              type="button"
              onClick={openSelector}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#00aeef]/40 bg-white/95 hover:bg-sky-50 shadow-xs text-xs font-bold text-[#042047] cursor-pointer"
              title="Select your country and timezone"
            >
              <span className="text-sm">{selectedCountry.flag}</span>
              <span className="text-[11px] font-black">{selectedCountry.name}</span>
              <ChevronDown className="w-3 h-3 text-[#00aeef]" />
            </button>
          </div>

          {/* Center: Main Navigation in Pill Structure with Logo Colors */}
          <div 
            className={`hidden xl:flex items-center rounded-full px-2.5 2xl:px-4 py-1.5 shadow-xs bg-slate-50/80 backdrop-blur-sm transition-all duration-300 ${
              isScrolled
                ? "border-2 border-[#00aeef]"
                : "border-2 border-[#042047]/15"
            }`}
          >
            <nav className="flex items-center space-x-1 2xl:space-x-2.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href === "/courses" && pathname.startsWith("/courses"));

                if (link.href === "/courses") {
                  return (
                    <div 
                      key={link.href} 
                      ref={desktopCoursesRef}
                      className="relative group/courses"
                      onMouseEnter={handleCoursesMouseEnter}
                      onMouseLeave={handleCoursesMouseLeave}
                    >
                      <button
                        type="button"
                        onClick={() => setDesktopCoursesOpen((prev) => !prev)}
                        aria-expanded={desktopCoursesOpen}
                        aria-haspopup="true"
                        aria-label="Toggle courses menu"
                        className={`transition-colors duration-150 whitespace-nowrap text-[12px] xl:text-[12.5px] 2xl:text-[13.5px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 cursor-pointer select-none ${
                          isActive || desktopCoursesOpen
                            ? "text-white bg-[#042047] shadow-xs"
                            : "text-[#042047] hover:text-[#00aeef] hover:bg-white"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown 
                          className={`w-3 h-3 opacity-70 transition-transform duration-200 ${
                            desktopCoursesOpen ? "rotate-180" : "group-hover/courses:rotate-180"
                          }`} 
                        />
                      </button>

                      {/* Dropdown Menu Container with seamless zero-gap bridge */}
                      <div 
                        className={`absolute top-full left-0 pt-2 w-72 z-50 transition-all duration-200 ${
                          desktopCoursesOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto visible"
                            : "opacity-0 translate-y-1 pointer-events-none invisible group-hover/courses:opacity-100 group-hover/courses:translate-y-0 group-hover/courses:pointer-events-auto group-hover/courses:visible"
                        }`}
                      >
                        {/* Visual Card with pseudo-element top bridge */}
                        <div className="relative bg-[#042047] border-2 border-[#00aeef] rounded-2xl p-2 shadow-2xl before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']">
                          <div className="space-y-1 text-left">
                            {courseSubLinks.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setDesktopCoursesOpen(false)}
                                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-white hover:bg-white/10 hover:text-[#ffe80a] transition-colors"
                              >
                                <span>{sub.label}</span>
                                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-[#00aeef]/30 text-[#00aeef]">
                                  {sub.badge}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors duration-150 whitespace-nowrap text-[12px] xl:text-[12.5px] 2xl:text-[13.5px] font-bold px-2 py-1 rounded-full ${
                      isActive 
                        ? "text-white bg-[#042047] shadow-xs"
                        : "text-[#042047] hover:text-[#00aeef] hover:bg-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Functional Choose Country button in desktop navbar */}
              <button
                type="button"
                onClick={openSelector}
                className="transition-colors duration-150 whitespace-nowrap text-[12px] xl:text-[12.5px] 2xl:text-[13.5px] font-black px-2.5 py-1 rounded-full text-[#042047] hover:text-[#00aeef] hover:bg-white flex items-center gap-1 cursor-pointer bg-sky-50/80 border border-[#00aeef]/30"
                title="Select country and timezone"
              >
                <span>{selectedCountry.flag}</span>
                <span className="hidden 2xl:inline">{selectedCountry.name}</span>
                <Globe2 className="w-3.5 h-3.5 text-[#00aeef]" />
              </button>
            </nav>
          </div>

          {/* Right: Student Login + Book Free Assessment CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-2 2xl:space-x-3 shrink-0">
            <a
              href="https://classroom.aimchessacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#042047] hover:bg-[#082b5d] text-white font-bold px-3.5 2xl:px-4 py-2 rounded-full text-xs 2xl:text-sm border border-[#00aeef]/40 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#ffe80a]" />
              <span>Student Login</span>
            </a>

            <button
              onClick={() => openBookingModal()}
              type="button"
              className="inline-flex items-center gap-1.5 bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black px-3.5 2xl:px-4.5 py-2 rounded-full text-xs 2xl:text-sm border-2 border-[#042047] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <GraduationCap className="w-4 h-4 shrink-0 text-[#042047]" />
              <span>Book Free Assessment</span>
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
            
            {/* Mobile Country Selector Quick Card */}
            <div className="mb-2 p-3 rounded-2xl bg-sky-50/90 border border-[#00aeef]/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{selectedCountry.flag}</span>
                <div>
                  <div className="text-[10px] uppercase font-black text-[#0c71c3] tracking-wider">Your Region &amp; Timezone</div>
                  <div className="text-xs font-black text-[#042047]">{selectedCountry.name} · {selectedCountry.timezones}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openSelector();
                }}
                className="px-3 py-1 rounded-lg bg-[#042047] text-white text-[11px] font-bold hover:bg-[#00aeef] transition-colors cursor-pointer"
              >
                Change
              </button>
            </div>

            <div className="grid grid-cols-1 gap-1 max-h-[55vh] overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href === "/courses" && pathname.startsWith("/courses"));

                if (link.href === "/courses") {
                  return (
                    <div key={link.href} className="space-y-1">
                      <div className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold bg-slate-50 text-[#042047]">
                        <Link
                          href="/courses"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex-1 hover:text-[#00aeef]"
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                          className="p-1 text-[#042047] hover:text-[#00aeef] cursor-pointer"
                          aria-label="Toggle Course Levels"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCoursesOpen ? "rotate-180" : ""}`} />
                        </button>
                      </div>

                      {mobileCoursesOpen && (
                        <div className="pl-3 pr-1 py-1 space-y-1">
                          {courseSubLinks.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-sky-50"
                            >
                              <span>{sub.label}</span>
                              <span className="text-[10px] font-black uppercase text-[#0c71c3]">{sub.badge}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

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
              <a
                href="https://classroom.aimchessacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#042047] hover:bg-[#092c5c] text-white font-bold py-3 rounded-full text-sm shadow-md transition-colors cursor-pointer border border-[#00aeef]/40"
              >
                <UserCheck className="w-4 h-4 text-[#ffe80a]" />
                <span>Student & Parent Login</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal();
                }}
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-[#ffe80a] hover:bg-[#fed100] text-[#042047] font-black py-3 rounded-full text-sm shadow-md transition-colors cursor-pointer border-2 border-[#042047]"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Book a Free Assessment</span>
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
