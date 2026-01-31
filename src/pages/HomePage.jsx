import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Users, ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import BlogCard from '@/components/BlogCard';
import ReferencesCarousel from '@/components/ReferencesCarousel';
import KioskPromo from '@/components/KioskPromo';
import { services } from '@/data/services';
import { blogs } from '@/data/blogs';

const HomePage = () => {
  const featuredServices = services.slice(0, 4);
  const recentBlogs = blogs.slice(0, 9);

  const features = [
    {
      icon: Sparkles,
      title: 'Geniş Teknolojik Ürün Yelpazesi',
      description: 'Etkinliklerde kullanılan çeşitli teknolojik ürünleri kiralayarak, müşterilerin ihtiyacına yönelik en uygun çözümleri sunuyoruz.'
    },
    {
      icon: Zap,
      title: 'Yüksek Kalite ve Güvenilirlik',
      description: 'Teknolojiyi etkinliklerinize taşımak için buradayız! Geniş ürün yelpazemiz ve yenilikçi çözümlerimizle etkinliklerinizi bir üst seviyeye çıkarıyoruz.'
    },
    {
      icon: Users,
      title: 'Profesyonel Destek ve Danışmanlık',
      description: 'Etkinliğinizin her aşamasında yanınızdayız! Teknik destek ekibimiz sorunlara anında çözüm sunarken, uzman danışmanlarımız ihtiyaçlarınıza özel rehberlik sağlar.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0E27]">
      <Helmet>
        <title>Etkinlik Kiralama - Profesyonel Etkinlik Teknolojileri</title>
        <meta name="description" content="360 Booth, Photobooth, E-Spor, VR Etkinlikleri ve daha fazlası. Etkinliklerinizi unutulmaz kılacak profesyonel teknoloji kiralama hizmetleri." />
      </Helmet>

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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display">
              Etkinlik Profesyonellik Gerektirir!
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              360 Booth, Photobooth, E-Spor, VR deneyimleri ve daha fazlası ile etkinliklerinize profesyonel dokunuş
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

      {/* Kiosk Promo Section */}
      <KioskPromo />

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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              Hizmetlerimiz
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

      {/* Features - Neden Bizi Seçmelisiniz */}
      <section className="py-20 bg-white dark:bg-[#0A0E27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              Neden Bizi Tercih Etmelisiniz?
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
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
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

      {/* References Carousel */}
      <ReferencesCarousel />

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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                Hakkımızda
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                ECR Etkinlik Bilgisayar olarak 2014’ten beri etkinliklere ve kurumlara teknoloji kiralama, kurulum ve saha desteğini tek çatı altında sunuyoruz. Güçlü operasyon kabiliyetimiz ve sahada hazır teknik ekibimizle ihtiyaca en uygun kurguyu hızla devreye alır, etkinliklerin kesintisiz ilerlemesini sağlarız.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Meta, Honda, Red Bull, Trendyol, Porsche, TRT, Vakıfbank, Netflix, Akbank gibi önde gelen markalarla çalışarak edindiğimiz deneyimle, her projeye özel çözümler üretiyoruz.
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
    </div>
  );
};

export default HomePage;
