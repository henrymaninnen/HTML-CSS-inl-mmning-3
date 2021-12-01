const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", function () {
    var nav = document.querySelector("nav");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
})