import { getCart, getCartTotal, getCartCount, removeFromCart, updateQty } from '../store/cart.js';
import { getImgUrl } from '../data/products.js';

export function renderCartDrawer() {
  return `
  <div id="cart-overlay" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] hidden opacity-0 transition-opacity duration-500"></div>
  <aside id="cart-drawer" class="fixed top-0 right-0 h-full w-full max-w-[480px] bg-[#1c1b1b] z-[70] translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col shadow-2xl border-l border-[#444748]/10">
    <header class="flex justify-between items-center px-10 py-8 border-b border-[#444748]/15">
      <div>
        <h2 class="font-label uppercase tracking-[0.3em] text-[11px] font-bold text-[#e5e2e1]">Your Bag</h2>
        <span id="cart-drawer-count" class="font-label text-[9px] uppercase tracking-[0.2em] text-[#8e9192] mt-1 block">0 items</span>
      </div>
      <button id="cart-close-btn" class="hover:text-[#e9c349] transition-colors p-2">
        <span class="material-symbols-outlined">close</span>
      </button>
    </header>
    <div id="cart-drawer-items" class="flex-1 overflow-y-auto px-10 py-8 space-y-8 hide-scrollbar">
    </div>
    <footer id="cart-drawer-footer" class="px-10 py-8 border-t border-[#444748]/15 space-y-6">
      <div class="flex justify-between items-end">
        <span class="font-label uppercase tracking-[0.3em] text-[10px] font-bold text-[#8e9192]">Subtotal</span>
        <span id="cart-drawer-total" class="font-headline text-3xl text-[#e9c349]">$0</span>
      </div>
      <a id="cart-checkout-btn" href="#checkout" class="block w-full py-5 bg-[#e9c349] text-[#3c2f00] text-[11px] font-bold uppercase tracking-[0.4em] font-label text-center hover:brightness-110 transition-all shadow-xl">
        Proceed to Checkout
      </a>
      <button id="cart-continue-btn" class="w-full py-4 border border-[#444748]/30 text-[10px] uppercase tracking-[0.3em] font-label font-bold hover:border-[#e9c349] hover:text-[#e9c349] transition-all text-center">
        Continue Shopping
      </button>
    </footer>
  </aside>`;
}

export function openCart() {
  const overlay = document.getElementById('cart-overlay');
  const drawer = document.getElementById('cart-drawer');
  if (!overlay || !drawer) return;
  overlay.classList.remove('hidden');
  requestAnimationFrame(() => {
    overlay.classList.remove('opacity-0');
    overlay.classList.add('opacity-100');
    drawer.classList.remove('translate-x-full');
    drawer.classList.add('translate-x-0');
  });
  document.body.style.overflow = 'hidden';
}

export function closeCart() {
  const overlay = document.getElementById('cart-overlay');
  const drawer = document.getElementById('cart-drawer');
  if (!overlay || !drawer) return;
  overlay.classList.remove('opacity-100');
  overlay.classList.add('opacity-0');
  drawer.classList.remove('translate-x-0');
  drawer.classList.add('translate-x-full');
  document.body.style.overflow = '';
  setTimeout(() => overlay.classList.add('hidden'), 500);
}

export function refreshCartDrawer() {
  const items = getCart();
  const container = document.getElementById('cart-drawer-items');
  const countEl = document.getElementById('cart-drawer-count');
  const totalEl = document.getElementById('cart-drawer-total');
  const footerEl = document.getElementById('cart-drawer-footer');

  if (!container) return;

  const count = getCartCount();
  if (countEl) countEl.textContent = `${count} item${count !== 1 ? 's' : ''}`;
  if (totalEl) totalEl.textContent = `$${getCartTotal().toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center h-full text-center space-y-6 py-20">
        <span class="material-symbols-outlined text-[#444748] text-5xl">shopping_bag</span>
        <p class="font-headline text-2xl italic text-[#8e9192]">Your bag is empty</p>
        <p class="text-[11px] text-[#8e9192] font-label uppercase tracking-[0.2em]">Discover our curated collection</p>
        <a href="#catalog" class="mt-4 px-10 py-4 border border-[#444748]/30 font-label uppercase tracking-[0.2em] text-[10px] font-bold hover:border-[#e9c349] hover:text-[#e9c349] transition-all">Browse Archive</a>
      </div>`;
    if (footerEl) footerEl.classList.add('hidden');
    return;
  }

  if (footerEl) footerEl.classList.remove('hidden');

  container.innerHTML = items.map(item => `
    <div class="flex gap-6 items-start group" data-id="${item.id}" data-size="${item.size}">
      <div class="w-24 h-32 bg-[#201f1f] overflow-hidden flex-shrink-0">
        <img class="w-full h-full object-cover" alt="${item.name}" src="${getImgUrl(item.image)}" />
      </div>
      <div class="flex-1 space-y-2">
        <div class="flex justify-between items-start gap-2">
          <h4 class="font-label text-[10px] uppercase tracking-[0.15em] font-bold leading-relaxed">${item.name}</h4>
          <button class="cart-remove-btn opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#e9c349]" data-id="${item.id}" data-size="${item.size}">
            <span class="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
        <p class="text-[9px] text-[#8e9192] uppercase tracking-[0.2em] font-label">${item.size}</p>
        <div class="flex justify-between items-center mt-3">
          <div class="flex items-center border border-[#444748]/30">
            <button class="cart-qty-btn px-3 py-1.5 text-[11px] hover:text-[#e9c349] transition-colors" data-id="${item.id}" data-size="${item.size}" data-action="dec">−</button>
            <span class="px-4 py-1.5 text-[11px] font-label font-bold border-x border-[#444748]/30">${item.qty}</span>
            <button class="cart-qty-btn px-3 py-1.5 text-[11px] hover:text-[#e9c349] transition-colors" data-id="${item.id}" data-size="${item.size}" data-action="inc">+</button>
          </div>
          <span class="font-headline text-lg">$${(item.price * item.qty).toLocaleString()}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Wire up remove + qty buttons
  container.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromCart(btn.dataset.id, btn.dataset.size);
      refreshCartDrawer();
    });
  });

  container.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = items.find(i => i.id === btn.dataset.id && i.size === btn.dataset.size);
      if (!item) return;
      const newQty = btn.dataset.action === 'inc' ? item.qty + 1 : item.qty - 1;
      updateQty(btn.dataset.id, btn.dataset.size, newQty);
      refreshCartDrawer();
    });
  });
}

export function initCartDrawer() {
  // Close button
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCart);
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
  document.getElementById('cart-continue-btn')?.addEventListener('click', (e) => { e.preventDefault(); closeCart(); });
  document.getElementById('cart-checkout-btn')?.addEventListener('click', closeCart);
  refreshCartDrawer();
}
