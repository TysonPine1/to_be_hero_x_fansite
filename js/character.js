document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  if (!modal) return;            // run only on the character page

  const title = document.getElementById('modal-title');
  const desc  = document.getElementById('modal-description');
  const close = document.querySelector('.close-btn');

  document.querySelectorAll('.hero-card').forEach(card => {
    card.onclick = () => {
      title.innerText = card.querySelector('.hero-name').innerText;
      desc.innerText  = `More info coming soon.`;
      modal.style.display = 'flex';
    };
  });

  close?.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
});

// const toggle = document.getElementById('modeToggle');
//     const setMode = (dark) => {
//       document.body.classList.toggle('dark', dark);
//       localStorage.setItem('darkMode', dark);
//       toggle.textContent = dark ? '☀️ Toggle Light Mode' : '🌙 Toggle Dark Mode';
//     };
//     setMode(localStorage.getItem('darkMode') === 'true');
//     toggle.addEventListener('click', () => setMode(!document.body.classList.contains('dark')));

// //Modal 

// const modal = document.getElementById("modal");
// const modalTitle = document.getElementById("modal-title");
// const modalDesc = document.getElementById("modal-description");
// const closeBtn = document.querySelector(".close-btn");

// document.querySelectorAll(".hero-card").forEach(card => {
//   card.addEventListener("click", () => {
//     const name = card.querySelector(".hero-name").innerText;
//     const number = card.querySelector(".rank").innerText;
//     modalTitle.innerText = name;
//     modalDesc.innerText = `This is character No.${number}. More information will be added here.`;
//     modal.style.display = "flex";
//   });
// });

// closeBtn.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// window.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// });

// // Menu overlay
// const menuBtn = document.getElementById('menuButton');
//   const menuOverlay = document.getElementById('menuOverlay');

//     menuBtn.addEventListener('click', () => {
//     menuOverlay.classList.toggle('show');
//     menuBtn.classList.toggle('active');
//   });