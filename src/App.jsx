import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import ServicesListPage from '@/pages/ServicesListPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import AboutPage from '@/pages/AboutPage';
import ReferencesPage from '@/pages/ReferencesPage';
import BlogPage from '@/pages/BlogPage';
import BlogDetailPage from '@/pages/BlogDetailPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hizmetler" element={<ServicesListPage />} />
            <Route path="/hizmetler/:slug" element={<ServiceDetailPage />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
            <Route path="/referanslarimiz" element={<ReferencesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
          </Routes>
        </MainLayout>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;
