import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Anchor, Activity, Brain, Heart, Users, Leaf } from "lucide-react";

export default function Rowing() {
  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1713425787543-b3ccfd665733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3dpbmclMjBrYXlhayUyMHdhdGVyfGVufDF8fHx8MTc3MTg2OTk2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="חתירה טיפולית שיקומית"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <div className="w-20 h-20 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-6">
            <Anchor className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">חתירה טיפולית שיקומית</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            חתירה היא חיבור גוף ונפש
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
                החתירה בקיאק ובסאפ במסגרת עמותת טש"ח ים מהווה גשר ייחודי בין עולם השיקום הפיזי לבין הטיפול הרגשי. בשונה מכלי שייט גדולים, הקיאק והסאפ מציבים את המשתתף במגע ישיר ובלתי אמצעי עם המים, מה שמייצר חוויהחושית עמוקה וכלי עבודה מדויק לשיפור איכות החיים.
              </p>
            </div>

            {/* Main Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              {/* Benefit 1 - שיקום פיזיולוגי */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#4ECDC4]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">שיקום פיזיולוגי ושיפור היציבה</h3>
                <p className="text-muted-foreground leading-relaxed">
                  החתירה היא אחת הפעילויות הגופניות השלמות ביותר מבחינה שיקומית. השהייה על סאפ מחייבת הפעלה מתמדת של שרירי הליבה ומערכת שיווי המשקל כדי להישאר יציבים על המים המשתנים. בקיאק, התנועה מחזורית של החתירה משפרת את טווחי התנועה בחגורת הכתפיים, מחזקת את המערכת האירובית ובונה כוח מתפרץ. עבור משתתפים בתהליכי שיקום פיזי, זהו אימון פונקציונלי המתרחש בסביבה מהנה ומאתגרת המעודדת התמדה.
                </p>
              </div>

              {/* Benefit 2 - ריכוז ונוכחות */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#44A08D]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">ריכוז, נוכחות וויסות רגשי</h3>
                <p className="text-muted-foreground leading-relaxed">
                  החתירה דורשת סנכרון מלא בין תנועת הגוף למקצב הגלים. מצב זה מייצר "מדיטציה בתנועה" - המשתתף חייב להיות נוכח לחלוטין ברגע (Mindfulness) כדי לשמור על שיווי משקל ולהתקדם ביעילות. עבור אנשים המתמודדים עם הפרעות קשב, היפראקטיביות או חרדה, החתירה מספקת פורקן לאנרגיה עודפת לצד צורך בריכוז פנימי عميق, מה שמוביל להרפיה נפשית ולוויסות רגשי משמעותי בסיום הפעילות.
                </p>
              </div>

              {/* Benefit 3 - חיזוק הדימוי העצמי */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#4ECDC4]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">חיזוק הדימוי העצמי ותחושת העצמאות</h3>
                <p className="text-muted-foreground leading-relaxed">
                  בקיאק ובסאפ, המשתתף הוא המנוע של כלי השיט. האחריות על ההתקדמות, הניווט וההתמודדות עם הרוח נמצאת בידיו באופן בלעדי. תחושת העצמאות הזו קריטית עבור אנשים המתמודדים עם מגבלות פיזיות או תחושת חוסר אונים בחיי היומיום. היכולת "לחצות מרחקים" בכוח הזרועות בלבד מעניקה תחושת מסוגלות אדירה ומחזקת את הדימוי העצמי.
                </p>
              </div>

              {/* Benefit 4 - תקשורת בסביבה דינמית */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#44A08D]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">תקשורת בסביבה דינמית</h3>
                <p className="text-muted-foreground leading-relaxed">
                  למרות שהחתירה נראית כפעילות אינדיבידואלית, במסגרת העמותה היא מתבצעת כחלק מקבוצה (שייטת). המשתתפים לומדים לשמור על קשר עין, לעזור זה לזה במקרה של קושי ולנוע בתיאום במרחב. הקיאק הזוגי, למשל, הוא כלי עבודה מובהק לשיפור תקשורת בינאישית, שכן הוא מחייב סנכרון מושלם בין שני חותרים כדי להתקדם בקו ישר - תרגיל מצוין לבניית אמון ושיתוף פעולה.
                </p>
              </div>

              {/* Benefit 5 - חיבור לטבע */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#4ECDC4] md:col-span-2">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">חיבור לטבע כמשאב מרפא</h3>
                <p className="text-muted-foreground leading-relaxed">
                  החתירה בגובה פני המים מאפשרת זווית ראייה ייחודית על עולם החי והצומח הימי. החיבור לטבע הפראי, לצד השקט הרחק מהחוף הרועש, מהווה משאב מרפא המטעין את המשתתף בכוחות מחודשים. השילוב בין המאמץ הגופני ליופי הוויזואלי של הים מייצר חוויה הוליסטית של חופש ושחרור ממגבלות הקרקע.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-2xl p-8 text-white my-12">
              <h3 className="text-2xl font-bold mb-4">הצטרפו אלינו</h3>
              <p className="mb-6 text-white/90">
                מעוניינים להשתתף בתוכנית החתירה הטיפולית והשיקומית שלנו? צרו עמנו קשר לקבלת מידע
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