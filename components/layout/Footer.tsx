import Image from "next/image";
import Link from "next/link";
import footerData from "@/constants/links.json";
import type { FooterLink } from "@/app/types/types";

export default function Footer() {
  const FOOTERLINKS: FooterLink[] = footerData.FOOTERLINKS;
  const LEGALLINKS = [
    {
      href: "/privacy-policy",
      label: "Privacy Policy",
    },
    {
      href: "/terms-of-service",
      label: "Terms of Service",
    },
    {
      href: "/accessibility",
      label: "Accessibility Notice",
    },
  ];

  return (
    <footer className="text-sm px-8 md:px-20 py-12 flex-col items-center border-t border-gray">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div className="space-y-4">
          <Image
            src="/logo.svg"
            alt="Wilmington Medical Care Logo"
            width={320}
            height={150}
            priority
            className="pt-2"
          />
          <p className="w-[85%] !text-sm">
            Medical Services and Behavioral Care. Our goal is to offer
            accessible and universal care to all in our community.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h4 className="text-base font-semibold mb-2">Our Clinic</h4>
          <address className="not-italic text-dark/70">
            3825 Market Street, Suite 6
            <br />
            Wilmington, NC 28403
          </address>
          <p className="!text-sm">
            Phone:{" "}
            <a href="tel:9107775575" className="hover:underline">
              910-777-5575
            </a>
          </p>
          <p className="!text-sm">Fax: 910-777-5273</p>
          <p className="!text-sm">
            Email:{" "}
            <a href="mailto:info@wmhwc.com" className="hover:underline">
              info@wmhwc.com
            </a>
          </p>
          <p className="!text-sm">
            Visit us Monday - Friday <br />
            9:00 a.m. - 6:00 p.m.
          </p>
        </div>

        {/* Navigation & Legal */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-base font-semibold mb-2">Links</h4>
            <ul className="space-y-1">
              {FOOTERLINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="hover:underline text-gray">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-2">Legal</h4>
            <ul className="space-y-1">
              {LEGALLINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link className="hover:underline text-gray" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-dark/40 pt-6 text-center text-gray-500">
        © 2025 Wilmingtonc:\Users\Cyrus\Documents\coding-shit\Projects\008 Wilmington-mentalhealth\wilmington\components\ui\Spinner.tsx Medical Care
      </div>
    </footer>
  );
}
