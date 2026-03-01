import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Waves, Trophy, Heart, Activity, Users } from "lucide-react";

export default function Surfing() {
  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1613486185528-d9b0ae83f008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJmaW5nJTIwb2NlYW4lMjB3YXZlcyUyMGJvYXJkfGVufDF8fHx8MTc3MTkyMTg3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="גלישת גלים טיפולית"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <div className="w-20 h-20 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-6">
            <Waves className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">גלישת גלים</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            הרבה מעבר לספורט אתגרי - כלי שיקומי דינמי
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-right">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg md:text-xl leading-relaxed text-[hsl(210,15%,25%)]">
                גלישת גלים במסגרת עמותת טש"ח ים היא הרבה מעבר לספורט אתגרי, היא כלי שיקומי דינמי המפגיש את המשתתף עם כוחות הטבע החזקים ביותר. הגלישה דורשת התמסרות, הקשבה לים ותעוזה ומספקת חוויה של שחרור וניצחון אישי שאין שני לה.
              </p>
            </div>

            {/* Main Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              {/* Benefit 1 - הים כזירה לחיזוק החוסן */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#4ECDC4]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">הים כזירה לחיזוק החוסן וה StringBuffer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  הגלישה מציבה את המשתתף במרחב שמשתנה בכל שנייה. כדי להצליח "לתפוס גל", על הגולש לפתח נחישות, להתמודד עם נפילות ולנסות שוב ושוב. תהליך זה בונה חוסן נפשי ומלמד את המשתתף שגם לאחר "נפילה" מתחת לגל, תמיד ניתן לעלות לחתור חזרה ולנסות שוב. תחושת העמידה על הגל מייצרת שיא רגשי המעלה משמעותית את הערך העצמי.
                </p>
              </div>

              {/* Benefit 2 - ויסותחושי */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#44A08D]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">ויסותחושי ואדרנלין מבוקר</h3>
                <p className="text-muted-foreground leading-relaxed">
                  עבור המשתתפים בפעילויות של טש"ח ים, הגלישה מציעה מענה ייחודי לצורך בריגוש ובפורקן אנרגטי בסביבה תומכת. המגע עם המים הקרים, רעש הגלים והמאמץ הפיזי האינטנסיבי מספקים גירויחושי חזק שעוזר בוויסות רגשי. הגלישה מאפשרת תיעול של מתחים פנימיים לכדי פעולה פיזית חיובית, המותירה את הגולש בתחושת רוגע ונינוחות ("Post-surf glow") שנמשכת שעות רבות לאחר היציאה מהמים.
                </p>
              </div>

              {/* Benefit 3 - יתרונות שיקומיים */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#4ECDC4]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">יתרונות שיקומיים ופיזיולוגיים</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <strong className="text-[hsl(210,15%,25%)]">שיפור שיווי משקל וקואורדינציה:</strong>
                    <p className="text-sm leading-relaxed">
                      העמידה על הגלשן דורשת סנכרון מושלם בין כל מערכות הגוף והפעלה אינטנסיבית של שרירי הליבה.
                    </p>
                  </div>
                  <div>
                    <strong className="text-[hsl(210,15%,25%)]">סיבולת לב-ריאה:</strong>
                    <p className="text-sm leading-relaxed">
                      החתירה אל מעבר לקו השבירה בונה כושר גופני, כוח ידיים וחגורת כתפיים, ומסייעת בשיפור תפקודי נשימה.
                    </p>
                  </div>
                  <div>
                    <strong className="text-[hsl(210,15%,25%)]">מיקוד וקשב:</strong>
                    <p className="text-sm leading-relaxed">
                      הגלישה מחייבת ריכוז מוחלט ב"כאן ועכשיו" - זיהוי הגל הנכון ותזמון הקפיצה. זהו תרגול מעשי במיקוד קשב בסביבה רועשת ומאתגרת.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 4 - גלישה ככלי חברתי */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#44A08D]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">גלישה ככלי חברתי וקהילתי</h3>
                <p className="text-muted-foreground leading-relaxed">
                  למרות שהעמידה על הגל היא אינדיבידואלית, תרבות הגלישה בעמותה היא קהילתית וחמה. המפגש על החוף, העזרה ההדדית בכניסה למים והשיתוף בחוויות לאחר הסשן, יוצרים קבוצת שווים תומכת. עבור רבים המועדון הופך לבית שני שבו המגבלה הפיזית או הקושי הנפשי מתפוגגים מול עוצמתו של הים.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-2xl p-8 text-white my-12">
              <h3 className="text-2xl font-bold mb-4">הצטרפו אלינו</h3>
              <p className="mb-6 text-white/90">
                מעוניינים להשתתף בתוכנית הגלישה שלנו? צרו עמנו קשר לקבלת מידע
                נוסף ולתיאום מועד
              </p>
              <a
                href="mailto:pnyhym@gmail.com"
                className="inline-block px-8 py-3 bg-white text-[#4ECDC4] rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                צרו קשר
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}