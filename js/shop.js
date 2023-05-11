let shop1 = document.querySelector(".shop1");

shop1.onclick = function () {
    window.location.href = "sproduct.html";
}

let menu = document.querySelector(".menu");
let nav = document.querySelector(".navbar-links");

menu.addEventListener("click", () => {
    menu.classList.toggle("change");
    nav.classList.toggle("switch");
});
