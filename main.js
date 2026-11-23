document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-header nav');
  if (button && nav) button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('#year').forEach((element) => element.textContent = new Date().getFullYear());
  const profile = document.querySelector('.profile');
  if (!profile) return;
  const image = profile.querySelector('img');
  const text = profile.querySelector('div');
  const resizePortrait = () => {
    image.style.height = window.innerWidth > 650 ? `${text.offsetHeight}px` : '';
  };
  resizePortrait();
  window.addEventListener('resize', resizePortrait);
});
