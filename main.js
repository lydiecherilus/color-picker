
let colors = ["35%", "40%", "45%", "50%", "55%", "60%", "65%", "70%", "75%"];
let body = document.querySelector(".container");
let button = document.querySelector(".button");
let input = window.prompt("Enter a number to see your color");

document.write("You enter " + input + ", click the button to discover your color.")
document.write(" Continue to click to see similar colors you might like.")
document.write(" Refresh the page to enter a new number.")

const changeColor = function() {
        let randomSaturation = Math.floor(Math.random() * colors.length);
        let randomLightness = Math.floor(Math.random() * colors.length);
        let choosenColor = 'HSL(' + input + ',' + colors[randomSaturation] + ',' + colors[randomLightness] + ')';
        console.log(choosenColor)
    body.style.backgroundColor = choosenColor;
};

button.addEventListener("click", changeColor);