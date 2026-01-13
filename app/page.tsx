import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SponsorBar from '@/components/Partners';
import Showcase from '@/components/Showcase';
import PhotoGallery from '@/components/PhotoGallery';
import Services from '@/components/Services';
import About from '@/components/About';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import HeritageStats from '@/components/Stats';

export default function Page() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-24"> {/* Buffer for fixed navbar */}
        <Hero />
        <SponsorBar />
        <HeritageStats />
        <Showcase />
        <PhotoGallery />
        <Services />
        <About />
        <Cta />
        <Footer />
      </div>
    </main>
  );
}