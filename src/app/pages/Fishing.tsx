import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Fish, Clock, Heart, Brain, Target, Users } from "lucide-react";

export default function Fishing() {
  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1606841820454-86d476976363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwcGVhY2VmdWwlMjB3YXRlcnxlbnwxfHx8fDE3NzE4Njk5NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="דייג ספורטיבי טיפולי שיקומי"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <div className="w-20 h-20 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-6">
            <Fish className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">דייג ספורטיבי טיפולי שיקומי</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            חיבור לשקט, לסבלנות ולעוצמה
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
                דייג ספורטיבי במסגרת עמותת טש"ח ים אינו רק פעילות פנאי על המזח או הסירה, אלא מתודולוגיה טיפולית מוכרת (Angling Therapy) המשלבת מיומנות טכנית, ויסות רגשי וחיבור בלתי אמצעי לטבע. הדייג מאפשר למשתתפים לחוות תהליך עומק שקט וממוקד, המשלים את הפעילות הדינמית של השייט.
              </p>
            </div>

            {/* Main Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              {/* Benefit 1 - פיתוח דחיית סיפוקים */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#4ECDC4]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">פיתוח דחיית סיפוקים וסבלנות</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong>הדייג הוא שיעור חי בדחיית סיפוקים.</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  בעולם המאופיין במהירות ובתגובות מיידיות, הדייג מחייב את המשתתף להמתין, להתבונן ולשמור על ריכוז לאורך זמן. תהליך זה חיוני במיוחד לשיקום קוגניטיבי, לשיפור תפקודי קשב וריכוז (ADHD) ולפיתוח חוסן מול תסכולים בחיי היומיום.
                </p>
              </div>

              {/* Benefit 2 - ויסות רגשי */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#44A08D]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">ויסות רגשי והפחתת מתחים</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  הפעולה הטקסית של הדייג החל מהכנת הציוד, דרך ההטלה ועד המעקב אחר המים מייצרת מצב של "זרימה" (Flow). מחקרים מראים כי השהייה בקרבת "מרחבים כחולים" בשילוב פעילות מוטורית רגועה, מפחיתה משמעותית את רמות החרדה ומסייעת בשיקום נפגעי פוסט-טראומה (PTSD).
                </p>
                <p className="text-muted-foreground leading-relaxed italic">
                  השקט של הים מאפשר למשתתף "להשקיט את הרעשים" הפנימיים ולמצוא עוגן של רוגע.
                </p>
              </div>

              {/* Benefit 3 - שיקום מוטורי */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#4ECDC4]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">שיקום מוטורי וקואורדינציה</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ברמה הפיזית, הדייג הספורטיבי דורש שילוב מדויק בין מוטוריקה גסה (הטלת החכה, התמודדות עם התנגדות הדג) למוטוריקה עדינה (קשירת קשרים, הרכבת פיתיונות וטיפול בציוד). עבור משתתפים בתהליכי שיקום פיזי, פעולות אלו משפרות את הקשר עין-יד, את טווחי התנועה בידיים ואת היכולת לבצע פעולות עדינות הדורשות ריכוז פיזי גבוה.
                </p>
              </div>

              {/* Benefit 4 - תחושת הצלחה */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#44A08D]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">תחושת הצלחה וקשר לטבע</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  הדייג מחזק את תחושת הזיקה לסביבה הימית ואת האחריות לשימורה (בעונות מסוימות בגישת "דוג ושחרר").
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  רגע הלכידה מייצר תחושת הישג אדירה המעלה את הערך העצמי. עבור משתתפים המתמודדים עם מגבלות פיזיות או חברתיות, הדייג מהווה זירה שבה הם יכולים להצטיין ולהפגין מיומנות מקצועית ללא קשר לרקע הרפואי או האישי שלהם.
                </p>
              </div>

              {/* Benefit 5 - אינטראקציה חברתית */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#4ECDC4] md:col-span-2">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">אינטראקציה חברתית במרחב שקט</h3>
                <p className="text-muted-foreground leading-relaxed">
                  בשונה מפעילויות קבוצתיות רועשות, הדייג מאפשר "יחד" מסוג אחר - נוכחות משותפת ושקטה. זהו כלי מצוין עבור אלו המתקשים בסיטואציות חברתיות אינטנסיביות, שכן הוא מאפשר תקשורת לא מחייבת, תמיכה הדדית ולמידה משותפת מתוך עניין מקצועי בטכניקות הדייג ובחוקי הים.
                </p>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="bg-gradient-to-br from-[#4ECDC4]/10 to-[#44A08D]/10 rounded-2xl p-6 text-center border-2 border-[#4ECDC4]/30 my-12">
              <p className="text-[hsl(210,15%,25%)] text-xl font-semibold">
                טש"ח ים משלבים מספר טכניקות דייג ספורטיבי
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-2xl p-8 text-white my-12">
              <h3 className="text-2xl font-bold mb-4">הצטרפו אלינו</h3>
              <p className="mb-6 text-white/90">
                מעוניינים להשתתף בתוכנית הדייג הטיפולי שלנו? צרו עמנו קשר לקבלת מידע
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