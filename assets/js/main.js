/* =========================================================
   PS5Consol — interactions
   ========================================================= */
(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const t = (key, fallback) => {
    if (window.I18N) {
      const value = window.I18N.t(key);
      if (value && value !== key) return value;
    }
    return fallback;
  };

  /* ---------- Element refs ---------- */
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const progress = document.getElementById("progress");
  const cursorGlow = document.getElementById("cursorGlow");
  const stage = document.getElementById("consoleStage");
  const toast = document.getElementById("toast");
  const form = document.getElementById("ctaForm");
  const email = document.getElementById("email");
  const year = document.getElementById("year");
  const gamesTrack = document.getElementById("gamesTrack");
  const gamesPrev = document.getElementById("gamesPrev");
  const gamesNext = document.getElementById("gamesNext");

  /* ---------- Footer year ---------- */
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Sticky nav + scroll progress ---------- */
  let ticking = false;
  const onScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

    if (nav) nav.classList.toggle("scrolled", scrollTop > 12);
    if (progress) progress.style.width = `${ratio * 100}%`;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(onScroll);
      }
    },
    { passive: true }
  );
  onScroll();

  /* ---------- Mobile menu ---------- */
  const menuLabel = (open) => t(open ? "nav.close" : "nav.menu", open ? "Close menu" : "Open menu");

  const closeMenu = () => {
    if (!navLinks || !navToggle) return;
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", menuLabel(false));
    document.body.classList.remove("menu-open");
  };

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", menuLabel(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeMenu();
    });

    document.addEventListener("i18n:changed", () => {
      navToggle.setAttribute("aria-label", menuLabel(navLinks.classList.contains("open")));
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("in"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll(".count");
  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.count || "0");
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) window.requestAnimationFrame(tick);
      else el.textContent = target.toFixed(decimals);
    };
    window.requestAnimationFrame(tick);
  };

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => counterObserver.observe(el));
  } else {
    counters.forEach((el) => {
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      el.textContent = parseFloat(el.dataset.count || "0").toFixed(decimals);
    });
  }

  /* ---------- Hero console 3D tilt ---------- */
  if (stage && !prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
    const MAX = 9;
    stage.addEventListener("mousemove", (event) => {
      const rect = stage.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      stage.style.setProperty("--ry", `${(px * MAX * 2).toFixed(2)}deg`);
      stage.style.setProperty("--rx", `${(-py * MAX * 2).toFixed(2)}deg`);
    });
    stage.addEventListener("mouseleave", () => {
      stage.style.setProperty("--ry", "0deg");
      stage.style.setProperty("--rx", "0deg");
    });
  }

  /* ---------- Cursor glow ---------- */
  if (cursorGlow && !prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
    let gx = window.innerWidth / 2;
    let gy = window.innerHeight / 2;
    let cx = gx;
    let cy = gy;
    let raf = null;

    const loop = () => {
      cx += (gx - cx) * 0.12;
      cy += (gy - cy) * 0.12;
      cursorGlow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = window.requestAnimationFrame(loop);
    };

    window.addEventListener(
      "pointermove",
      (event) => {
        gx = event.clientX;
        gy = event.clientY;
        if (!raf) raf = window.requestAnimationFrame(loop);
      },
      { passive: true }
    );

    document.addEventListener("pointerleave", () => {
      if (raf) {
        window.cancelAnimationFrame(raf);
        raf = null;
      }
    });
  }

  /* ---------- Games carousel ---------- */
  if (gamesTrack && gamesPrev && gamesNext) {
    const step = () => {
      const card = gamesTrack.querySelector(".game-card");
      return card ? card.getBoundingClientRect().width + 22 : 340;
    };
    const updateButtons = () => {
      const max = gamesTrack.scrollWidth - gamesTrack.clientWidth - 4;
      gamesPrev.disabled = gamesTrack.scrollLeft <= 4;
      gamesNext.disabled = gamesTrack.scrollLeft >= max;
    };

    gamesPrev.addEventListener("click", () => gamesTrack.scrollBy({ left: -step(), behavior: "smooth" }));
    gamesNext.addEventListener("click", () => gamesTrack.scrollBy({ left: step(), behavior: "smooth" }));
    gamesTrack.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    updateButtons();
  }

  /* ---------- Toast ---------- */
  let toastTimer = null;
  const showToast = (message) => {
    if (!toast || !message) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3800);
  };

  window.PS5UI = { toast: showToast };

  /* ---------- Newsletter form ---------- */
  if (form && email) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = email.value.trim();
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

      if (!isValid) {
        email.classList.add("invalid");
        email.focus();
        showToast(t("home.toast.invalid", "Please enter a valid email address."));
        return;
      }

      email.classList.remove("invalid");
      form.reset();
      showToast(t("home.toast.success", "You're on the list — see you on the other side. 🎮"));
    });

    email.addEventListener("input", () => email.classList.remove("invalid"));
  }
})();
