import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // If not on home page, navigate home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-dark/95 backdrop-blur-md shadow-lg border-b border-accent/10' : 'bg-primary-dark/50 backdrop-blur-sm'}`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => handleNavClick('#home')} className="flex items-center gap-3 focus:outline-none">
              <div className="text-2xl sm:text-3xl font-bold text-accent">JWA</div>
              <div className="hidden sm:block text-xs sm:text-sm text-gray-300 font-medium tracking-wider">
                JOE WEB & APPS
              </div>
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button key={link.name} onClick={() => handleNavClick(link.href)} className="text-gray-300 hover:text-accent font-medium transition-colors duration-300 relative group focus:outline-none">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button onClick={() => handleNavClick('#contact')} className="bg-accent text-primary px-6 py-2.5 rounded-full font-semibold hover:bg-accent-dark transform hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/30 focus:outline-none">
                Get Started
              </button>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-accent text-3xl focus:outline-none z-50 relative" aria-label="Toggle menu">
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-primary-dark z-40 md:hidden pt-20 overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => handleNavClick(link.href)} className="text-2xl text-gray-300 hover:text-accent font-semibold transition-colors duration-300">
                {link.name}
              </button>
            ))}
            <button onClick={() => handleNavClick('#contact')} className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-xl hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/30">
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
