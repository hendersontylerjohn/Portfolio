/* Tyler Henderson - Portfolio
   Vanilla JS: scroll reveals, sticky-nav state, mobile menu. */

(function () {
  "use strict";

  /* ----- Scroll-triggered reveal animations ----- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show everything immediately
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ----- Nav border appears once the page is scrolled ----- */
  var nav = document.querySelector(".nav");
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 10);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ----- Mobile menu toggle ----- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  // Close the menu after tapping a link
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ----- Language toggle (EN/FR), no page reload so scroll position is kept ----- */
  var langToggle = document.getElementById("langToggle");
  var textNodes = document.querySelectorAll(".i18n");
  var hrefNodes = document.querySelectorAll(".i18n-href");
  var ariaNodes = document.querySelectorAll(".i18n-aria");

  function applyLang(lang) {
    document.documentElement.lang = lang;
    textNodes.forEach(function (el) {
      var value = el.dataset[lang];
      if (value !== undefined) el.innerHTML = value;
    });
    hrefNodes.forEach(function (el) {
      var value = el.dataset["href" + lang.charAt(0).toUpperCase() + lang.slice(1)];
      if (value !== undefined) el.setAttribute("href", value);
    });
    ariaNodes.forEach(function (el) {
      var value = el.dataset["aria" + lang.charAt(0).toUpperCase() + lang.slice(1)];
      if (value !== undefined) el.setAttribute("aria-label", value);
    });
    langToggle.textContent = lang === "en" ? "FR" : "EN";
    langToggle.setAttribute("aria-label", lang === "en" ? "Switch to French" : "Passer en anglais");
    try { localStorage.setItem("lang", lang); } catch (e) { }
  }

  var savedLang = "en";
  try { savedLang = localStorage.getItem("lang") || "en"; } catch (e) { }
  applyLang(savedLang);

  langToggle.addEventListener("click", function () {
    var next = document.documentElement.lang === "en" ? "fr" : "en";
    applyLang(next);
  });

  /* ----- Footer year ----- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
