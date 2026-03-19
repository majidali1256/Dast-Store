export function renderCare() {
  return `
  <div class="pt-0">
    <!-- Hero -->
    <section class="relative py-40 px-8 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-surface opacity-60 z-0"></div>
      <div class="relative z-10 max-w-4xl mx-auto">
        <h1 class="font-headline text-7xl md:text-[8rem] tracking-tight leading-[0.85] font-normal italic mb-8 animate-reveal-up-staggered" style="animation-delay:0.1s">Customer Care</h1>
        <p class="text-on-surface-variant text-lg font-body leading-relaxed max-w-lg opacity-80 animate-reveal-up-staggered" style="animation-delay:0.2s">
          At DAST, service is an extension of our craftsmanship. We are committed to ensuring your experience is as seamless and refined as the silhouettes we create.
        </p>
      </div>
    </section>

    <!-- Contact Cards -->
    <section class="px-8 py-24 reveal">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-surface-container-low p-10 space-y-6 border border-outline/5 hover:border-outline/15 transition-all duration-500 group">
          <span class="material-symbols-outlined text-primary text-2xl">support_agent</span>
          <h3 class="font-label text-[11px] uppercase tracking-[0.2em] font-bold">Live Concierge</h3>
          <p class="text-[12px] text-on-surface-variant font-body leading-relaxed">Available Mon–Fri, 9am–6pm EST. Immediate response for active orders.</p>
          <a href="#" class="font-label uppercase tracking-[0.2em] text-[10px] text-primary font-bold hover:brightness-110 transition-all">Start Chat</a>
        </div>
        <div class="bg-surface-container-low p-10 space-y-6 border border-outline/5 hover:border-outline/15 transition-all duration-500 group">
          <span class="material-symbols-outlined text-primary text-2xl">mail</span>
          <h3 class="font-label text-[11px] uppercase tracking-[0.2em] font-bold">Email Inquiry</h3>
          <p class="text-[12px] text-on-surface-variant font-body leading-relaxed">Direct communication with our atelier. Expected response within 24 hours.</p>
          <a href="#" class="font-label uppercase tracking-[0.2em] text-[10px] text-primary font-bold hover:brightness-110 transition-all">Inquiry Form</a>
        </div>
        <div class="bg-surface-container-low p-10 space-y-6 border border-outline/5 hover:border-outline/15 transition-all duration-500 group">
          <span class="material-symbols-outlined text-primary text-2xl">event_available</span>
          <h3 class="font-label text-[11px] uppercase tracking-[0.2em] font-bold">Book Appointment</h3>
          <p class="text-[12px] text-on-surface-variant font-body leading-relaxed">Schedule a private digital or in-person consultation for bespoke sizing.</p>
          <a href="#" class="font-label uppercase tracking-[0.2em] text-[10px] text-primary font-bold hover:brightness-110 transition-all">Select Time</a>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-surface-container-lowest py-32 px-8 reveal">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        <div class="md:col-span-4 space-y-6">
          <h2 class="font-headline text-5xl tracking-tight leading-none font-normal"><span class="italic">Common</span><br/>Inquiries</h2>
          <p class="text-on-surface-variant text-[13px] font-body leading-relaxed">Detailed information regarding our operational standards and luxury service protocols.</p>
        </div>
        <div class="md:col-span-8 space-y-0">
          ${[
            { q: 'Shipping & Delivery', a: 'All DAST orders are processed within 48 hours. Domestic orders are shipped via complimentary express courier. International duties and taxes are calculated at checkout for seamless arrival.' },
            { q: 'Returns & Exchanges', a: 'We accept returns within 14 days of delivery for unworn items in original packaging. Complimentary exchanges available for sizing adjustments. Contact our concierge to initiate.' },
            { q: 'Material Care', a: 'Each DAST garment is accompanied by detailed care instructions specific to its materials. We recommend professional dry cleaning for wool and cashmere pieces, and hand washing for silk items.' },
            { q: 'Bespoke Sizing', a: 'Our atelier offers personalized sizing consultations, available digitally or in-person at our flagship locations. Custom alterations are complimentary for all archive pieces.' },
          ].map((faq, i) => `
            <div class="faq-item ${i === 0 ? 'open' : ''} border-b border-outline-variant/15">
              <button class="faq-toggle w-full flex justify-between items-center py-8 text-left group">
                <h3 class="font-label text-[11px] uppercase tracking-[0.2em] font-bold group-hover:text-primary transition-colors">${faq.q}</h3>
                <span class="faq-icon material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-all">add</span>
              </button>
              <div class="faq-content ${i === 0 ? 'open' : ''} pb-8">
                <p class="text-on-surface-variant text-[13px] font-body leading-relaxed">${faq.a}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-32 px-8 reveal">
      <div class="max-w-2xl mx-auto text-center space-y-12">
        <h2 class="font-headline text-5xl md:text-6xl tracking-tight italic font-normal">Direct Contact</h2>
        <p class="font-label uppercase tracking-[0.3em] text-[10px] text-primary font-bold">Atelier Correspondence</p>
        <form class="space-y-10 text-left" onsubmit="event.preventDefault()">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="space-y-2 group">
              <label class="block text-[9px] uppercase tracking-[0.2em] text-on-surface-variant group-focus-within:text-primary transition-colors font-label font-semibold">Name</label>
              <input class="w-full bg-transparent border-b border-outline/30 focus:border-primary outline-none py-2 text-sm transition-colors rounded-none font-body" type="text" />
            </div>
            <div class="space-y-2 group">
              <label class="block text-[9px] uppercase tracking-[0.2em] text-on-surface-variant group-focus-within:text-primary transition-colors font-label font-semibold">Email Address</label>
              <input class="w-full bg-transparent border-b border-outline/30 focus:border-primary outline-none py-2 text-sm transition-colors rounded-none font-body" type="email" />
            </div>
          </div>
          <div class="space-y-2 group">
            <label class="block text-[9px] uppercase tracking-[0.2em] text-on-surface-variant group-focus-within:text-primary transition-colors font-label font-semibold">Subject</label>
            <input class="w-full bg-transparent border-b border-outline/30 focus:border-primary outline-none py-2 text-sm transition-colors rounded-none font-body" type="text" />
          </div>
          <div class="space-y-2 group">
            <label class="block text-[9px] uppercase tracking-[0.2em] text-on-surface-variant group-focus-within:text-primary transition-colors font-label font-semibold">Your Message</label>
            <textarea class="w-full bg-transparent border-b border-outline/30 focus:border-primary outline-none py-2 text-sm transition-colors rounded-none font-body resize-none h-24"></textarea>
          </div>
          <div class="text-center pt-4">
            <button class="bg-primary text-on-primary font-label uppercase tracking-[0.3em] text-[10px] font-bold py-5 px-16 hover:brightness-110 transition-all shadow-xl">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  </div>`;
}
