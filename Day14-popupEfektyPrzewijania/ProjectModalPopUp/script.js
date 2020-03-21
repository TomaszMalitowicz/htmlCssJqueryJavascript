//Wersja JQuery
// Kliknięcie w kup teraz
// $('.article button').on('click', function () {
//     $('.modal-wrap').addClass('active');
//     $('article').addClass('blur');
// })

// // Kliknięcie w zamykający x
// $('span.hide').on('click', function () {
//     $('.modal-wrap').removeClass('active');
//     ('.article').removeClass('blur');
// })

//Wersja JQuery skrócona
// $('.article button, span.hide').on('click', function () {
//     $('.modal-wrap').toggleClass('active');
//     $('.article').toggleClass('blur');
// })


// czysty JS
const btnModal = document.querySelector('.article button');
btnModal.addEventListener('click', function () {
    document.querySelector('.modal-wrap').classList.add('active');
    document.querySelector('.article').classList.add('blur');
})


const spanX = document.querySelector('span.hide');
spanX.addEventListener("click", function () {
    document.querySelector('.modal-wrap').classList.remove('active');
    document.querySelector('.article').classList.remove('blur');

})