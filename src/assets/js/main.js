$(document).ready(function () {
    // svg4everybody start ---------------------
    svg4everybody();

    // Polifill for IE objectFitImages start ---------------------
    objectFitImages();


    $('.slider-top').slick({
        dots: false,
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
      });

      $('.select').selectric();


      $('.header-block_burger').on('click', function(e){
        e.preventDefault;
        $('.menu').toggleClass('menu_active')
      })


      $('.feedback-block_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:true,
      });



      $('.slider-photogalery').slick({
        arrows:true,
        nextArrow: $('.slider-dance_children__nextArrow'),
        prevArrow: $('.slider-dance_children__prevArrow'),
      });

});