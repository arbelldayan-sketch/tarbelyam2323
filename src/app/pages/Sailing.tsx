import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Anchor, Users, Heart, Target, Brain, Waves } from "lucide-react";

export default function Sailing() {
  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1642266351423-efa1b7ffe527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWlsaW5nJTIweWFjaHQlMjBvY2VhbiUyMHN1bnNldHxlbnwxfHx8fDE3NzE5MjEwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="שייט שיקומי"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <div className="w-20 h-20 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-6">
            <Anchor className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">שייט שיקומי וטיפולי</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            כוחו של הים ככלי לשינוי
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
                המרחב הימי מציע סביבה טיפולית ייחודית במינה, המשלבת את עוצמת הטבע עם אתגרים פיזיים ומנטליים. עמותת טש"ח ים רותמת את הים ככלי שיקומי וחינוכי, מתוך הבנה שהשייט אינו רק פעילות פנאי, אלא פלטפורמה עוצמתית לצמיחה אישית ולריפוי.
              </p>
            </div>

            {/* Main Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              {/* Benefit 1 - העצמה אישית */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#4ECDC4]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">העצמה אישית ותחושת מסוגלות</h3>
                <p className="text-muted-foreground leading-relaxed">
                  הים הוא סביבה דינמית המציבה בפני המשתתף אתגרים בלתי צפויים הדורשים תגובה מיידית. היכולת להשיט כלי שיט, לשלוט במפרשים ולנווט מול הרוח והגלים, בונה אצל המשתתף תחושת מסוגלות עצמית (Self-Efficacy) גבוהה. חוויית ההצלחה בים, בסביבה שנתפסת לעיתים כמרתיעה, מתרגמת ישירות לביטחון עצמי מוגבר בחיי היומיום וביכולת להתמודד עם מכשולים יבשתיים.
                </p>
              </div>

              {/* Benefit 2 - ויסות רגשי */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#44A08D]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">ויסות רגשי וחוסן נפשי</h3>
                <p className="text-muted-foreground leading-relaxed">
                  המרחב הפתוח והמגע הישיר עם המים מסייעים בהורדת רמות הורמוני הלחץ (קורטיזול) וביצירת שקט נפשי. השייט מחייב "קשיבות" (Mindfulness) ריכוז מלא ברגע הנוכחי, בכיוון הרוח ובמצב הים. עבור אנשים המתמודדים עם פוסט-טראומה, חרדה או קשיים רגשיים, הים משמש כעוגן המאפשר ויסות רגשי ומרחב בטוח לעיבוד חוויות במרחק מהרעש והלחץ של השגרה.
                </p>
              </div>

              {/* Benefit 3 - בניית מיומנויות חברתיות */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#4ECDC4]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">בניית מיומנויות חברתיות ועבודת צוות</h3>
                <p className="text-muted-foreground leading-relaxed">
                  החיים על הסיפון מחייבים שיתוף פעולה הדוק. תפעול כלי שיט הוא משימה קבוצתית שבה לכל אחד יש תפקיד קריטי להצלחת המשימה ולבטיחות הצוות. דרך השייט, המשתתפים מתרגלים תקשורת בינאישית בונה, פיתוח אמון הדדי, לקיחת אחריות והתחשבות בזולת.
                  הים יוצר "שוויון הזדמנויות" שבו המגבלה נדחקת הצידה לטובת המטרה המשותפת.
                </p>
              </div>

              {/* Benefit 4 - שיקום פיזי וקוגניטיבי */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#44A08D]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">שיקום פיזי וקוגניטיבי</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ברמה הפיזיולוגית, השהייה על כלי שייט בתנועה משפרת משמעותית את שיווי המשקל, הקואורדינציה ומערכת השרירים המייצבים. ברמה הקוגניטיבית, השייט דורש קבלת החלטות מהירה, הבנה של מערכות טכניות ושימוש בלוגיקה ובניווט. 
                  השילוב בין המאמץ הפיזי לריכוז המנטלי יוצר תהליך שיקומי הוליסטי המפעיל את הגוף והמוח כאחד.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-2xl p-8 text-white my-12">
              <h3 className="text-2xl font-bold mb-4">הצטרפו אלינו</h3>
              <p className="mb-6 text-white/90">
                מעוניינים להשתתף בתוכנית השייט השיקומי והטיפולי שלנו? צרו עמנו קשר לקבלת מידע
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