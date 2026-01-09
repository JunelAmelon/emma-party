import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Story } from '@/components/story';
import { Process } from '@/components/process';
import { Gallery } from '@/components/gallery';
import { QuoteForm } from '@/components/quote-form';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Story />
      <Process />
      <Gallery />
      <QuoteForm />
      <Footer />
    </main>
  );
}
