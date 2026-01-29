import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Users, Award, Sparkles } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Misyonumuz',
      description: 'Etkinlik sektöründe teknolojinin gücünü kullanarak, müşterilerimize unutulmaz deneyimler sunmak ve her etkinliği özel kılmak.'
    },
    {
      icon: Users,
      title: 'Vizyonumuz',
      description: 'Türkiye\'nin en güvenilir ve yenilikçi etkinlik teknolojileri tedarikçisi olmak, sektörde standartları belirlemek.'
    },
    {
      icon: Award,
      title: 'Değerlerimiz',
      description: 'Kalite, güvenilirlik, yenilikçilik ve müşteri memnuniyeti odaklı çalışma prensipleri.'
    },
    {
      icon: Sparkles,
      title: 'Yaklaşımımız',
      description: 'Her projeye özel çözümler üreterek, müşterilerimizin ihtiyaçlarına en uygun hizmeti sunmak.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hakkımızda - Etkinlik Kiralama</title>
        <meta name="description" content="Etkinlik teknolojileri konusunda uzman ekibimiz ve hizmetlerimiz hakkında bilgi edinin." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#0a0e27] dark:via-black dark:to-[#0a0e27]">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                Hakkımızda
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Etkinlik sektöründe teknoloji ve yenilikle fark yaratıyoruz
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                  Hikayemiz
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Dinamik kadromuz, her türlü etkinlikte müşteri taleplerine hızlıca yanıt verebilmek ve teknolojik altyapıyı sorunsuz bir şekilde sağlamak için sürekli olarak yenilikçi çözümler sunmaktadır.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Meta, Honda, Red Bull, Trendyol, Porsche, TRT, Vakıfbank, Netflix, Akbank gibi önde gelen markalarla çalışarak edindiğimiz deneyimle, her projeye özel çözümler üretiyoruz.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Etkinlik sektöründe teknolojinin gücünü kullanarak, müşterilerimize unutulmaz deneyimler sunmayı ve her etkinliği özel kılmayı hedefliyoruz.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
                  alt="Ekibimiz"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-display">
                Değerlerimiz
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Bizi biz yapan değerler
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-[#0d1229] p-8 rounded-2xl shadow-sm dark:shadow-none border border-gray-200 dark:border-white/10"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-display">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
