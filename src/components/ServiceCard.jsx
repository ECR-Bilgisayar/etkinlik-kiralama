
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/hizmetler/${service.slug}`}>
        <motion.div
          whileHover={{ y: -8 }}
          className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                {service.title}
              </h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
              {service.description}
            </p>
            <div className="mt-4 flex items-center text-purple-500 dark:text-purple-400 font-medium group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
              Detayları Gör
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
