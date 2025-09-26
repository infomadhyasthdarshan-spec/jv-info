'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import { usePathname, useRouter } from 'next/navigation'
import { IoClose } from 'react-icons/io5'
import searchIndex from '@/services/searchIndex'
import { useLanguage } from '@/context/LanguageContext'
import { wrapHindiWords } from '@/utils/fontInjector';
import pagesIndex from '../../../public/pages-index.json'
import { FaTimes, FaPlus, FaChartBar, FaShoppingCart, FaTags, FaArrowUp, FaArrowDown,FaEllipsisH } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const { language, toggleLanguage, text } = useLanguage();

  const searchRef = useRef(null)
  const mobileSearchRef = useRef(null)
  const modalBoxRef = useRef(null);

  const navigationGroups = [
    {
      id: 1,
      data: [
        { href: "/workshop", icon: "/icon/menus/Menu1-US.svg", selectedIcon: "/icon/menus/Menu1-SE.svg", label: "Workshop", match: "workshop" },
        { href: "/about", icon: "/icon/menus/Menu2-US.svg", selectedIcon: "/icon/menus/Menu2-SE.svg", label: "About", match: "about" },
      ],
      color: "#94562B",
      title: "BEGIN",
    },
    {
      id: 2,
      data: [
        {
          href: "/philosophy/in-brief",
          icon: "/icon/menus/Menu3-US.svg",
          selectedIcon: "/icon/menus/Menu3-SE.svg",
          label: "Philosophy",
          match: "philosophy",
        },
      ],
      color: "#B47447",
      title: "EXPLORE",
    },
    {
      id: 3,
      data: [
        { href: "/books", icon: "/icon/menus/Menu4-US.svg", selectedIcon: "/icon/menus/Menu4-SE.svg", label: "Books", match: "books" },
        { href: "/resource-center", icon: "/icon/menus/Menu5-US.svg", selectedIcon: "/icon/menus/Menu5-SE.svg", label: "Resources", match: "resource-center" },
      ],
      color: "#B2917A",
      title: "STUDY",
    },
    {
      id: 4,
      data: [
        {
          href: "https://jv-org.vercel.app/",
          icon: "/icon/menus/Menu6-US.svg",
          selectedIcon: "/icon/menus/Menu6-SE.svg",
          label: "मध्यस्थ दर्शन",
          external: true,
        },
      ],
      color: "#C1B6A3",
      title: "ORIGINALS",
    },
  ]

  useEffect(() => {
    wrapHindiWords();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDesktopSearchClick = searchRef.current && searchRef.current.contains(event.target);
      const isMobileSearchClick = mobileSearchRef.current && mobileSearchRef.current.contains(event.target);

      if (!isDesktopSearchClick && !isMobileSearchClick) {
        setSearchTerm('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Handle Escape key
useEffect(() => {
    const handleKeys = (event) => {
      // ESC = close
      if (event.key === "Escape") {
        setSearchTerm("");
        setMobileSearchOpen(false);
      }
    };
    
    console.log("event")
    document.addEventListener("keydown", handleKeys);
    return () => {
      document.removeEventListener("keydown", handleKeys);
    };
  }, [setMobileSearchOpen, setSearchTerm]);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileSearchOpen &&
        modalBoxRef.current &&
        !modalBoxRef.current.contains(event.target)
      ) {
        setSearchTerm("");
        setMobileSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileSearchOpen, setMobileSearchOpen, setSearchTerm]);

const handleMobileResultClick = (href) => {
  const term = searchTerm; // Save current search term
  setSearchTerm(''); // Clear input
  setMobileSearchOpen(false); // Close overlay
  if (href.startsWith('http')) {
    window.location.href = href; // Handle external links
  } else {
    router.push(`${href}?search=${encodeURIComponent(term)}`); // Handle internal routes
  }
};


  // const getSnippet = (content, term, snippetLength = 30) => {
  //   const index = content.toLowerCase().indexOf(term.toLowerCase());
  //   if (index === -1) return '';

  //   const start = Math.max(0, index - snippetLength);
  //   const end = Math.min(content.length, index + term.length + snippetLength);

  //   const snippet = content.substring(start, end).replace(/\n/g, ' ');

  //   const regex = new RegExp(`(${term})`, 'gi');
  //   const highlighted = snippet.replace(regex, '<mark>$1</mark>');

  //   return (start > 0 ? '...' : '') + highlighted + (end < content.length ? '...' : '');
  // };


  const getSnippet = (content, term, snippetLength = 40) => {
  if (!content) return '';

  const lowerContent = content.toLowerCase();
  const lowerTerm = term.toLowerCase();
  let startIndex = lowerContent.indexOf(lowerTerm);
  if (startIndex === -1) return '';

  const start = Math.max(0, startIndex - snippetLength);
  const end = Math.min(content.length, startIndex + term.length + snippetLength);
  let snippet = content.substring(start, end).replace(/\n/g, ' ');

  // Highlight all occurrences of the search term
  const regex = new RegExp(`(${term})`, 'gi');
  snippet = snippet.replace(regex, '<mark class="bg-yellow-200 text-yellow-800">$1</mark>');

  return (start > 0 ? '...' : '') + snippet + (end < content.length ? '...' : '');
};


  const filteredResults = pagesIndex
    .filter(item =>
      item?.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.route?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map(item => ({
      ...item,
      snippet: getSnippet(item.content, searchTerm)
    }));

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white shadow-sm relative z-40">
        {/* Logo/Brand */}
        <Link href="/" className="text-lg font-bold text-black md:text-xl">
          <div className="flex items-center text-nowrap">
            <img src="/logo/MDIconNav.svg" alt="Logo" className='h-10 sm:h-12 mr-2 md:mr-3 rounded-lg w-auto' />
            {text.navbar.logo.brand}
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-row gap-0 justify-center flex-grow max-w-3xl xl:mr-44">
          {/* BEGIN */}
          <div className="border-2 border-r-0 border-[#94562B] w-1/4 h-auto rounded-l-[8px] flex-shrink-0">
            <div className="bg-[#94562B] text-center text-white text-base md:text-sm font-bold py-1">
              BEGIN
            </div>
            <div className="flex justify-around gap-2 flex-wrap text-sm md:text-sm p-2">
              <Link href="/workshop" className={`${pathname.includes("/workshop") ? "text-[#9C5027]" : "text-[#000000]"}`}>Workshop</Link>
              <Link href="/about" className={`${pathname.includes("/about") ? "text-[#9C5027]" : "text-[#000000]"}`}>About</Link>
            </div>
          </div>

          {/* EXPLORE */}
          <div className="border-2 border-r-0 border-[#B47447] w-[20%] h-auto flex-shrink-0">
            <div className="bg-[#B47447] text-center text-white text-base md:text-sm font-bold py-1">
              EXPLORE
            </div>
            <div className="flex justify-center gap-2 flex-wrap text-sm md:text-sm p-2">
              <Link href="/philosophy/in-brief" className={`${pathname.includes("/philosophy") ? "text-[#9C5027]" : "text-[#000000]"}`}>Philosophy</Link>
            </div>
          </div>

          {/* STUDY */}
          <div className="border-2 border-r-0 border-[#B2917A] w-1/4 h-auto flex-shrink-0">
            <div className="bg-[#B2917A] text-center text-white text-base md:text-sm font-bold py-1">
              STUDY
            </div>
            <div className="flex justify-around gap-2 flex-wrap text-sm md:text-sm p-2">
              <Link href="/books" className={`${pathname.includes("/books") ? "text-[#9C5027]" : "text-[#000000]"}`}>Books</Link>
              <Link href="/resource-center" className={`${pathname.includes("/resource-center") ? "text-[#9C5027]" : "text-[#000000]"}`}>Resources</Link>
            </div>
          </div>

          {/* ORIGINALS */}
          <div className="border-2 border-[#C1B6A3] w-[20%] h-auto rounded-r-[8px] flex-shrink-0">
            <div className="bg-[#C1B6A3] text-center text-white text-base md:text-sm font-bold py-1">
              ORIGINALS
            </div>
            <div className="flex justify-center gap-2 flex-wrap text-sm md:text-sm p-2">
              <Link href="https://jv-org.vercel.app/" target="_blank" className="text-[#000000]">मध्यस्थ दर्शन</Link>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 w-full bg-white z-40 border-t border-gray-200 md:hidden">
          <div className="flex flex-nowrap w-full overflow-x-auto">
            {navigationGroups.map((group) => {
              let widthClass = 'flex-[1]';

              if (group.id === 1 || group.id === 3) {
                widthClass = 'flex-[1]';
              } else if (group.id === 2 || group.id === 4) {
                widthClass = 'flex-[0.5]';
              }

              const customGapClass = (group.id === 1 || group.id === 3) ? 'gap-2' : 'gap-4';

              return (
                <div key={group.id} className={`${widthClass} min-w-[80px]`}>
                  <div className="bg-white border-r border-gray-300 last:border-r-0">
                    <div className="flex justify-center items-center py-1 px-2">
                      {group.data.length === 1 ? (
                        <Link
                          href={group.data[0].href}
                          target={group.data[0].external ? "_blank" : "_self"}
                          className="flex flex-col items-center justify-center text-center"
                        >
                          <Image
                            src={
                              pathname.includes(group.data[0].match)
                                ? group.data[0].selectedIcon
                                : group.data[0].icon
                            }
                            alt={group.data[0].label}
                            width={24}
                            height={24}
                            className="mb-1"
                          />
                          <span className={`text-[12px] font-[700] leading-tight ${pathname.includes(group.data[0].match) ? 'text-[#94562B]' : 'text-[#666666]'} whitespace-nowrap`}>
                            {group.data[0].label}
                          </span>
                        </Link>
                      ) : (
                        <div className={`flex justify-center items-center ${customGapClass} w-full`}>
                          {group.data.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              target={item.external ? "_blank" : "_self"}
                              className="flex flex-col items-center justify-center text-center"
                            >
                              <Image
                                src={
                                  pathname.includes(item.match)
                                    ? item.selectedIcon
                                    : item.icon
                                }
                                alt={item.label}
                                width={24}
                                height={24}
                                className="mb-1"
                              />
                              <span className={`text-[12px] font-[700] leading-tight ${pathname.includes(item.match) ? 'text-[#94562B]' : 'text-[#666666]'} whitespace-nowrap`}>
                                {item.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className="text-center py-1 border-r border-gray-300 last:border-r-0"
                    style={{ backgroundColor: group.color }}
                  >
                    <span className="text-white text-[11px] font-bold tracking-wide">
                      {group.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Section */}
        <div className="mr-5">
          {/* 🔹 Desktop now uses same search overlay trigger */}
          <button
            onClick={() => setMobileSearchOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Image src={'/icon/search.svg'} alt="search" width={23} height={23} />
          </button>

          <button className="p-2 hover:bg-gray-100 rounded-full hidden" onClick={toggleLanguage}>
            <Image src={'/icon/language.svg'} alt="translator" width={23} height={23} />
          </button>
        </div>
      </nav>

      {/* Search Overlay (used for both Desktop + Mobile) */}

{/* {mobileSearchOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-start md:items-center p-4 md:p-6"
    ref={mobileSearchRef}
  >

    <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl bg-white rounded-xl shadow-lg p-6">

      <button
        onClick={() => {
          setSearchTerm("");
          setMobileSearchOpen(false);
        }}
        className="absolute z-20 top-8 md:top-9 right-8 text-gray-700 hover:text-black text-2xl"
      >
        <IoClose />
      </button>

      <div className="w-full">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-full border border-[#D6D6D6] w-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-base md:text-lg"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#575757]" />
        </div>

        {searchTerm && (
          <div className="mt-4 bg-white w-full max-h-[300px] overflow-y-auto">
            {filteredResults.length > 0 ? (
              filteredResults.map((result, idx) => (
                <button
                  key={idx}
                  onClick={() => handleMobileResultClick(result.route)}
                  className="block w-full text-left px-4 py-2 border border-gray-200 hover:bg-gray-100"
                >
                  <div
                    className="text-sm md:text-md text-black"
                    dangerouslySetInnerHTML={{ __html: result.snippet }}
                  />
                  <p className="text-sm text-gray-600 break-words">
                    {result.route}
                  </p>
                </button>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
)} */}
{mobileSearchOpen && (
    <div
    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-start md:items-center p-4 md:p-6"
    ref={mobileSearchRef}
  >

    <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl bg-white rounded-xl shadow-lg p-2" ref={modalBoxRef}>

<div className="bg-white rounded-lg w-full">
  {/* Search Input */}
  <div className="p-4 border-b border-gray-200">
    <div className="relative">
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#575757]" />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 pr-16 py-2 rounded-lg border border-[#D6D6D6] w-full focus:outline-none focus:ring-1 focus:ring-blue-400 text-base"
      />
      {/* <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
        <span className="text-sm text-gray-500">⌘K</span>
      </div> */}
    </div>
  </div>

  {/* Recent */}
  <div className="p-4 border-b border-gray-200">
    <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
      Searching Result
    </h3>
    {searchTerm ? (
      <div className="w-full max-h-[350px] overflow-y-auto">
        {filteredResults.length > 0 ? (
          filteredResults.map((result, idx) => (
            <button
              key={idx}
              onClick={() => handleMobileResultClick(result.route)}
              className="flex items-center justify-between w-full text-left py-3 hover:bg-gray-50 border-b "
            >
              <div className="flex items-center">
                {/* Placeholder for icon/avatar */}
                <div className="w-6 h-6 bg-gray-200 rounded-full mr-3">
                  <img src='/icon/LogoSVG.svg' />
                </div>
                <div>
                  <div
                    className="text-sm text-black mb-1"
                    dangerouslySetInnerHTML={{ __html: result.snippet }}
                  />
                  <p className="text-xs text-gray-500 break-words">
                    {result.route}
                  </p>
                </div>
              </div>
              {/* <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">1,210 Sales</span>
                <FaEllipsisH className="text-gray-400 text-xs" />
              </div> */}
            </button>
          ))
        ) : (
          <div className="py-2 text-gray-500">{console.log("Hello")}No recent items found</div>
        )}
      </div>
    ) : <div className="py-2 text-gray-500 w-full text-center">Search Keyword</div>}
  </div>

  {/* Quick Actions */}
  {/* <div className="p-4 border-b border-gray-200">
    <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
      Quick Actions
    </h3>
    <div className="space-y-2">
      <button className="flex items-center justify-between w-full text-left py-2 hover:bg-gray-50 rounded-md">
        <div className="flex items-center">
          <FaChartBar className="mr-3 text-gray-500" />
          <span className="text-sm text-gray-800">Product Analytics</span>
        </div>
        <span className="text-xs text-gray-500">⌘R</span>
      </button>
      <button className="flex items-center justify-between w-full text-left py-2 hover:bg-gray-50 rounded-md">
        <div className="flex items-center">
          <FaShoppingCart className="mr-3 text-gray-500" />
          <span className="text-sm text-gray-800">Shop Analyzer</span>
        </div>
        <span className="text-xs text-gray-500">⌘Y</span>
      </button>
      <button className="flex items-center justify-between w-full text-left py-2 hover:bg-gray-50 rounded-md">
        <div className="flex items-center">
          <FaTags className="mr-3 text-gray-500" />
          <span className="text-sm text-gray-800">Keyword Research</span>
        </div>
        <span className="text-xs text-gray-500">⌘F</span>
      </button>
    </div>
  </div> */}

  {/* Footer */}
  <div className="p-4 flex justify-between items-center text-xs text-gray-500">
    <div className="flex items-center space-x-3">
      {/* <span className="flex items-center">
        <FaArrowUp className="mr-1" />
        <FaArrowDown className="mr-2" />
        Move
      </span>
      <span className="flex items-center">
        <span className="px-2 py-1 bg-gray-100 rounded-md mr-1">↩</span>Select
      </span> */}
    </div>
    <span className="flex items-center">
      <span className="px-2 py-1 bg-gray-100 rounded-md mr-1">esc</span>Quit
    </span>
  </div>
</div>
      </div>
      </div>
)}


              {/* {mobileSearchOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-start pt-32 px-6 flex-col" ref={mobileSearchRef}>
                    <button
                        onClick={() => {
                            setSearchTerm('')
                            setMobileSearchOpen(false)
                        }}
                        className="absolute top-6 right-6 text-white text-2xl"
                    >
                        <IoClose />
                    </button>

                    <div className="w-full">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 rounded-full border border-[#D6D6D6] w-full focus:outline-none focus:ring-2"
                            />
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#303030]" />
                        </div>

                        {searchTerm && (
                          <div className="mt-4 bg-white w-full rounded-md shadow-md max-h-[300px] overflow-y-auto">
                            {filteredResults.length > 0 ? (
                              filteredResults.map((result, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => handleMobileResultClick(result.route)}
                                  className="block w-full text-left px-4 py-2 border-b border-gray-200 hover:bg-gray-100"
                                >
                                  <div
                                    className="text-md text-black"
                                    dangerouslySetInnerHTML={{ __html: result.snippet }}
                                  />
                                  <p className='text-sm text-gray-600'>{result.route}</p>
                                </button>
                              ))
                            ) : (
                              <div className="px-4 py-2">No results found</div>
                            )}
                          </div>
                        )}
                    </div>
                </div>
            )} */}


    </>
  )
}

export default Navbar











// 'use client'
// import React, { useState, useEffect, useRef } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { FaSearch } from 'react-icons/fa'
// import { usePathname, useRouter } from 'next/navigation'
// import { IoClose } from 'react-icons/io5'
// import searchIndex from '@/services/searchIndex'
// import { useLanguage } from '@/context/LanguageContext'
// import { wrapHindiWords  } from '@/utils/fontInjector';
// import pagesIndex from '../../../public/pages-index.json'

// const Navbar = () => {
//     const pathname = usePathname()
//     const router = useRouter()
//     const [searchTerm, setSearchTerm] = useState('')
//     const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
//     const { language, toggleLanguage, text } = useLanguage();

//     const searchRef = useRef(null)
//     const mobileSearchRef = useRef(null)

//     const navigationGroups = [
//     {
//       id: 1,
//       data: [
//         { href: "/workshop", icon: "/icon/menus/Menu1-US.svg", selectedIcon: "/icon/menus/Menu1-SE.svg", label: "Workshop", match: "workshop" },
//         { href: "/about", icon: "/icon/menus/Menu2-US.svg", selectedIcon: "/icon/menus/Menu2-SE.svg", label: "About", match: "about" },
//       ],
//       color: "#94562B",
//       title: "BEGIN",
//     },
//     {
//       id: 2,
//       data: [
//         {
//           href: "/philosophy/in-brief",
//           icon: "/icon/menus/Menu3-US.svg",
//           selectedIcon: "/icon/menus/Menu3-SE.svg",
//           label: "Philosophy",
//           match: "philosophy",
//         },
//       ],
//       color: "#B47447",
//       title: "EXPLORE",
//     },
//     {
//       id: 3,
//       data: [
//         { href: "/books", icon: "/icon/menus/Menu4-US.svg", selectedIcon: "/icon/menus/Menu4-SE.svg", label: "Books", match: "books" },
//         { href: "/resource-center", icon: "/icon/menus/Menu5-US.svg", selectedIcon: "/icon/menus/Menu5-SE.svg", label: "Resources", match: "resource-center" },
//       ],
//       color: "#B2917A",
//       title: "STUDY",
//     },
//     {
//       id: 4,
//       data: [
//         {
//           href: "https://jv-org.vercel.app/",
//           icon: "/icon/menus/Menu6-US.svg",
//           selectedIcon: "/icon/menus/Menu6-SE.svg",
//           label: "मध्यस्थ दर्शन",
//           external: true,
//         },
//       ],
//       color: "#C1B6A3",
//       title: "ORIGINALS",
//     },
//   ]

//       useEffect(() => {
//     wrapHindiWords ();
//   }, []);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             const isDesktopSearchClick = searchRef.current && searchRef.current.contains(event.target);
//             const isMobileSearchClick = mobileSearchRef.current && mobileSearchRef.current.contains(event.target);
            
//             if (!isDesktopSearchClick && !isMobileSearchClick) {
//                 setSearchTerm('')
//             }
//         }

//         document.addEventListener('mousedown', handleClickOutside)
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside)
//         }
//     }, [])

//     const handleMobileResultClick = (href) => {
//       setSearchTerm('');
//       setMobileSearchOpen(false);
//       router.push(`${href}?search=${encodeURIComponent(searchTerm)}`);
//     };

// const getSnippet = (content, term, snippetLength = 30) => {
//   const index = content.toLowerCase().indexOf(term.toLowerCase());
//   if (index === -1) return '';

//   const start = Math.max(0, index - snippetLength);
//   const end = Math.min(content.length, index + term.length + snippetLength);

//   const snippet = content.substring(start, end).replace(/\n/g, ' ');

//   // Highlight all occurrences of the term (case insensitive)
//   const regex = new RegExp(`(${term})`, 'gi');
//   const highlighted = snippet.replace(regex, '<mark>$1</mark>');

//   return (start > 0 ? '...' : '') + highlighted + (end < content.length ? '...' : '');
// };


// const filteredResults = pagesIndex
//   .filter(item =>
//     item?.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item?.route?.toLowerCase().includes(searchTerm.toLowerCase())
//   )
//   .map(item => ({
//     ...item,
//     snippet: getSnippet(item.content, searchTerm)
//   }));


//     return (
//         <>
//             {/* Navbar */}
//             <nav className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white shadow-sm relative z-40">
//                 {/* Logo/Brand */}
//                 <Link href="/" className="text-lg font-bold text-black md:text-xl">
//                     <div className="flex items-center text-nowrap">
//                         <img src="/logo/MDIconNav.svg" alt="Logo" className='h-10 sm:h-12 mr-2 md:mr-3 rounded-lg w-auto' />
//                         {text.navbar.logo.brand}
//                     </div>
//                 </Link>

//                 {/* Navigation Links */}
//                 <div className="hidden md:flex flex-row gap-0 justify-center flex-grow max-w-3xl">
//                     {/* BEGIN */}
//                     <div className="border-2 border-r-0 border-[#94562B] w-1/4 h-auto rounded-l-[8px] flex-shrink-0">
//                         <div className="bg-[#94562B] text-center text-white text-base md:text-sm font-bold py-1">
//                             BEGIN
//                         </div>
//                         <div className="flex justify-around gap-2 flex-wrap text-sm md:text-sm p-2">
//                             <Link href="/workshop" className={`${pathname.includes("/workshop") ? "text-[#9C5027]" : "text-[#000000]"}`}>Workshop</Link>
//                             <Link href="/about" className={`${pathname.includes("/about") ? "text-[#9C5027]" : "text-[#000000]"}`}>About</Link>
//                         </div>
//                     </div>
                
//                     {/* EXPLORE */}
//                     <div className="border-2 border-r-0 border-[#B47447] w-[20%] h-auto flex-shrink-0">
//                         <div className="bg-[#B47447] text-center text-white text-base md:text-sm font-bold py-1">
//                             EXPLORE
//                         </div>
//                         <div className="flex justify-center gap-2 flex-wrap text-sm md:text-sm p-2">
//                             <Link href="/philosophy/in-brief" className={`${pathname.includes("/philosophy") ? "text-[#9C5027]" : "text-[#000000]"}`}>Philosophy</Link>
//                         </div>
//                     </div>
                
//                     {/* STUDY */}
//                     <div className="border-2 border-r-0 border-[#B2917A] w-1/4 h-auto flex-shrink-0">
//                         <div className="bg-[#B2917A] text-center text-white text-base md:text-sm font-bold py-1">
//                             STUDY
//                         </div>
//                         <div className="flex justify-around gap-2 flex-wrap text-sm md:text-sm p-2">
//                             <Link href="/books" className={`${pathname.includes("/books") ? "text-[#9C5027]" : "text-[#000000]"}`}>Books</Link>
//                             <Link href="/resource-center" className={`${pathname.includes("/resource-center") ? "text-[#9C5027]" : "text-[#000000]"}`}>Resources</Link>
//                         </div>
//                     </div>
                
//                     {/* ORIGINALS */}
//                     <div className="border-2 border-[#C1B6A3] w-[20%] h-auto rounded-r-[8px] flex-shrink-0">
//                         <div className="bg-[#C1B6A3] text-center text-white text-base md:text-sm font-bold py-1">
//                             ORIGINALS
//                         </div>
//                         <div className="flex justify-center gap-2 flex-wrap text-sm md:text-sm p-2">
//                             <Link href="https://jv-org.vercel.app/" target="_blank" className="text-[#000000]">मध्यस्थ दर्शन</Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile Bottom Navigation */}
//  <div className="fixed bottom-0 left-0 w-full bg-white z-40 border-t border-gray-200 md:hidden">
//   <div className="flex flex-nowrap w-full overflow-x-auto">
//     {navigationGroups.map((group) => {
//       let widthClass = 'flex-[1]';

//       if (group.id === 1 || group.id === 3) {
//         widthClass = 'flex-[1]';
//       } else if (group.id === 2 || group.id === 4) {
//         widthClass = 'flex-[0.5]';
//       }

//       // Custom gap class for 1st and 3rd group
//       const customGapClass = (group.id === 1 || group.id === 3) ? 'gap-2' : 'gap-4';

//       return (
//         <div key={group.id} className={`${widthClass} min-w-[80px]`}>
//           {/* Top section with icons and labels */}
//           <div className="bg-white border-r border-gray-300 last:border-r-0">
//             <div className="flex justify-center items-center py-1 px-2">
//               {group.data.length === 1 ? (
//                 <Link
//                   href={group.data[0].href}
//                   target={group.data[0].external ? "_blank" : "_self"}
//                   className="flex flex-col items-center justify-center text-center"
//                 >
//                   <Image
//                     src={
//                       pathname.includes(group.data[0].match)
//                         ? group.data[0].selectedIcon
//                         : group.data[0].icon
//                     }
//                     alt={group.data[0].label}
//                     width={24}
//                     height={24}
//                     className="mb-1"
//                   />
//                   <span className={`text-[12px] font-[700] leading-tight ${
//                     pathname.includes(group.data[0].match)
//                       ? 'text-[#94562B]'
//                       : 'text-[#666666]'
//                   } whitespace-nowrap`}>
//                     {group.data[0].label}
//                   </span>
//                 </Link>
//               ) : (
//                 <div className={`flex justify-center items-center ${customGapClass} w-full`}>
//                   {group.data.map((item) => (
//                     <Link
//                       key={item.label}
//                       href={item.href}
//                       target={item.external ? "_blank" : "_self"}
//                       className="flex flex-col items-center justify-center text-center"
//                     >
//                       <Image
//                         src={
//                           pathname.includes(item.match)
//                             ? item.selectedIcon
//                             : item.icon
//                         }
//                         alt={item.label}
//                         width={24}
//                         height={24}
//                         className="mb-1"
//                       />
//                       <span className={`text-[12px] font-[700] leading-tight ${
//                         pathname.includes(item.match)
//                           ? 'text-[#94562B]'
//                           : 'text-[#666666]'
//                       } whitespace-nowrap`}>
//                         {item.label}
//                       </span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Bottom section with category title */}
//           <div
//             className="text-center py-1 border-r border-gray-300 last:border-r-0"
//             style={{ backgroundColor: group.color }}
//           >
//             <span className="text-white text-[11px] font-bold tracking-wide">
//               {group.title}
//             </span>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// </div>



//                 {/* Right Section */}
//                 <div className="">
//                     {/* Desktop Search */}
//                     <div className="relative hidden md:flex justify-end" ref={searchRef}>
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="pl-8 pr-4 py-1 rounded-full border border-[#D6D6D6] w-3/4 focus:outline-none focus:ring-2"
//                         />
//                         <Image src={'/icon/search.svg'} alt="search" width={20} height={20} className="absolute left-[28%] top-1/2 transform -translate-y-1/2 text-[#303030]" />

//                         {searchTerm && (
//                             <div className="absolute top-full left-0 w-full bg-white border border-gray-200 mt-2 rounded-md shadow-md z-auto max-h-60 overflow-auto">
//                                 {filteredResults.length > 0 ? (
//                                   filteredResults.map((result, idx) => (
//                                       <Link
//                                         key={idx}
//                                         href={`${result.route}?search=${encodeURIComponent(searchTerm)}`}
//                                         onClick={(e) => {
//                                           e.preventDefault();
//                                           setSearchTerm('');
//                                           router.push(`${result.route}?search=${encodeURIComponent(searchTerm)}`);
//                                         }}
//                                         className="block px-4 py-2 hover:bg-gray-100 text-[#9C5027]"
//                                       >
//                                         <div
//                                           className="text-sm text-gray-600"
//                                           dangerouslySetInnerHTML={{ __html: result.snippet }}
//                                         />
//                                       </Link>
//                                     ))
//                                   ) : (
//                                       <div className="px-4 py-2">No results found</div>
//                                   )}
//                             </div>
//                         )}
//                     </div>

//                     {/* Mobile Search Icon */}
//                     <button
//                         onClick={() => setMobileSearchOpen(true)}
//                         className="md:hidden p-2 hover:bg-gray-100 rounded-full"
//                     >
//                         <Image src={'/icon/search.svg'} alt="search" width={23} height={23} />
//                     </button>

//                     <button className="p-2 hover:bg-gray-100 rounded-full hidden" onClick={toggleLanguage}>
//                         <Image src={'/icon/language.svg'} alt="translator" width={23} height={23} />
//                     </button>
//                 </div>
//             </nav>

//             {/* Mobile Search Overlay */}
            // {mobileSearchOpen && (
            //     <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-start pt-32 px-6 flex-col" ref={mobileSearchRef}>
            //         {/* Close Button */}
            //         <button
            //             onClick={() => {
            //                 setSearchTerm('')
            //                 setMobileSearchOpen(false)
            //             }}
            //             className="absolute top-6 right-6 text-white text-2xl"
            //         >
            //             <IoClose />
            //         </button>

            //         {/* Centered Search Bar */}
            //         <div className="w-full">
            //             <div className="relative w-full">
            //                 <input
            //                     type="text"
            //                     placeholder="Search..."
            //                     value={searchTerm}
            //                     onChange={(e) => setSearchTerm(e.target.value)}
            //                     className="pl-10 pr-4 py-2 rounded-full border border-[#D6D6D6] w-full focus:outline-none focus:ring-2"
            //                 />
            //                 <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#303030]" />
            //             </div>

            //             {/* Mobile Search Results */}
            //             {searchTerm && (
            //               <div className="mt-4 bg-white w-full rounded-md shadow-md max-h-[300px] overflow-y-auto">
            //                 {filteredResults.length > 0 ? (
            //                   filteredResults.map((result, idx) => (
            //                     <button
            //                       key={idx}
            //                       onClick={() => handleMobileResultClick(result.route)}
            //                       className="block w-full text-left px-4 py-2 border-b border-gray-200 hover:bg-gray-100 text-[#9C5027]"
            //                     >
            //                       <div
            //                         className="text-sm text-gray-600"
            //                         dangerouslySetInnerHTML={{ __html: result.snippet }}
            //                       />
            //                     </button>
            //                   ))
            //                 ) : (
            //                   <div className="px-4 py-2">No results found</div>
            //                 )}
            //               </div>
            //             )}
            //         </div>
            //     </div>
            // )}
//         </>
//     )
// }

// export default Navbar






// 'use client'
// import React, { useState, useEffect, useRef } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { FaSearch } from 'react-icons/fa'
// import { usePathname, useRouter } from 'next/navigation'
// import { IoClose } from 'react-icons/io5'
// import searchIndex from '@/services/searchIndex'
// import { useLanguage } from '@/context/LanguageContext'

// const Navbar = () => {
//     const pathname = usePathname()
//     const router = useRouter()
//     const [searchTerm, setSearchTerm] = useState('')
//     const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
//     const { language, toggleLanguage, text } = useLanguage();

//     const searchRef = useRef(null)
//     const mobileSearchRef = useRef(null)

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             // Check if click is inside desktop search or mobile search
//             const isDesktopSearchClick = searchRef.current && searchRef.current.contains(event.target);
//             const isMobileSearchClick = mobileSearchRef.current && mobileSearchRef.current.contains(event.target);
            
//             if (!isDesktopSearchClick && !isMobileSearchClick) {
//                 setSearchTerm('')
//             }
//         }

//         document.addEventListener('mousedown', handleClickOutside)
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside)
//         }
//     }, [])

//     const filteredResults = searchIndex.filter(item =>
//         item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     )

//     const handleMobileResultClick = (href) => {
//         setSearchTerm('')
//         setMobileSearchOpen(false)
//         router.push(href)
//     }

//     return (
//         <>
//             {/* Navbar */}
//             <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm relative z-40">
//                 {/* Logo/Brand */}
//                     <Link href="/" className="text-lg font-th font-bold text-black md:text-xl ">
//                     <div className="flex items-center text-nowrap">
//                         <img src="/logo/MDIconNav.svg" alt="Logo" className='h-12 mr-2 md:h-10 w-auto md:mr-3 rounded-lg' />
//                         {text.navbar.logo.brand}
//                     </div>
//                     </Link>

//                 {/* Navigation Links */}
//                 <>
//                     <div className="w-full h-auto flex flex-row mx-56 overflow-x-auto">
//                         {/* BEGIN */}
//                         <div className="border-2 border-[#94562B] w-1/2 md:w-1/4 h-auto rounded-t-[8px] md:rounded-l-[8px] md:rounded-tr-none flex-shrink-0">
//                             <div className="bg-[#94562B] text-center text-white text-base md:text-xl font-bold py-1">
//                                 BEGIN
//                             </div>
//                             <div className="flex justify-around gap-2 flex-wrap text-sm md:text-base p-2">
//                                 <a><p>Workshop</p></a>
//                                 <a><p>About</p></a>
//                             </div>
//                         </div>
                
//                         {/* EXPLORE */}
//                         <div className="border-2 border-[#B47447] w-1/2 md:w-1/4 h-auto flex-shrink-0">
//                             <div className="bg-[#B47447] text-center text-white text-base md:text-xl font-bold py-1">
//                                 EXPLORE
//                             </div>
//                             <div className="flex justify-center gap-2 flex-wrap text-sm md:text-base p-2">
//                                 <a><p>Philosophy</p></a>
//                             </div>
//                         </div>
                
//                         {/* STUDY */}
//                         <div className="border-2 border-[#B2917A] w-1/2 md:w-1/4 h-auto flex-shrink-0">
//                             <div className="bg-[#B2917A] text-center text-white text-base md:text-xl font-bold py-1">
//                                 STUDY
//                             </div>
//                             <div className="flex justify-around gap-2 flex-wrap text-sm md:text-base p-2">
//                                 <a><p>Books</p></a>
//                                 <a><p>Resources</p></a>
//                             </div>
//                         </div>
                
//                         {/* ORIGINALS */}
//                         <div className="border-2 border-[#C1B6A3] w-1/2 md:w-1/4 h-auto rounded-b-[8px] md:rounded-r-[8px] md:rounded-bl-none flex-shrink-0">
//                             <div className="bg-[#C1B6A3] text-center text-white text-base md:text-xl font-bold py-1">
//                                 ORIGINALS
//                             </div>
//                             <div className="flex justify-center gap-2 flex-wrap text-sm md:text-base p-2">
//                                 <a><p>मध्यस्थ दर्शन</p></a>
//                             </div>
//                         </div>
//                     </div>
//                 </>

//                 <div className="fixed bottom-0 left-0 w-full bg-[#59524E] md:hidden z-40">
//                   <div className="flex justify-around items-center py-2 text-[10px] text-[#EDE2D1]">
//                     {[
//                       { href: "/workshop", icon: "/icon/menus/workshopMenu.svg", label: "WORKSHOP", match: "workshop" },
//                       { href: "/about", icon: "/icon/menus/aboutMenu.svg", label: "ABOUT", match: "about" },
//                       { href: "/philosophy/in-brief", icon: "/icon/menus/philosophyMenu.svg", label: "PHILOSOPHY", match: "philosophy" },
//                       { href: "/books", icon: "/icon/menus/booksMenu.svg", label: "BOOKS", match: "books" },
//                       { href: "/resource-center", icon: "/icon/menus/studentMenu.svg", label: "RESOURCES", match: "resource-center" },
//                       { href: "https://madhyasth-darshan.megascale.co.in/", icon: "/icon/menus/siteMenu.svg", label: "मध्यस्थ दर्शन", external: true }
//                     ].map(({ href, icon, label, match, external }) => (
//                       <Link
//                         key={label}
//                         href={href}
//                         target={external ? "_blank" : "_self"}
//                         className={`flex flex-col items-center w-[60px] h-[60px] justify-center p-1 rounded-                [4px] ${
//                           pathname.split("/")[1] === match ? "bg-[#FFF5E726]" : ""
//                         }`}
//                       >
//                         <Image src={icon} alt={label} width={24} height={24} />
//                         <span className="mt-1 text-center">{label}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>


//                 {/* Right Section */}
//                 <div className="flex items-center space-x-1 flex-row-reverse md:flex-row">
//                     {/* Desktop Search */}
//                     <div className="relative hidden md:flex justify-end w-64" ref={searchRef}>
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="pl-8 pr-4 py-1 rounded-full border border-[#D6D6D6] w-3/4 focus:outline-none focus:ring-2"
//                         />
//                         <Image src={'/icon/search.svg'} alt="translator" width={20} height={20} className="absolute left-[28%] top-1/2 transform -translate-y-1/2 text-[#303030]" />

//                         {searchTerm && (
//                             <div className="absolute top-full left-0 w-full bg-white border border-gray-200 mt-2 rounded-md shadow-md z-auto max-h-60 overflow-auto">
//                                 {filteredResults.length > 0 ? (
//                                     filteredResults.map((result, idx) => (
//                                         <Link
//                                             key={idx}
//                                             href={result.href}
//                                             onClick={(e) => {
//                                                 e.preventDefault();
//                                                 setSearchTerm('');
//                                                 router.push(result.href);
//                                             }}
//                                             className="block px-4 py-2 hover:bg-gray-100 text-[#9C5027]"
//                                         >
//                                             {result.title}
//                                         </Link>
//                                     ))
//                                 ) : (
//                                     <div className="px-4 py-2  ">No results found</div>
//                                 )}
//                             </div>
//                         )}
//                     </div>

//                     {/* Mobile Search Icon */}
//                     <button
//                         onClick={() => setMobileSearchOpen(true)}
//                         className="md:hidden p-2 hover:bg-gray-100 rounded-full"
//                     >
//                         <Image src={'/icon/search.svg'} alt="translator" width={23} height={23} />
//                     </button>

//                     {/* Language Button */}
//                     <button className="p-2 hover:bg-gray-100 rounded-full hidden" onClick={toggleLanguage}>
//                         <Image src={'/icon/language.svg'} alt="translator" width={23} height={23} />
//                     </button>
//                 </div>
//             </nav>

//             {/* Mobile Search Overlay */}
//             {mobileSearchOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-start pt-32 px-6 flex-col" ref={mobileSearchRef}>
//                     {/* Close Button */}
//                     <button
//                         onClick={() => {
//                             setSearchTerm('')
//                             setMobileSearchOpen(false)
//                         }}
//                         className="absolute top-6 right-6 text-white text-2xl"
//                     >
//                         <IoClose />
//                     </button>

//                     {/* Centered Search Bar */}
//                     <div className="w-full">
//                         <div className="relative w-full">
//                             <input
//                                 type="text"
//                                 placeholder="Search..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 className="pl-10 pr-4 py-2 rounded-full border border-[#D6D6D6] w-full focus:outline-none focus:ring-2"
//                             />
//                             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#303030]" />
//                         </div>

//                         {/* Mobile Search Results */}
//                         {searchTerm && (
//                             <div className="mt-4 bg-white w-full rounded-md shadow-md max-h-[300px] overflow-y-auto">
//                                 {filteredResults.length > 0 ? (
//                                     filteredResults.map((result, idx) => (
//                                         <button
//                                             key={idx}
//                                             onClick={() => handleMobileResultClick(result.href)}
//                                             className="block w-full text-left px-4 py-2 border-b border-gray-200 hover:bg-gray-100 text-[#9C5027]"
//                                         >
//                                             {result.title}
//                                         </button>
//                                     ))
//                                 ) : (
//                                     <div className="px-4 py-2  ">No results found</div>
//                                 )}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </>
//     )
// }

// export default Navbar









// 'use client'
// import React, { useState, useEffect, useRef } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { FaSearch } from 'react-icons/fa'
// import { usePathname, useRouter } from 'next/navigation'
// import { IoClose } from 'react-icons/io5'
// import searchIndex from '@/services/searchIndex'
// import { useLanguage } from '@/context/LanguageContext'

// const Navbar = () => {
//     const pathname = usePathname()
//     const router = useRouter()
//     const [searchTerm, setSearchTerm] = useState('')
//     const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
//     const { language, toggleLanguage, text } = useLanguage();

//     const searchRef = useRef(null)

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (searchRef.current && !searchRef.current.contains(event.target)) {
//                 setSearchTerm('')
//                 console.log('Clicked outside')
//             }
//             console.log('Clicked outside')
//         }

//         document.addEventListener('mousedown', handleClickOutside)
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside)
//         }
//     }, [])

//     const filteredResults = searchIndex.filter(item =>
//         item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     )

//     return (
//         <>
//             {/* Navbar */}
//             <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm relative z-40">
//                 {/* Logo/Brand */}
//                 <div className="flex items-center">
//                     <img src="/logo/Logo.svg" alt="Logo" className='h-12 mr-2 md:h-10 w-auto md:mr-3' />
//                     <Link href="/" className="text-lg font-bold text-black md:text-xl">
//                         {/* {t('brand')} */}
//                         Madhyasth Darshan
//                     </Link>
//                 </div>

//                 {/* Navigation Links */}
//                 <div className="hidden md:flex items-center space-x-12">
//                     <Link
//                         href="/workshop"
//                         className={`font-th font-bold ${pathname.split('/')[1] === 'workshop' ? 'text-[#9C5027]' : 'text-[#616161]'}`}
//                     >
//                         {/* Workshop */}
//                         {text.navbar.menus.workshop}
//                     </Link>
//                     <Link
//                         href="/about"
//                         className={`font-th font-bold ${pathname.split('/')[1] === 'about' ? 'text-[#9C5027]' : 'text-[#616161]'}`}
//                     >
//                         {/* About */}
//                         {text.navbar.menus.about}
//                     </Link>
//                     <Link
//                         href="/philosophy"
//                         className={`font-th font-bold ${pathname.split('/')[1] === 'philosophy' ? 'text-[#9C5027]' : 'text-[#616161]'}`}
//                     >
//                         {/* Philosophy */}
//                         {text.navbar.menus.philosophy}
//                     </Link>
//                     <Link
//                         href="/books"
//                         className={`font-th font-bold ${pathname.split('/')[1] === 'books' ? 'text-[#9C5027]' : 'text-[#616161]'}`}
//                     >
//                         {/* Books */}
//                         {text.navbar.menus.books}
//                     </Link>
//                     <Link href="/books" className="font-th font-bold text-[#616161]">
//                         मध्यस्थ दर्शन
//                     </Link>
//                 </div>

//                 {/* Mobile Bottom Navigation */}
//                 <div className="fixed bottom-0 left-0 w-full bg-[#FFF6EB] border-t border-gray-200 md:hidden z-40">
//                     <div className="flex justify-around items-center py-2 text-sm text-[#9C5027]">
//                         <Link href="/workshop" className="flex flex-col items-center">
//                             <Image src="/icon/menus/workshopMenu.svg" alt="Workshop" width={24} height={24} />
//                             <span className="mt-1">Workshop</span>
//                         </Link>
//                         <Link href="/about" className="flex flex-col items-center">
//                             <Image src="/icon/menus/aboutMenu.svg" alt="About" width={24} height={24} />
//                             <span className="mt-1">About</span>
//                         </Link>
//                         <Link href="/philosophy" className="flex flex-col items-center">
//                             <Image src="/icon/menus/philosophyMenu.svg" alt="Philosophy" width={24} height={24} />
//                             <span className="mt-1">Philosophy</span>
//                         </Link>
//                         <Link href="/books" className="flex flex-col items-center">
//                             <Image src="/icon/menus/booksMenu.svg" alt="Books" width={24} height={24} />
//                             <span className="mt-1">Books</span>
//                         </Link>
//                         <Link href="https://madhyasth-darshan.megascale.co.in/" className="flex flex-col items-center">
//                             <Image src="/icon/menus/siteMenu.svg" alt="Madhyasth Darshan" width={24} height={24} />
//                             <span className="mt-1 text-[13px] leading-4">मध्यस्थ दर्शन</span>
//                         </Link>
//                     </div>
//                 </div>


//                 {/* Right Section */}
//                 <div className="flex items-center space-x-1 flex-row-reverse md:flex-row">
//                     {/* Desktop Search */}
//                     <div className="relative hidden md:flex justify-end w-64" ref={searchRef}>
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="pl-8 pr-4 py-1 rounded-full border border-[#D6D6D6] w-3/4 focus:outline-none focus:ring-2"
//                         />
//                         <Image src={'/icon/search.svg'} alt="translator" width={20} height={20} className="absolute left-[28%] top-1/2 transform -translate-y-1/2 text-[#303030]" />

//                         {searchTerm && (
//                             <div className="absolute top-full left-0 w-full bg-white border border-gray-200 mt-2 rounded-md shadow-md z-auto max-h-60 overflow-auto">
//                                 {filteredResults.length > 0 ? (
//                                     filteredResults.map((result, idx) => (
//                                         <Link
//                                             key={idx}
//                                             href={result.href}
//                                             onClick={() => setSearchTerm('')}
//                                             className="block px-4 py-2 hover:bg-gray-100 text-[#9C5027]"
//                                         >
//                                             {result.title}
//                                         </Link>
//                                     ))
//                                 ) : (
//                                     <div className="px-4 py-2  ">No results found</div>
//                                 )}
//                             </div>
//                         )}
//                     </div>

//                     {/* <div className="relative hidden md:flex justify-end w-64">
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="pl-8 pr-4 py-1 rounded-full border border-[#D6D6D6] w-3/4 focus:outline-none focus:ring-2"
//                         />
                        
//                         <Image src={'/icon/search.svg'} alt="translator" width={20} height={20} className="absolute left-[28%] top-1/2 transform -translate-y-1/2 text-[#303030]" />

//                         {searchTerm && (
//                             <div className="absolute top-full left-0 w-full bg-white border border-gray-200 mt-2 rounded-md shadow-md z-auto max-h-60 overflow-auto">
//                                 {filteredResults.length > 0 ? (
//                                     filteredResults.map((result, idx) => (
//                                         <Link
//                                             key={idx}
//                                             href={result.href}
//                                             onClick={() => setSearchTerm('')}
//                                             className="block px-4 py-2 hover:bg-gray-100 text-[#9C5027]"
//                                         >
//                                             {result.title}
//                                         </Link>
//                                     ))
//                                 ) : (
//                                     <div className="px-4 py-2  ">No results found</div>
//                                 )}
//                             </div>
//                         )}

//                     </div> */}

//                     {/* Mobile Search Icon */}
//                     <button
//                         onClick={() => setMobileSearchOpen(true)}
//                         className="md:hidden p-2 hover:bg-gray-100 rounded-full"
//                     >
//                         {/* <FaSearch className="text-[#303030]" size={23} /> */}
//                         <Image src={'/icon/search.svg'} alt="translator" width={23} height={23} />
//                     </button>

//                     {/* Language Button */}
//                     <button className="p-2 hover:bg-gray-100 rounded-full" onClick={toggleLanguage}>
//                         <Image src={'/icon/language.svg'} alt="translator" width={23} height={23} />
//                     </button>
//                 </div>
//             </nav>

//             {/* Mobile Search Overlay */}
//             {mobileSearchOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-start pt-32 px-6 flex-col">
//                     {/* Close Button */}
//                     <button
//                         onClick={() => {
//                             setSearchTerm('')
//                             setMobileSearchOpen(false)
//                         }}
//                         className="absolute top-6 right-6 text-white text-2xl"
//                     >
//                         <IoClose />
//                     </button>

//                     {/* Centered Search Bar */}
//                     <div className="w-full">
//                         <div className="relative w-full">
//                             <input
//                                 type="text"
//                                 placeholder="Search..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 className="pl-10 pr-4 py-2 rounded-full border border-[#D6D6D6] w-full focus:outline-none focus:ring-2"
//                             />
//                             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#303030]" />
//                         </div>

//                         {/* Mobile Search Results */}
//                         {/* Mobile Search Results */}
//                         {searchTerm && (
//                             <div className="mt-4 bg-white w-full rounded-md shadow-md max-h-[300px] overflow-y-auto">
//                                 {filteredResults.length > 0 ? (
//                                     filteredResults.map((result, idx) => (
//                                         <Link
//                                             key={idx}
//                                             href={result.href}
//                                             onClick={(e) => {
//                                                 e.preventDefault();
//                                                 try {
//                                                     console.log("Navigating to:", result.href);
//                                                     setSearchTerm('');
//                                                     setMobileSearchOpen(false);
//                                                     router.push(result.href);
//                                                 } catch (error) {
//                                                     console.error("Navigation error:", error);
//                                                 }
//                                             }}
//                                             className="block w-full text-left px-4 py-2 border-b border-gray-200 hover:bg-gray-100 text-[#9C5027]"
//                                         >
//                                             {result.title}
//                                         </Link>
//                                     ))
//                                 ) : (
//                                     <div className="px-4 py-2  ">No results found</div>
//                                 )}
//                             </div>
//                         )}

//                     </div>
//                 </div>
//             )}
//         </>
//     )
// }

// export default Navbar