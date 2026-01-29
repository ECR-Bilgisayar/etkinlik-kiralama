import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar } from 'lucide-react';
import { blogs } from '@/data/blogs';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#0a0e27] dark:via-black dark:to-[#0a0e27] py-20">
      <Helmet>
        <title>{blog.title} - Etkinlik Kiralama Blog</title>
        <meta name="description" content={blog.excerpt || blog.title} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Blog'a Dön
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-[#0d1229] rounded-3xl shadow-sm dark:shadow-none border border-gray-200 dark:border-white/10 overflow-hidden"
        >
          {blog.image && (
            <div className="h-96 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8 md:p-12">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              {blog.date}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              {blog.title}
            </h1>

            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content || blog.excerpt || '<p>İçerik yükleniyor...</p>' }}
            />
          </div>
        </motion.article>

        <div className="mt-12 text-center">
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Daha Fazla Blog Yazısı
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
