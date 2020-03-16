const images=new Array('./images/mainback1.png', './images/mainback2.jpg', './images/mainback5.png', './images/mainback6.jpg');
let nextImage = 0;

function doSlides(){
    if(nextImage >= images.length) {nextimage=0;}
    $('.mainpane')
    .css('background-image','url("'+images[nextImage++]+'")')
    .fadeIn(500, function() {
        setTimeout(doSlides, 5000);
    });
}

$(doSlides);