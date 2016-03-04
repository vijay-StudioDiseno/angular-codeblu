//<![CDATA[
	$(window).load(function() { // makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(50).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(50).css({'overflow':'visible'});
	})
//]]>

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

	

//Parallax	
	$(function() {
	
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    $body.imagesLoaded( function() {
		setTimeout(function() {
		 if($window.width()>992){
     
		      adjustWindow();
		 }
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init({
		    forceHeight: false,
		    render: function(data) {
		    
		        //Debugging - Log the current scroll position.
		        //console.log(data.curTop);
		    }
		});
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	   // $slide.height(winH);
	    
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));
	    
	}
		
});


//Right Side Off-Canvas

// Closes the sidebar menu
$("#menu-close, .sidebar-nav li .newnav01").click(function(e) {
	e.preventDefault();
	$("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#sidebar-wrapper").toggleClass("active");
});

$(".menu-link, .sidebar-nav li .newnav01").click(function(){
  $(".newnav").toggleClass("active");
});

$(".menu-link").click(function(){
  $("#menu").toggleClass("active");
  $(".site-wrapper").toggleClass("active");
});


$('.rightbar-nav a, .navbar-form .btn-group').click(function() {
	$("#menu").toggleClass("active");
	$(".site-wrapper").toggleClass("active");
});

$(function() {
	if($window.width()>420){
		$(window).scroll(function(){
			if ($(window).scrollTop() > 600) {
				$('.navbar-brand').show();
			}
			else 
			{
				 $('.navbar-brand').hide();
			}
		});
	
	}
});

$(function() {
	if($window.width()<420){
		
		$(window).scroll(function(){
			if ($(window).scrollTop() > 200) {
				$('.navbar-brand').show();
			}
			else 
			{
				 $('.navbar-brand').hide();
			}
		});
	
	}
});
