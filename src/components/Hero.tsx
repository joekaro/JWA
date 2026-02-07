import { motion } from 'framer-motion';
import { HiArrowRight, HiPlay } from 'react-icons/hi2';
import { FiCode, FiZap, FiTrendingUp } from 'react-icons/fi';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: <FiCode className="text-xl sm:text-2xl" />, value: '150+', label: 'Projects' },
    { icon: <FiZap className="text-xl sm:text-2xl" />, value: '98%', label: 'Happy Clients' },
    { icon: <FiTrendingUp className="text-xl sm:text-2xl" />, value: '5+', label: 'Years' },
  ];

  return (
    <section
      id="home"
      className="
        relative flex items-start lg:items-center
        min-h-[70vh] sm:min-h-[75vh] lg:min-h-screen
        overflow-hidden
        bg-gradient-to-br from-primary via-primary-dark to-primary
        pt-16 sm:pt-20 lg:pt-24 pb-12
      "
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-72 h-72 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-72 h-72 sm:w-96 sm:h-96 bg-accent-orange/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* LEFT */}
          <div className="space-y-4 sm:space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-accent/20 text-accent px-3 py-2 rounded-full text-xs sm:text-sm font-semibold border border-accent/30"
            >
              🚀 Welcome to JWA
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight"
            >
              Build Your Digital
              <span className="text-accent block mt-2">Future Today</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed"
            >
              We craft exceptional websites and web applications that drive growth and transform your vision into digital reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={scrollToContact}
                className="group bg-accent text-primary px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-accent-dark transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                Start Your Project
                <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToPortfolio}
                className="group bg-white/10 text-white border-2 border-accent px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-primary transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <HiPlay className="text-lg" />
                View Our Work
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-700"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center text-accent mb-1">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT (UNCHANGED, DESKTOP ONLY) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-6 border border-accent/20"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center border border-accent/30">
                    <FiCode className="text-2xl text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Web Dev</h3>
                    <p className="text-gray-400 text-sm">Modern</p>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-xl p-4 border border-accent/30">
                  <div className="flex gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <div className="font-mono text-xs text-purple-400">
                    const <span className="text-white">app</span> = <span className="text-accent">&apos;JWA&apos;</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {['React', 'Node', 'TS'].map((tech, i) => (
                    <div
                      key={i}
                      className="bg-gray-800/50 border border-accent/20 rounded-lg py-2 text-center text-xs font-semibold text-accent"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{ y: [0, 30, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-accent to-accent-dark rounded-2xl shadow-xl flex items-center justify-center"
              >
                <span className="text-3xl">⚡</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -30, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-accent-orange to-yellow-500 rounded-2xl shadow-xl flex items-center justify-center"
              >
                <span className="text-4xl">🚀</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-8 flex justify-center lg:absolute lg:bottom-6 lg:left-0 lg:right-0"
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs font-medium">Scroll Down</span>
            <div className="w-5 h-8 border-2 border-accent/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-accent rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
