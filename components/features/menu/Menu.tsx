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
        <button
      className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
    >
      <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-6 w-6"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
        </svg>
      </span>
    </button>
     </div>
</nav>
  );
};

export default Menu;