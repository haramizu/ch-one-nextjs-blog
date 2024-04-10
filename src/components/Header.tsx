"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ThemeSwitcher } from "./ThemeSwither";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="p-4 flex justify-between items-center">
      <div className="flex-none w-40 mr-8">
        <Link href="/">
          {theme === "dark" ? (
            <Image
              src="/content-hub-one-horizontal-color-white-txt.svg"
              alt="Content Hub ONE"
              className="h-8"
              width={350}
              height={150}
            />
          ) : (
            <Image
              src="/content-hub-one-horizontal-color-black-txt.svg"
              alt="Content Hub ONE"
              className="h-8"
              width={350}
              height={150}
            />
          )}
        </Link>
      </div>
      <div className="grow flex">
        <div className="space-x-4">
          <Link href="/blog">Blog</Link>
          <Link href="/tags">Tags</Link>
        </div>
      </div>
      <div className="flex-none flex-row">
        <div className="flex space-x-4">
          <div className="flex-none">
            <ThemeSwitcher />
          </div>
          <div className="flex-none">
            <Link
              href="https://github.com/haramizu/ch-one-nextjs-blog"
              target="_blank"
              className="text-2xl"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
