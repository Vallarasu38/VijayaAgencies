// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('dropdown'); // Toggles the dropdown class to show/hide menu
});

// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

// Add to Cart Button Alert
const addToCartButton = document.getElementById('Button');
addToCartButton.addEventListener('click', () => {
    alert('Item added to cart!');
});
