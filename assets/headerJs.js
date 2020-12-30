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



// Serving offline pages

<script>
		if (navigator && navigator.serviceWorker) {
			caches.open('pages').then(function (cache) {
				cache.keys().then(function (keys) {
					var offline = document.querySelector('[data-offline]');
					offline.innerHTML =
						'<ul>' +
							keys.map(function(key) {
								return '<li><a href="' + key.url + '">' + key.url + '</a></li>';
							}).join('') +
						'</ul>';
				});
			});
		}
	</script>
