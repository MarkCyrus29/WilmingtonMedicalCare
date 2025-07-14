import React from "react";
import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";
import navData from "@/constants/links.json";
import type { NavItem } from "@/app/types/types";
import Link from "next/link";

function Header() {
  const NAVLINKS: NavItem[] = navData.NAVLINKS;
  return (
    <header className="flex px-20 h-[100px] justify-between items-center border-b border-b-primary/20 sticky top-0 z-50 bg-background/50 backdrop-blur-[3px] shadow-sm-primary">
      <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          alt="Wilmington Logo Image"
          width={300}
          height={150}
          priority
        />
      </Link>

      <nav className="flex gap-2 items-center ">
        {NAVLINKS.map((item, index) => (
          <div key={index} className="relative group">
            {/* Main Link */}
            {item.site ? (
              <a
                href={item.site}
                target="_blank"
                className="flex items-center transition-opacity duration-100 hover:bg-gray/50 py-2 px-4 rounded h-full whitespace-nowrap peer justify-between"
                tabIndex={0}
              >
                {item.title}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </a>
            ) : (
              <Link
                href={item.link || "#"}
                className="flex items-center transition-opacity duration-100 hover:bg-gray/50 py-2 px-4 rounded h-full whitespace-nowrap peer justify-between"
                tabIndex={0}
              >
                {item.title}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </Link>
            )}

            {/* Dropdown (1st level) */}
            {item.children && (
              <div
                className="absolute top-full left-0 ml-1
                opacity-0 invisible pointer-events-none
                peer-hover:opacity-100 peer-hover:visible peer-hover:pointer-events-auto
                peer-focus:opacity-100 peer-focus:visible peer-focus:pointer-events-auto
                hover:opacity-100 hover:visible hover:pointer-events-auto
                transition-opacity duration-300 delay-150
                bg-white shadow-lg rounded-md p-2 z-10 min-w-max"
              >
                <ul className="space-y-1">
                  {item.children.map((child, childIndex) => (
                    <li key={childIndex} className="relative">
                      {/* The parent link is the peer */}
                      {child.site ? (
                        <a
                          href={child.site}
                          target="_blank"
                          className="flex items-center transition-opacity duration-100 hover:bg-gray/50 py-2 px-4 rounded h-full whitespace-nowrap peer justify-between"
                          tabIndex={0}
                        >
                          {child.title}
                          {child.children && (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </a>
                      ) : (
                        <Link
                          href={child.link || "#"}
                          className="flex items-center transition-opacity duration-100 hover:bg-gray/50 py-2 px-4 rounded h-full whitespace-nowrap peer justify-between"
                          tabIndex={0}
                        >
                          {child.title}
                          {child.children && (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </Link>
                      )}
                      {/* The sub-submenu shows when hovering/focusing the peer <a> OR when hovering the submenu itself */}
                      {child.children && (
                        <ul
                          className="absolute top-0 left-full ml-1
                            opacity-0 invisible pointer-events-none
                            peer-hover:opacity-100 peer-hover:visible peer-hover:pointer-events-auto
                            peer-focus:opacity-100 peer-focus:visible peer-focus:pointer-events-auto
                            hover:opacity-100 hover:visible hover:pointer-events-auto
                            transition-opacity duration-300 delay-150
                            bg-white shadow-lg rounded-md p-2 z-10 min-w-max"
                        >
                          {child.children.map((subChild, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subChild.link || "#"}
                                className="block px-4 py-1 text-sm text-gray-600 hover:bg-gray/50 rounded whitespace-nowrap"
                                tabIndex={0}
                              >
                                {subChild.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        {/* Search bar with icon */}
        <form className="flex items-center border border-dark/50 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary ml-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 outline-none w-[160px] placeholder:text-dark/60"
          />
          <button
            type="submit"
            className="px-3 h-full flex items-center justify-center text-primary transition cursor-pointer"
          >
            <Search size={18} />
          </button>
        </form>
      </nav>
    </header>
  );
}

export default Header;
