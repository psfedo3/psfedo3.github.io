
let navToggle = document.querySelector(".nav__toggle");
let navMobileBtn = document.querySelector(".js-mobile-nav__close");
let navWrapper = document.querySelector(".js-mobile-nav");

navToggle.addEventListener("click", function () {
    navWrapper.classList.add('js-mobile-nav-open');
});
navMobileBtn.addEventListener('click', function() {
  navWrapper.classList.remove('js-mobile-nav-open')
})


window.addEventListener("load", function() {
  if (window.location.hash != "") {
    var tagId = "tag-" + window.location.hash.slice(1);
    var tagObject = document.getElementById(tagId);
    var attribute = document.createAttribute("open");
    attribute.value = "open";
    tagObject.setAttributeNode(attribute);
  }
});
