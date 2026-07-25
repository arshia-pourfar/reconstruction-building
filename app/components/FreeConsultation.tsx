"use client";

export default function FreeConsultation() {
  return (
    <section className="w-full bg-[var(--matte-slate)]" style={{ padding: "var(--section-pad) var(--side-pad)" }}>
      <div className="max-w-[var(--container-max)] mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <div className="inline-flex items-center h-8 px-[18px] rounded-full mb-6" style={{ background: "rgba(255,255,255,0.1)" }}>
            <span className="text-xs font-semibold tracking-[1.5px] uppercase text-[var(--oak)]">Free Consultation</span>
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.15] tracking-tight text-center m-0 mb-4" style={{ color: "var(--off-white)" }}>
            Not Sure Where to Start? Talk to Us — It&apos;s Free.
          </h2>
          <p className="text-base font-normal leading-[1.65] text-center m-0 max-w-[520px]" style={{ color: "rgba(246,244,241,0.6)" }}>
            Get honest advice on your renovation, budget, or design direction.
            No pressure, no obligation.
          </p>
        </div>

        {/* Two glass cards */}
        <div className="grid gap-6 w-full mb-12 grid-cols-2">
          {/* Card A */}
          <div className="flex flex-col p-10 rounded-[20px]" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", border: "1px solid rgba(246,244,241,0.08)" }}>
            <span className="text-sm font-semibold mb-5" style={{ color: "var(--off-white)" }}>Call or Message Us</span>
            <a href="tel:+14155550192" className="text-[28px] font-semibold no-underline mb-5 transition-colors duration-200 tracking-tight tabular-nums text-[var(--off-white)] hover:text-[var(--oak)]">
              +1 (415) 555 0192
            </a>
            <div className="flex gap-2.5 mb-5">
              <a href="https://wa.me/14155550192" className="inline-flex items-center gap-2 h-10 px-4 text-[13px] font-medium whitespace-nowrap rounded-[20px] transition-all duration-200" style={{ color: "var(--off-white)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(246,244,241,0.1)" }} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <a href="https://t.me/reno3d" className="inline-flex items-center gap-2 h-10 px-4 text-[13px] font-medium whitespace-nowrap rounded-[20px] transition-all duration-200" style={{ color: "var(--off-white)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(246,244,241,0.1)" }} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span>Telegram</span>
              </a>
            </div>
            <span className="text-[13px]" style={{ color: "rgba(246,244,241,0.4)" }}>Available Mon–Sat, 9 AM – 7 PM</span>
          </div>

          {/* Card B */}
          <div className="flex flex-col p-10 rounded-[20px]" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", border: "1px solid rgba(246,244,241,0.08)" }}>
            <span className="text-sm font-semibold mb-5" style={{ color: "var(--off-white)" }}>Send Us a Message</span>
            <form className="flex flex-col gap-3 mb-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your name" className="w-full h-12 px-4 text-sm outline-none transition-colors duration-200 font-[var(--font-persian)] text-[var(--off-white)] bg-black/25 rounded-[20px] placeholder:text-[rgba(246,244,241,0.35)] focus:border-[var(--oak)] focus:bg-black/[0.35]" style={{ border: "1.5px solid rgba(246,244,241,0.1)" }} required />
              <input type="text" placeholder="Phone or email" className="w-full h-12 px-4 text-sm outline-none transition-colors duration-200 font-[var(--font-persian)] text-[var(--off-white)] bg-black/25 rounded-[20px] placeholder:text-[rgba(246,244,241,0.35)] focus:border-[var(--oak)] focus:bg-black/[0.35]" style={{ border: "1.5px solid rgba(246,244,241,0.1)" }} required />
              <textarea rows={3} placeholder="How can we help?" className="w-full h-auto py-3.5 px-4 text-sm outline-none transition-colors duration-200 font-[var(--font-persian)] text-[var(--off-white)] bg-black/25 rounded-[20px] resize-y min-h-[100px] placeholder:text-[rgba(246,244,241,0.35)] focus:border-[var(--oak)] focus:bg-black/[0.35]" style={{ border: "1.5px solid rgba(246,244,241,0.1)" }} />
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2.5 h-12 px-8 text-[15px] font-semibold rounded-full cursor-pointer transition-all duration-200 font-[var(--font-persian)] text-[var(--matte-slate)] bg-[var(--oak)] border-none hover:bg-[var(--oak-hover)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(179,140,96,0.25)] active:translate-y-0 active:shadow-none focus-visible:outline-2 focus-visible:outline-[var(--oak)] focus-visible:outline-offset-3">
                Request Free Callback
              </button>
            </form>
            <span className="text-[13px] mt-1" style={{ color: "rgba(246,244,241,0.4)" }}>
              We typically respond within a few hours.
            </span>
          </div>
        </div>

        {/* Trust strip */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <span className="text-[13px]" style={{ color: "rgba(246,244,241,0.45)" }}>500+ free consultations given</span>
          <span className="text-[13px]" style={{ color: "rgba(246,244,241,0.2)" }}>·</span>
          <span className="text-[13px]" style={{ color: "rgba(246,244,241,0.45)" }}>No-obligation advice</span>
          <span className="text-[13px]" style={{ color: "rgba(246,244,241,0.2)" }}>·</span>
          <span className="text-[13px]" style={{ color: "rgba(246,244,241,0.45)" }}>Real answers from real designers</span>
        </div>
      </div>
    </section>
  );
}
