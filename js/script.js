$('body').scrollspy({
	target: ".scroll-menu"
})
$("#nav-sticky ul li a[href^='#']").on('click', function (e) {

	// prevent default anchor click behavior
	e.preventDefault();

	// store hash
	var hash = this.hash;

	// animate
	$('html, body').animate({
		scrollTop: $(hash).offset().top
	}, 800, function () {

		// when done, add hash to url
		// (default click behaviour)
		window.location.hash = hash;
	});


});




const swiperOptions = {
  loop: "infinite",
  effect: "slide",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  // custom pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (i, className) {
      return `
   <button class="${className}">
  <svg class="progress" width="41" height="41"><circle class="circle-origin" r="20" cx="20.5" cy="20.5"></circle></svg><span></span>
</button>
      `;
    }
  }
};

const swiper = new Swiper(".swiper", swiperOptions);

$(window).load(function () {
  $("#newsletter").slideDown(600, function () {
    $("#newsletter").css("display", "block");
  });
});

function closePopup() {
  $("#newsletter").slideUp(600, function () {
    $("#newsletter").css("display", "none");
  });
}

$(document.body).on('touchmove', onScroll); // for mobile
$(window).on('scroll', onScroll); 

// callback
function onScroll(){ 
    if( $(window).scrollTop() + window.innerHeight >= document.body.scrollHeight ) { 
      $("#newsletter").slideDown(600, function () {
        $("#newsletter").css("display", "block");
      });
    }
}


/* Javascript to show and hide cookie banner using localstorage */
/* Shows the Cookie banner */
function showCookieBanner(){
 let cookieBanner = document.getElementById("cb-cookie-banner");
 cookieBanner.style.display = "block";
}

/* Hides the Cookie banner and saves the value to localstorage */
function hideCookieBanner(){
 localStorage.setItem("cb_isCookieAccepted", "yes");
 let cookieBanner = document.getElementById("cb-cookie-banner");
 cookieBanner.style.display = "none";
}

/* Checks the localstorage and shows Cookie banner based on it. */
function initializeCookieBanner(){
 let isCookieAccepted = localStorage.getItem("cb_isCookieAccepted");
 if(isCookieAccepted === null)
 {
  localStorage.setItem("cb_isCookieAccepted", "no");
  showCookieBanner();
 }
 if(isCookieAccepted === "no"){
  showCookieBanner();
 }
}



	$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
