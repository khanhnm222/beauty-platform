"use client";
import { ADVISORY, CATEGORIES, HOME, LIVE } from "@/constants";
import { cn } from "@/lib/utils";
import { isEmptyString } from "@/utils/validates";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const Menu = () => {
  const pathname = usePathname();
  console.log(pathname);

  const activatedMenu = useMemo((): string => {
    if (pathname) {
      if (pathname.includes(LIVE)) return LIVE;
      if (pathname.includes(ADVISORY)) return ADVISORY;
      if (pathname.includes(CATEGORIES)) return CATEGORIES;
      if (pathname.includes(HOME)) return HOME;
    }
    return '';
  }, [pathname]);

  return (
    <nav className="bg-white px-8">
      <div className="-mb-px flex justify-center">
        <Link
          href={HOME}
          className={cn(
            "no-underline uppercase tracking-wide font-bold text-xs py-3 mr-8",
            activatedMenu === HOME && "text-primary border-b-2 border-primary"
          )}
        >
          Home
        </Link>
        <Link
          href={CATEGORIES}
          className={cn(
            "no-underline text-grey-dark uppercase tracking-wide font-bold text-xs py-3 mr-8",
            activatedMenu === CATEGORIES && "text-primary border-b-2 border-primary"
          )}
        >
          Categories
        </Link>
        <Link
          href={ADVISORY}
          className={cn(
            "no-underline text-grey-dark uppercase tracking-wide font-bold text-xs py-3 mr-8",
            activatedMenu === ADVISORY && "text-primary border-b-2 border-primary"
          )}
        >
          Advisory
        </Link>
        <Link
          href={LIVE}
          className={cn(
            "no-underline text-grey-dark uppercase tracking-wide font-bold text-xs py-3 mr-8",
            activatedMenu === LIVE && "text-primary border-b-2 border-primary"
          )}
        >
          Live
        </Link>
      </div>
    </nav>
  );
};

export default Menu;