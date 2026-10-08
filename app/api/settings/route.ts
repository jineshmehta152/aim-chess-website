import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const DEFAULT_SETTINGS: Record<string, string> = {
  phone: "+91 99034 52493",
  whatsapp: "919903452493",
  whatsapp_display: "+91 99034 52493",
  email: "contact@aimchessacademy.com",
  address: "Nabapally, Choto Bazar, Surendranath Colony, Barasat - 700126, Kolkata, WB, India",
  opening_hours: "Monday to Sunday: 9:00 AM - 8:30 PM (Online & Offline Batches)",
  instagram: "@aimchessacademy",
  instagram_url: "https://www.instagram.com/aimchessacademy/",
  facebook_url: "https://www.facebook.com/profile.php?id=100083211338280",
  youtube_url: "https://www.youtube.com/@Aimchessacademy",
  linkedin_url: "https://www.linkedin.com/in/soumen-banerjee-43532b1ab/",
  banner_notice: "🏆 Admissions Open for New Batch! Book a Free Demo Session Today.",
  banner_active: "true",
};

export async function GET() {
  return NextResponse.json({
    success: true,
    data: DEFAULT_SETTINGS,
  });
}

