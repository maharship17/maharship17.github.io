// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add 'in-view' class to elements in the viewport
function checkAnimations() {
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('in-view');
        }
    });
}

// Add scroll event listener to trigger animations
window.addEventListener('scroll', checkAnimations);

// Trigger animations on page load
window.addEventListener('load', checkAnimations);
