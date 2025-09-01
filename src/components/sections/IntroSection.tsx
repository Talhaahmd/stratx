import React from 'react';
import { FaArrowUpRight } from 'react-icons/fa6';

const IntroSection: React.FC = () => {
  return (
    <section className="intro1 bg-color2" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
        <source src="https://res.cloudinary.com/dt93sahp2/video/upload/v1744364832/Untitled_video_-_Made_with_Clipchamp_banwxx.mp4" type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)', zIndex: 1 }}></div>

      {/* Hero Content */}
      <div className="intro1-wrapper" style={{ position: 'relative', zIndex: 2, minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="intro1-wrapper-content">
                <h1 className="intro1-wrapper-content__title wow fadeInUp" data-wow-delay=".3s">
                  StratX<FaArrowUpRight />
                  <span className="intro1-wrapper-content__subtitle">The AI Marketing</span> Studio
                </h1>
                <p className="intro1-wrapper-content__text wow fadeInUp" data-wow-delay=".5s">
                  WE USE AI TO DRIVE SALE  |  AUTOMATE GROWTH  |  POWER SERVICE BRANDS 
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              {/* Right side content placeholder */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
