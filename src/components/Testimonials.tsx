import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Prince Akachi',
      role: 'CEO, TechHub Lagos',
      image: 'https://images.unsplash.com/photo-1533108344127-a586d2b02479?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlnZXJpYW4lMjBtYW58ZW58MHx8MHx8fDA%3D',
      text: 'Working with JWA was an absolute pleasure. They delivered our e-commerce platform with Paystack integration ahead of schedule. The attention to detail and understanding of the Nigerian market was outstanding.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Chiamaka Okonkwo',
      role: 'Founder, Glam Beauty NG',
      image: 'https://images.unsplash.com/photo-1602342323893-b11f757957c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pZ2VyaWFuJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
      text: 'Our online beauty store is now thriving! JWA built us a stunning website with smooth payment integration. Sales have increased by 200% since launch. Highly recommend for any Nigerian business!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Irene Strong',
      role: 'Director, TechVentures',
      image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww',
      text: 'The team transformed our vision into reality. Our new website not only looks amazing but has increased our conversion rate by 150%. Professional service from start to finish.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Ngozi Eze',
      role: 'Owner, Mama Ngozi Kitchen',
      image: 'https://images.unsplash.com/photo-1615453262312-022a72d3842a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlnZXJpYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D',
      text: 'Our restaurant booking system is fantastic! Customers can now easily make reservations online. The team was patient with all our requests and delivered exactly what we needed.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      role: 'CEO, Global Solutions',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW58ZW58MHx8MHx8fDA%3D',
      text: 'JWA built our corporate website and it exceeded all expectations. The modern design and smooth functionality have impressed all our clients. Best investment for our digital presence!',
      rating: 5,
    },
    {
      id: 6,
      name: 'Tunde Adeleke',
      role: 'Director, Abuja Properties',
      image: 'https://images.unsplash.com/photo-1620932934088-fbdb2920e484?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnZXJpYW4lMjBtYW58ZW58MHx8MHx8fDA%3D',
      text: 'Our real estate platform is now the best in Abuja! Property listings are beautiful, search is fast, and clients love the user experience. JWA truly understands what businesses need.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-primary to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From Lagos to London, our clients love the quality and dedication we bring to every project.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-accent/20"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-accent shadow-lg shadow-accent/30"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <FiStar key={i} className="text-accent-orange fill-accent-orange text-xl" />
                  ))}
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                  "{testimonials[activeIndex].text}"
                </p>

                <div>
                  <h4 className="font-bold text-xl text-white">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-gray-800 border-2 border-accent/30 flex items-center justify-center hover:border-accent hover:bg-accent hover:text-primary transition-all duration-300 shadow-md text-accent"
            >
              ←
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-accent'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-gray-800 border-2 border-accent/30 flex items-center justify-center hover:border-accent hover:bg-accent hover:text-primary transition-all duration-300 shadow-md text-accent"
            >
              →
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-accent/20">
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-accent/20">
            <div className="text-4xl font-bold text-accent mb-2">150+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-accent/20">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
