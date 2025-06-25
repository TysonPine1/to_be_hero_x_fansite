const toggle = document.getElementById('modeToggle');
    const setMode = (dark) => {
      document.body.classList.toggle('dark', dark);
      localStorage.setItem('darkMode', dark);
      toggle.textContent = dark ? '☀️ Toggle Light Mode' : '🌙 Toggle Dark Mode';
    };
    setMode(localStorage.getItem('darkMode') === 'true');
    toggle.addEventListener('click', () => setMode(!document.body.classList.contains('dark')));