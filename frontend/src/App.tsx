import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

import WindEnergy from './pages/services/WindEnergy';
import AiMl from './pages/services/AiMl';
import Geospatial from './pages/services/Geospatial';
import DataScience from './pages/services/DataScience';
import EnterpriseSoftware from './pages/services/EnterpriseSoftware';
import CloudTransformation from './pages/services/CloudTransformation';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Industries from './pages/Industries';
import SearchResults from './pages/SearchResults';
import Research from './pages/Research';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

// Product pages
import WindVistaPage from './pages/products/WindVista';
import URAIPage from './pages/products/URAI';
import AOPPage from './pages/products/AOP';
import Code2CognitionPage from './pages/products/Code2Cognition';
import { BRAIDPage, AITutorPage } from './pages/products/Placeholders';

// Scroll Restoration on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-sirpi-bg text-sirpi-text selection:bg-sirpi-secondary/30 selection:text-sirpi-secondary">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Navigate to="/services/wind-energy" replace />} />
              <Route path="/services/wind-energy" element={<WindEnergy />} />
              <Route path="/services/ai-ml" element={<AiMl />} />
              <Route path="/services/geospatial" element={<Geospatial />} />
              <Route path="/services/data-science" element={<DataScience />} />
              <Route path="/services/enterprise-software" element={<EnterpriseSoftware />} />
              <Route path="/services/cloud-transformation" element={<CloudTransformation />} />
              <Route path="/products" element={<Products />} />
              {/* Named product pages — must come BEFORE the :slug catch-all */}
              <Route path="/products/windvista" element={<WindVistaPage />} />
              <Route path="/products/urai" element={<URAIPage />} />
              <Route path="/products/aop" element={<AOPPage />} />
              <Route path="/products/code2cognition" element={<Code2CognitionPage />} />
              <Route path="/products/braid" element={<BRAIDPage />} />
              <Route path="/products/ai-tutor" element={<AITutorPage />} />
              {/* Legacy slug catch-all */}
              <Route path="/products/:slug" element={<ProductDetails />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/research" element={<Research />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminDashboard />} />
              
              {/* Fallback route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
