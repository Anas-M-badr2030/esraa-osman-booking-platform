"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type ServiceOption = {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: number;
  delivery: string;
  policy: string;
};

const SERVICES: ServiceOption[] = [
  {
    id: "ind-1",
    title: "جلسة تقييم العلاقة والاختيار الصحيح",
    category: "بدايات العلاقات",
    duration: "60 دقيقة",
    price: 1200,
    delivery: "أونلاين (رابط فيديو خاص ومؤمّن)",
    policy: "إمكانية إعادة الجدولة مجاناً قبل 24 ساعة من الموعد المحدد.",
  },
  {
    id: "couples-1",
    title: "جلسة استعادة الشغف وعلاج الفتور",
    category: "إحياء الشغف والتوافق",
    duration: "90 دقيقة",
    price: 1800,
    delivery: "أونلاين (جلسة فردية أو ثنائية)",
    policy: "إمكانية إعادة الجدولة مجاناً قبل 24 ساعة من الموعد المحدد.",
  },
  {
    id: "recovery-1",
    title: "جلسة تخطي علاقة صعبة والتعافي النفسي",
    category: "التعافي وتخطي الأزمات",
    duration: "60 دقيقة",
    price: 1200,
    delivery: "أونلاين (بيئة آمنة وسرية 100%)",
    policy: "إمكانية إعادة الجدولة مجاناً قبل 24 ساعة من الموعد المحدد.",
  },
];

const AVAILABLE_DATES = [
  { date: "2026-10-26", label: "الإثنين 26 أكتوبر" },
  { date: "2026-10-27", label: "الثلاثاء 27 أكتوبر" },
  { date: "2026-10-28", label: "الأربعاء 28 أكتوبر" },
  { date: "2026-10-29", label: "الخميس 29 أكتوبر" },
];

const TIME_SLOTS = [
  { time: "12:00 م", available: true },
  { time: "02:00 م", available: false },
  { time: "04:30 م", available: true },
  { time: "06:30 م", available: true },
  { time: "08:30 م", available: false },
  { time: "10:00 م", available: true },
];

