const SERVICES = [
  "Kitchen Remodeling",
  "Bathroom Suites",
  "Structural Engineering",
];

const COMPANY = ["Project Gallery", "Client Portal", "Privacy Policy"];

export default function Footer() {
  return (
    <footer className="bg-primary border-t-2 border-secondary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-16 py-16 max-w-[1440px] mx-auto">
        {/* Brand */}
        <div className="col-span-1">
          <div className="font-[family-name:var(--font-display-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold text-on-primary mb-6">
            STRUCTURA
          </div>
          <p className="font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] text-on-primary-container/70 mb-8">
            Engineered for elegance. Meticulous renovation services for the
            modern architectural landscape.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 border border-on-primary-container/30 flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <svg
                className="text-on-primary"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-on-primary-container/30 flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <svg
                className="text-on-primary"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] text-on-primary mb-6 uppercase">
            Services
          </h4>
          <ul className="space-y-4">
            {SERVICES.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium text-on-primary-container/70 hover:text-secondary-fixed transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] text-on-primary mb-6 uppercase">
            Company
          </h4>
          <ul className="space-y-4">
            {COMPANY.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium text-on-primary-container/70 hover:text-secondary-fixed transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] text-on-primary mb-6 uppercase">
            Newsletter
          </h4>
          <p className="font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] text-on-primary-container/70 mb-4">
            Stay updated with our latest structural projects and insights.
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="blueprint@email.com"
              className="bg-transparent border border-on-primary-container/30 p-3 font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium text-on-primary focus:ring-1 focus:ring-secondary focus:border-secondary outline-none"
            />
            <button className="bg-secondary text-on-primary font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] py-3 uppercase hover:brightness-110 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-4 md:px-16 py-8 max-w-[1440px] mx-auto border-t border-on-primary-container/10">
        <p className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium text-on-primary-container/50 text-center">
          &copy; 2024 STRUCTURA RENOVATIONS. ENGINEERED FOR ELEGANCE.
        </p>
      </div>
    </footer>
  );
}
