import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent1 selection:text-black">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;
