"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";

const megaColumns = [
  {
    title: "سبک‌های طراحی و بازسازی",
    items: [
      {
        label: "طراحی و اجرای مدرن و مینیمال",
        desc: "خطوط تمیز، نورپردازی توکار و جریان فضایی باز",
        href: "/services",
      },
      {
        label: "بازسازی فضاهای مسکونی و لوکس",
        desc: "قاب‌بندی ظریف، پتینه و متریال‌های خاص",
        href: "/services",
      },
      {
        label: "طراحی فضاهای تجاری و اداری",
        desc: "طراحی حرفه‌ای با تمرکز بر بهره‌وری",
        href: "/services",
      },
    ],
  },
  {
    title: "فضاهای تخصصی",
    items: [
      {
        label: "آشپزخانه مدرن و جزیره اسلب",
        desc: "کابینت های‌گلاس، جزیره سنگی و تجهیزات توکار",
        href: "/services",
      },
      {
        label: "سرویس مستر و اسپای خانگی",
        desc: "سنگ طبیعی، دوش بارانی و گرمایش کف",
        href: "/services",
      },
      {
        label: "هوشمندسازی ساختمان (BMS)",
        desc: "کنترل نور، دما و امنیت هوشمند",
        href: "/services",
      },
    ],
  },
  {
    title: "متریال‌ها و جزئیات فنی",
    items: [
      {
        label: "پوشش یکپارچه میکروسمنت",
        desc: "بتن اکسپوز مدرن با تنوع رنگ بالا",
        href: "/services",
      },
      {
        label: "نورپردازی خطی و توکار (Linear LED)",
        desc: "سیستم‌های نورپردازی مخفی و خطی",
        href: "/services",
      },
      {
        label: "سیستم‌های گرمایش و سرمایش مخفی",
        desc: "فن‌کویل توکار و گرمایش کفی",
        href: "/services",
      },
    ],
  },
];

