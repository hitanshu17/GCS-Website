import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "@/components/Layout/Header/Navigation/menuData";
import Logo from "@/components/Layout/Header/Logo";

const Footer: FC = () => (
  <footer className="bg-darkmode pt-16">
    <div className="container mx-auto px-4 md:max-w-screen-md lg:max-w-screen-xl">
      <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-4 sm:gap-12 md:gap-6 lg:gap-20">
        <div className="col-span-2">
          <Logo />
          <p className="mt-5 mb-8 max-w-[70%] text-xs font-medium text-grey dark:text-white/60">
            Reliable cold storage in Sonipat, Haryana. Temperature-controlled
            facilities for kiryana, spices, dry fruits and nuts.
          </p>
          <p className="text-xs text-grey dark:text-white/60">
            Email:{" "}
            <Link
              href="mailto:anantagro777@gmail.com"
              className="font-semibold text-primary hover:underline"
            >
              anantagro777@gmail.com
            </Link>
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">
            Navigation
          </h4>
          <ul>
            {headerData.map((item, index) => (
              <li key={index} className="pb-3">
                <Link
                  href={item.href}
                  className="text-base text-black/70 hover:text-primary dark:text-white/70 dark:hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">
            Legal
          </h4>
          <ul>
            <li className="pb-3">
              <Link
                href="#"
                className="text-base text-black/70 hover:text-primary dark:text-white/70 dark:hover:text-primary"
              >
                Privacy policy
              </Link>
            </li>
            <li className="pb-3">
              <Link
                href="#"
                className="text-base text-black/70 hover:text-primary dark:text-white/70 dark:hover:text-primary"
              >
                Terms &amp; conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-grey/15 py-8 dark:border-white/15">
        <p className="text-sm text-black/70 dark:text-white/70">
          © {new Date().getFullYear()} Gupta Cold Storage.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
