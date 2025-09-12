"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Ensure Lucide is installed
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { FaHome } from "react-icons/fa";
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
  const scrollRef = useRef(null);
  const tabRefs = useRef([]); // <-- Store refs to buttons
  const { text } = useLanguage();

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const navItems = [
    { label: text.links.tabs["Resource Centre"].sm1, link: "/resource-center/" },
    {
      label: text.links.tabs["Resource Centre"].sm2,
      link: "/resource-center/watch-audio-video",
    },
    {
      label: text.links.tabs["Resource Centre"].sm3,
      link: "/resource-center/download-resources",
    },
    {
      label: text.links.tabs["Resource Centre"].sm4,
      link: "/resource-center/connect-to-community",
    },
  ];

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -250 : 250,
      behavior: "smooth",
    });
  };

  // Auto-scroll active tab into view
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

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  return (
    <div className="w-full relative border-gray-200 py-3">
      {/* Left Arrow */}
      {canScrollLeft && (
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center">
          <div className="absolute w-12 h-20 bg-white/60 backdrop-blur-md -left-2 z-[-1]" />
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
      )}

      {/* Scrollable Nav */}
      <div className="scrollbar-visible px-5 sm:px-5 md:px-0 py-2 overflow-x-auto scroll-smooth">
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

      {/* Right Arrow */}
      {canScrollRight && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center">
          <div className="absolute w-12 h-20 bg-white/60 backdrop-blur-md -right-2 z-[-1]" />
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Hide Scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hidden {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}


export default function resourcecenterLayout({ children }) {
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
          <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto pl-0 md:pl-0">
            <Breadcrumb />
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="bg-[#B2917A] py-5 px-4">
        <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto h-20">
          <h1 className="page-big-heading text-white md:text-white tracking-wide">
            {text.links["resource-center"]}
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto">
        <NavigationBar />
      </div>

      {/* Page Content */}
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
            <span>Books</span>
          </a>
          <a
            href="/about"
            className="flex items-center font-bold space-x-2 hover:underline"
          >
            <span>About</span>
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
