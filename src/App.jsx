import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import Services from './components/Services';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <Navbar />
      <Hero />
      <PortfolioGrid />
      <Services />
      <ContactSection />
      <footer className="border-t border-white/10 bg-neutral-950/80 py-8 text-center text-white/60">
        © {new Date().getFullYear()} Studio Ligne. All rights reserved.
      </footer>
    </div>
  );
}
