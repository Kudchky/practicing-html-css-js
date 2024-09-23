let brand = "Audi";
let speed = 100;
let stock = true;
let models = ["Sport", "Urban", "Truck"];

let box = document.getElementById("box");

let htmlContent = "";

models.forEach(el => {
    htmlContent += `<div>${el}</div>`;
})

box.innerHTML = htmlContent;


