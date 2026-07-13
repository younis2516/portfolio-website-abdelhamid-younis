import ConditionalHeader from "@/components/ConditionalHeader";
import ConditionalBackground from "@/components/ConditionalBackground";
import "./globals.css";
import { Inter, Fraunces, Geist, Geist_Mono } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active_section_context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import { ThemeProvider } from "@/context/theme-context";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { PortfolioProvider } from "@/context/PortfolioContext";
import { ChatProvider } from "@/context/ChatContext";
import { PageSectionsProvider } from "@/context/PageSectionsContext";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

// Soft Structuralism design system — used only on the landing page (`.ss-page`),
// registered here as CSS variables since next/font requires a server component.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Younis Abdelhamid — Senior Product Designer & UX Engineer",
  description: "Senior Product Designer with 7+ years shipping enterprise UX at scale — self-checkout systems, AI products, and design systems for REWE Group and startups. Based in Vienna, Austria.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`!scroll-smooth ${fraunces.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className={`${inter.className} bg-white text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 pl-0 pr-0`}
      >
        <ConditionalBackground />
        <ThemeProvider>
          <ActiveSectionContextProvider>
            <PortfolioProvider>
              <ChatProvider>
                <PageSectionsProvider>
                  <ConditionalHeader />
                  {children}
                  <Footer />
                  <Toaster position="top-right" />
                  <ThemeSwitch />
                  <ChatWidget />
                </PageSectionsProvider>
              </ChatProvider>
            </PortfolioProvider>
          </ActiveSectionContextProvider>
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
