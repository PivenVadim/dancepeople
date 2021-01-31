$(document).ready(function () {
    // svg4everybody start ---------------------
    svg4everybody();

    // Polifill for IE objectFitImages start ---------------------
    objectFitImages();


    $('.slider-top').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        nextArrow: $('.slider-top_nextArrow'),
        prevArrow: $('.slider-top_prevArrow'),
        asNavFor: '.slider-top_nav',
      });


      $('.slider-top_nav').slick({
        slidesToShow: 4,
        asNavFor: '.slider-top',
        dots:false,
        centerMode: false,
        focusOnSelect: true
      });


      $('.slider-dance_children_block').slick({
        arrows:true,
        nextArrow: $('.slider-dance_children__nextArrow'),
        prevArrow: $('.slider-dance_children__prevArrow'),
        speed: 500,
        fade: true,
      });

      $('.select').selectric();


      $('.header-block_burger').on('click', function(e){
        e.preventDefault;
        $('.menu').toggleClass('menu_active')
      })

      $('.about-us_button, .popup-close').on('click', function(e){
        $('.popup-modal').toggleClass('active')
      })

      $('.feedback-block_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:true,
        arrows:true,
        nextArrow: $('.feedback-block_slider__nextArrow'),
        prevArrow: $('.feedback-block_slider__prevArrow'),
      });



      $('.slider-photogalery').slick({
        arrows:true,
        nextArrow: $('.photogalery-block__nextArrow'),
        prevArrow: $('.photogalery-block__prevArrow'),
        speed: 1000,
        fade: true,
      });

});