/* =========================================================
   LUMORA — Modern Kitchen
   Vanilla JavaScript — interactions & content
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Image helper (Pexels) ---------- */
  var IMG = "https://images.pexels.com/photos/";
  function px(id, w, h) {
    return (
      IMG + id + "/pexels-photo-" + id + ".jpeg?auto=compress&cs=tinysrgb&fit=crop&w=" +
      w + "&h=" + h
    );
  }

  /* ---------- Data: Featured dishes ---------- */
  var featured = [
    {
      id: 36563571,
      tag: "Chef's Pick",
      name: "Seared Ocean Bass",
      desc: "Line-caught bass, saffron velouté, garden peas and charred lemon.",
      price: "$34",
    },
    {
      id: 28052916,
      tag: "Signature",
      name: "Butter-Poached Lobster",
      desc: "Cold-water lobster, brown-butter emulsion, herb oil and sea greens.",
      price: "$48",
    },
    {
      id: 6111928,
      tag: "Seasonal",
      name: "Wild Herb Chicken",
      desc: "Free-range breast, wild rice, forest mushrooms and pan jus.",
      price: "$29",
    },
    {
      id: 34520947,
      tag: "House Favorite",
      name: "Dark Chocolate Délice",
      desc: "Single-origin chocolate, salted caramel and toasted mango.",
      price: "$14",
    },
  ];

  /* ---------- Data: Menu ---------- */
  var menu = [
    // Starters
    { cat: "starters", name: "Heirloom Tomato Carpaccio", desc: "Basil oil, aged balsamic, sea salt", price: "$13" },
    { cat: "starters", name: "Charred Octopus", desc: "Smoked paprika, potato, caper aioli", price: "$18", badge: "Popular" },
    { cat: "starters", name: "Burrata & Peach", desc: "Grilled sourdough, honey, mint", price: "$15" },
    { cat: "starters", name: "Forest Mushroom Velouté", desc: "Truffle cream, chive oil", price: "$12" },
    // Mains
    { cat: "mains", name: "Seared Ocean Bass", desc: "Saffron velouté, garden peas, charred lemon", price: "$34", badge: "Chef's Pick" },
    { cat: "mains", name: "Butter-Poached Lobster", desc: "Brown-butter emulsion, herb oil, sea greens", price: "$48" },
    { cat: "mains", name: "Wild Herb Chicken", desc: "Wild rice, forest mushrooms, pan jus", price: "$29" },
    { cat: "mains", name: "Dry-Aged Ribeye", desc: "Bone marrow butter, confit shallot, greens", price: "$42" },
    { cat: "mains", name: "Garden Harvest Plate", desc: "Roasted seasonal vegetables, romesco", price: "$24", badge: "Vegetarian" },
    // Desserts
    { cat: "desserts", name: "Dark Chocolate Délice", desc: "Salted caramel, toasted mango", price: "$14" },
    { cat: "desserts", name: "Vanilla Bean Panna Cotta", desc: "Berry compote, almond crumble", price: "$11" },
    { cat: "desserts", name: "Warm Pistachio Cake", desc: "Olive oil gelato, citrus", price: "$12", badge: "Popular" },
    { cat: "desserts", name: "Seasonal Fruit Sorbet", desc: "Rotating selection, herb syrup", price: "$9" },
    // Drinks
    { cat: "drinks", name: "Lumora Old Fashioned", desc: "Barrel-aged whiskey, bitters, orange", price: "$16", badge: "Signature" },
    { cat: "drinks", name: "Garden Spritz", desc: "Elderflower, cucumber, sparkling", price: "$13" },
    { cat: "drinks", name: "Reserve Red (glass)", desc: "Rotating regional selection", price: "$14" },
    { cat: "drinks", name: "Cold-Brew Affogato", desc: "Espresso, vanilla gelato", price: "$8" },
  ];

  /* ---------- Data: Gallery ---------- */
  var gallery = [
    { id: 10135116, cls: "gallery__item--wide", alt: "Warm restaurant interior" },
    { id: 6111928, cls: "", alt: "Plated chicken dish" },
    { id: 34520947, cls: "gallery__item--tall", alt: "Chocolate dessert" },
    { id: 28575445, cls: "", alt: "Elegant leather seating" },
    { id: 27612507, cls: "", alt: "Artistic plated dish" },
    { id: 6270663, cls: "", alt: "Dessert with sorbet" },
    { id: 26729400, cls: "gallery__item--wide", alt: "Modern dining room" },
    { id: 13772595, cls: "", alt: "Grilled fish with asparagus" },
  ];

  /* ---------- Data: Testimonials (demo) ---------- */
  var testimonials = [
    {
      quote: "An unforgettable evening — every course felt considered, and the room had such a warm, easy elegance.",
      name: "Amara S.",
      role: "Demo review",
      initials: "AS",
    },
    {
      quote: "The tasting menu was the highlight of our trip. Beautiful plating and genuinely kind service.",
      name: "Daniel & Rae",
      role: "Demo review",
      initials: "DR",
    },
    {
      quote: "Modern without being fussy. The lobster and the chocolate délice alone are worth the visit.",
      name: "Priya M.",
      role: "Demo review",
      initials: "PM",
    },
  ];

  /* ---------- Render: Featured ---------- */
  function renderFeatured() {
    var el = document.getElementById("featuredCards");
    if (!el) return;
    el.innerHTML = featured
      .map(function (d, i) {
        return (
          '<article class="card reveal" style="--reveal-delay:' + i * 0.08 + 's">' +
          '<div class="card__media">' +
          '<img src="' + px(d.id, 640, 480) + '" alt="' + d.name + '" loading="lazy" width="640" height="480">' +
          '<span class="card__tag">' + d.tag + "</span>" +
          "</div>" +
          '<div class="card__body">' +
          '<div class="card__head">' +
          '<h3 class="card__name">' + d.name + "</h3>" +
          '<span class="card__price">' + d.price + "</span>" +
          "</div>" +
          '<p class="card__desc">' + d.desc + "</p>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  /* ---------- Render: Menu ---------- */
  function renderMenu(filter) {
    var el = document.getElementById("menuGrid");
    if (!el) return;
    var items = menu.filter(function (m) {
      return filter === "all" || m.cat === filter;
    });
    el.innerHTML = items
      .map(function (m, i) {
        return (
          '<div class="menu-item" style="animation-delay:' + i * 0.04 + 's">' +
          '<div class="menu-item__main">' +
          '<div class="menu-item__top">' +
          '<span class="menu-item__name">' + m.name + "</span>" +
          (m.badge ? '<span class="menu-item__badge">' + m.badge + "</span>" : "") +
          '<span class="menu-item__dots"></span>' +
          '<span class="menu-item__price">' + m.price + "</span>" +
          "</div>" +
          '<p class="menu-item__desc">' + m.desc + "</p>" +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  /* ---------- Render: Gallery ---------- */
  function renderGallery() {
    var el = document.getElementById("galleryGrid");
    if (!el) return;
    el.innerHTML = gallery
      .map(function (g, i) {
        var big = g.cls.indexOf("wide") > -1 || g.cls.indexOf("tall") > -1;
        return (
          '<button type="button" class="gallery__item ' + g.cls +
          ' reveal" style="--reveal-delay:' + (i % 4) * 0.06 + 's" ' +
          'data-index="' + i + '" aria-label="View image: ' + g.alt + '">' +
          '<img src="' + px(g.id, big ? 700 : 500, big ? 500 : 400) +
          '" alt="' + g.alt + '" loading="lazy">' +
          '<span class="gallery__view" aria-hidden="true">View</span>' +
          "</button>"
        );
      })
      .join("");
  }

  /* ---------- Render: Testimonials ---------- */
  function renderTestimonials() {
    var el = document.getElementById("testimonialsGrid");
    if (!el) return;
    el.innerHTML = testimonials
      .map(function (t, i) {
        return (
          '<blockquote class="testimonial reveal" style="--reveal-delay:' + i * 0.08 + 's">' +
          '<div class="testimonial__stars" aria-label="5 out of 5 stars">★★★★★</div>' +
          '<p class="testimonial__quote">“' + t.quote + '”</p>' +
          '<footer class="testimonial__author">' +
          '<span class="testimonial__avatar" aria-hidden="true">' + t.initials + "</span>" +
          "<span>" +
          '<span class="testimonial__name">' + t.name + "</span><br>" +
          '<span class="testimonial__role">' + t.role + "</span>" +
          "</span>" +
          "</footer>" +
          "</blockquote>"
        );
      })
      .join("");
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- Navbar scroll state ---------- */
  function initNavScroll() {
    var nav = document.getElementById("nav");
    var toTop = document.getElementById("toTop");
    function onScroll() {
      var y = window.scrollY;
      if (nav) nav.classList.toggle("is-scrolled", y > 40);
      if (toTop) toTop.classList.toggle("is-visible", y > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile menu ---------- */
  function initMobileMenu() {
    var toggle = document.getElementById("navToggle");
    var links = document.getElementById("navLinks");
    if (!toggle || !links) return;
    function close() {
      links.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* ---------- Menu filtering ---------- */
  function initMenuFilter() {
    var wrap = document.getElementById("menuFilters");
    if (!wrap) return;
    wrap.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      wrap.querySelectorAll(".chip").forEach(function (c) {
        c.classList.remove("is-active");
      });
      btn.classList.add("is-active");
      renderMenu(btn.getAttribute("data-filter"));
    });
  }

  /* ---------- Back to top ---------- */
  function initToTop() {
    var btn = document.getElementById("toTop");
    if (!btn) return;
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Smooth anchor scroll (offset for fixed nav) ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top: top, behavior: "smooth" });
        // move keyboard focus to focusable targets (e.g. skip link -> hero)
        if (target.hasAttribute("tabindex")) {
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  /* ---------- Reservation form validation ---------- */
  function initForm() {
    var form = document.getElementById("reservationForm");
    if (!form) return;
    var success = document.getElementById("formSuccess");

    function setError(name, msg) {
      var field = form.querySelector('[name="' + name + '"]');
      var wrap = field ? field.closest(".field") : null;
      var errEl = form.querySelector('[data-error="' + name + '"]');
      if (wrap) wrap.classList.toggle("has-error", !!msg);
      if (field) field.setAttribute("aria-invalid", msg ? "true" : "false");
      if (errEl) errEl.textContent = msg || "";
      return !msg;
    }

    function validate() {
      var ok = true;
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var date = form.date.value;
      var guests = form.guests.value;
      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      ok = setError("name", name.length < 2 ? "Please enter your name." : "") && ok;
      ok = setError("email", !emailRe.test(email) ? "Enter a valid email address." : "") && ok;

      var dateMsg = "";
      if (!date) {
        dateMsg = "Please choose a date.";
      } else {
        var chosen = new Date(date + "T00:00:00");
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (chosen < today) dateMsg = "Please choose a future date.";
      }
      ok = setError("date", dateMsg) && ok;
      ok = setError("guests", !guests ? "Select party size." : "") && ok;
      return ok;
    }

    // live clear on input
    ["name", "email", "date", "guests"].forEach(function (n) {
      var f = form.querySelector('[name="' + n + '"]');
      if (f) {
        f.addEventListener("input", function () {
          var wrap = f.closest(".field");
          if (wrap && wrap.classList.contains("has-error")) validate();
        });
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (success) success.hidden = true;
      if (validate()) {
        form.reset();
        if (success) {
          success.hidden = false;
          success.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else {
        // move focus to the first invalid field for keyboard/screen-reader users
        var firstError = form.querySelector(".field.has-error input, .field.has-error select");
        if (firstError) firstError.focus();
      }
    });

    // sensible minimum date
    var dateInput = form.querySelector('[name="date"]');
    if (dateInput) {
      var t = new Date();
      dateInput.min = t.toISOString().split("T")[0];
    }
  }

  /* ---------- Gallery lightbox ---------- */
  function initLightbox() {
    var grid = document.getElementById("galleryGrid");
    var box = document.getElementById("lightbox");
    if (!grid || !box) return;

    var imgEl = document.getElementById("lbImg");
    var capEl = document.getElementById("lbCaption");
    var btnClose = document.getElementById("lbClose");
    var btnPrev = document.getElementById("lbPrev");
    var btnNext = document.getElementById("lbNext");
    var current = 0;
    var lastFocused = null;

    function largeUrl(id) {
      return px(id, 1400, 1000);
    }

    function show(index) {
      var len = gallery.length;
      current = (index + len) % len;
      var g = gallery[current];
      imgEl.src = largeUrl(g.id);
      imgEl.alt = g.alt;
      capEl.textContent = g.alt;
    }

    function open(index) {
      lastFocused = document.activeElement;
      show(index);
      box.hidden = false;
      // allow the element to render before adding the transition class
      requestAnimationFrame(function () {
        box.classList.add("is-open");
      });
      document.body.style.overflow = "hidden";
      btnClose.focus();
    }

    function close() {
      box.classList.remove("is-open");
      document.body.style.overflow = "";
      var onEnd = function () {
        box.hidden = true;
        box.removeEventListener("transitionend", onEnd);
      };
      box.addEventListener("transitionend", onEnd);
      // fallback in case transitionend doesn't fire
      setTimeout(function () {
        if (!box.classList.contains("is-open")) box.hidden = true;
      }, 400);
      if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
      }
    }

    grid.addEventListener("click", function (e) {
      var item = e.target.closest(".gallery__item");
      if (!item) return;
      var idx = parseInt(item.getAttribute("data-index"), 10);
      if (!isNaN(idx)) open(idx);
    });

    btnPrev.addEventListener("click", function () { show(current - 1); });
    btnNext.addEventListener("click", function () { show(current + 1); });

    box.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-close")) close();
    });

    document.addEventListener("keydown", function (e) {
      if (box.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(current - 1);
      else if (e.key === "ArrowRight") show(current + 1);
      else if (e.key === "Tab") {
        // simple focus trap between the three controls
        var focusables = [btnClose, btnPrev, btnNext];
        var i = focusables.indexOf(document.activeElement);
        if (e.shiftKey) {
          if (i <= 0) { e.preventDefault(); focusables[focusables.length - 1].focus(); }
        } else {
          if (i === focusables.length - 1) { e.preventDefault(); focusables[0].focus(); }
        }
      }
    });
  }

  /* ---------- Hero parallax (subtle, opt-in) ---------- */
  function initHeroParallax() {
    var bg = document.querySelector(".hero__bg");
    if (!bg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 720px)").matches) return; // skip on small screens

    var ticking = false;
    function update() {
      var y = window.scrollY;
      if (y < window.innerHeight) {
        // move the background focal point slowly for a cinematic drift
        // (does not touch `transform`, so it won't conflict with heroZoom)
        bg.style.backgroundPosition = "center calc(50% + " + y * 0.15 + "px)";
      }
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- Init ---------- */
  function init() {
    renderFeatured();
    renderMenu("all");
    renderGallery();
    renderTestimonials();
    initReveal();
    initNavScroll();
    initMobileMenu();
    initMenuFilter();
    initToTop();
    initSmoothScroll();
    initForm();
    initLightbox();
    initHeroParallax();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
