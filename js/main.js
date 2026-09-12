// AKV Tax Consultant — small site behaviors (no external dependencies)

document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("nav.main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var expanded = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  // Close mobile nav when a link is tapped
  document.querySelectorAll("nav.main-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (nav) nav.classList.remove("open");
    });
  });
});
