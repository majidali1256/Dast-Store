export function renderCheckout() {
  return `
  <div class="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <!-- Left Column: Checkout Form -->
      <div class="lg:col-span-7 space-y-20">
        <div class="space-y-4 animate-reveal-up-staggered" style="animation-delay:0.1s">
          <h1 class="font-headline text-5xl md:text-8xl tracking-tight leading-[0.9] text-on-surface font-normal">Checkout</h1>
          <p class="text-on-surface-variant uppercase tracking-[0.25em] text-[10px] font-label font-semibold">Step 2 of 3 — Delivery &amp; Acquisition</p>
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

      <!-- Right Column: Order Summary -->
      <aside class="lg:col-span-5 sticky top-32">
        <div class="bg-surface-container-low p-12 space-y-12 border border-outline/5 shadow-2xl">
          <div class="space-y-8">
            <h3 class="font-headline text-4xl tracking-tight border-b border-outline-variant/15 pb-6 font-normal">Summary</h3>
            <div class="space-y-8">
              <div class="flex gap-6 items-start">
                <div class="w-24 h-32 bg-surface-container overflow-hidden">
                  <img class="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110" alt="DAST Signature Overcoat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiKv3CjpiKmLlDOg5Ve5la-_IelmsQg02NQFQnVS12HAyfJveHfquKoPX9WzluHbEikhVuPKTyZbm0R74nxJE9eL4eWEWAvfPZ3ot-CsSQpqd5ZV1hrUJORcI3oo5b9PSSgQ0upSRvFl4M2RfpPOQYyWVZ4oKr6nas___aELTk-n5uYHE74TNtUkXAST1o98oMDiQkR5AWR69VWGMRgvx2nkL3Zbs8tbJswMtotpIWRoulmxFTqHTHuE8Liz9WBTT_K89WO_-0GelG" />
                </div>
                <div class="flex-1 space-y-2">
                  <div class="flex justify-between items-start gap-4">
                    <p class="text-[10px] uppercase tracking-[0.15em] font-bold font-label leading-relaxed">DAST Signature Overcoat</p>
                    <p class="text-base font-headline font-normal">$1,250</p>
                  </div>
                  <p class="text-[9px] text-on-surface-variant uppercase tracking-[0.2em] font-label font-medium">Charcoal / Size 48</p>
                  <p class="text-[9px] text-on-surface-variant uppercase tracking-[0.2em] font-label mt-2">Qty: 1</p>
                </div>
              </div>
              <div class="flex gap-6 items-start">
                <div class="w-24 h-32 bg-surface-container overflow-hidden">
                  <img class="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110" alt="Nocturnal Grain Boot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANLQwL60x_ux4ZQ1dUyY94zZdI2-RRF9czvIVGr6rT_DXp2k4luUtKCnwA46MgcpbkkFF_XxV3RGF0Mn92cljsEQaA0qFO6lEqGK3_7D41bgcXFboJGoA1UZkVwodk1emHfaB8E9XPsP0syr7Ks9OQK8FOjhSmmvscPYZgU7mGA6kPYQUZTUehuOu0SAY4I__Leyr_UcsQKmmgTa9wpu1JouZHXgh02fBWM628uFVtI6tFYvrip5CRf9Z8fv00kGD3JOqAPCyvHiM6" />
                </div>
                <div class="flex-1 space-y-2">
                  <div class="flex justify-between items-start gap-4">
                    <p class="text-[10px] uppercase tracking-[0.15em] font-bold font-label leading-relaxed">Nocturnal Grain Boot</p>
                    <p class="text-base font-headline font-normal">$840</p>
                  </div>
                  <p class="text-[9px] text-on-surface-variant uppercase tracking-[0.2em] font-label font-medium">Black Grain / Size 42</p>
                  <p class="text-[9px] text-on-surface-variant uppercase tracking-[0.2em] font-label mt-2">Qty: 1</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Totals -->
          <div class="space-y-4 pt-8 border-t border-outline-variant/15">
            <div class="flex justify-between text-[10px] uppercase tracking-[0.25em] text-on-surface-variant font-label font-semibold">
              <span>Subtotal</span><span>$2,090.00</span>
            </div>
            <div class="flex justify-between text-[10px] uppercase tracking-[0.25em] text-on-surface-variant font-label font-semibold">
              <span>Shipping</span><span>$45.00</span>
            </div>
            <div class="flex justify-between text-[10px] uppercase tracking-[0.25em] text-on-surface-variant font-label font-semibold">
              <span>Estimated Tax</span><span>$167.20</span>
            </div>
            <div class="flex justify-between items-end pt-6 border-t border-outline-variant/15">
              <span class="text-[11px] uppercase tracking-[0.3em] font-bold font-label">Total Acquisition</span>
              <span class="text-3xl font-headline font-normal text-primary">$2,302.20</span>
            </div>
          </div>

          <!-- Action -->
          <div class="space-y-6">
            <a href="#confirmation" class="block w-full py-6 bg-primary text-on-primary text-[11px] font-bold uppercase tracking-[0.4em] transition-all hover:brightness-110 active:scale-[0.98] font-label shadow-xl text-center relative overflow-hidden group">
              <span class="relative z-10">Complete Acquisition</span>
              <div class="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            <p class="text-[9px] text-center text-on-surface-variant leading-relaxed tracking-[0.15em] font-label font-medium">
              By placing this order, you agree to the DAST <a class="underline underline-offset-4 decoration-primary/50 hover:text-primary transition-colors" href="#">Terms of Atelier</a> and <a class="underline underline-offset-4 decoration-primary/50 hover:text-primary transition-colors" href="#">Privacy Protocol</a>.
            </p>
          </div>
        </div>

        <!-- Trust Badges -->
        <div class="mt-8 grid grid-cols-3 gap-4">
          <div class="text-center space-y-2 group">
            <span class="material-symbols-outlined text-primary/70 text-xl group-hover:text-primary transition-all duration-500">encrypted</span>
            <p class="text-[8px] uppercase tracking-[0.2em] text-on-surface-variant font-label font-bold">Secured</p>
          </div>
          <div class="text-center space-y-2 group">
            <span class="material-symbols-outlined text-primary/70 text-xl group-hover:text-primary transition-all duration-500">public</span>
            <p class="text-[8px] uppercase tracking-[0.2em] text-on-surface-variant font-label font-bold">Global Reach</p>
          </div>
          <div class="text-center space-y-2 group">
            <span class="material-symbols-outlined text-primary/70 text-xl group-hover:text-primary transition-all duration-500">verified</span>
            <p class="text-[8px] uppercase tracking-[0.2em] text-on-surface-variant font-label font-bold">Authentic</p>
          </div>
        </div>
      </aside>
    </div>
  </div>`;
}
