// JQuery
// function changeText() {
//     const wielkoscSkrola = $(document).scrollTop();
//     const wysokoscSekcji1 = $('.sekcja1').height();
//     const wysokoscSekcji2 = $('.sekcja2').height();
//     const wysokoscSekcji3 = $('.sekcja3').height();
//     const wysokoscSekcji4 = $('.sekcja4').height();

//     const odlegloscOdPoczatkuSekcji1 = $('.sekcja1').offset().top;
//     const odlegloscOdPoczatkuSekcji2 = $('.sekcja2').offset().top;
//     const odlegloscOdPoczatkuSekcji3 = $('.sekcja3').offset().top;
//     const odlegloscOdPoczatkuSekcji4 = $('.sekcja4').offset().top;

//     if (wielkoscSkrola < wysokoscSekcji1) {
//         $('div.info').text('sekcja 1')
//     } else if (wielkoscSkrola < wysokoscSekcji2 + odlegloscOdPoczatkuSekcji2) {
//         $('div.info').text('sekcja 2')
//     } else if (wielkoscSkrola < wysokoscSekcji3 + odlegloscOdPoczatkuSekcji3) {
//         $('div.info').text('sekcja 3')
//     } else {
//         $('div.info').text('sekcja 4')
//     }

// }
// $(document).on('scroll', changeText)


// Czysty JS
function changeText() {
    const wielkoscSkrola = window.scrollY;
    const wysokoscSekcji1 = document.querySelector('.sekcja1').clientHeight;
    const wysokoscSekcji2 = document.querySelector('.sekcja2').clientHeight;
    const wysokoscSekcji3 = document.querySelector('.sekcja3').clientHeight;
    const wysokoscSekcji4 = document.querySelector('.sekcja4').clientHeight;

    const odlegloscOdPoczatkuSekcji1 = document.querySelector('.sekcja1').offsetTop;
    const odlegloscOdPoczatkuSekcji2 = document.querySelector('.sekcja2').offsetTop;
    const odlegloscOdPoczatkuSekcji3 = document.querySelector('.sekcja3').offsetTop;
    const odlegloscOdPoczatkuSekcji4 = document.querySelector('.sekcja4').offsetTop;

    const txt = document.querySelector('div.info');


    if (wielkoscSkrola < wysokoscSekcji1) {
        txt.textContent = 'sekcja 1'
    } else if (wielkoscSkrola < wysokoscSekcji2 + odlegloscOdPoczatkuSekcji2) {
        txt.textContent = 'sekcja 2'
    } else if (wielkoscSkrola < wysokoscSekcji3 + odlegloscOdPoczatkuSekcji3) {
        txt.textContent = 'sekcja 3'
    } else {
        txt.textContent = 'sekcja 4'
    }
}
document.addEventListener('scroll', changeText)