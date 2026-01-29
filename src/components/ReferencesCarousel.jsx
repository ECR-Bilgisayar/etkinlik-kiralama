import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const ReferencesCarousel = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Referanslar listesi - dark mode için beyaz olanlar, light mode için normal olanlar
  const references = [
    { name: 'Akbank', normal: '/akbank.png', white: '/akbank.png' },
    { name: 'Honda', normal: '/honda-logo-4.svg', white: '/honda-logo-4.svg' },
    { name: 'Meta', normal: '/meta-quest-1.svg', white: '/meta-beyaz.png' },
    { name: 'Netflix', normal: '/netflix-3.svg', white: '/netflix-3.svg' },
    { name: 'Porsche', normal: '/porsche-2.svg', white: '/porsche-beyaz.png' },
    { name: 'Redbull', normal: '/redbullenergydrink.svg', white: '/redbullenergydrink.svg' },
    { name: 'Trendyol', normal: '/Trendyol_online.png', white: '/trendyol-beyaz.png' },
    { name: 'TRT', normal: '/TRT_logo_(2018-).svg.png', white: '/TRT_logo_(2018-).svg.png' },
    { name: 'Vakıfbank', normal: '/vakifbank.png', white: '/vakifbank.png' }
  ];

  // Otomatik kaydırma
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % references.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [references.length]);

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0a0e27]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Referanslarımız
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Türkiye'nin önde gelen markalarına hizmet veriyoruz
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${currentIndex * (100 / 3)}%`,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          >
            {[...references, ...references, ...references].map((ref, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white dark:bg-[#0d1229] p-6 rounded-2xl shadow-sm dark:shadow-none border border-gray-200 dark:border-white/10 h-32 flex items-center justify-center">
                  <img
                    src={theme === 'dark' ? ref.white : ref.normal}
                    alt={ref.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      console.error(`Logo yüklenemedi: ${e.target.src}`);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {references.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'w-8 bg-gradient-to-r from-purple-500 to-blue-500'
                  : 'bg-gray-300 dark:bg-gray-600'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesCarousel;
