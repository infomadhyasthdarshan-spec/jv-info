"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ShoppingCart } from "lucide-react"; // or use any cart icon you prefer
import { MdHome } from "react-icons/md";
import { Home } from "lucide-react"

function generateBreadcrumbsFromPath(pathname) {
  const segments = pathname.split("/").filter((segment) => segment !== "")

  return segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/")
    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    return {
      label,
      href: index === segments.length - 1 ? undefined : href,
    }
  })
}

function Breadcrumb({ items }) {
  const pathname = usePathname()
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname)

  if (pathname === "/") {
    return null
  }

  return (
    <nav className="flex items-center space-x-0 px-4 md:px-0 py-1 bg-white overflow-x-auto">
      <Link href="/" className="text-[#94572b] transition-colors flex-shrink-0">
        <MdHome className="w-6 h-6" />
      </Link>

      {breadcrumbItems.map((item, index) => {
        const isLast = index === breadcrumbItems.length - 1

        return (
          <div key={index} className="flex items-center space-x-1">
            <ChevronRight className="w-4 h-4 text-[#94572b] flex-shrink-0" />

            {isLast ? (
              <span
                className="text-gray-900 font-medium truncate max-w-xs block"
                title={item.label}
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-[#94572b] transition-colors font-medium whitespace-nowrap"
                title={item.label}
              >
                {item.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}

function NavigationBar() {
  const router = useRouter();
  const pathname = usePathname();
  const { text } = useLanguage();
  const tabRefs = useRef([]);

  const navItems = [
    { label: text.links.tabs.Books.sm1, link: "/books/" },
    { label: text.links.tabs.Books.sm2, link: "/books/student-translations" },
  ];

  // Scroll active tab into view
  useEffect(() => {
    const activeIndex = navItems.findIndex(
      (item) => pathname === item.link || pathname.startsWith(item.link + "/")
    );
    const activeTab = tabRefs.current[activeIndex];
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [pathname]);

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between border-gray-200 px-5 sm:px-5 md:px-0 py-5 space-y-2 md:space-y-0">
      {/* Row 1: Tabs */}
      <div className="overflow-x-auto scrollbar-visible">
        <nav className="flex space-x-3 min-w-max">
          {navItems.map((item, index) => {
            let isActive = false;

            if (index === 0) {
              // First tab: only exact match
              isActive = pathname === item.link;
            } else {
              // Other tabs: match if path starts with link
              isActive = pathname === item.link || pathname.startsWith(item.link + "/");
            }

            return (
              <button
                key={index}
                ref={(el) => (tabRefs.current[index] = el)}
                className={`w-48 px-4 h-20 text-sm md:text-md text-wrap max-w-40 md:max-w-48 font-bold rounded-lg transition-colors duration-200 whitespace-nowrap flex-shrink-0 ${isActive ? "bg-[#B2917A] text-white" : "bg-white hover:bg-[#EDE2D1]"
                  }`}
                onClick={() => router.push(item.link)}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Row 2 (Mobile) or Right Side (Desktop): Buy Button */}
      <div className="w-full md:w-auto">
        <a
          href="https://jeevan-vidya.megascale.co.in/shop/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full md:w-48 h-20 bg-[#EEE496] text-black font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[#e5dc85] transition">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-sm md:text-md">Buy Books</span>
          </button>
        </a>
      </div>

      {/* Hide Scrollbar Styling */}
      <style jsx>{`
        .scrollbar-visible {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-visible::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}



export default function BooksLayout({ children }) {
  const { text } = useLanguage();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-[#F2F4F8]">
      {/* Sticky Breadcrumb ONLY */}
      <div className="sticky top-[72px] md:top-[100px] z-20 bg-white">
        <div className="py-3 border-b">
          <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto pl-5 md:pl-0">
            <Breadcrumb />
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="bg-[#B2917A] py-5 px-4">
        <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto h-20">
          <h1 className="page-big-heading text-white md:text-white tracking-wide">
            {text.links.books}
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto">
        <NavigationBar />
      </div>

      {/* Page content */}
      <div>{children}</div>
      <>
        <p
          className="text-center flex items-center justify-center font-bold h-16 sm:hidden bg-white"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Go to top of the page
        </p>
        <nav className="flex justify-between items-center bg-[#f5e9dd] p-4 text-black sm:hidden">
          <a
            href="/books"
            className="flex items-center font-bold space-x-2 hover:underline"
          >
            <span>&larr;</span>
            <span>Workshop</span>
          </a>
          <a
            href="/resource-center"
            className="flex items-center font-bold space-x-2 hover:underline"
          >
            <span>Resource Center</span>
            <span>&rarr;</span>
          </a>
        </nav>
        {showButton && (
          <button
            className="fixed bottom-24 right-6 bg-[#4f4742] text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 sm:hidden"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑
          </button>
        )}
      </>
    </div>
  );
}
