import Image from "next/image";
import logo from '@/public/belle-logo.png';
import styles from './style.module.css';
import { IconAccount, IconNotification, IconSearch } from "@/components/icons";

const NavigationBar = () => {
  return (
    <div className="fixed w-full z-30 flex bg-white dark:bg-[#0F172A] p-2 items-center justify-center h-16 px-10 bg-gradient-2 border-b-2 border-primary">
      <div className={styles.logoContainer}>
        <Image src={logo} width={100} height={100} alt="logo"/>
        <div className="logo text-white transform ease-in-out duration-500 flex-none h-full flex items-center justify-center">
          Belle
        </div>
      </div>
      <div className="grow h-full flex items-center justify-center">
      <div className="relative text-gray-600 ">
        <div className="border-2 rounded-full border-primary">
          <input type="search" name="serch" placeholder="Search" className="bg-white h-8 px-5 pr-10 rounded-full text-sm focus:outline-none" />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <IconSearch />
          </button>
        </div>
      </div>
      </div>
      <div className="flex-none h-full text-center flex items-center justify-center">
        <div className="flex space-x-3 items-center px-3">
          <div className="flex-none flex justify-center">
            <IconNotification width={'90px'} height='30px' />
            <div className="w-8 h-8 flex ">
              <IconAccount width={'90px'} height='30px' />
            </div>
          </div>
          <div className="hidden md:block text-sm md:text-md text-black dark:text-white">
            Admin
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;