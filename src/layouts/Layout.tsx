import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import MouseCursor from '../components/MouseCursor';
import BackToTop from '../components/BackToTop';

const Layout: React.FC = () => {
  return (
    <div className="bg-color1">
      <Preloader />
      <MouseCursor />
      <BackToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
