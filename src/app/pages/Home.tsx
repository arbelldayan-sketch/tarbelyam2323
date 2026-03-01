import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Users, Heart, Waves, Trophy, Instagram, BookOpen, Shield, Gift, UsersRound, Sprout, Handshake, Mail, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroImages = [
  "https://images.unsplash.com/photo-1707409607630-32f792e04961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWlsaW5nJTIwdGhlcmFwZXV0aWMlMjBvY2VhbnxlbnwxfHx8fDE3NzE4Njk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1763866517746-d78f1609c723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzcxODUyMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1581845912101-b79003f1b71e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwc2VhJTIwc3Vuc2V0fGVufDF8fHx8MTc3MTg2OTk2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <ImageWithFallback
                src={img}
                alt="Hero background"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            טיפול שיקומי חברתי ימי
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
            מעצימים אנשים דרך פעילויות ימיות טיפוליות המשלבות שיקום פיזי, רגשי וחברתי
            בסביבה הימית המרגיעה והמעצימה
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://victorious-volunteer-connect-now.base44.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#4ECDC4] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#44A08D] hover:scale-105 transition-all duration-200"
            >
              הצטרפו להתנדבות
            </a>
            <a
              href="https://tashahyam0.base44.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#4ECDC4] rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              תרמו לעמותה
            </a>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#4ECDC4] mb-2">30+</div>
              <div className="text-[hsl(210,15%,25%)]">שנות ניסיון בחינוך וטיפול ימי</div>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#4ECDC4] mb-2">3,800+</div>
              <div className="text-[hsl(210,15%,25%)]">לוחמים שהשתתפו</div>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#4ECDC4] mb-2">10,000+</div>
              <div className="text-[hsl(210,15%,25%)]">שעות בים הפתוח</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(35,20%,98%)] to-white" dir="rtl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[hsl(210,15%,25%)] mb-12">
            הסיפור שלנו
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border-r-4 border-[#4ECDC4]">
              <p className="text-lg md:text-xl leading-relaxed text-[hsl(210,15%,25%)]">
                לפני כשנתיים, מתוך מציאות של מלחמה וחוסר ודאות, יצאנו לים. מה שהתחיל כמיזם 
                <strong className="text-[#4ECDC4]"> "להפליג עם לוחמים"</strong> הפגיש 3,800 לוחמים 
                עם המרחב הפתוח – מקום של נשימה, שקט וכוח מחודש. על הסיפון, בין הרוח לגלים, נוצר 
                מרחב שבו אפשר היה לרגע להרפות, להתחבר, ולהרגיש שוב יציבים בתוך סערה.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border-r-4 border-[#44A08D]">
              <p className="text-lg md:text-xl leading-relaxed text-[hsl(210,15%,25%)]">
                הים, כמו החיים עצמם, אינו תמיד רגוע. יש בו גלים גבוהים, רוחות משתנות ואתגרים 
                בלתי צפויים. אך דווקא בתוך התנועה הזו טמון פוטנציאל לריפוי. המפגש עם המים, האופק 
                והצוות שסביבך מזכיר שאפשר למצוא כיוון גם כשנדמה שאיבדנו אותו.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-2xl p-8 md:p-10 shadow-lg">
              <p className="text-lg md:text-xl leading-relaxed text-white mb-6">
                מתוך ההבנה הזו קמה <strong>עמותת טש״ח ים</strong>. אנו יוצרים מסגרת שיקומית 
                וטיפולית דרך הים עבור מי שנפגעו בנפשם במהלך המלחמה ולאחריה. בתוך המרחב הימי אנו 
                בונים קהילה תומכת, שוויונית ומכילה – מקום בטוח לצמיחה, להתחזקות ולחזרה הדרגתית 
                לאמון, בעצמם ובעולם.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-white font-semibold italic">
                בכל הפלגה אנחנו לא רק יוצאים לים – אנחנו יוצאים למסע של ריפוי, חיבור ומשמעות. 
                יחד, אנחנו בונים דרך חדשה של תקווה.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[hsl(210,15%,25%)] mb-4">
            הערכים המובילים שלנו
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
            ארבעת הערכים המרכזיים המנחים את כל פעילותנו ומשקפים את הזהות שלנו
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1: נתינה */}
            <div className="bg-gradient-to-br from-[hsl(35,20%,98%)] to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-[#4ECDC4]">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(210,15%,25%)] mb-4">
                  נתינה
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  אנחנו מאמינים בכוח של נתינה ללא תמורה. כל פעילות, כל הפלגה וכל מפגש 
                  נולדים מרצון אמיתי לתרום ולהעניק למי שזקוק לכך.
                </p>
              </div>
            </div>

            {/* Value 2: קהילה ואיכות */}
            <div className="bg-gradient-to-br from-[hsl(35,20%,98%)] to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-[#44A08D]">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <UsersRound className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(210,15%,25%)] mb-4">
                  קהילה ואיכות
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  אנו בונים קהילה תומכת ומכילה המבוססת על איכות הטיפול והתמיכה. 
                  כל משתתף הוא חלק מרשת של תמיכה הדדית וחיבור אמיתי.
                </p>
              </div>
            </div>

            {/* Value 3: צמיחה מתוך קושי */}
            <div className="bg-gradient-to-br from-[hsl(35,20%,98%)] to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-[#4ECDC4]">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Sprout className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(210,15%,25%)] mb-4">
                  צמיחה מתוך קושי
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  אנו מאמינים שבתוך כל אתגר טמון פוטנציאל לצמיחה. דרך הים והפעילויות 
                  הטיפוליות, אנו מסייעים למשתתפים להפוך קושי לכוח.
                </p>
              </div>
            </div>

            {/* Value 4: כבוד והדדיות */}
            <div className="bg-gradient-to-br from-[hsl(35,20%,98%)] to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-[#44A08D]">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Handshake className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(210,15%,25%)] mb-4">
                  כבוד והדדיות
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  כל אדם מכובד ושווה בעינינו. אנו פועלים מתוך הדדיות, הקשבה ואמפתיה, 
                  ויוצרים מרחב של כבוד אמיתי לכל משתתף.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Programs Section */}
      <section className="py-16 bg-[hsl(35,20%,98%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[hsl(210,15%,25%)] mb-12">
            התוכניות שלנו
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sailing */}
            <Link
              to="/activities/sailing"
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1707409607630-32f792e04961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWlsaW5nJTIwdGhlcmFwZXV0aWMlMjBvY2VhbnxlbnwxfHx8fDE3NzE4Njk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="שייט שיקומי"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-right">
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-2">שייט שיקומי</h3>
                <p className="text-muted-foreground">
                  חוויית שייט טיפולית המשלבת עבודת צוות, אחריות וחיבור לטבע
                </p>
              </div>
            </Link>

            {/* Fishing */}
            <Link
              to="/activities/fishing"
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1606841820454-86d476976363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwcGVhY2VmdWwlMjB3YXRlcnxlbnwxfHx8fDE3NzE4Njk5NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="דייג"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-right">
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-2">דייג טיפולי</h3>
                <p className="text-muted-foreground">
                  פעילות המקדמת סבלנות, ריכוז ותחושת הצלחה במרחב שקט ומרגיע
                </p>
              </div>
            </Link>

            {/* Diving */}
            <Link
              to="/activities/diving"
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1644027621533-633fe3de243a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmluZyUyMHVuZGVyd2F0ZXJ8ZW58MXx8fHwxNzcxODQxNTA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="צלילה"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-right">
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-2">צלילה טיפולית</h3>
                <p className="text-muted-foreground">
                  חוויה ייחודית המקדמת ביטחון עצמי ושליטה בנשימה במים
                </p>
              </div>
            </Link>

            {/* Rowing */}
            <Link
              to="/activities/rowing"
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1713425787543-b3ccfd665733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3dpbmclMjBrYXlhayUyMHdhdGVyfGVufDF8fHx8MTc3MTg2OTk2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="חתירה"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-right">
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-2">חתירה טיפולית</h3>
                <p className="text-muted-foreground">
                  פעילות גופנית מאתגרת המחזקת את הגוף והנפש באווירה קבוצתית
                </p>
              </div>
            </Link>

            {/* Surfing */}
            <Link
              to="/activities/surfing"
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1613486185528-d9b0ae83f008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJmaW5nJTIwb2NlYW4lMjB3YXZlcyUyMGJvYXJkfGVufDF8fHx8MTc3MTkyMTg3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="גלישת גלים"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-right">
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-2">גלישת גלים</h3>
                <p className="text-muted-foreground">
                  כלי שיקומי דינמי המשלב חוסן נפשי, אדרנלין מבוקר וקהילה תומכת
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(210,15%,25%)] mb-4">
              עקבו אחרינו ויצרו איתנו קשר
            </h2>
            <p className="text-muted-foreground text-lg">
              הצטרפו אלינו ברשתות החברתיות ושמרו על קשר
            </p>
          </div>

          {/* Social Media Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/tashah_yam?igsh=MnFha3c0Yng3aWg%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <Instagram className="w-12 h-12" />
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">Instagram</h3>
                <p className="text-sm opacity-90">@tashah_yam</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/972515800826"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">WhatsApp</h3>
                <p className="text-sm opacity-90">051-580-0826</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:pnyhym@gmail.com"
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-12 h-12" />
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">דואר אלקטרוני</h3>
                <p className="text-sm opacity-90">pnyhym@gmail.com</p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61588183625693&locale=he_IL"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">Facebook</h3>
                <p className="text-sm opacity-90">עמוד הפייסבוק</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}