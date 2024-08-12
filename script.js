document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.container');
    let scrollIndex = 0;

    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY + window.innerHeight;
        if (scrollIndex < containers.length && scrolled > containers[scrollIndex].offsetTop) {
            containers[scrollIndex].classList.add('visible');
            scrollIndex++;
        }
    });

    // Optionally, scroll to the first container when the page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
