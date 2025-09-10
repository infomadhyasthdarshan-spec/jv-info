"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const Breadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    ...segments.map((segment, i) => ({
      name: segment.replace(/-/g, " "),
      href: "/" + segments.slice(0, i + 1).join("/"),
    })),
  ];

  return (
    <nav className="flex items-center text-sm  ">
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <div key={crumb.href} className="flex items-center z-50">
            <Link
              href={crumb.href}
              className={`capitalize ${isLast
                  ? "  font-th"
                  : "text-[#B2917A] hover:text-[#B2917A95] font-extrabold font-th"
                }`}
            >
              {crumb.name}
            </Link>
            {/* Render arrow after every item except the last */}
            {!isLast && (
              <ChevronRight className="w-4 h-4 mx-2 text-[#B2917A]" />
            )}
          </div>
        );
      })}
    </nav>
  );
};

function NavigationBar() {
  const router = useRouter();
  const pathname = usePathname();
  const scrollRef = useRef(null);
  const tabRefs = useRef([]);
  const { text } = useLanguage();

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const navItems = [
    { label: text.links.tabs.About.sm1, link: "/about/" },
    { label: text.links.tabs.About.sm2, link: "/about/authors-testimony" },
    { label: text.links.tabs.About.sm3, link: "/about/vision-for-world" },
    {
      label: text.links.tabs.About.sm4,
      link: "/about/impact-in-education-and-society",
    },
    { label: text.links.tabs.About.sm5, link: "/about/about-a-nagraj" },
    { label: text.links.tabs.About.sm8, link: "/about/contact-us" },
  ];
  // { label: text.links.tabs.About.sm7, link: '/about/our-centers' },

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -250 : 250,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll to selected tab on pathname change
  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => item.link === pathname);
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
        <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center">
          <div className="absolute w-14 h-20 bg-white/60 backdrop-blur-md -left-3 z-[-1]" />
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
      )}

      {/* Scrollable Tabs */}
      <div
        ref={scrollRef}
        className="scrollbar-visible px-5 sm:px-5 md:px-0 py-2 overflow-x-auto scroll-smooth"
      >
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
        <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center">
          <div className="absolute w-14 h-20 bg-white/60 backdrop-blur-md -right-3 z-[-1]" />
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

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

export default function AboutLayout({ children }) {
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
      <div className="sticky top-[72px] z-20 bg-white">
        <div className="py-3 border-b">
          <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto pl-5 md:pl-0">
            <Breadcrumb />
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="bg-[#B2917A] py-5 px-4">
        <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto h-20">
          <h1 className="page-big-heading font-semibold text-white font-ssr tracking-wide">
            {text.links.about}
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto">
        <NavigationBar />
      </div>

      {/* Content */}
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
            href="/resource-center"
            className="flex items-center font-bold space-x-2 hover:underline"
          >
            <span>&larr;</span>
            <span>Resource Center</span>
          </a>
          <a
            href="/"
            className="flex items-center font-bold space-x-2 hover:underline"
          >
            <span>Home</span>
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
