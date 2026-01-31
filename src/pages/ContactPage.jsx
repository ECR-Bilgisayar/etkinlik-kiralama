import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';

const ContactPage = () => {
  const contactCards = [
    {
      icon: Phone,
      title: 'Hemen Arayın',
      subtitle: 'Kurumsal satış hattımız',
      value: '0850 228 75 74',
      linkText: 'Tıkla ve Ara',
      href: 'tel:08502287574',
      gradient: 'from-purple-500 to-purple-600',
      shadowColor: 'shadow-purple-500/30',
      hoverBorder: 'hover:border-purple-500/50',
      textColor: 'text-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      subtitle: 'Hızlı mesaj gönderin',
      value: 'Anında Yanıt',
      linkText: "WhatsApp'ta Yazın",
      href: 'https://wa.me/908502287574?text=Merhaba,%20etkinlik%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.',
      gradient: 'from-green-500 to-green-600',
      shadowColor: 'shadow-green-500/30',
      hoverBorder: 'hover:border-green-500/50',
      textColor: 'text-green-500',
      isExternal: true
    },
    {
      icon: Mail,
      title: 'E-posta Gönderin',
      subtitle: 'Detaylı teklif için',
      value: 'info@etkinlikkiralama.com',
      linkText: 'Mail Gönder',
      href: 'mailto:info@ecr.com.tr?subject=Etkinlik%20Hizmeti%20Talebi',
      gradient: 'from-cyan-500 to-cyan-600',
      shadowColor: 'shadow-cyan-500/30',
      hoverBorder: 'hover:border-cyan-500/50',
      textColor: 'text-cyan-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>İletişim | Etkinlik Kiralama - Hemen Teklif Alın</title>
        <meta name="description" content="7/24 Teknik destek, WhatsApp hızlı iletişim hattı ve kurumsal teklifler için bize ulaşın. İstanbul İstoç ofisimizde sizleri bekliyoruz." />
        <meta name="keywords" content="iletişim, teklif al, etkinlik kiralama iletişim, istoç etkinlik bilgisayar, kiralama desteği, whatsapp hattı" />

        {/* Open Graph */}
        <meta property="og:url" content="https://etkinlikbilgisayar.com/iletisim" />
        <meta property="og:title" content="İletişim | Etkinlik Kiralama" />
        <meta property="og:description" content="Projeleriniz için en uygun çözümleri sunmak üzere buradayız. Hemen bize ulaşın." />
        <meta property="og:image" content="https://etkinlikbilgisayar.com/meta-beyaz.png" />

        {/* Twitter */}
        <meta property="twitter:title" content="İletişim | Etkinlik Kiralama" />
        <meta property="twitter:description" content="Projeleriniz için en uygun çözümleri sunmak üzere buradayız. Hemen bize ulaşın." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#0a0e27] dark:via-black dark:to-[#0a0e27] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-display">
              Hemen{' '}
              <span className="bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                Ulaşın
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Kurumsal etkinlik projeleriniz için bize doğrudan ulaşabilirsiniz. Uzman ekibimiz size en uygun çözümü sunmak için hazır.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactCards.map((card, index) => (
              <motion.a
                key={index}
                href={card.href}
                target={card.isExternal ? '_blank' : undefined}
                rel={card.isExternal ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative bg-white dark:bg-[#0d1229]/80 backdrop-blur-sm rounded-3xl p-8 overflow-hidden border border-gray-200 dark:border-white/10 ${card.hoverBorder} transition-all duration-300 shadow-lg hover:shadow-2xl`}
              >
                {/* Background Decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.gradient} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 ${card.shadowColor} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className={`font-display font-bold text-xl mb-2 text-gray-900 dark:text-white group-hover:${card.textColor} transition-colors`}>
                    {card.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {card.subtitle}
                  </p>
                  <p className={`text-2xl font-bold ${card.textColor}`}>
                    {card.value}
                  </p>

                  {/* Link */}
                  <div className={`mt-4 flex items-center ${card.textColor} text-sm font-medium`}>
                    <span>{card.linkText}</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Location & Hours Section */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Map / Location Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-[#0d1229]/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-white/10"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mr-4 shadow-lg shadow-pink-500/30">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">Ofis Adresimiz</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ziyaret için randevu alınız</p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-white/5 rounded-2xl p-6 mb-6">
                <p className="text-gray-900 dark:text-white font-medium mb-2">İstoç Ticaret Merkezi</p>
                <p className="text-gray-600 dark:text-gray-400">32.Ada No:78-80 Mahmutbey/İSTANBUL</p>
              </div>

              {/* Embedded Map */}
              <div className="h-48 rounded-2xl overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.1295429871757!2d28.815236011547885!3d41.066160915739346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5707d5dea65%3A0x666cd2100159dab3!2sEtkinlik%20Bilgisayar!5e0!3m2!1str!2str!4v1769072713327!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Etkinlik Kiralama Konum"
                />
              </div>

              <a
                href="https://maps.google.com/?q=İstoç+Ticaret+Merkezi+32.Ada+No:78-80+Mahmutbey+İstanbul"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/30"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Haritada Göster
              </a>
            </motion.div>

            {/* Hours & Support Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-[#0d1229]/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-white/10"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mr-4 shadow-lg shadow-amber-500/30">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">Çalışma Saatleri</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Kurumsal destek saatleri</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-white/10">
                  <span className="text-gray-600 dark:text-gray-400">Pazartesi - Cuma</span>
                  <span className="font-semibold text-green-500">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-white/10">
                  <span className="text-gray-600 dark:text-gray-400">Cumartesi</span>
                  <span className="font-semibold text-amber-500">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-gray-600 dark:text-gray-400">Pazar</span>
                  <span className="font-semibold text-red-500">Kapalı</span>
                </div>
              </div>

              {/* 7/24 Support Badge */}
              <div className="flex items-center p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <span className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse" />
                <span className="text-green-600 dark:text-green-400 font-medium">
                  7/24 Kurumsal Destek Hattı Aktif
                </span>
              </div>

              {/* Quick Contact CTA */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-200 dark:border-purple-500/20">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Hızlı Teklif Alın</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Etkinliğiniz için özel fiyat teklifi almak ister misiniz?
                </p>
                <a
                  href="https://wa.me/908502287574?text=Merhaba,%20etkinlik%20hizmeti%20için%20teklif%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp ile Teklif Al
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;
