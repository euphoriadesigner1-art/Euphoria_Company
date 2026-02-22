import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent1 selection:text-black">
      <Navbar />

      <main>
        <Hero />
        <Services />
        {/* Portfolio, How it Works, Testimonials will go here eventually */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
