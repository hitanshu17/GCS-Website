"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { headerData } from "@/components/Layout/Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        navbarOpen
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navbarOpen]);

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        sticky
          ? "bg-white py-4 shadow-lg dark:bg-gray-600"
          : "py-8 shadow-none"
      }`}
    >
      <div className="py-2 lg:py-0">
        <div className="container mx-auto flex items-center justify-between px-4 md:max-w-screen-md lg:max-w-screen-xl">
          <Logo />
          <nav className="hidden flex-grow items-center justify-center gap-8 lg:flex">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#contact-section"
              className="hidden items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary/90 md:inline-flex"
            >
              <Icon icon="solar:phone-bold" className="mr-2 inline-block text-lg" />
              Contact team
            </Link>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block rounded-lg p-2 lg:hidden"
              aria-label="Toggle mobile menu"
            >
              <span className="block h-0.5 w-6 bg-black dark:bg-white" />
              <span className="mt-1.5 block h-0.5 w-6 bg-black dark:bg-white" />
              <span className="mt-1.5 block h-0.5 w-6 bg-black dark:bg-white" />
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className="fixed inset-0 z-40 h-full w-full bg-black/50" />
        )}
        <div
          ref={mobileMenuRef}
          className={`fixed top-0 right-0 z-50 h-full w-full max-w-xs transform bg-darkmode shadow-lg transition-transform duration-300 lg:hidden ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4">
            <Logo />
            <button
              onClick={() => setNavbarOpen(false)}
              className="absolute right-0 top-0 mr-8 mt-8 h-5 w-5 bg-[url('/images/closed.svg')] bg-contain bg-no-repeat dark:invert"
              aria-label="Close menu"
            />
          </div>
          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <Link
              href="#contact-section"
              onClick={() => setNavbarOpen(false)}
              className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary/90"
            >
              <Icon icon="solar:phone-bold" className="mr-2 inline-block text-lg" />
              Contact team
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
