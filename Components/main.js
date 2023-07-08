import React, { useEffect, useRef } from "react";
import $ from 'jquery';
import AOS from 'aos';
import Swiper from 'swiper';
import gsap from "gsap";

export default function Mainjs() {
  const Isotope =require('isotope-layout');
  const GLightbox=require('glightbox');
    "use strict";

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

   
    /**
     * Auto generate the hero carousel indicators
     */
    let heroCarouselIndicators = document.querySelector('#hero .carousel-indicators');
    if (heroCarouselIndicators) {
      let heroCarouselItems = document.querySelectorAll('#hero .carousel-item')

      heroCarouselItems.forEach((item, index) => {
        if (index === 0) {
          heroCarouselIndicators.innerHTML += `<li data-bs-target="#hero" data-bs-slide-to="${index}" class="active"></li>`;
        } else {
          heroCarouselIndicators.innerHTML += `<li data-bs-target="#hero" data-bs-slide-to="${index}"></li>`;
        }
      });
    }

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const togglescrollTop = function() {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
      window.addEventListener('load', togglescrollTop);
      document.addEventListener('scroll', togglescrollTop);
      scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }));
    }

    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });

    /**
     * Porfolio isotope and filter
     */
    let portfolionIsotope = document.querySelector('.portfolio-isotope');

    if (portfolionIsotope) {

      let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
      let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
      let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

      window.addEventListener('load', () => {
        let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
          itemSelector: '.portfolio-item',
          layoutMode: portfolioLayout,
          filter: portfolioFilter,
          sortBy: portfolioSort
        });

        let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
        menuFilters.forEach(function(el) {
          el.addEventListener('click', function() {
            document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            portfolioIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            if (typeof aos_init === 'function') {
              aos_init();
            }
          }, false);
        });

      });

    }

    /**
     * Clients Slider
     */
    const swiper = new Swiper('.clients-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 120
        }
      }
    });

    /**
     * Testimonials Slider
     */
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });

    /**
     * Testimonials Slider
     */
    new Swiper('.portfolio-details-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });

    /**
     * Animation on scroll function and init
     */
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', () => {
      aos_init();
    });
    // Dom elements
    var btnHello = $('.btn-hello'),
      theHeader = $('.Contactheader'),
      contactTiles = $('.contact-tiles'),
      sayHelloTitle = $('.contact h3'),

      // States
      btnClicked = false;

      // New timelines... duh
     const tlIn = gsap.timeline({
        paused: true
      });
    const tlOut = gsap.timeline({
      paused: true
    });

    // Animation timelines

    //Timeline In
    tlIn.to(theHeader, 2, {
        backgroundColor: 'rgba(0,0,0,0.85)'
      })
      .to(theHeader, 1, {
        top: '-60px',
      }, '-=0.6')
      .from(sayHelloTitle, .2, {
        opacity: '0',
        scale: '0.9'
      })
      .staggerFrom(contactTiles, .25, {
        opacity: '1',
        scale: '1.2'
      }, .1);

    // Timeline Out - not done 
    /*  1. Fade out
       2. Jump to top of page (outside viewport) + restore everything to original state, 0s
       3. Animate into place with y: '60px' */
    tlOut.to(theHeader, 0.5, {
        opacity: '0',
      })
      .to(theHeader, 0, {
        top: '-100%',
        opacity: '1'
      })
      .to(theHeader, 0.2, {
        y: '60px'
      });


    // Functions

    var animInContact = function() {
      tlIn.play();

      setTimeout(function() {
        $('.Contactheader').addClass('to-bottom');
        btnHello.html('GO BACK');
      }, 1200);
    }

    var animOutContact = function() {
      tlIn.reverse(); // reverse for now
      //tlOut.play(); 
      setTimeout(function() {
        $('.Contactheader').removeClass('to-bottom');
        btnHello.html('SAY HELLO');
      }, 650);
    }

    // Bind clicks to .btn-hello

    btnHello.click(function() {
      if (btnClicked === false) {

        animInContact();
        btnClicked = true;

      } else {

        animOutContact();
        btnClicked = false;

      }
    });


   
};

