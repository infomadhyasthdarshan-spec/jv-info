import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { LanguageProvider } from '@/context/LanguageContext'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Madhyasth Darshan",
  description: "Madhyasth Darshan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/LogoS.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="https://use.typekit.net/jwh2kpq.css"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F2F4F8]`}
      >
        <LanguageProvider>
          <div>
            <div className="sticky top-0 z-30 bg-white shadow">
              <Navbar />
            </div>

            <main className="">
              {children}
            </main>

            <Footer />
          </div>
        </LanguageProvider>
        {/* <LanguageProvider>
          <div>
            <div className="sticky top-0 z-30">
              <Navbar />
            </div>
          </div>
          <>
            {children}
          </>
          <Footer />
        </LanguageProvider> */}
      </body>
    </html>
  );
}
