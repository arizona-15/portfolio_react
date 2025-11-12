import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <p className="text-blue-100">
          © 2025 Arizona Damanik. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
