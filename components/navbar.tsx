"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import Image from "next/image";
import logo from "@/assets/logo_white.png";
import Link from "next/link";

export const Navbar = () => {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#who-its-for", label: "Who It's For" },
    { href: "#benefits", label: "Benefits" },
    { href: "#impact", label: "Impact" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      classNames={{
        base: "bg-transparent backdrop-blur-none",
        menu: "bg-[#0F3D3E]",
      }}
    >
      <Image src={logo} height={80} width={80} alt="logo" />

      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="hidden lg:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <a
                href={item.href}
                className="text-white hover:text-yellow-500 transition-colors text-sm"
              >
                {item.label}
              </a>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent justify="end">
        <Button
          as={Link}
          href="https://play.google.com/store/apps/details?id=com.daksh.daksh"
          target="_blank"
          className="bg-gradient-to-r from-[#F6C04A] to-[#F2B233] font-semibold"
        >
          Get Started
        </Button>
      </NavbarContent>

      <NavbarMenuToggle className="lg:hidden text-white" />

      <NavbarMenu>
        <div className="mx-4 mt-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <a
                href={item.href}
                className="text-white hover:text-yellow-500 transition-colors text-sm cursor-pointer"
              >
                {item.label}
              </a>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
