import { motion } from 'motion/react';
import { Wifi, Shield } from 'lucide-react';

const skills = [
  {
    name: 'Internet of Things (IoT)',
    icon: Wifi,
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-blue-900 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600">Core competencies and technical skills</p>
        </motion.div>

        <div className="flex justify-center gap-6 flex-wrap max-w-3xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow min-w-[280px]"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-gray-800">{skill.name}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
