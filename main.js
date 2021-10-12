// const clickZone = document.querySelector("header .fa-bars");
// const headerRight = document.querySelector("header .hamburger-menu");
// const buttonX = document.querySelector("header .close");

// clickZone.addEventListener("click", function () {
//     headerRight.style.display = "block";
// });

// buttonX.addEventListener("click", function () {
//     headerRight.style.display = "none";
// });


const openButton = document.querySelector("header .header-right > a");
const closeButton = document.querySelector("header .close");
const showIt = document.querySelector("header .hamburger-menu");

openButton.addEventListener("click", function () {
    showIt.classList.toggle("active");
});
closeButton.addEventListener("click", function () {
    showIt.classList.toggle("active");
});
