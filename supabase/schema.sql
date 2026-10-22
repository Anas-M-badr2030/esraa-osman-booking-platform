-- مخطط قاعدة بيانات منصة إسراء عثمان الرقمية (مطابق للبند 9 من وثيقة المتطلبات)
create extension if not exists "uuid-ossp";

-- 1. profiles (المستخدمون والأدوار: client, admin, editor, support)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text not null,
  phone text,
  role text not null default 'client' check (role in ('client', 'admin', 'editor', 'support')),
  created_at timestamptz default now()
);

-- 2. services (الخدمات والاستشارات)
create table public.services (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text unique not null,
  category text not null check (category in ('individual', 'couples', 'group', 'workshop')),
  description text,
  duration_minutes int not null default 60,
  price numeric(10,2) not null,
  currency text default 'EGP',
  delivery_method text default 'online',
  cancellation_policy text,
  is_published boolean default false,
  created_at timestamptz default now()
);

-- 3. availability_rules (قواعد التوفر والمنطقة الزمنية)
create table public.availability_rules (
  id uuid default uuid_generate_v4() primary key,
  day_of_week int not null check (day_of_week between 0 and 6),
  start_time time not null,
  end_time time not null,
  buffer_minutes int default 15,
  timezone text default 'Africa/Cairo',
  max_bookings_per_slot int default 1,
  is_active boolean default true
);

-- 4. orders (الطلبات وسلة الشراء)
create table public.orders (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  total_amount numeric(10,2) not null,
  currency text default 'EGP',
  order_status text not null default 'new' check (order_status in ('new', 'pending_payment', 'paid', 'failed', 'refunded_partial', 'refunded_full', 'cancelled')),
  created_at timestamptz default now()
);

-- 5. bookings (حجوزات المواعيد مع منع التضارب)
create table public.bookings (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  service_id uuid references public.services(id) not null,
  order_id uuid references public.orders(id),
  scheduled_start timestamptz not null,
  scheduled_end timestamptz not null,
  status text not null default 'pending_payment' check (status in ('draft', 'pending_payment', 'confirmed', 'completed', 'cancelled', 'rescheduled', 'no_show')),
  operational_notes text,
  updated_by uuid references public.profiles(id),
  updated_at timestamptz default now(),
  unique (service_id, scheduled_start) -- منع الحجز المزدوج لنفس الموعد
);

-- 6. payments (المدفوعات الإلكترونية والتحويل اليدوي دون بيانات البطاقات)
create table public.payments (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders(id) not null,
  provider text not null check (provider in ('paymob', 'fawry', 'stripe', 'manual_transfer')),
  external_reference text unique,
  receipt_file_path text,
  amount numeric(10,2) not null,
  status text not null default 'pending' check (status in ('pending_review', 'verified', 'failed', 'refunded')),
  verified_by uuid references public.profiles(id),
  created_at timestamptz default now()
);

-- 7. products (المنتجات الرقمية)
create table public.products (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  price numeric(10,2) not null,
  file_storage_path text not null,
  max_downloads int default 5,
  is_published boolean default false,
  created_at timestamptz default now()
);

-- 8. programs & lessons (البرامج والوحدات التدريبية)
create table public.programs (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  outcomes text,
  price numeric(10,2) not null,
  capacity int,
  live_meeting_link text,
  is_published boolean default false,
  created_at timestamptz default now()
);

create table public.lessons (
  id uuid default uuid_generate_v4() primary key,
  program_id uuid references public.programs(id) on delete cascade not null,
  title text not null,
  sort_order int not null,
  content_url text,
  is_published boolean default false
);

-- 9. memberships & plans (خطط العضويات والاشتراكات)
create table public.membership_plans (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  billing_cycle text not null check (billing_cycle in ('monthly', 'yearly')),
  price numeric(10,2) not null,
  features jsonb default '[]'::jsonb,
  is_active boolean default true
);

create table public.memberships (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  plan_id uuid references public.membership_plans(id) not null,
  status text not null default 'pending_payment' check (status in ('active', 'pending_payment', 'past_due', 'cancelled', 'expired')),
  start_date timestamptz,
  end_date timestamptz,
  auto_renew boolean default false
);

-- 10. entitlements (استحقاق الوصول للمنتجات والبرامج المدفوعة)
create table public.entitlements (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  order_id uuid references public.orders(id) not null,
  item_type text not null check (item_type in ('product', 'program', 'membership')),
  item_id uuid not null,
  expires_at timestamptz,
  download_count int default 0,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- 11. content_pages / articles (مكتبة المقالات والمحتوى العام)
create table public.articles (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text unique not null,
  category text,
  body text not null,
  seo_title text,
  seo_description text,
  is_published boolean default false,
  created_at timestamptz default now()
);

-- 12. notifications (سجل الإشعارات التشغيلية فقط دون تفاصيل حساسة)
create table public.notifications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  event_type text not null,
  channel text not null check (channel in ('email', 'whatsapp', 'sms')),
  status text default 'sent',
  sent_at timestamptz default now()
);

-- 13. audit_logs (سجل التدقيق الإداري للعمليات الحساسة)
create table public.audit_logs (
  id uuid default uuid_generate_v4() primary key,
  actor_id uuid references public.profiles(id) not null,
  action text not null,
  target_table text not null,
  target_id uuid,
  metadata jsonb,
  created_at timestamptz default now()
);

-- 14. consents (سجل الموافقات على الشروط والخصوصية)
create table public.consents (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  policy_version text not null,
  consented_at timestamptz default now()
);

-- تفعيل سياسات Row Level Security (RLS) لمنع تسرب بيانات العملاء
alter table public.profiles enable row level security;
alter table public.orders enable row level security;
alter table public.bookings enable row level security;
alter table public.entitlements enable row level security;
alter table public.memberships enable row level security;

create policy "العميل يرى ملفه الشخصي فقط" on public.profiles
  for select using (auth.uid() = id);

create policy "العميل يرى حجوزاته فقط" on public.bookings
  for select using (auth.uid() = user_id);

create policy "العميل يرى طلباته فقط" on public.orders
  for select using (auth.uid() = user_id);

create policy "العميل يصل لمشترياته المستحقة فقط" on public.entitlements
  for select using (auth.uid() = user_id and is_active = true);
