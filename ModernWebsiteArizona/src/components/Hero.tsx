import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20"></div>
              <ImageWithFallback
                src="/icon/foto_profil-kece.jpg"
                alt="Arizona Damanik"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-blue-900 mb-4">Arizona Damanik</h1>
              <p className="text-blue-600 mb-6">
                D3 Computer Technology Student
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-700 mb-8 leading-relaxed"
            >
              A Diploma 3 Computer Technology student, I am building a strong technical foundation with a focused interest in <span className="text-blue-700">Cybersecurity</span> and <span className="text-blue-700">Internet of Things (IoT)</span>. I am a collaborative team player with strong communication skills, thriving in environments where I can contribute to a shared goal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4 flex-wrap justify-center md:justify-start"
            >
              <button
                onClick={() => scrollToSection('certificates')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View Certificates
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Projects
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
