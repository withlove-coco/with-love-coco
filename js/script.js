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

$(function() {
  var topBtn = $('.button_top');    
  topBtn.hide(); // 最初はボタンを隠す

  // スクロールしたら発動
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) { // 100px以上スクロールしたら
      topBtn.fadeIn(); // ボタンを表示
    } else {
      topBtn.fadeOut(); // それ以外は非表示
    }
  });

  // クリックしたら上に戻る（既存の処理）
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});