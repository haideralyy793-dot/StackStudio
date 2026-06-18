import Image from "next/image";
import Link from "next/link";
import { footerNav, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative bg-black px-6 pt-16 pb-8">
      <div className="gradient-line mb-16" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Stack Studio"
                width={160}
                height={80}
                className="h-10 w-auto object-contain invert"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-[#888888]">
              Building tomorrow&apos;s digital products today.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-widest uppercase text-white/50">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerNav.navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#888888] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-widest uppercase text-white/50">
              Services
            </h4>
            <ul className="space-y-2">
              {footerNav.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#888888] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-widest uppercase text-white/50">
              Connect
            </h4>
            <ul className="space-y-2">
              {footerNav.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-[#888888] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-[#888888]">
            © {new Date().getFullYear()} Stack Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#888888] hover:text-[#C8FF00] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
