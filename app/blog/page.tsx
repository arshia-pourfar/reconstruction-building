"use client";

import StructuraFooter from "../components/StructuraFooter";

const posts = [
  {
    id: 1,
    title: "ترندهای بازسازی خانه در سال ۲۰۲۶",
    excerpt:
      "آشنایی با جدیدترین ترندهای طراحی داخلی و بازسازی خانه شامل میکروسمنت، نورپردازی توکار و هوشمندسازی فضا.",
    category: "ترندها",
    date: "۲۵ تیر ۱۴۰۵",
    readTime: "۵ دقیقه",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    id: 2,
    title: "راهنمای کامل بازسازی آشپزخانه",
    excerpt:
      "نکات کلیدی برای بازسازی آشپزخانه شامل انتخاب کابینت، طراحی جزیره و تجهیزات توکار.",
    category: "راهنما",
    date: "۱۸ تیر ۱۴۰۵",
    readTime: "۸ دقیقه",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    id: 3,
    title: "هزینه بازسازی خانه چقدر است؟",
    excerpt:
      "بررسی عوامل مؤثر بر هزینه بازسازی و راهکارهایی برای مدیریت بودجه پروژه.",
    category: "هزینه",
    date: "۱۰ تیر ۱۴۰۵",
    readTime: "۶ دقیقه",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    id: 4,
    title: "هوشمندسازی خانه: راهنمای جامع",
    excerpt:
      "آشنایی با سیستم‌های هوشمند خانگی شامل کنترل نور، دما، امنیت و مدیریت مصرف انرژی.",
    category: "راهنما",
    date: "۳ تیر ۱۴۰۵",
    readTime: "۱۰ دقیقه",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
  {
    id: 5,
    title: "۵ اشتباه رایج در بازسازی خانه",
    excerpt:
      "اشتباهاتی که اکثر افراد در پروژه‌های بازسازی مرتکب می‌شوند و راه جلوگیری از آن‌ها.",
    category: "نکات",
    date: "۲۶ خرداد ۱۴۰۵",
    readTime: "۴ دقیقه",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
  },
  {
    id: 6,
    title: "انتخاب متریال مناسب برای بازسازی",
    excerpt:
      "مقایسه متریال‌های مختلف شامل میکروسمنت، سنگ طبیعی، چوب و بتن اکسپوز.",
    category: "متریال",
    date: "۱۹ خرداد ۱۴۰۵",
    readTime: "۷ دقیقه",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80",
  },
];

const categories = ["همه", "ترندها", "راهنما", "هزینه", "نکات", "متریال"];

export default function BlogPage() {
  return (
    <main className="pt-20">
      {/* ═══ HERO ═══════════════════════════════════════ */}
      <section
        className="relative min-h-[400px] flex flex-col justify-center border-b border-outline-variant overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto w-full py-24 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-secondary-container" />
              <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-secondary-container">
                بلاگ و راهنما
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-vazirmatn)] text-[32px] md:text-[64px] leading-[48px] md:leading-[80px] font-extrabold text-primary mb-8">
              دانشنامه
              <br />
              بازسازی خانه
            </h1>

            <p className="font-[family-name:var(--font-vazirmatn)] text-[18px] leading-[28px] text-on-surface-variant max-w-xl leading-relaxed">
              مقالات، راهنماها و نکات تخصصی برای کمک به شما در تصمیم‌گیری بهتر
              برای پروژه بازسازی.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-px bg-primary hidden md:block" />
      </section>

      {/* ═══ CATEGORY FILTER ═══════════════════════════ */}
      <section className="py-8 border-b border-outline-variant bg-surface-container-lowest">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 px-5 py-2 border border-outline-variant cursor-pointer hover:bg-primary hover:text-on-primary transition-all"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED POST ═════════════════════════════ */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-outline-variant overflow-hidden group rounded-2xl">
            <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-3 py-1 font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4">
                {posts[0].category}
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center bg-surface-bright">
              <h2 className="font-[family-name:var(--font-vazirmatn)] text-[24px] md:text-[32px] leading-[36px] md:leading-[48px] font-extrabold mb-4">
                {posts[0].title}
              </h2>
              <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-surface-variant mb-8 leading-relaxed">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-[14px] leading-5 text-outline">
                <span className="font-[family-name:var(--font-vazirmatn)]">
                  {posts[0].date}
                </span>
                <span className="w-1 h-1 rounded-full bg-outline" />
                <span className="font-[family-name:var(--font-vazirmatn)]">
                  {posts[0].readTime} مطالعه
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ POSTS GRID ════════════════════════════════ */}
      <section className="py-24 bg-surface">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="group border border-outline-variant hover:border-primary transition-all cursor-pointer rounded-2xl"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-on-primary px-3 py-1 font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-vazirmatn)] text-[18px] leading-[28px] font-extrabold mb-3 group-hover:text-secondary-container transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-[22px] text-on-surface-variant mb-6 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-[12px] leading-4 text-outline border-t border-outline-variant pt-4">
                    <span className="font-[family-name:var(--font-vazirmatn)]">
                      {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-outline" />
                    <span className="font-[family-name:var(--font-vazirmatn)]">
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER CTA ════════════════════════════ */}
      <section className="bg-primary text-on-primary py-24">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-16 bg-secondary-container" />
              <span className="font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 text-secondary-container">
                خبرنامه
              </span>
              <div className="h-px w-16 bg-secondary-container" />
            </div>

            <h2 className="font-[family-name:var(--font-vazirmatn)] text-[32px] md:text-[40px] leading-[48px] md:leading-[56px] font-extrabold mb-6">
              عضو خبرنامه شوید
            </h2>
            <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-primary-container mb-12 leading-relaxed">
              جدیدترین مقالات و نکات بازسازی را هر هفته در ایمیل خود دریافت
              کنید.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="flex-1 bg-transparent border border-on-primary text-on-primary placeholder:text-on-primary-container px-6 py-4 rounded-lg font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 focus:outline-none focus:border-secondary-container transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-tertiary text-on-tertiary rounded-lg px-8 py-4 font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 hover:shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:brightness-110 transition-all active:scale-95"
              >
                عضویت
              </button>
            </form>
          </div>
        </div>
      </section>

      <StructuraFooter />
    </main>
  );
}
