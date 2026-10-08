import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames and exclude internal Next.js assets/APIs
  matcher: ["/", "/(ca|es|en)/:path*", "/((?!_next|_vercel|api|.*\\..*).*)"],
};