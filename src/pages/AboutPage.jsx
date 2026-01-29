import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Users, Award, Sparkles } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Misyonumuz',
      description: 'Her etkinlik için doğru teknolojiyi doğru zaman ve koşullarda sunarak, müşterilerimizin etkinlik deneyimlerini mükemmelleştirmek. Güvenilir, kaliteli ve profesyonel hizmet anlayışımızla, teknolojiyi etkinliklerin ayrılmaz bir parçası haline getirerek müşteri memnuniyetini ön planda tutmak.'
    },
    {
      icon: Users,
      title: 'Vizyonumuz',
      description: 'Etkinliklerde teknolojinin gücünü keşfederek, her etkinliği unutulmaz kılmak ve sektördeki lider çözüm sağlayıcı olmak. Yenilikçi yaklaşımlarımız ve kaliteli ürün yelpazemizle, her türlü organizasyonun teknolojik ihtiyaçlarını kusursuz bir şekilde karşılamak.'
    },

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
                Etkinlik Kiralama Sistemleri
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
                  Her etkinlik bir hikâye anlatır. ECR Etkinlik Bilgisayar olarak biz, bu hikâyeyi teknolojiyle zenginleştirmek ve unutulmaz deneyimlere dönüştürmek için buradayız. Organizasyonların karmaşık yapısını sadeleştiriyor, etkinlik sahiplerinin yalnızca hayal ettiklerini gerçeğe dönüştürmenin keyfini yaşamasını sağlıyoruz.                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Genç ve dinamik ekibimiz, her projeye taze bir enerji ve yaratıcı bir bakış açısı katar. Teknolojiye olan tutkumuz ve yenilikçi yaklaşımımız sayesinde ihtiyaçları doğru analiz eder, etkinliğinize en uygun çözümleri sunar ve tüm süreci baştan sona profesyonel bir şekilde yönetiriz.                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Bizim için önemli olan yalnızca ürün sağlamak değil, kusursuz bir deneyim sunmaktır. Bilgisayar kiralamadan LED poster sistemlerine, akıllı karşılama kiosklarından ekran ve dijital pano çözümlerine kadar sunduğumuz tüm hizmetlerde, etkinliğinizin her anında yanınızda oluruz. Çözüm odaklı yaklaşımımızla ihtiyaçlarınıza özel projeler geliştirir, müşteri memnuniyetini her zaman en ön planda tutarız. </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  ECR Etkinlik Bilgisayar olarak inanıyoruz ki her etkinlik benzersizdir ve bu benzersizliği en üst seviyeye taşımak doğru planlama ve doğru teknolojiyle mümkündür. Genç, yaratıcı ve çözüm odaklı ekibimizin enerjisiyle etkinliklerinize değer katıyor, teknolojiyi deneyime dönüştürüyoruz.Etkinlik sektöründe teknolojinin gücünü kullanarak, müşterilerimize unutulmaz deneyimler sunmayı ve her etkinliği özel kılmayı hedefliyoruz.</p>
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

        {/* Technology Power Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[#0a0e27]" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-100">Teknoloji ile Geleceği Yakalayın</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Etkinliğinizi Teknolojiyle <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Güçlendirin!</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
                Etkinliklerinizin başarısını garanti altına almak için en son teknolojiye sahip etkinlik sistemlerini kiralamanızı sağlar. İster küçük bir toplantı, ister büyük bir konferans düzenliyor olun, ihtiyaçlarınıza uygun çözümler sunuyoruz.
              </p>
            </motion.div>
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

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-[#0d1229] p-10 rounded-2xl shadow-sm dark:shadow-none border border-gray-200 dark:border-white/10"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mb-8 mx-auto">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
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
