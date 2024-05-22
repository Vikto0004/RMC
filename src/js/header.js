const elBtnOpenMenu = document.querySelector('.js-open-menu');
const elMenuContainer = document.querySelector('.js-menu-container');

elBtnOpenMenu.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  elMenuContainer.classList.add('is-open');
  setTimeout(() => {
    elMenuContainer.style.transform = 'translateX(0%)';
  }, 100);
});

elMenuContainer.addEventListener('click', e => {
  const elItemList = e.target.closest('.mob-menu-item');
  const elBtnClose = e.target.closest('.mob-menu-btn');
  if (!elItemList || !elBtnClose) {
    document.body.style.overflow = 'auto';
    elMenuContainer.style.transform = 'translateX(100%)';
    setTimeout(() => {
      elMenuContainer.classList.remove('is-open');
    }, 600);
  }
});
