import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  const menu = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Explore", path: "/explore" },
    { id: 3, name: "Contact Us", path: "/contact" },
  ];
  return (
    <div className="flex items-center justify-between p-4 shadow-sm md:px-20">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo-ipsum" width={180} height={80} />
        <nav className="md:flex hidden gap-8">
          {menu.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              className="hover:text-primary hover:scale-105 transition-all ease-in-out"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
