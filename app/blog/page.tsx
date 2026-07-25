"use client";

import Link from "next/link";
import Footer from "../components/Footer";

const posts = [
  {
    id: 1,
    title: "ترندهای بازسازی خانه در سال ۲۰۲۶",
    excerpt: "آشنایی با جدیدترین ترندهای طراحی داخلی و بازسازی خانه شامل میکروسمنت، نورپردازی توکار و هوشمندسازی فضا.",
    category: "ترندها",
    date: "۲۵ تیر ۱۴۰۵",
    readTime: "۵ دقیقه",
    gradient: "linear-gradient(135deg, #2A2D33 0%, #2563EB 60%, #1B1D1F 100%)",
  },
  {
    id: 2,
    title: "راهنمای کامل بازسازی آشپزخانه",
    excerpt: "نکات کلیدی برای بازسازی آشپزخانه شامل انتخاب کابینت، طراحی جزیره و تجهیزات توکار.",
    category: "راهنما",
    date: "۱۸ تیر ۱۴۰۵",
    readTime: "۸ دقیقه",
    gradient: "linear-gradient(135deg, #D4C4A8 0%, #C4A77D 40%, #B8956A 100%)",
  },
  {
    id: 3,
    title: "هزینه بازسازی خانه چقدر است؟",
    excerpt: "بررسی عوامل مؤثر بر هزینه بازسازی و راهکارهایی برای مدیریت بودجه پروژه.",
    category: "هزینه",
    date: "۱۰ تیر ۱۴۰۵",
    readTime: "۶ دقیقه",
    gradient: "linear-gradient(135deg, #5C4F3D 0%, #4A3F32 40%, #2A2D33 100%)",
  },
  {
    id: 4,
    title: "هوشمندسازی خانه: راهنمای جامع",
    excerpt: "آشنایی با سیستم‌های هوشمند خانگی شامل کنترل نور، دما، امنیت و مدیریت مصرف انرژی.",
    category: "راهنما",
    date: "۳ تیر ۱۴۰۵",
    readTime: "۱۰ دقیقه",
    gradient: "linear-gradient(135deg, #3B4049 0%, #2A2D33 40%, #B8956A 100%)",
  },
  {
    id: 5,
    title: "۵ اشتباه رایج در بازسازی خانه",
    excerpt: "اشتباهاتی که اکثر افراد در پروژه‌های بازسازی مرتکب می‌شوند و راه جلوگیری از آن‌ها.",
    category: "نکات",
    date: "۲۶ خرداد ۱۴۰۵",
    readTime: "۴ دقیقه",
    gradient: "linear-gradient(135deg, #E8E4DF 0%, #BCB8B3 40%, #8A8A82 100%)",
  },
  {
    id: 6,
    title: "انتخاب متریال مناسب برای بازسازی",
    excerpt: "مقایسه متریال‌های مختلف شامل میکروسمنت، سنگ طبیعی، چوب و بتن اکسپوز.",
    category: "متریال",
    date: "۱۹ خرداد ۱۴۰۵",
    readTime: "۷ دقیقه",
    gradient: "linear-gradient(135deg, #4A3F32 0%, #B8956A 50%, #D4C4A8 100%)",
  },
];

const categories = ["همه", "ترندها", "راهنما", "هزینه", "نکات", "متریال"];

export default function BlogPage() {
  return (
    <div className="blog-page">
      {/* Header */}
      <header className="blog-header">
        <div className="eyebrow">
          <span className="eyebrow-text">بلاگ و راهنما</span>
        </div>
        <h1 className="blog-headline">دانشنامه بازسازی خانه</h1>
        <p className="blog-sub">
          مقالات، راهنماها و نکات تخصصی برای کمک به شما در تصمیم‌گیری بهتر برای پروژه بازسازی.
        </p>
      </header>

      {/* Category Filter */}
      <section className="blog-filter-section">
        <div className="blog-filter">
          {categories.map((cat) => (
            <span key={cat} className="blog-filter-chip">
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="blog-featured-section">
        <div className="blog-featured">
          <div className="blog-featured-img" style={{ background: posts[0].gradient }} />
          <div className="blog-featured-body">
            <span className="blog-featured-category">{posts[0].category}</span>
            <h2 className="blog-featured-title">{posts[0].title}</h2>
            <p className="blog-featured-excerpt">{posts[0].excerpt}</p>
            <div className="blog-featured-meta">
              <span>{posts[0].date}</span>
              <span>·</span>
              <span>{posts[0].readTime} مطالعه</span>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="blog-grid-section">
        <div className="blog-grid">
          {posts.slice(1).map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-img" style={{ background: post.gradient }} />
              <div className="blog-card-body">
                <span className="blog-card-category">{post.category}</span>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-meta">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="blog-newsletter-section">
        <div className="blog-newsletter">
          <div className="blog-newsletter-content">
            <h2 className="blog-newsletter-title">عضو خبرنامه شوید</h2>
            <p className="blog-newsletter-desc">
              جدیدترین مقالات و نکات بازسازی را هر هفته در ایمیل خود دریافت کنید.
            </p>
          </div>
          <form className="blog-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="blog-newsletter-input"
              required
            />
            <button type="submit" className="blog-newsletter-btn">
              عضویت
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