function BookingContent() {
  const searchParams = useSearchParams();
  const initialServiceId = searchParams.get("service") || "ind-1";

  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId);
  const [selectedDate, setSelectedDate] = useState<string>(AVAILABLE_DATES[0].date);
  const [selectedSlot, setSelectedSlot] = useState<string>("04:30 م");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notificationPref, setNotificationPref] = useState<"email" | "whatsapp">("email");

  const [paymentMethod, setPaymentMethod] = useState<"gateway" | "manual">("manual");
  const [transferReference, setTransferReference] = useState("");
  const [receiptFileName, setReceiptFileName] = useState("");

  const [agreedPolicy, setAgreedPolicy] = useState(false);
  const [agreedDisclaimer, setAgreedDisclaimer] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingCompleted, setBookingCompleted] = useState<null | {
    orderId: string;
    bookingStatus: string;
    paymentStatus: string;
  }>(null);

  const selectedService =
    SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg("يرجى إدخال البيانات الأساسية المطلوبة (الاسم، البريد الإلكتروني، ورقم الهاتف).");
      return;
    }

    if (!selectedSlot) {
      setErrorMsg("يرجى اختيار موعد متاح من الجدول.");
      return;
    }

    if (paymentMethod === "manual" && !transferReference.trim() && !receiptFileName) {
      setErrorMsg("يرجى إدخال رقم مرجع التحويل أو إرفاق صورة إيصال التحويل اليدوي للمراجعة.");
      return;
    }

    if (!agreedPolicy || !agreedDisclaimer) {
      setErrorMsg("يرجى الموافقة على سياسة الحجز والإلغاء وإخلاء المسؤولية المهنية للمتابعة.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setBookingCompleted({
        orderId: "EO-" + Math.floor(100000 + Math.random() * 900000),
        bookingStatus:
          paymentMethod === "manual" ? "بانتظار الدفع (مراجعة الإيصال)" : "بانتظار تأكيد بوابة الدفع",
        paymentStatus:
          paymentMethod === "manual" ? "بانتظار المراجعة" : "جاري التحقق من المزود",
      });
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#fdf4f8] text-[#1f1224] flex flex-col">
      <div className="bg-[#6b1d7a] text-white text-xs py-2 px-4 text-center">
        نظام الحجز الرسمي لـ د. إسراء عثمان — لا نطلب أي تفاصيل شخصية حساسة في نموذج الحجز حفاظاً على خصوصيتك.
      </div>

      <header className="bg-white border-b border-pink-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/esraa-logo.jpg"
              onError={handleLogoError}
              alt="شعار د. إسراء عثمان"
              className="h-11 w-auto object-contain rounded"
            />
            <div>
              <span className="font-bold text-base text-[#6b1d7a] block">منصة د. إسراء عثمان</span>
              <span className="text-[11px] text-gray-500 block">
                أول استشارية علاقات في مصر والوطن العربي
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#db1a69] transition">
              العودة للرئيسية
            </Link>
            <Link
              href="/admin"
              className="px-3 py-1.5 rounded-lg border border-purple-200 text-[#6b1d7a] hover:bg-purple-50"
            >
              لوحة الإدارة
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto w-full px-4 py-8 sm:py-12 flex-1">
        {bookingCompleted ? (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 border border-pink-200 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-brand-gradient text-white flex items-center justify-center text-3xl font-bold shadow-md">
              ✓
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2b1136]">
              تم استلام طلب الحجز مع د. إسراء عثمان بنجاح
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              أهلاً بك <strong>{fullName}</strong>. تم تسجيل موعدك المبدئي بنجاح مع التحقق من عدم تضارب المواعيد.
              سيتم إرسال إشعار تشغيلي عبر ({notificationPref === "email" ? "البريد الإلكتروني" : "واتساب"}) بدون أي بيانات حساسة.
            </p>

            <div className="bg-[#fdf4f8] rounded-2xl p-5 text-right text-xs sm:text-sm space-y-3 border border-pink-100">
              <div className="flex justify-between border-b border-pink-100 pb-2">
                <span className="text-gray-500">رقم الطلب المرجعي:</span>
                <span className="font-extrabold text-[#6b1d7a]">{bookingCompleted.orderId}</span>
              </div>
              <div className="flex justify-between border-b border-pink-100 pb-2">
                <span className="text-gray-500">الاستشارية:</span>
                <span className="font-bold text-[#6b1d7a]">د. إسراء عثمان</span>
              </div>
              <div className="flex justify-between border-b border-pink-100 pb-2">
                <span className="text-gray-500">الخدمة المختارة:</span>
                <span className="font-bold">{selectedService.title}</span>
              </div>
              <div className="flex justify-between border-b border-pink-100 pb-2">
                <span className="text-gray-500">الموعد المحدد (توقيت القاهرة):</span>
                <span className="font-bold text-[#db1a69]">
                  {AVAILABLE_DATES.find((d) => d.date === selectedDate)?.label} — الساعة {selectedSlot}
                </span>
              </div>
              <div className="flex justify-between border-b border-pink-100 pb-2">
                <span className="text-gray-500">المبلغ الإجمالي:</span>
                <span className="font-extrabold text-[#6b1d7a]">{selectedService.price} ج.م</span>
              </div>
              <div className="flex justify-between border-b border-pink-100 pb-2">
                <span className="text-gray-500">حالة الحجز:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
                  {bookingCompleted.bookingStatus}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">حالة الدفع:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-[#6b1d7a] font-bold text-xs">
                  {bookingCompleted.paymentStatus}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/admin"
                className="px-6 py-3 rounded-xl bg-brand-gradient text-white font-bold text-sm shadow-md"
              >
                معاينة الطلب في لوحة الإدارة
              </Link>
              <button
                onClick={() => setBookingCompleted(null)}
                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-bold text-sm hover:bg-gray-50"
              >
                حجز موعد آخر
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2b1136]">
                  حجز جلسة استشارية مع د. إسراء عثمان
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  هنوفر عليك ونحط إيدك ع المشكلة وعلى حلها — جميع المواعيد بتوقيت القاهرة (GMT+2).
                </p>
              </div>

              {errorMsg && (
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium">
                  ⚠️ {errorMsg}
                </div>
              )}

              {/* 1. اختيار الخدمة */}
              <div className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm space-y-4">
                <h2 className="text-lg font-extrabold text-[#6b1d7a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-pink-100 text-[#db1a69] text-xs flex items-center justify-center">
                    1
                  </span>
                  <span>اختر محور الجلسة الاستشارية</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {SERVICES.map((srv) => {
                    const active = srv.id === selectedServiceId;
                    return (
                      <button
                        type="button"
                        key={srv.id}
                        onClick={() => setSelectedServiceId(srv.id)}
                        className={`text-right p-4 rounded-2xl border transition flex flex-col justify-between ${
                          active
                            ? "border-[#db1a69] bg-[#fdf4f8] ring-2 ring-[#db1a69]/20"
                            : "border-gray-200 hover:border-pink-200 bg-white"
                        }`}
                      >
                        <div>
                          <span className="text-[11px] font-bold text-[#db1a69] block mb-1">
                            {srv.category}
                          </span>
                          <p className="font-bold text-sm text-[#2b1136] mb-2">{srv.title}</p>
                        </div>
                        <div className="pt-2 border-t border-pink-100 flex items-center justify-between text-xs">
                          <span className="text-gray-500">{srv.duration}</span>
                          <span className="font-extrabold text-[#6b1d7a]">{srv.price} ج.م</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. اختيار الموعد المتاح */}
              <div className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h2 className="text-lg font-extrabold text-[#6b1d7a] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-pink-100 text-[#db1a69] text-xs flex items-center justify-center">
                      2
                    </span>
                    <span>اختيار اليوم والموعد المتاح</span>
                  </h2>
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    المنطقة الزمنية: القاهرة (Africa/Cairo)
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {AVAILABLE_DATES.map((d) => (
                    <button
                      type="button"
                      key={d.date}
                      onClick={() => setSelectedDate(d.date)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition ${
                        selectedDate === d.date
                          ? "bg-[#6b1d7a] text-white border-[#6b1d7a]"
                          : "bg-white text-gray-700 border-gray-200 hover:bg-purple-50"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-600 mb-2">
                    المواعيد المتاحة (يتم قفل المواعيد المحجوزة تلقائياً لمنع الحجز المزدوج):
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = selectedSlot === slot.time;
                      return (
                        <button
                          type="button"
                          key={slot.time}
                          disabled={!slot.available}
                          onClick={() => setSelectedSlot(slot.time)}
                          className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition ${
                            !slot.available
                              ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed line-through"
                              : isSelected
                              ? "bg-[#db1a69] text-white border-[#db1a69] shadow-sm"
                              : "bg-white text-[#2b1136] border-pink-200 hover:bg-pink-50"
                          }`}
                        >
                          {slot.time}
                          {!slot.available && <span className="block text-[10px]">محجوز</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 3. البيانات الأساسية للعميل */}
              <div className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm space-y-4">
                <h2 className="text-lg font-extrabold text-[#6b1d7a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-pink-100 text-[#db1a69] text-xs flex items-center justify-center">
                    3
                  </span>
                  <span>البيانات الأساسية للتواصل</span>
                </h2>

                <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-100 text-xs text-[#6b1d7a]">
                  🔒 <strong>حماية الخصوصية:</strong> لا نطلب كتابة أي تفاصيل تخص المشكلة الشخصية في هذا النموذج؛ تُناقش كافة التفاصيل مع د. إسراء عثمان داخل الجلسة مباشرة.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      الاسم (أو اللقب المفضل) *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="الاسم الثنائي"
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#db1a69] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      البريد الإلكتروني (لإرسال رابط الجلسة) *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#db1a69] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      رقم الهاتف / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="010XXXXXXXX"
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#db1a69] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      قناة تذكير الموعد المفضلة
                    </label>
                    <select
                      value={notificationPref}
                      onChange={(e) => setNotificationPref(e.target.value as "email" | "whatsapp")}
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#db1a69] focus:outline-none bg-white"
                    >
                      <option value="email">البريد الإلكتروني (أساسي)</option>
                      <option value="whatsapp">البريد الإلكتروني + تذكير WhatsApp</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 4. وسيلة الدفع */}
              <div className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm space-y-4">
                <h2 className="text-lg font-extrabold text-[#6b1d7a] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-pink-100 text-[#db1a69] text-xs flex items-center justify-center">
                    4
                  </span>
                  <span>آلية الدفع وتأكيد الطلب</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("manual")}
                    className={`p-4 rounded-2xl border text-right transition ${
                      paymentMethod === "manual"
                        ? "border-[#db1a69] bg-[#fdf4f8]"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <p className="font-bold text-sm text-[#2b1136]">
                      تحويل يدوي (InstaPay / محفظة إلكترونية)
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      تحويل مباشر مع إرفاق رقم المرجع أو صورة الإيصال للمراجعة والاعتماد.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("gateway")}
                    className={`p-4 rounded-2xl border text-right transition ${
                      paymentMethod === "gateway"
                        ? "border-[#db1a69] bg-[#fdf4f8]"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <p className="font-bold text-sm text-[#2b1136]">
                      دفع إلكتروني فوري (بطاقة بنكية)
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      تأكيد آلي عبر مزود الدفع المرخص دون تخزين بيانات بطاقتك في المنصة.
                    </p>
                  </button>
                </div>

                {paymentMethod === "manual" ? (
                  <div className="p-4 rounded-2xl bg-[#fdf4f8] border border-pink-200 space-y-3 text-xs">
                    <p className="font-bold text-[#6b1d7a]">تعليمات التحويل اليدوي:</p>
                    <p className="text-gray-700">
                      يرجى تحويل مبلغ <strong>{selectedService.price} ج.م</strong> عبر{" "}
                      <strong>InstaPay</strong> أو المحفظة المعتمدة، ثم إدخال رقم المرجع أو رفع صورة الإيصال للمراجعة.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">
                          رقم مرجع التحويل (Reference Number)
                        </label>
                        <input
                          type="text"
                          value={transferReference}
                          onChange={(e) => setTransferReference(e.target.value)}
                          placeholder="مثال: IPN-98451230"
                          className="w-full rounded-xl border border-gray-300 px-3 py-2 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">
                          رفع صورة الإيصال (اختياري مع المرجع)
                        </label>
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) =>
                            setReceiptFileName(e.target.files?.[0]?.name || "")
                          }
                          className="w-full text-xs text-gray-600 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-purple-100 file:text-[#6b1d7a]"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-xs text-gray-600">
                    سيتم توجيهك إلى بوابة الدفع المشفرة، ويُعتمد الحجز فور وصول إشعار التحقق الآمن للخادم.
                  </div>
                )}
              </div>

              {/* 5. الموافقات والسياسات */}
              <div className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm space-y-3 text-xs text-gray-700">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedPolicy}
                    onChange={(e) => setAgreedPolicy(e.target.checked)}
                    className="mt-1 accent-[#db1a69]"
                  />
                  <span>
                    أوافق على <strong>سياسة الحجز والإلغاء وإعادة الجدولة</strong> ({selectedService.policy})، وسياسة الخصوصية.
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedDisclaimer}
                    onChange={(e) => setAgreedDisclaimer(e.target.checked)}
                    className="mt-1 accent-[#db1a69]"
                  />
                  <span>
                    <strong>إخلاء مسؤولية مهني:</strong> أقر بعلمي أن الجلسة استشارية إرشادية وتوعوية في مجال العلاقات والسلوك الإنساني، ولا تُعد تشخيصاً طبياً دوائياً أو خدمة طوارئ.
                  </span>
                </label>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-brand-gradient text-white font-extrabold text-base shadow-lg hover:opacity-95 transition disabled:opacity-60"
                  >
                    {isSubmitting
                      ? "جاري التحقق من توافر الموعد وتسجيل الطلب..."
                      : `تأكيد الحجز مع د. إسراء عثمان (${selectedService.price} ج.م)`}
                  </button>
                </div>
              </div>
            </form>

            {/* العمود الأيسر: ملخص الحجز والهوية */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="bg-white rounded-3xl p-6 border border-pink-100 shadow-md space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-pink-100">
                  <img
                    src="/images/esraa-profile.png"
                    alt="د. إسراء عثمان"
                    className="w-14 h-14 rounded-2xl object-cover object-top border border-pink-200"
                  />
                  <div>
                    <h3 className="font-extrabold text-base text-[#6b1d7a]">د. إسراء عثمان</h3>
                    <p className="text-xs text-gray-500">
                      أول استشارية علاقات في مصر والوطن العربي
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <p className="font-bold text-gray-500">ملخص طلبك الحالي:</p>
                  <div className="flex justify-between">
                    <span className="text-gray-600">الخدمة:</span>
                    <span className="font-bold text-[#2b1136]">{selectedService.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">الفئة:</span>
                    <span className="font-medium text-[#db1a69]">{selectedService.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">المدة:</span>
                    <span className="font-medium">{selectedService.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">التاريخ:</span>
                    <span className="font-bold">
                      {AVAILABLE_DATES.find((d) => d.date === selectedDate)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">الوقت:</span>
                    <span className="font-bold text-[#db1a69]">{selectedSlot}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-pink-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-700">الإجمالي المستحق:</span>
                  <span className="text-2xl font-extrabold text-[#6b1d7a]">
                    {selectedService.price} ج.م
                  </span>
                </div>
              </div>

              <div className="bg-[#2b1136] text-white rounded-3xl p-5 text-xs space-y-3">
                <p className="font-bold text-pink-400">للاستفسارات المباشرة حول الحجز:</p>
                <p className="text-gray-200 leading-relaxed">
                  يمكنك أيضاً التواصل للاستفسار عبر الحساب الرسمي لـ د. إسراء عثمان على إنستجرام:
                </p>
                <a
                  href="https://www.instagram.com/dr_israa_osman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2.5 rounded-xl bg-white/10 text-pink-300 font-bold hover:bg-white/20 transition"
                >
                  instagram.com/dr_israa_osman
                </a>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm">جاري تحميل نظام الحجز...</div>}>
      <BookingContent />
    </Suspense>
  );
}
