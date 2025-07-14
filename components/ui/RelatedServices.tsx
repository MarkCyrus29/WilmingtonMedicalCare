import React from "react";
import Link from "next/link";

function RelatedServices({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-primary/30"
    >
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
            {title}
          </h4>
          <div className=" flex items-center text-primary opacity-100 md:opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2 md:group-hover:translate-x-0 duration-300 ">
            <span className="text-sm font-medium">Learn more</span>
            <svg
              className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RelatedServices;
