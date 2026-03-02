import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import MainLogo from "@/src/assets/MainLogo.png";
import MainLogoLight from "@/src/assets/MainLogoLight.png";

import * as Icon from "@/src/components/icons";
import { Button } from "@/src/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/src/components/ui/drawer";

import { cn } from "@/src/lib/utils";
import { useUIStore } from "@/src/stores/stores";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Collections", path: "/collections" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Journal", path: "/journal" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const { themeMode, toggleTheme, mobileNavOpen, setMobileNavOpen } =
    useUIStore();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-xl"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
        <Link to="/">
          <img
            src={
              isHome && !isScrolled
                ? MainLogo
                : themeMode === "dark"
                  ? MainLogo
                  : MainLogoLight
            }
            alt="Lumina"
            className="h-20 object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                location.pathname === item.path
                  ? "text-accent"
                  : !isScrolled && isHome
                    ? "text-white/80"
                    : "text-foreground/80",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={cn(
              "rounded-full",
              !isScrolled && isHome ? "text-white hover:bg-white/10" : "",
            )}
          >
            {themeMode === "light" ? (
              <Icon.Moon size={18} />
            ) : (
              <Icon.Sun size={18} />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-full hidden sm:flex",
              !isScrolled && isHome ? "text-white hover:bg-white/10" : "",
            )}
          >
            <Icon.Search size={18} />
          </Button>

          <Link to="/contact">
            <Button className="hidden sm:flex rounded-full">Book Now</Button>
          </Link>

          <Drawer
            open={mobileNavOpen}
            onOpenChange={setMobileNavOpen}
            direction="right"
          >
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "md:hidden rounded-full",
                  !isScrolled && isHome ? "text-white hover:bg-white/10" : "",
                )}
              >
                <Icon.Menu size={24} />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-full w-75 sm:w-100 right-0 left-auto rounded-none mt-0">
              <div className="flex flex-col gap-6 p-8 mt-8">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileNavOpen(false)}
                    className={cn(
                      "text-2xl font-bold transition-colors hover:text-accent",
                      location.pathname === item.path
                        ? "text-accent"
                        : "text-foreground/80",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-8 pt-8 border-t">
                  <Link to="/contact" onClick={() => setMobileNavOpen(false)}>
                    <Button className="w-full rounded-full py-6 text-lg">
                      Start a Project
                    </Button>
                  </Link>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};
