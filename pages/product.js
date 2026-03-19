export function renderProduct() {
  return `
  <div class="min-h-screen pt-32 overflow-x-hidden">
    <!-- Product Hero Section -->
    <section class="grid grid-cols-1 md:grid-cols-12 max-w-[1600px] mx-auto">
      <!-- Image Gallery -->
      <div class="md:col-span-7 px-8 md:px-12 flex flex-col gap-8">
        <div class="aspect-[3/4] bg-surface-container-low overflow-hidden reveal" style="opacity:0;animation: hero-entrance 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;">
          <img class="w-full h-full object-cover grayscale transition-transform duration-[2.5s] ease-out hover:scale-105" alt="Editorial fashion shot of high-end structured coat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6s0G4-VUWp3eYgxZQm8z4D6k6r9cHyY13aC0FXWX73Zb7UKhuKei0MsL60MelwuX1n-QJITPwI5iJ6y__fSX2gribUopK9CCPnhgssaaHRVEy2ocm7XGDOZE_WnlLsw-DdU0JEMD2SUlF8UzIJRPNAWCvmpzVfZYmUUekYc11gjqZpRmfwSwUapcOKyP022NXTUIUPErqOuH-LT7gT4Wlp1GTod_LykvnD8QT8bzVLKCODYhCCefmCiv-Uz-r0tHL-HX1H72XRciK" />
        </div>
        <div class="grid grid-cols-2 gap-8 reveal" style="animation-delay:0.6s">
          <div class="aspect-square bg-surface-container-low overflow-hidden">
            <img class="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" alt="Close up texture detail of luxury wool fabric" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsPGeI8nMhWTplIGn0cWKtstWkTF8tFW30vk27cW5l5jkJ0MsN-20fDdSE9LZEQ9OTxqLLUECgTrijRRBOqwUJDVjz-GV7gyBTBGQL32Gd-EoG0uzf2LNIJm8YmkCzeMlZIPZ0oKp9u68Ek1pJSFOL5-K2601woXt87u5O-i7lS1dlF4kfD36uu-vOlBzEY8-R9LifQfNeqYVQhTju00C-U2ehzXbqg6fWlQZiYjIruV8RsN8iSY3Xv1FIm9aGcwHsVEXv0hbr9EhS" />
          </div>
          <div class="aspect-square bg-surface-container-low overflow-hidden">
            <img class="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" alt="Macro detail of gold hardware on garment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNPcxyM_PlCqyqeSBB1grV7x2nyID12H1V465SgloX0-DbuuHUrMTXwLqG504ooPJ12N_8vW-8dMcBwWV40F9mBOmY-wB7jjcaGqBVLOoNQelXb8u7fnoFmUaUMMyfoiuzdgK2oulo5r0T4hKUCnWjpJ1eGU1y868o2rHE3v1SgFYgduyG09CJ_dC4bD1dpzr4bK0Wkcb4kLlrgYffiykMpmyKnsmKM0Wuq_yCFTzqZp-OvEdr-QNFShKvW8ClayrhLL8VspeVRVaE" />
          </div>
        </div>
        <div class="aspect-[16/9] bg-surface-container-low overflow-hidden mb-12 reveal" style="animation-delay:0.8s">
          <img class="w-full h-full object-cover grayscale opacity-80 transition-transform duration-[2s] hover:scale-105" alt="Wide environmental fashion shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ04kZAEZyxoHike6V1BW1T3siMT045vx8gnec6puO5Nsu_Jnxi3USLbzAQQrL14dUpHJ_NRuf3YLYj9Pk1AYhoR5VeH9yc1wzQlsR5AY0YGCqiu52P-yfl-yFkIvEoaXi7LKx274SQmajLuJtBfiBS00_YSsj23feMNUJMNe-GMVhCvef6xuLKfJJ3__8vz4PtPKBjtuP1nFbiBZSnKo9sZ196l0RGs5mxRGdQ9BybPHTJpvyBGGslrv9-prEUUSEF_jEErViC9Jj" />
        </div>
      </div>

      <!-- Product Actions -->
      <div class="md:col-span-5 px-8 md:px-16 pt-0 md:pt-4 space-y-12">
        <div class="sticky top-40 space-y-12">
          <header class="space-y-6">
            <p class="font-label uppercase tracking-[0.3em] text-[10px] text-primary font-bold animate-reveal-up-staggered" style="animation-delay:0.1s">Handmade — Limited Edition 04/50</p>
            <h1 class="font-headline text-6xl md:text-8xl tracking-tight leading-[0.9] text-on-surface font-normal animate-reveal-up-staggered" style="animation-delay:0.2s">
              The Obsidian <br/><span class="italic">Overcoat</span>
            </h1>
            <p class="font-headline text-3xl text-on-surface font-normal mt-4 animate-reveal-up-staggered" style="animation-delay:0.3s">$4,250.00</p>
          </header>

          <div class="space-y-10">
            <div class="animate-reveal-up-staggered" style="animation-delay:0.4s">
              <span class="font-label uppercase tracking-[0.25em] text-[10px] text-outline block mb-5 font-semibold">Select Size</span>
              <div class="flex flex-wrap gap-3">
                <button class="size-btn px-8 py-3 border border-outline-variant/30 text-[10px] font-label uppercase tracking-[0.25em] hover:border-primary hover:text-primary font-bold">EU 46</button>
                <button class="size-btn px-8 py-3 border border-primary text-[10px] font-label uppercase tracking-[0.25em] text-primary bg-primary/5 font-bold">EU 48</button>
                <button class="size-btn px-8 py-3 border border-outline-variant/30 text-[10px] font-label uppercase tracking-[0.25em] hover:border-primary hover:text-primary font-bold">EU 50</button>
                <button class="size-btn px-8 py-3 border border-outline-variant/30 text-[10px] font-label uppercase tracking-[0.25em] hover:border-primary hover:text-primary font-bold">EU 52</button>
              </div>
            </div>
            <div class="space-y-4">
              <a href="#checkout" class="block w-full bg-primary text-on-primary py-6 font-label font-bold uppercase tracking-[0.4em] text-[11px] hover:brightness-110 active:scale-[0.98] transition-all shadow-xl text-center animate-reveal-up-staggered" style="animation-delay:0.5s">Add to Bag</a>
              <a href="#locator" class="block w-full border border-outline-variant/30 py-6 font-label uppercase tracking-[0.4em] text-[11px] font-bold hover:bg-surface-container-high transition-all text-center animate-reveal-up-staggered" style="animation-delay:0.6s">Find in Store</a>
            </div>
          </div>

          <div class="pt-12 border-t border-outline-variant/15 space-y-8">
            <p class="font-headline text-2xl leading-tight text-on-surface italic font-normal">
              "A silhouette carved from the night itself. Structured wool-cashmere blend meeting raw architectural edges."
            </p>
            <p class="font-body text-[14px] leading-relaxed text-on-surface-variant font-medium">
              Each piece is hand-tailored in our Milan atelier, utilizing centuries-old techniques refined for the modern vanguard. The Obsidian Overcoat features a drop-shoulder construction and signature hidden placket.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Details & Narrative Sections -->
    <section class="bg-surface-container-lowest py-48 px-8 md:px-24">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
        <div class="space-y-10 reveal group">
          <span class="font-label uppercase tracking-[0.4em] text-[10px] text-primary font-bold">01 / Process</span>
          <h3 class="font-headline text-5xl tracking-tight leading-none font-normal">Details &amp; <br/><span class="italic">Care</span></h3>
          <ul class="space-y-5 font-body text-[13px] text-on-surface-variant border-l border-primary/30 pl-8 leading-relaxed font-medium group-hover:border-primary transition-colors">
            <li>85% Virgin Wool, 15% Cashmere</li>
            <li>Cupro Lining with Silk Piping</li>
            <li>Hand-finished Horn Buttons</li>
            <li>Professional Dry Clean Only</li>
            <li>Store on wide-shoulder hanger</li>
          </ul>
        </div>
        <div class="space-y-10 reveal group">
          <span class="font-label uppercase tracking-[0.4em] text-[10px] text-primary font-bold">02 / Ethos</span>
          <h3 class="font-headline text-5xl tracking-tight leading-none font-normal">Sustain-<br/><span class="italic">ability</span></h3>
          <p class="font-body text-[13px] text-on-surface-variant leading-relaxed font-medium">
            Our wool is sourced from a family-run regenerative farm in the Italian Alps. We track every fiber from the shearing to the final stitch. Zero-waste pattern cutting ensures minimal environmental footprint.
          </p>
          <a class="inline-block font-label uppercase tracking-[0.3em] text-[10px] text-on-surface border-b border-primary pb-1 font-bold hover:text-primary transition-colors" href="#">Read the full report</a>
        </div>
        <div class="space-y-10 reveal group">
          <span class="font-label uppercase tracking-[0.4em] text-[10px] text-primary font-bold">03 / Origins</span>
          <h3 class="font-headline text-5xl tracking-tight leading-none font-normal">The <br/><span class="italic">Atelier</span></h3>
          <p class="font-body text-[13px] text-on-surface-variant leading-relaxed font-medium">
            Forged in the heart of Northern Italy. This garment represents 128 hours of human labor, carrying the signature of the master tailor inside the inner breast pocket.
          </p>
        </div>
      </div>
    </section>

    <!-- Styled With -->
    <section class="py-48 px-8 md:px-24">
      <div class="max-w-7xl mx-auto mb-20 flex justify-between items-end reveal">
        <h2 class="font-headline text-7xl tracking-tight font-normal">Styled <span class="italic text-primary">With</span></h2>
        <div class="flex gap-4">
          <button class="w-16 h-16 flex items-center justify-center border border-outline-variant/30 hover:border-primary transition-all group">
            <span class="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">west</span>
          </button>
          <button class="w-16 h-16 flex items-center justify-center border border-outline-variant/30 hover:border-primary transition-all group">
            <span class="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">east</span>
          </button>
        </div>
      </div>
      <div class="max-w-7xl mx-auto flex gap-12 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-0">
        ${[
          { cat: 'Trousers', name: 'Charcoal Silk Wide-Leg', price: '$1,150', img: 'AB6AXuAF5nyXmyUXjAbAq4umDZIU1l4jXtBOG5aQYQi1dNMNXGYdlKs7hehxFMmts38Rvvlb-eHcOg8gqPbPtu3tF690WDZsCr9lIOVuFKcbaTtk1LsC3mg9vOesXuFb_lZCankMgJx0kQd6TDtQZVZM0OJ04fUWwQHHD4dwVTnvPRzHrt6uwCcMFODYc6VJscc-rqSV5KcYcoEXr-PEXIzcKfdjN_wMLzmBlcrkWTF83fNVMZkLoThZ0IDsb2G9WAbJFcOqdCduYfZJ0jeE' },
          { cat: 'Footwear', name: 'The Night-Walker Boot', price: '$2,400', img: 'AB6AXuD27bdrsa7C_93PWL7W-W_VV7yOWQCuj9Vtx0w5LEDprK5GGciu1M870bP56wzSzb67bcLNrr3tpQP6SeQ5T6DFbJf-FpC7-eJa-oz_dUuU0IDeToCejCpTlwfwTNwIQ0OyxPlxCuhapXzzqfx_-uPIUPXwBpdHLJJw319WDGJgUlcqenj6rAkoHty6mWEIWRqMmHDLoZWGrK3NHyI9fXg9FaNGVxSYTYCDgFOVu_IG22K6qIIrykVnU2vdIpeDcyutu53Fxb8BoBey' },
          { cat: 'Knitwear', name: 'Merino Sculpted Turtleneck', price: '$890', img: 'AB6AXuBP8blPrdvScqHEefw1khoedWMkR9gGLrs_7S62A203AEyh4D84lx_uQR4gTVLTZ6M2bODZ8gfvc6eiBKZrJeJv5qJW0ftlTF4cJEYpKLYTKm5DznhISbpYZ5AYMCfCtteII-S4x3ER_mTfsIR9wd7VmO_ClzINffDtrwmEPvWShFhjdgaC7l1iQ9aoBcFQBcAnGyjU5DOLid0Ax398lfNLB4wPeI56W96r-jqvUCr1MI39P3PUVPoxkXhpWM7cxYupjanqi1hzia-s' },
        ].map((item, i) => `
          <a href="#product" class="min-w-[320px] md:min-w-[400px] snap-start group cursor-pointer reveal" style="animation-delay:${0.1*(i+1)}s">
            <div class="aspect-[3/4] overflow-hidden mb-8 bg-surface-container-low">
              <img class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" alt="${item.name}" src="https://lh3.googleusercontent.com/aida-public/${item.img}" />
            </div>
            <div class="flex justify-between items-start gap-4 transition-transform duration-500 group-hover:translate-x-1">
              <div class="space-y-1">
                <span class="font-label uppercase tracking-[0.2em] text-[9px] text-outline font-bold">${item.cat}</span>
                <h4 class="font-headline text-3xl tracking-tight leading-none font-normal">${item.name}</h4>
              </div>
              <p class="font-label text-[11px] uppercase tracking-[0.25em] text-outline font-bold mt-2">${item.price}</p>
            </div>
          </a>
        `).join('')}
      </div>
    </section>
  </div>`;
}
