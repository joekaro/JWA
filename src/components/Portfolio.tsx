import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web App',
      description: 'Full-stack online store with Paystack payment integration, admin dashboard, and inventory management.',
      image: 'https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2026/01/696ca5195a976736296712.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Paystack'],
    },
    {
      id: 2,
      title: 'Corporate Website',
      category: 'Website',
      description: 'Modern business website with responsive design, contact forms, and SEO optimization.',
      image: 'https://r2.siteinspire.com/cdn-cgi/image/width=640,height=400,quality=75,format=auto,metadata=none,gravity=top,fit=crop,compress=true/screengrabs/images/000/017/872/original-f9b41de365bc0f218060dc2089ab4c39.png?ar=16/10',
      tags: ['React', 'Tailwind', 'TypeScript'],
    },
    {
      id: 3,
      title: 'Booking System',
      category: 'Web App',
      description: 'Appointment scheduling system with calendar integration and payment processing.',
      image: 'https://simplybook.me/build/images/booking-templates/new-demo/personal.fe868e62.png',
      tags: ['React', 'Express', 'PostgreSQL'],
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'Website',
      description: 'Beautiful restaurant website with menu showcase, online ordering, and reservation system.',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/meal-free-template.jpg.avif',
      tags: ['React', 'Framer Motion', 'Tailwind'],
    },
    {
      id: 5,
      title: 'Task Management App',
      category: 'Web App',
      description: 'Productivity app with drag-and-drop kanban boards, team collaboration, and analytics.',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/admindek-free-angular-crm-dashboard.jpg.avif',
      tags: ['React', 'Node.js', 'Socket.io'],
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      category: 'Website',
      description: 'Property listing website with advanced search, filters, and map integration.',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/webify-real-estate-wordpress-theme.jpg.avif',
      tags: ['React', 'Google Maps API', 'Firebase'],
    },
    {
      id: 7,
      title: 'Fitness Tracker',
      category: 'Web App',
      description: 'Health and fitness tracking application with workout logs, progress charts, and meal planning.',
      image: 'https://www.notion.com/_next/image?url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Ftemplate%2F262f4174-51a8-4a9a-a2e3-a27f101f2922%2F1757495028803%2Fdesktop.jpg&w=1920&q=75',
      tags: ['React', 'Chart.js', 'Node.js'],
    },
    {
      id: 8,
      title: 'Portfolio Website',
      category: 'Website',
      description: 'Creative portfolio site for a photographer with image galleries and client testimonials.',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/victim-portfolio-website-template.jpg.avif',
      tags: ['React', 'Three.js', 'Tailwind'],
    },
    {
      id: 9,
      title: 'Delivery App',
      category: 'Web App',
      description: 'Food delivery platform with real-time tracking, Paystack payments, and vendor management.',
      image: 'https://www.glideapps.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fstore-assets%252FXQTGIzW0odaAjHEIDnIV%252F11fea4ef-6fbc-456b-a8e4-37b4ab37dba9.png&w=1920&q=75',
      tags: ['React', 'Node.js', 'Socket.io', 'Paystack'],
    },
    {
      id: 10,
      title: 'Healthcare Portal',
      category: 'Web App',
      description: 'Patient management system with appointment booking, medical records, and telemedicine features.',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/jevelin-doctor-website-template.jpg.avif',
      tags: ['React', 'Express', 'MongoDB', 'WebRTC'],
    },
    {
      id: 11,
      title: 'Travel Agency Site',
      category: 'Website',
      description: 'Stunning travel website with destination guides, tour packages, and online booking.',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/tralive-free-template.jpg.avif',
      tags: ['React', 'Tailwind', 'Paystack'],
    },
    {
      id: 12,
      title: 'Inventory System',
      category: 'Web App',
      description: 'Comprehensive inventory management with barcode scanning, stock alerts, and reporting.',
      image: 'https://www.glideapps.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fstore-assets%2Fj7FQym3nDFe47Ku9fGKx%2F347fcd63-a7a9-4019-8ad4-74e9db164cbe.png&w=1920&q=75',
      tags: ['React', 'Node.js', 'PostgreSQL', 'PDF'],
    },
  ];

  const categories = ['All', 'Website', 'Web App'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mt-4 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look at some of our recent projects. We've completed over 150+ successful projects across various industries.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-accent text-primary shadow-lg shadow-accent/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <p className="text-gray-400">
            Showing <span className="font-bold text-accent">{filteredProjects.length}</span> projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 border border-gray-700 hover:border-accent/50"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3 w-full">
                    <button className="flex-1 bg-accent text-primary px-4 py-2 rounded-lg font-semibold hover:bg-accent-dark transition-colors flex items-center justify-center gap-2">
                      <FiExternalLink />
                      Demo
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-accent hover:text-primary transition-colors border border-white/30">
                      <FiGithub className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/30">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-white mt-3 mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs text-gray-300 bg-gray-700/50 px-3 py-1 rounded-full border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Interested in working with us on your project?
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-dark transform hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/30 inline-flex items-center gap-2"
          >
            Start Your Project
            <span className="text-xl">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
