import React from "react";
import Link from "next/link";

export default function EsraaPlatformHome() {
  const services = [
    {
      id: "ind-1",
      category: "استشارة فردية",
      title: "جلسة استشارية فردية خاصة",
      duration: "60 دقيقة",
      delivery: "أونلاين (فيديو خاص ومؤمّن)",
      price: "1,200 ج.م",
      suitableFor: "لمن يواجه تحديات في فهم أنماط التعلق، الحدود الشخصية، أو القرارات المصيرية في العلاقات.",
      includes: ["تقييم شامل للموقف الحالي", "خطة عمل تطبيقية مخصصة", "ملخص توصيات بعد الجلسة"],
    },
    {
      id: "couples-1",
      category: "استشارات ثنائية",
      title: "جلسة توافق وإرشاد زوجي",
      duration: "90 دقيقة",
      delivery: "أونلاين (جلسة مشتركة)",
      price: "1,800 ج.م",
      suitableFor: "للشريكين الراغبين في إعادة بناء قنوات الحوار الصحي وتجاوز الأزمات المتكررة.",
      includes: ["تحليل فجوات التواصل", "تمارين عملية لإدارة الخلاف", "سياسة خصوصية وسرية تامة"],
    },
    {
      id: "group-1",
      category: "إرشاد جماعي",
      title: "دائرة الدعم والوعي العلاقاتي",
      duration: "120 دقيقة",
      delivery: "لقاء مباشر تفاعلي (مقاعد محدودة)",
      price: "650 ج.م",
      suitableFor: "للباحثين عن بيئة آمنة للتعلم المشترك ومناقشة التحديات العاطفية بإشراف مباشر.",
      includes: ["مناقشة محاور محددة مسبقاً", "إجابات مباشرة على الأسئلة", "مادة عمل مرفقة"],
    },
  ];

  const digitalProducts = [
    {
      title: "دليل الحدود الصحية في العلاقات",
      type: "كتاب رقمي تفاعلي (PDF + تمارين)",
      price: "350 ج.م",
      desc: "خطوات عملية لصياغة حدودك النفسية والعاطفية دون شعور بالذنب، مع أمثلة تطبيقية.",
    },
    {
      title: "كراسة التعافي العاطفي وفك التعلق",
      type: "دليل تطبيقي وأوراق عمل",
      price: "420 ج.م",
      desc: "تمارين يومية مرتبة لمدة 30 يوماً لاستعادة التوازن النفسي وبناء الاستحقاق الذاتي.",
    },
    {
      title: "قائمة فحص الاستعداد للارتباط الواعي",
      type: "أداة تقييم رقمية",
      price: "250 ج.م",
      desc: "الأسئلة الجوهرية لاختبار توافق القيم والتوقعات قبل اتخاذ خطوة الارتباط الرسمي.",
    },
  ];

  const programs = [
    {
      title: "برنامج هندسة العلاقات الواعية",
      modules: "6 وحدات تدريبية + 3 لقاءات مباشرة",
      seats: "متبقي 8 مقاعد",
      price: "3,200 ج.م",
      outcomes: "فهم جذور الأنماط العاطفية، إتقان مهارات التواصل غير العنيف، وبناء علاقة آمنة ومستقرة.",
    },
    {
      title: "ورشة تخطي الأزمات وبناء الثقة",
      modules: "ورشة مكثفة (يومان) + مواد مسجلة",
      seats: "متبقي 5 مقاعد",
      price: "1,450 ج.م",
      outcomes: "أدوات عملية للتعامل مع الخذلان، إعادة ضبط التوقعات، واستعادة الأمان الداخلي.",
    },
  ];

  const memberships = [
    {
      name: "العضوية الشهرية - مجتمع الوعي",
      cycle: "شهرياً",
      price: "490 ج.م",
      features: [
        "لقاءان مباشران شهرياً للإجابة على الأسئلة",
        "وصول كامل لمكتبة المقالات والصوتيات الحصرية",
        "خصم 15% على الجلسات الفردية والمنتجات الرقمية",
        "إلغاء مرن في أي وقت من لوحة حسابك",
      ],
      highlighted: false,
    },
    {
      name: "العضوية السنوية الشاملة",
      cycle: "سنوياً (وفر شهرين)",
      price: "4,900 ج.م",
      features: [
        "جميع مزايا العضوية الشهرية طوال العام",
        "جلسة استشارية فردية مجانية عند الاشتراك",
        "أولوية الحجز في الورش المغلقة والمقاعد المحدودة",
        "وصول مجاني لـ 3 كتيبات رقمية من المتجر",
      ],
      highlighted: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf4f8] text-[#1f1224]">
      {/* شريط التنبيه المهني والخصوصية */}
      <div className="bg-[#6b1d7a] text-white text-xs py-2 px-4 text-center">
        منصة رسمية آمنة ومشفرة — نلتزم بأعلى معايير الخصوصية وسرية بيانات العملاء.
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-pink-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/esraa-logo.jpg"
              alt="شعار إسراء عثمان"
              className="h-14 w-auto object-contain rounded-lg"
            />
            <div className="hidden sm:block">
              <span className="block font-bold text-lg text-[#6b1d7a]">إسراء عثمان</span>
              <span className="block text-xs text-gray-500">استشارات وبرامج الوعي العلاقاتي</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-[#db1a69] transition">عن إسراء</a>
            <a href="#services" className="hover:text-[#db1a69] transition">الخدمات والاستشارات</a>
            <a href="#programs" className="hover:text-[#db1a69] transition">البرامج والورش</a>
            <a href="#store" className="hover:text-[#db1a69] transition">المتجر الرقمي</a>
            <a href="#memberships" className="hover:text-[#db1a69] transition">العضويات</a>
            <a href="#faq" className="hover:text-[#db1a69] transition">السياسات والأسئلة</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="text-xs sm:text-sm px-3 py-2 rounded-xl border border-purple-200 text-[#6b1d7a] hover:bg-purple-50 transition"
            >
              حسابي / الإدارة
            </Link>
            <Link
              href="/book"
              className="text-xs sm:text-sm px-5 py-2.5 rounded-xl bg-brand-gradient text-white font-bold shadow-md hover:opacity-95 transition"
            >
              احجز جلستك الآن
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 lg:py-20 bg-gradient-to-b from-white via-[#fdf4f8] to-[#f8e8f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-[#db1a69] text-xs font-bold">
              <span>♥</span>
              <span>منصتكِ الآمنة لوعي علاقاتي مستدام</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-[#2b1136]">
              نبني معاً علاقات أكثر <span className="text-[#db1a69]">وعياً، اتزاناً،</span> وأماناً نفسياً
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
              منظومة رقمية متكاملة تجمع الاستشارات الفردية والثنائية، البرامج الإرشادية، الأدلة التطبيقية، ومجتمع العضويات التفاعلي بمنهجية واضحة تحترم خصوصيتكِ وتدعم نموكِ الحقيقي.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/book"
                className="px-7 py-3.5 rounded-2xl bg-brand-gradient text-white font-bold shadow-lg shadow-pink-500/20 hover:scale-[1.01] transition"
              >
                احجزي استشارة خاصة
              </Link>
              <a
                href="#store"
                className="px-7 py-3.5 rounded-2xl bg-white border-2 border-[#6b1d7a] text-[#6b1d7a] font-bold hover:bg-purple-50 transition"
              >
                تصفحي المتجر والبرامج
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-pink-100 max-w-lg">
              <div>
                <p className="text-xl font-extrabold text-[#6b1d7a]">100%</p>
                <p className="text-xs text-gray-500">سرية وخصوصية تامة للبيانات</p>
              </div>
              <div>
                <p className="text-xl font-extrabold text-[#db1a69]">4 مسارات</p>
                <p className="text-xs text-gray-500">جلسات، برامج، كتب، وعضويات</p>
              </div>
              <div>
                <p className="text-xl font-extrabold text-[#6b1d7a]">حساب خاص</p>
                <p className="text-xs text-gray-500">لإدارة مواعيدكِ ومشترياتكِ</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-88 lg:w-96">
              <div className="absolute -inset-3 bg-brand-gradient rounded-[2.5rem] blur-xl opacity-25"></div>
              <div className="relative bg-white p-3 rounded-[2rem] shadow-2xl border border-pink-100">
                <img
                  src="/images/esraa-profile.png"
                  alt="إسراء عثمان - استشارية العلاقات"
                  className="w-full h-[420px] object-cover object-top rounded-[1.5rem]"
                />
                <div className="mt-3 p-3 bg-[#fdf4f8] rounded-xl flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-[#6b1d7a]">أ. إسراء عثمان</p>
                    <p className="text-xs text-gray-600">متخصصة في محتوى واستشارات العلاقات</p>
                  </div>
                  <img
                    src="/images/esraa-logo.jpg"
                    alt="Logo"
                    className="h-10 w-10 rounded-lg object-contain bg-white p-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* عن إسراء ومنهجية العمل (البند 4 و 10) */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 bg-[#fdf4f8] p-6 rounded-3xl border border-pink-100">
              <h2 className="text-2xl font-extrabold text-[#6b1d7a] mb-3">عن إسراء عثمان ومنهجيتها</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                تهدف منهجية العمل إلى تحويل الوعي العاطفي من مجرد مفاهيم نظرية إلى أدوات عملية قابلة للتطبيق في الحياة اليومية، مع التركيز على الوضوح والحدود الصحية.
              </p>
              <div className="p-4 bg-white rounded-2xl border border-purple-100 text-xs text-gray-600 space-y-2">
                <p className="font-bold text-[#db1a69]">الحدود المهنية وإخلاء المسؤولية:</p>
                <p>
                  الخدمات المقدمة هي استشارات إرشادية وتوعوية في مجال العلاقات وتطوير الذات، ولا تُعد بديلاً عن التدخل الطبي النفسي الدوائي أو خدمات الطوارئ الحرجة.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
                <span className="inline-block px-3 py-1 rounded-lg bg-pink-50 text-[#db1a69] font-bold text-xs mb-3">
                  1. الخصوصية أولاً
                </span>
                <h3 className="font-bold text-lg text-[#2b1136] mb-2">حماية البيانات الحساسة</h3>
                <p className="text-sm text-gray-600">
                  لا نطلب تفاصيل المشكلات الشخصية في نماذج الحجز الأولية، ولا يتم إرسال أي محتوى استشاري عبر رسائل البريد أو الإشعارات حفاظاً على سريتكِ الكاملة.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
                <span className="inline-block px-3 py-1 rounded-lg bg-purple-50 text-[#6b1d7a] font-bold text-xs mb-3">
                  2. مسار متدرج
                </span>
                <h3 className="font-bold text-lg text-[#2b1136] mb-2">من المحتوى المجاني إلى التمكين العميق</h3>
                <p className="text-sm text-gray-600">
                  تبدأ رحلتكِ من المقالات والأدلة الرقمية، مروراً بالورش الجماعية والبرامج المسجلة، وصولاً إلى الجلسات الاستشارية المخصصة لحالتكِ.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
                <span className="inline-block px-3 py-1 rounded-lg bg-pink-50 text-[#db1a69] font-bold text-xs mb-3">
                  3. مرونة الحجز والدفع
                </span>
                <h3 className="font-bold text-lg text-[#2b1136] mb-2">إدارة مواعيد ذكية</h3>
                <p className="text-sm text-gray-600">
                  تحقق فوري من المواعيد المتاحة مع منع تضارب الحجوزات، ودعم وسائل الدفع الإلكتروني أو التحويل اليدوي الموثق.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
                <span className="inline-block px-3 py-1 rounded-lg bg-purple-50 text-[#6b1d7a] font-bold text-xs mb-3">
                  4. مساحة العميل الخاصة
                </span>
                <h3 className="font-bold text-lg text-[#2b1136] mb-2">وصول آمن لمشترياتكِ</h3>
                <p className="text-sm text-gray-600">
                  لوحة حساب خاصة لكل عميل لمتابعة المواعيد القادمة، تحميل الكتيبات الرقمية بروابط مؤمنة، ومشاهدة وحدات البرامج المشترك بها.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الخدمات والاستشارات (البند 5.1) */}
      <section id="services" className="py-16 bg-[#fdf4f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#2b1136]">كتالوج الخدمات والاستشارات</h2>
            <p className="text-sm text-gray-600 mt-2">
              اختاري نوع الجلسة المناسب لاحتياجكِ مع وضوح كامل في المدة، الآلية، وسياسة الجدولة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-3xl p-6 shadow-md border border-pink-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-pink-100 text-[#db1a69]">
                      {srv.category}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">{srv.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2b1136] mb-2">{srv.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{srv.suitableFor}</p>
                  <div className="border-t border-gray-100 pt-3 mb-4">
                    <p className="text-xs font-bold text-[#6b1d7a] mb-2">ما تتضمنه الخدمة:</p>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {srv.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-[#db1a69]">✔</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500">{srv.delivery}</span>
                    <span className="text-xl font-extrabold text-[#6b1d7a]">{srv.price}</span>
                  </div>
                  <Link
                    href={`/book?service=${srv.id}`}
                    className="block w-full text-center py-3 rounded-xl bg-brand-gradient text-white font-bold text-sm hover:opacity-95 transition"
                  >
                    اختيار الموعد والحجز
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* البرامج والورش (البند 5.4) */}
      <section id="programs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-[#2b1136]">البرامج الإرشادية والورش الحية</h2>
              <p className="text-sm text-gray-600 mt-2">
                برامج منهجية مقسمة إلى وحدات متسلسلة مع لقاءات مباشرة ومواد تطبيقية مرفقة.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((prog, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-gradient-to-br from-[#fdf4f8] to-white border border-purple-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-[#6b1d7a]">
                      {prog.modules}
                    </span>
                    <span className="text-xs font-bold text-[#db1a69]">{prog.seats}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#2b1136] mb-2">{prog.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>المخرجات المتوقعة:</strong> {prog.outcomes}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-pink-100">
                  <span className="text-xl font-extrabold text-[#6b1d7a]">{prog.price}</span>
                  <Link
                    href="/book"
                    className="px-6 py-2.5 rounded-xl bg-[#6b1d7a] text-white text-sm font-bold hover:bg-[#561663] transition"
                  >
                    التسجيل في البرنامج
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* المتجر الرقمي (البند 5.3) */}
      <section id="store" className="py-16 bg-[#fdf4f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#2b1136]">المتجر الرقمي والأدلة التطبيقية</h2>
            <p className="text-sm text-gray-600 mt-2">
              كتيبات وأوراق عمل رقمية تُتاح فوراً داخل حسابكِ بروابط تنزيل آمنة ومحمية بعد إتمام الشراء.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {digitalProducts.map((prod, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#db1a69]">{prod.type}</span>
                  <h3 className="text-lg font-bold text-[#2b1136] mt-1 mb-2">{prod.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{prod.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-lg font-extrabold text-[#6b1d7a]">{prod.price}</span>
                  <Link
                    href="/book"
                    className="px-4 py-2 rounded-xl border border-[#db1a69] text-[#db1a69] text-xs font-bold hover:bg-pink-50 transition"
                  >
                    شراء وتحميل فوري
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* العضويات والاشتراكات (البند 5.5) */}
      <section id="memberships" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#2b1136]">خطط العضويات الحصرية</h2>
            <p className="text-sm text-gray-600 mt-2">
              انضمي إلى مجتمع الدعم المستمر مع وضوح كامل في دورية التجديد وسياسة الإلغاء المرن.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {memberships.map((plan, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl border ${
                  plan.highlighted
                    ? "border-[#db1a69] bg-gradient-to-b from-[#fdf4f8] to-white shadow-xl"
                    : "border-gray-200 bg-white shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-extrabold text-[#2b1136]">{plan.name}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-[#6b1d7a] font-bold">
                    {plan.cycle}
                  </span>
                </div>
                <p className="text-3xl font-extrabold text-[#db1a69] mb-6">{plan.price}</p>
                <ul className="space-y-3 text-sm text-gray-700 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="text-[#6b1d7a] font-bold">●</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className="block w-full text-center py-3 rounded-xl bg-brand-gradient text-white font-bold text-sm"
                >
                  الاشتراك في الخطة
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* السياسات والأسئلة الشائعة (البند 4 و 10) */}
      <section id="faq" className="py-12 bg-[#2b1136] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-bold text-pink-400 mb-2">سياسة الإلغاء وإعادة الجدولة</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              يمكن إعادة جدولة الموعد مجاناً قبل 24 ساعة على الأقل من موعد الجلسة من خلال حساب العميل، وتخضع طلبات الاسترداد لسياسة المنصة المعتمدة.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-pink-400 mb-2">أمان المدفوعات والاستحقاق</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              لا تقوم المنصة بتخزين أي بيانات بطاقات بنكية؛ تتم المعالجة عبر بوابات دفع مرخصة أو عبر التحويل اليدوي الموثق بإيصال رسمي.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-pink-400 mb-2">الخصوصية وحذف البيانات</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              نجمع الحد الأدنى فقط من البيانات التشغيلية لإدارة مواعيدكِ، ويحق للعميل طلب تصدير أو حذف بياناته وفق سياسة الخصوصية.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}