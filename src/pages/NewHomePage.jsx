
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Users, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import BlogCard from '@/components/BlogCard';
import ReferenceCard from '@/components/ReferenceCard';
import ContactForm from '@/components/ContactForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { services } from '@/data/services';
import { blogs } from '@/data/blogs';
import { references } from '@/data/references';

const NewHomePage = () => {
  const featuredServices = services.slice(0, 4);
  const recentBlogs = blogs.slice(0, 9);
  const allReferences = references;

  const features = [
    {
      icon: Sparkles,
      title: 'Yenilikçi Teknolojiler',
      description: '360 Booth, VR deneyimleri ve modern etkinlik teknolojileri ile unutulmaz anlar yaratıyoruz.'
    },
    {
      icon: Zap,
      title: 'Hızlı ve Profesyonel',
      description: 'Deneyimli ekibimiz ile etkinliklerinizi sorunsuz ve mükemmel şekilde organize ediyoruz.'
    },
    {
      icon: Users,
      title: 'Müşteri Memnuniyeti',
      description: 'Müşteri odaklı yaklaşımımız ile her projede %100 memnuniyet hedefliyoruz.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0E27]">
      <Helmet>
        <title>ECR Event - Profesyonel Etkinlik Organizasyon Hizmetleri</title>
        <meta name="description" content="360 Booth, Photobooth, E-Spor Turnuvaları, VR Deneyimleri ve daha fazlası. Etkinliklerinizi unutulmaz kılacak profesyonel hizmetler." />
      </Helmet>

      <Navbar />
      <FloatingWhatsApp />
      <ScrollToTopButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1701112501523-bc9f48e3753e"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-cyan-900/80 to-black/90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Space_Grotesk']">
              Etkinliklerinizi
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Unutulmaz Kılıyoruz
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              360 Booth, VR deneyimleri, E-Spor turnuvaları ve daha fazlası ile etkinliklerinize profesyonel dokunuş
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/hizmetler">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all"
                >
                  Hizmetleri Keşfet
                </motion.button>
              </Link>
              <Link to="/iletisim">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/30 transition-all"
                >
                  İletişime Geç
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-['Space_Grotesk']">
              Popüler Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              En çok tercih edilen etkinlik hizmetlerimiz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/hizmetler">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Tüm Hizmetleri Gör
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-[#0A0E27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-['Space_Grotesk']">
              Neden Bizi Seçmelisiniz?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-['Space_Grotesk']">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-['Space_Grotesk']">
              Blog Yazılarımız
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Etkinlik dünyasından haberler ve ipuçları
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Tüm Yazıları Gör
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-20 bg-white dark:bg-[#0A0E27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-['Space_Grotesk']">
              Referanslarımız
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Önde gelen markalarla çalışıyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReferences.map((reference, index) => (
              <ReferenceCard key={reference.id} reference={reference} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/referanslarimiz">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Tüm Referansları Gör
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500/10 to-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-['Space_Grotesk']">
                Hakkımızda
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                ECR Event, etkinlik sektöründe yenilikçi ve unutulmaz deneyimler yaratma tutkusuyla yola çıkmış bir organizasyon şirketidir. 360 Booth, VR deneyimleri, e-spor turnuvaları ve photobooth gibi modern teknolojileri etkinlik sektörüne entegre ederek, katılımcılara unutulmaz anlar yaşatıyoruz.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Meta, Honda, Red Bull, Trendyol gibi önde gelen markalarla çalışarak edindiğimiz deneyimle, her projeye özel çözümler üretiyoruz.
              </p>
              <Link to="/hakkimizda">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Devamını Oku
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
                alt="Hakkımızda"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-[#0A0E27]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-['Space_Grotesk']">
              İletişime Geçin
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Etkinlikleriniz için bize ulaşın
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewHomePage;
