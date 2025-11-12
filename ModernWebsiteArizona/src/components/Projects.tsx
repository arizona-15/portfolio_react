import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { FolderOpen, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-blue-900 mb-4">Projects</h2>
          <p className="text-gray-600">Featured works and personal projects</p>
        </motion.div>

        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-blue-900 flex-1">{project.title}</h3>
                    {project.category && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm ml-2">
                        {project.category}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
              <FolderOpen className="w-10 h-10 text-blue-600" />
            </div>
            <p className="text-gray-500 mb-2">No projects yet</p>
            <p className="text-gray-400">Add your projects to <code className="bg-gray-100 px-2 py-1 rounded">src/data/projects.js</code></p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
