$(document).ready(function(){
    var starCanvas = document.getElementById('stars');
    if (starCanvas.getContext){
        var ctx = starCanvas.getContext('2d'),
            starMap = [];
        console.log(starCanvas);
        for (i = 0; i < 2000; i++){
            var star = [];
            star[0] = (Math.random() + Math.random()) / 2;
            star[1] = (Math.random() + Math.random() + Math.random() + Math.random()) / 4;
            starMap.push(star);
            // ctx.fillStyle = '#8ab2f9';
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
        console.log(starMap);
    }
});