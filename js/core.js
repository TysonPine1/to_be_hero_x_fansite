// dark‑mode toggle … (unchanged)

// universal menu
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menuButton');
  const ovl = document.getElementById('menuOverlay');
  if (btn && ovl) btn.addEventListener('click', () => {
    ovl.classList.toggle('show');
    btn.classList.toggle('active');
  });
});

