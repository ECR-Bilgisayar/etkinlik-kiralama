import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const ReferenceCard = ({ reference, index }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-[#0d1229] rounded-2xl p-8 shadow-sm dark:shadow-none border border-gray-200 dark:border-white/10 transition-all duration-300"
    >
      <div className="flex items-center justify-center h-24 mb-6 bg-gray-50 dark:bg-white/5 rounded-xl p-4">
        <img
          src={theme === 'dark' ? reference.logoWhite : reference.logo}
          alt={reference.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4 font-display">
        {reference.name}
      </h3>
      <div className="space-y-3 mb-4">
        <div className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
          <Building2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
          <span>{reference.project}</span>
        </div>
      </div>
      <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm">
        {reference.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {reference.services.map((service, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium"
          >
            {service}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ReferenceCard;
