"use client";

import React, { useState } from "react";
import Link from "next/link";

type RoleType = "admin" | "editor" | "support";
type BookingStatus =
  | "مسودة/طلب جديد"
  | "بانتظار الدفع"
  | "مؤكد"
  | "مكتمل"
  | "ملغي"
  | "معاد جدولته"
  | "لم يحضر";

type PaymentStatus =
  | "جديد"
  | "بانتظار المراجعة"
  | "مدفوع"
  | "فشل"
  | "مسترد جزئياً"
  | "مسترد كلياً"
  | "ملغى";

export default function AdminDashboardPage() {
  // محاكاة صلاحيات الأدوار (البند 3: مبدأ أقل صلاحية لازمة)
  const [currentRole, setCurrentRole] = useState<RoleType>("admin");
  const [activeTab, setActiveTab] = useState<
    "overview" | "bookings" | "services" | "catalog" | "audit"
  >("overview");
  const [searchQuery, setSearchQuery] = useState("");

  // بيانات الحجوزات والطلبات (البند 5.1 و 5.2)
  const [bookings, setBookings] = useState([
    {
      id: "EO-849201",
      clientName: "سارة محمود",
      serviceTitle: "جلسة استشارية فردية خاصة",
      slot: "2026-10-26 | 04:30 م",
      amount: 1200,
      paymentMethod: "تحويل يدوي (InstaPay)",
      reference: "IPN-7748291",
      bookingStatus: "بانتظار الدفع" as BookingStatus,
      paymentStatus: "بانتظار المراجعة" as PaymentStatus,
    },
    {
      id: "EO-849188",
      clientName: "مريم عبد العزيز",
      serviceTitle: "جلسة توافق وإرشاد زوجي",
      slot: "2026-10-27 | 06:30 م",
      amount: 1800,
      paymentMethod: "بوابة دفع إلكتروني",
      reference: "PMB-9920144",
      bookingStatus: "مؤكد" as BookingStatus,
      paymentStatus: "مدفوع" as PaymentStatus,
    },
    {
      id: "EO-849150",
      clientName: "نهى خالد",
      serviceTitle: "دائرة الدعم والوعي العلاقاتي",
      slot: "2026-10-28 | 08:30 م",
      amount: 650,
      paymentMethod: "تحويل يدوي (محفظة)",
      reference: "VF-553019",
      bookingStatus: "مكتمل" as BookingStatus,
      paymentStatus: "مدفوع" as PaymentStatus,
    },
  ]);

  // إدارة الخدمات دون تعديل الكود (البند 5.1 و 12)
  const [services, setServices] = useState([
    {
      id: "srv-1",
      title: "جلسة استشارية فردية خاصة",
      category: "فردية",
      duration: 60,
      price: 1200,
      published: true,
    },
    {
      id: "srv-2",
      title: "جلسة توافق وإرشاد زوجي",
      category: "ثنائية",
      duration: 90,
      price: 1800,
      published: true,
    },
    {
      id: "srv-3",
      title: "دائرة الدعم والوعي العلاقاتي",
      category: "جماعية / ورشة",
      duration: 120,
      price: 650,
      published: true,
    },
  ]);

  const [newServiceTitle, setNewServiceTitle] = useState("");
  const [newServicePrice, setNewServicePrice] = useState("");
  const [newServiceDuration, setNewServiceDuration] = useState("60");

  // سجل التدقيق الإداري للأحداث الحساسة (البند 5.7 و 9)
  const [auditLogs, setAuditLogs] = useState([
    {
      id: "LOG-103",
      actor: "مدير المنصة (إسراء عثمان)",
      action: "اعتماد إيصال دفع يدوي وتغيير حالة الحجز EO-849188 إلى مؤكد",
      timestamp: "2026-10-23 11:40 ص",
    },
    {
      id: "LOG-102",
      actor: "مسؤول دعم/حجوزات",
      action: "إعادة جدولة الموعد EO-849112 بناءً على طلب العميل قبل 24 ساعة",
      timestamp: "2026-10-22 07:15 م",
    },
    {
      id: "LOG-101",
      actor: "مدير المنصة (إسراء عثمان)",
      action: "تحديث سعر خدمة (جلسة استشارية فردية خاصة) إلى 1200 ج.م",
      timestamp: "2026-10-21 03:20 م",
    },
  ]);

  // دالة تحديث حالة الحجز مع تسجيل الحدث في Audit Log (البند 5.1 و 5.7)
  const handleUpdateBookingStatus = (id: string, newStatus: BookingStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, bookingStatus: newStatus } : b))
    );
    const roleLabel =
      currentRole === "admin"
        ? "مدير المنصة"
        : currentRole === "support"
        ? "مسؤول دعم/حجوزات"
        : "محرر محتوى";

    setAuditLogs((prev) => [
      {
        id: "LOG-" + Math.floor(104 + Math.random() * 900),
        actor: roleLabel,
        action: `تغيير حالة الحجز (${id}) إلى «${newStatus}»`,
        timestamp: "الآن",
      },
      ...prev,
    ]);
  };

  // دالة اعتماد أو رفض التحويل اليدوي (البند 5.2)
  const handleVerifyPayment = (id: string, decision: "مدفوع" | "فشل") => {
    if (currentRole !== "admin") return;
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id
          ? {
              ...b,
              paymentStatus: decision,
              bookingStatus: decision === "مدفوع" ? "مؤكد" : "ملغي",
            }
          : b
      )
    );
    setAuditLogs((prev) => [
      {
        id: "LOG-" + Math.floor(104 + Math.random() * 900),
        actor: "مدير المنصة",
        action: `مراجعة التحويل اليدوي للطلب (${id}): تم تحديد حالة الدفع «${decision}»`,
        timestamp: "الآن",
      },
      ...prev,
    ]);
  };

  // دالة إضافة خدمة جديدة بدون تعديل الكود (البند 5.1)
  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newServiceTitle.trim() || !newServicePrice) return;
    const newId = "srv-" + (services.length + 1);
    setServices((prev) => [
      ...prev,
      {
        id: newId,
        title: newServiceTitle,
        category: "فردية",
        duration: Number(newServiceDuration),
        price: Number(newServicePrice),
        published: true,
      },
    ]);
    setAuditLogs((prev) => [
      {
        id: "LOG-" + Math.floor(104 + Math.random() * 900),
        actor: "مدير المنصة",
        action: `إضافة خدمة جديدة للكتالوج: «${newServiceTitle}» بسعر ${newServicePrice} ج.م`,
        timestamp: "الآن",
      },
      ...prev,
    ]);
    setNewServiceTitle("");
    setNewServicePrice("");
  };

  const toggleServicePublish = (id: string) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, published: !s.published } : s))
    );
  };

  const filteredBookings = bookings.filter(
    (b) =>
      b.clientName.includes(searchQuery) ||
      b.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.serviceTitle.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-[#fdf4f8] text-[#1f1224] flex flex-col">
      {/* Top Admin Header */}
      <header className="bg-[#2b1136] text-white border-b border-purple-900 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/esraa-logo.jpg"
              alt="شعار إسراء عثمان"
              className="h-10 w-10 rounded-lg object-contain bg-white p-1"
            />
            <div>
              <span className="font-bold text-sm sm:text-base block">
                لوحة الإدارة المركزية — منصة إسراء عثمان
              </span>
              <span className="text-[11px] text-pink-300 block">
                نظام الصلاحيات والأدوار (RBAC) وسجل التدقيق المباشر
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* مبدل الأدوار لمعاينة البند 3 من الوثيقة */}
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl text-xs">
              <span className="text-pink-200 hidden sm:inline">معاينة بصلاحية:</span>
              <select
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value as RoleType)}
                className="bg-transparent text-white font-bold focus:outline-none cursor-pointer"
              >
                <option value="admin" className="text-black">
                  مدير المنصة (صلاحية كاملة)
                </option>
                <option value="support" className="text-black">
                  مسؤول دعم/حجوزات (مواعيد فقط)
                </option>
                <option value="editor" className="text-black">
                  محرر محتوى (مقالات وصفحات بدون دفع)
                </option>
              </select>
            </div>

            <Link
              href="/"
              className="text-xs px-3.5 py-2 rounded-xl bg-brand-gradient text-white font-bold"
            >
              عرض الواجهة العامة
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 flex-1 space-y-8">
        {/* تنبيه صلاحية الدور الحالي (البند 3) */}
        <div className="bg-white p-4 rounded-2xl border border-pink-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-extrabold text-[#6b1d7a]">الدور النشط حالياً: </span>
            {currentRole === "admin" && (
              <span>
                <strong>مدير المنصة</strong> — صلاحية كاملة لإدارة الخدمات، الأسعار، اعتماد المدفوعات، المنتجات، وسجل التدقيق.
              </span>
            )}
            {currentRole === "support" && (
              <span>
                <strong>مسؤول دعم/حجوزات</strong> — متابعة المواعيد وتحديث حالات الحضور فقط (تم حجب الإيرادات واعتماد المدفوعات تطبيقاً لمبدأ أقل صلاحية).
              </span>
            )}
            {currentRole === "editor" && (
              <span>
                <strong>محرر محتوى</strong> — إدارة المقالات والمكتبة المجانية فقط (تم حجب بيانات العملاء والمدفوعات الحساسة).
              </span>
            )}
          </div>
          <span className="px-3 py-1 rounded-full bg-pink-50 text-[#db1a69] font-bold">
            حماية الجلسة مفعلة • RLS Active
          </span>
        </div>

        {/* مؤشرات الأداء الرئيسية KPIs (البند 2 و 5.7) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white p-5 rounded-3xl border border-pink-100 shadow-sm">
            <p className="text-xs text-gray-500">إجمالي الطلبات المسجلة</p>
            <p className="text-2xl font-extrabold text-[#2b1136] mt-1">148 طلب</p>
            <span className="text-[11px] text-emerald-600 font-bold">معدل التحويل: 4.8%</span>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-pink-100 shadow-sm">
            <p className="text-xs text-gray-500">الحجوزات المؤكدة هذا الشهر</p>
            <p className="text-2xl font-extrabold text-[#db1a69] mt-1">42 جلسة</p>
            <span className="text-[11px] text-gray-500">نسبة الحضور الفعلي: 94%</span>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-pink-100 shadow-sm">
            <p className="text-xs text-gray-500">الإيرادات المسجلة (المدفوعة)</p>
            <p className="text-2xl font-extrabold text-[#6b1d7a] mt-1">
              {currentRole === "admin" ? "86,400 ج.م" : "🔒 مقيد حسب الدور"}
            </p>
            <span className="text-[11px] text-gray-500">متوسط قيمة الطلب: 1,150 ج.م</span>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-pink-100 shadow-sm">
            <p className="text-xs text-gray-500">المنتج الرقمي الأكثر شراءً</p>
            <p className="text-base font-extrabold text-[#2b1136] mt-1">
              دليل الحدود الصحية
            </p>
            <span className="text-[11px] text-[#db1a69] font-bold">95 عملية تنزيل آمنة</span>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-pink-100 shadow-sm">
            <p className="text-xs text-gray-500">العضويات والاشتراكات النشطة</p>
            <p className="text-2xl font-extrabold text-[#6b1d7a] mt-1">64 عضوية</p>
            <span className="text-[11px] text-emerald-600 font-bold">نسبة التجديد: 88%</span>
          </div>
        </div>

        {/* شريط التبويبات الإدارية */}
        <div className="flex flex-wrap gap-2 border-b border-pink-200 pb-3">
          {[
            { id: "overview", label: "الحجوزات والمدفوعات" },
            { id: "services", label: "إدارة الخدمات والأسعار" },
            { id: "catalog", label: "المتجر الرقمي، البرامج، والعضويات" },
            { id: "audit", label: "سجل التدقيق والإعدادات (Audit Logs)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition ${
                activeTab === tab.id
                  ? "bg-brand-gradient text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-pink-50 border border-pink-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* محتوى التبويب 1: إدارة الحجوزات والطلبات والمدفوعات */}
        {activeTab === "overview" && (
          <div className="bg-white rounded-3xl p-6 border border-pink-100 shadow-sm space-y-6">
            {currentRole === "editor" ? (
              <div className="p-8 text-center text-sm text-gray-500">
                🔒 عفواً، صلاحية «محرر المحتوى» لا تخول الوصول إلى بيانات العملاء أو الحجوزات أو المدفوعات (تطبيقاً للبند 3 من وثيقة المتطلبات).
              </div>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-extrabold text-[#2b1136]">
                      سجل الحجوزات ومراجعة المدفوعات
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">
                      تحديث حالات الحجز السبع، واعتماد إيصالات التحويل اليدوي مع التوثيق الفوري في سجل التدقيق.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="بحث برقم الطلب أو اسم العميل..."
                      className="rounded-xl border border-gray-300 px-3.5 py-2 text-xs focus:border-[#db1a69] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-right text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-pink-100 bg-[#fdf4f8] text-[#6b1d7a]">
                        <th className="py-3.5 px-3 font-extrabold">رقم الطلب</th>
                        <th className="py-3.5 px-3 font-extrabold">العميل</th>
                        <th className="py-3.5 px-3 font-extrabold">الخدمة والموعد</th>
                        <th className="py-3.5 px-3 font-extrabold">المبلغ ووسيلة الدفع</th>
                        <th className="py-3.5 px-3 font-extrabold">حالة الدفع</th>
                        <th className="py-3.5 px-3 font-extrabold">حالة الحجز</th>
                        <th className="py-3.5 px-3 font-extrabold">إجراءات الاعتماد</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredBookings.map((b) => (
                        <tr key={b.id} className="hover:bg-pink-50/40">
                          <td className="py-4 px-3 font-extrabold text-[#6b1d7a]">{b.id}</td>
                          <td className="py-4 px-3 font-bold text-[#2b1136]">{b.clientName}</td>
                          <td className="py-4 px-3">
                            <p className="font-bold">{b.serviceTitle}</p>
                            <p className="text-gray-500">{b.slot}</p>
                          </td>
                          <td className="py-4 px-3">
                            <p className="font-extrabold">
                              {currentRole === "admin" ? `${b.amount} ج.م` : "—"}
                            </p>
                            <p className="text-gray-500">
                              {b.paymentMethod} ({b.reference})
                            </p>
                          </td>
                          <td className="py-4 px-3">
                            <span
                              className={`px-2.5 py-1 rounded-full font-bold text-[11px] ${
                                b.paymentStatus === "مدفوع"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : b.paymentStatus === "بانتظار المراجعة"
                                  ? "bg-amber-100 text-amber-800"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {b.paymentStatus}
                            </span>
                          </td>
                          <td className="py-4 px-3">
                            <select
                              value={b.bookingStatus}
                              onChange={(e) =>
                                handleUpdateBookingStatus(
                                  b.id,
                                  e.target.value as BookingStatus
                                )
                              }
                              className="rounded-lg border border-purple-200 bg-white px-2.5 py-1.5 font-bold text-[#6b1d7a] focus:outline-none"
                            >
                              <option value="مسودة/طلب جديد">مسودة/طلب جديد</option>
                              <option value="بانتظار الدفع">بانتظار الدفع</option>
                              <option value="مؤكد">مؤكد</option>
                              <option value="مكتمل">مكتمل</option>
                              <option value="معاد جدولته">معاد جدولته</option>
                              <option value="ملغي">ملغي</option>
                              <option value="لم يحضر">لم يحضر</option>
                            </select>
                          </td>
                          <td className="py-4 px-3">
                            {currentRole === "admin" &&
                            b.paymentStatus === "بانتظار المراجعة" ? (
                              <div className="flex items-center gap-1.5">
                                <button
                                  onClick={() => handleVerifyPayment(b.id, "مدفوع")}
                                  className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700"
                                >
                                  اعتماد الإيصال
                                </button>
                                <button
                                  onClick={() => handleVerifyPayment(b.id, "فشل")}
                                  className="px-2.5 py-1 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700"
                                >
                                  رفض
                                </button>
                              </div>
                            ) : (
                              <span className="text-gray-400">تمت المراجعة</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        )}

        {/* محتوى التبويب 2: إدارة الخدمات والأسعار دون تعديل الكود (البند 5.1 و 12) */}
        {activeTab === "services" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-pink-100 shadow-sm space-y-4">
              <h2 className="text-lg font-extrabold text-[#2b1136]">
                كتالوج الخدمات الحالي (تعديل السعر أو إيقاف النشر فوراً)
              </h2>
              <div className="space-y-3">
                {services.map((s) => (
                  <div
                    key={s.id}
                    className="p-4 rounded-2xl border border-gray-200 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-bold text-sm text-[#2b1136]">{s.title}</p>
                      <p className="text-xs text-gray-500">
                        الفئة: {s.category} • المدة: {s.duration} دقيقة • السعر:{" "}
                        <strong className="text-[#6b1d7a]">{s.price} ج.م</strong>
                      </p>
                    </div>
                    <button
                      onClick={() => toggleServicePublish(s.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                        s.published
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {s.published ? "منشورة للجمهور" : "مخفية مؤقتاً"}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleAddService}
              className="lg:col-span-5 bg-white rounded-3xl p-6 border border-pink-100 shadow-sm space-y-4"
            >
              <h3 className="text-lg font-extrabold text-[#6b1d7a]">
                + إضافة خدمة استشارية جديدة دون تدخل المبرمج
              </h3>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  اسم الخدمة *
                </label>
                <input
                  type="text"
                  required
                  value={newServiceTitle}
                  onChange={(e) => setNewServiceTitle(e.target.value)}
                  placeholder="مثال: جلسة متابعة سريعة"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 text-xs"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    السعر (ج.م) *
                  </label>
                  <input
                    type="number"
                    required
                    value={newServicePrice}
                    onChange={(e) => setNewServicePrice(e.target.value)}
                    placeholder="850"
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    المدة (بالدقائق)
                  </label>
                  <input
                    type="number"
                    value={newServiceDuration}
                    onChange={(e) => setNewServiceDuration(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 text-xs"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-brand-gradient text-white font-bold text-xs shadow"
              >
                حفظ ونشر الخدمة في الكتالوج
              </button>
            </form>
          </div>
        )}

        {/* محتوى التبويب 3: المتجر الرقمي، البرامج، والعضويات */}
        {activeTab === "catalog" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm space-y-3">
              <span className="px-3 py-1 rounded-full bg-pink-100 text-[#db1a69] text-xs font-bold">
                المتجر الرقمي (البند 5.3)
              </span>
              <h3 className="font-extrabold text-base text-[#2b1136]">
                حماية الملفات المدفوعة (Signed URLs)
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                جميع الكتيبات والأدلة محفوظة في تخزين خاص (Private Bucket) ولا يمكن تنزيلها إلا بعد التحقق من جدول الاستحقاق (entitlements) بحد أقصى 5 تنزيلات لكل عميل.
              </p>
              <div className="pt-2 border-t border-gray-100 text-xs font-bold text-[#6b1d7a]">
                3 منتجات رقمية نشطة • 0 روابط عامة مكشوفة
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm space-y-3">
              <span className="px-3 py-1 rounded-full bg-purple-100 text-[#6b1d7a] text-xs font-bold">
                البرامج والورش (البند 5.4)
              </span>
              <h3 className="font-extrabold text-base text-[#2b1136]">
                إدارة الوحدات والمقاعد المحدودة
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                تحكم كامل في نشر الدروس تدريجياً (Drip Content)، وإدارة سعة المقاعد للورش التفاعلية المباشرة مع التحقق من الصلاحية على مستوى الخادم.
              </p>
              <div className="pt-2 border-t border-gray-100 text-xs font-bold text-[#6b1d7a]">
                برنامجان نشطان • 6 وحدات تدريبية
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm space-y-3">
              <span className="px-3 py-1 rounded-full bg-pink-100 text-[#db1a69] text-xs font-bold">
                العضويات (البند 5.5)
              </span>
              <h3 className="font-extrabold text-base text-[#2b1136]">
                إدارة الاشتراكات والاستحقاق
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                متابعة حالات العضوية (نشطة، بانتظار الدفع، متأخرة، ملغاة، منتهية) مع إيقاف الوصول للمحتوى الحصري تلقائياً فور انتهاء تاريخ الصلاحية.
              </p>
              <div className="pt-2 border-t border-gray-100 text-xs font-bold text-[#6b1d7a]">
                خطتان (شهرية / سنوية) • 64 مشتركاً نشطاً
              </div>
            </div>
          </div>
        )}

        {/* محتوى التبويب 4: سجل التدقيق الإداري Audit Logs (البند 5.7) */}
        {activeTab === "audit" && (
          <div className="bg-white rounded-3xl p-6 border border-pink-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-extrabold text-[#2b1136]">
                  سجل التدقيق الأمني للأحداث الحساسة (Audit Logs)
                </h2>
                <p className="text-xs text-gray-500">
                  يوثق تلقائياً كل تعديل في حالات الحجز، اعتماد المدفوعات، الأسعار، والصلاحيات مع اسم المستخدم والتوقيت.
                </p>
              </div>
            </div>

            <div className="divide-y divide-gray-100 text-xs">
              {auditLogs.map((log) => (
                <div key={log.id} className="py-3 flex items-center justify-between">
                  <div>
                    <span className="font-extrabold text-[#6b1d7a] ml-2">[{log.id}]</span>
                    <span className="font-bold text-[#2b1136]">{log.actor}: </span>
                    <span className="text-gray-700">{log.action}</span>
                  </div>
                  <span className="text-gray-400 font-medium">{log.timestamp}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}