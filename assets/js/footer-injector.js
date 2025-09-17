/**
 * Footer Injector - Single Source of Truth
 * 
 * This script injects the footer from index.html into all pages,
 * ensuring consistent footer across the entire website.
 * 
 * Usage: Include this script in all HTML files after jQuery loads
 */

(function($) {
    'use strict';

    // Source of truth footer HTML from index.html
    const SOURCE_FOOTER_HTML = `
<!-- ===================== FOOTER (SOURCE OF TRUTH) ===================== -->
<section class="footer1 fix">
    <div class="container">
        <div class="footer1-top">
            <div class="row align-items-center">
                <div class="col-12">
                    <h2 class="footer1-top__title">Get Started Now</h2>
                    <p class="footer1-top__text">AI Marketing agency built to grow modern businesses<br>
                       </p>
                    <a class="footer1-top__logo" href="index.html"><img src="imgs/freepik__background__37259.png" alt="StratX Logo"></a>
                </div>
            </div>
        </div>
        <div class="row justify-content-between">
            <div class="col-xxl-auto col-xl-5 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <div class="footer1-widget__item style1">
                    <div class="footer1-widget__item-icon">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div class="footer1-widget__item-contact">
                        <h6 class="footer1-widget__item-contact-title">Address</h6>
                        <a class="footer1-widget__item-contact-link" href="contact">GTA, Canada</a>
                    </div>
                </div>
                <div class="footer1-widget__item style1">
                    <div class="footer1-widget__item-icon">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="footer1-widget__item-contact">
                        <h6 class="footer1-widget__item-contact-title">Email</h6>
                        <a class="footer1-widget__item-contact-link"
                            href="mailto:info@stratxio.com">info@stratxio.com</a>
                    </div>
                </div>
            </div>
            <div class="col-xxl-auto col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <div class="footer1-widget__item ">
                    <ul class="footer1-widget__item-list">
                        <li><a href="about.html"><span><img class="svg" src="assets/images/icon/angles-right2.svg"
                                        alt="svg"></span> About Us</a></li>
                        <li><a href="services.html"><span><img class="svg"
                                        src="assets/images/icon/angles-right2.svg" alt="svg"></span> Services</a>
                        </li>
                       <li>
  <a href="project.html">
    <span>
      <img class="svg" src="assets/images/icon/angles-right2.svg" alt="svg">
    </span> 
    Portfolio
  </a>
</li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-6 col-lg-8 col-md-12 wow fadeInUp" data-wow-delay=".2s">
                <div class="footer1-widget__item ps40 last-item">
                    <div class="footer1-widget__item-input">
                        <input class="form-control" type="email" placeholder="Enter your E-mail">
                        <button class="theme-btn style1" type="submit">Subscribe Now <svg
                                xmlns="http://www.w3.org/2000/svg" width="71" height="40" viewBox="0 0 71 40"
                                fill="none">
                                <path
                                    d="M55.7071 20.7071C56.0976 20.3166 56.0976 19.6834 55.7071 19.2929L49.3431 12.9289C48.9526 12.5384 48.3195 12.5384 47.9289 12.9289C47.5384 13.3195 47.5384 13.9526 47.9289 14.3431L53.5858 20L47.9289 25.6568C47.5384 26.0474 47.5384 26.6805 47.9289 27.0711C48.3195 27.4616 48.9526 27.4616 49.3431 27.0711L55.7071 20.7071ZM8.74228e-08 21L55 21L55 19L-8.74228e-08 19L8.74228e-08 21Z"
                                    fill="white" />
                                <circle cx="51" cy="20" r="19.5" stroke="#E44F39" />
                            </svg></button>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer1-bottom">
            <div class="container">
                <div class="footer1-bottom-item d-flex align-items-center justify-content-between">
                    <p class="footer1-bottom-item__text">
                        © <a href="index.html">StratX</a> 2025 | All Rights Reserved
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
</section>`;

    // Function to inject footer
    function injectFooter() {
        // Remove any existing footer sections
        $('.footer1, .footer2, .footer3').remove();
        
        // Inject the footer before the closing body tag
        $('body').append(SOURCE_FOOTER_HTML);
        
        // Reinitialize any animations or plugins that might be needed
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }
        
        console.log('Footer injected successfully');
    }

    // Initialize footer injection when DOM is ready
    $(document).ready(function() {
        injectFooter();
    });

    // Also inject on window load as a fallback
    $(window).on('load', function() {
        // Double-check footer exists, inject if missing
        if ($('.footer1').length === 0) {
            injectFooter();
        }
    });

})(jQuery);
