"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // UI prototype only. Connect a validated server action/API and database before launch.
    setSubmitted(true);
  }

  return (
    <main className="mx-auto min-h-screen max-w-2xl px-5 py-10">
      <Link href="/" className="text-sm font-bold text-amber-900">→ العودة للرئيسية</Link>
      <h1 className="mt-8 text-3xl font-black">طلب حجز استشارة</h1>
      <p className="mt-3 leading-7 text-stone-600">
        املئي البيانات الأساسية فقط. لا تكتبي تفاصيل شخصية أو حساسة عن حالتك في هذا النموذج.
      </p>
      {submitted ? (
        <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6 text-green-950">
          <h2 className="text-xl font-bold">تم اختبار النموذج بنجاح</h2>
          <p className="mt-2 leading-7">هذه نسخة تجريبية؛ لم يتم حفظ طلبك أو إرساله. سيتم تفعيل الإرسال بعد ربط قاعدة البيانات.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-2xl border border-stone-200 bg-white p-6">
          <label className="block">
            <span className="mb-2 block font-bold">الاسم</span>
            <input required name="name" autoComplete="name" className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-amber-700" placeholder="الاسم الأول أو الاسم المناسب للتواصل" />
          </label>
          <label className="block">
            <span className="mb-2 block font-bold">وسيلة التواصل</span>
            <input required name="contact" className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-amber-700" placeholder="رقم هاتف أو وسيلة تواصل مناسبة" />
          </label>
          <label className="block">
            <span className="mb-2 block font-bold">نوع الاستشارة</span>
            <select required name="service" defaultValue="" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3">
              <option value="" disabled>اختاري الخدمة</option>
              <option value="individual">استشارة فردية</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block font-bold">الموعد المفضل</span>
            <input name="preferred_time" type="text" className="w-full rounded-xl border border-stone-300 px-4 py-3" placeholder="مثال: مساء الخميس — سيتم التأكيد لاحقًا" />
          </label>
          <label className="flex items-start gap-3 text-sm leading-6 text-stone-600">
            <input required type="checkbox" className="mt-1" />
            أوافق على استخدام بياناتي الأساسية للتواصل بشأن طلب الحجز وفق سياسة الخصوصية.
          </label>
          <button className="w-full rounded-xl bg-amber-800 px-5 py-4 font-bold text-white" type="submit">إرسال طلب الحجز التجريبي</button>
          <p className="text-xs leading-5 text-stone-500">تنبيه: النموذج غير متصل حاليًا بقاعدة بيانات ولا يرسل طلبات حقيقية.</p>
        </form>
      )}
    </main>
  );
}
