import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Heart, Users, Calendar, Award } from "lucide-react";

export default function Volunteer() {
  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764866964323-b970983c7bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWlsaW5nJTIwY3JldyUyMHRlYW13b3JrJTIwb2NlYW58ZW58MXx8fHwxNzcxOTIwNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="התנדבות"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <div className="w-20 h-20 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">הצטרפו כמתנדבים</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            היו חלק משינוי אמיתי בחיי אנשים ותרמו מזמנכם ומכישוריכם למען הקהילה
          </p>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[hsl(210,15%,25%)] mb-12">
            למה להתנדב אצלנו?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">השפעה משמעותית</h3>
              <p className="text-muted-foreground">
                תרמו לשיפור איכות החיים של אנשים המתמודדים עם אתגרים ותהיו חלק משינוי
                אמיתי
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">קהילה תומכת</h3>
              <p className="text-muted-foreground">
                הצטרפו לקהילה חמה ותומכת של מתנדבים ומקצועני טיפול המחויבים לעזרה
                לזולת
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">גמישות</h3>
              <p className="text-muted-foreground">
                התנדבו בזמנים הנוחים לכם - אנו מתאימים את ההתנדבות ללוח הזמינו
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">פיתוח אישי</h3>
              <p className="text-muted-foreground">
                רכשו מיומנויות חדשות, צברו ניסיון ופתחו יכולות אישיות וחברתיות
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-[hsl(35,20%,98%)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[hsl(210,15%,25%)] mb-12">
            תחומי התנדבות
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3 text-right">
                ליווי משתתפים בפעילויות
              </h3>
              <p className="text-muted-foreground text-right">
                ליווי והדרכת משתתפים בפעילויות השייט, הדייג, הצלילה והחתירה. דרושים
                מתנדבים עם או בלי ניסיון ימי - נספק הכשרה מלאה
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3 text-right">
                תמיכה לוגיסטית
              </h3>
              <p className="text-muted-foreground text-right">
                עזרה בארגון אירועים, תיאום לוגיסטיקה, טיפול בציוד ותחזוקת הסירות
                והאביזרים
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3 text-right">
                תקשורת ושיווק
              </h3>
              <p className="text-muted-foreground text-right">
                ניהול רשתות חברתיות, יצירת תוכן, צילום ותיעוד פעילויות, עיצוב גרפי
                וקידום העמותה
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3 text-right">
                גיוס תרומות ומשאבים
              </h3>
              <p className="text-muted-foreground text-right">
                סיוע בגיוס תרומות, כתיבת בקשות למענקים, יצירת קשרים עם תורמים
                ופיתוח שותפויות
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            מתנדבים מספרים
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/95 rounded-xl p-8 text-right">
              <p className="text-[hsl(210,15%,25%)] mb-4 italic">
                "ההתנדבות בטש״ח ים שינתה את החיים שלי. לראות את ההשפעה הישירה שיש
                למפגשים על המשתתפים זה משהו שאי אפשר לתאר במילים. אני מרגיש שאני באמת
                עושה הבדל."
              </p>
              <div className="font-bold text-[#4ECDC4]">- יוסי כהן, מתנדב 3 שנים</div>
            </div>

            <div className="bg-white/95 rounded-xl p-8 text-right">
              <p className="text-[hsl(210,15%,25%)] mb-4 italic">
                "כמתנדבת בתחום התקשורת, למדתי כישורים חדשים ופגשתי אנשים מדהימים. הקהילה
                כאן היא משפחה אמיתית, והתחושה שאני תורמת למשהו משמעותי היא מתגמלת
                מאוד."
              </p>
              <div className="font-bold text-[#4ECDC4]">- שרה לוי, מתנדבת שנה</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
