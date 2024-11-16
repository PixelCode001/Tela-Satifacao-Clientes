
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
});
1
// Interatividade do Acordeão
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});
