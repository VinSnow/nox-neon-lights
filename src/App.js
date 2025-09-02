import React, { useState, useEffect } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const neonGlow = (color) => ({
    textShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`,
    color: "white",
  });

  const Button = ({ children, onClick, variant = "primary", href }) => {
    const baseClasses =
      "px-8 py-3 font-bold tracking-wider transition-all duration-300 transform border border-current rounded-none uppercase text-sm relative overflow-hidden group";
    const variants = {
      primary:
        "bg-transparent text-cyan-400 hover:text-white border-cyan-400 hover:border-fuchsia-500",
      secondary:
        "bg-transparent text-fuchsia-500 hover:text-white border-fuchsia-500 hover:border-cyan-400",
    };

    return (
      <a
        href={href || "#"}
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]}`}
        style={{
          boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)",
        }}
      >
        <span className="relative z-10">{children}</span>
        <span
          className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{ mixBlendMode: "screen" }}
        ></span>
      </a>
    );
  };

  const NeonText = ({ children, color = "#FF00FF" }) => (
    <span
      style={{
        ...neonGlow(color),
        display: "inline-block",
        fontWeight: 700,
      }}
    >
      {children}
    </span>
  );

  const CollectionItem = ({ name, image, link }) => (
    <div className="group relative bg-black border border-violet-600/30 overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: `inset 0 0 30px ${name.includes('Sword') ? '#8A2BE2' : name.includes('Dragon') ? '#FF00FF' : '#00FFFF'}`,
          }}
        ></div>
      </div>
      <div className="p-6">
        <h3 className="text-white text-xl font-bold mb-4" style={neonGlow(name.includes('Sword') ? '#8A2BE2' : name.includes('Dragon') ? '#FF00FF' : '#00FFFF')}>
          {name}
        </h3>
        <Button href={link} variant="primary">
          Buy on Etsy
        </Button>
      </div>
    </div>
  );

  const PageTransition = ({ children }) => (
    <div className="animate-fade-in">
      {children}
    </div>
  );

  const HomePage = () => (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, #FF00FF 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, #8A2BE2 0%, transparent 40%),
            radial-gradient(circle at 50% 70%, #00FFFF 0%, transparent 40%)
          `,
          zIndex: 1
        }}
      ></div>
      
      <div className="relative z-10">
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter" style={neonGlow("#FF00FF")}>
          Nox <span className="text-white">Neon</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Futuristic design meets <NeonText color="#00FFFF">luminous art</NeonText>
        </p>
        <Button 
          onClick={() => setCurrentPage('collection')} 
          style={{ boxShadow: '0 0 25px rgba(0, 255, 255, 0.5)' }}
        >
          Discover the Collection
        </Button>
      </div>
    </div>
  );

  const CollectionPage = () => (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-16 text-center" style={neonGlow("#00FFFF")}>
          The <NeonText color="#FF00FF">Collection</NeonText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <CollectionItem
            name="Neon Sword"
            image="https://placehold.co/600x400/111/00FFFF?text=Neon+Sword+Anime"
            link="https://etsy.com"
          />
          <CollectionItem
            name="Cyber Dragon"
            image="https://placehold.co/600x400/111/FF00FF?text=Cyber+Dragon+Glow"
            link="https://etsy.com"
          />
          <CollectionItem
            name="Pixel Galaxy"
            image="https://placehold.co/600x400/111/8A2BE2?text=Pixel+Galaxy+Neon"
            link="https://etsy.com"
          />
          <CollectionItem
            name="Neon Samurai"
            image="https://placehold.co/600x400/111/FF00FF?text=Neon+Samurai+Art"
            link="https://etsy.com"
          />
        </div>
      </div>
    </div>
  );

  const CustomizePage = () => (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div 
          className="p-12 border-2 border-dashed border-violet-500/50 bg-black/40 backdrop-blur-sm"
          style={{
            boxShadow: '0 0 30px rgba(138, 43, 226, 0.2)'
          }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8" style={neonGlow("#8A2BE2")}>
            Coming <NeonText color="#00FFFF">Soon</NeonText>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Soon you’ll be able to design your own neon. <br />
            A unique creation, tailored to your world.
          </p>
          <div className="flex justify-center">
            <Button variant="secondary" style={{ pointerEvents: 'none', opacity: 0.7 }}>
              Design Studio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-12" style={neonGlow("#FF00FF")}>
          About <NeonText color="#00FFFF">Nox Neon</NeonText>
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
          Born from a passion for gaming, anime, and futuristic design, Nox Neon Lights transforms imagination into light. 
          Our mission is simple: elevate your space with luminous art that inspires.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 border border-cyan-500/30">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-transparent rounded-full flex items-center justify-center text-2xl font-black" style={neonGlow("#00FFFF")}>
              G
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Gaming</h3>
            <p className="text-gray-400">Inspired by the digital frontier</p>
          </div>
          <div className="p-6 border border-fuchsia-500/30">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-fuchsia-500 to-transparent rounded-full flex items-center justify-center text-2xl font-black" style={neonGlow("#FF00FF")}>
              A
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Anime</h3>
            <p className="text-gray-400">Bringing stories to luminous life</p>
          </div>
          <div className="p-6 border border-violet-500/30">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-violet-500 to-transparent rounded-full flex items-center justify-center text-2xl font-black" style={neonGlow("#8A2BE2")}>
              D
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Design</h3>
            <p className="text-gray-400">Futuristic aesthetics, perfected</p>
          </div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-6xl font-black mb-4" style={neonGlow("#FF00FF")}>
            NN
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500 mx-auto animate-pulse"></div>
        </div>
      </div>
    );
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'collection':
        return <CollectionPage />;
      case 'customize':
        return <CustomizePage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div 
      className="min-h-screen bg-black text-white"
      style={{
        fontFamily: "'Orbitron', 'Audiowide', sans-serif",
      }}
    >
      {/* Global Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Audiowide&family=Exo+2:wght@300;400;600&display=swap');
          
          body {
            font-family: 'Exo 2', sans-serif;
            background-color: #000;
            color: #fff;
          }
          
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
          
          ::selection {
            background: #FF00FF;
            color: white;
          }
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b border-gray-800 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-2xl font-black tracking-tighter"
              style={neonGlow("#FF00FF")}
            >
              Nox Neon
            </button>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'collection', 'customize', 'about'].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`uppercase tracking-wider transition-colors duration-300 text-sm ${
                    currentPage === page 
                      ? 'text-cyan-400' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  style={
                    currentPage === page 
                      ? { textShadow: '0 0 10px rgba(0, 255, 255, 0.7)' }
                      : {}
                  }
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              ))}
            </div>

            <Button href="https://etsy.com" variant="primary" className="hidden md:inline-flex">
              Visit Etsy
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-gray-800 z-30">
        <div className="flex">
          {['home', 'collection', 'customize', 'about'].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className="flex-1 py-3 text-xs uppercase tracking-wider"
              style={
                currentPage === page 
                  ? { ...neonGlow("#00FFFF"), fontSize: '0.65rem' }
                  : { color: '#666' }
              }
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-20 pb-16 md:pb-0" style={{ minHeight: 'calc(100vh - 5rem)' }}>
        <PageTransition>
          {renderCurrentPage()}
        </PageTransition>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-8 mb-4 md:mb-0">
              <div className="text-sm opacity-70">
                <span className="font-black text-lg" style={neonGlow("#FF00FF")}>NN</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.065.049 1.79.218 2.428.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.638.416 1.363.465 2.428.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.79-.465 2.428a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.638.247-1.363.416-2.428.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.79-.218-2.428-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.638-.416-1.363-.465-2.428-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.065.218-1.79.465-2.428a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.638-.247 1.363-.416 2.428-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.467a3.332 3.332 0 100-6.664 3.332 3.332 0 000 6.664zm5.338-6.865c.74 0 1.299-.227 1.757-.684.457-.457.685-1.015.685-1.758s-.228-1.3-.685-1.757c-.458-.457-1.017-.685-1.758-.685s-1.3.228-1.757.685c-.457.458-.685 1.017-.685 1.758s.227 1.3.685 1.757c.458.457 1.015.685 1.757.685z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-fuchsia-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.163c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="text-sm text-gray-400">
              contact@noxneon.com
            </div>
            
            <Button href="https://etsy.com" variant="secondary" className="mt-4 md:mt-0">
              Visit Etsy Shop
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;