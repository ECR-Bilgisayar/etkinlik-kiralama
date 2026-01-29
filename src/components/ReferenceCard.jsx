import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const ReferenceCard = ({ reference, index }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white dark:bg-[#0d1229] rounded-2xl p-8 shadow-sm dark:shadow-none border border-gray-200 dark:border-white/10 transition-all duration-300 h-40 flex items-center justify-center"
    >
      <img
        src={theme === 'dark' ? reference.logoWhite : reference.logo}
        alt={reference.name}
        className="max-h-full max-w-full object-contain filter hover:scale-110 transition-transform duration-300"
        onError={(e) => {
          console.error(`Logo yüklenemedi: ${e.target.src}`);
          e.target.style.display = 'none';
        }}
      />
    </motion.div>
  );
};

export default ReferenceCard;
