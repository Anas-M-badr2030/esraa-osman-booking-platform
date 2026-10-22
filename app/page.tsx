import Link from "next/link";

const services = [
  { title: "استشارة فردية", desc: "مساحة خاصة لمناقشة هدفك واحتياجك خلال جلسة محددة." },
  { title: "متابعة الحجز", desc: "تعرفي على خطوات الحجز والتأكيد قبل موعدك." },
  { title: "أسئلة شائعة", desc: "إجابات واضحة عن آلية الجلسات وسياسة الحجز." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <div>
          <p className="text-xl font-bold">إسراء عثمان</p>
          <p className="text-sm text-stone-600">استشارات العلاقات</p>
        </div>
        <Link href="/book" className="rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white">
          احجزي استشارتك
        </Link>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm text-amber-950">
            تجربة حجز أكثر سهولة وخصوصية
          </p>
          <h1 className="max-w-xl text-4xl font-black leading-tight md:text-6xl">
            خطوة أوضح تبدأ من فهم احتياجك
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
            تعرفي على تفاصيل الاستشارة، واطلبي الموعد المناسب من مكان واحد، بدل تشتت الرسائل بين المنصات.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/book" className="rounded-xl bg-amber-800 px-6 py-4 font-bold text-white">
              ابدئي طلب الحجز
            </Link>
            <a href="#services" className="rounded-xl border border-stone-300 px-6 py-4 font-bold">
              اكتشفي التفاصيل
            </a>
          </div>
          <p className="mt-4 text-xs text-stone-500">
            يتم تأكيد الموعد بعد مراجعة الطلب والتواصل معك.
          </p>
        </div>
        <div className="rounded-[2rem] border border-amber-100 bg-gradient-to-br from-amber-100 via-orange-50 to-stone-100 p-8 md:p-12">
          <div className="mx-auto flex aspect-[4/5] max-w-sm flex-col justify-between rounded-[1.5rem] border border-white/70 bg-white/70 p-7 shadow-sm">
            <span className="text-sm text-stone-500">استشارات العلاقات</span>
            <div>
              <div className="mb-4 h-1 w-16 rounded bg-amber-700" />
              <h2 className="text-3xl font-bold leading-relaxed">مساحة خاصة لكِ، وخطوة تبدأ باختيارك</h2>
              <p className="mt-4 leading-7 text-stone-600">اطلبي موعدك بسهولة واطلعي على خطوات الحجز بوضوح.</p>
            </div>
            <span className="text-sm font-semibold text-amber-900">إسراء عثمان</span>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-3xl font-black">كيف نقدر نساعدك؟</h2>
        <p className="mt-3 text-stone-600">معلومات واضحة تساعدك على فهم الخدمة قبل إرسال طلب الحجز.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-stone-200 bg-white p-6">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7 text-stone-600">{service.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="rounded-3xl bg-stone-900 p-8 text-white md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">هل أنتِ مستعدة لطلب موعد؟</h2>
            <p className="mt-2 text-stone-300">أرسلي طلبك، وسيتم التواصل معك لتأكيد التفاصيل.</p>
          </div>
          <Link href="/book" className="mt-5 inline-flex rounded-xl bg-amber-600 px-6 py-4 font-bold md:mt-0">
            طلب حجز
          </Link>
        </div>
      </section>

      <footer className="border-t border-stone-200 px-5 py-8 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} إسراء عثمان — استشارات العلاقات
      </footer>
    </main>
  );
}
