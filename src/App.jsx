import Hero from './components/Hero';
import AboutServices from './components/AboutServices';
import PortfolioTestimonials from './components/PortfolioTestimonials';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-[#0a0f1f] dark:text-white">
      <Hero />
      <AboutServices />
      <PortfolioTestimonials />
      <ContactFooter />
    </div>
  );
}

export default App;
