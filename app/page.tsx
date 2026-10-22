import Link from "next/link";

const highlights = [
  { number: "01", title: "خصوصية ووضوح", text: "تعرفي على خطوات الحجز وما تحتاجينه قبل تأكيد الموعد." },
  { number: "02", title: "حجز أسهل", text: "اجمعي تفاصيل الخدمة وطلب الموعد في مكان واحد." },
  { number: "03", title: "تجربة منظمة", text: "معلومات واضحة من أول زيارة وحتى تأكيد الحجز." },
];

const steps = [
  { n: "١", title: "اختاري الخدمة", text: "اطلعي على تفاصيل الاستشارة وآلية تقديمها." },
  { n: "٢", title: "أرسلي طلبك", text: "حددي الموعد المفضل ووسيلة التواصل المناسبة." },
  { n: "٣", title: "تأكدي من الموعد", text: "يتم التواصل معك لتأكيد التفاصيل قبل اعتماد الحجز." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf7f1] text-[#342820]">
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="الصفحة الرئيسية">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cbb18d] bg-[#f0e4d3] text-lg font-bold text-[#795634]">إ</span>
          <span>
            <span className="block text-lg font-bold tracking-tight">إسراء عثمان</span>
            <span className="mt-0.5 block text-xs tracking-wide text-[#897967]">استشارات العلاقات</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[#756455] md:flex">
          <a href="#about" className="transition hover:text-[#8c653e]">عن التجربة</a>
          <a href="#services" className="transition hover:text-[#8c653e]">الاستشارات</a>
          <a href="#steps" className="transition hover:text-[#8c653e]">خطوات الحجز</a>
        </nav>
        <Link href="/book" className="rounded-full bg-[#795634] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#604329]">
          اطلبي موعدًا <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 md:grid-cols-[1.02fr_.98fr] md:px-10 md:pb-28 md:pt-16">
        <div className="pointer-events-none absolute -right-28 top-0 h-80 w-80 rounded-full bg-[#ead9c2]/45 blur-3xl" />
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e5d7c4] bg-white/65 px-4 py-2 text-xs font-semibold text-[#795634]">
            <span className="h-2 w-2 rounded-full bg-[#a9855a]" />
            مساحة أكثر وضوحًا لخطوتك القادمة
          </div>
          <h1 className="max-w-2xl text-[2.65rem] font-black leading-[1.35] tracking-tight sm:text-5xl md:text-6xl">
            أحيانًا، <span className="text-[#9a744b]">بداية الفهم</span>
            <br />هي أول خطوة للتغيير.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#76695c] md:text-lg">
            تعرّفي على خدمات الاستشارات، واختاري الخطوة المناسبة لكِ، وقدّمي طلب موعدك بسهولة من مكان واحد.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/book" className="rounded-xl bg-[#795634] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(121,86,52,.18)] transition hover:-translate-y-0.5 hover:bg-[#604329]">
              ابدئي طلب الحجز <span className="mr-2" aria-hidden="true">←</span>
            </Link>
            <a href="#services" className="rounded-xl border border-[#d8c7b1] bg-white/50 px-7 py-4 text-sm font-bold text-[#6c5238] transition hover:bg-white">
              اكتشفي تفاصيل الاستشارة
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#8a7b6b]">
            <span className="flex items-center gap-2"><span className="text-[#9a744b]">✦</span> خطوات واضحة</span>
            <span className="flex items-center gap-2"><span className="text-[#9a744b]">✦</span> طلب حجز منظم</span>
            <span className="flex items-center gap-2"><span className="text-[#9a744b]">✦</span> خصوصية تُحترم</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -left-5 top-12 h-28 w-28 rounded-full border border-[#d8c5ab]" />
          <div className="absolute -bottom-5 right-8 h-36 w-36 rounded-full bg-[#e9d6bc]/60 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-[#eadbc8] p-4 shadow-[0_28px_80px_rgba(86,62,38,.12)] sm:p-6">
            <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/60 bg-gradient-to-br from-[#f8efe3] via-[#ead9c4] to-[#c7a783] p-6 sm:min-h-[490px] sm:p-9">
              <div className="absolute -left-12 top-24 h-56 w-56 rounded-full border border-white/45" />
              <div className="absolute -left-2 top-36 h-40 w-40 rounded-full border border-white/35" />
              <div className="absolute -bottom-16 -right-8 h-72 w-72 rounded-full bg-[#a37a50]/20 blur-2xl" />
              <div className="relative flex items-start justify-between">
                <span className="text-xs tracking-[.18em] text-[#75563a]">ESRAA OSMAN</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/35 text-xl text-[#795634]">✳</span>
              </div>
              <div className="relative my-12">
                <p className="text-sm text-[#795634]">استشارات العلاقات</p>
                <p className="mt-4 max-w-xs text-3xl font-bold leading-[1.65] text-[#49372a] sm:text-4xl">
                  مساحة هادئة
                  <br />لفهم ما يهمكِ.
                </p>
                <div className="mt-6 h-px w-20 bg-[#9a744b]" />
                <p className="mt-5 max-w-xs text-sm leading-7 text-[#6f5944]">كل خطوة تبدأ بسؤال واضح، ومساحة مناسبة للتفكير.</p>
              </div>
              <div className="relative flex items-center justify-between border-t border-white/50 pt-5 text-xs text-[#70543a]">
                <span>خطوتكِ تبدأ هنا</span><span>01 — 03</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-3 bottom-10 max-w-[220px] rounded-2xl border border-[#eee1d0] bg-white/95 p-4 shadow-xl sm:-right-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3e9dc] text-lg text-[#8c653e]">✓</span>
              <div><p className="text-sm font-bold">طلب موعد بسهولة</p><p className="mt-1 text-xs text-[#887867]">تفاصيل واضحة في مكان واحد</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#eee3d5] bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-3 md:px-10 md:py-16">
          {highlights.map((item) => (
            <article key={item.number} className="flex gap-4">
              <span className="pt-1 text-sm font-bold tracking-widest text-[#b08c61]">{item.number}</span>
              <div><h2 className="text-lg font-bold">{item.title}</h2><p className="mt-2 text-sm leading-7 text-[#817366]">{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[.22em] text-[#a17b50]">THE CONSULTATION</p>
          <h2 className="mt-4 text-3xl font-black md:text-4xl">اختاري ما يناسب احتياجكِ</h2>
          <p className="mt-4 leading-8 text-[#817366]">ابدئي بالتعرّف على طبيعة الاستشارة وخطوات طلب الموعد، قبل اتخاذ قرار الحجز.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#e9ddce] bg-white p-7 sm:p-9">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4e9dc] text-xl text-[#8c653e]">✧</span>
            <h3 className="mt-6 text-2xl font-bold">استشارة فردية</h3>
            <p className="mt-3 leading-8 text-[#817366]">جلسة مخصصة لمناقشة الموضوعات التي ترغبين في فهمها، وفق طبيعة الخدمة وحدودها المهنية.</p>
            <ul className="mt-5 space-y-3 text-sm text-[#756455]">
              <li>— الاطلاع على تفاصيل الخدمة قبل الطلب</li>
              <li>— إرسال الموعد المفضل وبيانات التواصل</li>
              <li>— تأكيد التفاصيل قبل اعتماد الحجز</li>
            </ul>
            <Link href="/book" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#795634] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#604329]">اطلبي استشارة <span className="mr-2">←</span></Link>
          </article>
          <article className="flex flex-col justify-between rounded-[1.75rem] border border-[#e9ddce] bg-[#f2e7d9] p-7 sm:p-9">
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/50 text-xl text-[#8c653e]">♡</span>
              <h3 className="mt-6 text-2xl font-bold">قبل تأكيد موعدكِ</h3>
              <p className="mt-3 leading-8 text-[#756455]">نحرص على أن تكون الخطوات واضحة، من إرسال الطلب إلى معرفة الموعد النهائي وطريقة التأكيد.</p>
            </div>
            <div className="mt-8 rounded-2xl border border-white/70 bg-white/55 p-5">
              <p className="font-bold">معلومة مهمة</p>
              <p className="mt-2 text-sm leading-7 text-[#817366]">إرسال الطلب لا يعني تأكيد الموعد تلقائيًا. سيتم التواصل معكِ لتأكيد التوافر والتفاصيل.</p>
            </div>
          </article>
        </div>
      </section>

      <section id="steps" className="bg-[#efe3d4]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[.22em] text-[#a17b50]">HOW IT WORKS</p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">ثلاث خطوات بسيطة</h2>
            <p className="mt-4 leading-8 text-[#817366]">تجربة واضحة من أول زيارة وحتى تأكيد موعدكِ.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.n} className="rounded-2xl border border-white/80 bg-white/65 p-6">
                <span className="text-3xl font-black text-[#b08c61]">{step.n}</span>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#817366]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#4b392b] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-28 -right-12 h-72 w-72 rounded-full border border-white/10" />
          <p className="relative text-xs font-bold tracking-[.22em] text-[#dfc5a4]">YOUR NEXT STEP</p>
          <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-black leading-relaxed sm:text-4xl">ابدئي بخطوة واضحة، واختاري الموعد المناسب لكِ.</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-7 text-[#e0d4c7]">أرسلي طلب الحجز، وسيتم التواصل معكِ لمراجعة التفاصيل وتأكيد الموعد.</p>
          <Link href="/book" className="relative mt-8 inline-flex rounded-xl bg-[#e5c49a] px-8 py-4 text-sm font-bold text-[#49372a] transition hover:bg-[#f0d8b7]">ابدئي طلب الحجز <span className="mr-2">←</span></Link>
        </div>
      </section>

      <footer className="border-t border-[#e9ddce] px-5 py-8 text-center text-xs leading-6 text-[#8a7b6b]">
        <p className="font-bold text-[#5b4532]">إسراء عثمان — استشارات العلاقات</p>
        <p className="mt-2">هذه الصفحة للتعريف بالخدمة وطلب الموعد. لا يُعتمد أي حجز إلا بعد تأكيده.</p>
        <p className="mt-2">© {new Date().getFullYear()} جميع الحقوق محفوظة.</p>
      </footer>
    </main>
  );
}
