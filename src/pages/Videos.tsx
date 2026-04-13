import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const Videos = () => {
  const { t } = useLanguage();

  const videos = [
    { img: `${import.meta.env.BASE_URL}images/location_1.jpg`, titleKey: 'videos.v1', dateKey: 'videos.v1_date' },
    { img: `${import.meta.env.BASE_URL}images/gallery_2.jpg`, titleKey: 'videos.v2', dateKey: 'videos.v2_date' },
    { img: `${import.meta.env.BASE_URL}images/carousel_2.jpg`, titleKey: 'videos.v3', dateKey: 'videos.v3_date' },
  ];

  return (
    <div className="bg-surface min-h-[80vh] pt-[72px]">
      {/* Header */}
      <section className="bg-surface-container-low py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <Reveal>
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">{t('videos.tag')}</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-on-background max-w-4xl leading-tight">
              {t('videos.title')}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-on-surface-variant max-w-2xl leading-relaxed">{t('videos.sub')}</p>
          </Reveal>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="relative group cursor-pointer overflow-hidden rounded-3xl editorial-shadow aspect-video">
                <img alt={t(vid.titleKey)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={vid.img} />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center editorial-shadow transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-4xl">play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-white font-headline font-bold">{t(vid.titleKey)}</h4>
                  <p className="text-white/70 text-xs">{t(vid.dateKey)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-16 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              <span className="material-symbols-outlined text-sm">arrow_back</span> {t('videos.back')}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Videos;
