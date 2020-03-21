// JQuery
$(document).on('scroll', function () {

    $('div.info').text('obecna pozycja scrolla to: ' + $(document).scrollTop().toFixed() + 'px') // wyświetala pozycje skrola w dvie

    if ($(document).scrollTop() > 200) {
        $('div.info').addClass('active');
    } else {
        $('div.info').removeClass('active')
    }
    console.log($(document).scrollTop()); // wyświetala pozucje skrola w conosli przeglądarki
})