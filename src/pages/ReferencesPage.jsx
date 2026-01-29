import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ReferenceCard from '@/components/ReferenceCard';
import { references } from '@/data/references';

const ReferencesPage = () => {
  return (
    <>
      <Helmet>
        <title>Referanslarımız - Etkinlik Kiralama</title>
        <meta name="description" content="Çalıştığımız önde gelen markalar ve başarılı projelerimiz." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#0a0e27] dark:via-black dark:to-[#0a0e27] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Referanslarımız
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Türkiye'nin önde gelen markalarına hizmet veriyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {references.map((reference, index) => (
              <ReferenceCard key={reference.id} reference={reference} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferencesPage;
