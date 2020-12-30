let navToggle = document.querySelector(".c-nav__button");
let navWrapper = document.querySelector(".c-nav__items");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
    this.classList.remove("active");

  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
    this.classList.add("active");
    
  }
});

