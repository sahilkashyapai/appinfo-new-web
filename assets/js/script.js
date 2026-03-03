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


document.addEventListener("DOMContentLoaded", function () {

    const section = document.querySelector("#statsSection");
    const counters = document.querySelectorAll("#statsSection .stat-number");
    let started = false;

    function animateCounter(counter) {
        const target = parseFloat(counter.getAttribute("data-target"));
        const prefix = counter.getAttribute("data-prefix") || "";
        const suffix = counter.getAttribute("data-suffix") || "";

        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentValue = Math.floor(progress * target);

            counter.innerText =
                prefix + currentValue.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.innerText =
                    prefix + target.toLocaleString() + suffix;
            }
        }

        requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;

                counters.forEach(counter => {
                    animateCounter(counter);
                });
            }
        });

    }, {
        threshold: 0.4
    });

    observer.observe(section);
});