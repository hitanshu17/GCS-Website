import Link from "next/link";
import { HeaderItem } from "@/types/menu";

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => (
  <Link
    href={item.href}
    className="flex w-full items-center justify-between py-2 text-muted focus:outline-none"
  >
    {item.label}
  </Link>
);

export default MobileHeaderLink;
