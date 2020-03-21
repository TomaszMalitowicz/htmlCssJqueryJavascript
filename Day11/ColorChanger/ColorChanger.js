// const orangeDiv = document.querySelector('.orange');
// const greenDiv = document.querySelector('.green');
// const blueDiv = document.querySelector('.blue');
// const yellowDiv = document.querySelector('.yellow');
// const redDiv = document.querySelector('.red');


// function changeColor() {
//     console.log(this);
//     console.log(this.className);
//     const selectedColor = this.className;
//     document.body.className = this.className;
// }

// orangeDiv.addEventListener('click', changeColor);
// greenDiv.addEventListener('click', changeColor);
// blueDiv.addEventListener('click', changeColor);
// yellowDiv.addEventListener('click', changeColor);
// redDiv.addEventListener('click', changeColor);


const items = document.querySelectorAll('div')
items.forEach(function (item) {
    item.addEventListener('click', changeColor)
})

function changeColor() {
    console.log(this);
    console.log(this.className);
    const selectedColor = this.className;
    document.body.className = this.className;
}