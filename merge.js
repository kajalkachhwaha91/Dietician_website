// Menu toggle functionality
document.querySelector('.menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
});


function toggleAccordion(element) {
    const parent = element.parentElement;
    const isActive = parent.classList.contains('active');
    document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));

    if (!isActive) {
      parent.classList.add('active');
    }
}
// animation
// Simplified JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animation");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  elements.forEach((el) => observer.observe(el));
});