import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    { image: '/images/carousel_1.jpg', titleKey: 'home.slide1.title', subKey: 'home.slide1.sub' },
    { image: '/images/location_1.jpg', titleKey: 'home.slide2.title', subKey: 'home.slide2.sub' },
    { image: '/images/location_2.jpg', titleKey: 'home.slide3.title', subKey: 'home.slide3.sub' },
    { image: '/images/location_3.jpg', titleKey: 'home.slide4.title', subKey: 'home.slide4.sub' },
    { image: '/images/singh-mansion.jpg', titleKey: 'home.slide5.title', subKey: 'home.slide5.sub' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Carousel */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-slate-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img alt={t(slide.titleKey)} className="w-full h-full object-cover transform scale-105" src={slide.image} />
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            <div className="absolute bottom-16 sm:bottom-24 left-6 sm:left-12 max-w-7xl px-6">
              <div className="max-w-xl inline-block">
                <h3 className={`text-3xl sm:text-5xl font-headline font-extrabold text-white leading-tight mb-3 drop-shadow-xl transform transition-all duration-1000 delay-500 ease-out ${
                  index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                }`}>
                  {t(slide.titleKey)}
                </h3>
                <p className={`text-base sm:text-xl text-slate-100 font-medium drop-shadow-lg transform transition-all duration-1000 delay-700 ease-out ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  {t(slide.subKey)}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${index === currentSlide ? 'w-8 h-2 bg-orange-500' : 'w-2 h-2 bg-white/50 hover:bg-white'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-orange-500 transition-colors border border-white/20"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-orange-500 transition-colors border border-white/20"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative group">
                <div className="absolute inset-0 bg-orange-100 rounded-2xl transform rotate-3 -z-10 group-hover:rotate-6 transition-transform" />
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img src="/images/sanjeev-portrait.jpg" alt="Sanjeev Singh" className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col space-y-6">
              <Reveal delay={50}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full border border-orange-100 w-fit">
                  <span className="w-2 h-2 rounded-full bg-[#FF9933]" />
                  <span className="text-[10px] font-bold text-[#FF9933] uppercase tracking-widest">{t('home.about.tag')}</span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h2 className="text-4xl lg:text-5xl font-headline font-black text-[#003366]">
                  {t('home.about.title1')}<span className="text-[#FF9933]">{t('home.about.title2')}</span>
                </h2>
              </Reveal>

              <Reveal delay={150}>
                <div className="w-20 h-1.5 bg-[#FF9933] rounded-full" />
              </Reveal>

              <Reveal delay={200}>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">{t('home.about.p1')}</p>
              </Reveal>

              <Reveal delay={250}>
                <p className="text-base text-gray-500 leading-relaxed">{t('home.about.p2')}</p>
              </Reveal>

              <Reveal delay={300}>
                <div className="pt-4">
                  <Link to="/about" className="inline-flex items-center gap-2 px-8 py-3 bg-[#FF9933] text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200">
                    {t('home.about.cta')}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8">
          <Reveal delay={50}>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-headline font-extrabold text-white">{t('home.stats.years')}</h3>
              <p className="text-secondary-fixed-dim text-xs font-bold uppercase tracking-widest">{t('home.stats.years_label')}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-headline font-extrabold text-white">{t('home.stats.lives')}</h3>
              <p className="text-secondary-fixed-dim text-xs font-bold uppercase tracking-widest">{t('home.stats.lives_label')}</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-headline font-extrabold text-white">{t('home.stats.voice')}</h3>
              <p className="text-secondary-fixed-dim text-xs font-bold uppercase tracking-widest">{t('home.stats.voice_label')}</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-headline font-extrabold text-white">{t('home.stats.initiatives')}</h3>
              <p className="text-secondary-fixed-dim text-xs font-bold uppercase tracking-widest">{t('home.stats.initiatives_label')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Legacy */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden editorial-shadow">
                <img alt="Dhanbad" className="w-full h-full object-cover" src="/images/sanjeev-profile.jpg" />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 saffron-gradient rounded-3xl -z-10 opacity-20" />
            </div>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={50}><p className="text-primary font-bold tracking-widest uppercase text-sm">{t('home.legacy.tag')}</p></Reveal>
            <Reveal delay={100}><h2 className="text-4xl font-headline font-extrabold text-on-background">{t('home.legacy.title')}</h2></Reveal>
            <Reveal delay={150}><p className="text-lg text-on-surface-variant leading-relaxed">{t('home.legacy.p')}</p></Reveal>
            <Reveal delay={200}>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold group">
                {t('home.legacy.cta')}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <Reveal delay={50}><p className="text-primary font-bold tracking-widest uppercase text-sm">{t('home.gallery.tag')}</p></Reveal>
              <Reveal delay={100}><h2 className="text-4xl font-headline font-extrabold text-on-background">{t('home.gallery.title')}</h2></Reveal>
            </div>
            <Link to="/photos" className="px-6 py-2 border-2 border-secondary text-secondary font-bold rounded-xl hover:bg-secondary hover:text-white transition-colors">
              {t('home.gallery.cta')}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Reveal delay={50}>
              <div className="space-y-4">
                <img alt="Field Visit 1" className="w-full rounded-2xl editorial-shadow hover:scale-[1.02] transition-transform" src="/images/location_1.jpg" />
                <img alt="Field Visit 2" className="w-full rounded-2xl editorial-shadow hover:scale-[1.02] transition-transform" src="/images/location_2.jpg" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <img alt="Public Program 1" className="w-full rounded-2xl editorial-shadow hover:scale-[1.02] transition-transform" src="/images/location_3.jpg" />
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-4">
                <img alt="Community Interaction" className="w-full rounded-2xl editorial-shadow hover:scale-[1.02] transition-transform" src="/images/gallery_1.jpg" />
                <img alt="Local Event" className="w-full rounded-2xl editorial-shadow hover:scale-[1.02] transition-transform" src="/images/gallery_2.jpg" />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <img alt="Leadership Moment" className="w-full rounded-2xl editorial-shadow hover:scale-[1.02] transition-transform" src="/images/gallery_3.jpg" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Social Media Hub */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Reveal delay={50}><p className="text-primary font-bold tracking-widest uppercase text-sm">{t('home.social.tag')}</p></Reveal>
            <Reveal delay={100}><h2 className="text-4xl font-headline font-extrabold text-on-background">{t('home.social.title')}</h2></Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {/* Facebook */}
            <Reveal delay={50}>
              <div className="bg-white p-6 rounded-3xl editorial-shadow border border-slate-100 h-full flex flex-col group hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#1877F2] rounded-lg flex items-center justify-center text-white shrink-0">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-background leading-tight">{t('home.social.fb_name')}</h4>
                    <p className="text-xs text-on-surface-variant">{t('home.social.fb_sub')}</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden flex-grow relative w-full h-[400px]">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100069661650642&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="100%" height="100%"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no" frameBorder="0" allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Facebook Live Feed"
                  />
                </div>
              </div>
            </Reveal>

            {/* X (Twitter) */}
            <Reveal delay={100}>
              <div className="bg-white p-6 rounded-3xl editorial-shadow border border-slate-100 h-full flex flex-col group hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white shrink-0">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-background leading-tight">{t('home.social.x_name')}</h4>
                    <p className="text-xs text-on-surface-variant">@sanjeev_singh_jh</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl mb-6 flex-grow">
                  <p className="text-sm text-on-surface">{t('home.social.x_post')}</p>
                  <div className="flex gap-4 mt-3 text-slate-500">
                    <span className="flex items-center gap-1 text-xs"><span className="material-symbols-outlined text-[16px]">favorite</span> 1.2K</span>
                    <span className="flex items-center gap-1 text-xs"><span className="material-symbols-outlined text-[16px]">repeat</span> 450</span>
                  </div>
                </div>
                <a href="#" target="_blank" rel="noreferrer" className="w-full py-3 bg-black text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors mt-auto shadow-md">
                  {t('home.social.x_cta')}
                </a>
              </div>
            </Reveal>

            {/* Instagram */}
            <Reveal delay={150}>
              <div className="bg-white p-6 rounded-3xl editorial-shadow border border-slate-100 h-full flex flex-col group hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white shrink-0">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-background leading-tight">{t('home.social.ig_name')}</h4>
                    <p className="text-xs text-on-surface-variant">@sanjeev_ragini_singh7007</p>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-2xl mb-6 overflow-hidden flex-grow relative border border-slate-100">
                  <img src="/images/location_3.jpg" className="w-full h-32 object-cover" alt="Insta Post" />
                  <div className="p-4">
                    <p className="text-sm text-on-surface">{t('home.social.ig_post')}</p>
                  </div>
                </div>
                <a href="https://www.instagram.com/sanjeev_ragini_singh7007?igsh=MXZnNTVuank0ajEzOA%3D%3D" target="_blank" rel="noreferrer" className="w-full py-3 bg-pink-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-pink-700 transition-colors mt-auto shadow-md shadow-pink-500/20">
                  {t('home.social.ig_cta')}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 px-6 bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Reveal delay={50}><p className="text-primary font-bold tracking-widest uppercase text-sm mb-2">{t('home.map.tag')}</p></Reveal>
            <Reveal delay={100}><h2 className="text-3xl font-headline font-bold text-[#003366]">{t('home.map.title1')}<span className="text-[#FF9933]">{t('home.map.title2')}</span></h2></Reveal>
            <Reveal delay={150}><p className="text-gray-500 mt-2 font-medium tracking-wide">{t('home.map.address')}</p></Reveal>
          </div>
          <Reveal delay={200}>
            <div className="w-full h-[500px] rounded-[40px] overflow-hidden editorial-shadow border-4 border-white shadow-2xl relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.06994270119!2d86.46153931139891!3d23.81611177853649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd007e446ce9%3A0x42fd6c53a777a6cf!2sSINGH%20MANSION!5e0!3m2!1sen!2sin!4v1775368729592!5m2!1sen!2sin"
                width="100%" height="100%"
                className="border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen={true} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Singh Mansion Location"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 rounded-[40px]" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
