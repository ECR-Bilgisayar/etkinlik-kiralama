import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Sparkles, Zap, Shield, Clock, Mail } from 'lucide-react';

const KioskPromo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const features = [
    {
      icon: Clock,
      title: 'Hızlı Kayıt',
      description: 'Ziyaretçi girişlerini saniyelere indirir'
    },
    {
      icon: Zap,
      title: 'Otomatik Sistem',
      description: 'Kart basımı ve teslimi otomatikleştirir'
    },
    {
      icon: Shield,
      title: 'Profesyonel',
      description: 'Güven veren modern görünüm'
    },
    {
      icon: Sparkles,
      title: 'Verimlilik',
      description: 'Daha az personel, daha yüksek verimlilik'
    }
  ];

  return (
    <>
      {/* Kiosk Promo Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-cyan-900">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold">Yeni Ürün</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight"
              >
                Akıllı Kayıt &
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Karşılama Kiosku
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-200 leading-relaxed"
              >
                İlk izlenimi teknolojiyle güçlendirin. Ziyaretçi karşılamada hız, düzen ve profesyonellik artık tek bir noktada birleşiyor.
              </motion.p>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 gap-4 pt-4"
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                  >
                    <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.button
                  onClick={() => setIsVideoOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 px-8 py-4 bg-white text-purple-900 rounded-full font-semibold text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Tanıtım Videosu
                </motion.button>
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Bilgi Al
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: Kiosk Image/Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-3xl opacity-30 animate-pulse" />

              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-white/10 shadow-2xl">
                {/* Kiosk Screen Mockup */}
                <div className="relative aspect-[9/16] bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Screen Content */}
                  <div className="absolute inset-0 p-6 flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className="relative w-56 h-56 mx-auto mb-8 group">
                        {/* Gradient Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-30 group-hover:opacity-75 blur transition duration-500" />

                        {/* Glass Container */}
                        <div className="relative w-full h-full bg-black/20 backdrop-blur-xl rounded-3xl border border-white/10 flex items-center justify-center p-8">
                          <img
                            src="/ecr-yeni-logo-siyah.png"
                            alt="ECR Logo"
                            className="w-full h-full object-contain brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                          />
                        </div>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-2">Akıllı Kayıt & Karşılama Kiosku</h3>
                      <div className="flex items-center justify-center gap-2 text-white/80">
                        <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-xs">🔍</span>
                        </div>
                        <span className="text-sm">Search</span>
                        <span className="text-sm opacity-60">https://etkinlikbilgisayar.com</span>
                      </div>
                    </div>

                    {/* Features Display */}
                    <div className="flex-1 space-y-3">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <p className="text-white/90 text-sm">✅ Ziyaretçi girişlerini saniyelere indirir</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <p className="text-white/90 text-sm">✅ Kart basımı ve teslimini otomatikleştirir</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <p className="text-white/90 text-sm">✅ Profesyonel, modern ve güven veren görünüm</p>
                      </div>
                    </div>


                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500 rounded-full blur-2xl opacity-50" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full blur-2xl opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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

              {/* Video Placeholder - YouTube video ID'si buraya ekleyecek */}
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

export default KioskPromo;
