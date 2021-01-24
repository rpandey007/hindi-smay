/**
* Template Name: SoftLand - v2.2.0
* Template URL: https://bootstrapmade.com/softland-bootstrap-app-landing-page-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function($) {
  "use strict";

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  var siteMenuClone = function() {
    $('.js-clone-nav').each(function() {
      var $this = $(this);
      $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
    });
    setTimeout(function() {
      var counter = 0;
      $('.site-mobile-menu .has-children').each(function() {
        var $this = $(this);
        $this.prepend('<span class="arrow-collapse collapsed">');
        $this.find('.arrow-collapse').attr({
          'data-toggle': 'collapse',
          'data-target': '#collapseItem' + counter,
        });
        $this.find('> ul').attr({
          'class': 'collapse',
          'id': 'collapseItem' + counter,
        });
        counter++;
      });
    }, 1000);
    $('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ($this.closest('li').find('.collapse').hasClass('show')) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();
    });
    $(window).resize(function() {
      var $this = $(this),
        w = $this.width();
      if (w > 768) {
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    })
    $('body').on('click', '.js-menu-toggle', function(e) {
      var $this = $(this);
      e.preventDefault();
      if ($('body').hasClass('offcanvas-menu')) {
        $('body').removeClass('offcanvas-menu');
        $('body').find('.js-menu-toggle').removeClass('active');
      } else {
        $('body').addClass('offcanvas-menu');
        $('body').find('.js-menu-toggle').addClass('active');
      }
    })
    // click outisde offcanvas
    $(document).mouseup(function(e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu');
          $('body').find('.js-menu-toggle').removeClass('active');
        }
      }
    });
  };
  siteMenuClone();
  var siteScroll = function() {
    $(window).scroll(function() {
      var st = $(this).scrollTop();
      if (st > 100) {
        $('.js-sticky-header').addClass('shrink');
      } else {
        $('.js-sticky-header').removeClass('shrink');
      }
    })
  };
  siteScroll();
  var siteSticky = function() {
    $(".js-sticky-header").sticky({
      topSpacing: 0
    });
  };
  siteSticky();
  var siteOwlCarousel = function() {
    $('.testimonial-carousel').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      smartSpeed: 1000,
    });
    $('.hero-section.with-slider').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      smartSpeed: 1000,
    });
  };
  siteOwlCarousel();

  $(window).on('load', function() {
    AOS.init({
      easing: 'ease',
      duration: 1000,
      once: true
    });
  });

})(jQuery);


/*jshint jquery:true */

