export function renderCatalog() {
  const products = [
    { name: 'Structured Wool Mantle', price: '$3,450', img: 'AB6AXuDXNqAHMTvXhvFmQ5EOnelMZzHxDm9dtHSmpmMmG5T6fXOUoDBYnsDsE2c73TTd__k6iYQ-1AKV1BY_RH3mDEDtv-_cFGt6zvOoMMvLh7BxQ2xjd54Fs2JBvLdvVupCKOXaMCDO0j0eclii5VehK41zY_ipMWtJR0lkvOuwu4Zu3egaQB1PGbupAjOaRPSJOydb0whukM3WvBTuFd-NKLB0ULanKlxfT4Z4ezIVVzBqBTS3xC08fXU9ZHcwiAurDGfGutXPMYNmG2DG', offset: '' },
    { name: 'Midnight Silk Column', price: '$2,800', img: 'AB6AXuBkL_qvI8OnxsU7WRX-_uPwsBlOSThVgUC3l68q9tT42SdpdkycTHYL_nzEZplJMospYuca3XHBcu5Eg_KF84PJNfENPUnFdsxJvC2ZYJ9iCUMepo3US5QedwXPvNcg3fzTZY_09Jk7Fxko4sCj83jhrvbeCEAG4O4CS5ydM6vuEH1JfCLKAuN3QUzt7cZF90Bk0Oo-cCq99zDGALR98Le5eCGgVAL2o9WPQhemNQ9x5lmLBgVKoD7E5EYjXWgTEwW60DJafC3mqbkQ', offset: 'md:mt-16' },
    { name: 'Obsidian Chelsea Boot', price: '$1,150', img: 'AB6AXuBunVpcMm3PNOeGdwiKOEoouKUITiqQ88bFV-ILxUDCSMm9yplAzrmtZZsHYn4B5A2S58g3Ia8lephKe_r87L1NCCEAqjU-cAgT2JZiZbzNO4xxnQjF4pBCJpC3ycakFuChG2VP4PVvidrdmj-mwxszX97t29i_31ebB5F1ExBxFLyxo2rxzLZI-bbUukQtwCKR-AbzY--F6neG3UpbapK7XRhPynufr41IyfhT98rRAIyznIKi0Gy61zAGqx_G9oXqw4qfCq0nEK8B', offset: 'lg:mt-32' },
    { name: 'Sculpted Leather Tote', price: '$1,900', img: 'AB6AXuBE2KJ3-89DNuJdIxTedZJCuhOtXhnA2lUP0u5BJQAJw7fwOq3BbswVWseoW1sipHEeFykdxeT6tV8cZhfwSz7K-fQkhtzHCYPhMM_w5N9LQ4YB2mm1D4J_j_3LE2GLtHATvWYpPuq6zS5009nwIfLGjT7n5yYnZk_X-v5GYg53VQ3pMmEOnjqyvp4PR0OC5SXAjTLwh4ET1Vzq83EreQ4NuFoqtUInOMtXt74JUjUrAcYctd0KJdApRkJTriYUjem6gowj3Fny5BF3', offset: '' },
    { name: 'Charcoal Velvet Blazer', price: '$2,100', img: 'AB6AXuDtTdlKR9F_ipPvefOmAFVZGeAPN-2kIDO8_TknVIAYkS1SxryQi-hz_NPRFT3JnEFAIUl5n_7A_cl4-_lAUyCi5MsFLm2v2ZAb0TYQglWSdcJqr_kfbV5E2arwOR5xlMR0g7os_A5gRfNKFr179eYF2oQgMrfyFClCPPZA0pM4w5PR-hq-bcKKNY3w4LAYTqWBFSZW2GxmPQ16wKE3zU6t1GXJuohlChEW4jdyPrxmwvGvsXTgIbOBWiwIdlLuDPSIm4PmXtshOhhs', offset: 'md:mt-16' },
    { name: 'Asymmetric Cashmere Wrap', price: '$1,450', img: 'AB6AXuBRyiU47W-WZZVDxX89RowOa7mICW0XIm6dqJhr_Y4jCPCPokToVObM4DwMmqjZuQ0xnZHploBo-MOytsWanRNlCFtk0KU5ITzK_d2V-azl-hzL9Nx1107Rw1ZRjXsNZoq8q4nmreGxWkG3rs0zd8iHXmMYBenqQdO_Ls1oc_4C6QmqHBe0Bzu6SipAaNulSUEt3NAmhgOx2ouLdOWj_N904oN82eyxo8BmFZ_0KoULS_j4eSqq5FNBIdN8XjA_sdNapFO8nag_UWl8', offset: 'lg:mt-32' },
  ];

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
        <button class="font-label uppercase tracking-[0.2em] text-[10px] text-on-surface font-bold border-b border-primary pb-1">All Pieces</button>
        <button class="font-label uppercase tracking-[0.2em] text-[10px] text-outline hover:text-on-surface transition-colors font-medium">Outerwear</button>
        <button class="font-label uppercase tracking-[0.2em] text-[10px] text-outline hover:text-on-surface transition-colors font-medium">Tailoring</button>
        <button class="font-label uppercase tracking-[0.2em] text-[10px] text-outline hover:text-on-surface transition-colors font-medium">Accessories</button>
        <button class="font-label uppercase tracking-[0.2em] text-[10px] text-outline hover:text-on-surface transition-colors font-medium">Footwear</button>
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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        ${products.map((p, i) => `
          <article class="group product-card cursor-pointer ${p.offset} animate-reveal-up-staggered" style="animation-delay: ${0.1 * (i + 1)}s;">
            <a href="#product" class="block">
              <div class="product-image-container aspect-[3/4] bg-surface-container-low mb-8">
                <img alt="${p.name}" class="product-image w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/${p.img}" />
                <div class="view-details-overlay">
                  <span class="btn-detail">View Piece</span>
                </div>
              </div>
              <div class="flex justify-between items-start gap-4">
                <h3 class="font-headline text-3xl tracking-tight leading-tight font-normal">${p.name}</h3>
                <span class="price-reveal font-label text-[11px] uppercase tracking-[0.25em] text-outline font-bold mt-2">${p.price}</span>
              </div>
            </a>
          </article>
        `).join('')}
      </div>
    </section>

    <!-- CTA Section -->
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