const navLinks = [
  { label: "خانه", href: "/" },
  { label: "نمونه‌کارها", href: "/projects" },
  { label: "تخمین هزینه", href: "/calculator" },
  { label: "مجله / بلاگ", href: "/blog" },
  { label: "قوانین و ضمانت‌ها", href: "/rules" },
];

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMega = useCallback(() => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  }, []);

  const closeMega = useCallback(() => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 150);
  }, []);

  useEffect(() => {
    return () => { if (megaTimeout.current) clearTimeout(megaTimeout.current); };
  }, []);

  useEffect(() => {
    if (!megaOpen && !contactOpen) return;
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") { setMegaOpen(false); setContactOpen(false); } };
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [megaOpen, contactOpen]);

  return (
    <>
      <header
        dir="rtl"
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-[100] flex items-center px-5 py-2.5 rounded-2xl transition-all duration-300 w-[calc(100%-48px)] max-w-[1200px] ${
          scrolled ? "bg-[rgba(27,29,31,0.75)] shadow-[0_8px_32px_rgba(0,0,0,0.2)]" : "bg-[rgba(27,29,31,0.35)]"
        }`}
        style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        <Link href="/" className="shrink-0 no-underline text-white/90 text-[15px] font-semibold tracking-tight transition-colors hover:text-white ml-1" style={{ fontFamily: "var(--font-persian)" }}>
          بازسازی نو
        </Link>

        <nav className="flex-1 flex items-center justify-center gap-0.5">
          <Link href="/" className="text-[13px] font-medium text-white/70 no-underline px-3 py-1.5 rounded-lg transition-all duration-200 hover:text-white hover:bg-white/[0.06]" style={{ fontFamily: "var(--font-persian)" }}>
            خانه
          </Link>

          <div className="relative" ref={megaRef} onMouseEnter={openMega} onMouseLeave={closeMega}>
            <button
              onClick={() => megaOpen ? setMegaOpen(false) : openMega()}
              className={`text-[13px] font-medium text-white/70 no-underline px-3 py-1.5 rounded-lg transition-all duration-200 border-0 bg-transparent cursor-pointer flex items-center gap-1 hover:text-white hover:bg-white/[0.06] ${megaOpen ? "text-white bg-white/[0.06]" : ""}`}
              style={{ fontFamily: "var(--font-persian)" }}
            >
              خدمات
              <svg className={`w-2.5 h-2.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 4.5L6 7.5L9 4.5" />
              </svg>
            </button>

            {megaOpen && (
              <div
                className="absolute top-[calc(100%+10px)] right-0 w-[860px] p-5 rounded-2xl z-[200]"
                style={{
                  background: "rgba(27,29,31,0.88)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                  animation: "mega-in 0.2s cubic-bezier(0.22,1,0.36,1)",
                }}
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
              >
                <div className="grid grid-cols-3 gap-5">
                  {megaColumns.map((col) => (
                    <div key={col.title} className="flex flex-col">
                      <span className="text-[10px] font-semibold tracking-[2px] uppercase text-white/30 mb-3 px-1" style={{ fontFamily: "var(--font-persian)" }}>
                        {col.title}
                      </span>
                      <div className="flex flex-col gap-0.5">
                        {col.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex flex-col gap-0 p-2.5 rounded-xl no-underline transition-all duration-150 hover:bg-white/[0.05] group"
                            onClick={() => setMegaOpen(false)}
                          >
                            <span className="text-[12.5px] font-medium text-white/85 leading-snug transition-colors group-hover:text-white" style={{ fontFamily: "var(--font-persian)" }}>
                              {item.label}
                            </span>
                            <span className="text-[11px] text-white/35 leading-relaxed" style={{ fontFamily: "var(--font-persian)" }}>
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.filter((l) => l.href !== "/").map((link) => (
            <Link key={link.href} href={link.href} className="text-[13px] font-medium text-white/70 no-underline px-3 py-1.5 rounded-lg transition-all duration-200 hover:text-white hover:bg-white/[0.06]" style={{ fontFamily: "var(--font-persian)" }}>
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => setContactOpen(true)}
            className="text-[13px] font-medium text-white/70 px-3 py-1.5 rounded-lg transition-all duration-200 border-0 bg-transparent cursor-pointer hover:text-white hover:bg-white/[0.06]"
            style={{ fontFamily: "var(--font-persian)" }}
          >
            تماس با ما
          </button>
        </nav>

        <Link href="/contact" className="shrink-0 text-[12px] font-semibold text-white no-underline px-4 py-2 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px" style={{ fontFamily: "var(--font-persian)", background: "var(--oak)" }}>
          مشاوره رایگان
        </Link>

        <button className="mr-3 flex items-center justify-center w-8 h-8 rounded-lg text-white/70 bg-white/[0.06] border-none cursor-pointer lg:hidden hover:text-white hover:bg-white/[0.1] transition-all" onClick={() => setMobileOpen(!mobileOpen)} aria-label="منو">
          {mobileOpen ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" /></svg>
          )}
        </button>
      </header>

      {mobileOpen && (
        <div
          dir="rtl"
          className="fixed z-[99] left-1/2 -translate-x-1/2 flex flex-col gap-1 p-3 rounded-2xl lg:hidden"
          style={{
            top: "84px", width: "calc(100% - 48px)", maxWidth: "400px",
            background: "rgba(27,29,31,0.9)", backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)",
            border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
          }}
        >
          <Link href="/" className="text-[14px] font-medium text-white/80 no-underline px-4 py-2.5 rounded-xl hover:bg-white/[0.06]" style={{ fontFamily: "var(--font-persian)" }} onClick={() => setMobileOpen(false)}>خانه</Link>
          <Link href="/services" className="text-[14px] font-medium text-white/80 no-underline px-4 py-2.5 rounded-xl hover:bg-white/[0.06]" style={{ fontFamily: "var(--font-persian)" }} onClick={() => setMobileOpen(false)}>خدمات</Link>
          <Link href="/projects" className="text-[14px] font-medium text-white/80 no-underline px-4 py-2.5 rounded-xl hover:bg-white/[0.06]" style={{ fontFamily: "var(--font-persian)" }} onClick={() => setMobileOpen(false)}>نمونه‌کارها</Link>
          <Link href="/calculator" className="text-[14px] font-medium text-white/80 no-underline px-4 py-2.5 rounded-xl hover:bg-white/[0.06]" style={{ fontFamily: "var(--font-persian)" }} onClick={() => setMobileOpen(false)}>تخمین هزینه</Link>
          <Link href="/blog" className="text-[14px] font-medium text-white/80 no-underline px-4 py-2.5 rounded-xl hover:bg-white/[0.06]" style={{ fontFamily: "var(--font-persian)" }} onClick={() => setMobileOpen(false)}>مجله / بلاگ</Link>
          <Link href="/rules" className="text-[14px] font-medium text-white/80 no-underline px-4 py-2.5 rounded-xl hover:bg-white/[0.06]" style={{ fontFamily: "var(--font-persian)" }} onClick={() => setMobileOpen(false)}>قوانین و ضمانت‌ها</Link>
          <button className="text-[14px] font-medium text-white/80 px-4 py-2.5 rounded-xl hover:bg-white/[0.06] text-right border-0 bg-transparent cursor-pointer" style={{ fontFamily: "var(--font-persian)" }} onClick={() => { setMobileOpen(false); setContactOpen(true); }}>تماس با ما</button>
          <div className="h-px my-1 bg-white/[0.06]" />
          <Link href="/contact" className="text-center text-[13px] font-semibold text-white no-underline px-5 py-2.5 rounded-xl" style={{ fontFamily: "var(--font-persian)", background: "var(--oak)" }} onClick={() => setMobileOpen(false)}>درخواست مشاوره رایگان</Link>
        </div>
      )}

      {(megaOpen || contactOpen) && (
        <div className="fixed inset-0 z-[90]" style={{ background: "rgba(0,0,0,0.25)" }} onClick={() => { setMegaOpen(false); setContactOpen(false); }} />
      )}

      {contactOpen && (
        <div
          dir="rtl"
          className="fixed z-[200] left-1/2 -translate-x-1/2 w-[400px] p-7 rounded-2xl"
          style={{
            top: "50%", transform: "translate(-50%, -50%)",
            background: "rgba(27,29,31,0.92)", backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)",
            border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
            animation: "modal-in 0.25s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-base font-bold m-0 text-white/90" style={{ fontFamily: "var(--font-persian)" }}>پیام سریع</h3>
            <button
              className="flex items-center justify-center w-7 h-7 rounded-lg text-white/50 bg-white/[0.05] border-none cursor-pointer transition-colors hover:bg-white/[0.1] hover:text-white"
              onClick={() => setContactOpen(false)}
              aria-label="بستن"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 4L12 12" /><path d="M12 4L4 12" /></svg>
            </button>
          </div>
          <p className="text-[12.5px] text-white/35 m-0 mb-5 leading-relaxed" style={{ fontFamily: "var(--font-persian)" }}>
            فرم را پر کنید، ظرف ۲۴ ساعت با شما تماس می‌گیریم.
          </p>
          <form className="flex flex-col gap-3.5" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="نام و نام خانوادگی" className="w-full h-10 px-4 text-[13px] text-white/90 bg-white/[0.04] rounded-xl outline-none transition-all duration-200 placeholder:text-white/20 focus:bg-white/[0.07] focus:ring-1 focus:ring-white/10" style={{ fontFamily: "var(--font-persian)", border: "1px solid rgba(255,255,255,0.06)" }} required />
            <input type="tel" placeholder="شماره تماس" dir="ltr" className="w-full h-10 px-4 text-[13px] text-white/90 bg-white/[0.04] rounded-xl outline-none transition-all duration-200 placeholder:text-white/20 focus:bg-white/[0.07] focus:ring-1 focus:ring-white/10" style={{ fontFamily: "var(--font-persian)", border: "1px solid rgba(255,255,255,0.06)" }} required />
            <textarea rows={3} placeholder="توضیح مختصر درباره پروژه..." className="w-full px-4 py-2.5 text-[13px] text-white/90 bg-white/[0.04] rounded-xl outline-none transition-all duration-200 resize-y min-h-[70px] placeholder:text-white/20 focus:bg-white/[0.07] focus:ring-1 focus:ring-white/10" style={{ fontFamily: "var(--font-persian)", border: "1px solid rgba(255,255,255,0.06)" }} />
            <button type="submit" className="w-full h-10 text-[13px] font-semibold text-white rounded-xl cursor-pointer transition-all duration-200 border-none hover:bg-[var(--oak-hover)] hover:-translate-y-px active:translate-y-0" style={{ fontFamily: "var(--font-persian)", background: "var(--oak)" }}>ارسال پیام</button>
          </form>
          <p className="text-[11px] text-white/20 m-0 mt-3.5 text-center" style={{ fontFamily: "var(--font-persian)" }}>بدون تعهد · پاسخ در ۲۴ ساعت</p>
        </div>
      )}

      <style>{`
        @keyframes mega-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes modal-in {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.96); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </>
  );
}
