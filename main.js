import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderHome } from './pages/home.js';
import { renderCatalog } from './pages/catalog.js';
import { renderProduct } from './pages/product.js';
import { renderCheckout } from './pages/checkout.js';
import { renderCare } from './pages/care.js';
import { renderConfirmation } from './pages/confirmation.js';
import { renderLocator } from './pages/locator.js';

const routes = {
  '': renderHome,
  'home': renderHome,
  'catalog': renderCatalog,
  'product': renderProduct,
  'checkout': renderCheckout,
  'care': renderCare,
  'confirmation': renderConfirmation,
  'locator': renderLocator,
};

function getRoute() {
  const hash = window.location.hash.slice(1) || '';
  return hash.split('?')[0];
}

function navigate() {
  const route = getRoute();
  const app = document.getElementById('app');
  const renderPage = routes[route] || renderHome;

  app.innerHTML = '';
  app.innerHTML = renderHeader(route) + '<main>' + renderPage() + '</main>' + renderFooter();

  // Re-init scroll reveals
  initScrollReveal();
  initInteractions();

  // Scroll to top
  window.scrollTo(0, 0);
}

export function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

function initInteractions() {
  // Size selectors
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.size-btn').forEach(b => {
        b.classList.remove('border-primary', 'text-primary', 'bg-primary/5');
        b.classList.add('border-outline-variant/30');
      });
      this.classList.remove('border-outline-variant/30');
      this.classList.add('border-primary', 'text-primary', 'bg-primary/5');
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const toggle = item.querySelector('.faq-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const content = item.querySelector('.faq-content');
        const isOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('open');
          const c = i.querySelector('.faq-content');
          if (c) c.classList.remove('open');
        });
        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
          if (content) content.classList.add('open');
        }
      });
    }
  });
}

window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', navigate);
