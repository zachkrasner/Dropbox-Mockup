//Javascript for Dropbox Mockup
//by Zach Krasner

$(document).ready(function() {

	//Fade in Background
	$("#background_img").fadeTo(700, 0).animate({
		'opacity': 1,
		'top': '-70px'
	}, 1000);

	//Responsive Navigation Menu
	$(".navMenu").on('click', function() {
		$(".mainBanner").toggleClass("open");
		return false;
	})

	//OnScroll Elements
	function checkIfVisible(element) {
		//Get viewport checkpoints
		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		//Get element's position
		var elementTop = $(element).offset().top;
		var elementBottom = elementTop + $(element).height();

		//Check if element is on screen
		return ((elementTop >= viewportTop) && (elementBottom <= viewportBottom));
	}


	//Function to animate the features so we don't have to write this twice
	var alreadyFired = false;

	function animateFeatures() {
		if (!alreadyFired) {
			$("#feature1").addClass("animate")

			setTimeout(function() {
				$("#feature2").addClass("animate");
			}, 300);

			setTimeout(function() {
				$("#feature3").addClass("animate");
			}, 600);
		}
	}

	//If elements already on screen, then wait until 200px is scrolled	  
	if (checkIfVisible("#feature1")) {
		var origScrollPosition = $(window).scrollTop();
		$(window).scroll(function() {
			var newScrollPosition = $(window).scrollTop();
			var scrollDifference = Math.abs(newScrollPosition - origScrollPosition);
			if (scrollDifference >= 200) {
				animateFeatures();
				alreadyFired = true;
			}
		})

		//Otherwise, animate the elements when they scroll into view
	} else {

		$(window).scroll(function() {
			if (checkIfVisible("#feature1")) {
				animateFeatures();
				alreadyFired = true;
			}
		});
	}

	//Initialize Carousel
	$("#carousel").owlCarousel({
		navigation: true, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		navigation: false
	});

	//Slider Navigation
	var owl = $(".owl-carousel").data('owlCarousel');

	$("#btnPrev").on('click', function() {
		owl.prev();
		return false;
	})
	$("#btnNext").on('click', function() {
		owl.next();
		return false;
	})

	//Video Play
	$("#playVideo").on('click', function() {
		$(this).delay(20).fadeOut("fast");
		$("#videoWrap").delay(300).fadeIn("fast");
		document.getElementById('video').play();
		return false;
	})

});