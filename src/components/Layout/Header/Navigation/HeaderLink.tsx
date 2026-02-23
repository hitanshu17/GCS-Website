"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "@/types/menu";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => item.submenu && setSubmenuOpen(true)}
      onMouseLeave={() => setSubmenuOpen(false)}
    >
      <Link
        href={item.href}
        className="flex font-medium text-black/50 duration-300 hover:text-primary dark:text-white/50 dark:hover:text-primary"
      >
        {item.label}
      </Link>
    </div>
  );
};

export default HeaderLink;
