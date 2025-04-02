const burgerBtn = document.getElementById('btn--burger');
const mobileMenu = document.querySelector('.mobile-menu');

burgerBtn.onclick = () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  burgerBtn.classList.toggle('is-open', isOpen);
  burgerBtn.ariaExpanded = isOpen;
};

