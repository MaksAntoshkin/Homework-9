let productCountEl = document.querySelector(".circle");
let addToCartBtns = document.querySelectorAll(".buy");

addToCartBtns.forEach((item) => 
    item.addEventListener("click", function () {
        let prevProductCount = +productCountEl.textContent;
        productCountEl.textContent = prevProductCount + 1;
    })
);

// for (let i=0; i<addToCartBtns.length; i++) {
//     addToCartBtns[i].addEventListener("click", function () {
//         let prevProductCount = +productCountEl.textContent;
//         productCountEl.textContent = prevProductCount + 1;
//     })
// }

let modal = document.querySelector(".modal")
let moreDetailsBtns = document.querySelectorAll(".more-det")
let closeBtn = document.querySelector(".btn_close")

moreDetailsBtns.forEach((item) =>
item.addEventListener("click", openModal));

closeBtn.addEventListener("click", closeModal);

function openModal () {
    modal.classList.add("show")
    modal.classList.remove("hide")
}

function closeModal () {
    modal.classList.add("hide")
    modal.classList.remove("show")
}

function showModalByScroll() {
    if (window.scrollY >= document.body.scrollHeight / 2) {
        openModal();
    }
}

window.addEventListener("scroll", showModalByScroll);

let likeBtns = document.querySelectorAll(".icon_h");
likeBtns.forEach((item) =>
    item.addEventListener("click", function () {
        // if (item.classList.contains("liked")) {
        //     item.classList.remove("liked");
        // } else {
        //     item.classList.add("liked")
        // }
        item.classList.toggle("liked")
    })
);



$(".slider").slick({
    autoplay: true,
    dots: true,
});