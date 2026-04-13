import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-surface pt-[72px]">
      {/* Hero Header */}
      <section className="bg-surface-container-low py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <Reveal>
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">{t('about.tag')}</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-on-background max-w-4xl leading-tight">
              {t('about.title')}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Biography */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Portrait */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-32 mb-12 lg:mb-0">
            <Reveal>
              <div className="relative">
                <div className="aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden editorial-shadow relative z-10">
                  <img 
                    alt="Sanjeev Singh Official Portrait" 
                    className="w-full h-full object-cover" 
                    src={`${import.meta.env.BASE_URL}images/sanjeev-portrait.jpg`} 
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/10 rounded-3xl -z-10" />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 saffron-gradient rounded-3xl -z-10 opacity-20 hidden lg:block" />
              </div>
            </Reveal>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-12 relative z-10">
            <div>
              <Reveal><h2 className="text-3xl font-headline font-bold text-on-background mb-6">{t('about.origins.title')}</h2></Reveal>
              <div className="prose prose-lg text-on-surface-variant max-w-none space-y-6">
                <Reveal delay={50}><p>{t('about.origins.p1')}</p></Reveal>
                <Reveal delay={100}><p>{t('about.origins.p2')}</p></Reveal>
                <Reveal delay={150}><p>{t('about.origins.p3')}</p></Reveal>
              </div>
            </div>

            <Reveal delay={200}>
              <blockquote className="p-8 bg-surface-container-high rounded-3xl border-l-4 border-primary">
                <p className="text-xl font-headline text-on-background italic mb-4">{t('about.quote')}</p>
              </blockquote>
            </Reveal>

            <div>
              <Reveal><h2 className="text-3xl font-headline font-bold text-on-background mb-6">{t('about.career.title')}</h2></Reveal>
              <div className="prose prose-lg text-on-surface-variant max-w-none space-y-6">
                <Reveal delay={50}><p>{t('about.career.p1')}</p></Reveal>
                <Reveal delay={100}><p>{t('about.career.p2')}</p></Reveal>
              </div>
            </div>

            <div>
              <Reveal><h2 className="text-3xl font-headline font-bold text-on-background mb-6">{t('about.legacy.title')}</h2></Reveal>
              <div className="prose prose-lg text-on-surface-variant max-w-none space-y-6">
                <Reveal delay={50}><p>{t('about.legacy.p')}</p></Reveal>
              </div>
            </div>

            <Reveal delay={100}>
              <div className="pt-8 flex flex-wrap gap-4">
                <Link to="/press" className="px-8 py-4 saffron-gradient text-white font-bold rounded-xl editorial-shadow hover:scale-105 transition-transform inline-flex items-center gap-2">
                  {t('about.cta')}
                  <span className="material-symbols-outlined">arrow_forward</span>
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
