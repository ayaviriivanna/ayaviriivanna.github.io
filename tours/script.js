$(document).ready(function() {
    // Efecto de aparición suave para las tarjetas
    $('.destination-card').each(function(index) {
        $(this).css('opacity', '0');
        $(this).delay(200 * index).animate({
            opacity: 1,
            top: 0
        }, 800);
    });

    // Efecto hover suave para badges
    $('.destination-badge').hover(
        function() {
            $(this).stop().animate({
                backgroundColor: '#081450'
            }, 300);
        },
        function() {
            $(this).stop().animate({
                backgroundColor: '#50dac4'
            }, 300);
        }
    );

    // Efecto de scroll suave para los enlaces
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top - 80
        }, 800);
    });

    // Efecto de contador para las reseñas
    $('.reviews').each(function() {
        var $this = $(this);
        var countTo = parseInt($this.text().match(/\d+/)[0]);
        
        $({ countNum: 0 }).animate({
            countNum: countTo
        }, {
            duration: 2000,
            easing: 'swing',
            step: function() {
                $this.text('(' + Math.floor(this.countNum) + ' reseñas)');
            },
            complete: function() {
                $this.text('(' + this.countNum + ' reseñas)');
            }
        });
    });

    // Efecto de parallax en el hero
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        $('.destinations-hero').css({
            'background-position': '50% ' + (scroll * 0.5) + 'px'
        });
    });

    // Animación para los botones
    $('.btn-primary, .btn-secondary').hover(
        function() {
            $(this).stop().animate({
                paddingRight: '35px',
                paddingLeft: '35px'
            }, 200);
        },
        function() {
            $(this).stop().animate({
                paddingRight: '25px',
                paddingLeft: '25px'
            }, 200);
        }
    );

    // Efecto de resaltado para características
    $('.features-list li').hover(
        function() {
            $(this).find('i').stop().animate({
                fontSize: '1.3em'
            }, 200);
            $(this).css('color', '#081450');
        },
        function() {
            $(this).find('i').stop().animate({
                fontSize: '1em'
            }, 200);
            $(this).css('color', '#4a4a4a');
        }
    );
}); 