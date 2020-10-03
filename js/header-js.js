
let navToggle = document.querySelector(".nav__toggle");
let navMobileBtn = document.querySelector(".js-mobile-nav__close");
let navWrapper = document.querySelector(".js-mobile-nav");

navToggle.addEventListener("click", function () {
    navWrapper.classList.add('js-mobile-nav-open');
});
navMobileBtn.addEventListener('click', function() {
  navWrapper.classList.remove('js-mobile-nav-open')
})