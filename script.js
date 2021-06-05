const buttonClick = () => {
  const menu_icon = document.querySelector('#menu-icon');
  const navbar_acitve = document.querySelector('.navbar-nav');

  menu_icon.addEventListener('click', () => {
    menu_icon.classList.toggle('fa-times')
    navbar_acitve.classList.toggle('navbar-active');
    setTimeout(() => {navbar_acitve.classList.toggle('navbar-visibility')}, 300);
    });
  }
buttonClick();