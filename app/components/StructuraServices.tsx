"use client";

const SERVICES = [
  {
    number: "01",
    subtitle: "Culinary Hubs",
    title: "Kitchen Remodeling",
    description:
      "High-performance culinary environments featuring custom joinery and professional-grade infrastructure.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCkYdEODPQBOlsAqdipwCVicVmfBN6a22CyU0is1EZhdXtLBe_z9_PEb6R9pifLAzfvPWg53ewF7MRleGzPDGWZneP4ijAQ34F190Bp-wmq43rB7D5V-uzCDmzGqyXSB9kFVSy4rA7AwBsejVphRjhRbAvxPPE1R_xs2mF76OVmCRYKUDULVFcGSxeVNZ4_BAc3H2nDUjD_UD6Mu-VsqQRzSFuArTINAfcbKxQgvb2feP_FReFeNRaQy3yG69ql1341_4Ghj2tZ8c99",
  },
  {
    number: "02",
    subtitle: "Wellness Chambers",
    title: "Luxury Bathrooms",
    description:
      "Bespoke sanctuaries utilizing rare materials, integrated lighting systems, and structural waterproofing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCM3_M5xGoic38PTBPp4HCwNYidjK8fGYdFrH9UgJ6Uft64ZdrSlCd5GVXXdZuqh7J_KxZ7SD20hNAxZwa4T6ihsA7Mu0qR1drXP-GPRzgJuY2NpZIM5U3_MiNNWPQJ44_i2Jp4QzHRvznXduzudeCNcQF85Mz_2zNZ5SYRK4XC0bxOqpHsoooBshzsQVFW7Ep71eaDKJKHXwHk1bIUbYiEQNUALs8uU5_xQYMePnau8dd9s1Q8qmKnEzqQ8zbFRnOQAj2kM2ZZF8h3",
  },
  {
    number: "03",
    subtitle: "Spatial Expansion",
    title: "Structural Extensions",
    description:
      "Seamless integration of new volumes, specializing in complex steelwork and architectural glazing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVgBjt8FadLfWFR2EnflIoGFVte3OfryPpqarHOqKfR-JkrAj3-sfxLrF9r45ETKzRM8UHcvQP9M9wJy2Dwx3rcWdGdgrHfYbPg1HZSyZQ7p3xX1_SHKvsymrVw3giVn6BD5AF0tAzKOqsmN09zGeg5w7f2ah5rfJO7_GGhtBHlH90MJFid_Sff1bLG_IuAh_yVoyZPF5ZyBuYeRQpETBdcR6GqRTdyU6WP8MjpQrEAXGeG2WS98H57ZrApQdIGAaCOGfBKW0L3ObY",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-surface-container-low" id="services">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold text-primary mb-4">
              Core Disciplines
            </h2>
            <p className="font-[family-name:var(--font-body-lg)] text-[18px] leading-[28px] text-on-surface-variant">
              We merge technical mastery with architectural vision to deliver
              spaces that are structurally sound and aesthetically unparalleled.
            </p>
          </div>
          <div className="hidden md:block font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] text-secondary mt-4 uppercase">
            Service Directory
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.number}
              className="group bg-surface-container-lowest border border-outline-variant hover:border-primary transition-all duration-500 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium text-secondary uppercase mb-2 block">
                  {service.number} / {service.subtitle}
                </span>
                <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] leading-[32px] font-bold mb-4">
                  {service.title}
                </h3>
                <p className="font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] text-on-surface-variant mb-6">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] text-primary group-hover:text-secondary transition-colors"
                >
                  SPECIFICATIONS
                  <svg
                    className="text-sm"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
