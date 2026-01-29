
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const isPremium = service.isPremium;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={isPremium ? 'relative' : ''}
    >
      {/* Premium Glow Effect */}
      {isPremium && (
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 rounded-2xl opacity-50 blur-lg animate-pulse" />
      )}

      <Link to={`/hizmetler/${service.slug}`}>
        <motion.div
          whileHover={{ y: -8 }}
          className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full ${isPremium
            ? 'bg-gradient-to-br from-purple-900 via-purple-800 to-cyan-900 border-2 border-purple-500/30'
            : 'bg-white dark:bg-gray-800'
            }`}
        >
          {/* Premium Badge */}
          {isPremium && (
            <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span className="text-xs font-bold text-white uppercase tracking-wide">Premium</span>
            </div>
          )}

          <div className="relative h-64 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${isPremium ? 'object-center' : ''}`}
            />
            <div className={`absolute inset-0 ${isPremium ? 'bg-gradient-to-t from-purple-900/80 via-transparent to-transparent' : 'bg-gradient-to-t from-black/60 via-black/20 to-transparent'}`} />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                {service.title}
              </h3>
            </div>
          </div>
          <div className={`p-6 ${isPremium ? 'bg-gradient-to-b from-transparent to-purple-900/50' : ''}`}>
            <p className={`line-clamp-3 ${isPremium ? 'text-gray-200' : 'text-gray-600 dark:text-gray-300'}`}>
              {service.description}
            </p>
            <div className={`mt-4 flex items-center font-medium transition-colors ${isPremium
              ? 'text-cyan-400 group-hover:text-cyan-300'
              : 'text-purple-500 dark:text-purple-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400'
              }`}>
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

