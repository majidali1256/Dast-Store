import { products, getProduct, getImgUrl } from '../data/products.js';
import { addToCart } from '../store/cart.js';
import { showToast } from '../components/toast.js';
import { openCart, refreshCartDrawer } from '../components/cart-drawer.js';

export function renderProduct(params = {}) {
  const product = getProduct(params.id || 'obsidian-overcoat');
  let selectedSize = product.sizes[1] || product.sizes[0];

  // Build size buttons
  const sizeButtons = product.sizes.map(size => {
    const isSelected = size === selectedSize;
    const cls = isSelected
      ? 'border-primary text-primary bg-primary/5'
      : 'border-outline-variant/30';
    return `<button class="size-btn px-8 py-3 border text-[10px] font-label uppercase tracking-[0.25em] hover:border-primary hover:text-primary font-bold ${cls}" data-size="${size}">${size}</button>`;
  }).join('');

  // Build image gallery
  const mainImg = getImgUrl(product.images[0]);
  const galleryExtras = product.images.length > 1
    ? `<div class="grid grid-cols-2 gap-8 reveal" style="animation-delay:0.6s">
        ${product.images.slice(1, 3).map(img => `
          <div class="aspect-square bg-surface-container-low overflow-hidden">
            <img class="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" alt="${product.name} detail" src="${getImgUrl(img)}" />
          </div>
        `).join('')}
      </div>` : '';

  // Styled-with products (different from current)
  const styledWith = products.filter(p => p.id !== product.id).slice(0, 3);

  const html = `
  <div class="min-h-screen pt-32 overflow-x-hidden">
    <section class="grid grid-cols-1 md:grid-cols-12 max-w-[1600px] mx-auto">
      <div class="md:col-span-7 px-8 md:px-12 flex flex-col gap-8">
        <div class="aspect-[3/4] bg-surface-container-low overflow-hidden" style="opacity:0;animation: hero-entrance 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;">
          <img class="w-full h-full object-cover grayscale transition-transform duration-[2.5s] ease-out hover:scale-105" alt="${product.name}" src="${mainImg}" />
        </div>
        ${galleryExtras}
      </div>

      <div class="md:col-span-5 px-8 md:px-16 pt-0 md:pt-4 space-y-12">
        <div class="sticky top-40 space-y-12">
          <header class="space-y-6">
            <p class="font-label uppercase tracking-[0.3em] text-[10px] text-primary font-bold animate-reveal-up-staggered" style="animation-delay:0.1s">${product.badge}</p>
            <h1 class="font-headline text-6xl md:text-8xl tracking-tight leading-[0.9] text-on-surface font-normal animate-reveal-up-staggered" style="animation-delay:0.2s">
              ${product.name.split(' ').slice(0, -1).join(' ')} <br/><span class="italic">${product.name.split(' ').pop()}</span>
            </h1>
            <p class="font-headline text-3xl text-on-surface font-normal mt-4 animate-reveal-up-staggered" style="animation-delay:0.3s">$${product.price.toLocaleString()}.00</p>
          </header>

          <div class="space-y-10">
            <div class="animate-reveal-up-staggered" style="animation-delay:0.4s">
              <span class="font-label uppercase tracking-[0.25em] text-[10px] text-outline block mb-5 font-semibold">Select Size</span>
              <div class="size-selector flex flex-wrap gap-3">
                ${sizeButtons}
              </div>
            </div>
            <div class="space-y-4">
              <button id="add-to-bag-btn" data-product-id="${product.id}" class="block w-full bg-primary text-on-primary py-6 font-label font-bold uppercase tracking-[0.4em] text-[11px] hover:brightness-110 active:scale-[0.98] transition-all shadow-xl text-center animate-reveal-up-staggered cursor-pointer" style="animation-delay:0.5s">Add to Bag</button>
              <a href="#locator" class="block w-full border border-outline-variant/30 py-6 font-label uppercase tracking-[0.4em] text-[11px] font-bold hover:bg-surface-container-high transition-all text-center animate-reveal-up-staggered" style="animation-delay:0.6s">Find in Store</a>
            </div>
          </div>

          <div class="pt-12 border-t border-outline-variant/15 space-y-8">
            <p class="font-headline text-2xl leading-tight text-on-surface italic font-normal">"${product.description}"</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Details -->
    <section class="bg-surface-container-lowest py-48 px-8 md:px-24">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
        <div class="space-y-10 reveal group">
          <span class="font-label uppercase tracking-[0.4em] text-[10px] text-primary font-bold">01 / Process</span>
          <h3 class="font-headline text-5xl tracking-tight leading-none font-normal">Details &amp; <br/><span class="italic">Care</span></h3>
          <ul class="space-y-5 font-body text-[13px] text-on-surface-variant border-l border-primary/30 pl-8 leading-relaxed font-medium group-hover:border-primary transition-colors">
            ${product.details.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
        <div class="space-y-10 reveal group">
          <span class="font-label uppercase tracking-[0.4em] text-[10px] text-primary font-bold">02 / Ethos</span>
          <h3 class="font-headline text-5xl tracking-tight leading-none font-normal">Sustain-<br/><span class="italic">ability</span></h3>
          <p class="font-body text-[13px] text-on-surface-variant leading-relaxed font-medium">
            Our materials are sourced from regenerative farms. We track every fiber from origin to final stitch. Zero-waste pattern cutting ensures minimal environmental footprint.
          </p>
        </div>
        <div class="space-y-10 reveal group">
          <span class="font-label uppercase tracking-[0.4em] text-[10px] text-primary font-bold">03 / Origins</span>
          <h3 class="font-headline text-5xl tracking-tight leading-none font-normal">The <br/><span class="italic">Atelier</span></h3>
          <p class="font-body text-[13px] text-on-surface-variant leading-relaxed font-medium">
            Forged in Northern Italy. This garment represents hours of human labor, carrying the signature of the master tailor inside the inner breast pocket.
          </p>
        </div>
      </div>
    </section>

    <!-- Styled With -->
    <section class="py-48 px-8 md:px-24">
      <div class="max-w-7xl mx-auto mb-20 flex justify-between items-end reveal">
        <h2 class="font-headline text-7xl tracking-tight font-normal">Styled <span class="italic text-primary">With</span></h2>
      </div>
      <div class="max-w-7xl mx-auto flex gap-12 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
        ${styledWith.map((item, i) => `
          <a href="#product?id=${item.id}" class="min-w-[320px] md:min-w-[400px] snap-start group cursor-pointer reveal" style="animation-delay:${0.1*(i+1)}s">
            <div class="aspect-[3/4] overflow-hidden mb-8 bg-surface-container-low">
              <img class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" alt="${item.name}" src="${getImgUrl(item.images[0])}" />
            </div>
            <div class="flex justify-between items-start gap-4 transition-transform duration-500 group-hover:translate-x-1">
              <div class="space-y-1">
                <span class="font-label uppercase tracking-[0.2em] text-[9px] text-outline font-bold">${item.category}</span>
                <h4 class="font-headline text-3xl tracking-tight leading-none font-normal">${item.name}</h4>
              </div>
              <p class="font-label text-[11px] uppercase tracking-[0.25em] text-outline font-bold mt-2">$${item.price.toLocaleString()}</p>
            </div>
          </a>
        `).join('')}
      </div>
    </section>
  </div>`;

  // Wire up add-to-bag after render
  setTimeout(() => {
    const addBtn = document.getElementById('add-to-bag-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const activeSize = document.querySelector('.size-selector .size-btn.border-primary');
        const size = activeSize ? activeSize.dataset.size : product.sizes[0];
        addToCart(product, size);
        showToast(`${product.name} added to bag`);
        setTimeout(() => { openCart(); refreshCartDrawer(); }, 600);
      });
    }
  }, 100);

  return html;
}
