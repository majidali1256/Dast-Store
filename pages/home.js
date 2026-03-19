export function renderHome() {
  return `
  <!-- Hero Section -->
  <section class="relative h-screen w-full flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface z-10"></div>
    <img alt="Cinematic fashion portrait" class="absolute inset-0 w-full h-full object-cover object-center brightness-50 animate-ken-burns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ17d-q98Xqye6IKwBM9Il8-pw6ehK7hY_J2i2nIkV0WCKXkEyWB_xq8Kx-Hg4KuYEyTdfE1jm1x1mZacHx___8xZICTsQ0A2KqFO0oG50CyoW438ywt-Io-abYYYjf-82wNQA-ZK4TPaqpnbDam8OrQtNTeKl0gzU7SK9gVyU4UkuAK9NFPm70JuCmEdHGTTjh8lmjuGKlI8mLf4w96vx3dBzkU91Tx-ydsKtlc47eQYpuzYfmOXQ5yIJCzl9E0GK9Aib3WKNFjbe" />
    <div class="relative z-20 text-center max-w-4xl px-6">
      <div class="mb-10 flex flex-col items-center gap-3 animate-fade-in-up" style="animation-delay: 0.8s">
        <span class="uppercase tracking-[0.5em] text-[10px] font-label text-primary font-semibold">The Art of the Hand</span>
        <span class="uppercase tracking-[0.3em] text-[9px] font-label text-[#8e9192]">Collection 2024</span>
      </div>
      <h2 class="text-7xl md:text-[10rem] font-headline italic tracking-tighter leading-[0.85] mb-12 animate-fade-in-up" style="animation-delay: 1s">Shadow Work</h2>
      <div class="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in-up" style="animation-delay: 1.2s">
        <a class="px-12 py-5 bg-primary text-on-primary font-label uppercase tracking-[0.2em] text-[10px] font-bold hover:brightness-110 transition-all min-w-[240px]" href="#catalog">Shop the Collection</a>
        <a class="px-12 py-5 border border-outline-variant/30 backdrop-blur-sm text-on-surface font-label uppercase tracking-[0.2em] text-[10px] hover:bg-on-surface hover:text-surface transition-all min-w-[240px]" href="#catalog">Explore Lookbook</a>
      </div>
    </div>
  </section>

  <!-- Featured Collection -->
  <section class="bg-surface py-32 px-8 reveal">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div class="max-w-xl">
          <h3 class="text-5xl md:text-6xl font-headline mb-6 tracking-tight italic">New Arrivals</h3>
          <p class="text-on-surface-variant text-base font-body leading-relaxed opacity-80">Defining a new era of noir aesthetics through hand-crafted silhouettes and obsidian textures. Each piece is an invitation to tactile elegance.</p>
        </div>
        <a class="font-label uppercase tracking-[0.25em] text-[10px] text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all mb-2" href="#catalog">View all items</a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 h-auto md:h-[1000px]">
        <a href="#product" class="md:col-span-7 relative group overflow-hidden bg-surface-container-low block">
          <img alt="Full length avant garde coat" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2oXBk8mk10H5vmDNNzAFceFWBWIRHJyg21n5BIDzaPNYO129N1tiXNN_w64-EAKtyWQ1Kh243macFEAca1fB4u66VbHswxF-A_fqe4auv1GtZUsCsBnl9W1vuReQi6dmTm5pL1w1WhlKnCkLNP77DGOyMfSsekXJB_ShUHOtzi9E8pXYhI1ATAo0a0pIZ7u6gT16IFlYwzTOAAqoSnZO4Sudg59LcrTq8MyboUfSCd3zxzvgL9jc9F88Dt-TM-Em7r910HCPpPscj" />
          <div class="hover-overlay"></div>
          <div class="absolute bottom-10 left-10">
            <h4 class="text-3xl font-headline mb-3 italic">The Sculpted Overcoat</h4>
            <p class="font-label uppercase tracking-[0.2em] text-[10px] text-on-surface/70">Pure Wool — $1,850</p>
          </div>
        </a>
        <div class="md:col-span-5 grid grid-rows-2 gap-10">
          <a href="#product" class="relative group overflow-hidden bg-surface-container-low block">
            <img alt="Silk textured shirt detail" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOFbP7If7CKOPazDiWN2ImHYw9HvZEvPje3L59lLfFWgLlys_Q1Jr4nXAiSpU8jv-LMj_gJ7BNzHFMY5STFALf_eaM4SRoxe1RJbR0SwlHKS0qJ2zeYi_e4zxxO6SRf1lKNIEBEpSxDMTi8kj8SuH_M-A1C_IuwLEMTRal62N77GpGoerObWVBJah5JNSLF54AbocFTCIISNvPqI-QxNAZgUk-h4oK7-zSj72R9de5e-Xbh61dLtWgAwf7fam4r8L8WACyPSBgJ_QO" />
            <div class="hover-overlay"></div>
            <div class="absolute bottom-10 left-10">
              <h4 class="text-2xl font-headline mb-3 italic">Pleated Silk Tunic</h4>
              <p class="font-label uppercase tracking-[0.2em] text-[10px] text-on-surface/70">Silk — $720</p>
            </div>
          </a>
          <a href="#product" class="relative group overflow-hidden bg-surface-container-low block">
            <img alt="Luxury leather accessory" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbQguKMgsSQkMu9uijel0QAjsI_zVAIurS8duNiAub6jmE-eV7EbIAg3-N0LMRooUbdzGUkQoodkQwf1Ix-t5kBQWpRZL2wLn0YjGWFxrbxv4Ul4fFqUhf9T_wUuiVEZ3eoJVeQtEGYYzY5gXni7QAgw1YTp_xm87WknbuMq8orvKTUR9szELzC0qh3h72wpsXt2ttUGWQio-1z6X84oD36zMIR4-tfEDVB2LN1m79NYAS05ihn7oWuBLb8ElQazePk6E_wgOHrhZQ" />
            <div class="hover-overlay"></div>
            <div class="absolute bottom-10 left-10">
              <h4 class="text-2xl font-headline mb-3 italic">Obsidian Tote</h4>
              <p class="font-label uppercase tracking-[0.2em] text-[10px] text-on-surface/70">Full Grain — $940</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Artisan Story -->
  <section class="bg-surface-container-lowest py-40 px-8 overflow-hidden reveal">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
      <div class="relative">
        <div class="aspect-[4/5] bg-surface-container overflow-hidden group">
          <img alt="Workshop atmosphere" class="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-[2s]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByxvip9E652ZWjnwVJgfDmBn6jZOP3m_VKE2RKD16YE9zx32-ez-aeMy0HTobUjWuiSYoZbyGZLh6iXRYIL5te9JRHNYGaZdAEEHIyuvMtESibazRNsAV2V33i-ERxb09tw3FrYYZwjgHGSKxWUuvPZR0y-FejnHTzyRGyF-rjrx8hIIckGrgqtQXP5MyyDTDmCyYUlynHWmhN9wx4Flfmnosf3GMU3KXzE9R02QD2Csec6lvgx3eRM7YLHz2KhkfujUz8D5JEkHEc" />
        </div>
        <div class="absolute -bottom-12 -right-12 hidden md:block w-72 aspect-square bg-surface border border-outline-variant/10 p-6 shadow-2xl">
          <img alt="Portrait of artisan" class="w-full h-full object-cover grayscale brightness-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmjy4t_vCV9mdW9DQflZu3EgpxyYz_eQHf9eCysrGXfzYsHb0Gh0QFbq7DkZstQwErm6bBIpi4wLC6w4rqBpU-e-8o7TQeDbhv3eNV_qZIk0X5gZCCeiD-h3El9qNd33gau--X5kfliliJe-LVoS9dihyOgYiTNL18jGCMWTVrOCei2gioSrudLxZWYXzFDnCl1CnJ-rZ-yFIA0umSSN44oOb8Exp0RYIOkQnMLoQq-imJutf5mPVYdGp4reRY6fgpIeTVrHp1KE9L" />
        </div>
      </div>
      <div class="space-y-10">
        <span class="uppercase tracking-[0.4em] text-[10px] font-label text-primary font-semibold">Philosophy</span>
        <h2 class="text-6xl md:text-[5.5rem] font-headline leading-[0.95] italic tracking-tight">The Art of the Hand</h2>
        <p class="text-on-surface-variant font-body leading-relaxed max-w-lg text-lg opacity-80">
          DAST is an exploration of the void and the vessel. We believe that true luxury lies in what is whispered, not what is screamed. Each piece is crafted in limited batches, ensuring that every stitch serves a purpose.
        </p>
        <div class="pt-8">
          <a class="group flex items-center gap-6 font-label uppercase tracking-[0.3em] text-[10px]" href="#care">
            <span>Read the Manifesto</span>
            <div class="w-16 h-[1px] bg-primary group-hover:w-24 transition-all duration-700"></div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Social Grid -->
  <section class="bg-surface py-32 reveal">
    <div class="px-8 mb-16 flex flex-col md:flex-row justify-between items-baseline gap-4">
      <h3 class="text-4xl font-headline italic">As Seen In</h3>
      <p class="font-label uppercase tracking-[0.4em] text-[9px] text-[#8e9192]">Digital Archive — #DASTGALLERY</p>
    </div>
    <div class="flex overflow-x-auto hide-scrollbar gap-1 px-4 md:px-0">
      ${['AB6AXuCKXF4SiKbdRT4O7Qks-Xv3VN-I0O4dQQq2Rp0HU6mhh3QGZtxx4RpvphcNoOjviXjUpU8sLj-uyj8HAYJ9qwboWcvphvfmAwPfokXONHEoNPQ_N8Z9coLw9YsWyhN0kgrBc48eCMtuuNTzhhyGZnerArpBiRpWsy2bPlhWIAfB77ZWgPFjNJqjvQkSnun8qtEu2_kxpgv95DDLYyg43b93GVMgQRnOjPegC6AI6EYxagD5I-6Dq62T4UT1svSV9FvyvNbecEDNvohs',
        'AB6AXuCh2GqRfkWoJp9YsmyXHHH5xCJjBCL5rH0i1zSGSFVxTRdYdPHOGqc_l0yaZIWP1TCX8qs_nyUbfex2rIkvWU3xlktC-ZKGEowzI_TF0c4RpEXEGXJXDPutOPUKsUrtTdPm1WmB38g_iKR9LPVUtD9bDmPCWH65NOx7kj1VwruRSAv4B5XTqiqYbHWZYVQvqIw12vLYrX8oQ_w-3vA2vw8RVocetrQUjhpzA9IQPRnyfPVM0iqNkpyPRXRNE7mHtoYUcywVw6_NVCC2',
        'AB6AXuDokS_Mwuanuy1UHc927SbGsgQEhj0fp62lptA2XYAOc44hrxfJyFAsplD2lM9v598QpJarb33AuCSCHo-Fx7M79W6-uWn5JU3O2J7YcMD4LhWGoS_JU8N9MIXCqKWfdKFxjky9kq979tpJFHrtjbi7-LCIGAeFbacmXKKmgfXSQzN8OElBozfjFn2NIn4Uj3UwZKddBkpWTTUFWau4ZPuwRP2x1-DQPbzbSboe3EbvZrjHg96pvvhRFCYPdmdmLFOLTsnnzz-yFpmS',
        'AB6AXuDtN5r0COcJkDtvMreaqPRU-HD4dlxUcLkISI5mPH2VBCmGZ61i7BOVqr3SKz3pezrC1SYJ4YY6UMNe46I0Nl93pa4aKMpiUXJkFY5u21sOxUWvEwWyPPUIvbTRDercWOVuPxqxm1uZSdKSJ7bO6VrUabWUkePqkshU0dBWxeakuD_Bo7aeTpPvtYizDXEZhBQv3COaShwQS6wj1jUrLuQPWYoSOVRk4b6CgM_73Ac4Z1af1xnXslVXcVAk3L16sV4OPGbf8GSIWl6d',
        'AB6AXuAKJozQJ8nzlyOL5TWoXt4e-6GEMtQ7KTvaVUBBWPw_dnb284rrFZbVLSFiT34hEtgZ--iXITEvS-pK1F2YfW1gDkmAbE0PodgkGWs_0inO__bi4Eu40zND50iSAqUhIxsH8agLKz7j8qyYXkyqoNhZLzruRYZvRZ0jbruKmImYDNuOtTnKCwdLQRskqqrLi72_WlfDZVjdLPeeKx2ctZcdxTbCaBzsWm4m3lvax1SwSs_bafkzKwlzpudTRVWfKjAIuhioBFuh0CmZ'
      ].map((id, i) => `
        <div class="flex-none w-80 md:w-1/5 aspect-square bg-surface-container-low overflow-hidden group">
          <img alt="Social ${i + 1}" class="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/${id}" />
        </div>
      `).join('')}
    </div>
  </section>

  <!-- Newsletter -->
  <section class="bg-surface-container-low py-32 border-y border-outline-variant/10 reveal">
    <div class="max-w-2xl mx-auto px-8 text-center">
      <h4 class="text-4xl md:text-5xl font-headline mb-8 italic tracking-tight">Join the Inner Circle</h4>
      <p class="text-on-surface-variant text-sm font-body mb-12 tracking-wide max-w-md mx-auto opacity-70">Receive early access to seasonal archives, private gallery events, and tactile narratives.</p>
      <form class="flex flex-col md:flex-row gap-0" onsubmit="event.preventDefault()">
        <input class="w-full bg-transparent border-b border-outline/30 focus:border-primary border-t-0 border-x-0 font-label text-[11px] tracking-[0.25em] py-4 px-0 focus:ring-0 outline-none transition-all placeholder:text-[#8e9192]" placeholder="YOUR EMAIL ADDRESS" type="email" />
        <button class="md:ml-10 mt-8 md:mt-0 font-label uppercase tracking-[0.3em] text-[10px] text-primary hover:text-on-surface transition-colors font-semibold">Subscribe</button>
      </form>
    </div>
  </section>`;
}
