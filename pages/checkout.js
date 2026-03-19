import { getCart, getCartTotal, removeFromCart, updateQty, clearCart } from '../store/cart.js';
import { getImgUrl } from '../data/products.js';

export function renderCheckout() {
  const items = getCart();
  const subtotal = getCartTotal();
  const shipping = 45;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = subtotal + shipping + tax;

  const itemsHTML = items.length > 0 ? items.map(item => `
    <div class="flex gap-6 items-start group">
      <div class="w-24 h-32 bg-surface-container overflow-hidden">
        <img class="w-full h-full object-cover" alt="${item.name}" src="${getImgUrl(item.image)}" />
      </div>
      <div class="flex-1 space-y-2">
        <div class="flex justify-between items-start gap-4">
          <p class="text-[10px] uppercase tracking-[0.15em] font-bold font-label leading-relaxed">${item.name}</p>
          <p class="text-base font-headline font-normal">$${(item.price * item.qty).toLocaleString()}</p>
        </div>
        <p class="text-[9px] text-on-surface-variant uppercase tracking-[0.2em] font-label font-medium">${item.size}</p>
        <div class="flex justify-between items-center mt-2">
          <div class="flex items-center border border-[#444748]/30">
            <button class="checkout-qty-btn px-3 py-1 text-[10px] hover:text-primary transition-colors" data-id="${item.id}" data-size="${item.size}" data-action="dec">−</button>
            <span class="px-3 py-1 text-[10px] font-label font-bold border-x border-[#444748]/30">${item.qty}</span>
            <button class="checkout-qty-btn px-3 py-1 text-[10px] hover:text-primary transition-colors" data-id="${item.id}" data-size="${item.size}" data-action="inc">+</button>
          </div>
          <button class="checkout-remove-btn text-[9px] text-outline hover:text-primary uppercase tracking-[0.2em] font-label transition-colors" data-id="${item.id}" data-size="${item.size}">Remove</button>
        </div>
      </div>
    </div>
  `).join('') : `
    <div class="text-center py-12">
      <span class="material-symbols-outlined text-[#444748] text-3xl mb-4 block">shopping_bag</span>
      <p class="font-headline text-xl italic text-[#8e9192] mb-4">Your bag is empty</p>
      <a href="#catalog" class="font-label uppercase tracking-[0.2em] text-[10px] text-primary font-bold">Browse Archive</a>
    </div>`;

  const html = `
  <div class="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <!-- Checkout Form -->
      <div class="lg:col-span-7 space-y-20">
        <div class="space-y-4 animate-reveal-up-staggered" style="animation-delay:0.1s">
          <h1 class="font-headline text-5xl md:text-8xl tracking-tight leading-[0.9] text-on-surface font-normal">Checkout</h1>
          <p class="text-on-surface-variant uppercase tracking-[0.25em] text-[10px] font-label font-semibold">Delivery &amp; Acquisition</p>
        </div>

        <!-- Shipping Information -->
        <section class="space-y-10 animate-reveal-up-staggered" style="animation-delay:0.2s">
          <div class="flex items-end justify-between border-b border-outline-variant/15 pb-4">
            <h2 class="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface font-bold">Shipping Information</h2>
            <span class="text-[9px] uppercase tracking-widest text-on-surface-variant font-label">Required</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div class="space-y-2 group">
              <label class="block text-[9px] uppercase tracking-[0.2em] text-on-surface-variant group-focus-within:text-primary transition-colors font-label font-semibold">First Name</label>
              <input class="w-full bg-transparent border-b border-outline/30 focus:border-primary outline-none py-2 text-sm transition-colors rounded-none placeholder:text-surface-variant font-body" placeholder="Elias" type="text" />
            </div>
            <div class="space-y-2 group">
              <label class="block text-[9px] uppercase tracking-[0.2em] text-on-surface-variant group-focus-within:text-primary transition-colors font-label font-semibold">Last Name</label>
              <input class="w-full bg-transparent border-b border-outline/30 focus:border-primary outline-none py-2 text-sm transition-colors rounded-none placeholder:text-surface-variant font-body" placeholder="Sterling" type="text" />
            </div>
            <div class="md:col-span-2 space-y-2 group">
              <label class="block text-[9px] uppercase tracking-[0.2em] text-on-surface-variant group-focus-within:text-primary transition-colors font-label font-semibold">Street Address</label>
              <input class="w-full bg-transparent border-b border-outline/30 focus:border-primary outline-none py-2 text-sm transition-colors rounded-none placeholder:text-surface-variant font-body" placeholder="142 Avenue des Champs-Élysées" type="text" />
            </div>
            <div class="space-y-2 group">
              <label class="block text-[9px] uppercase tracking-[0.2em] text-on-surface-variant group-focus-within:text-primary transition-colors font-label font-semibold">City</label>
              <input class="w-full bg-transparent border-b border-outline/30 focus:border-primary outline-none py-2 text-sm transition-colors rounded-none placeholder:text-surface-variant font-body" placeholder="Paris" type="text" />
            </div>
            <div class="space-y-2 group">
              <label class="block text-[9px] uppercase tracking-[0.2em] text-on-surface-variant group-focus-within:text-primary transition-colors font-label font-semibold">Postal Code</label>
              <input class="w-full bg-transparent border-b border-outline/30 focus:border-primary outline-none py-2 text-sm transition-colors rounded-none placeholder:text-surface-variant font-body" placeholder="75008" type="text" />
            </div>
          </div>
        </section>

        <!-- Shipping Method -->
        <section class="space-y-10 animate-reveal-up-staggered" style="animation-delay:0.3s">
          <div class="flex items-end justify-between border-b border-outline-variant/15 pb-4">
            <h2 class="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface font-bold">Shipping Method</h2>
          </div>
          <div class="space-y-4">
            <label class="flex items-center justify-between p-8 bg-surface-container-low cursor-pointer group hover:bg-surface-container transition-all duration-500 border border-transparent hover:border-outline/10">
              <div class="flex items-center gap-6">
                <input checked class="w-4 h-4 text-primary bg-transparent border-outline focus:ring-0 focus:ring-offset-0" name="shipping" type="radio" />
                <div class="space-y-1">
                  <p class="text-[11px] uppercase tracking-[0.2em] font-bold font-label">Priority Courier</p>
                  <p class="text-[10px] text-on-surface-variant tracking-wide font-body">White-glove delivery within 2-3 business days</p>
                </div>
              </div>
              <p class="text-lg font-headline font-normal tracking-tight">$45.00</p>
            </label>
            <label class="flex items-center justify-between p-8 bg-surface-container-low cursor-pointer group hover:bg-surface-container transition-all duration-500 border border-transparent hover:border-outline/10">
              <div class="flex items-center gap-6">
                <input class="w-4 h-4 text-primary bg-transparent border-outline focus:ring-0 focus:ring-offset-0" name="shipping" type="radio" />
                <div class="space-y-1">
                  <p class="text-[11px] uppercase tracking-[0.2em] font-bold font-label">Standard Atelier</p>
                  <p class="text-[10px] text-on-surface-variant tracking-wide font-body">Handled with care, 5-7 business days</p>
                </div>
              </div>
              <p class="text-[9px] uppercase tracking-[0.2em] font-label font-semibold text-on-surface-variant">Complimentary</p>
            </label>
          </div>
        </section>

        <!-- Payment Details -->
        <section class="space-y-10 animate-reveal-up-staggered" style="animation-delay:0.4s">
          <div class="flex items-end justify-between border-b border-outline-variant/15 pb-4">
            <h2 class="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface font-bold">Payment Details</h2>
          </div>
          <div class="p-10 bg-surface-container-low space-y-10 border border-outline/5">
            <div class="space-y-2 group">
              <label class="block text-[9px] uppercase tracking-[0.2em] text-on-surface-variant group-focus-within:text-primary transition-colors font-label font-semibold">Card Number</label>
              <div class="relative">
                <input class="w-full bg-transparent border-b border-outline/30 focus:border-primary outline-none py-2 text-sm transition-colors rounded-none font-body" placeholder="0000 0000 0000 0000" type="text" />
                <div class="absolute right-0 top-1/2 -translate-y-1/2">
                  <span class="material-symbols-outlined text-on-surface-variant group-focus-within:text-primary transition-colors">credit_card</span>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-12">
              <div class="space-y-2 group">
                <label class="block text-[9px] uppercase tracking-[0.2em] text-on-surface-variant group-focus-within:text-primary transition-colors font-label font-semibold">Expiry Date</label>
                <input class="w-full bg-transparent border-b border-outline/30 focus:border-primary outline-none py-2 text-sm transition-colors rounded-none font-body" placeholder="MM/YY" type="text" />
              </div>
              <div class="space-y-2 group">
                <label class="block text-[9px] uppercase tracking-[0.2em] text-on-surface-variant group-focus-within:text-primary transition-colors font-label font-semibold">CVV</label>
                <input class="w-full bg-transparent border-b border-outline/30 focus:border-primary outline-none py-2 text-sm transition-colors rounded-none font-body" placeholder="000" type="text" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Order Summary -->
      <aside class="lg:col-span-5 sticky top-32">
        <div class="bg-surface-container-low p-12 space-y-12 border border-outline/5 shadow-2xl">
          <div class="space-y-8">
            <h3 class="font-headline text-4xl tracking-tight border-b border-outline-variant/15 pb-6 font-normal">Summary</h3>
            <div id="checkout-items" class="space-y-8">
              ${itemsHTML}
            </div>
          </div>
          ${items.length > 0 ? `
          <div class="space-y-4 pt-8 border-t border-outline-variant/15">
            <div class="flex justify-between text-[10px] uppercase tracking-[0.25em] text-on-surface-variant font-label font-semibold">
              <span>Subtotal</span><span>$${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
            </div>
            <div class="flex justify-between text-[10px] uppercase tracking-[0.25em] text-on-surface-variant font-label font-semibold">
              <span>Shipping</span><span>$${shipping.toFixed(2)}</span>
            </div>
            <div class="flex justify-between text-[10px] uppercase tracking-[0.25em] text-on-surface-variant font-label font-semibold">
              <span>Estimated Tax</span><span>$${tax.toFixed(2)}</span>
            </div>
            <div class="flex justify-between items-end pt-6 border-t border-outline-variant/15">
              <span class="text-[11px] uppercase tracking-[0.3em] font-bold font-label">Total Acquisition</span>
              <span class="text-3xl font-headline font-normal text-primary">$${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
          <div class="space-y-6">
            <a href="#confirmation" id="place-order-btn" class="block w-full py-6 bg-primary text-on-primary text-[11px] font-bold uppercase tracking-[0.4em] transition-all hover:brightness-110 active:scale-[0.98] font-label shadow-xl text-center relative overflow-hidden group">
              <span class="relative z-10">Complete Acquisition</span>
              <div class="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            <p class="text-[9px] text-center text-on-surface-variant leading-relaxed tracking-[0.15em] font-label font-medium">
              By placing this order, you agree to the DAST Terms and Privacy Protocol.
            </p>
          </div>` : ''}
        </div>
        ${items.length > 0 ? `
        <div class="mt-8 grid grid-cols-3 gap-4">
          <div class="text-center space-y-2 group">
            <span class="material-symbols-outlined text-primary/70 text-xl group-hover:text-primary transition-all duration-500">encrypted</span>
            <p class="text-[8px] uppercase tracking-[0.2em] text-on-surface-variant font-label font-bold">Secured</p>
          </div>
          <div class="text-center space-y-2 group">
            <span class="material-symbols-outlined text-primary/70 text-xl group-hover:text-primary transition-all duration-500">public</span>
            <p class="text-[8px] uppercase tracking-[0.2em] text-on-surface-variant font-label font-bold">Global</p>
          </div>
          <div class="text-center space-y-2 group">
            <span class="material-symbols-outlined text-primary/70 text-xl group-hover:text-primary transition-all duration-500">verified</span>
            <p class="text-[8px] uppercase tracking-[0.2em] text-on-surface-variant font-label font-bold">Authentic</p>
          </div>
        </div>` : ''}
      </aside>
    </div>
  </div>`;

  // Wire up qty and remove buttons + place order
  setTimeout(() => {
    document.querySelectorAll('.checkout-qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = items.find(i => i.id === btn.dataset.id && i.size === btn.dataset.size);
        if (!item) return;
        const newQty = btn.dataset.action === 'inc' ? item.qty + 1 : item.qty - 1;
        updateQty(btn.dataset.id, btn.dataset.size, newQty);
        // Re-navigate to refresh
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      });
    });
    document.querySelectorAll('.checkout-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromCart(btn.dataset.id, btn.dataset.size);
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      });
    });
    document.getElementById('place-order-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      clearCart();
      window.location.hash = '#confirmation';
    });
  }, 100);

  return html;
}
