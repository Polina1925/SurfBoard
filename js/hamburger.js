const hamburgerBtn = document.getElementById('hamburgerBtn');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const hamburgerBtnClose = document.getElementById('hamburgerBtnClose');

hamburgerBtn.addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementsByTagName("body")[0].style.overflow = 'hidden';
  hamburgerMenu.classList.add('menu_active');
})

hamburgerBtnClose.addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementsByTagName("body")[0].style.overflow = 'scroll';
  hamburgerMenu.classList.remove('menu_active');
})

