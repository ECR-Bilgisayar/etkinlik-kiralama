import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, X, Clock, Shield, Zap, Star, Users, CheckCircle, Building2, ChevronRight, Sparkles } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { services } from '@/data/services';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  if (!service) {
    return <Navigate to="/hizmetler" replace />;
  }

  const isKiosk = service.slug === 'kiosk';

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

  const relatedServices = services
    .filter(s => s.id !== service.id)
    .slice(0, 3);

  // Kiosk için özel sayfa
  if (isKiosk) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#0A0E27] dark:via-purple-900/20 dark:to-[#0A0E27]">
        <Helmet>
          <title>{service.title} - Etkinlik Kiralama</title>
          <meta name="description" content={service.description} />
        </Helmet>

        <div className="pt-24 pb-16">
          {/* Hero Section - Premium Style */}
          <div className="relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-cyan-900" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <Link
                to="/hizmetler"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Hizmetlere Dön
              </Link>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-white space-y-6"
                >
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-semibold">Premium Çözüm</span>
                  </div>

                  {/* Heading */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                    Akıllı Kayıt &
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Karşılama Kiosku
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    İlk izlenimi teknolojiyle güçlendirin. Ziyaretçi karşılamada hız, düzen ve profesyonellik artık tek bir noktada birleşiyor.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <motion.button
                      onClick={() => setIsVideoOpen(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-3 px-8 py-4 bg-white text-purple-900 rounded-full font-semibold text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all"
                    >
                      <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Tanıtım Videosu
                    </motion.button>
                    <Link to="/iletisim">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
                      >
                        Bilgi Al
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>

                {/* Right: Kiosk Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30, rotateY: -15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                  <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-4 border border-white/10 shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Detailed Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-200 dark:border-purple-500/20">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-display">Hakkında</h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                      Akıllı Kayıt & Karşılama Kiosku, misafirlerinizi saniyeler içinde kayıt altına alır, kişiye özel kartlarını anında teslim eder ve giriş süreçlerini tamamen otomatik hale getirir.
                    </p>
                    <p>
                      Modern tasarımı ve dokunmatik ekranı sayesinde kullanıcılar hiçbir yardıma ihtiyaç duymadan işlemlerini tamamlar. Yoğun giriş saatlerinde bile akışı kesintisiz hale getirir, personel yükünü azaltır ve işletmenize kurumsal bir prestij kazandırır.
                    </p>
                    <p>
                      Etkinlik alanlarından ofislere, kurumsal binalardan organizasyonlara kadar her ortamda fark yaratır.
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
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
                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl border border-purple-200 dark:border-purple-500/20"
                      >
                        <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg shrink-0">
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-200">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: Usage Areas & CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                {/* Usage Areas */}
                <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-200 dark:border-white/20">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-cyan-400" />
                    Kullanım Alanları
                  </h3>
                  <div className="space-y-3">
                    {usageAreas.map((area, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-200"
                      >
                        <ChevronRight className="w-5 h-5 text-cyan-400 shrink-0" />
                        <span>{area}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Use Cases Accordion */}
                {service.useCases && service.useCases.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-display">Detaylı Kullanım Senaryoları</h3>
                    <Accordion type="single" collapsible className="space-y-3">
                      {service.useCases.map((useCase, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl border border-purple-200 dark:border-purple-500/20 overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <span className="text-lg font-semibold text-gray-900 dark:text-white">
                              {useCase.title}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-gray-700 dark:text-gray-300">
                              {useCase.description}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}

                {/* CTA Box */}
                <div className="sticky top-24 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 dark:from-purple-600/30 dark:to-cyan-600/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-200 dark:border-purple-500/30">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display">
                    İletişime Geçin
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Akıllı Kayıt & Karşılama Kiosku hakkında detaylı bilgi almak ve teklif almak için bizimle iletişime geçin.
                  </p>
                  <Link to="/iletisim">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all"
                    >
                      Teklif Alın
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="mt-20">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-display">
                  Diğer Hizmetlerimiz
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedServices.map((relatedService, index) => (
                    <ServiceCard key={relatedService.id} service={relatedService} index={index} />
                  ))}
                </div>
              </div>
            )}
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
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                <div className="relative pt-[56.25%]">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dPwjou_z2wc?si=1UYhOkUiGOuy7g1P&autoplay=1"
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
      </div>
    );
  }

  // Normal servis sayfası
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0E27]">
      <Helmet>
        <title>{service.title} - Etkinlik Kiralama</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-[400px] mb-16">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
              <Link
                to="/hizmetler"
                className="inline-flex items-center text-white hover:text-gray-200 transition-colors mb-6"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Hizmetlere Dön
              </Link>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-white font-display"
              >
                {service.title}
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {service.fullDescription}
                </p>

                {service.useCases && service.useCases.length > 0 && (
                  <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                      Kullanım Alanları
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {service.useCases.map((useCase, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-xl border border-purple-200 dark:border-purple-500/20 overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <span className="text-lg font-semibold text-gray-900 dark:text-white">
                              {useCase.title}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-gray-700 dark:text-gray-300">
                              {useCase.description}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-24 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                  İletişime Geçin
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {service.title} hizmeti hakkında detaylı bilgi almak ve rezervasyon yapmak için bizimle iletişime geçebilirsiniz.
                </p>
                <Link to="/iletisim">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all"
                  >
                    Teklif Alın
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-display">
                Benzer Hizmetler
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedServices.map((relatedService, index) => (
                  <ServiceCard key={relatedService.id} service={relatedService} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;

