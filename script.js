document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    const elements = document.querySelectorAll('.content, .button');
    elements.forEach(el => observer.observe(el));
});
