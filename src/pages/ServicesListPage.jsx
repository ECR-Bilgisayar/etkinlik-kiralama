import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

const ServicesListPage = () => {
  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz - Etkinlik Kiralama</title>
        <meta name="description" content="Etkinlikleriniz için sunduğumuz tüm teknoloji kiralama hizmetleri." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#0a0e27] dark:via-black dark:to-[#0a0e27] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Etkinlikleriniz için en son teknoloji ürünleri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesListPage;
