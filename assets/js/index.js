$(document).ready(function(){
    var starCanvas = document.getElementById('stars');
    if (starCanvas.getContext){
        var ctx = starCanvas.getContext('2d'),
            starMap = [];
        for (i = 0; i < 2000; i++){
            var star = [];
            star[0] = (Math.random() + Math.random()) / 2;
            star[1] = (Math.random() + Math.random() + Math.random() + Math.random()) / 4;
            starMap.push(star);
            var red = Math.random() * 100 + 100,
                green = Math.random() * 100 + 100,
                blue = Math.random() * 100 + 100;
            ctx.fillStyle = 'rgba(' + red + ', ' + green + ', ' + blue + ', 1)';
            ctx.fillRect(star[0] * 1000, star[1] * 800, 1, 1);
        }
        for (i = 0; i < 1000; i++){
            var star = [];
            star[0] = (Math.random() + Math.random() + Math.random() + Math.random()) / 4;
            star[1] = (Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) / 5;
            starMap.push(star);
            ctx.fillStyle = '#8ab2f9';
            ctx.fillRect(star[0] * 1000, star[1] * 800, 1, 1);
        }
    }

    function closeMenu(e, $menu) {
        $menu.removeClass('open');
        setTimeout( function() {
            $menu.find('.btn-wrap a').css('visibility', 'hidden');
        }, 750);
    }

    $('.space').on('click', '#menu-open', function(e) {
        var $menu = $(e.currentTarget).closest('menu');
        $menu.toggleClass('open');
        if ($menu.hasClass('open')) {
            $menu.find('.btn-wrap a').css('visibility', 'visible');
        } else {
            setTimeout( function() {
                $menu.find('.btn-wrap a').css('visibility', 'hidden');
            }, 750);
        }
    });

    $('.space').on('click', function(e) {
        var $menu = $('menu');
        if ( $menu.hasClass('open') && $(e.target).closest('menu').length < 1 ) {
            closeMenu(e, $menu);
        }
    });

    $('.space').on('keydown', function(e) {
        var $menu = $('menu');
        if ( $menu.hasClass('open') && e.keyCode === 27 ){
            closeMenu(e, $menu);
        }
    });
});