
// Jahr im Footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Smooth Scroll für interne Links
for (const a of document.querySelectorAll('a[href^="#"]')){
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
}

// Theme Toggle (Light/Dark), persistiert in localStorage
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const LS_KEY = 'mm-theme';
  const pref = localStorage.getItem(LS_KEY);
  if (pref === 'dark') root.setAttribute('data-theme','dark');
  if (btn){
    const setIcon = () => { btn.textContent = root.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙'; };
    setIcon();
    btn.addEventListener('click', ()=>{
      const isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark){ root.removeAttribute('data-theme'); localStorage.setItem(LS_KEY,'light'); }
      else { root.setAttribute('data-theme','dark'); localStorage.setItem(LS_KEY,'dark'); }
      btn.setAttribute('aria-pressed', String(!isDark));
      setIcon();
    });
  }
})();
