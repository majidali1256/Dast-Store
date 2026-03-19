export function renderConfirmation() {
  return `
  <div class="min-h-screen flex flex-col items-center justify-center px-8 py-32">
    <!-- Brand Header -->
    <div class="text-center mb-16 animate-reveal-up-staggered" style="animation-delay:0.1s">
      <h1 class="text-3xl font-headline tracking-[0.3em] text-[#e5e2e1] mb-2">DAST</h1>
      <div class="w-12 h-[1px] bg-primary mx-auto mb-2"></div>
      <span class="text-[8px] uppercase tracking-[0.4em] text-[#8e9192]">The Art of the Hand</span>
    </div>

    <!-- Success Icon -->
    <div class="mb-8 animate-reveal-up-staggered" style="animation-delay:0.2s">
      <div class="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
        <span class="material-symbols-outlined text-primary text-3xl">check</span>
      </div>
    </div>

    <!-- Title -->
    <h2 class="font-headline text-5xl md:text-8xl tracking-tight leading-[0.9] text-center mb-6 font-normal animate-reveal-up-staggered" style="animation-delay:0.3s">Welcome to the Circle</h2>
    <p class="font-label uppercase tracking-[0.3em] text-[10px] text-on-surface-variant mb-20 animate-reveal-up-staggered" style="animation-delay:0.4s">Confirmation No. OBS-9428510</p>

    <!-- Order Details -->
    <div class="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-16 mb-20 reveal">
      <div class="md:col-span-5 aspect-[3/4] bg-surface-container-low overflow-hidden">
        <img class="w-full h-full object-cover grayscale brightness-90" alt="Fashion portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ17d-q98Xqye6IKwBM9Il8-pw6ehK7hY_J2i2nIkV0WCKXkEyWB_xq8Kx-Hg4KuYEyTdfE1jm1x1mZacHx___8xZICTsQ0A2KqFO0oG50CyoW438ywt-Io-abYYYjf-82wNQA-ZK4TPaqpnbDam8OrQtNTeKl0gzU7SK9gVyU4UkuAK9NFPm70JuCmEdHGTTjh8lmjuGKlI8mLf4w96vx3dBzkU91Tx-ydsKtlc47eQYpuzYfmOXQ5yIJCzl9E0GK9Aib3WKNFjbe" />
      </div>
      <div class="md:col-span-7 space-y-12">
        <div>
          <span class="font-label uppercase tracking-[0.3em] text-[10px] text-primary font-bold block mb-6">Manifest Summary</span>
          <div class="space-y-6">
            <div class="flex justify-between items-start border-b border-outline-variant/15 pb-6">
              <div>
                <h3 class="font-headline text-2xl font-normal mb-1">Obsidian Drape Coat</h3>
                <p class="font-label uppercase tracking-[0.2em] text-[9px] text-on-surface-variant">Size 48 / Archive Noir</p>
              </div>
              <span class="font-headline text-2xl font-normal">$2,450</span>
            </div>
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-headline text-2xl font-normal mb-1">Raw Silk Trousers</h3>
                <p class="font-label uppercase tracking-[0.2em] text-[9px] text-on-surface-variant">Size 32 / Ghost Grey</p>
              </div>
              <span class="font-headline text-2xl font-normal">$890</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-12 pt-8 border-t border-outline-variant/15">
          <div>
            <span class="font-label uppercase tracking-[0.25em] text-[9px] text-on-surface-variant font-semibold block mb-4">Destination</span>
            <p class="font-body text-sm">722 Fifth Avenue</p>
            <p class="font-body text-sm">New York, NY 10019</p>
            <p class="font-body text-sm">United States</p>
          </div>
          <div>
            <span class="font-label uppercase tracking-[0.25em] text-[9px] text-on-surface-variant font-semibold block mb-4">Est. Delivery</span>
            <p class="font-body text-sm">Oct 24 — Oct 28</p>
            <p class="font-body text-sm">Signature Required</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex flex-col md:flex-row gap-6 mb-24 reveal">
      <a href="#catalog" class="px-16 py-6 bg-primary text-on-primary font-label uppercase tracking-[0.3em] text-[10px] font-bold hover:brightness-110 transition-all shadow-xl text-center">Return to Gallery</a>
      <a href="#" class="px-16 py-6 border border-outline-variant/30 font-label uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-surface-container-high transition-all text-center">Manage Order</a>
    </div>

    <!-- Quote -->
    <div class="max-w-xl text-center reveal">
      <p class="font-headline text-2xl md:text-3xl italic leading-relaxed text-on-surface opacity-80">
        "Fashion is the armor to survive the reality of everyday life."
      </p>
      <div class="w-16 h-[1px] bg-primary mx-auto mt-8"></div>
    </div>
  </div>`;
}
