"use client";
import Image from "next/image";
import logo from '@/public/belle-logo.png';
import styles from './style.module.css';
import { IconNotification, IconSearch } from "@/components/icons";
import Menu from "../menu/menu";
import IconHeart from "@/components/icons/IconHeart";
import { cn } from "@/lib/utils";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { useState } from "react";
import MobileMenu from "../menu/mobile-menu";
import { useRouter } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="justify-between fixed w-full z-30 flex bg-white dark:bg-[#0F172A] p-2 items-center h-16 px-10 bg-gradient-2 border-b-[1px] border-primary">
      <div className={cn(
        styles.logoContainer,
      )}
      >
        <Image src={logo} width={100} height={100} alt="logo" onClick={() => router.push('/', { scroll: false })} />
      </div>
      <div className="hidden md:flex lg:flex grow h-full items-center justify-center">
        <div>
          <Menu />
        </div>
        <div className="hidden lg:flex relative text-gray-600 ">
          <div className="border-[1.5px] rounded-full border-primary">
            <input type="search" name="serch" placeholder="Search" className="bg-white h-8 px-5 pr-10 rounded-full text-sm focus:outline-none" />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <IconSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="flex-none h-full text-center flex items-center justify-center">
        <div className="flex space-x-3 items-center px-3">
          <div className="flex-none flex justify-center gap-1 items-center">
            <button className={
              cn(
                'h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-primary transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
                styles.alignCenter
              )}
              data-ripple-dark="true"
            >
              <IconNotification width={''} height='25px' />
            </button>
            <button className={
              cn(
                'h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
                styles.alignCenter
              )}
              data-ripple-dark="true"
            >
              <IconHeart width={''} height='20px' />
            </button>
            <Popover>
              <PopoverTrigger asChild>
                <button type="button" className="dropdown-toggle flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 relative">
                    <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                      <img className="w-8 h-8 rounded-full" src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg" alt="" />
                      <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
                      <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-2 md:block text-left">
                    <h2 className="text-sm font-semibold text-gray-800">John Doe</h2>
                    {/* <p className="text-xs text-gray-500">Administrator</p> */}
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[6rem]">
                <div className="grid gap-4 justify-center">
                  <div className="grid gap-2 cursor-pointer">
                    <div className="items-center gap-4">
                      <Label htmlFor="width" className="cursor-pointer hover:text-primary">Profile</Label>
                    </div>
                  </div>
                  <div className="grid gap-2 cursor-pointer">
                    <div className="items-center gap-4">
                      <Label htmlFor="width" className="cursor-pointer hover:text-primary">Settings</Label>
                    </div>
                  </div>
                  <div className="grid gap-2 cursor-pointer">
                    <div className="items-center gap-4">
                      <Label htmlFor="width" className="cursor-pointer hover:text-primary">Logout</Label>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="lg:hidden md:hidden cursor-pointer">
            <Bars3Icon
              aria-hidden="true"
              className="h-5 w-5 hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
    </div>
  );
};

export default NavigationBar;