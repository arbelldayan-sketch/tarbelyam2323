import { useState, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "figma:asset/0f3b5cb2822012781a12c6afdab29e390d28aa2a.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);
  const location = useLocation();
  const closeTimeoutRef = useRef<number | null>(null);

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsActivitiesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsActivitiesOpen(false);
    }, 300); // עיכוב של 300 מילישניות לפני סגירה
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src={logo} 
              alt="טש״ח ים" 
              className="h-14 w-14 object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-[hsl(210,15%,25%)]">טש"ח ים</div>
              <div className="text-sm text-muted-foreground">טיפול שיקומי חברתי ימי</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors hover:text-[#4ECDC4] ${
                isActive("/") ? "text-[#4ECDC4]" : "text-[hsl(210,15%,25%)]"
              }`}
            >
              בית
            </Link>

            <Link
              to="/about"
              className={`transition-colors hover:text-[#4ECDC4] ${
                isActive("/about") ? "text-[#4ECDC4]" : "text-[hsl(210,15%,25%)]"
              }`}
            >
              אודות
            </Link>

            {/* Activities Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 transition-colors hover:text-[#4ECDC4] text-[hsl(210,15%,25%)]">
                פעילויות
                <ChevronDown className={`w-4 h-4 transition-transform ${isActivitiesOpen ? "rotate-180" : ""}`} />
              </button>

              {isActivitiesOpen && (
                <div 
                  className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/activities/sailing"
                    className="block px-4 py-3 text-right hover:bg-slate-50 hover:text-[#4ECDC4] transition-colors"
                  >
                    שייט שיקומי
                  </Link>
                  <Link
                    to="/activities/fishing"
                    className="block px-4 py-3 text-right hover:bg-slate-50 hover:text-[#4ECDC4] transition-colors"
                  >
                    דייג
                  </Link>
                  <Link
                    to="/activities/diving"
                    className="block px-4 py-3 text-right hover:bg-slate-50 hover:text-[#4ECDC4] transition-colors"
                  >
                    צלילה
                  </Link>
                  <Link
                    to="/activities/rowing"
                    className="block px-4 py-3 text-right hover:bg-slate-50 hover:text-[#4ECDC4] transition-colors"
                  >
                    חתירה
                  </Link>
                  <Link
                    to="/activities/surfing"
                    className="block px-4 py-3 text-right hover:bg-slate-50 hover:text-[#4ECDC4] transition-colors"
                  >
                    גלישה
                  </Link>
                </div>
              )}
            </div>

            <a
              href="https://victorious-volunteer-connect-now.base44.app"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors hover:text-[#4ECDC4] ${
                isActive("/volunteers") ? "text-[#4ECDC4]" : "text-[hsl(210,15%,25%)]"
              }`}
            >
              התנדבות
            </a>
          </nav>

          {/* Donation CTA Button */}
          <a
            href="https://tashahyam0.base44.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2.5 bg-[#4ECDC4] text-white rounded-full shadow-md hover:shadow-lg hover:bg-[#44A08D] hover:scale-105 transition-all duration-200"
          >
            תרומה
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[hsl(210,15%,25%)]" />
            ) : (
              <Menu className="w-6 h-6 text-[hsl(210,15%,25%)]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-4 text-right">
              <Link
                to="/"
                className="py-2 hover:text-[#4ECDC4] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                בית
              </Link>

              <Link
                to="/about"
                className="py-2 hover:text-[#4ECDC4] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                אודות
              </Link>

              <div>
                <button
                  className="w-full text-right py-2 flex items-center justify-end gap-1 hover:text-[#4ECDC4] transition-colors"
                  onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
                >
                  פעילויות
                  <ChevronDown className={`w-4 h-4 transition-transform ${isActivitiesOpen ? "rotate-180" : ""}`} />
                </button>

                {isActivitiesOpen && (
                  <div className="mr-4 mt-2 flex flex-col gap-2">
                    <Link
                      to="/activities/sailing"
                      className="py-2 hover:text-[#4ECDC4] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      שייט שיקומי
                    </Link>
                    <Link
                      to="/activities/fishing"
                      className="py-2 hover:text-[#4ECDC4] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      דייג
                    </Link>
                    <Link
                      to="/activities/diving"
                      className="py-2 hover:text-[#4ECDC4] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      צלילה
                    </Link>
                    <Link
                      to="/activities/rowing"
                      className="py-2 hover:text-[#4ECDC4] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      חתירה
                    </Link>
                    <Link
                      to="/activities/surfing"
                      className="py-2 hover:text-[#4ECDC4] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      גלישה
                    </Link>
                  </div>
                )}
              </div>

              <a
                href="https://victorious-volunteer-connect-now.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 hover:text-[#4ECDC4] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                התנדבות
              </a>

              <a
                href="https://tashahyam0.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2.5 bg-[#4ECDC4] text-white rounded-full shadow-md text-center hover:shadow-lg hover:bg-[#44A08D] transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                תרומה
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}