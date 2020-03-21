/* czysty JS */

const arrow = document.querySelector(".arrow");
const menu = document.querySelector("nav");

arrow.addEventListener("click", function () {
    arrow.classList.toggle("on");
    menu.classList.toggle("on");

})