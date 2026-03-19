// Simple reactive cart store with localStorage persistence

const STORAGE_KEY = 'dast-cart';

let cartItems = loadCart();
let listeners = [];

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  listeners.forEach(fn => fn(cartItems));
}

export function getCart() {
  return [...cartItems];
}

export function getCartCount() {
  return cartItems.reduce((sum, item) => sum + item.qty, 0);
}

export function getCartTotal() {
  return cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
}

export function addToCart(product, size, qty = 1) {
  const existing = cartItems.find(item => item.id === product.id && item.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      price: product.price,
      size,
      qty,
      image: product.images[0],
    });
  }
  saveCart();
}

export function removeFromCart(productId, size) {
  cartItems = cartItems.filter(item => !(item.id === productId && item.size === size));
  saveCart();
}

export function updateQty(productId, size, qty) {
  const item = cartItems.find(item => item.id === productId && item.size === size);
  if (item) {
    if (qty <= 0) {
      removeFromCart(productId, size);
    } else {
      item.qty = qty;
      saveCart();
    }
  }
}

export function clearCart() {
  cartItems = [];
  saveCart();
}

export function onCartChange(fn) {
  listeners.push(fn);
  return () => { listeners = listeners.filter(l => l !== fn); };
}
