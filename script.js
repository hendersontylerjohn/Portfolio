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

  /* ----- Footer year ----- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
