import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Toast from './components/Toast';
import OrderDrawer from './components/OrderDrawer';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

export default function App() {
  const [orderItems, setOrderItems] = useState([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4000);
  };

  const handleAddToCart = (dish) => {
    setOrderItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
  };

  const handleUpdateQty = (dishId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(dishId);
    } else {
      setOrderItems((prev) =>
        prev.map((item) => (item.id === dishId ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (dishId) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== dishId));
  };

  const handleClearOrder = () => {
    setOrderItems([]);
    showToast('Your order tray has been cleared.');
  };

  const totalItemCount = orderItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-chai-50 selection:bg-gulmohar-600 selection:text-white">
        <ScrollToTop />
        
        {/* Top Navbar */}
        <Navbar 
          onOpenOrderTray={() => setIsOrderDrawerOpen(true)}
          orderItemCount={totalItemCount}
        />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/menu" element={<Menu onAddToCart={handleAddToCart} onShowToast={showToast} />} />
            <Route path="/services" element={<Services onShowToast={showToast} />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials onShowToast={showToast} />} />
            <Route path="/contact" element={<Contact onShowToast={showToast} />} />
            
            {/* 404 Fallback */}
            <Route 
              path="*" 
              element={
                <div className="py-24 text-center px-4">
                  <div className="max-w-md mx-auto space-y-4">
                    <span className="text-6xl font-serif font-black text-gulmohar-600">404</span>
                    <h2 className="text-2xl font-serif font-bold text-chai-900">Page Not Found</h2>
                    <p className="text-sm text-chai-600">
                      The page you are looking for doesn't exist or has moved. Explore our authentic street food menu or return home.
                    </p>
                    <div className="pt-2">
                      <Link 
                        to="/" 
                        className="bg-gulmohar-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm shadow-warm"
                      >
                        Return to Home
                      </Link>
                    </div>
                  </div>
                </div>
              } 
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onShowToast={showToast} />

        {/* Interactive Order Tray Drawer */}
        <OrderDrawer
          isOpen={isOrderDrawerOpen}
          onClose={() => setIsOrderDrawerOpen(false)}
          orderItems={orderItems}
          onUpdateQty={handleUpdateQty}
          onRemoveItem={handleRemoveItem}
          onClearOrder={handleClearOrder}
        />

        {/* Global Toast Notifications */}
        <Toast 
          message={toastMessage} 
          onClose={() => setToastMessage(null)} 
        />
      </div>
    </Router>
  );
}
