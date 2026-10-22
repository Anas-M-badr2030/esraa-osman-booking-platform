"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#fbf7f1] px-5 py-10 text-[#342820]">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-sm font-bold text-[#795634]">→ العودة للرئيسية</Link>
        <div className="mt-8 rounded-[2rem] border border-[#e9ddce] bg-white p-6 shadow-sm sm:p-10">
          <p className="text-xs font-bold tracking-[.2em] text-[#a17b50]">BOOK A CONSULTATION</p>
          <h1 className="mt-4 text-3xl font-black">طلب حجز استشارة</h1>
          <p className="mt-3 leading-7 text-[#817366]">أدخلي البيانات الأساسية، وسيتم التواصل لتأكيد الموعد عند تشغيل نظام الحجز الفعلي.</p>
          {submitted ? (
            <div className="mt-8 rounded-2xl border border-[#e9ddce] bg-[#f6eee4] p-6">
              <h2 className="text-xl font-bold">شكرًا لكِ</h2>
              <p className="mt-2 leading-7 text-[#756455]">هذه معاينة تجريبية فقط. لم تُحفظ البيانات ولم يتم إرسال أي طلب حقيقي.</p>
              <Link href="/" className="mt-5 inline-flex font-bold text-[#795634]">العودة إلى الصفحة الرئيسية ←</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <label className="block"><span className="mb-2 block text-sm font-bold">الاسم</span><input required name="name" autoComplete="name" className="w-full rounded-xl border border-[#dfd1c0] bg-[#fdfbf8] px-4 py-3 outline-[#a17b50]" placeholder="الاسم المناسب للتواصل" /></label>
              <label className="block"><span className="mb-2 block text-sm font-bold">وسيلة التواصل</span><input required name="contact" className="w-full rounded-xl border border-[#dfd1c0] bg-[#fdfbf8] px-4 py-3 outline-[#a17b50]" placeholder="رقم هاتف أو وسيلة تواصل" /></label>
              <label className="block"><span className="mb-2 block text-sm font-bold">الخدمة</span><select required name="service" defaultValue="" className="w-full rounded-xl border border-[#dfd1c0] bg-[#fdfbf8] px-4 py-3"><option value="" disabled>اختاري الخدمة</option><option value="individual">استشارة فردية</option></select></label>
              <label className="block"><span className="mb-2 block text-sm font-bold">الموعد المفضل</span><input name="preferred_time" className="w-full rounded-xl border border-[#dfd1c0] bg-[#fdfbf8] px-4 py-3 outline-[#a17b50]" placeholder="مثال: مساء الخميس" /></label>
              <label className="flex items-start gap-3 text-sm leading-6 text-[#756455]"><input required type="checkbox" className="mt-1 accent-[#795634]" />أوافق على استخدام بياناتي الأساسية للتواصل بشأن طلب الحجز وفق سياسة الخصوصية.</label>
              <button className="w-full rounded-xl bg-[#795634] px-5 py-4 font-bold text-white transition hover:bg-[#604329]" type="submit">تجربة إرسال الطلب</button>
              <p className="text-xs leading-5 text-[#8a7b6b]">نسخة عرض غير متصلة بقاعدة بيانات؛ لا تدخلي بيانات شخصية حقيقية.</p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
