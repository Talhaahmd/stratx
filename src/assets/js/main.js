
(function ($) {
  "use strict";

  $(document).ready(function () {


    /*---------- Mobile Menu  ----------*/
    $.fn.etmobilemenu = function (options) {
      var opt = $.extend(
        {
          menuToggleBtn: ".global-menu-toggle",
          bodyToggleClass: "global-body-visible",
          subMenuClass: "global-submenu",
          subMenuParent: "menu-item-has-children",
          gtSubMenuParent: "menu-item-has-children",
          subMenuParentToggle: "global-active",
          meanExpandClass: "global-mean-expand",
          appendElement: '<span class="global-mean-expand"></span>',
          subMenuToggleClass: "global-open",
          toggleSpeed: 400,
        },
        options
      );

      return this.each(function () {
        var menu = $(this); // Select menu

        // Menu Show & Hide
        function menuToggle() {
          menu.toggleClass(opt.bodyToggleClass);

          // collapse submenu on menu hide or show
          var subMenu = "." + opt.subMenuClass;
          $(subMenu).each(function () {
            if ($(this).hasClass(opt.subMenuToggleClass)) {
              $(this).removeClass(opt.subMenuToggleClass);
              $(this).css("display", "none");
              $(this).parent().removeClass(opt.subMenuParentToggle);
            }
          });
        }

        // Class Set Up for every submenu
        menu.find("." + opt.subMenuParent).each(function () {
          var submenu = $(this).find("ul");
          submenu.addClass(opt.subMenuClass);
          submenu.css("display", "none");
          $(this).addClass(opt.subMenuParent);
          $(this).addClass(opt.gtSubMenuParent); // Add menu-item-has-children class
          $(this).children("a").append(opt.appendElement);
        });

        // Toggle Submenu
        function toggleDropDown($element) {
          var submenu = $element.children("ul");
          if (submenu.length > 0) {
            $element.toggleClass(opt.subMenuParentToggle);
            submenu.slideToggle(opt.toggleSpeed);
            submenu.toggleClass(opt.subMenuToggleClass);
          }
        }

        // Submenu toggle Button
        var itemHasChildren = "." + opt.gtSubMenuParent + " > a";
        $(itemHasChildren).each(function () {
          $(this).on("click", function (e) {
            e.preventDefault();
            toggleDropDown($(this).parent());
          });
        });

        // Menu Show & Hide On Toggle Btn click
        $(opt.menuToggleBtn).each(function () {
          $(this).on("click", function () {
            menuToggle();
          });
        });

        // Hide Menu On outside click
        menu.on("click", function (e) {
          e.stopPropagation();
          menuToggle();
        });


        // Stop Hide full menu on menu click
        menu.on("click", function (e) {
          e.stopPropagation();
        });

        // Prevent submenu from hiding when clicking inside the menu
        menu.find("div").on("click", function (e) {
          e.stopPropagation();
        });
      });
    };

    $(".global-menu-wrapper").etmobilemenu();



    /*---------- Sticky fix ----------*/
    $(window).scroll(function () {
      var topPos = $(this).scrollTop();
      if (topPos > 10) {
        $('.sticky-wrapper').addClass('sticky');
        $('.category-menu').addClass('close-category');
      } else {
        $('.sticky-wrapper').removeClass('sticky')
        $('.category-menu').removeClass('close-category');
      }
    })

    // After
    $('.menu-expand').on('click', function (e) {
      e.preventDefault();
      $('.category-menu').toggleClass('open-category');
    });



    /*---------- Popup Sidemenu ----------*/
    function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {

      $($sideMunuOpen).on('click', function (e) {
        e.preventDefault();
        $($sideMenu).addClass($toggleCls);
      });
      $($sideMenu).on('click', function (e) {
        e.stopPropagation();
        $($sideMenu).removeClass($toggleCls)
      });
      var sideMenuChild = $sideMenu + ' > div';
      $(sideMenuChild).on('click', function (e) {
        e.stopPropagation();
        $($sideMenu).addClass($toggleCls)
      });

      $($sideMenuCls).on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $($sideMenu).removeClass($toggleCls);
      });
    };


    popupSideMenu('.sidemenu-cart', '.sideMenuToggler', '.sideMenuCls', 'show');
    popupSideMenu('.sidemenu-info', '.sideMenuInfo', '.sideMenuCls', 'show');



    /*-----------------------------------
          Counterup 
        -----------------------------------*/
    if ($('.counters-item').length) {
      $('.counters-item').counterUp({
        delay: 10,
        time: 1000,
      });
    }


    /*-----------------------------------
          Wow Animation 
        -----------------------------------*/
    new WOW().init();


    /*-----------------------------------
          Set Background Image & Mask   
        -----------------------------------*/
    if ($("[data-bg-src]").length > 0) {
      $("[data-bg-src]").each(function () {
        var src = $(this).attr("data-bg-src");
        $(this).css("background-image", "url(" + src + ")");
        $(this).removeAttr("data-bg-src").addClass("background-image");
      });
    }



    /*-----------------------------------
          Global Slider
        -----------------------------------*/
    function applyAnimationProperties() {
      $("[data-ani]").each(function () {
        var animationClass = $(this).data("ani");
        $(this).addClass(animationClass);
      });

      $("[data-ani-delay]").each(function () {
        var delay = $(this).data("ani-delay");
        $(this).css("animation-delay", delay);
      });
    }

    // Call the animation properties function
    applyAnimationProperties();

    // Function to initialize Swiper
    function initializeSwiper(sliderContainer) {
      var sliderOptions = sliderContainer.data("slider-options");

      console.log("Slider options: ", sliderOptions);

      var previousArrow = sliderContainer.find(".slider-prev");
      var nextArrow = sliderContainer.find(".slider-next");
      var paginationElement = sliderContainer.find(".slider-pagination");
      var numberedPagination = sliderContainer.find(
        ".slider-pagination.pagi-number"
      );

      var paginationStyle = sliderOptions["paginationType"] || "bullets";
      var autoplaySettings = sliderOptions["autoplay"] || {
        delay: 6000,
        disableOnInteraction: false,
      };

      var defaultSwiperConfig = {
        slidesPerView: 1,
        spaceBetween: sliderOptions["spaceBetween"] || 24,
        loop: sliderOptions.hasOwnProperty("loop") ? sliderOptions["loop"] !== false : true,

        speed: sliderOptions["speed"] || 1000,
        initialSlide: sliderOptions["initialSlide"] || 0,
        centeredSlides: !!sliderOptions["centeredSlides"],
        effect: sliderOptions["effect"] || "slide",
        fadeEffect: {
          crossFade: true,
        },
        autoplay: autoplaySettings,
        navigation: {
          nextEl: nextArrow.length ? nextArrow.get(0) : null,
          prevEl: previousArrow.length ? previousArrow.get(0) : null,
        },
        pagination: {
          el: paginationElement.length ? paginationElement.get(0) : null,
          type: paginationStyle,
          clickable: true,
          renderBullet: function (index, className) {
            var bulletNumber = index + 1;
            var formattedNumber =
              bulletNumber < 10 ? "0" + bulletNumber : bulletNumber;
            if (numberedPagination.length) {
              return (
                '<span class="' +
                className +
                ' number">' +
                formattedNumber +
                "</span>"
              );
            } else {
              return (
                '<span class="' +
                className +
                '" aria-label="Go to Slide ' +
                formattedNumber +
                '"></span>'
              );
            }
          },
        },
        on: {
          slideChange: function () {
            setTimeout(
              function () {
                this.params.mousewheel.releaseOnEdges = false;
              }.bind(this),
              500
            );
          },
          reachEnd: function () {
            setTimeout(
              function () {
                this.params.mousewheel.releaseOnEdges = true;
              }.bind(this),
              750
            );
          },
        },
      };

      var finalConfig = $.extend({}, defaultSwiperConfig, sliderOptions);
      console.log("Complete Swiper options: ", finalConfig);

      // Initialize the Swiper instance
      return new Swiper(sliderContainer.get(0), finalConfig);
    }

    // Initialize Swipers on page load
    var swiperInstances = [];
    $('.bd-slider').each(function () {
      var sliderContainer = $(this);
      var swiperInstance = initializeSwiper(sliderContainer);
      swiperInstances.push(swiperInstance);
    });

    // Initialize Swipers on page load
    var swiperInstances = [];
    $(".global-slider").each(function () {
      var sliderContainer = $(this);
      var swiperInstance = initializeSwiper(sliderContainer);
      swiperInstances.push(swiperInstance);
    });

    // Bootstrap tab show event
    $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
      var targetTab = $(e.target).attr("href");
      $(targetTab)
        .find(".et-slider")
        .each(function () {
          var sliderContainer = $(this);
          if (!sliderContainer[0].swiper) {
            initializeSwiper(sliderContainer);
          } else {
            sliderContainer[0].swiper.update();
          }
        });
    });

    // Add click event handlers for external slider arrows based on data attributes
    $("[data-slider-prev], [data-slider-next]").on("click", function () {
      var targetSliderSelector =
        $(this).data("slider-prev") || $(this).data("slider-next");
      var targetSlider = $(targetSliderSelector);

      if (targetSlider.length) {
        var swiper = targetSlider[0].swiper;

        if (swiper) {
          if ($(this).data("slider-prev")) {
            swiper.slidePrev();
          } else {
            swiper.slideNext();
          }
        }
      }
    });



    /*-----------------------------------
          Back to top    
        -----------------------------------*/
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 20) {
        $("#back-top").addClass("show");
      } else {
        $("#back-top").removeClass("show");
      }
    });

    $(document).on("click", "#back-top", function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });



    /*-----------------------------------
          MagnificPopup  view    
        -----------------------------------*/
    $(".popup-video").magnificPopup({
      type: "iframe",
      removalDelay: 260,
      mainClass: "mfp-zoom-in",
    });

    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });


    /*-----------------------------------
         Text Splitting
      -----------------------------------*/
    Splitting();


    /*-----------------------------------
     Slider
     -----------------------------------*/
    // Partner Logo Slider
    var logoSlider = new Swiper('.logo-slider2_1', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },

    });

    var logoSlider = new Swiper('.logo-slider2_2', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },

    });

    // Logo slider3 
    var logoSlider = new Swiper('.logo-slider3', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      },

    });


    // Team Slider2 
    var TeamSlider = new Swiper('.team2-slider', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
      navigation: {
        nextEl: ".slider-nav-area .swiper-next",
        prevEl: ".slider-nav-area .swiper-prev",
      }
    });


    // Intro3 
    var IntroSlider = new Swiper('.intro3-slider', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: true,
      speed: 600,
      effect: "fade",
      navigation: {
        nextEl: ".slider-nav-area .swiper-next",
        prevEl: ".slider-nav-area .swiper-prev",
      },
    });


    // Testimonial Card Slider 
    var testimonial2 = new Swiper(".testimonial-card-slider", {
      effect: "cards",
      grabCursor: true,

      navigation: {
        nextEl: ".slider-nav-area .swiper-next",
        prevEl: ".slider-nav-area .swiper-prev",
      }
    });


    // Team Slider2 
    var TeamSlider = new Swiper('.team2-slider', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
      navigation: {
        nextEl: ".slider-nav-area .swiper-next",
        prevEl: ".slider-nav-area .swiper-prev",
      }
    });


  }); // End Document Ready Function


  /*-----------------------------------
        Preloader   
    -----------------------------------*/

  function loader() {
    $(window).on("load", function () {
      // Animate loader off screen
      $(".preloader").addClass("loaded");
      $(".preloader").delay(600).fadeOut();
    });
  }

  loader();
})(jQuery); // End jQuery

