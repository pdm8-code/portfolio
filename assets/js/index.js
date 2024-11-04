$(document).ready(function() {

    //  탑버튼 클릭시 상단 스크롤
    $('.topBtnFix').on('click',function(){
      $('html,body').animate({scrollTop:0},500);
      return false;
      
    });

  // 스크롤 이벤트
  $(window).scroll(function(){
    $(window).on('scroll', function() {
      var visual5Top = $('.visual5').offset().top;
      var visual5Height = $('.visual5').outerHeight();
      var windowScroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var visual5Point = visual5Top + visual5Height / 3;

      if(windowScroll < 100) {
        $('.topBtnFix').hide();
      } else if (windowScroll >= 100) {
        $('.topBtnFix').show();
      }

      if(visual5Point < windowScroll + windowHeight) {
        $('.topBtnFix').hide();
      }
  });

    // 섹션 비주얼 스크롤 애니메이션
    $('section').each(function(){
      var sectionTop = $(this).offset().top;
      var sectionHeight = $(this).outerHeight();
      var windowBottom = $(window).height() + $(window).scrollTop();
      var sectionId = '#' + $(this).attr('id')

      if(windowBottom > sectionTop + sectionHeight / 3){
        $(this).addClass('active');

        // 사이드 메뉴
        $('.sideMenu a').removeClass('active');
        $('.sideMenu a[href="' + sectionId + '"]').addClass('active');
        
      } else {
        $(this).removeClass('active');
      };

      // 화면 너비 1220px 스크롤 애니메이션
      if($(window).width() < 1220) {
        if(windowBottom > sectionTop + sectionHeight / 6){
          $(this).addClass('active');        
        } else {
          $(this).removeClass('active');
        }
      };
    });
  });

  // 사이드 메뉴
  $('.sideMenu a').on('click',function(){
    $('.sideMenu a').removeClass('active');
    $(this).addClass('active');

  });

  // 사이트맵 메뉴 리스트 클릭 이벤트
  $('.siteMap .menuWrap a').on('click',function(){
    $('.siteMap').removeClass('active');
    $('.header .container.lora .mainLogo').removeClass('active');
    $('.background').removeClass('active');
  });

  // 사이트맵 메뉴바 클릭 이벤트
  $('.header .container.lora .menuBar').on('click',function(){
    $('.siteMap').addClass('active');
    $('.header .container.lora .mainLogo').addClass('active');
    $('.background').addClass('active');
  });

  // 사이트맵 닫기버튼 클릭 이벤트
  $('.siteMap .closeBtn').on('click',function(){
    $('.siteMap').removeClass('active');
    $('.header .container.lora .mainLogo').removeClass('active');
    $('.background').removeClass('active');
  });

  function toggleSiteMap() {
    if ($(window).width() >= 982) {
      $('.siteMap').removeClass('active');
      $('.header .container.lora .mainLogo').removeClass('active');
      $('.background').removeClass('active');
      $('html, body').css({'overflow': 'visible'});
    }
  }

  // 페이지 로드 시 실행
  toggleSiteMap();

  // 윈도우 리사이즈 이벤트에 따라 실행
  $(window).resize(function() {
      toggleSiteMap();


  });


  // 비주얼3 슬라이드 스와이퍼
  let swiper = new Swiper('.projectSwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    // centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // 1120px 이상
      1120: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // 870 ~ 1120px 
      870: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // 0 ~ 870px 
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

  // 비주얼4 탑버튼
  $('.topBtn').on('click',function(){
    $('html,body').animate({scrollTop:0},500);
    return false;
  });
  
}); 