import { products, getImgUrl } from '../data/products.js';

export function renderCatalog() {
  return `
  <div class="pt-40 pb-24">
    <!-- Editorial Header -->
    <header class="px-8 mb-24 max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div class="max-w-3xl">
          <span class="font-label uppercase tracking-[0.3em] text-[10px] text-primary/80 mb-6 block font-bold animate-reveal-up-staggered" style="animation-delay: 0.1s;">Spring / Summer 2024</span>
          <h1 class="font-headline text-7xl md:text-9xl leading-[0.9] tracking-tight font-normal animate-reveal-up-staggered" style="animation-delay: 0.2s;">
            The DAST <br/><span class="italic">Archive</span>
          </h1>
        </div>
        <div class="flex gap-16 border-t border-outline-variant/15 pt-8 md:border-0 md:pt-0 animate-reveal-up-staggered" style="animation-delay: 0.4s;">
          <div class="flex flex-col">
            <span class="font-label uppercase tracking-[0.25em] text-[9px] text-outline mb-3 font-semibold">Curated By</span>
            <span class="font-label text-[11px] uppercase tracking-[0.2em] font-bold">A. Blackwood</span>
          </div>
          <div class="flex flex-col">
            <span class="font-label uppercase tracking-[0.25em] text-[9px] text-outline mb-3 font-semibold">Location</span>
            <span class="font-label text-[11px] uppercase tracking-[0.2em] font-bold">Paris Atelier</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Filters -->
    <section class="px-8 mb-20 max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8 animate-border-reveal py-8">
      <div class="flex gap-10 overflow-x-auto hide-scrollbar animate-reveal-up-staggered" style="animation-delay: 0.6s;">
        <button class="filter-btn font-label uppercase tracking-[0.2em] text-[10px] text-on-surface font-bold border-b border-primary pb-1" data-filter="all">All Pieces</button>
        <button class="filter-btn font-label uppercase tracking-[0.2em] text-[10px] text-outline hover:text-on-surface transition-colors font-medium" data-filter="Outerwear">Outerwear</button>
        <button class="filter-btn font-label uppercase tracking-[0.2em] text-[10px] text-outline hover:text-on-surface transition-colors font-medium" data-filter="Tailoring">Tailoring</button>
        <button class="filter-btn font-label uppercase tracking-[0.2em] text-[10px] text-outline hover:text-on-surface transition-colors font-medium" data-filter="Accessories">Accessories</button>
        <button class="filter-btn font-label uppercase tracking-[0.2em] text-[10px] text-outline hover:text-on-surface transition-colors font-medium" data-filter="Footwear">Footwear</button>
      </div>
      <div class="flex items-center gap-8 animate-reveal-up-staggered" style="animation-delay: 0.7s;">
        <button class="flex items-center gap-2 font-label uppercase tracking-[0.2em] text-[10px] text-outline font-bold">
          <span>Sort By</span>
          <span class="material-symbols-outlined text-sm">expand_more</span>
        </button>
      </div>
    </section>

    <!-- Product Grid -->
    <section class="px-8 max-w-7xl mx-auto">
      <div id="product-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        ${products.map((p, i) => {
          const offsets = ['', 'md:mt-16', 'lg:mt-32', '', 'md:mt-16', 'lg:mt-32', '', 'md:mt-16', 'lg:mt-32', ''];
          return `
          <article class="group product-card cursor-pointer ${offsets[i] || ''} animate-reveal-up-staggered" style="animation-delay: ${0.1 * (i + 1)}s;" data-category="${p.category}">
            <a href="#product?id=${p.id}" class="block">
              <div class="product-image-container aspect-[3/4] bg-surface-container-low mb-8">
                <img alt="${p.name}" class="product-image w-full h-full object-cover grayscale" src="${getImgUrl(p.images[0])}" />
                <div class="view-details-overlay">
                  <span class="btn-detail">View Piece</span>
                </div>
              </div>
              <div class="flex justify-between items-start gap-4">
                <h3 class="font-headline text-3xl tracking-tight leading-tight font-normal">${p.name}</h3>
                <span class="price-reveal font-label text-[11px] uppercase tracking-[0.25em] text-outline font-bold mt-2">$${p.price.toLocaleString()}</span>
              </div>
            </a>
          </article>`;
        }).join('')}
      </div>
    </section>

    <!-- CTA -->
    <section class="mt-48 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center reveal">
      <div class="w-full md:w-1/2 order-2 md:order-1">
        <h2 class="font-headline text-6xl md:text-7xl mb-10 leading-[0.9] tracking-tight font-normal">Join the Private <br/><span class="italic text-primary">Atelier</span></h2>
        <p class="font-body text-on-surface-variant text-[15px] max-w-md mb-12 leading-relaxed">
          Members gain early access to archival drops and bespoke tailoring sessions. We curate based on character, not volume.
        </p>
        <div class="relative group inline-block">
          <button class="bg-primary text-on-primary font-label uppercase tracking-[0.4em] text-[11px] font-bold py-6 px-14 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 shadow-xl">
            Request Membership
          </button>
          <div class="absolute inset-0 border border-primary/30 translate-x-2 translate-y-2 -z-10 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
        </div>
      </div>
      <div class="w-full md:w-1/2 order-1 md:order-2 aspect-[4/3] bg-surface-container overflow-hidden">
        <img alt="Interior" class="w-full h-full object-cover grayscale opacity-60 transition-opacity duration-1000 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcfwWbrf2sQFA4agnjOCUtYL7w5BQSYEi5l83Xa-xk0iMZ_td7qZJmpXaRP1L_SkKU1wRp_uinQ-4WGWUmwbsY3uqRnqRAhVZP3eU0oc5KwqFAKbYvxtJQSpt7Ut19sGUZeHQCMNUULxzPzQoeUCjbzp8wXlbshAo3ya0vKtJUrS1gV5vYS0l_-kPXC7m-f7vuxMV_QN1wNAPOfyFEYr70rFnCA-nniXzGonpFKmIE3wCuLvhL64gS3WYKRMEc1bCNp0cOCFw80I9B" />
      </div>
    </section>
  </div>`;
}

// Wire up category filters after render
setTimeout(() => {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('text-on-surface', 'font-bold', 'border-b', 'border-primary');
        b.classList.add('text-outline', 'font-medium');
      });
      btn.classList.remove('text-outline', 'font-medium');
      btn.classList.add('text-on-surface', 'font-bold', 'border-b', 'border-primary');

      const filter = btn.dataset.filter;
      document.querySelectorAll('#product-grid article').forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}, 100);
