document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.container');
    let currentIndex = 0;

    // Show the first section immediately
    if (containers[currentIndex]) {
        containers[currentIndex].classList.add('visible');
        currentIndex++;
    }

    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY + window.innerHeight;
        if (currentIndex < containers.length && scrolled > containers[currentIndex].offsetTop) {
            containers[currentIndex].classList.add('visible');
            currentIndex++;
        }
    });
});