$(document).ready(function($) {
	"use strict";

	/* global google: false */
	/*jshint -W018 */

	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/

	var winDow = $(window);
		// Needed variables
		var $container=$('.iso-call');
		var $filter=$('.filter');

		try{
			$container.imagesLoaded( function(){
				// init
				winDow.trigger('resize');
				$container.isotope({
					filter:'*',
					layoutMode:'masonry',
					itemSelector: '.iso-call > div',
					masonry: {
					    columnWidth: '.default-size'
					},
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});
			});
		} catch(err) {
		}

		winDow.on('resize', function(){
			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});
		
		// Isotope Filter 
		$filter.find('a').on('click', function(){
			var selector = $(this).attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {

			}
			return false;
		});


	var filterItemA	= $('.filter li a');

		filterItemA.on('click', function(){
			var $this = $(this);
			if ( !$this.hasClass('active')) {
				filterItemA.removeClass('active');
				$this.addClass('active');
			}
		});

	$('#container').addClass('active');
	$('.iso-call').css('opacity', 0);
	$('.iso-call').imagesLoaded( function(){
		$('.iso-call').css('opacity', 1);
	});
	
	/*-------------------------------------------------*/
	/* = ticker news
	/*-------------------------------------------------*/
	
	$('a.toogle-box').on('click', function(event){
		event.preventDefault();
		if(!$(this).hasClass('active')) {
			$(this).addClass('active');
			$('div.versions-box-choose').addClass('closed');
		} else {
			$(this).removeClass('active');
			$('div.versions-box-choose').removeClass('closed');
		}
	});

	/*-------------------------------------------------*/
	/* = ticker news
	/*-------------------------------------------------*/

	try{		
		$('#js-news').ticker({
			speed: 0.20,			// The speed of the reveal
			controls: true,			// Whether or not to show the jQuery News Ticker controls
			titleText: '',	// To remove the title set this to an empty String
			displayType: 'reveal',	// Animation type - current options are 'reveal' or 'fade'
			direction: 'ltr',		// Ticker direction - current options are 'ltr' or 'rtl'
			pauseOnItems: 2000,		// The pause on a news item before being replaced
			fadeInSpeed: 600,		// Speed of fade in animation
			fadeOutSpeed: 300		// Speed of fade out animation
		});
	} catch(err) {
	}

	/*-------------------------------------------------*/
	/* =  OWL carousell - featured post, video post, gallery posts
	/*-------------------------------------------------*/
	try {
		var owlWrap = $('.owl-container-inner');

		if (owlWrap.length > 0) {

			if (jQuery().owlCarousel) {
				owlWrap.each(function(){

					var carousel= $(this).find('.owl-carousel'),
						dataNum = $(this).find('.owl-carousel').attr('data-num'),
						dataNum2,
						dataNum3;

					if ( dataNum == 1 ) {
						dataNum2 = 1;
						dataNum3 = 1;
					} else if ( dataNum == 2 ) {
						dataNum2 = 2;
						dataNum3 = dataNum - 1;
					} else {
						dataNum2 = dataNum - 1;
						dataNum3 = dataNum - 2;
					}

					carousel.owlCarousel({
						autoPlay: 10000,
						navigation : true,
						items : dataNum,
						itemsDesktop : [1199,dataNum2],
						itemsDesktopSmall : [979,dataNum3]
					});

				});
			}
		}

	} catch(err) {

	}
	
	/*-------------------------------------------------*/
	/* = bxslider 
	/*-------------------------------------------------*/

	try {	
		$('.bxslider').bxSlider({
			mode: 'fade',
			auto: true
    });
    $('.bxslider').bxSlider({
			mode: 'fade',
			auto: true
    });
    $('.bx-slider2').bxSlider({
			mode: 'fade',
			auto: true
		});

		$('.big-bxslider').bxSlider({
			mode: 'horizontal',
			auto: true
		});

		$('.slider-call').bxSlider({
			pagerCustom: '#bx-pager'
		});

		$('.slider-call2').bxSlider({
			pagerCustom: '#bx-pager2'
		});


	} catch(err) {
	}

	/* ---------------------------------------------------------------------- */
	/*	magnific-popup
	/* ---------------------------------------------------------------------- */

	try {
		// Example with multiple objects
		$('.zoom').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

	} catch(err) {

	}

	try {
		// Example with multiple objects
		$('.video-link').magnificPopup({
			type: 'iframe'
		});
	} catch(err) {

	}

	try {
		var magnLink = $('.log-in-popup');
		magnLink.magnificPopup({
			closeBtnInside:true
		});
	} catch(err) {

	}
	
	/*-------------------------------------------------*/
	/* =  comming soon & error height fix
	/*-------------------------------------------------*/
	
	try {

		$('#clock').countdown("2016/04/29", function(event) {
			var $this = $(this);
			switch(event.type) {
				case "seconds":
				case "minutes":
				case "hours":
				case "days":
				case "daysLeft":
					$this.find('span#'+event.type).html(event.value);
					break;
				case "finished":
					$this.hide();
					break;
			}
		});

	} catch(err) {

	}

	/*-------------------------------------------------*/
	/* = skills animate
	/*-------------------------------------------------*/

	try{

		var skillBar = $('.review-box');
		skillBar.appear(function() {

			var animateElement = $(".meter > p");
			animateElement.each(function() {
				$(this)
					.data("origWidth", $(this).width())
					.width(0)
					.animate({
						width: $(this).data("origWidth")
					}, 1200);
			});

		});
	} catch(err) {
	}
	
	/* ---------------------------------------------------------------------- */
	/*	register login forms
	/* ---------------------------------------------------------------------- */
	
	$('.register-line a').on('click', function(event){
		event.preventDefault();
		$('form.login-form').slideUp(400);
		$('form.register-form').slideDown(400);
	});
	
	$('a.lost-password').on('click', function(event){
		event.preventDefault();
		$('form.login-form').slideUp(400);
		$('form.lost-password-form').slideDown(400);
	});
	
	$('.login-line a').on('click', function(){
		console.log("clicked");
		$('form.lost-password-form').slideUp(400);
		$('form.register-form').slideUp(400);
		$('form.login-form').slideDown(400);
	});

	/* ---------------------------------------------------------------------- */
	/*	Contact Map
	/* ---------------------------------------------------------------------- */

	var contact = {"lat":"-38.3945495", "lon":"144.9187974"}; //Change a map coordinate here!-38.3945495,144.9187974

	try {
		var mapContainer = $('#map');
		mapContainer.gmap3({
			action: 'addMarker',
			marker:{
				options:{
					icon : new google.maps.MarkerImage('images/marker.png')
				}
			},
			latLng: [contact.lat, contact.lon],
			map:{
				center: [contact.lat, contact.lon],
				zoom: 10
				},
			},
			{action: 'setOptions', args:[{scrollwheel:false}]}
		);
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Header animate after scroll
	/* ---------------------------------------------------------------------- */

	(function() {

		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 300;
			document.querySelector( 'header' );
		function init() {
			window.addEventListener( 'scroll', function() {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 100 );
				}
			}, false );
		}
		
		function scrollPage() {
			var sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				$( 'header' ).addClass('active');
			}
			else {
				$( 'header' ).removeClass('active');
			}
			didScroll = false;
		}
		
		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}
		
		init();
		
	})();

});


$('.demo3').easyTicker({
  visible: 1,
  interval: 4000
});



$('.slick-slider-contauner').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
});
