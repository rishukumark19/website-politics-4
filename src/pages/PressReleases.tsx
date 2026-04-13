import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const PressReleases = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen pt-[72px]">
      {/* Header */}
      <section className="bg-white py-24 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[#FF9933] font-black tracking-[0.3em] uppercase text-[10px] mb-6">{t('press.tag')}</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-headline font-black text-[#003366] leading-none mb-8 tracking-tighter uppercase">
              {t('press.title1')} <br/><span className="text-[#FF9933] italic">{t('press.title2')}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">{t('press.sub')}</p>
          </Reveal>
        </div>
      </section>

      {/* Facebook Feed */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="bg-white rounded-[40px] p-2 md:p-10 editorial-shadow border border-slate-100 relative overflow-hidden group">
              <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-8 border-b border-slate-50 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-100 rotate-3 group-hover:rotate-0 transition-transform">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#003366] tracking-tight leading-none mb-1">{t('press.timeline')}</h3>
                    <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{t('press.powered')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-6 py-2 bg-slate-50 rounded-full border border-slate-100">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{t('press.stream')}</span>
                </div>
              </div>

              <div className="rounded-[32px] overflow-hidden bg-slate-50 min-h-[900px] w-full border border-slate-100 shadow-inner">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100069661650642&tabs=timeline&width=800&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="100%" height="1000"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no" frameBorder="0" allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Official FB Live Feed"
                  className="w-full h-[1000px] hover:scale-[1.005] transition-transform duration-500"
                />
              </div>

              <Reveal delay={100}>
                <div className="mt-12 text-center">
                  <a
                    href="https://www.facebook.com/profile.php?id=100069661650642"
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-[#003366] text-white rounded-full font-bold text-xs tracking-[0.3em] hover:bg-[#FF9933] transition-all shadow-2xl shadow-blue-200 uppercase"
                  >
                    {t('press.archive')}
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                </div>
              </Reveal>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-24 text-center">
              <Link to="/" className="px-8 py-3 rounded-full border-2 border-[#FF9933] text-[#FF9933] font-bold text-[10px] tracking-widest hover:bg-orange-50 transition-all inline-flex items-center gap-3 uppercase">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                {t('press.back')}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default PressReleases;
