"use client";

import React from "react";
import Link from "next/link";

export default function EsraaPlatformHome() {
  const services = [
    {
      id: "ind-1",
      category: "بدايات العلاقات والاختيار",
      title: "جلسة تقييم العلاقة والاختيار الصحيح",
      duration: "60 دقيقة",
      delivery: "أونلاين (فيديو خاص ومؤمّن)",
      price: "1,200 ج.م",
      suitableFor:
        "لو في بداية العلاقة وعاوز تعرف إنت صح ولا غلط، وقراءة المؤشرات النفسية ولغة الجسد بوضوح قبل التورط العاطفي.",
      includes: [
        "تحليل شخصية الشريك وسلوكه الإنساني",
        "كشف علامات التوافق أو التحذير مبكراً",
        "خطة واضحة لوضع حدود صحية منذ البداية",
      ],
    },
    {
      id: "couples-1",
      category: "إحياء الشغف والتوافق",
      title: "جلسة استعادة الشغف وعلاج الفتور",
      duration: "90 دقيقة",
      delivery: "أونلاين (جلسة فردية أو ثنائية)",
      price: "1,800 ج.م",
      suitableFor:
        "لو شغفك قل أو شغف شريكك قل وعاوز حل جذري يعيد التوازن الطاقي والنفسي والتواصل الحقيقي للعلاقة.",
      includes: [
        "تشخيص أسباب الفتور العاطفي وتراجع الشغف",
        "تطبيقات عملية من السيكولوجي وعلوم الطاقة",
        "خطة عمل لإعادة بناء الجاذبية والحوار الصحي",
      ],
    },
    {
      id: "recovery-1",
      category: "التعافي وتخطي الأزمات",
      title: "جلسة تخطي علاقة صعبة والتعافي النفسي",
      duration: "60 دقيقة",
      delivery: "أونلاين (بيئة آمنة وسرية 100%)",
      price: "1,200 ج.م",
      suitableFor:
        "لو عاوز تتخطى علاقة صعبة أو سامة ومحتاج مساعدة متخصصة توفر عليك الوقت وتحط إيدك على المشكلة وعلى حلها.",
      includes: [
        "فك التعلق المرضي واستعادة الاتزان النفسي",
        "فهم الدرس السلوكي والنفسي من التجربة",
        "برنامج تطبيقي لاستعادة الثقة والانطلاق من جديد",
      ],
    },
  ];

  const pillars = [
    {
      badge: "1. السيكولوجي (علم النفس)",
      title: "تحليل جذور المشكلة النفسية",
      desc: "فهم أنماط التعلق، الاحتياجات العاطفية غير الملباة، والدوافع الخفية التي تحرك قراراتك وقرارات شريكك.",
    },
    {
      badge: "2. السلوك الإنساني",
      title: "تعديل الأنماط وبناء الحلول",
      desc: "تحويل الوعي إلى خطوات سلوكية عملية تضع يدك مباشرة على المشكلة وعلى حلها دون تنظير معقد.",
    },
    {
      badge: "3. علوم الطاقة",
      title: "توازن الشغف والحضور",
      desc: "إعادة ضبط التوازن الطاقي والعاطفي داخل العلاقة للتغلب على الفتور واستعادة الشغف المفقود.",
    },
    {
      badge: "4. لغة الجسد",
      title: "قراءة ما وراء الكلمات",
      desc: "فهم الإشارات غير اللفظية والرسائل الحقيقية للطرف الآخر لمعرفة إن كنت في المسار الصحيح أم الخاطئ.",
    },
  ];

  const digitalProducts = [
    {
      title: "دليل: إنت صح ولا غلط في بداية العلاقة؟",
      type: "كتاب رقمي تفاعلي (PDF + مقاييس عملية)",
      price: "350 ج.م",
      desc: "أداة تطبيقية من إعداد د. إسراء عثمان لتقييم العلاقات في مراحلها الأولى اعتماداً على السلوك الإنساني ولغة الجسد.",
    },
    {
      title: "كراسة استعادة الشغف والجاذبية في العلاقات",
      type: "دليل تطبيقي وتمارين عملية",
      price: "420 ج.م",
      desc: "خطوات مرتبة لإعادة إحياء المشاعر وكسر الروتين والفتور بين الشريكين بمنهجية السيكولوجي والطاقة.",
    },
    {
      title: "خارطة تخطي العلاقات الصعبة وفك التعلق",
      type: "برنامج عمل مكتوب (30 يوماً)",
      price: "380 ج.م",
      desc: "دليل عملي يأخذ بيدك خطوة بخطوة لتجاوز الانفصال أو العلاقات المؤذية واستعادة أمانك الداخلي.",
    },
  ];

  const programs = [
    {
      title: "برنامج السيكولوجي ولغة الجسد في العلاقات",
      modules: "6 وحدات تدريبية + 3 لقاءات مباشرة مع د. إسراء",
      seats: "متبقي 8 مقاعد",
      price: "3,200 ج.م",
      outcomes:
        "إتقان قراءة السلوك الإنساني ولغة الجسد، وفهم ديناميكية الشغف والحدود الصحية في العلاقة.",
    },
    {
      title: "ورشة التعافي وتخطي العلاقات الصعبة",
      modules: "ورشة مكثفة + أوراق عمل تطبيقية",
      seats: "متبقي 5 مقاعد",
      price: "1,450 ج.م",
      outcomes:
        "وضع اليد على جذور المشكلة العاطفية، التخلص من الاستنزاف الطاقي، وبناء بداية جديدة واعية.",
    },
  ];

  const memberships = [
    {
      name: "العضوية الشهرية — مجتمع د. إسراء عثمان",
      cycle: "شهرياً",
      price: "490 ج.م",
      features: [
        "لقاءان مباشران شهرياً للإجابة على استفسارات الأعضاء",
        "محتوى حصري يجمع بين السيكولوجي وعلوم الطاقة ولغة الجسد",
        "خصم 15% على الجلسات الاستشارية الفردية والمنتجات الرقمية",
        "إلغاء مرن في أي وقت من لوحة حسابك الشخصي",
      ],
      highlighted: false,
    },
    {
      name: "العضوية السنوية الشاملة (VIP)",
      cycle: "سنوياً (وفر شهرين)",
      price: "4,900 ج.م",
      features: [
        "جميع مزايا العضوية الشهرية طوال العام",
        "جلسة استشارية خاصة مجانية مع د. إسراء عثمان",
        "أولوية الحجز في الورش المغلقة والمواعيد العاجلة",
        "وصول مجاني لـ 3 أدلة رقمية من المتجر الرسمي",
      ],
      highlighted: true,
    },
  ];

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (target.src.endsWith("/esraa-logo.jpg")) {
      target.src = "/images/esraa-logo.jpg.jpg";
    } else if (target.src.endsWith("/esraa-logo.jpg.jpg")) {
      target.src = "/images/esraa-logo.png";
    } else if (target.src.endsWith("/esraa-logo.png")) {
      target.src = "/images/1000153492.jpg";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf4f8] text-[#1f1224]">
      {/* شريط التنبيه المهني والخصوصية */}
      <div className="bg-[#6b1d7a] text-white text-xs py-2 px-4 text-center">
        المنصة الرسمية لـ د. إسراء عثمان (israaosman.com) — أول استشارية علاقات في مصر والوطن العربي.
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-pink-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/esraa-logo.jpg"
              onError={handleLogoError}
              alt="شعار د. إسراء عثمان"
              className="h-14 w-auto object-contain rounded-lg"
            />
            <div>
              <span className="block font-extrabold text-base sm:text-lg text-[#6b1d7a]">
                د. إسراء عثمان
              </span>
              <span className="block text-[11px] text-gray-500">
                أول استشارية علاقات في مصر والوطن العربي
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-[#db1a69] transition">
              عن د. إسراء
            </a>
            <a href="#services" className="hover:text-[#db1a69] transition">
              حجز الجلسات
            </a>
            <a href="#programs" className="hover:text-[#db1a69] transition">
              البرامج والورش
            </a>
            <a href="#store" className="hover:text-[#db1a69] transition">
              المتجر الرقمي
            </a>
            <a href="#memberships" className="hover:text-[#db1a69] transition">
              العضويات
            </a>
            <a href="#contact" className="hover:text-[#db1a69] transition">
              القنوات الرسمية
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/admin"
              className="text-xs sm:text-sm px-3 py-2 rounded-xl border border-purple-200 text-[#6b1d7a] hover:bg-purple-50 transition font-medium"
            >
              حسابي / الإدارة
            </Link>
            <Link
              href="/book"
              className="text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl bg-brand-gradient text-white font-bold shadow-md hover:opacity-95 transition"
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
              <span>د. إسراء عثمان — أول استشارية علاقات في مصر والوطن العربي</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-[#2b1136]">
              هنوفر عليك، ونحط إيدك <span className="text-[#db1a69]">ع المشكلة وعلى حلها</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              لو في بداية العلاقة وعاوز تعرف إنت صح ولا غلط، لو شغفك قل أو شغف شريكك قل وعاوز حل، أو لو عاوز تتخطى علاقة صعبة وعاوز مساعدة متخصصة تجمع بين <strong>السيكولوجي، السلوك الإنساني، علوم الطاقة، ولغة الجسد</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/book"
                className="px-7 py-3.5 rounded-2xl bg-brand-gradient text-white font-bold shadow-lg shadow-pink-500/20 hover:scale-[1.01] transition"
              >
                احجز جلستك الاستشارية الآن
              </Link>
              <a
                href="https://www.instagram.com/dr_israa_osman/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-white border-2 border-[#6b1d7a] text-[#6b1d7a] font-bold hover:bg-purple-50 transition"
              >
                تواصل عبر إنستجرام الرسمي
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-pink-100 max-w-lg">
              <div>
                <p className="text-xl font-extrabold text-[#6b1d7a]">+128 ألف</p>
                <p className="text-xs text-gray-500">مشترك على يوتيوب</p>
              </div>
              <div>
                <p className="text-xl font-extrabold text-[#db1a69]">+652 فيديو</p>
                <p className="text-xs text-gray-500">محتوى استشاري وتوعوي</p>
              </div>
              <div>
                <p className="text-xl font-extrabold text-[#6b1d7a]">4 علوم</p>
                <p className="text-xs text-gray-500">سيكولوجي، سلوك، طاقة، لغة جسد</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-88 lg:w-96">
              <div className="absolute -inset-3 bg-brand-gradient rounded-[2.5rem] blur-xl opacity-25"></div>
              <div className="relative bg-white p-3 rounded-[2rem] shadow-2xl border border-pink-100">
                <img
                  src="/images/esraa-profile.png"
                  alt="د. إسراء عثمان - أول استشارية علاقات في مصر والوطن العربي"
                  className="w-full h-[420px] object-cover object-top rounded-[1.5rem]"
                />
                <div className="mt-3 p-3 bg-[#fdf4f8] rounded-xl flex items-center justify-between">
                  <div>
                    <p className="font-extrabold text-sm text-[#6b1d7a]">د. إسراء عثمان</p>
                    <p className="text-xs text-gray-600">
                      أول استشارية علاقات في مصر والوطن العربي
                    </p>
                  </div>
                  <img
                    src="/images/esraa-logo.jpg"
                    onError={handleLogoError}
                    alt="Israa Osman Logo"
                    className="h-10 w-10 rounded-lg object-contain bg-white p-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* عن د. إسراء ومنهجيتها العلمية (السيكولوجي، السلوك الإنساني، علوم الطاقة، لغة الجسد) */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 bg-[#fdf4f8] p-6 rounded-3xl border border-pink-100 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-[#db1a69] text-xs font-bold">
                السيرة المهنية والمنهجية
              </span>
              <h2 className="text-2xl font-extrabold text-[#6b1d7a]">
                عن د. إسراء عثمان
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                أول استشارية علاقات في مصر والوطن العربي. تجمع دراستها ومنهجيتها العملية ما بين <strong>السيكولوجي (علم النفس) والسلوك الإنساني، بالإضافة إلى علوم الطاقة ولغة الجسد</strong>، لتقديم تشخيص دقيق وحلول واقعية قابلة للتطبيق الفوري.
              </p>
              <div className="p-4 bg-white rounded-2xl border border-purple-100 text-xs text-gray-600 space-y-2">
                <p className="font-bold text-[#db1a69]">الخصوصية والحدود المهنية:</p>
                <p>
                  جميع الجلسات تدار بسرية تامة، ولا نطلب كتابة تفاصيل المشكلة الشخصية في نماذج الحجز المبدئية. الخدمات المقدمة إرشادية وتوعوية في مجال العلاقات وتطوير الذات.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-pink-100 shadow-sm bg-white hover:border-[#db1a69] transition"
                >
                  <span className="inline-block px-3 py-1 rounded-lg bg-pink-50 text-[#db1a69] font-bold text-xs mb-3">
                    {pillar.badge}
                  </span>
                  <h3 className="font-bold text-lg text-[#2b1136] mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* الخدمات والاستشارات */}
      <section id="services" className="py-16 bg-[#fdf4f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#2b1136]">
              احجز جلستك مع د. إسراء عثمان
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              اختر نوع الاستشارة المناسبة لمرحلة علاقتك الحالية مع وضوح كامل في المدة، الآلية، وسياسة الحجز.
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
                    <p className="text-xs font-bold text-[#6b1d7a] mb-2">ما تتضمنه الجلسة:</p>
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

      {/* البرامج والورش */}
      <section id="programs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-[#2b1136]">
              البرامج التدريبية والورش الحية
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              برامج منهجية متكاملة تجمع بين السيكولوجي، السلوك الإنساني، علوم الطاقة، ولغة الجسد.
            </p>
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

      {/* المتجر الرقمي */}
      <section id="store" className="py-16 bg-[#fdf4f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#2b1136]">
              المتجر الرقمي والأدلة التطبيقية
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              كتيبات ومقاييس رقمية من إعداد د. إسراء عثمان تُتاح فوراً داخل حسابك بروابط تنزيل آمنة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {digitalProducts.map((prod, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm flex flex-col justify-between"
              >
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

      {/* العضويات والاشتراكات */}
      <section id="memberships" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#2b1136]">
              خطط العضويات الحصرية
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              انضم إلى مجتمع د. إسراء عثمان للدعم المستمر واللقاءات الشهرية المباشرة.
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

      {/* الفوتر والروابط الرسمية الموثقة من قناتها */}
      <footer id="contact" className="bg-[#2b1136] text-white pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src="/images/esraa-logo.jpg"
                  onError={handleLogoError}
                  alt="شعار د. إسراء عثمان"
                  className="h-12 w-12 rounded-xl object-contain bg-white p-1"
                />
                <div>
                  <h3 className="font-extrabold text-lg text-white">د. إسراء عثمان</h3>
                  <p className="text-xs text-pink-300">
                    أول استشارية علاقات في مصر والوطن العربي
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                دراسة ومنهجية تجمع بين السيكولوجي والسلوك الإنساني بالإضافة إلى علوم الطاقة ولغة الجسد. هنوفر عليك ونحط إيدك ع المشكلة وعلى حلها.
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-pink-400 text-sm mb-3">
                القنوات والحسابات الرسمية
              </h4>
              <ul className="space-y-2 text-gray-200">
                <li>
                  🌐 الموقع الرسمي:{" "}
                  <a
                    href="https://israaosman.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-pink-300"
                  >
                    israaosman.com
                  </a>
                </li>
                <li>
                  📸 إنستجرام (للاستفسارات وحجز الجلسات):{" "}
                  <a
                    href="https://www.instagram.com/dr_israa_osman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-pink-300"
                  >
                    @dr_israa_osman
                  </a>
                </li>
                <li>
                  ▶️ قناة يوتيوب (+128 ألف مشترك):{" "}
                  <a
                    href="https://www.youtube.com/@israaosman?sub_confirmation=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-pink-300"
                  >
                    youtube.com/@israaosman
                  </a>
                </li>
                <li>
                  📘 فيسبوك:{" "}
                  <a
                    href="https://www.facebook.com/ConsultantIsraaOsman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-pink-300"
                  >
                    ConsultantIsraaOsman
                  </a>
                </li>
                <li>
                  🎵 تيك توك:{" "}
                  <a
                    href="https://www.tiktok.com/@israaosman87"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-pink-300"
                  >
                    @israaosman87
                  </a>
                </li>
                <li>
                  👻 سناب شات:{" "}
                  <a
                    href="https://www.snapchat.com/add/drisraa_osman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-pink-300"
                  >
                    drisraa_osman
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-pink-400 text-sm mb-3">
                السياسات والخصوصية والأمان
              </h4>
              <p className="text-gray-300 leading-relaxed">
                • إعادة جدولة المواعيد متاحة مجاناً قبل 24 ساعة من موعد الجلسة.
              </p>
              <p className="text-gray-300 leading-relaxed">
                • لا يتم تخزين بيانات البطاقات البنكية داخل المنصة، وتُحفظ كافة الملفات الرقمية بروابط مشفرة للمشتركين فقط.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} منصة د. إسراء عثمان الرقمية (Dr. Israa Osman). جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
}
