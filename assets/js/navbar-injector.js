/**
 * Navbar Injector - Single Source of Truth
 * 
 * This script injects the navbar from index.html into all pages,
 * ensuring consistent navigation across the entire website.
 * 
 * Usage: Include this script in all HTML files after jQuery loads
 */

(function($) {
    'use strict';

    // Source of truth navbar HTML from index.html
    const SOURCE_NAVBAR_HTML = `
<!-- ===================== HEADER (Desktop + Mobile) ===================== -->
<header class="global-header1 header-layout1" role="banner">
  <div class="sticky-wrapper">
    <div class="container">
      <div class="global-header1-menu-area">
        <div class="row align-items-center justify-content-between">
          <!-- Logo -->
          <div class="col-auto">
            <div class="header-logo">
              <a href="index.html" aria-label="StratX">
                <img src="https://res.cloudinary.com/dt93sahp2/image/upload/v1758200763/freepik__background__37259_icowwt.png" alt="StratX">
              </a>
            </div>
          </div>

          <!-- Desktop Nav (SOURCE OF TRUTH) -->
          <div class="col-auto">
            <nav class="global-header1-menu-area-main-menu d-none d-xl-inline-block" aria-label="Primary">
              <ul id="desktopMenu">
                <li><a class="active" href="index.html">Home</a></li>

                <li class="menu-item-has-children">
                  <a href="services.html">Services</a>
                  <ul class="sub-menu">
                    <li><a href="marketing.html">AI Marketing Automation</a></li>
                    <li><a href="ads.html">Ad Campaigns</a></li>
                    <li><a href="website.html">Websites & SEO</a></li>
                    <li><a href="content.html">Offline Marketing</a></li>
                  </ul>
                </li>

                <li><a href="project.html">Projects</a></li>
                <li><a href="about.html">About StratX</a></li>
                <li class="d-xl-none"><a href="contact.html">Contact</a></li>
              </ul>
            </nav>

            <!-- Mobile Hamburger -->
            <div class="header-button d-flex d-xl-none">
              <button type="button" class="global-menu-toggle sidebar-btn">
                <span class="line"></span>
                <span class="line"></span>
              </button>
            </div>
          </div>

          <!-- Desktop Social -->
          <div class="col-auto d-none d-xxl-block">
            <div class="global-header1-social-button">
              <ul class="global-header1-social-button__list">
                <li><a href="https://www.instagram.com/stratx_ai/" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#!" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>

          <!-- Desktop CTA -->
          <div class="col-auto d-none d-xl-block">
            <div class="global-header1-header-button">
              <div class="btn-wrapper">
                <a class="theme-btn style2" href="contact.html">
                  BOOK A CALL
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 50 30" fill="none" aria-hidden="true">
                    <path d="M38.3536 15.3536C38.5488 15.1583 38.5488 14.8417 38.3536 14.6464L35.1716 11.4645C34.9763 11.2692 34.6597 11.2692 34.4645 11.4645C34.2692 11.6597 34.2692 11.9763 34.4645 12.1716L37.2929 15L34.4645 17.8284C34.2692 18.0237 34.2692 18.3403 34.4645 18.5355C34.6597 18.7308 34.9763 18.7308 35.1716 18.5355L38.3536 15.3536ZM0 15.5L38 15.5L38 14.5L0 14.5L0 15.5Z" fill="white"/>
                    <circle cx="35" cy="15" r="14.5" stroke="white"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div><!-- /row -->
      </div>
    </div>
  </div>
</header>

<!-- Mobilemenu    S T A R T -->
<div class="global-menu-wrapper onepage-nav">
  <div class="global-menu-area text-center">
      <button class="global-menu-toggle"><i class="fal fa-times"></i></button>

    <div class="mobile-logo">
        <a href="index.html">
          <img src="https://res.cloudinary.com/dt93sahp2/image/upload/v1758200763/freepik__background__37259_icowwt.png" alt="StratX">
      </a>
    </div>

      <nav class="global-mobile-menu">
        <ul>
          <!-- Home (no dropdown) -->
          <li>
            <a href="index.html">Home</a>
          </li>
  
          <!-- Services (link + dropdown) -->
          <li class="menu-item-has-children">
            <a href="services.html">Services</a>
            <ul class="sub-menu">
              <li><a href="marketing.html">AI Marketing Automation</a></li>
              <li><a href="ads.html">Ad Campaigns</a></li>
              <li><a href="website.html">Websites & SEO</a></li>
              <li><a href="content.html">Offline Marketing</a></li>
        </ul>
          </li>
  
          <!-- Project (no dropdown) -->
          <li>
            <a href="project.html">Project</a>
          </li>
  
          <!-- About to About StratX (no dropdown) -->
          <li>
            <a href="about.html">About StratX</a>
          </li>
  
          <!-- Contact -->
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
    </nav>
  </div>
</div>
<!-- Mobilemenu    E N D -->`;

    // Source of truth styles from index.html
    const SOURCE_NAVBAR_STYLES = `
<!-- ===================== NAVBAR STYLES ===================== -->
<style>
/* ---- Base / Reset bits matching your theme ---- */
:root{
  --line:#20222a;
  --bg:#0d0f15;
  --panel:#0f1220;
  --txt:#fff;
}
.global-header1{position:relative; z-index:10; background:#0d0f15; border-bottom:1px solid var(--line)}
.header-logo img{height:50px}
.global-header1-menu-area-main-menu > ul{display:flex; gap:22px; margin:0; padding:0; list-style:none}
.global-header1-menu-area-main-menu a{display:inline-flex; padding:10px 8px; border-radius:0}
.global-header1-menu-area-main-menu a:hover,
.global-header1-menu-area-main-menu a.active{background:transparent}

/* Desktop dropdown */
.menu-item-has-children{position:relative}
.menu-item-has-children > .sub-menu{
  position:absolute; left:0; top:calc(100% + 10px);
  background:#121522; border:1px solid var(--line); border-radius:12px;
  min-width:280px; padding:8px; display:none; z-index:999;
}
.menu-item-has-children:hover > .sub-menu{display:block}
.sub-menu{list-style:none; margin:0; padding:6px}
.sub-menu li a{display:block; padding:10px 12px; border-radius:8px; color:#e7e8ec}
.sub-menu li a:hover{background:rgba(255,255,255,.06)}

/* Mobile hamburger - High specificity to override external CSS */
.header-button .global-menu-toggle{
  width:44px !important; 
  height:44px !important; 
  display:inline-flex !important; 
  flex-direction:column !important;
  align-items:center !important; 
  justify-content:center !important; 
  border:1px solid var(--line) !important; 
  background:transparent !important; 
  border-radius:10px !important;
  gap:1px !important;
  padding:0 !important;
  font-size:0 !important;
  line-height:0 !important;
  cursor:pointer !important;
}
.header-button .global-menu-toggle:hover{
  background:rgba(255,255,255,.1) !important;
}
.header-button .line{
  display:block !important; 
  width:20px !important; 
  height:2px !important; 
  background:#fff !important; 
  transition:all 0.3s ease !important;
}

/* Mobile Menu Dark Theme Overrides */
.global-menu-wrapper {
  background-color: rgba(0, 0, 0, 0.8) !important;
}

.global-menu-wrapper .global-menu-area {
  background-color: var(--panel) !important;
  border-right: 1px solid var(--line) !important;
}

.global-menu-wrapper .mobile-logo {
  background-color: var(--panel) !important;
  border-bottom: 1px solid var(--line) !important;
}

.global-menu-wrapper .mobile-logo img {
  height: 50px !important;
}

.global-menu-wrapper .global-menu-toggle {
  background-color: rgba(255, 255, 255, 0.1) !important;
  color: #fff !important;
  border: 1px solid var(--line) !important;
}

.global-menu-wrapper .global-menu-toggle:hover {
  background-color: rgba(255, 255, 255, 0.2) !important;
  color: #fff !important;
}

.global-mobile-menu {
  background-color: var(--panel) !important;
}

.global-mobile-menu ul li {
  border-bottom: 1px solid var(--line) !important;
}

.global-mobile-menu ul li a {
  color: var(--txt) !important;
}

.global-mobile-menu ul li a:hover {
  color: #ff7a00 !important;
}

.global-mobile-menu ul li.global-active > a {
  color: #ff7a00 !important;
}

.global-mobile-menu ul li.menu-item-has-children:before,
.global-mobile-menu ul li.menu-item-has-children:after {
  color: var(--txt) !important;
}

.global-mobile-menu ul li ul li {
  background-color: rgba(255, 255, 255, 0.02) !important;
}

.global-mobile-menu ul li ul li a {
  color: var(--txt) !important;
  opacity: 0.8;
}

.global-mobile-menu ul li ul li a:hover {
  color: #ff7a00 !important;
  opacity: 1;
}

/* Submenu visibility and functionality */
.global-mobile-menu ul li.menu-item-has-children .sub-menu {
  display: none !important;
  position: relative !important;
  z-index: auto !important;
  padding-left: 20px !important;
  margin-top: 8px !important;
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

.global-mobile-menu ul li.menu-item-has-children.global-active .sub-menu {
  display: block !important;
}

.global-mobile-menu ul li.menu-item-has-children .sub-menu li {
  border-bottom: none !important;
  margin-bottom: 4px !important;
  position: relative !important;
  z-index: auto !important;
}

.global-mobile-menu ul li.menu-item-has-children .sub-menu li a {
  padding: 8px 0 !important;
  font-size: 14px !important;
  color: var(--txt) !important;
  opacity: 0.8 !important;
  position: relative !important;
  z-index: auto !important;
}

.global-mobile-menu ul li.menu-item-has-children .sub-menu li a:hover {
  color: #ff7a00 !important;
  opacity: 1 !important;
}

/* Ensure submenu doesn't overlay other content */
.global-mobile-menu ul li.menu-item-has-children {
  position: relative !important;
  z-index: auto !important;
}

.global-mobile-menu ul li.menu-item-has-children.global-active {
  position: relative !important;
  z-index: auto !important;
}

/* Override any external CSS that might be causing overlay issues */
.global-mobile-menu ul li ul {
  position: static !important;
  top: auto !important;
  left: auto !important;
  right: auto !important;
  transform: none !important;
  width: auto !important;
  max-width: none !important;
  min-width: auto !important;
}

/* Mobile header logo height */
@media (max-width: 1199.98px) {
  .header-logo img {
    max-height: 75px;
  }
}

/* Mobile header logo positioning - move to top left */
@media (max-width: 1199.98px) {
  /* Override Bootstrap container padding completely */
  .global-header1 .container,
  .global-header1 .container-fluid {
    padding-left: 0 !important;
    padding-right: 15px !important;
    margin-left: 0 !important;
  }
  
  /* Override Bootstrap row margins */
  .global-header1 .row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  
  /* Override Bootstrap column padding */
  .global-header1 .col-auto:first-child {
    padding-left: 0 !important;
    margin-left: 0 !important;
  }
  
  .global-header1 .col-auto:last-child {
    padding-right: 0 !important;
    margin-right: 0 !important;
  }
  
  /* Ensure logo container has no spacing */
  .global-header1 .header-logo {
    margin-left: 0 !important;
    padding-left: 0 !important;
  }
  
  /* Force logo to absolute left edge */
  .global-header1 .header-logo a {
    margin-left: 0 !important;
    padding-left: 0 !important;
  }
  
  /* Override any inherited spacing */
  .global-header1 .header-logo img {
    margin-left: 0 !important;
    padding-left: 0 !important;
  }
  
  /* Nuclear option - force absolute positioning if needed */
  .global-header1 .header-logo {
    position: relative !important;
    left: 0 !important;
  }
  
  /* Override any potential sticky-wrapper spacing */
  .global-header1 .sticky-wrapper {
    padding-left: 0 !important;
    margin-left: 0 !important;
  }
  
  /* Override global-header1-menu-area padding that's adding space */
  .global-header1-menu-area {
    padding-left: 0 !important;
    padding-right: 40px !important;
  }
  
  /* Override Bootstrap gutter system completely for header */
  .global-header1 .row {
    --bs-gutter-x: 0 !important;
    --bs-gutter-y: 0 !important;
  }
}

/* Breakpoints */
@media (min-width:1200px){
  .global-header1-menu-area-main-menu{display:block !important}
}
@media (max-width:1199.98px){
  .global-header1-header-button .btn-wrapper,
  .global-header1-social-button{display:none}
}
</style>`;

    /**
     * Get current page name for active state
     */
    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        return page;
    }

    /**
     * Set active state for current page
     */
    function setActiveState() {
        const currentPage = getCurrentPage();
        
        // Remove active class from all links
        $('.global-header1-menu-area-main-menu a, .global-mobile-menu a').removeClass('active');
        
        // Add active class to current page
        $('.global-header1-menu-area-main-menu a[href="' + currentPage + '"]').addClass('active');
        $('.global-mobile-menu a[href="' + currentPage + '"]').addClass('active');
        
        // Handle index.html special case
        if (currentPage === '' || currentPage === 'index.html') {
            $('.global-header1-menu-area-main-menu a[href="index.html"]').addClass('active');
            $('.global-mobile-menu a[href="index.html"]').addClass('active');
        }
    }

    /**
     * Initialize mobile menu functionality
     */
    function initializeMobileMenu() {
        // Wait for the etmobilemenu function to be available
        let attempts = 0;
        const maxAttempts = 50; // 5 seconds max wait
        
        function tryInitialize() {
            attempts++;
            
            if (typeof $.fn.etmobilemenu === 'function') {
                // Initialize mobile menu for the injected navbar
                $(".global-menu-wrapper").etmobilemenu();
                console.log('✅ Mobile menu functionality initialized');
            } else if (attempts < maxAttempts) {
                // Try again in 100ms
                setTimeout(tryInitialize, 100);
            } else {
                console.warn('⚠️ etmobilemenu function not found after waiting, mobile menu may not work');
            }
        }
        
        tryInitialize();
    }

    /**
     * Remove existing navbar elements safely
     */
    function removeExistingNavbar() {
        // Remove existing header
        $('header.global-header1').remove();
        
        // Remove existing mobile menu
        $('.global-menu-wrapper').remove();
        
        // Remove existing navbar styles (if any)
        $('style:contains("global-header1")').remove();
    }

    /**
     * Inject the navbar into the page
     */
    function injectNavbar() {
        // Remove existing navbar first
        removeExistingNavbar();
        
        // Inject the navbar HTML after the back-to-top button
        const $backToTop = $('#back-top');
        if ($backToTop.length) {
            $backToTop.after(SOURCE_NAVBAR_HTML);
        } else {
            // Fallback: inject after body tag
            $('body').prepend(SOURCE_NAVBAR_HTML);
        }
        
        // Inject the styles
        $('head').append(SOURCE_NAVBAR_STYLES);
        
        // Set active state
        setActiveState();
        
        // Re-initialize mobile menu functionality
        initializeMobileMenu();
        
        // Debug: Check if mobile menu elements exist
        setTimeout(function() {
            const mobileWrapper = $('.global-menu-wrapper');
            const toggleButtons = $('.global-menu-toggle');
            console.log('🔍 Debug - Mobile wrapper found:', mobileWrapper.length);
            console.log('🔍 Debug - Toggle buttons found:', toggleButtons.length);
            console.log('🔍 Debug - etmobilemenu function available:', typeof $.fn.etmobilemenu);
        }, 1000);
        
        console.log('✅ Navbar injected successfully from index.html');
    }

    /**
     * Initialize navbar injection
     */
    function init() {
        // Only inject if not on index.html (to avoid duplication)
        const currentPage = getCurrentPage();
        if (currentPage !== 'index.html' && currentPage !== '') {
            injectNavbar();
        } else {
            // On index.html, just set active state
            setActiveState();
        }
    }

    // Initialize when DOM is ready
    $(document).ready(function() {
        init();
    });

    // Re-initialize on page navigation (for SPA-like behavior)
    $(window).on('popstate', function() {
        setTimeout(init, 100);
    });

})(jQuery);
