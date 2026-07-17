"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// import { usePathname } from "next/navigation";

const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Products", href: "/products" },
    { title: "Manufacturing", href: "/manufacturing" },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact", href: "/contact" },
];


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 backdrop-blur-xl shadow-md"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo/logo.png"
                        alt="RU Honeycomb Industries"
                        width={170}
                        height={55}
                        className="h-auto w-[170px]"
                        priority
                    />

                    {/* <div>
            <p className="text-lg font-bold text-blue-700">
              RU Honeycomb
            </p>

            <p className="text-xs text-slate-500">
              Industries
            </p>
          </div> */}
                </Link>

                {/* Desktop */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {links.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="relative text-[15px] font-medium text-slate-700 transition-all duration-300 hover:text-blue-700 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full ">
                            {link.title}
                        </Link>
                    ))}

                    <button className="rounded-xl bg-blue-700 px-6 py-3 text-white transition hover:bg-blue-800">
                        Request Quote
                    </button>
                </nav>

                {/* Mobile */}
                <button
                    className="lg:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {open && (
                <div className="border-t bg-white lg:hidden">
                    <nav className="flex flex-col gap-5 p-6">
                        {links.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                onClick={() => setOpen(false)}
                            >
                                {link.title}
                            </Link>
                        ))}

                        <button className="rounded-full bg-blue-700 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl ">
                            Request Quote
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}