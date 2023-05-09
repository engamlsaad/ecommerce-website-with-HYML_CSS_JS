let menu = document.querySelector(".menu");
let nav = document.querySelector(".navbar-links");

menu.addEventListener("click", () => {
    menu.classList.toggle("change");
    nav.classList.toggle("switch");
});

let cart = document.getElementById("car");

cart.onclick = function () {
    window.location.href = "cart.html";
}