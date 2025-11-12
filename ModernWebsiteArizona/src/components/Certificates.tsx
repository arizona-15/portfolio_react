import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { certificates } from '../data/certificates';
import { Award, X, Check } from 'lucide-react';

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  thumbnail: string;
  pdfUrl: string;
  issued?: string;
  category?: string;
  overview?: string;
  details?: string[];
};

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const openCertificate = (cert: Certificate) => {
    setSelectedCert(cert);
  };

  const closeCertificate = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certificates" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-blue-900 mb-4">Certificates</h2>
          <p className="text-gray-600">Professional certifications and achievements</p>
        </motion.div>

        {certificates.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openCertificate(cert)}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group border border-gray-100"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={cert.thumbnail}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-blue-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-600">{cert.issuer}</p>
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
              <Award className="w-10 h-10 text-blue-600" />
            </div>
            <p className="text-gray-500 mb-2">No certificates yet</p>
            <p className="text-gray-400">Add your certificates to <code className="bg-gray-100 px-2 py-1 rounded">src/data/certificates.js</code></p>
          </motion.div>
        )}
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={closeCertificate}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden max-h-[94vh] md:max-h-[92vh] flex flex-col mx-auto"
            >
              {/* Close Button - Positioned absolutely */}
              <button
                onClick={closeCertificate}
                className="absolute top-3 right-3 md:top-5 md:right-5 z-20 p-2 md:p-3 bg-white hover:bg-gray-100 rounded-full transition-all duration-200 cursor-pointer shadow-2xl border-2 border-gray-300 hover:border-gray-400"
                aria-label="Close preview"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
              </button>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Left Side - Certificate Image */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 md:p-10 flex items-center justify-center min-h-[200px] md:min-h-0">
                    <div className="w-full max-w-md">
                      <img
                        src={selectedCert.thumbnail}
                        alt={selectedCert.title}
                        className="w-full h-auto rounded-lg shadow-lg border-2 md:border-4 border-white"
                      />
                    </div>
                  </div>

                  {/* Right Side - Certificate Details */}
                  <div className="p-6 sm:p-8 md:p-10 flex flex-col">
                    {/* Header */}
                    <div className="mb-5 md:mb-6">
                      <p className="text-blue-600 mb-2 text-sm md:text-base">{selectedCert.issuer}</p>
                      <h2 className="text-gray-900 mb-3 md:mb-4 pr-8">{selectedCert.title}</h2>
                      
                      {/* Meta Information */}
                      {(selectedCert.issued || selectedCert.category) && (
                        <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm">
                          {selectedCert.issued && (
                            <div className="flex items-center gap-2">
                              <span className="text-gray-500">Issued:</span>
                              <span className="text-gray-900">{selectedCert.issued}</span>
                            </div>
                          )}
                          {selectedCert.category && (
                            <div className="flex items-center gap-2">
                              <span className="text-gray-500">Category:</span>
                              <span className="text-gray-900">{selectedCert.category}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Overview */}
                    {selectedCert.overview && (
                      <div className="mb-5 md:mb-6 flex-1">
                        <h3 className="text-gray-900 mb-2 md:mb-3">Overview</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          {selectedCert.overview}
                        </p>
                      </div>
                    )}

                    {/* View PDF Button */}
                    <div className="pt-5 md:pt-6 border-t border-gray-200">
                      <a
                        href={selectedCert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-5 py-3 md:px-6 md:py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg text-sm md:text-base"
                      >
                        View Full Certificate (PDF)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
