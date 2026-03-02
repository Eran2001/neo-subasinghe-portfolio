import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Search, Camera } from 'lucide-react';
import { useUIStore } from '@/src/stores/stores';
import { Button } from '@/src/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/src/components/ui/sheet';
import { cn } from '@/src/lib/utils';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Collections', path: '/collections' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Journal', path: '/journal' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const { themeMode, toggleTheme, mobileNavOpen, setMobileNavOpen } = useUIStore();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-background/80 backdrop-blur-md border-b py-3 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white transition-transform group-hover:rotate-12">
            <Camera size={20} />
          </div>
          <span className={cn(
            "text-xl font-bold tracking-tighter",
            !isScrolled && isHome ? "text-white" : "text-foreground"
          )}>
            LUMINA
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                location.pathname === item.path ? "text-accent" : (!isScrolled && isHome ? "text-white/80" : "text-foreground/80")
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={cn(
              "rounded-full",
              !isScrolled && isHome ? "text-white hover:bg-white/10" : ""
            )}
          >
            {themeMode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-full hidden sm:flex",
              !isScrolled && isHome ? "text-white hover:bg-white/10" : ""
            )}
          >
            <Search size={18} />
          </Button>

          <Link to="/contact">
            <Button className="hidden sm:flex rounded-full px-6">
              Book Now
            </Button>
          </Link>

          {/* Mobile Menu Trigger */}
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "md:hidden rounded-full",
                  !isScrolled && isHome ? "text-white hover:bg-white/10" : ""
                )}
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-12">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileNavOpen(false)}
                    className={cn(
                      "text-2xl font-bold transition-colors hover:text-accent",
                      location.pathname === item.path ? "text-accent" : "text-foreground/80"
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
