import Link from "next/link";
import Footer from "../components/Footer";

const projects = [
  {
    id: 1,
    title: "آپارتمان مدرن ولنجک",
    category: "بازسازی کامل",
    area: "۱۸۰ متر مربع",
    duration: "۱۲ هفته",
    gradient: "linear-gradient(135deg, #2A2D33 0%, #1B1D1F 40%, #B8956A 100%)",
  },
  {
    id: 2,
    title: "ویلای کلاسیک شمال",
    category: "طراحی داخلی",
    area: "۳۲۰ متر مربع",
    duration: "۱۶ هفته",
    gradient: "linear-gradient(135deg, #5C4F3D 0%, #4A3F32 40%, #2A2D33 100%)",
  },
  {
    id: 3,
    title: "آشپزخانه مدرن تهرانپارس",
    category: "بازسازی آشپزخانه",
    area: "۳۵ متر مربع",
    duration: "۴ هفته",
    gradient: "linear-gradient(135deg, #D4C4A8 0%, #C4A77D 40%, #B8956A 100%)",
  },
  {
    id: 4,
    title: "دفتر کار هوشمند",
    category: "هوشمندسازی",
    area: "۲۰۰ متر مربع",
    duration: "۸ هفته",
    gradient: "linear-gradient(135deg, #3B4049 0%, #2563EB 60%, #1B1D1F 100%)",
  },
  {
    id: 5,
    title: "سوئیت میکروآپارتمان",
    category: "بازسازی کامل",
    area: "۴۵ متر مربع",
    duration: "۶ هفته",
    gradient: "linear-gradient(135deg, #E8E4DF 0%, #BCB8B3 40%, #8A8A82 100%)",
  },
  {
    id: 6,
    title: "کافه مینیمال",
    category: "طراحی داخلی",
    area: "۱۲۰ متر مربع",
    duration: "۱۰ هفته",
    gradient: "linear-gradient(135deg, #4A3F32 0%, #B8956A 50%, #D4C4A8 100%)",
  },
];

const categories = ["همه", "بازسازی کامل", "طراحی داخلی", "بازسازی آشپزخانه", "هوشمندسازی"];

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      {/* Header */}
      <header className="projects-header">
        <div className="eyebrow">
          <span className="eyebrow-text">نمونه کارها</span>
        </div>
        <h1 className="projects-headline">پروژه‌های اجرا شده</h1>
        <p className="projects-sub">
          نگاهی به آخرین پروژه‌های بازسازی و طراحی داخلی تیم ما بیندازید.
        </p>
      </header>

      {/* Category Filter */}
      <section className="projects-filter-section">
        <div className="projects-filter">
          {categories.map((cat) => (
            <span key={cat} className="projects-filter-chip">
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="projects-card">
              <div className="projects-card-img" style={{ background: project.gradient }} />
              <div className="projects-card-body">
                <span className="projects-card-category">{project.category}</span>
                <h2 className="projects-card-title">{project.title}</h2>
                <div className="projects-card-meta">
                  <span className="projects-card-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18" />
                    </svg>
                    {project.area}
                  </span>
                  <span className="projects-card-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {project.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="projects-cta-section">
        <div className="projects-cta-inner">
          <h2 className="projects-cta-title">پروژه بعدی شما اینجاست</h2>
          <p className="projects-cta-desc">
            برای دیدن نمونه کارهای بیشتر و دریافت مشاوره رایگان با ما تماس بگیرید.
          </p>
          <Link href="/contact" className="btn-pill">
            شروع پروژه
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
