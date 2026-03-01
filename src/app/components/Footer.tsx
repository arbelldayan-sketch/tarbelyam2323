import { Link } from "react-router";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">אודות טש"ח ים</h3>
            <p className="text-white/90 leading-relaxed">
              טיפול שיקומי חברתי ימי - מספקים פעילויות ימיות טיפוליות המשלבות שיקום
              פיזי, רגשי וחברתי בסביבה ימית מרגיעה ומעצימה.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/90 hover:text-white transition-colors">
                  בית
                </Link>
              </li>
              <li>
                <Link to="/activities/sailing" className="text-white/90 hover:text-white transition-colors">
                  שייט שיקומי
                </Link>
              </li>
              <li>
                <Link to="/activities/fishing" className="text-white/90 hover:text-white transition-colors">
                  דייג
                </Link>
              </li>
              <li>
                <Link to="/activities/diving" className="text-white/90 hover:text-white transition-colors">
                  צלילה
                </Link>
              </li>
              <li>
                <Link to="/activities/rowing" className="text-white/90 hover:text-white transition-colors">
                  חתירה
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-white/90 hover:text-white transition-colors">
                  התנדבות
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">יצירת קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 justify-end text-white/90">
                <a href="mailto:pnyhym@gmail.com" className="hover:text-white transition-colors">
                  pnyhym@gmail.com
                </a>
                <Mail className="w-5 h-5" />
              </li>
              <li className="flex items-center gap-2 justify-end text-white/90">
                <a 
                  href="https://wa.me/972515800826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  051-580-0826
                </a>
                <Phone className="w-5 h-5" />
              </li>
              <li className="flex items-center gap-2 justify-end text-white/90">
                <span>הרצליה, ישראל</span>
                <MapPin className="w-5 h-5" />
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6 justify-end">
              <a
                href="https://www.facebook.com/profile.php?id=61588183625693&locale=he_IL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/tashah_yam?igsh=MnFha3c0Yng3aWg%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
          <p>© {new Date().getFullYear()} טש"ח ים - כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
}