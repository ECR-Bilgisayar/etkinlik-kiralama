import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { services } from '@/data/services';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/hizmetler" replace />;
  }

  const relatedServices = services
    .filter(s => s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0E27]">
      <Helmet>
        <title>{service.title} - Etkinlik Kiralama</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-[400px] mb-16">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
              <Link
                to="/hizmetler"
                className="inline-flex items-center text-white hover:text-gray-200 transition-colors mb-6"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Hizmetlere Dön
              </Link>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-white font-display"
              >
                {service.title}
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {service.fullDescription}
                </p>

                {service.useCases && service.useCases.length > 0 && (
                  <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                      Kullanım Alanları
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {service.useCases.map((useCase, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-xl border border-purple-200 dark:border-purple-500/20 overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <span className="text-lg font-semibold text-gray-900 dark:text-white">
                              {useCase.title}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-gray-700 dark:text-gray-300">
                              {useCase.description}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-24 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                  İletişime Geçin
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {service.title} hizmeti hakkında detaylı bilgi almak ve rezervasyon yapmak için bizimle iletişime geçebilirsiniz.
                </p>
                <Link to="/iletisim">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all"
                  >
                    Teklif Alın
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-display">
                Benzer Hizmetler
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedServices.map((relatedService, index) => (
                  <ServiceCard key={relatedService.id} service={relatedService} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
