// let mainImg = document.querySelector(".main-img");
// let smallImg = document.getElementsByClassName("small");

// smallImg[0].onclick = function () {
//     mainImg.src = smallImg[0].src;
// }
// smallImg[1].onclick = function () {
//     mainImg.src = smallImg[1].src;
// }
// smallImg[2].onclick = function () {
//     mainImg.src = smallImg[2].src;
// }
// smallImg[3].onclick = function () {
//     mainImg.src = smallImg[3].src;
// }
let mainImg = document.querySelector(".main-img");
let smallImg = document.getElementsByClassName("small");
for (let i = 0; i < 4; i++) {
    smallImg[i].onclick = function () {
        mainImg.src = smallImg[i].src;
    }
}