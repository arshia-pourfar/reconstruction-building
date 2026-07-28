export default function Gallery() {
  return (
    <section className="py-24 bg-surface" id="portfolio">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        <h2 className="font-[family-name:var(--font-headline-lg)] text-[24px] md:text-[40px] leading-[32px] md:leading-[48px] tracking-[-0.01em] font-bold text-primary mb-12 reveal">
          Project Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Feature */}
          <div className="md:col-span-8 h-[500px] overflow-hidden reveal">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5vRqE4wd9D1uj-KTODu0ZvbzvthUfIQfCrTvrxx7VGIHmOIsp0UsZtEug8Qw71bGe-6gG9x9AXrq1v4HieJtXywcc0xGQFAYA28D5S-81eTEu0fA23nc3K8krAMEvVqGYTl7LKKYHscT_NT98OKiuZTF57ze11xZ2BsyIdlx2524XxMBICVJjKjrHCIAeGQwouv071cLnb-ugvJD2U2RmW4j8EkeK-JdvnWfRBBwY1epO2t0_0O9wI4kjg2gOWJMOJtzfvyUF9up2"
              alt="Modern open-plan living room with high-gloss concrete floors"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* Side Info Card */}
          <div className="md:col-span-4 flex flex-col justify-between p-8 border-2 border-primary reveal">
            <div>
              <span className="font-[family-name:var(--font-label-sm)] text-[12px] leading-4 font-medium text-secondary uppercase">
                Residential Icon
              </span>
              <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] leading-[32px] font-bold mt-4">
                The Steel Residence
              </h3>
              <p className="font-[family-name:var(--font-body-md)] text-[16px] leading-[24px] text-on-surface-variant mt-6">
                A full-scale industrial transformation of a 1920s warehouse into
                a luxury private residence.
              </p>
            </div>
            <button className="w-full py-4 border border-primary font-[family-name:var(--font-label-md)] text-[14px] leading-5 tracking-[0.05em] uppercase hover:bg-primary hover:text-on-primary transition-all mt-8">
              View Project
            </button>
          </div>

          {/* Small Image */}
          <div className="md:col-span-4 h-[400px] overflow-hidden reveal">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTSxjaQjIJc_Z5WiVXR_ighl7pN22ehzxLm5SiHv_0qZtcTEutdpTqDR0rcnFlTxG-m6K5ahdtgddUKNiXHzrOMuQGx6mn3IMWaqfGxWrU9IS3tVA3E_kybQLgft1YKB013iMXArd88QCvW5qlxLar1yQvLYUsEU00pQVwhlqptkSRBOpLW2aYj46TY5IxEJVxTYnK7UIoOIo7jeBOANESHZT07RNK5ehXiBzO2Or1-1JK9BoMHO4eemas1k0yU5GwGags0CpWRkVo"
              alt="Modern kitchen island with dark granite"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* Wide Image */}
          <div className="md:col-span-8 h-[400px] overflow-hidden reveal">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqtujpaLQnf4e9rOGnOqkzMbiIp8Z-oMROT5DvjcNkad-fDmXUbRwFIS4LgAFIljq5wlObn4fIr8ib0nMWir0-iCPg6URpQqgxsMiwIgQNuv6lDJKn61-LY82v0V2mKP0DjsWqTM0AgglSRA7xj36tw3ZeLr4MrNLJKYWBHdLMpL-2MNE32ytHlBJ9tXus3GDemPT4VJuAXwlM6NPOIb8m92tUD5_eaB1S_CQ3EEeO0EByZsR2aSII28FsmRii7o6bXs4zfDaMzWOq"
              alt="Master bedroom suite with glass-enclosed walk-in closet"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
