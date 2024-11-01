"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/brand.png";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="px-4 sm:px-8 py-8">
        <nav className="flex justify-between items-center ">
          <div>
            <Image
              style={{ display: "inline" }}
              src={logo}
              width={200}
              height={500}
              alt="Picture of the author"
              priority={true}
            />
          </div>
          <div className="space-x-8">
            <Link
              className={`uppercase link ${pathname === "/" ? "active" : ""}`}
              href="/"
            >
              Who I am
            </Link>

            <Link
              className={`uppercase link ${
                pathname === "/what-i-do" ? "active" : ""
              }`}
              href="/what-i-do"
            >
              What I do
            </Link>
            <Link
              className={`uppercase link ${
                pathname === "/what-i-do" ? "active" : ""
              }`}
              href="/insights"
            >
              Insights
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
