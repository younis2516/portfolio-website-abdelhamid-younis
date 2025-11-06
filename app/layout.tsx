import ConditionalHeader from '@/components/ConditionalHeader'
import ConditionalBackground from '@/components/ConditionalBackground'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active_section_context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import ThemeSwitch from '@/components/ThemeSwitch'
import { ThemeProvider } from '@/context/theme-context'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abdelhamid portfolio',
  description: `Based in 📍Vienna. Beside 6 years of experience as a UX/UI designer. Did master studies in HCI at University of Salzburg and took challenging responsibilities early on in my career as a solo product designer in Hotelkit, and Tubics in Austria, which exposed me to unconventional ways to prototyping, minimum viable user testing, low code development, and jumping between a UX design and research role. Beside this I studied engineering for my bachelor, that made me a problem solver by nature. Now working with an awesome team @ REWE International (the biggest retailer in Europe) to design their self-checkout and point-of-sale devices. Beside product design, I am coding since 2 years and now i am working as a part-time frontend developer intern at www.suplyd.com⁠ `,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 pl-0 pr-0`}>
        <ConditionalBackground />
        <ThemeProvider>
          <ActiveSectionContextProvider>
          <ConditionalHeader />
          {children}
          <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch/>
        </ActiveSectionContextProvider>
        <SpeedInsights />
                <Analytics />

        </ThemeProvider>
        
      </body>
    </html>
  )
}
