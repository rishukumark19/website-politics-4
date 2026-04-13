import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white w-full pt-16 pb-8 font-body">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4 space-y-6">
          <h2 className="text-3xl font-headline font-extrabold text-white">Sanjeev Singh</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            A voice for the workers, a vision for the youth, and a lifetime of service for Dhanbad. Join us in shaping the future of Jharkhand.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-slate-400">
              <span className="material-symbols-outlined text-primary-container">location_on</span>
              <span className="text-sm">Janta Mazdoor Sangh Office, Dhanbad</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <span className="material-symbols-outlined text-primary-container">mail</span>
              <span className="text-sm">office@sanjeevsingh.in</span>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary-container">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/about">Biography</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/press">Initiatives</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/photos">Gallery</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="md:col-span-6 bg-white/5 p-8 rounded-3xl border border-white/10">
          <h4 className="text-xl font-headline font-bold mb-6">Connect with Us</h4>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="px-4 py-3 bg-slate-900 border-none rounded-xl focus:ring-2 focus:ring-primary-container text-white placeholder:text-slate-500 w-full outline-none" placeholder="Your Name" type="text" />
              <input className="px-4 py-3 bg-slate-900 border-none rounded-xl focus:ring-2 focus:ring-primary-container text-white placeholder:text-slate-500 w-full outline-none" placeholder="Email Address" type="email" />
            </div>
            <textarea className="w-full px-4 py-3 bg-slate-900 border-none rounded-xl focus:ring-2 focus:ring-primary-container text-white placeholder:text-slate-500 outline-none" placeholder="Your Message" rows={3}></textarea>
            <button className="w-full py-4 bg-primary-container text-on-primary-container font-bold rounded-xl hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Sanjeev Suryadeo Singh. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Privacy Policy</a>
          <a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Terms of Service</a>
          <a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Press Kit</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
