/**
 * duezito AI Core — Main Script
 */

(function () {
  'use strict';

  /* Fade-in on scroll */
  function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
  }

  /* Auto fade-in for cards and flow steps */
  function autoTagAnimations() {
    const selectors = '.card, .flow-step, .tech-detail, .section-header';
    document.querySelectorAll(selectors).forEach((el) => {
      el.classList.add('fade-in');
    });
  }

  /* Mobile nav toggle */
  function initMobileNav() {
    const toggle = document.querySelector('.mobile-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
      });
    });
  }

  /* Navbar border on scroll */
  function initNavScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
      nav.style.borderBottomColor =
        window.scrollY > 50 ? 'rgba(108, 60, 225, 0.2)' : '';
    });
  }

  /* Init */
  document.addEventListener('DOMContentLoaded', () => {
    autoTagAnimations();
    initScrollAnimations();
    initMobileNav();
    initNavScroll();
  });
})();
