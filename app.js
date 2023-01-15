// function showModalByScroll() {
//     if (window.scrollY >= document.body.scrollHeight / 2) {
//         openModal();
//     }
// }

// window.addEventListener("scroll", showModalByScroll);

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