"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import darkLogo from "../../../public/brand_dark.png";
import lightLogo from "../../../public/brand_white.png";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { SunIcon, MoonIcon } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  return (
    <header>
      <div className="px-4 sm:px-8 py-8">
        <nav className="flex justify-between items-center ">
          <div>
            {theme === "light" ? (
              <Image
                style={{ display: "inline" }}
                src={lightLogo}
                width={200}
                height={500}
                alt="Picture of the logo"
                priority={true}
                className="h-auto w-auto"
              />
            ) : (
              <Image
                style={{ display: "inline" }}
                src={darkLogo}
                width={200}
                height={500}
                alt="Picture of the logo"
                priority={true}
                className="h-auto w-auto"
              />
            )}
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
            <Link
              className={`uppercase link ${
                pathname === "/what-i-do" ? "active" : ""
              }`}
              href="/contact"
            >
              Contact
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
