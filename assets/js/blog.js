/* =========================================================
   PS5Consol — journal (listing + article)
   ========================================================= */
(() => {
  "use strict";

  const posts = Array.isArray(window.BLOG_POSTS) ? window.BLOG_POSTS : [];
  const page = document.body ? document.body.dataset.page : "";
  const t = (key) => (window.I18N ? window.I18N.t(key) : key);
  const lang = () => (window.I18N ? window.I18N.lang : "en");
  const pick = (value) => {
    if (!value) return "";
    if (Array.isArray(value)) return value;
    return value[lang()] || value.en || "";
  };

  const fmtDate = (iso) => {
    const locale = lang() === "ar" ? "ar-MA" : lang() === "fr" ? "fr-FR" : "en-GB";
    try {
      return new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric" }).format(
        new Date(`${iso}T12:00:00`)
      );
    } catch (error) {
      return iso;
    }
  };

  const postUrl = (post) => `article.html?post=${encodeURIComponent(post.slug)}`;

  const metaLine = (post) => `
    <div class="post-meta">
      <span class="post-cat">${pick(post.category)}</span>
      <span class="meta-dot" aria-hidden="true">·</span>
      <time datetime="${post.date}">${fmtDate(post.date)}</time>
      <span class="meta-dot" aria-hidden="true">·</span>
      <span>${post.read} ${t("blog.minRead")}</span>
    </div>`;

  const card = (post, extra = "") => `
    <article class="post-card ${extra}">
      <a class="post-cover" href="${postUrl(post)}" tabindex="-1" aria-hidden="true">
        <img src="${post.image}" alt="" loading="lazy" />
      </a>
      <div class="post-body">
        ${metaLine(post)}
        <h3><a href="${postUrl(post)}">${pick(post.title)}</a></h3>
        <p class="post-excerpt">${pick(post.excerpt)}</p>
        <a class="post-link" href="${postUrl(post)}">${t("blog.read")} <span aria-hidden="true">→</span></a>
      </div>
    </article>`;

  const featured = (post) => `
    <article class="featured-post">
      <a class="post-cover" href="${postUrl(post)}" tabindex="-1" aria-hidden="true">
        <img src="${post.image}" alt="" loading="lazy" />
      </a>
      <div class="post-body">
        <span class="featured-label">${t("blog.featured")}</span>
        ${metaLine(post)}
        <h2><a href="${postUrl(post)}">${pick(post.title)}</a></h2>
        <p class="post-excerpt">${pick(post.excerpt)}</p>
        <a class="btn btn-ghost btn-sm" href="${postUrl(post)}">
          <span>${t("blog.read")}</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>`;

  const renderList = () => {
    const featuredEl = document.getElementById("featuredPost");
    const grid = document.getElementById("postGrid");
    const empty = document.getElementById("blogEmpty");
    if (!featuredEl || !grid) return;

    if (!posts.length) {
      featuredEl.innerHTML = "";
      grid.innerHTML = "";
      if (empty) empty.hidden = false;
      return;
    }

    if (empty) empty.hidden = true;
    featuredEl.innerHTML = featured(posts[0]);
    grid.innerHTML = posts.slice(1).map((post) => card(post)).join("");
  };

  const renderArticle = () => {
    const head = document.getElementById("articleHead");
    const bodyEl = document.getElementById("articleBody");
    const cover = document.getElementById("articleCover");
    const more = document.getElementById("articleMore");
    if (!head || !bodyEl || !cover || !more) return;

    let slug = "";
    try {
      slug = new URLSearchParams(window.location.search).get("post") || "";
    } catch (error) {
      slug = "";
    }

    const post = posts.find((item) => item.slug === slug);

    if (!post) {
      document.title = `${t("article.notFound")} — PS5Consol`;
      head.innerHTML = `
        <a class="back-link" href="blog.html"><span aria-hidden="true">←</span> ${t("article.back")}</a>
        <h1>${t("article.notFound")}</h1>`;
      cover.innerHTML = "";
      bodyEl.innerHTML = "";
      more.innerHTML = "";
      return;
    }

    document.title = `${pick(post.title)} — PS5Consol`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", pick(post.excerpt));

    head.innerHTML = `
      <a class="back-link" href="blog.html"><span aria-hidden="true">←</span> ${t("article.back")}</a>
      ${metaLine(post)}
      <h1>${pick(post.title)}</h1>
      <p class="article-byline">${post.author}</p>`;

    cover.innerHTML = `<img src="${post.image}" alt="" />`;

    const paragraphs = pick(post.body) || [];
    const quote = pick(post.quote);
    bodyEl.innerHTML = paragraphs
      .map((paragraph, index) => `<p>${paragraph}</p>${index === 0 && quote ? `<blockquote>${quote}</blockquote>` : ""}`)
      .join("");

    const others = posts.filter((item) => item.slug !== post.slug).slice(0, 2);
    more.innerHTML = others.length
      ? `<h2>${t("article.more")}</h2><div class="article-more-grid">${others.map((item) => card(item, "compact")).join("")}</div>`
      : "";
  };

  const init = () => {
    if (page === "blog") renderList();
    else if (page === "article") renderArticle();
  };

  init();
  document.addEventListener("i18n:changed", init);
})();
