$(function(){
	$('.hamburger-btn').click(function(){
		$(this).toggleClass('is-open')
		$('.menu').toggleClass('is-open')
	});

	$('.nav-menu a').click(function(){
		$('.hamburger-btn').removeClass('is-open');
		$('.menu').removeClass('is-open');
		});

	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$('.page-top-btn').fadeIn();
		}else{
			$('.page-top-btn').fadeOut();
	}
	});

	$('.page-top-btn').click(function(){
		$('body,html').animate({ scrollTop:0}, 500);
		return false;
		});
});

 $(document).ready(function(){
      $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,
        fade: true,
        arrows: false,
        dots: true
      });
    });


