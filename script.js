console.log("Cześć!");

let section__buttonStyle = document.querySelector(".section__buttonStyle");
let container = document.querySelector(".container");


section__buttonStyle.addEventListener("click", () => {
    container.classList.toggle("container__background");
    
});

console.log(przycisk);