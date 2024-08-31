// Scroll To Top
// const scrollToTop = document.querySelector("body > .scroll-top");

// window.addEventListener("scroll", () => (scrollY >= 750 ? scrollToTop.classList.add("show") : scrollToTop.classList.remove("show")));

// scrollToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Footer Date
const date = new Date();
const footerDate = document.querySelector("footer  .date");

footerDate.textContent = date.getFullYear();
