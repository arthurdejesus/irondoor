var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)

if(!isMobile){
    $('.l-header, .section__trigger, .l-footer').addClass('is-animated');

    //$(window).resize(function() {
    //    $('.product--details').height($(window).height());
    //});

    $(window).trigger('resize');

    $('.l-main').fullpage({
        verticalCentered: false,
        scrollingSpeed: 1000,
        easing: 'easeInOutCubic',
        anchors: ['introduction'],
        onLeave: function(index, nextIndex, direction) {
            $('.footer__pagination-active').text(nextIndex);

        },
        afterLoad: function(anchorLink, index){

            if ($('.section--tradition').hasClass('active')) {
                addRemoveClass();
            }

            $('.carousel').carousel();
        },

        //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
        css3:false
    });

    var timeout = null;

    function animateIt() {
        $('.section__tile-half').each(function() {
            if ( $('.section__tile-item.is-animated', this).next( '.section__tile-item' ).length) {
                $('.section__tile-item.is-animated', this).removeClass('is-animated');
                $('.section__tile-item', this).next( '.section__tile-item' ).addClass('is-animated');
            } else {
                $('.section__tile-item', this).removeClass('is-animated');
                $('.section__tile-item:first-child', this).addClass('is-animated');
            }
        });

        if ( ! $('.section--tradition').hasClass('active') ) {
            clearInterval(timeout);
        }
    }


    function addRemoveClass() {
        animateIt();
        var delay = 2500; // milliseconds
        var timeout = setInterval(function() {
            animateIt();
        }, delay);
    };


} else {
    $('.section--introduction').addClass('active');
    $("body").addClass("is-mobile");
    $('.l-header, .section__trigger, .l-footer').addClass('is-animated');
    $(window).resize(function() {
        $('.section--introduction').height($(window).height());
    });

    $(window).trigger('resize');

    $(function(){
        $(document).scroll(function(){
            if($(this).scrollTop() >= $('#content').offset().top - 50) {
                $("#content").css("background","red");
            } else {
                $("#content").css("background","orange");
            }
        });
    });


    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[data-anchor=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
}

// Global


$('.carousel').carousel();
$('.menu__trigger').click(function() {
    $(this).addClass('is-in');
    $('.menu__list').addClass('is-in');
});