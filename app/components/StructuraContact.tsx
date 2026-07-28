export default function Contact() {
  return (
    <section className="py-24 bg-surface text-on-surface" id="contact">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Contact Details */}
          <div className="reveal">
            <span className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] text-secondary uppercase block mb-4">
              Connect
            </span>
            <h2 className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold mb-8">
              Start Your Build
            </h2>
            <p className="font-[family-name:var(--font-body-lg)] text-[18px] leading-[28px] text-on-surface-variant mb-12 max-w-md">
              Ready to redefine your space? Our engineering consultants are
              available for complex structural feasibility reviews.
            </p>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <svg
                  className="text-secondary mt-1 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <h4 className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase mb-2">
                    Central Office
                  </h4>
                  <p className="font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] text-on-surface-variant">
                    Industrial District, Suite 402
                    <br />
                    Architectural Plaza, London SE1
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <svg
                  className="text-secondary mt-1 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <h4 className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase mb-2">
                    Direct Line
                  </h4>
                  <p className="font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] text-on-surface-variant">
                    +44 (0) 20 7946 0123
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <svg
                  className="text-secondary mt-1 shrink-0"
                  width="24"
                  height="24"
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
                <div>
                  <h4 className="font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase mb-2">
                    Project Inquiries
                  </h4>
                  <p className="font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] text-on-surface-variant">
                    projects@structura.arch
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-primary p-10 md:p-16 text-on-primary reveal">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium uppercase opacity-60">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-on-primary/20 p-2 focus:border-secondary outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium uppercase opacity-60">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-on-primary/20 p-2 focus:border-secondary outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium uppercase opacity-60">
                  Project Type
                </label>
                <select className="w-full bg-transparent border-b border-on-primary/20 p-2 focus:border-secondary outline-none transition-colors appearance-none cursor-pointer">
                  <option className="bg-primary text-on-primary">
                    Kitchen Remodeling
                  </option>
                  <option className="bg-primary text-on-primary">
                    Luxury Bathroom
                  </option>
                  <option className="bg-primary text-on-primary">
                    Structural Extension
                  </option>
                  <option className="bg-primary text-on-primary">
                    Commercial Refit
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium uppercase opacity-60">
                  Message
                </label>
                <textarea
                  placeholder="Describe your structural vision..."
                  rows={4}
                  className="w-full bg-transparent border-b border-on-primary/20 p-2 focus:border-secondary outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-on-primary font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] py-5 uppercase hover:brightness-110 transition-all mt-4"
              >
                Send Proposal
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
