import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const PhotoGallery = () => {
  const { t } = useLanguage();

  const photoPostUrls = [
    "https://www.facebook.com/photo.php?fbid=1257038389961538",
    "https://www.facebook.com/photo.php?fbid=1257038249961552",
    "https://www.facebook.com/photo.php?fbid=1257038213294889",
    "https://www.facebook.com/photo.php?fbid=1256773663321344",
    "https://www.facebook.com/photo.php?fbid=1256773423321368",
    "https://www.facebook.com/photo.php?fbid=1256773376654706",
    "https://www.facebook.com/photo.php?fbid=1256773359988041",
    "https://www.facebook.com/photo.php?fbid=1256771819988195",
    "https://www.facebook.com/photo.php?fbid=1256771786654865",
    "https://www.facebook.com/photo.php?fbid=1256771643321546",
    "https://www.facebook.com/photo.php?fbid=1256771449988232",
    "https://www.facebook.com/photo.php?fbid=1256437840021593",
    "https://www.facebook.com/photo.php?fbid=1256437673354943",
    "https://www.facebook.com/photo.php?fbid=1256437610021616",
    "https://www.facebook.com/photo.php?fbid=1256437363354974"
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-[72px]">
      {/* Header */}
      <section className="py-24 px-6 border-b border-gray-100 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[#FF9933] font-black tracking-[0.4em] uppercase text-[11px] mb-6">{t('gallery.tag')}</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-6xl md:text-8xl font-headline font-black text-[#003366] leading-none mb-8 tracking-tighter uppercase">
              {t('gallery.title1')} <br/><span className="text-[#FF9933] italic">{t('gallery.title2')}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">{t('gallery.sub')}</p>
          </Reveal>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-2xl font-black text-[#003366] tracking-tighter uppercase">{t('gallery.feed')}</h2>
            <div className="h-0.5 bg-[#FF9933] flex-grow opacity-20" />
            <span className="text-sm font-bold text-[#FF9933] tracking-widest uppercase">{t('gallery.stream')}</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoPostUrls.map((url, index) => (
            <Reveal key={index} delay={Math.min(index * 60, 300)}>
              <div className="bg-white rounded-[40px] overflow-hidden editorial-shadow border border-slate-100 p-4 transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-full min-h-[500px] relative rounded-[32px] overflow-hidden">
                  <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=false&width=auto`}
                    width="100%" height="100%"
                    style={{ border: 'none', overflow: 'hidden', minHeight: '500px' }}
                    scrolling="no" frameBorder="0" allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title={`Facebook Photo Post ${index}`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-24 text-center pt-16 border-t border-gray-100">
            <Link to="/" className="px-12 py-4 bg-[#FF9933] text-white rounded-full font-bold text-sm tracking-widest hover:scale-105 transition-transform inline-flex items-center gap-3 shadow-xl shadow-orange-500/20">
              <span className="material-symbols-outlined text-sm">home</span>
              {t('gallery.home')}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default PhotoGallery;
