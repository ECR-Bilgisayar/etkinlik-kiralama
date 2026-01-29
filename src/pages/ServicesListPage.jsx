import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, X, Sparkles, Zap, Shield, Clock, CheckCircle, Building2, Calendar, Users, Star, ChevronRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

const ServicesListPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const kioskFeatures = [
    { icon: Clock, text: 'Ziyaretçi girişlerini saniyelere indirir' },
    { icon: Shield, text: 'Manuel kayıt ve karışıklıkları ortadan kaldırır' },
    { icon: Zap, text: 'Kart basımı ve teslimini otomatikleştirir' },
    { icon: Star, text: 'Profesyonel, modern ve güven veren görünüm' },
    { icon: Users, text: 'Daha az personel, daha yüksek verimlilik' },
  ];

  const usageAreas = [
    'Kurumsal ofisler',
    'Etkinlik & organizasyon alanları',
    'Fuarlar',
    'Özel davetler ve lansmanlar',
    'Kontrollü giriş gerektiren tüm alanlar',
  ];

  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz - Etkinlik Kiralama</title>
        <meta name="description" content="Etkinlikleriniz için sunduğumuz tüm teknoloji kiralama hizmetleri." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#0a0e27] dark:via-black dark:to-[#0a0e27] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Etkinlikleriniz için en son teknoloji ürünleri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Premium Kiosk Promo Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-24 rounded-3xl overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-cyan-900" />

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>

            {/* Animated Blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="relative py-16 px-8 lg:px-16">
              {/* Section Header with Badge */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-white">Premium Çözüm</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-white font-display mb-4"
                >
                  Akıllı Kayıt &{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Karşılama Kiosku
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-200 max-w-3xl mx-auto"
                >
                  İlk izlenimi teknolojiyle güçlendirin. Ziyaretçi karşılamada hız, düzen ve profesyonellik artık tek bir noktada birleşiyor.
                </motion.p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left: Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  {/* Main Description */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <p className="text-gray-200 leading-relaxed">
                      Akıllı Kayıt & Karşılama Kiosku, misafirlerinizi saniyeler içinde kayıt altına alır, kişiye özel kartlarını anında teslim eder ve giriş süreçlerini tamamen otomatik hale getirir.
                    </p>
                    <p className="text-gray-200 leading-relaxed mt-4">
                      Modern tasarımı ve dokunmatik ekranı sayesinde kullanıcılar hiçbir yardıma ihtiyaç duymadan işlemlerini tamamlar. Yoğun giriş saatlerinde bile akışı kesintisiz hale getirir, personel yükünü azaltır ve işletmenize kurumsal bir prestij kazandırır.
                    </p>
                    <p className="text-gray-200 leading-relaxed mt-4">
                      Etkinlik alanlarından ofislere, kurumsal binalardan organizasyonlara kadar her ortamda fark yaratır.
                    </p>
                  </div>

                  {/* Features List */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      Neden Kiosk Tercih Etmelisiniz?
                    </h3>
                    <div className="space-y-3">
                      {kioskFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                        >
                          <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg shrink-0">
                            <feature.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-200 text-sm">{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right: Usage Areas & CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-8"
                >
                  {/* Usage Areas */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-cyan-400" />
                      Kullanım Alanları Nerelerdir?
                    </h3>
                    <div className="space-y-2">
                      {usageAreas.map((area, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-center gap-3 text-gray-200"
                        >
                          <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{area}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Kiosk Image */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-30 group-hover:opacity-50 blur transition duration-500" />
                    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-white/10">
                      <div className="aspect-[16/9] bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-xl overflow-hidden flex items-center justify-center">
                        <div className="text-center p-8">
                          <img
                            src="/ecr-yeni-logo-siyah.png"
                            alt="ECR Logo"
                            className="w-32 h-32 mx-auto object-contain brightness-0 invert mb-4"
                          />
                          <p className="text-white/80 text-sm">Akıllı Kayıt & Karşılama Kiosku</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      onClick={() => setIsVideoOpen(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-3 px-6 py-3 bg-white text-purple-900 rounded-full font-semibold shadow-2xl hover:shadow-cyan-500/50 transition-all"
                    >
                      <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Tanıtım Videosu
                    </motion.button>
                    <Link to="/iletisim">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white/20 transition-all"
                      >
                        Bilgi Al
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Video */}
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dPwjou_z2wc?si=1UYhOkUiGOuy7g1P?autoplay=1"
                  title="Akıllı Kayıt & Karşılama Kiosku Tanıtım"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesListPage;
