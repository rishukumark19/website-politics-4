import { Mail, MapPin, Phone } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const ContactUs = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-surface min-h-[80vh] pt-[72px]">
      {/* Header */}
      <section className="bg-surface-container-low py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <Reveal>
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">{t('contact.tag')}</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-on-background max-w-4xl leading-tight">
              {t('contact.title')}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-on-surface-variant max-w-2xl leading-relaxed">{t('contact.sub')}</p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            <Reveal>
              <h2 className="text-3xl font-headline font-bold text-on-background mb-8">{t('contact.chambers')}</h2>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={50}>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-orange-50 text-[#FF9933] rounded-full flex justify-center items-center shrink-0 shadow-sm border border-orange-100">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-on-background mb-2 tracking-tight">{t('contact.office')}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{t('contact.address')}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-orange-50 text-[#FF9933] rounded-full flex justify-center items-center shrink-0 shadow-sm border border-orange-100">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-on-background mb-2 tracking-tight">{t('contact.email_title')}</h4>
                    <p className="text-on-surface-variant leading-relaxed hover:text-[#FF9933] transition-colors cursor-pointer font-medium">
                      office@sanjeevsingh.in
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-orange-50 text-[#FF9933] rounded-full flex justify-center items-center shrink-0 shadow-sm border border-orange-100">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-on-background mb-2 tracking-tight">{t('contact.phone_title')}</h4>
                    <a href="tel:+919431125166" className="text-on-surface-variant leading-relaxed hover:text-[#FF9933] transition-colors cursor-pointer font-bold">
                      +91 94311 25166
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Map */}
            <Reveal delay={200}>
              <div className="w-full">
                <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">{t('contact.map')}</h3>
                <div className="w-full h-[320px] rounded-3xl overflow-hidden editorial-shadow border border-slate-100 relative group">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.06994270119!2d86.46153931139891!3d23.81611177853649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd007e446ce9%3A0x42fd6c53a777a6cf!2sSINGH%20MANSION!5e0!3m2!1sen!2sin!4v1775368729592!5m2!1sen!2sin"
                    width="100%" height="100%"
                    className="border-0 hover:filter-none transition-all duration-700"
                    allowFullScreen={true} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Singh Mansion Location"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Form */}
          <Reveal delay={100}>
            <div className="glass-panel bg-white p-10 md:p-14 rounded-3xl editorial-shadow border border-slate-100 flex flex-col h-full justify-center relative overflow-hidden">
              <h2 className="text-3xl font-headline font-bold text-on-background mb-8 relative z-10">{t('contact.form_title')}</h2>
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant">{t('contact.name')}</label>
                    <input className="w-full bg-surface-container-low px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-[#FF9933] outline-none transition-shadow font-body" placeholder={t('contact.name_ph')} type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant">{t('contact.email')}</label>
                    <input className="w-full bg-surface-container-low px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-[#FF9933] outline-none transition-shadow font-body" placeholder={t('contact.email_ph')} type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">{t('contact.subject')}</label>
                  <input className="w-full bg-surface-container-low px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-[#FF9933] outline-none transition-shadow font-body" placeholder={t('contact.subject_ph')} type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">{t('contact.message')}</label>
                  <textarea className="w-full bg-surface-container-low px-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-[#FF9933] outline-none transition-shadow resize-none font-body" placeholder={t('contact.message_ph')} rows={5} />
                </div>
                <button className="w-full py-4 text-white bg-[#FF9933] rounded-xl font-bold shadow-lg shadow-orange-500/20 hover:scale-[1.02] active:scale-95 transition-all text-lg mt-4">
                  {t('contact.submit')}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
