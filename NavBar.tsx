"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/login", label: "Login" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/blog", label: "Blog" },
    { href: "/store", label: "Store" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-shahbaz-teal to-black/90 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/assets/images/shahbaz-logo-main.png" alt="SHAHBAZ" width={48} height={48} className="animate-pulse" />
          <span className="text-xl font-bold text-shahbaz-gold drop-shadow">SHAHBAZ</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {links.map(l => (
              <li key={l.href}>
                <Link className="font-semibold text-shahbaz-gold hover:underline" href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/80">
          <ul className="grid gap-2 p-4">
            {links.map(l => (
              <li key={l.href}>
                <Link className="block py-2 px-3 rounded hover:bg-white/10" href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
