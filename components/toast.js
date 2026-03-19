// Toast notification for "Added to bag" etc.
let toastTimeout = null;

export function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 z-[80] flex flex-col items-center gap-3 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const iconMap = { success: 'check_circle', info: 'info', error: 'error' };
  toast.className = 'pointer-events-auto flex items-center gap-4 px-8 py-4 bg-[#2a2a2a] border border-[#444748]/20 shadow-2xl backdrop-blur-md transform translate-y-4 opacity-0 transition-all duration-500';
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[#e9c349] text-lg">${iconMap[type] || 'check_circle'}</span>
    <span class="font-label text-[11px] uppercase tracking-[0.2em] text-[#e5e2e1] font-bold">${message}</span>
  `;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('-translate-y-2', 'opacity-0');
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}
