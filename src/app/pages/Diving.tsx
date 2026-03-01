import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Waves, Wind, Feather, Volume2, Users, Brain } from "lucide-react";

export default function Diving() {
  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1644027621533-633fe3de243a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmluZyUyMHVuZGVyd2F0ZXJ8ZW58MXx8fHwxNzcxODQxNTA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="צלילה טיפולית ושיקומית"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <div className="w-20 h-20 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-6">
            <Waves className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">צלילה טיפולית ושיקומית</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            עולם של שקט מתחת לפני המים
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
                עמותת טש"ח ים רותמת את המרחב התת-ימי ככלי עוצמתי לשיקום וריפוי. הצלילה מאפשרת למשתתפים לחוות מציאות של שקט מוחלט, ניתוק מהסחות דעת ושינוי פיזיקלי של תחושת הגוף. אנו פועלים בשני ערוצים מרכזיים, המותאמים לצרכים וליכולות של כל משתתף:
              </p>
            </div>

            {/* Two Main Types of Diving */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              {/* Type 1 - צלילת שנורקל */}
              <div className="bg-gradient-to-br from-[#4ECDC4]/10 to-[#44A08D]/5 rounded-xl p-6 border-2 border-[#4ECDC4]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Waves className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(210,15%,25%)] mb-3">1. צלילת שנורקל ומסכה</h3>
                <p className="text-sm text-[#4ECDC4] font-semibold mb-3">(Snorkeling Therapy)</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  צלילה במים רדודים המאפשרת חיבור מידי לעולם התת-ימי ללא צורך בציוד מורכב.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-[hsl(210,15%,25%)] mb-1">הערך הטיפולי:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      שיטה זו מצוינת לבניית ביטחון הדרגתי במים. היא מאפשרת למשתתף לשלוט בקצב שלו, להביט "אל תוך" הים תוך שמירה על קשר רציף עם פני השטח.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[hsl(210,15%,25%)] mb-1">היבט רגשי:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      הצifa והתצפית על החיים התת-ימיים מעודדות תחושת פליאה ורוגע, ומסייעות בהפחתת רמות מתח בדרך נגישה ופשוטה.
                    </p>
                  </div>
                </div>
              </div>

              {/* Type 2 - צלילה עם בלונים */}
              <div className="bg-gradient-to-br from-[#44A08D]/10 to-[#4ECDC4]/5 rounded-xl p-6 border-2 border-[#44A08D]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Wind className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(210,15%,25%)] mb-3">2. צלילה עם בלונים</h3>
                <p className="text-sm text-[#44A08D] font-semibold mb-3">(Scuba Diving)</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  חוויה של חוסר משקל ושהייה ממושכת בעומק הים.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-[hsl(210,15%,25%)] mb-1">הערך הטיפולי:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      הצלילה עם בלונים מחייבת שליטה עצמית גבוהה ומשמעת נשימתית. המעבר לסביבה שבה הגוף חופשי מכובד המשקל (ציפה ניטרלית) מאפשר לאנשים עם מגבלות פיזיות לחוות חופש תנועה מוחלט, שלעיתים אינו אפשרי עבורם ביבשה.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[hsl(210,15%,25%)] mb-1">היבט קוגניטיבי:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      התפעול הטכני של הציוד והשמירה על הציפה דורשים ריכוז מלא, מה שמסייע במיקוד הקשב ובניתוק מוחלט ממחשבות טורדניות.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PTSD Section Title */}
            <div className="my-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[hsl(210,15%,25%)] mb-4">
                השפעת הצלילה על פוסט-טראומה (PTSD)
              </h2>
              <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                עבור אנשים המתמודדים עם פוסט-טראומה, הצלילה בשיטת טש"ח ים מהווה "מרחב מוגן" נפשי ופיזי. המחקר והניסיון בשטח מראים כי לצלילה השפעה דרמטית על התסמינים:
              </p>
            </div>

            {/* PTSD Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              {/* Benefit 1 - נשימה וויסות */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#4ECDC4]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Wind className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">נשימה וויסות פיזיולוגי</h3>
                <p className="text-muted-foreground leading-relaxed">
                  הצלילה מחייבת נשימות עמוקות, איטיות וקצובות. פעולה זו מפעילה ישירות את המערכת הפארא-סימפטטית, האחראית על הרגעה והורדת דופק, ובכך "מאמנת" את הגוף לצאת ממצב של דריכות יתר (Hyperarousal).
                </p>
              </div>

              {/* Benefit 2 - שקט מרעשים */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#44A08D]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Volume2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">שקט מרעשים</h3>
                <p className="text-muted-foreground leading-relaxed">
                  מתחת למים, הרעשים החיצוניים נעלמים. עבור מי שסובל מרגישות לרעש או מהצפה חושית, השקט התת-ימי מספק הפוגה נדירה המאפשרת למערכת העצבים לנוח.
                </p>
              </div>

              {/* Benefit 3 - חוסר משקל */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#4ECDC4]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Feather className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">חוסר משקל ושחרור שרירים</h3>
                <p className="text-muted-foreground leading-relaxed">
                  הטראומה נאגרת לעיתים קרובות במתח שרيري קבוע. תחושת חוסר המשקל בצלילה מאפשרת לשרירים להרפות לחלוטין, מה שמוביל לשחרור גופני ורגשי עמוק.
                </p>
              </div>

              {/* Benefit 4 - בניית אמון */}
              <div className="bg-[hsl(35,20%,98%)] rounded-xl p-6 border-r-4 border-[#44A08D]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-3">בניית אמון</h3>
                <p className="text-muted-foreground leading-relaxed">
                  הצלילה מתבצעת בשיטת ה"באדי" (בן זוג לצלילה). הצורך לסמוך על השותף והאחריות ההדדית מסייעים בשיקום היכולת לתת אמון בזולת וליצור קשרים חברתיים בריאים.
                </p>
              </div>
            </div>

            {/* Closing Quote */}
            <div className="bg-gradient-to-br from-[#4ECDC4]/10 to-[#44A08D]/10 rounded-2xl p-8 text-center border-2 border-[#4ECDC4]/30 my-12">
              <p className="text-[hsl(210,15%,25%)] text-xl md:text-2xl font-semibold italic">
                "הצלילה היא הזדמנות להשאיר את משקלי העבר על החוף, ופשוט לנשום."
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-2xl p-8 text-white my-12">
              <h3 className="text-2xl font-bold mb-4">הצטרפו אלינו</h3>
              <p className="mb-6 text-white/90">
                מעוניינים להשתתף בתוכנית הצלילה הטיפולית והשיקומית שלנו? צרו עמנו קשר לקבלת מידע
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