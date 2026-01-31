import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#0a0e27] dark:to-black border-t border-gray-300 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Logo & About */}
          <div>
            <Link to="/" className="flex items-center mb-4 group">
              <Logo />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Türkiye'nin önde gelen teknolojik etkinlik kiralama platformu. Kurumsal etkinlikler, fuarlar ve özel organizasyonlar için profesyonel çözümler.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/etkinlikkiralama"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-purple-100 dark:hover:bg-purple-500/20 flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                href="https://x.com/etkinlikkiralama"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-purple-100 dark:hover:bg-purple-500/20 flex items-center justify-center transition-all"
              >
                <Twitter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                href="https://www.instagram.com/etkinlikkiralama"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-purple-100 dark:hover:bg-purple-500/20 flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hizmetler/360-booth" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors">
                  360 Booth
                </Link>
              </li>
              <li>
                <Link to="/hizmetler/photobooth" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors">
                  Photobooth
                </Link>
              </li>
              <li>
                <Link to="/hizmetler/e-spor" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors">
                  E-Spor Etkinlikleri
                </Link>
              </li>
              <li>
                <Link to="/hizmetler/vr-etkinlikleri" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors">
                  VR Etkinlikleri
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">İstoç Ticaret Merkezi 32.Ada No: 78-80, Bağcılar, İstanbul</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">0850 228 75 74</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">info@etkinlikkiralama.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-300 dark:border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © {currentYear} Etkinlik Kiralama Sistemleri. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <Link to="/gizlilik" className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors">
                Gizlilik Politikası
              </Link>
              <Link to="/kullanim-kosullari" className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors">
                Kullanım Koşulları
              </Link>
              <Link to="/kvkk" className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors">
                KVKK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
