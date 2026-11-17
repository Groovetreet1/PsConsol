/* =========================================================
   PS5Consol — 3D console login (demo)
   ========================================================= */
(() => {
  "use strict";

  const t = (key, fallback) => {
    if (window.I18N) {
      const value = window.I18N.t(key);
      if (value && value !== key) return value;
    }
    return fallback;
  };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const section = document.getElementById("loginSection");
  const stage = document.getElementById("loginStage");
  const card = document.getElementById("loginCard");
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");
  const pwToggle = document.getElementById("pwToggle");
  const remember = document.getElementById("rememberEmail");
  const forgotBtn = document.getElementById("forgotBtn");
  const submitBtn = document.getElementById("loginSubmit");
  const submitLabel = submitBtn ? submitBtn.querySelector(".login-submit-label") : null;
  const errorEl = document.getElementById("loginError");
  const success = document.getElementById("loginSuccess");
  const sessionEmail = document.getElementById("sessionEmail");
  const signOutBtn = document.getElementById("signOutBtn");
  const clock = document.getElementById("loginClock");

  const SESSION_KEY = "ps5consol-demo-session";
  const EMAIL_KEY = "ps5consol-demo-email";
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  let loading = false;
  let errorKey = "";
  let loadingTimer = null;

  const readStore = (store, key) => {
    try {
      return window[store].getItem(key) || "";
    } catch (e) {
      return "";
    }
  };

  const writeStore = (store, key, value) => {
    try {
      if (value) window[store].setItem(key, value);
      else window[store].removeItem(key);
    } catch (e) {
      /* storage unavailable */
    }
  };

  /* ---------- OS clock ---------- */
  const tickClock = () => {
    if (!clock) return;
    const now = new Date();
    clock.textContent = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  };
  tickClock();
  window.setInterval(tickClock, 20000);

  /* ---------- Password reveal ---------- */
  const setPasswordVisible = (visible) => {
    if (!passwordInput || !pwToggle) return;
    passwordInput.type = visible ? "text" : "password";
    pwToggle.classList.toggle("is-visible", visible);
    pwToggle.setAttribute("aria-pressed", String(visible));
    pwToggle.setAttribute(
      "aria-label",
      visible
        ? t("login.form.hidePassword", "Hide password")
        : t("login.form.showPassword", "Show password")
    );
  };

  if (pwToggle) {
    pwToggle.addEventListener("click", () => {
      setPasswordVisible(passwordInput ? passwordInput.type === "password" : true);
    });
  }

  /* ---------- Error handling ---------- */
  const fieldWrap = (input) => (input ? input.closest(".login-input") : null);

  const clearError = () => {
    if (errorEl) {
      errorEl.hidden = true;
      errorEl.textContent = "";
    }
    [emailInput, passwordInput].forEach((input) => {
      const wrap = fieldWrap(input);
      if (wrap) wrap.classList.remove("invalid");
      if (input) input.removeAttribute("aria-invalid");
    });
    errorKey = "";
  };

  const showError = (key, fallback, input) => {
    errorKey = key;
    if (errorEl) {
      errorEl.textContent = t(key, fallback);
      errorEl.hidden = false;
    }
    const wrap = fieldWrap(input);
    if (wrap) wrap.classList.add("invalid");
    if (input) {
      input.setAttribute("aria-invalid", "true");
      input.focus();
    }
  };

  [emailInput, passwordInput].forEach((input) => {
    if (!input) return;
    input.addEventListener("input", clearError);
  });

  /* ---------- Remembered email ---------- */
  const remembered = readStore("localStorage", EMAIL_KEY);
  if (remembered && emailInput && remember) {
    emailInput.value = remembered;
    remember.checked = true;
  }

  /* ---------- Demo success state ---------- */
  const showSuccess = (mail) => {
    if (!card || !success) return;
    if (sessionEmail) sessionEmail.textContent = mail;
    card.hidden = true;
    success.hidden = false;
    success.setAttribute("tabindex", "-1");
    success.focus({ preventScroll: true });
  };

  const showForm = () => {
    if (!card || !success) return;
    success.hidden = true;
    card.hidden = false;
    if (form) {
      form.removeAttribute("aria-busy");
      form.reset();
    }
    setPasswordVisible(false);
    loading = false;
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.classList.remove("is-loading");
    }
    if (submitLabel) submitLabel.textContent = t("login.form.submit", "Sign in");
    const rememberedMail = readStore("localStorage", EMAIL_KEY);
    if (emailInput) emailInput.value = rememberedMail;
    if (remember) remember.checked = Boolean(rememberedMail);
    clearError();
    if (emailInput) emailInput.focus({ preventScroll: true });
  };

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (loading || !emailInput || !passwordInput) return;

      clearError();
      const mail = emailInput.value.trim();
      const pass = passwordInput.value;

      if (!EMAIL_RE.test(mail)) {
        showError("login.form.invalidEmail", "Enter a valid email address.", emailInput);
        return;
      }
      if (pass.length < 6) {
        showError(
          "login.form.shortPassword",
          "Your password needs at least 6 characters.",
          passwordInput
        );
        return;
      }

      loading = true;
      form.setAttribute("aria-busy", "true");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add("is-loading");
      }
      if (submitLabel) submitLabel.textContent = t("login.form.submitting", "Signing in…");

      if (remember && remember.checked) writeStore("localStorage", EMAIL_KEY, mail);
      else writeStore("localStorage", EMAIL_KEY, "");

      loadingTimer = window.setTimeout(() => {
        loadingTimer = null;
        loading = false;
        writeStore("sessionStorage", SESSION_KEY, mail);
        if (form) form.removeAttribute("aria-busy");
        showSuccess(mail);
        if (window.PS5UI) window.PS5UI.toast(t("login.demo.success", "Welcome back, Player One. 🎮"));
      }, 900);
    });
  }

  if (signOutBtn) {
    signOutBtn.addEventListener("click", () => {
      writeStore("sessionStorage", SESSION_KEY, "");
      showForm();
    });
  }

  if (forgotBtn) {
    forgotBtn.addEventListener("click", () => {
      if (window.PS5UI) {
        window.PS5UI.toast(t("login.demo.forgot", "Demo only — password reset is disabled."));
      }
    });
  }

  /* ---------- Restore session ---------- */
  const activeSession = readStore("sessionStorage", SESSION_KEY);
  if (activeSession) {
    if (emailInput) emailInput.value = activeSession;
    showSuccess(activeSession);
  }

  /* ---------- 3D pointer tilt ---------- */
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const wideEnough = () => window.innerWidth > 900;

  if (stage && finePointer && !prefersReducedMotion) {
    const MAX = 6;
    const move = (event) => {
      if (!wideEnough()) return;
      const rect = stage.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      stage.style.setProperty("--ry", `${(px * MAX * 2).toFixed(2)}deg`);
      stage.style.setProperty("--rx", `${(-py * MAX * 2).toFixed(2)}deg`);
    };
    stage.addEventListener("pointermove", move, { passive: true });
    stage.addEventListener("pointerleave", () => {
      stage.style.setProperty("--ry", "0deg");
      stage.style.setProperty("--rx", "0deg");
    });
  }

  if (card && finePointer && !prefersReducedMotion) {
    const MAX = 4;
    const move = (event) => {
      if (!wideEnough()) return;
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--ry", `${(px * MAX * 2).toFixed(2)}deg`);
      card.style.setProperty("--rx", `${(-py * MAX * 2).toFixed(2)}deg`);
    };
    card.addEventListener("pointermove", move, { passive: true });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--ry", "0deg");
      card.style.setProperty("--rx", "0deg");
    });
  }

  /* ---------- Re-label dynamic text on language switch ---------- */
  document.addEventListener("i18n:changed", () => {
    setPasswordVisible(Boolean(passwordInput && passwordInput.type === "text"));
    if (loading && submitLabel) {
      submitLabel.textContent = t("login.form.submitting", "Signing in…");
    } else if (submitLabel) {
      submitLabel.textContent = t("login.form.submit", "Sign in");
    }
    if (errorKey && errorEl) {
      errorEl.textContent = t(errorKey);
      errorEl.hidden = false;
    }
  });

  /* ---------- Cleanup timer on page hide ---------- */
  window.addEventListener("pagehide", () => {
    if (loadingTimer) window.clearTimeout(loadingTimer);
  });
})();
