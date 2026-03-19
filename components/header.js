export function renderHeader(activeRoute = '') {
  const navLinks = [
    { label: 'New Arrivals', route: 'home' },
    { label: 'Collections', route: 'catalog' },
    { label: 'About', route: 'care' },
    { label: 'Archive', route: 'catalog' },
  ];

  const navHTML = navLinks.map((link, i) => {
    const isActive = (activeRoute === link.route) || (activeRoute === '' && link.route === 'home');
    const activeClass = isActive
      ? 'text-[#e9c349] font-bold border-b border-[#e9c349]/50 pb-0.5'
      : 'text-[#c4c7c7] hover:text-[#e5e2e1] transition-colors duration-300';
    return `<a class="nav-item ${activeClass} font-label uppercase tracking-[0.2em] text-[10px]"
              href="#${link.route}" style="animation-delay: ${0.1 * (i + 1)}s">${link.label}</a>`;
  }).join('');

  return `
  <header class="fixed top-0 z-50 w-full bg-[#131313]/60 backdrop-blur-md">
    <nav class="flex justify-between items-center w-full px-8 py-4 max-w-full">
      <div class="hidden md:flex gap-8 items-center">
        ${navHTML}
      </div>
      <a href="#home" class="flex-shrink-0 flex flex-col items-center nav-item" style="animation-delay: 0s">
        <h1 class="text-2xl font-headline tracking-[0.3em] text-[#e5e2e1]">DAST</h1>
        <span class="text-[7px] uppercase tracking-[0.5em] text-[#8e9192] mt-0.5">THE ART OF THE HAND</span>
      </a>
      <div class="flex gap-6 items-center">
        <button class="nav-item hover:text-[#e9c349] transition-all duration-500 flex items-center" style="animation-delay: 0.5s">
          <span class="material-symbols-outlined text-[18px]">search</span>
        </button>
        <button class="nav-item hover:text-[#e9c349] transition-all duration-500 flex items-center" style="animation-delay: 0.6s">
          <span class="material-symbols-outlined text-[18px]">person</span>
        </button>
        <a href="#checkout" class="nav-item hover:text-[#e9c349] transition-all duration-500 flex items-center" style="animation-delay: 0.7s">
          <span class="material-symbols-outlined text-[18px]">shopping_bag</span>
        </a>
        <button class="md:hidden flex items-center" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
    <div id="mobile-menu" class="hidden md:hidden bg-[#131313]/95 backdrop-blur-md px-8 pb-6 space-y-4">
      ${navLinks.map(link => `<a class="block text-[#c4c7c7] font-label uppercase tracking-[0.2em] text-[11px] py-2 hover:text-[#e9c349] transition-colors" href="#${link.route}">${link.label}</a>`).join('')}
      <a class="block text-[#c4c7c7] font-label uppercase tracking-[0.2em] text-[11px] py-2 hover:text-[#e9c349] transition-colors" href="#locator">Ateliers</a>
    </div>
  </header>`;
}
