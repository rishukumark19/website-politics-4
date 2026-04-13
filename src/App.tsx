import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PressReleases from './pages/PressReleases';
import Videos from './pages/Videos';
import PhotoGallery from './pages/PhotoGallery';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="press" element={<PressReleases />} />
            <Route path="videos" element={<Videos />} />
            <Route path="photos" element={<PhotoGallery />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
