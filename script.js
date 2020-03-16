const backChange = setInterval(colorChange, 4000);

function handleClick() {
    $('main').on('click', '.click1', function(event) {
        $('.mainpane').addClass('bg2').removeClass('bg1');
        clearInterval(backChange);
        $('.colorlayer').addClass('hidden');
    })
}

$(document).ready(function () {
    $('#logo').fadeIn(3000).removeClass('hidden');
});

function colorChange() {
    console.log('change');
    $('.colorlayer').toggleClass('hidden');
}

$(handleClick);