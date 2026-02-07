import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiShoppingCart, FiLayout, FiDatabase, FiZap } from 'react-icons/fi';

const Services = () => {
  const scrollToContact = (service: string) => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const serviceSelect = document.querySelector('select[name="service"]') as HTMLSelectElement;
        if (serviceSelect) {
          serviceSelect.value = service;
          serviceSelect.focus();
        }
      }, 500);
    }
  };

  const services = [
    {
      icon: <FiCode className="text-4xl" />,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
      serviceValue: 'web-dev',
    },
    {
      icon: <FiSmartphone className="text-4xl" />,
      title: 'Web Applications',
      description: 'Full-stack web apps with powerful features and seamless functionality for your business needs.',
      features: ['Custom Features', 'User Authentication', 'Real-time Updates', 'API Integration'],
      serviceValue: 'web-app',
    },
    {
      icon: <FiShoppingCart className="text-4xl" />,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with Paystack integration, inventory management, and admin dashboards.',
      features: ['Paystack Payment', 'Inventory System', 'Order Management', 'Analytics Dashboard'],
      serviceValue: 'ecommerce',
    },
    {
      icon: <FiLayout className="text-4xl" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed to engage users and drive conversions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      serviceValue: 'design',
    },
    {
      icon: <FiDatabase className="text-4xl" />,
      title: 'Booking Systems',
      description: 'Appointment scheduling and booking platforms with calendar integration and notifications.',
      features: ['Calendar Sync', 'Email Reminders', 'Payment Processing', 'Customer Management'],
      serviceValue: 'booking',
    },
    {
      icon: <FiZap className="text-4xl" />,
      title: 'Performance Optimization',
      description: 'Speed up your existing website with optimization techniques and best practices.',
      features: ['Speed Audit', 'Code Optimization', 'Image Compression', 'Caching Setup'],
      serviceValue: 'other',
    },
  ];

  return (
    <section id="services" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mt-4 mb-6">What We Offer</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive web solutions tailored to your business needs. From design to deployment, we've got you covered.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10 }} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 border border-gray-700 hover:border-accent/50 group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent-dark/20 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300 border border-accent/30">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button onClick={() => scrollToContact(service.serviceValue)} className="w-full bg-accent/10 text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-primary transition-all duration-300 border border-accent/30 hover:border-accent">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 bg-gradient-to-r from-accent to-accent-dark rounded-3xl p-12 text-center shadow-2xl shadow-accent/30">
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">Ready to Start Your Project?</h3>
          <p className="text-primary/90 text-lg mb-8 max-w-2xl mx-auto">Let's transform your ideas into reality. Get in touch today and receive a free consultation.</p>
          <button onClick={() => scrollToContact('')} className="bg-primary text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-dark transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
