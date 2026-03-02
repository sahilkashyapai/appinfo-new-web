document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("#header");
    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            header.classList.add("header-minimized");
        } else {
            header.classList.remove("header-minimized");
        }

    });

});