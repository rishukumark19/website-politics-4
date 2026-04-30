import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    { image: `${import.meta.env.BASE_URL}images/carousel_1.jpg`, titleKey: 'home.slide1.title', subKey: 'home.slide1.sub' },
    { image: `${import.meta.env.BASE_URL}images/location_1.jpg`, titleKey: 'home.slide2.title', subKey: 'home.slide2.sub' },
    { image: `${import.meta.env.BASE_URL}images/location_2.jpg`, titleKey: 'home.slide3.title', subKey: 'home.slide3.sub' },
    { image: `${import.meta.env.BASE_URL}images/location_3.jpg`, titleKey: 'home.slide4.title', subKey: 'home.slide4.sub' },
    { image: `${import.meta.env.BASE_URL}images/singh-mansion.jpg`, titleKey: 'home.slide5.title', subKey: 'home.slide5.sub' },
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
      <section className="relative w-full h-[600px] md:h-[750px] lg:h-[850px] overflow-hidden bg-[#0a0e1a]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-110'
            }`}
          >
            <div className="absolute inset-0 bg-[#0a0e1a]/40 z-[1]" />
            <img 
              alt={t(slide.titleKey)} 
              className="w-full h-full object-cover" 
              src={slide.image} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-[#0a0e1a]/20 z-[2]" />
            
            <div className="absolute inset-0 flex items-center z-[3]">
              <div className="max-w-[1400px] mx-auto px-8 w-full">
                <div className="max-w-4xl">
                  <div className={`h-[1px] bg-[#FF9933] mb-8 transition-all duration-1000 delay-300 ${
                    index === currentSlide ? 'w-24 opacity-100' : 'w-0 opacity-0'
                  }`} />
                  <h3 className={`text-5xl md:text-7xl lg:text-8xl font-headline font-black text-white leading-[1.05] mb-8 drop-shadow-2xl transform transition-all duration-1000 delay-500 ease-out tracking-tight ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}>
                    {t(slide.titleKey)}
                  </h3>
                  <p className={`text-xl md:text-2xl text-white/80 font-body font-light max-w-2xl transform transition-all duration-1000 delay-700 ease-out tracking-wide leading-relaxed ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}>
                    {t(slide.subKey)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel UI */}
        <div className="absolute bottom-12 left-0 w-full z-20">
          <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
            <div className="flex gap-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 transition-all duration-500 rounded-full ${
                    index === currentSlide ? 'w-16 bg-[#FF9933]' : 'w-8 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#FF9933] hover:border-[#FF9933] transition-all group"
              >
                <span className="material-symbols-outlined group-active:scale-90 transition-transform">west</span>
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#FF9933] hover:border-[#FF9933] transition-all group"
              >
                <span className="material-symbols-outlined group-active:scale-90 transition-transform">east</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Editorial Layout */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f9fa] -z-10" />
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative">
                  <div className="absolute -inset-4 border-2 border-[#FF9933]/10 rounded-2xl -z-10 translate-x-8 translate-y-8" />
                  <div className="rounded-2xl overflow-hidden editorial-shadow">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/sanjeev-portrait.jpg`} 
                      alt="Sanjeev Singh" 
                      className="w-full aspect-[4/5] object-cover" 
                    />
                  </div>
                  <div className="absolute bottom-8 -right-8 w-48 h-48 saffron-gradient rounded-2xl -z-10 opacity-20 blur-2xl" />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 space-y-10">
              <Reveal delay={50}>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-[#FF9933]" />
                    <span className="text-[11px] font-black text-[#FF9933] uppercase tracking-[0.5em]">
                      {t('home.about.tag')}
                    </span>
                  </div>
                  <h2 className="text-5xl lg:text-7xl font-headline font-black text-[#1a1a2e] leading-[1.1]">
                    {t('home.about.title1')}<br />
                    <span className="text-[#FF9933]">{t('home.about.title2')}</span>
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="space-y-8">
                  <p className="text-2xl text-[#1a1a2e]/90 font-medium leading-relaxed font-headline">
                    {t('home.about.p1')}
                  </p>
                  <p className="text-lg text-gray-500 leading-relaxed max-w-2xl font-body">
                    {t('home.about.p2')}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <Link to="/about" className="inline-flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full saffron-gradient flex items-center justify-center text-white shadow-xl shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">east</span>
                  </div>
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-[#1a1a2e]">
                    {t('home.about.cta')}
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Bespoke Grid */}
      <section className="bg-[#1a1a2e] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {[
              { val: 'home.stats.years', label: 'home.stats.years_label' },
              { val: 'home.stats.lives', label: 'home.stats.lives_label' },
              { val: 'home.stats.voice', label: 'home.stats.voice_label' },
              { val: 'home.stats.initiatives', label: 'home.stats.initiatives_label' }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="space-y-2 group">
                  <h3 className="text-4xl md:text-5xl font-headline font-black text-white group-hover:text-[#FF9933] transition-colors">
                    {t(stat.val)}
                  </h3>
                  <div className="h-[2px] w-8 bg-[#FF9933] group-hover:w-full transition-all duration-700" />
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">
                    {t(stat.label)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy - High Contrast Section */}
      <section className="py-32 bg-[#f8f9fa] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-10">
            <Reveal delay={50}>
              <div className="space-y-4">
                <span className="text-[11px] font-black text-[#FF9933] uppercase tracking-[0.4em]">
                  {t('home.legacy.tag')}
                </span>
                <h2 className="text-5xl font-headline font-black text-[#1a1a2e]">
                  {t('home.legacy.title')}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-xl text-[#1a1a2e]/70 leading-relaxed font-body">
                {t('home.legacy.p')}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Link to="/about" className="inline-flex items-center gap-4 text-[#1a1a2e] font-black group">
                <span className="text-sm uppercase tracking-[0.2em] border-b-2 border-[#FF9933]">
                  {t('home.legacy.cta')}
                </span>
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">trending_flat</span>
              </Link>
            </Reveal>
          </div>
          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="relative group">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
                  <img 
                    alt="Legacy" 
                    className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" 
                    src={`${import.meta.env.BASE_URL}images/singh-mansion.jpg`} 
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem]" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Media Hub - Social Walls */}
      <section className="py-32 bg-white px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="space-y-4">
              <Reveal delay={50}>
                <span className="text-[11px] font-black text-[#FF9933] uppercase tracking-[0.4em]">
                  {t('home.social.tag')}
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-5xl lg:text-7xl font-headline font-black text-[#1a1a2e]">
                  {t('home.social.title')}
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Facebook Wall */}
            <Reveal delay={50}>
              <div className="group h-full flex flex-col">
                <div className="p-8 bg-[#f8f9fa] rounded-t-[2rem] border-b-0 border-transparent group-hover:bg-[#FF9933]/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1877F2] rounded-xl flex items-center justify-center text-white">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-headline font-black text-[#1a1a2e] uppercase tracking-wider">{t('home.social.fb_name')}</h4>
                      <p className="text-[10px] font-black text-[#FF9933] uppercase tracking-widest">{t('home.social.fb_sub')}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8f9fa] rounded-b-[2rem] overflow-hidden flex-grow min-h-[500px]">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100069661650642&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="100%" height="500"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no" frameBorder="0" allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Facebook Feed"
                    className="w-full h-full brightness-95"
                  />
                </div>
              </div>
            </Reveal>

            {/* X Card */}
            <Reveal delay={100}>
              <div className="bg-[#1a1a2e] p-10 rounded-[2rem] flex flex-col justify-between group h-full">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#1a1a2e]">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-headline font-black text-white uppercase tracking-wider">{t('home.social.x_name')}</h4>
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">@sanjeev_singh_jh</p>
                    </div>
                  </div>
                  <p className="text-2xl text-white/90 font-headline leading-relaxed">
                    {t('home.social.x_post')}
                  </p>
                </div>
                <a 
                  href="https://x.com/sanjeev_singh_jh" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="mt-12 py-5 bg-white text-[#1a1a2e] rounded-xl font-black text-xs uppercase tracking-[0.2em] text-center hover:bg-[#FF9933] hover:text-white transition-all shadow-xl shadow-black/20"
                >
                  {t('home.social.x_cta')}
                </a>
              </div>
            </Reveal>

            {/* Instagram Card */}
            <Reveal delay={150}>
              <div className="bg-[#f8f9fa] rounded-[2rem] overflow-hidden flex flex-col group h-full border border-transparent hover:border-[#FF9933]/10 transition-all">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/location_3.jpg`} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                    alt="Insta" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-6 left-6 flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
                    <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" /></svg>
                    </div>
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">{t('home.social.ig_name')}</span>
                  </div>
                </div>
                <div className="p-8 space-y-6 flex-grow flex flex-col">
                  <p className="text-lg text-[#1a1a2e]/80 font-body leading-relaxed flex-grow">
                    {t('home.social.ig_post')}
                  </p>
                  <a 
                    href="https://www.instagram.com/sanjeev_ragini_singh7007" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-full py-4 saffron-gradient text-white rounded-xl font-black text-xs uppercase tracking-[0.2em] text-center shadow-lg shadow-orange-500/20"
                  >
                    {t('home.social.ig_cta')}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map Section - Simplified */}
      <section className="py-32 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF9933]/5 -skew-x-12 translate-x-32" />
        <div className="max-w-[1400px] mx-auto px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                <span className="text-[11px] font-black text-[#FF9933] uppercase tracking-[0.4em]">
                  {t('home.map.tag')}
                </span>
                <h2 className="text-5xl font-headline font-black text-white">
                  {t('home.map.title1')}<br />
                  <span className="text-[#FF9933]">{t('home.map.title2')}</span>
                </h2>
              </div>
              <p className="text-white/60 font-body text-lg leading-relaxed">
                {t('home.map.address')}
              </p>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <div className="h-[500px] rounded-[2rem] overflow-hidden editorial-shadow border border-white/10 group">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.06994270119!2d86.46153931139891!3d23.81611177853649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd007e446ce9%3A0x42fd6c53a777a6cf!2sSINGH%20MANSION!5e0!3m2!1sen!2sin!4v1775368729592!5m2!1sen!2sin"
                    width="100%" height="100%"
                    className="border-0 brightness-75 contrast-125 grayscale hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                    allowFullScreen={true} loading="lazy"
                    title="Location"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
