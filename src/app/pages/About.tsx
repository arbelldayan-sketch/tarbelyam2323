import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Heart, Target, Users, Award, Anchor, Compass } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1694151425826-db0e185368dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMHRvZ2V0aGVyJTIwb2NlYW58ZW58MXx8fHwxNzcxODc4NjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="אודות העמותה"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <div className="w-20 h-20 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-6">
            <Anchor className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">אודות העמותה</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            הסיפור שלנו, החזון שלנו והערכים שמנחים אותנו
          </p>
        </div>
      </section>

      {/* About Story Section */}
      <section className="py-20 bg-white" dir="rtl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[hsl(210,15%,25%)] mb-12">
            אודות עמותת טש״ח ים
          </h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[hsl(35,20%,98%)] to-white rounded-2xl p-8 md:p-10 shadow-md border-r-4 border-[#4ECDC4]">
              <p className="text-lg md:text-xl leading-relaxed text-[hsl(210,15%,25%)]">
                עמותת טש״ח ים הוקמה מתוך <strong className="text-[#4ECDC4]">עשייה אמיתית בשטח</strong>.
                במהלך ימי המלחמה יזמנו את מיזם "להפליג עם לוחמים", במטרה לפתוח את הים הפתוח önüne 
                לוחמים הזקוקים לרגע נשימה, מרחב ושקט. אלפי לוחמים עלו על הסיפון וחוו את עוצמת 
                הים כמקום של שחרור, חיבור וכוח מחודש.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border-r-4 border-[#44A08D]">
              <p className="text-lg md:text-xl leading-relaxed text-[hsl(210,15%,25%)]">
                מתוך הפעילות הבנו דבר עמוק ומשמעותי: עבור רבים, המפגש עם הים לא היה רק חוויה 
                חד-פעמית — אלא תחילתו של תהליך שיקום. העלייה במקרי פוסט טראומה והצורה של 
                תומכת, מקצועית וארוכת טווח הובילו אותנו להעמיק את העשייה ולהקים עמותה שתעניק 
                מענה שיקומי מסודר ומתמשך.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-2xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                כך נולדה עמותת טש״ח ים
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-white mb-6">
                העמותה פועלת ליצירת מרחב טיפולי-שיקומי דרך הים עבור לוחמים ונפגעי טראומה. 
                אנו רואים בים כלי טיפולי עוצמתי — מרחב פתוח המאפשר תנועה, ויסות רגשי, חיבור 
                מחודש לעצמי ובניית חוסן פנימי.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(35,20%,98%)] to-white" dir="rtl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-6 shadow-xl">
              <Compass className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(210,15%,25%)] mb-6">
              החזון שלנו
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-10 md:p-12 shadow-xl">
            <p className="text-xl md:text-2xl leading-relaxed text-[hsl(210,15%,25%)] mb-6">
              אנו שואפים ליצור מציאות שבה הים מהווה מסגרת שיקומית מוכרת, מקצועית ונגישה 
              לכל מי שנפגע בנפשו.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed text-[hsl(210,15%,25%)] font-semibold text-[#44A08D]">
              חזוננו הוא לבנות קהילה תומכת ויציבה המלווה את המשתתפים לאורך זמן, מחזקת 
              תחושת שייכות ומשיבה אמון בעצמם ובעולם.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[hsl(210,15%,25%)] mb-4">
            ערכי הליבה שלנו
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
            הערכים המנחים את כל פעילותנו ומשקפים את המחויבות שלנו למשתתפים
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Value 1: נתינה ואחריות */}
            <div className="bg-gradient-to-br from-[hsl(35,20%,98%)] to-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 border-r-4 border-[#4ECDC4]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[hsl(210,15%,25%)] mb-4">
                    נתינה ואחריות
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    מחויבות עמוקה לפעול מתוך שליחות וללא כוונת רווח, לטובת אלו הזקוקים 
                    למרחב שיקום בטוח ומכבד.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 2: קהילה ושייכות */}
            <div className="bg-gradient-to-br from-[hsl(35,20%,98%)] to-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 border-r-4 border-[#44A08D]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[hsl(210,15%,25%)] mb-4">
                    קהילה ושייכות
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    בניית מסגרת אנושית תומכת המאפשרת חיבור, אמון והרגשת בית — בים ומחוצה לו.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 3: תמיכה מתוך קושי */}
            <div className="bg-gradient-to-br from-[hsl(35,20%,98%)] to-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 border-r-4 border-[#4ECDC4]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[hsl(210,15%,25%)] mb-4">
                    תמיכה מתוך קושי
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    הכרה בכאב ובמורכבות, ומתן ליווי רגיש ומקצועי מתוך הבנה עמוקה של 
                    תהליכי טראומה ושיקום.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 4: ערכיות ומנהיגות אישית */}
            <div className="bg-gradient-to-br from-[hsl(35,20%,98%)] to-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 border-r-4 border-[#44A08D]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[hsl(210,15%,25%)] mb-4">
                    ערכיות ומנהיגות אישית
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    עידוד בחירה, אחריות וצמיחה אישית כחלק מהמסע השיקומי, מתוך אמונה 
                    ביכולתו של כל אדם לבנות דרך חדשה.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(35,20%,98%)] to-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-24 h-24 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center mb-6 shadow-xl">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(210,15%,25%)] mb-4">
              הצוות שלנו
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              הצוות המקצועי והמסור שלנו מביא ניסיון עשיר בתחום הימאות והטיפול השיקומי
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://placehold.co/400x300?text=Team"
                  alt="חבר צוות"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-2">
                  חבר צוות 1
                </h3>
                <p className="text-muted-foreground">
                  תפקיד
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://placehold.co/400x300?text=Team"
                  alt="חבר צוות"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-2">
                  חבר צוות 2
                </h3>
                <p className="text-muted-foreground">
                  תפקיד
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://placehold.co/400x300?text=Team"
                  alt="חבר צוות"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-2">
                  חבר צוות 3
                </h3>
                <p className="text-muted-foreground">
                  תפקיד
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://placehold.co/400x300?text=Team"
                  alt="חבר צוות"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[hsl(210,15%,25%)] mb-2">
                  חבר צוות 4
                </h3>
                <p className="text-muted-foreground">
                  תפקיד
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D]" dir="rtl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            הצטרפו למסע שלנו
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            בכל הפלגה אנחנו לא רק יוצאים לים — אנחנו יוצאים למסע של ריפוי, חיבור ומשמעות. 
            יחד, אנחנו בונים דרך חדשה של תקווה.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://victorious-volunteer-connect-now.base44.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#4ECDC4] rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold"
            >
              הצטרפו למתנדבים
            </a>
            <a
              href="https://tashahyam0.base44.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full shadow-lg hover:bg-white hover:text-[#4ECDC4] hover:scale-105 transition-all duration-200 font-semibold"
            >
              תרמו לעמותה
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
