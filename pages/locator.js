export function renderLocator() {
  return `
  <div class="pt-32 pb-24">
    <!-- Header -->
    <section class="px-8 mb-16 max-w-5xl mx-auto text-center">
      <h1 class="font-headline text-6xl md:text-8xl tracking-tight leading-[0.9] italic font-normal mb-6 animate-reveal-up-staggered" style="animation-delay:0.1s">Ateliers</h1>
      <p class="font-label uppercase tracking-[0.3em] text-[10px] text-on-surface-variant max-w-md mx-auto animate-reveal-up-staggered" style="animation-delay:0.2s">
        Global Flagship Destinations and Private Consultation Suites
      </p>
    </section>

    <!-- Map Placeholder -->
    <section class="px-8 mb-24 max-w-5xl mx-auto reveal">
      <div class="aspect-[16/9] bg-surface-container-low relative overflow-hidden border border-outline/5">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center space-y-4">
            <span class="material-symbols-outlined text-primary text-4xl">map</span>
            <p class="font-label uppercase tracking-[0.2em] text-[10px] text-on-surface-variant">Interactive Map</p>
            <div class="flex gap-8 justify-center mt-6">
              <span class="font-label text-[9px] uppercase tracking-[0.2em] text-primary font-bold border border-primary/30 px-4 py-2">Paris</span>
              <span class="font-label text-[9px] uppercase tracking-[0.2em] text-on-surface-variant border border-outline-variant/30 px-4 py-2">Tokyo</span>
              <span class="font-label text-[9px] uppercase tracking-[0.2em] text-on-surface-variant border border-outline-variant/30 px-4 py-2">New York</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-6">
        <button class="inline-flex items-center gap-2 font-label uppercase tracking-[0.2em] text-[10px] text-primary font-bold hover:brightness-110 transition-all">
          <span class="material-symbols-outlined text-sm">my_location</span>
          <span>Find Nearest</span>
        </button>
      </div>
    </section>

    <!-- Store Listings -->
    <section class="px-8 max-w-5xl mx-auto space-y-24">
      ${[
        {
          country: 'France',
          badge: 'Flagship',
          name: "Paris, Rue St. Honoré",
          address: '251 Rue Saint-Honoré,<br/>75001 Paris, France',
          hours: '10:00 — 19:00 Daily',
          img: 'AB6AXuByxvip9E652ZWjnwVJgfDmBn6jZOP3m_VKE2RKD16YE9zx32-ez-aeMy0HTobUjWuiSYoZbyGZLh6iXRYIL5te9JRHNYGaZdAEEHIyuvMtESibazRNsAV2V33i-ERxb09tw3FrYYZwjgHGSKxWUuvPZR0y-FejnHTzyRGyF-rjrx8hIIckGrgqtQXP5MyyDTDmCyYUlynHWmhN9wx4Flfmnosf3GMU3KXzE9R02QD2Csec6lvgx3eRM7YLHz2KhkfujUz8D5JEkHEc'
        },
        {
          country: 'Japan',
          badge: '',
          name: 'Tokyo, Ginza District',
          address: '5-chōme-8-7 Ginza, Chuo City,<br/>Tokyo 104-0061, Japan',
          hours: '11:00 — 20:00 Daily',
          img: 'AB6AXuDcfwWbrf2sQFA4agnjOCUtYL7w5BQSYEi5l83Xa-xk0iMZ_td7qZJmpXaRP1L_SkKU1wRp_uinQ-4WGWUmwbsY3uqRnqRAhVZP3eU0oc5KwqFAKbYvxtJQSpt7Ut19sGUZeHQCMNUULxzPzQoeUCjbzp8wXlbshAo3ya0vKtJUrS1gV5vYS0l_-kPXC7m-f7vuxMV_QN1wNAPOfyFEYr70rFnCA-nniXzGonpFKmIE3wCuLvhL64gS3WYKRMEc1bCNp0cOCFw80I9B'
        },
        {
          country: 'USA',
          badge: '',
          name: 'New York, Soho Loft',
          address: '42 Greene St,<br/>New York, NY 10013, USA',
          hours: '10:00 — 18:00 (Closed Sundays)',
          img: 'AB6AXuBmjy4t_vCV9mdW9DQflZu3EgpxyYz_eQHf9eCysrGXfzYsHb0Gh0QFbq7DkZstQwErm6bBIpi4wLC6w4rqBpU-e-8o7TQeDbhv3eNV_qZIk0X5gZCCeiD-h3El9qNd33gau--X5kfliliJe-LVoS9dihyOgYiTNL18jGCMWTVrOCei2gioSrudLxZWYXzFDnCl1CnJ-rZ-yFIA0umSSN44oOb8Exp0RYIOkQnMLoQq-imJutf5mPVYdGp4reRY6fgpIeTVrHp1KE9L'
        }
      ].map((store, i) => `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div class="aspect-[4/3] bg-surface-container-low overflow-hidden group">
            <img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="${store.name}" src="https://lh3.googleusercontent.com/aida-public/${store.img}" />
          </div>
          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <span class="font-label uppercase tracking-[0.3em] text-[9px] text-primary font-bold">${store.country}</span>
              ${store.badge ? `<span class="font-label uppercase tracking-[0.2em] text-[8px] text-on-primary bg-primary px-3 py-1 font-bold">${store.badge}</span>` : ''}
            </div>
            <h2 class="font-headline text-4xl md:text-5xl tracking-tight font-normal leading-tight">${store.name}</h2>
            <p class="text-on-surface-variant text-sm font-body leading-relaxed">${store.address}</p>
            <div class="flex items-center gap-2 text-on-surface-variant">
              <span class="material-symbols-outlined text-sm">schedule</span>
              <span class="text-[12px] font-body">${store.hours}</span>
            </div>
            <button class="mt-4 px-10 py-4 border border-outline-variant/30 font-label uppercase tracking-[0.3em] text-[10px] font-bold hover:border-primary hover:text-primary transition-all">
              Book Appointment
            </button>
          </div>
        </div>
      `).join('')}
    </section>

    <!-- Private Concierge -->
    <section class="mt-32 px-8 reveal">
      <div class="max-w-3xl mx-auto text-center bg-surface-container-low p-16 border border-outline/5 space-y-8">
        <h2 class="font-headline text-4xl tracking-tight italic font-normal">Private Concierge</h2>
        <p class="text-on-surface-variant text-sm font-body leading-relaxed max-w-md mx-auto">
          Cannot visit us in person? Experience DAST Ateliers through our virtual private viewing service.
        </p>
        <a href="#care" class="inline-block px-12 py-5 bg-primary text-on-primary font-label uppercase tracking-[0.3em] text-[10px] font-bold hover:brightness-110 transition-all shadow-xl">Learn More</a>
      </div>
    </section>
  </div>`;
}
