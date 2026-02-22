import React from 'react';
import BottomNavBar from './components/ui/bottom-nav-bar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent1 selection:text-black">
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
      </main>

      <Footer />
      <BottomNavBar stickyTop={true} />
    </div>
  );
}

export default App;
