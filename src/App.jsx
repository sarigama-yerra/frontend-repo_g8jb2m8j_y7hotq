import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <footer className="border-t border-zinc-200 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Atelier AI. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-zinc-600">
            <a href="#" className="hover:text-zinc-900">Privacy</a>
            <a href="#" className="hover:text-zinc-900">Terms</a>
            <a href="#" className="hover:text-zinc-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
