import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white pt-[72px]">
      {/* Editorial Header */}
      <section className="bg-[#1a1a2e] py-32 px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF9933]/5 -skew-x-12 translate-x-32" />
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#FF9933]" />
              <span className="text-[11px] font-black text-[#FF9933] uppercase tracking-[0.5em]">{t('about.tag')}</span>
              <div className="h-px w-12 bg-[#FF9933]" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-8xl font-headline font-black text-white max-w-5xl mx-auto leading-[1.1] tracking-tight">
              {t('about.title')}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Biography - Asymmetric Layout */}
      <section className="py-32 px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          {/* Portrait Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <div className="relative group">
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden editorial-shadow relative z-10 border border-slate-100">
                  <img 
                    alt="Sanjeev Singh Official Portrait" 
                    className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" 
                    src={`${import.meta.env.BASE_URL}images/sanjeev-portrait.jpg`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="absolute -inset-6 border-2 border-[#FF9933]/10 rounded-[3rem] -z-10 translate-x-4 translate-y-4" />
                <div className="absolute -bottom-12 -right-12 w-64 h-64 saffron-gradient rounded-full -z-10 opacity-10 blur-3xl" />
              </div>
            </Reveal>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-20 relative z-10">
            <div className="space-y-12">
              <Reveal>
                <div className="space-y-6">
                  <h2 className="text-4xl font-headline font-black text-[#1a1a2e] uppercase tracking-tight flex items-center gap-6">
                    <span className="text-[#FF9933]">01</span>
                    {t('about.origins.title')}
                  </h2>
                  <div className="h-[2px] w-24 bg-[#FF9933]" />
                </div>
              </Reveal>
              <div className="prose prose-xl text-[#1a1a2e]/80 max-w-none space-y-8 font-body leading-relaxed">
                <Reveal delay={50}><p className="first-letter:text-6xl first-letter:font-black first-letter:text-[#FF9933] first-letter:mr-3 first-letter:float-left">{t('about.origins.p1')}</p></Reveal>
                <Reveal delay={100}><p>{t('about.origins.p2')}</p></Reveal>
                <Reveal delay={150}><p>{t('about.origins.p3')}</p></Reveal>
              </div>
            </div>

            <Reveal delay={200}>
              <div className="relative py-12">
                <div className="absolute inset-0 bg-[#f8f9fa] -skew-y-2 -z-10" />
                <blockquote className="px-12 py-8 border-l-8 border-[#FF9933]">
                  <span className="material-symbols-outlined text-6xl text-[#FF9933]/20 absolute -top-4 left-4">format_quote</span>
                  <p className="text-3xl font-headline text-[#1a1a2e] italic font-medium leading-relaxed">
                    {t('about.quote')}
                  </p>
                </blockquote>
              </div>
            </Reveal>

            <div className="space-y-12">
              <Reveal>
                <div className="space-y-6">
                  <h2 className="text-4xl font-headline font-black text-[#1a1a2e] uppercase tracking-tight flex items-center gap-6">
                    <span className="text-[#FF9933]">02</span>
                    {t('about.career.title')}
                  </h2>
                  <div className="h-[2px] w-24 bg-[#FF9933]" />
                </div>
              </Reveal>
              <div className="prose prose-xl text-[#1a1a2e]/80 max-w-none space-y-8 font-body leading-relaxed">
                <Reveal delay={50}><p>{t('about.career.p1')}</p></Reveal>
                <Reveal delay={100}><p>{t('about.career.p2')}</p></Reveal>
              </div>
            </div>

            <div className="space-y-12">
              <Reveal>
                <div className="space-y-6">
                  <h2 className="text-4xl font-headline font-black text-[#1a1a2e] uppercase tracking-tight flex items-center gap-6">
                    <span className="text-[#FF9933]">03</span>
                    {t('about.legacy.title')}
                  </h2>
                  <div className="h-[2px] w-24 bg-[#FF9933]" />
                </div>
              </Reveal>
              <div className="prose prose-xl text-[#1a1a2e]/80 max-w-none space-y-8 font-body leading-relaxed">
                <Reveal delay={50}><p>{t('about.legacy.p')}</p></Reveal>
              </div>
            </div>

            <Reveal delay={100}>
              <div className="pt-12">
                <Link to="/press" className="inline-flex items-center gap-8 group">
                  <div className="w-20 h-20 rounded-full saffron-gradient flex items-center justify-center text-white shadow-2xl shadow-orange-500/30 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">trending_flat</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF9933]">Next Chapter</span>
                    <p className="text-xl font-headline font-black text-[#1a1a2e] uppercase tracking-wider">{t('about.cta')}</p>
                  </div>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
