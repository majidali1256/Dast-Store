export function renderFooter() {
  return `
  <footer class="bg-[#0e0e0e] border-t border-[#444748]/15 pt-24 pb-12 px-12 reveal">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-16 w-full max-w-7xl mx-auto mb-20">
      <div class="space-y-8">
        <div class="flex flex-col">
          <a href="#home" class="text-2xl font-headline tracking-[0.3em] text-[#e5e2e1]">DAST</a>
          <span class="text-[7px] uppercase tracking-[0.5em] text-[#8e9192] mt-1">The Art of the Hand</span>
        </div>
        <p class="text-[13px] font-body text-[#8e9192] leading-relaxed opacity-80">
          A private gallery for high-end silhouettes. Every piece is a testament to the beauty of darkness and the touch of the artisan.
        </p>
      </div>
      <div class="space-y-8">
        <h6 class="font-label uppercase tracking-[0.3em] text-[10px] text-[#e9c349] font-semibold">Customer Care</h6>
        <ul class="space-y-5">
          <li><a class="text-[12px] font-body text-[#8e9192] hover:text-[#e9c349] transition-colors duration-300" href="#care">Shipping &amp; Delivery</a></li>
          <li><a class="text-[12px] font-body text-[#8e9192] hover:text-[#e9c349] transition-colors duration-300" href="#care">Returns &amp; Exchanges</a></li>
          <li><a class="text-[12px] font-body text-[#8e9192] hover:text-[#e9c349] transition-colors duration-300" href="#care">Contact &amp; Support</a></li>
        </ul>
      </div>
      <div class="space-y-8">
        <h6 class="font-label uppercase tracking-[0.3em] text-[10px] text-[#e5e2e1] font-semibold">Legal</h6>
        <ul class="space-y-5">
          <li><a class="text-[12px] font-body text-[#8e9192] hover:text-[#e9c349] transition-colors duration-300" href="#">Privacy Policy</a></li>
          <li><a class="text-[12px] font-body text-[#8e9192] hover:text-[#e9c349] transition-colors duration-300" href="#">Sustainability Charter</a></li>
          <li><a class="text-[12px] font-body text-[#8e9192] hover:text-[#e9c349] transition-colors duration-300" href="#">Terms of Service</a></li>
        </ul>
      </div>
      <div class="space-y-8">
        <h6 class="font-label uppercase tracking-[0.3em] text-[10px] text-[#e5e2e1] font-semibold">Social</h6>
        <div class="flex gap-6">
          <a class="text-[#8e9192] hover:text-[#e9c349] transition-colors" href="#"><span class="material-symbols-outlined text-[20px]">public</span></a>
          <a class="text-[#8e9192] hover:text-[#e9c349] transition-colors" href="#"><span class="material-symbols-outlined text-[20px]">share</span></a>
          <a class="text-[#8e9192] hover:text-[#e9c349] transition-colors" href="#"><span class="material-symbols-outlined text-[20px]">mail</span></a>
        </div>
        <div class="pt-4">
          <a href="#locator" class="text-[12px] font-label uppercase tracking-[0.2em] text-[#8e9192] hover:text-[#e9c349] transition-colors duration-300 border-b border-[#444748]/30 pb-1">Find an Atelier</a>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto pt-10 border-t border-white/5 text-center">
      <p class="font-label uppercase tracking-[0.4em] text-[8px] text-[#8e9192]">© 2024 DAST GALLERY. HANDCRAFTED IN THE VOID.</p>
    </div>
  </footer>`;
}
