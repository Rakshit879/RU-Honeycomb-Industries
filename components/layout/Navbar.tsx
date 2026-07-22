"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Container from "../common/Container";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled? "bg-white/80 backdrop-blur-xl shadow-md": "bg-transparent"}`}>
            <Container>
            <div className="flex h-24 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo/logo.png"
                        alt="RU Honeycomb Industries"
                        width={170}
                        height={55}
                        className="h-auto w-[170px] transition duration-300 hover:scale-105"
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
                    {navigation.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className={`relative text-[15px] font-medium transition-all duration-300 ${pathname === link.href? "text-blue-700":"text-slate-700 hover:text-blue-700"} after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 ${pathname === link.href ? "after:w-full": "after:w-0 over:after:w-full"}`}>
                            {link.title}
                        </Link>
                    ))}

                    <Button size="lg" className="rounded-full px-7">
                        Request Quote
                    </Button>
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

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="border-t bg-white lg:hidden shadow-lg"
                    >
                    <nav className="flex flex-col gap-5 p-6">
                        {navigation.map((link) => (
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
                    </motion.div>
  )}
</AnimatePresence>
            </Container>
        </header>
    );
}