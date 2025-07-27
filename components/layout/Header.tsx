"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";
import navData from "@/constants/links.json";
import type { NavItem } from "@/app/types/types";
import Link from "next/link";
import MiniWindow from "../ui/MiniWindow";

export default function Header() {
  const NAVLINKS: NavItem[] = navData.NAVLINKS;

  // State to track which top‑level dropdown is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Ref to hold the closing timer
  const closeTimer = useRef<number>(0);

  const onEnter = (i: number) => {
    // cancel any pending close
    window.clearTimeout(closeTimer.current);
    // open this menu immediately
    setOpenIndex(i);
  };

  const onLeave = () => {
    // schedule close in 500ms
    closeTimer.current = window.setTimeout(() => {
      setOpenIndex(null);
    }, 500);
  };

  return (
    <header className="flex px-20 h-[100px] justify-between items-center border-b border-b-gray/30 sticky top-0 z-40 bg-background/50 backdrop-blur-[3px] shadow-sm-primary">
      <Link href="/" className="hover:cursor-pointer">
        <Image
          src="/logo.svg"
          alt="Wilmington Logo"
          width={300}
          height={150}
          priority
        />
      </Link>

      <nav className="flex gap-2 items-center">
        {NAVLINKS.map((item, i) => (
          <div
            key={i}
            className="relative"
            onMouseEnter={() => onEnter(i)}
            onMouseLeave={onLeave}
          >
            <button className="flex items-center px-4 py-2 rounded hover:bg-primary/10 hover:cursor-pointer">
              {item.title}
              {item.children && <ChevronDown className="w-4 h-4 ml-1" />}
            </button>

            {item.children && (
              <div
                className={`
                  absolute top-full left-0 mt-1
                  transition-opacity duration-200 hover:cursor-pointer
                  ${
                    openIndex === i
                      ? "opacity-100 visible pointer-events-auto"
                      : "opacity-0 invisible pointer-events-none"
                  }
                  bg-white shadow-lg rounded-md p-2 z-10 min-w-max
                `}
              >
                <ul className="space-y-1">
                  {item.children.map((child, j) => (
                    <li key={j} className="relative group">
                      {child.children ? (
                        <button className="flex items-center w-full px-4 py-2 rounded hover:bg-primary/10 hover:cursor-pointer">
                          {child.link ? (
                            <Link href={child.link}>{child.title}</Link>
                          ) : (
                            <>{child.title}</>
                          )}

                          <ChevronDown className="w-4 h-4 ml-1" />
                        </button>
                      ) : child.site ? (
                        <MiniWindow
                          title={child.title}
                          link={child.site}
                          className="block w-full text-left px-4 py-2 rounded hover:bg-primary/10 hover:cursor-pointer"
                        />
                      ) : (
                        <Link
                          href={child.link!}
                          className="block px-4 py-2 rounded hover:bg-primary/10 hover:cursor-pointer"
                        >
                          {child.title}
                        </Link>
                      )}

                      {child.children && (
                        <ul
                          className="
                          hover:cursor-pointer
                            absolute top-0 left-full ml-1
                            opacity-0 invisible pointer-events-none
                            group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
                            transition-opacity duration-200
                            bg-white shadow-lg rounded-md p-2 z-10 min-w-max
                          "
                        >
                          {child.children.map((sub, k) => (
                            <li key={k}>
                              <Link
                                href={sub.link!}
                                className="block px-4 py-2 rounded hover:bg-primary/10 hover:cursor-pointer"
                              >
                                {sub.title}
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

        {/* === Search bar === */}
        <form className="flex items-center border border-dark/50 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary ml-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-[160px] outline-none placeholder:text-dark/60"
          />
          <button
            type="submit"
            className="px-3 flex items-center"
            aria-label="Search"
          >
            <Search size={18} className="text-primary" />
          </button>
        </form>
      </nav>
    </header>
  );
}
