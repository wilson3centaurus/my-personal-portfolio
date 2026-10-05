(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile menu ---------- */
  const btn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".mobile-menu");
  if (btn && menu) {
    const setOpen = (open) => {
      menu.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
      btn.innerHTML = open ? '<i class="bi bi-x-lg"></i>' : '<i class="bi bi-list"></i>';
      document.body.style.overflow = open ? "hidden" : "";
    };
    btn.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
    window.addEventListener("resize", () => { if (window.innerWidth > 860) setOpen(false); });
  }

  /* ---------- Reveal on scroll ---------- */
  const items = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach((el) => io.observe(el));
  }

  /* ---------- Typing role on the home page ---------- */
  const typed = document.querySelector(".typed");
  if (typed) {
    const words = JSON.parse(typed.dataset.words || "[]");
    if (reduceMotion || words.length === 0) {
      typed.textContent = words[0] || "";
    } else {
      let w = 0, i = 0, deleting = false;
      const tick = () => {
        const word = words[w];
        i += deleting ? -1 : 1;
        typed.textContent = word.slice(0, i);
        let delay = deleting ? 38 : 70;
        if (!deleting && i === word.length) { deleting = true; delay = 1800; }
        else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; delay = 300; }
        setTimeout(tick, delay);
      };
      setTimeout(tick, 900);
    }
  }

  /* ---------- Contact form: opens the visitor's email app ---------- */
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get("name") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const subject = (data.get("subject") || "").toString().trim() || `Message from ${name || "your portfolio"}`;
      const message = (data.get("message") || "").toString().trim();
      const body = `${message}\n\n${name}${email ? " (" + email + ")" : ""}`;
      window.location.href =
        "mailto:tafadzwawilsonsedze@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }

  /* ---------- Footer year ---------- */
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
