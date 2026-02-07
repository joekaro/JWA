import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPolicy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-primary-dark pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="flex items-center gap-2 text-accent hover:text-accent-dark mb-8 transition-colors">
              <FiArrowLeft /> Back to Home
            </Link>
            
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                <p className="leading-relaxed">JWA - Joe Web & Apps ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p className="leading-relaxed mb-4">We collect the following types of information:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Personal information you provide (name, email, phone number)</li>
                  <li>Project details and service requests submitted through contact forms</li>
                  <li>Technical data (IP address, browser type, device information)</li>
                  <li>Usage data (pages visited, time spent on site)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">We use your information to:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Respond to your inquiries and provide requested services</li>
                  <li>Send project updates and communications</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p className="leading-relaxed">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="leading-relaxed">If you have questions about this Privacy Policy, please contact us at:</p>
                <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <p>Email: jeowebapp360@gmail.com</p>
                  <p>Phone: +234 816 137 5240</p>
                  <p>Location: Lagos, Nigeria</p>
                </div>
              </section>
            </div>

            <div className="mt-12 text-center">
              <button onClick={scrollToTop} className="bg-accent text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent-dark transition-all duration-300">
                Back to Top
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
