import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const TermsOfService = () => {
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
            
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
                <p className="leading-relaxed">By accessing or using JWA - Joe Web & Apps services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
                <p className="leading-relaxed mb-4">JWA provides web development and design services, including but not limited to:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Website development and design</li>
                  <li>Web application development</li>
                  <li>E-commerce solutions</li>
                  <li>UI/UX design services</li>
                  <li>Website maintenance and support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li>50% deposit required before project commencement</li>
                  <li>Remaining 50% due upon project completion</li>
                  <li>Payment via bank transfer or Paystack</li>
                  <li>Late payments may incur additional fees</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="leading-relaxed">For questions about these Terms, please contact us at:</p>
                <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <p>Email: joewebapp360@gmail.com</p>
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

export default TermsOfService;
