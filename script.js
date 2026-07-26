
  document.getElementById('year').textContent = new Date().getFullYear();

  // Terminal typing effect
  const lines = [
    { type:'cmd', text:'whoami' },
    { type:'out', text:'Prashant Kumar — B.Tech CS student, Bihar, India' },
    { type:'cmd', text:'cat focus.txt' },
    { type:'out', text:'Building with Python, Java, C and the web.' },
    { type:'cmd', text:'git log --oneline -3' },
    { type:'out', text:'myntra-clone · jarvis-assistant · weather-app' },
    { type:'cmd', text:'./run_jarvis.sh' },
    { type:'out', text:'Booting voice assistant... systems nominal.' },
  ];

  const body = document.getElementById('termBody');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function renderStatic(){
    body.innerHTML = lines.map(l => {
      if(l.type === 'cmd') return `<div><span class="prompt">guest@prashant</span><span class="path">:~$</span> ${l.text}</div>`;
      return `<span class="out">${l.text}</span>`;
    }).join('');
  }

  async function typeLine(el, text, speed){
    for(let i=0;i<=text.length;i++){
      el.textContent = text.slice(0,i);
      await new Promise(r=>setTimeout(r, speed));
    }
  }

  async function runTerminal(){
    if(reduceMotion){ renderStatic(); return; }
    for(const l of lines){
      if(l.type === 'cmd'){
        const row = document.createElement('div');
        row.innerHTML = '<span class="prompt">guest@prashant</span><span class="path">:~$</span> ';
        const cmdSpan = document.createElement('span');
        row.appendChild(cmdSpan);
        body.appendChild(row);
        await typeLine(cmdSpan, l.text, 38);
        await new Promise(r=>setTimeout(r, 220));
      } else {
        const out = document.createElement('span');
        out.className = 'out';
        out.textContent = l.text;
        body.appendChild(out);
        await new Promise(r=>setTimeout(r, 380));
      }
    }
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    body.appendChild(cursor);
  }
  runTerminal();

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && !reduceMotion){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el=>io.observe(el));
  } else {
    revealEls.forEach(el=>el.classList.add('show'));
  }

  (function(){
  const API = 'https://countapi.mileshilliard.com/api/v1';
  const VIEW_KEY = 'your_unique_site_key_2026_views';   // change to something unique to your site
  const LIKE_KEY = 'your_unique_site_key_2026_likes';   // change to something unique to your site
  const LIKED_FLAG = 'site_liked_v1';

  const viewCountEl = document.getElementById('viewCount');
  const likeCountEl = document.getElementById('likeCount');
  const likeBtn = document.getElementById('likeBtn');

  function fmt(n){
    n = Number(n) || 0;
    if(n >= 1000) return (n/1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return String(n);
  }

  // Count this page load as a view
  fetch(`${API}/hit/${VIEW_KEY}`).then(r=>r.json()).then(d=>{
    viewCountEl.textContent = fmt(d.value);
  }).catch(()=>{ viewCountEl.textContent = '—'; });

  // Show current like total without incrementing it
  fetch(`${API}/get/${LIKE_KEY}`).then(r=>r.json()).then(d=>{
    likeCountEl.textContent = fmt(d.value);
  }).catch(()=>{ likeCountEl.textContent = '0'; });

  if(localStorage.getItem(LIKED_FLAG) === '1'){
    likeBtn.classList.add('liked');
  }

  likeBtn.addEventListener('click', ()=>{
    likeBtn.classList.add('pop');
    setTimeout(()=>likeBtn.classList.remove('pop'), 400);

    if(localStorage.getItem(LIKED_FLAG) === '1') return; // one like per visitor

    likeBtn.classList.add('liked');
    localStorage.setItem(LIKED_FLAG, '1');
    fetch(`${API}/hit/${LIKE_KEY}`).then(r=>r.json()).then(d=>{
      likeCountEl.textContent = fmt(d.value);
    }).catch(()=>{});
  });
})();