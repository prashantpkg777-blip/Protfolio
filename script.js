
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