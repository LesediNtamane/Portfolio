document.querySelector('.card-glow').addEventListener('mousemove', e => {
  const card = e.target.closest('.card-glow');
  const rect = card.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;
  card.style.setProperty('--mouse-x', `${offsetX}px`);
  card.style.setProperty('--mouse-y', `${offsetY}px`);
});
