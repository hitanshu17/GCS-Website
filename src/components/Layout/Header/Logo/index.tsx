import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => (
  <Link
    href="/"
    className="flex items-center gap-4 text-2xl font-semibold text-black dark:text-white"
  >
    {/* <Image
      src="/images/logo/logo.svg"
      alt="Gupta Cold Storage"
      width={160}
      height={50}
      style={{ width: "auto", height: "auto" }}
      quality={100}
    /> */}
    Gupta Cold Storage
  </Link>
);

export default Logo;
