export default function StructuraGallery() {
  return (
    <section className="py-24 bg-surface" id="portfolio">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        <h2 className="font-[family-name:var(--font-vazirmatn)] text-[24px] md:text-[40px] leading-[36px] md:leading-[56px] font-extrabold text-primary mb-12 reveal">
          گالری پروژه‌ها
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Feature */}
          <a href="/projects/penthouse-aseman" className="md:col-span-8 h-[500px] overflow-hidden rounded-2xl reveal group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5vRqE4wd9D1uj-KTODu0ZvbzvthUfIQfCrTvrxx7VGIHmOIsp0UsZtEug8Qw71bGe-6gG9x9AXrq1v4HieJtXywcc0xGQFAYA28D5S-81eTEu0fA23nc3K8krAMEvVqGYTl7LKKYHscT_NT98OKiuZTF57ze11xZ2BsyIdlx2524XxMBICVJjKjrHCIAeGQwouv071cLnb-ugvJD2U2RmW4j8EkeK-JdvnWfRBBwY1epO2t0_0O9wI4kjg2gOWJMOJtzfvyUF9up2"
              alt="اتاق نشیمن مدرن"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </a>

          {/* Side Info Card */}
          <div className="md:col-span-4 flex flex-col justify-between p-8 border border-outline-variant rounded-2xl reveal">
            <div>
              <span className="font-[family-name:var(--font-vazirmatn)] text-[12px] leading-4 text-on-surface-variant">
                نماد مسکونی
              </span>
              <h3 className="font-[family-name:var(--font-vazirmatn)] text-[24px] leading-[36px] font-extrabold mt-4">
                خانه فولادی
              </h3>
              <p className="font-[family-name:var(--font-vazirmatn)] text-[16px] leading-[24px] text-on-surface-variant mt-6">
                تبدیل صنعتی تمام‌عیار یک انبار دهه ۱۹۲۰ به یک خانه لوکس
                خصوصی.
              </p>
            </div>
            <a href="/projects" className="w-full py-4 border border-tertiary text-tertiary font-[family-name:var(--font-vazirmatn)] text-[14px] leading-5 uppercase rounded-lg hover:bg-tertiary hover:text-on-tertiary transition-all mt-8 text-center">
              مشاهده پروژه
            </a>
          </div>

          {/* Small Image */}
          <a href="/projects/concrete-sanctuary" className="md:col-span-4 h-[400px] overflow-hidden rounded-2xl reveal group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTSxjaQjIJc_Z5WiVXR_ighl7pN22ehzxLm5SiHv_0qZtcTEutdpTqDR0rcnFlTxG-m6K5ahdtgddUKNiXHzrOMuQGx6mn3IMWaqfGxWrU9IS3tVA3E_kybQLgft1YKB013iMXArd88QCvW5qlxLar1yQvLYUsEU00pQVwhlqptkSRBOpLW2aYj46TY5IxEJVxTYnK7UIoOIo7jeBOANESHZT07RNK5ehXiBzO2Or1-1JK9BoMHO4eemas1k0yU5GwGags0CpWRkVo"
              alt="جزیره آشپزخانه مدرن"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </a>

          {/* Wide Image */}
          <a href="/projects/heritage-reinforcement" className="md:col-span-8 h-[400px] overflow-hidden rounded-2xl reveal group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqtujpaLQnf4e9rOGnOqkzMbiIp8Z-oMROT5DvjcNkad-fDmXUbRwFIS4LgAFIljq5wlObn4fIr8ib0nMWir0-iCPg6URpQqgxsMiwIgQNuv6lDJKn61-LY82v0V2mKP0DjsWqTM0AgglSRA7xj36tw3ZeLr4MrNLJKYWBHdLMpL-2MNE32ytHlBJ9tXus3GDemPT4VJuAXwlM6NPOIb8m92tUD5_eaB1S_CQ3EEeO0EByZsR2aSII28FsmRii7o6bXs4zfDaMzWOq"
              alt="اتاق خواب مستر"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
