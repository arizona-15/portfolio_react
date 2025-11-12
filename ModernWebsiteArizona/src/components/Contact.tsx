import { motion } from 'motion/react';
import { Linkedin, Instagram, Github } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/arizona-damanik-980134387',
    icon: Linkedin,
    color: 'hover:bg-blue-600',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/arizonaaa15',
    icon: Instagram,
    color: 'hover:bg-pink-600',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/arizona-15',
    icon: Github,
    color: 'hover:bg-gray-800',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-blue-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600">Connect with me on social media</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6 flex-wrap"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`flex items-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-xl shadow-lg ${link.color} transition-all group`}
              >
                <Icon className="w-6 h-6" />
                <span>{link.name}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
