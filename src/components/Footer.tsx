import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-accent">JWA</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Joe Web & Apps - We craft exceptional websites and web applications that transform your business vision into digital reality.</p>
            <div className="flex gap-4">
              <a href="https://wa.me/2348161375240" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 border border-gray-700">
                <FaWhatsapp className="text-lg" />
              </a>
              <a href="https://www.instagram.com/joewebapp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 border border-gray-700">
                <FaInstagram className="text-lg" />
              </a>
              <a href="https://www.tiktok.com/@joewebapp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 border border-gray-700">
                <FaTiktok className="text-lg" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#home" className="text-gray-400 hover:text-accent transition-colors text-sm">Home</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-accent transition-colors text-sm">Services</a></li>
              <li><a href="/#portfolio" className="text-gray-400 hover:text-accent transition-colors text-sm">Portfolio</a></li>
              <li><a href="/#testimonials" className="text-gray-400 hover:text-accent transition-colors text-sm">Testimonials</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-accent transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm">Web Development</span></li>
              <li><span className="text-gray-400 text-sm">Web Applications</span></li>
              <li><span className="text-gray-400 text-sm">E-commerce Solutions</span></li>
              <li><span className="text-gray-400 text-sm">UI/UX Design</span></li>
              <li><span className="text-gray-400 text-sm">Backend Development</span></li>
              <li><span className="text-gray-400 text-sm">SEO & Optimization</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FiMail className="text-accent mt-1 flex-shrink-0" />
                <a href="mailto:YOUR_EMAIL@example.com" className="hover:text-accent transition-colors">joewebapp360@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FiPhone className="text-accent mt-1 flex-shrink-0" />
                <a href="tel:+2348161375240" className="hover:text-accent transition-colors">+234 816 137 5240</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FiMapPin className="text-accent mt-1 flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">© {currentYear} JWA - Joe Web & Apps. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
