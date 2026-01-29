
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogCard = ({ blog, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/blog/${blog.slug}`}>
        <motion.div
          whileHover={{ y: -8 }}
          className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(blog.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-['Space_Grotesk'] line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
              {blog.excerpt}
            </p>
            <div className="flex items-center text-purple-500 dark:text-purple-400 font-medium group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
              Devamını Oku
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
