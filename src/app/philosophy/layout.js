"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { notFound } from "next/navigation";

import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react"; // You can use any icon or SVG
import { wrapHindiWords } from '@/utils/fontInjector';

const Breadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    {
      name: "Home",
      href: "/",
    },
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
          <div key={crumb.href} className="flex items-center">
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
  const { text } = useLanguage();
  const tabRefs = useRef([]);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const navItems = [
    { label: text.links.tabs.Philosophy.sm1, link: "/philosophy/in-brief" },
    { label: text.links.tabs.Philosophy.sm2, link: "/philosophy/origins" },
    { label: text.links.tabs.Philosophy.sm4, link: "/philosophy/key-discoveries" },
    { label: text.links.tabs.Philosophy.sm5, link: "/philosophy/literature" },
    { label: text.links.tabs.Philosophy.sm6, link: "/philosophy/explore-concepts" },
  ];

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

  // Scroll the active tab into view
  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => {
      return pathname === item.link || pathname.startsWith(item.link + "/");
    });
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
      {canScrollLeft && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center">
          <div className="absolute w-14 h-20 bg-white/60 backdrop-blur-md -left-3 z-[-1]" />
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
      )}

      <div
        ref={scrollRef}
        className="scrollbar-visible px-5 sm:px-5 md:px-0 py-2 overflow-x-auto scroll-smooth"
      >
        <nav className="flex space-x-3 min-w-max">
          {navItems.map((item, index) => {
            const matchesCurrentTab =
              pathname === item.link || pathname.startsWith(item.link + "/");

            // Active tab logic
            const isActive =
              matchesCurrentTab ||
              // Fallback: if we're in /philosophy but none of the defined tabs matched,
              // then highlight the first tab as default
              (index === 0 &&
                pathname.startsWith("/philosophy") &&
                !navItems.some(
                  (nav) =>
                    pathname === nav.link || pathname.startsWith(nav.link + "/")
                ));

            return (
              <button
                key={index}
                ref={(el) => (tabRefs.current[index] = el)}
                className={`w-48 px-4 h-20 text-sm md:text-md text-wrap max-w-40 md:max-w-48 font-bold rounded-lg transition-colors duration-200 whitespace-nowrap flex-shrink-0 ${isActive
                    ? "bg-[#B2917A] text-white"
                    : "bg-white hover:bg-[#EDE2D1]"
                  }`}
                onClick={() => router.push(item.link)}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {canScrollRight && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center">
          <div className="absolute w-14 h-20 bg-white/60 backdrop-blur-md -right-3 z-[-1]" />
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

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


export default function PhilosophyLayout({ children }) {
  const { text } = useLanguage();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    wrapHindiWords();
  }, []);

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
          <h1 className="page-big-heading text-white tracking-wide">
            {text.links.philosophy}
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto">
        <NavigationBar />
      </div>

      {/* Page Content */}
      <div className="overflow-hidden">{children}</div>
      <>
        <p
          className="text-center flex items-center justify-center font-bold h-16 sm:hidden bg-white"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Go to top of the page
        </p>
        <nav className="flex justify-between items-center bg-[#f5e9dd] p-4 text-black sm:hidden">
          <a
            href="/philosophy/in-brief"
            className="flex items-center font-bold space-x-2 hover:underline"
          >
            <span>&larr;</span>
            <span>Workshop</span>
          </a>
          <a
            href="/books"
            className="flex items-center font-bold space-x-2 hover:underline"
          >
            <span>Books</span>
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
