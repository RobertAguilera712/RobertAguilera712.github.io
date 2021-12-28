const elements = document.querySelectorAll(".fade")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("normal", entry.isIntersecting);
    });
}, {
    threshold: 0.2
}
);

elements.forEach(element => {
    observer.observe(element)
})