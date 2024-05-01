// const colors = ["green", "blue", "red", "rgba(133,122,200)", "#f15025"]

// const btn = document.getElementById("btn");
// const color = document.getelemrntByClassName("color");
// btn.addEventListener('click', function () {
//     const randomNumber = getRandomnumber();
//     document.body.style.backgroundColor = colors[randomNumber];


// })

// function getRandomnumber() {
//     return Math.random() * colors.length;
// }

const colors = ["green", "blue", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");

btn.addEventListener('click', function () {
    const color = getRandomNumber();
    document.body.style.backgroundColor = colors[color];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}


