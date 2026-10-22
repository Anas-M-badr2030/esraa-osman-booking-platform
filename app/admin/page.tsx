import Link from "next/link";

export default function AdminPreviewPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-5 py-10">
      <Link href="/" className="text-sm font-bold text-amber-900">→ عرض الموقع</Link>
      <h1 className="mt-8 text-3xl font-black">لوحة إدارة الحجوزات</h1>
      <p className="mt-3 text-stone-600">واجهة أولية للتصميم فقط. يجب إضافة تسجيل دخول وصلاحيات قبل ربطها ببيانات فعلية.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ["طلبات جديدة", "—"],
          ["حجوزات مؤكدة", "—"],
          ["مدفوعات تم التحقق منها", "—"],
        ].map(([label, value]) => (
          <section key={label} className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm text-stone-500">{label}</p>
            <p className="mt-3 text-3xl font-black">{value}</p>
          </section>
        ))}
      </div>
      <section className="mt-8 rounded-2xl border border-stone-200 bg-white p-6">
        <h2 className="text-xl font-bold">آخر طلبات الحجز</h2>
        <p className="mt-3 text-stone-500">ستظهر الحجوزات بعد إعداد قاعدة البيانات وتطبيق صلاحيات الوصول.</p>
      </section>
    </main>
  );
}
