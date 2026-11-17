/* =========================================================
   PS5Consol — store, filters and cart drawer
   ========================================================= */
(() => {
  "use strict";

  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const products = Array.isArray(window.STORE_PRODUCTS) ? window.STORE_PRODUCTS : [];
  const t = (key) => (window.I18N ? window.I18N.t(key) : key);
  const money = (value) => `$${Number(value).toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

  let activeFilter = "all";

  const filterBar = document.getElementById("filterBar");
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  const closeBtn = document.getElementById("cartClose");
  const itemsEl = document.getElementById("cartItems");
  const subtotalEl = document.getElementById("cartSubtotal");
  const checkoutBtn = document.getElementById("checkoutBtn");

  const productCard = (product) => `
    <article class="product-card" data-cat="${product.category}">
      <div class="product-media">
        <span class="product-badge">${t(product.badgeKey)}</span>
        <img src="${product.image}" alt="" loading="lazy" />
      </div>
      <div class="product-info">
        <h3>${t(product.nameKey)}</h3>
        <p class="product-desc">${t(product.descKey)}</p>
        <div class="product-foot">
          <span class="price">${money(product.price)}</span>
          <button class="btn btn-primary btn-sm add-btn" type="button" data-add="${product.id}">
            ${t("store.add")}
          </button>
        </div>
      </div>
    </article>`;

  const renderGrid = () => {
    const list = products.filter((product) => activeFilter === "all" || product.category === activeFilter);
    grid.innerHTML = list.map(productCard).join("");
  };

  const renderCart = () => {
    if (!itemsEl || !subtotalEl || !window.StoreCart) return;

    const items = window.StoreCart.get();
    const catalogue = new Map(products.map((product) => [product.id, product]));

    if (!items.length) {
      itemsEl.innerHTML = `<p class="cart-empty">${t("store.cart.empty")}</p>`;
    } else {
      itemsEl.innerHTML = items
        .map((item) => {
          const product = catalogue.get(item.id);
          if (!product) return "";
          return `
            <div class="cart-line" data-id="${product.id}">
              <img src="${product.image}" alt="" />
              <div class="cart-line-info">
                <p class="cart-line-name">${t(product.nameKey)}</p>
                <p class="cart-line-price">${money(product.price)}</p>
                <div class="qty-stepper">
                  <button type="button" data-act="dec" aria-label="${t("store.cart.decrease")}">−</button>
                  <span>${item.qty}</span>
                  <button type="button" data-act="inc" aria-label="${t("store.cart.increase")}">+</button>
                </div>
              </div>
              <button class="cart-remove" type="button" data-act="remove" aria-label="${t("store.remove")}">✕</button>
            </div>`;
        })
        .join("");
    }

    subtotalEl.textContent = money(window.StoreCart.total(products));
  };

  /* ---------- Filters ---------- */
  if (filterBar) {
    filterBar.addEventListener("click", (event) => {
      const button = event.target.closest(".filter-chip");
      if (!button) return;
      activeFilter = button.dataset.filter || "all";
      filterBar.querySelectorAll(".filter-chip").forEach((chip) => {
        chip.classList.toggle("active", chip === button);
      });
      renderGrid();
    });
  }

  /* ---------- Add to cart ---------- */
  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add]");
    if (!button || !window.StoreCart) return;

    window.StoreCart.add(button.dataset.add);
    if (window.PS5UI && window.PS5UI.toast) window.PS5UI.toast(t("store.added"));

    document.querySelectorAll(".cart-count").forEach((badge) => {
      badge.classList.remove("pulse");
      void badge.offsetWidth;
      badge.classList.add("pulse");
    });
  });

  /* ---------- Cart drawer ---------- */
  let lastFocus = null;

  const openCart = () => {
    if (!drawer || !overlay) return;
    lastFocus = document.activeElement;
    renderCart();
    drawer.classList.add("open");
    overlay.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    overlay.setAttribute("aria-hidden", "false");
    drawer.inert = false;
    document.body.classList.add("cart-open");
    if (closeBtn) closeBtn.focus();
  };

  const closeCart = () => {
    if (!drawer || !overlay) return;
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    overlay.setAttribute("aria-hidden", "true");
    drawer.inert = true;
    document.body.classList.remove("cart-open");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  };

  if (drawer) {
    drawer.inert = true;
    document.querySelectorAll(".cart-btn").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        openCart();
      });
    });
    if (overlay) overlay.addEventListener("click", closeCart);
    if (closeBtn) closeBtn.addEventListener("click", closeCart);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && drawer.classList.contains("open")) closeCart();
    });
  }

  if (itemsEl) {
    itemsEl.addEventListener("click", (event) => {
      const action = event.target.closest("[data-act]");
      const line = event.target.closest(".cart-line");
      if (!action || !line || !window.StoreCart) return;

      const id = line.dataset.id;
      const item = window.StoreCart.get().find((entry) => entry.id === id);
      if (!item) return;

      if (action.dataset.act === "inc") window.StoreCart.setQty(id, item.qty + 1);
      else if (action.dataset.act === "dec") window.StoreCart.setQty(id, item.qty - 1);
      else if (action.dataset.act === "remove") window.StoreCart.remove(id);
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (window.PS5UI && window.PS5UI.toast) window.PS5UI.toast(t("store.cart.checkoutToast"));
    });
  }

  document.addEventListener("cart:change", renderCart);
  document.addEventListener("i18n:changed", () => {
    renderGrid();
    renderCart();
  });

  renderGrid();
  renderCart();
})();
