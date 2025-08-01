// Single line bookmarklet:
javascript:(function(w,d){const I='dtc-inspector-ui',H='dtc-hitbox-active',S='data-dtc-style',D='data-dtc-id',C='data-dtc-color',B='dtc-active-btn',SB='dtc-search-bar',AC='dtc-btn-copied';if(d.getElementById(I)){w.dtcInspectorCleaner&&w.dtcInspectorCleaner();return}let E=[];const eH=e=>{if(e.key==='Escape'){cl();return}if(e.key==='Enter'){e.preventDefault();const ui=d.getElementById(I);const vB=Array.from(d.querySelectorAll(%60#${I} button%60)).filter(b=>b.style.display!=='none');if(vB.length===0)return;const c=vB.map(b=>E[b.getAttribute(D)]?.innerText).filter(txt=>txt&&txt.trim()!=='').join('\n\n');if(c){navigator.clipboard.writeText(c).then(()=>{ui.style.transition='box-shadow .1s ease-in-out';ui.style.boxShadow='0 0 0 3px #a6e22e';setTimeout(()=>ui.style.boxShadow='0 5px 15px rgba(0,0,0,0.5)',400);vB.forEach(b=>{const el=E[b.getAttribute(D)];if(el)pGA(el);b.classList.add(AC);setTimeout(()=>b.classList.remove(AC),500)})})}}};const cAA=(el,btn)=>{if(!el)return;const txt=el.innerText;if(!txt.trim())return;navigator.clipboard.writeText(txt).then(()=>{pGA(el);if(btn){btn.classList.add(AC);setTimeout(()=>btn.classList.remove(AC),500)}}).catch(err=>console.error('DTC: Copy failed',err))};const pM=e=>{const t=e.target;if(t.closest('#'+I)||!t.hasAttribute(D))return;e.preventDefault();e.stopPropagation();const btn=d.querySelector(%60#${I} button[${D}='${t.getAttribute(D)}']%60);cAA(t,btn);return!1};const hM=e=>{const t=e.target;if(!t||t.closest('#'+I))return;const sb=d.getElementById(SB);if(t.hasAttribute(D)&&sb){let txt=t.tagName.toLowerCase();if(t.id)txt+=%60#${t.id}%60;if(t.className&&typeof t.className==='string'){const cl=t.className.trim().split(' ').filter(Boolean).join('.');if(cl)txt+=%60.${cl}%60}if(sb.value!==txt){sb.value=txt;sb.dispatchEvent(new Event('input',{bubbles:!0}))}}if(!t.hasAttribute(D))return;hAH();const i=t.getAttribute(D),c=t.getAttribute(C);aH(t,c);const b=d.querySelector(%60#${I} button[${D}='${i}']%60);if(b){b.classList.add(B);if(b.style.display!=='none'){b.scrollIntoView({behavior:'smooth',block:'nearest'})}}};const sF=e=>{const v=e.target.value.toLowerCase();d.querySelectorAll(%60#${I} button%60).forEach(b=>{const t=b.title.toLowerCase();b.style.display=t.includes(v)?'block':'none'})};function cl(){const u=d.getElementById(I);if(u)u.remove();const s=d.getElementById('dtc-inspector-styles');if(s)s.remove();d.body.removeEventListener('mouseover',hM,!0);d.body.removeEventListener('click',pM,!0);d.removeEventListener('keydown',eH,!0);E.forEach(e=>{rmH(e);e.removeAttribute(D);e.removeAttribute(C)});delete w.dtcInspectorCleaner}function iAS(){const id='dtc-inspector-styles';if(d.getElementById(id))return;const s=d.createElement('style');s.id=id;s.textContent=%60@keyframes dtc-glow-effect{0%{opacity:.8}100%{opacity:0;box-shadow:0 0 40px 15px var(--dtc-glow-color,#fff)}}.dtc-glow-animation{position:absolute;pointer-events:none;z-index:999999;border-radius:5px;animation:dtc-glow-effect .8s ease-out forwards}@keyframes dtc-btn-flash{0%,50%{background-color:#a6e22e!important;color:#000!important}100%{background-color:#333!important;color:#fff!important}}.${AC}{animation:dtc-btn-flash .5s ease-out}#${I} button:hover,#${I} .${B}{background-color:#5a5a5a!important;border-left:3px solid var(--dtc-btn-color, #fff)!important;}#${SB}{width:100%;box-sizing:border-box;padding:8px;margin-bottom:4px;background:#2a2a2a;border:1px solid #555;color:#fff;border-radius:4px;font:13px sans-serif;}%60;d.head.appendChild(s)}function pGA(el){if(!el)return;const r=el.getBoundingClientRect(),g=d.createElement('div');g.className='dtc-glow-animation';const c=el.getAttribute(C)||'rgba(255,255,255,0.8)';g.style.cssText=%60left:${r.left+w.scrollX}px;top:${r.top+w.scrollY}px;width:${r.width}px;height:${r.height}px;--dtc-glow-color:${c};box-shadow:0 0 20px 8px ${c};%60;d.body.appendChild(g);setTimeout(()=>g.remove(),800)}function rC(){return%60hsla(${~~(Math.random()*360)},100%,70%,0.8)%60}function aH(el,c){if(!el)return;if(!el.hasAttribute(S)){const s={b:el.style.border,o:el.style.outline,x:el.style.boxShadow};el.setAttribute(S,JSON.stringify(s))}el.style.border=%602px solid ${c}%60;el.style.outline=%601px dashed #fff%60;el.style.boxShadow=%600 0 8px ${c}%60;el.classList.add(H)}function rmH(el){if(!el||!el.hasAttribute(S))return;const s=JSON.parse(el.getAttribute(S));el.style.border=s.b;el.style.outline=s.o;el.style.boxShadow=s.x;el.removeAttribute(S);el.classList.remove(H)}function hAH(){d.querySelectorAll('.'+H).forEach(e=>rmH(e));d.querySelectorAll('#'+I+' .'+B).forEach(b=>b.classList.remove(B))}function cSUI(){const ui=d.createElement('div');ui.id=I;ui.style.cssText='position:fixed;top:10px;right:10px;z-index:1000000;background:rgba(25,25,25,0.85);color:#fff;padding:10px;border-radius:8px;font:12px sans-serif;box-shadow:0 5px 15px rgba(0,0,0,0.5);backdrop-filter:blur(5px);max-width:280px;max-height:calc(100vh - 20px);overflow-y:auto;';const t=d.createElement('div');t.style.cssText='font-size:14px;font-weight:bold;margin-bottom:10px;padding-bottom:5px;border-bottom:1px solid #555;';t.innerHTML='Element Inspector <span style="font-size:10px;font-weight:normal;color:#ccc;">(Esc to close)</span>';ui.appendChild(t);const sb=d.createElement('input');sb.id=SB;sb.type='text';sb.placeholder='Search or hover on elements...';sb.addEventListener('input',sF);ui.appendChild(sb);const n=d.createElement('div');n.style.cssText='font-size:12px;color:#ccc;margin-top:-2px;margin-bottom:8px;text-align:right;';n.innerHTML='copy filtered: <b style="color:#a6e22e;letter-spacing:1px;">enter</b>';ui.appendChild(n);const els=Array.from(d.querySelectorAll('body *')).filter(e=>(e.offsetWidth>0||e.offsetHeight>0)&&w.getComputedStyle(e).visibility!=='hidden');E=els;els.forEach((el,i)=>{const c=rC();el.setAttribute(D,i);el.setAttribute(C,c);const b=d.createElement('button');b.setAttribute(D,i);b.style.cssText=%60display:block;width:100%;background:#333;color:#fff;border:0;border-left:3px solid transparent;padding:5px 8px;margin:2px 0;border-radius:3px;cursor:pointer;text-align:left;font:11px/1.4 monospace;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:background .2s;--dtc-btn-color:${c};%60;let txt=el.tagName.toLowerCase();if(el.id)txt+=%60<span style="color:#66d9ef;">#${el.id}</span>%60;if(el.className&&typeof el.className=='string')txt+=%60<span style="color:#a6e22e;">.${el.className.trim().split(' ').join('.')}</span>%60;b.innerHTML=txt;b.title=el.tagName.toLowerCase()+(el.id?%60#${el.id}%60:'')+(el.className&&typeof el.className=='string'?%60.${el.className.trim().split(' ').join('.')}%60:'');b.addEventListener('mouseover',()=>{hAH();aH(el,c);b.classList.add(B);el.scrollIntoView({behavior:'smooth',block:'center'})});b.addEventListener('click',()=>{cAA(el,b)});ui.appendChild(b)});d.body.appendChild(ui)}iAS();cSUI();d.body.addEventListener('mouseover',hM,!0);d.body.addEventListener('click',pM,!0);d.addEventListener('keydown',eH,!0);w.dtcInspectorCleaner=cl;})(window,document)

// Multi-line bookmarklet:
javascript:(function(w, d) {
  // Constant string references for UI elements, styles, and data attributes.
  const I = 'dtc-inspector-ui',
        H = 'dtc-hitbox-active',
        S = 'data-dtc-style',
        D = 'data-dtc-id',
        C = 'data-dtc-color',
        B = 'dtc-active-btn',
        SB = 'dtc-search-bar',
        AC = 'dtc-btn-copied';

  // If the UI is already active, clean it up and exit.
  if (d.getElementById(I)) {
    w.dtcInspectorCleaner && w.dtcInspectorCleaner();
    return;
  }

  // E stores the elements that have been "inspected" (clicked).
  let E = [];
  // G keeps track of the element currently being hovered.
  let G = null;

  // A color palette for highlighting selected elements.
  const P = [
    '#a6e22e', '#f92672', '#fd971f', '#66d9ef', '#ae81ff',
    '#e6db74', '#c5d5e5'
  ];

  // Event handler for keyboard shortcuts.
  const eH = e => {
    // Pressing 'Escape' closes the inspector.
    if (e.key === 'Escape') { cl(); return; }
    // Pressing 'Enter' copies the text content of all selected elements.
    if (e.key === 'Enter') {
      e.preventDefault();
      const ui = d.getElementById(I);
      // Get all visible buttons in the UI.
      const vB = Array.from(d.querySelectorAll(`#${I} button`))
                      .filter(b => b.style.display !== 'none');
      if (vB.length === 0) return;

      // Concatenate the text content of all visible elements.
      const c = vB.map(b => E[b.getAttribute(D)]?.innerText)
                  .filter(txt => txt && txt.trim() !== '')
                  .join('\n\n');

      // If there's content to copy, write it to the clipboard.
      if (c) {
        navigator.clipboard.writeText(c).then(() => {
          // Add a temporary glow effect to the UI to show success.
          ui.style.transition = 'box-shadow .1s ease-in-out';
          ui.style.boxShadow = '0 0 0 3px #a6e22e';
          setTimeout(() => ui.style.boxShadow = '0 5px 15px rgba(0,0,0,0.5)', 400);

          // Give a visual pulse to each copied element and its button.
          vB.forEach(b => {
            const el = E[b.getAttribute(D)];
            if (el) pGA(el);
            b.classList.add(AC);
            setTimeout(() => b.classList.remove(AC), 500);
          });
        });
      }
    }
  };

  // Copies the innerText of a single element to the clipboard.
  const cAA = (el, btn) => {
    if (!el) return;
    const txt = el.innerText;
    if (!txt.trim()) return;
    navigator.clipboard.writeText(txt).then(() => {
      // Provide visual feedback for the element and button.
      pGA(el);
      if (btn) {
        btn.classList.add(AC);
        setTimeout(() => btn.classList.remove(AC), 500);
      }
    }).catch(err => console.error('DTC: Copy failed', err));
  };

  // Provides a brief visual "pulse" on an element.
  const pGA = el => {
    if (!el) return;
    const originalShadow = el.style.boxShadow;
    const originalTransition = el.style.transition;
    el.style.transition = 'box-shadow .1s ease-in-out';
    el.style.boxShadow = `0 0 10px 3px ${el.getAttribute(C)}`;
    setTimeout(() => {
      el.style.boxShadow = originalShadow;
      setTimeout(() => el.style.transition = originalTransition, 100);
    }, 500);
  };

  // Handles element cleanup on mouseout or inspector closure.
  const clr = () => {
    if (G) {
      G.style.cssText = G.getAttribute(S);
      G.removeAttribute(S);
      G.classList.remove(H);
      G = null;
    }
  };

  // Main cleanup function to remove all UI and event listeners.
  const cl = () => {
    clr();
    d.body.removeEventListener('mouseover', hM, true);
    d.body.removeEventListener('click', pM, true);
    d.removeEventListener('keydown', eH, true);
    const ui = d.getElementById(I);
    ui && ui.remove();
    w.dtcInspectorCleaner = null;
  };

  // Handles mouseover events to highlight elements.
  const hM = e => {
    e.stopPropagation();
    clr();
    const el = e.target;
    if (el && !el.classList.contains(I) && !el.closest(`#${I}`)) {
      G = el;
      // Store the original style to restore it later.
      G.setAttribute(S, G.style.cssText);
      G.classList.add(H);
      // Highlight with a subtle border.
      G.style.border = '1px dashed #fd971f';
      G.style.outline = '1px solid #fd971f';
      G.style.cursor = 'crosshair';
    }
  };

  // Handles clicks to select an element and add it to the UI.
  const pM = e => {
    e.preventDefault();
    e.stopPropagation();
    const el = e.target;
    // Don't select the inspector UI itself.
    if (!el || el.closest(`#${I}`)) return;
    clr();

    // Assign a unique ID and color.
    const id = E.length;
    const color = P[id % P.length];

    // Store the element and its color.
    el.setAttribute(D, id);
    el.setAttribute(C, color);
    E[id] = el;

    // Create a new button in the UI for this element.
    const btn = d.createElement('button');
    btn.setAttribute(D, id);
    btn.classList.add(B);
    btn.style.backgroundColor = color;
    btn.innerText = el.innerText.trim() || el.tagName;
    btn.title = `Copy text from <${el.tagName}>`;

    // Add click listener to copy the element's text.
    btn.addEventListener('click', () => cAA(el, btn));
    d.getElementById(I).appendChild(btn);
  };

  // Sets up the search bar functionality to filter buttons.
  const iAS = () => {
    const sB = d.getElementById(SB);
    if (!sB) return;
    sB.addEventListener('input', e => {
      const q = e.target.value.toLowerCase();
      const buttons = d.querySelectorAll(`#${I} button:not(#${SB} + button)`);
      buttons.forEach(btn => {
        const text = btn.innerText.toLowerCase();
        if (text.includes(q)) {
          btn.style.display = 'block';
        } else {
          btn.style.display = 'none';
        }
      });
    });
  };

  // Creates the main inspector UI and injects it into the page.
  const cSUI = () => {
    const ui = d.createElement('div');
    ui.id = I;
    // Inline styles for the UI.
    ui.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      width: 300px;
      max-height: calc(100vh - 20px);
      background: #272822;
      color: #f8f8f2;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.5);
      z-index: 999999;
      font-family: 'Courier New', Courier, monospace;
      font-size: 14px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
    `;

    // Add a search bar.
    const searchInput = d.createElement('input');
    searchInput.id = SB;
    searchInput.type = 'text';
    searchInput.placeholder = 'Search selected elements...';
    searchInput.style.cssText = `
      width: 100%;
      box-sizing: border-box;
      padding: 8px 12px;
      border: none;
      border-radius: 5px;
      background: #3e4034;
      color: #f8f8f2;
      font-family: inherit;
    `;
    ui.appendChild(searchInput);

    d.body.appendChild(ui);
  };

  // Initialize the UI and event listeners.
  iAS();
  cSUI();
  d.body.addEventListener('mouseover', hM, true);
  d.body.addEventListener('click', pM, true);
  d.addEventListener('keydown', eH, true);
  // Expose a cleaner function to the window object for easy removal.
  w.dtcInspectorCleaner = cl;

})(window, document);
