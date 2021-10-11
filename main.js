const clickZone = document.querySelector("header .fa-bars");
const headerRight = document.querySelector("header .hamburger-menu");
clickZone.addEventListener("click", function () {
    headerRight.style.display = "block";
});

const buttonX = document.querySelector("header .close");
buttonX.addEventListener("click", function () {
    headerRight.style.display = "none";
});


// const clickZone = document.querySelector("header .fa-bars");
// const buttonX = document.querySelector("header .close");
// const headerRight = document.querySelector("header .hamburger-menu");

// clickZone.addEventListener("click", function () {
//     headerRight.classList.toggle("close");
//     buttonX.classList.toggle("");
// });
