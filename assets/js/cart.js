/* =========================================================
   PS5Consol — shared cart state (localStorage)
   ========================================================= */
(() => {
  "use strict";

  const KEY = "ps5consol-cart";
  const MAX_QTY = 9;

  const sanitize = (raw) => {
    if (!Array.isArray(raw)) return [];
    return raw
      .filter((item) => item && typeof item.id === "string" && Number.isFinite(Number(item.qty)))
      .map((item) => ({
        id: item.id,
        qty: Math.max(1, Math.min(MAX_QTY, Math.round(Number(item.qty)))),
      }));
  };

  const read = () => {
    try {
      return sanitize(JSON.parse(window.localStorage.getItem(KEY)));
    } catch (error) {
      return [];
    }
  };

  let items = read();

  const count = () => items.reduce((total, item) => total + item.qty, 0);
  const getItems = () => items.map((item) => ({ ...item }));

  const syncBadges = () => {
    const total = count();
    document.querySelectorAll(".cart-count").forEach((el) => {
      el.textContent = String(total);
      el.hidden = total === 0;
    });
  };

  const commit = () => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(items));
    } catch (error) {
      /* storage unavailable */
    }
    syncBadges();
    document.dispatchEvent(
      new CustomEvent("cart:change", {
        detail: { items: getItems(), count: count() },
      })
    );
  };

  const add = (id, qty = 1) => {
    if (typeof id !== "string" || !id) return;
    const amount = Math.max(1, Math.min(MAX_QTY, Math.round(Number(qty) || 1)));
    const existing = items.find((item) => item.id === id);
    if (existing) existing.qty = Math.min(MAX_QTY, existing.qty + amount);
    else items.push({ id, qty: amount });
    commit();
  };

  const remove = (id) => {
    const before = items.length;
    items = items.filter((item) => item.id !== id);
    if (items.length !== before) commit();
  };

  const setQty = (id, qty) => {
    const amount = Math.round(Number(qty));
    if (!Number.isFinite(amount) || amount <= 0) {
      remove(id);
      return;
    }
    const existing = items.find((item) => item.id === id);
    if (!existing) return;
    existing.qty = Math.min(MAX_QTY, amount);
    commit();
  };

  const clear = () => {
    if (!items.length) return;
    items = [];
    commit();
  };

  const total = (products) => {
    if (!Array.isArray(products)) return 0;
    const catalogue = new Map(products.map((product) => [product.id, product]));
    return items.reduce((sum, item) => {
      const product = catalogue.get(item.id);
      return product ? sum + product.price * item.qty : sum;
    }, 0);
  };

  window.StoreCart = { add, remove, setQty, clear, get: getItems, count, total, syncBadges };

  window.addEventListener("storage", (event) => {
    if (event.key !== KEY) return;
    items = read();
    syncBadges();
    document.dispatchEvent(
      new CustomEvent("cart:change", {
        detail: { items: getItems(), count: count() },
      })
    );
  });

  syncBadges();
})();
