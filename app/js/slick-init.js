 /* Slick needs no get Reinitialized on window Resize after it was destroyed */
 $(window).on('load resize orientationchange', function() {
    $('.slick-carousel').each(function(){
        var $carousel = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() > 767) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }
        else{
            if (!$carousel.hasClass('slick-initialized')) {
                if($carousel.hasClass('slick-auto')) {
                    $carousel.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        mobileFirst: true,
                        arrows: false,
                        dots: true,
                        autoplay:true,
                        autoplaySpeed:5000,
                    });
                }
                else {
                    $carousel.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        mobileFirst: true,
                        arrows: false,
                        dots: true,
                    });
                }
            }
        }
    });
});