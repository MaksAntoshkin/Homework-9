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

let decButtons = document.querySelectorAll(".dec_btn");
let incButtons = document.querySelectorAll(".inc_btn");
let productQuan = document.querySelectorAll(".product_quan input");

console.log(decButtons);
console.log(incButtons);
console.log(productQuan);

function Counter (incButton, decButton, inputField) {
    this.domRefs = {
        incButton,
        decButton,
        inputField,
    };

    this.toggleButtonState = function() {
        let count = this.domRefs.inputField.value;
        this.domRefs.decButton.disabled = count <= 1;
        this.domRefs.incButton.disabled = count >= 10;
    }

    this.toggleButtonState();

    this.increment = function() {
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
        this.toggleButtonState()
    }

    this.decrement = function() {
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
        this.toggleButtonState()
    }

    this.domRefs.incButton.addEventListener("click", this.increment.bind(this));
    this.domRefs.decButton.addEventListener("click", this.decrement.bind(this));
}

let counters = [];

productQuan.forEach((item, i) =>
counters[i] = new Counter(incButtons[i], decButtons[i], item)
)