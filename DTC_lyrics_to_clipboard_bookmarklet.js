// DTC_lyrics_to_clipboard.js

javascript:(function(w,d){const UI_ID='dtc-copy-ui',HBC='element-hitbox-active',OSK='data-dtc-original-style',SELS=['h3.songTitle','p.contentTamil','p.contentEnglish'];if(d.getElementById(UI_ID)){if(w.dtcCleaner)w.dtcCleaner();return}function iAS(){const id='dtc-animation-styles';if(d.getElementById(id))return;const s=d.createElement('style');s.id=id;s.textContent='@keyframes dtc-glow-effect{0%{opacity:.8;box-shadow:0 0 20px 8px var(--dtc-glow-color,#fff)}100%{opacity:0;box-shadow:0 0 120px 8px var(--dtc-glow-color,#fff)}}.dtc-glow-animation{position:absolute;pointer-events:none;z-index:99999;border-radius:5px;animation:dtc-glow-effect 1s ease-out forwards}';d.head.appendChild(s)}function pGA(el){if(!el)return;const r=el.getBoundingClientRect(),g=d.createElement('div');g.className='dtc-glow-animation';const c=el.getAttribute('data-element-hitbox-color')||'rgba(255,255,255,0.8)';g.style.cssText=`left:${r.left+w.scrollX}px;top:${r.top+w.scrollY}px;width:${r.width}px;height:${r.height}px;--dtc-glow-color:${c};`;d.body.appendChild(g);setTimeout(()=>g.remove(),1000)}function rC(){const h=~~(Math.random()*360);return`hsla(${h}, 100%, 70%, 0.8)`}function aH(el,c){if(!el)return;if(!c){c=el.getAttribute('data-element-hitbox-color')||rC();el.setAttribute('data-element-hitbox-color',c)}if(!el.hasAttribute(OSK)){const s={b:el.style.border,o:el.style.outline,x:el.style.boxShadow};el.setAttribute(OSK,JSON.stringify(s))}el.style.border=`3px solid ${c}`;el.style.outline=`2px dashed ${c}`;el.style.boxShadow=`0 0 10px ${c}`;el.classList.add(HBC)}function rmH(el,k=!1){if(!el||!el.hasAttribute(OSK))return;const s=JSON.parse(el.getAttribute(OSK));el.style.border=s.b,el.style.outline=s.o,el.style.boxShadow=s.x,el.removeAttribute(OSK),k||el.removeAttribute('data-element-hitbox-color'),el.classList.remove(HBC)}function hAH(k=!1){d.querySelectorAll(`.${HBC}`).forEach(e=>rmH(e,k))}function sAIH(){SELS.forEach(sel=>aH(d.querySelector(sel)))}w.dtcHighlightElement=function(sel,show){hAH(!0),show?aH(d.querySelector(sel)):sAIH()};w.dtcC=function(sel,btn){const el=d.querySelector(sel),oT=btn.innerText;if(!el)return btn.innerText='Not Found',void setTimeout(()=>btn.innerText=oT,1e3);const ta=d.createElement('textarea');ta.value=el.innerText.replace(/\r?\n/g,'\n'),d.body.appendChild(ta),ta.select();try{d.execCommand('copy'),btn.innerText='Copied!',pGA(el)}catch(e){btn.innerText='Error'}d.body.removeChild(ta),setTimeout(()=>btn.innerText=oT,1e3)};function iC(){const e=SELS.map(s=>d.querySelector(s)).filter(el=>el);if(e.length===0)return;sAIH();const cT=e.map(el=>el.innerText.replace(/\r?\n/g,'\n').trim()).join('\n\n');if(!cT)return;const ta=d.createElement('textarea');ta.value=cT,d.body.appendChild(ta),ta.select();try{d.execCommand('copy'),e.forEach(el=>pGA(el))}catch(err){console.error('DTC Bookmarklet: Failed to auto-copy text.',err)}d.body.removeChild(ta)}function cU(){const ui=d.createElement('div');ui.id=UI_ID,ui.style.cssText='position:fixed;top:20px;right:20px;z-index:999999;background:rgba(0,0,0,0.9);color:#fff;padding:15px;border-radius:8px;font-family:sans-serif;box-shadow:0 4px 10px rgba(0,0,0,0.3);max-width:220px;';const t=d.createElement('b');t.style.cssText='font-size:16px;display:block;margin-bottom:5px;',t.textContent='Sections Copied!',ui.appendChild(t);SELS.forEach(s=>{const b=d.createElement('button');b.style.cssText='display:block;width:100%;background:#333;color:#fff;border:1px solid #555;padding:8px;margin:5px 0;border-radius:4px;cursor:pointer;text-align:left;',b.textContent=s,b.addEventListener('mouseover',()=>{b.style.background='#444',w.dtcHighlightElement(s,!0);const el=d.querySelector(s);if(el)el.scrollIntoView({behavior:'smooth',block:'center'})}),b.addEventListener('mouseout',()=>{b.style.background='#333',w.dtcHighlightElement(null,!1)}),b.addEventListener('click',()=>{w.dtcC(s,b)}),ui.appendChild(b)});const f=d.createElement('div');f.style.cssText='font-size:11px;color:#999;margin-top:8px;text-align:center;',f.textContent='Press Esc to close',ui.appendChild(f),d.body.appendChild(ui);return ui}function cl(){hAH();const ui=d.getElementById(UI_ID);if(ui)ui.remove();d.removeEventListener('keydown',eH);const s=d.getElementById('dtc-animation-styles');if(s)s.remove();delete w.dtcC,delete w.dtcCleaner,delete w.dtcHighlightElement}const eH=e=>{if(e.key==='Escape'){cl()}};iAS();iC();cU();sAIH();d.addEventListener('keydown',eH);w.dtcCleaner=cl;})(window,document);

// =================================================================================
// ONE-LINE BOOKMARKLET (above code snippet)
// To use: Copy the entire line of code below, then create a new bookmark in your
// browser. Paste the code into the URL/address field
// =================================================================================
// MULTI-LINE (for development and readability)
// This is the more readable & editable version of the script above.
// =================================================================================

(function(window, document) {
    const UI_ID = 'dtc-copy-ui';
    const HITBOX_CLASS = 'element-hitbox-active';
    const ORIGINAL_STYLE_KEY = 'data-dtc-original-style';
    const SELECTORS = ['h3.songTitle', 'p.contentTamil', 'p.contentEnglish'];

    // If the UI exists, remove it and clean up to allow toggling.
    if (document.getElementById(UI_ID)) {
        if (window.dtcCleaner) window.dtcCleaner();
        return;
    }

    // --- Animation Functions ---
    function injectAnimationStyles() {
        const styleId = 'dtc-animation-styles';
        if (document.getElementById(styleId)) return;
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = '@keyframes dtc-glow-effect{0%{opacity:.8;box-shadow:0 0 20px 8px var(--dtc-glow-color,#fff)}100%{opacity:0;box-shadow:0 0 120px 8px var(--dtc-glow-color,#fff)}}.dtc-glow-animation{position:absolute;pointer-events:none;z-index:99999;border-radius:5px;animation:dtc-glow-effect 1s ease-out forwards}';
        document.head.appendChild(style);
    }

    function playGlowAnimation(element) {
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const glow = document.createElement('div');
        glow.className = 'dtc-glow-animation';
        const glowColor = element.getAttribute('data-element-hitbox-color') || 'rgba(255,255,255,0.8)';
        glow.style.cssText = `left:${rect.left + window.scrollX}px;top:${rect.top + window.scrollY}px;width:${rect.width}px;height:${rect.height}px;--dtc-glow-color:${glowColor};`;
        document.body.appendChild(glow);
        setTimeout(() => glow.remove(), 1000);
    }

    // --- Style and Hitbox Functions ---
    function getRandomColor() {
        const hue = ~~(Math.random() * 360);
        return `hsla(${hue}, 100%, 70%, 0.8)`;
    }

    function applyHitbox(el, color) {
        if (!el) return;
        if (!color) {
            color = el.getAttribute('data-element-hitbox-color') || getRandomColor();
            el.setAttribute('data-element-hitbox-color', color);
        }
        if (!el.hasAttribute(ORIGINAL_STYLE_KEY)) {
            const style = { border: el.style.border, outline: el.style.outline, boxShadow: el.style.boxShadow };
            el.setAttribute(ORIGINAL_STYLE_KEY, JSON.stringify(style));
        }
        el.style.border = `3px solid ${color}`;
        el.style.outline = `2px dashed ${color}`;
        el.style.boxShadow = `0 0 10px ${color}`;
        el.classList.add(HITBOX_CLASS);
    }

    function removeHitbox(el, keepColor = false) {
        if (!el || !el.hasAttribute(ORIGINAL_STYLE_KEY)) return;
        const style = JSON.parse(el.getAttribute(ORIGINAL_STYLE_KEY));
        el.style.border = style.border;
        el.style.outline = style.outline;
        el.style.boxShadow = style.boxShadow;
        el.removeAttribute(ORIGINAL_STYLE_KEY);
        if (!keepColor) {
            el.removeAttribute('data-element-hitbox-color');
        }
        el.classList.remove(HITBOX_CLASS);
    }

    function hideAllHitboxes(keepColor = false) {
        document.querySelectorAll(`.${HITBOX_CLASS}`).forEach(el => removeHitbox(el, keepColor));
    }

    function showAllInitialHitboxes() {
        SELECTORS.forEach(sel => applyHitbox(document.querySelector(sel)));
    }

    // --- Global Functions for UI Interaction ---
    window.dtcHighlightElement = function(selector, show) {
        hideAllHitboxes(true); // Keep color data, but remove styles
        if (show) {
            applyHitbox(document.querySelector(selector)); // This will re-use the stored color
        } else {
            showAllInitialHitboxes(); // Restore the initial set
        }
    };

    window.dtcCopy = function(selector, button) {
        const element = document.querySelector(selector);
        const originalButtonText = button.innerText;
        if (!element) {
            button.innerText = 'Not Found';
            setTimeout(() => { button.innerText = originalButtonText; }, 1000);
            return;
        }
        const tempCopyArea = document.createElement('textarea');
        tempCopyArea.value = element.innerText.replace(/\r?\n/g, '\n');
        document.body.appendChild(tempCopyArea);
        tempCopyArea.select();
        try {
            document.execCommand('copy');
            button.innerText = 'Copied!';
            playGlowAnimation(element);
        } catch (err) {
            button.innerText = 'Error!';
        }
        document.body.removeChild(tempCopyArea);
        setTimeout(() => { button.innerText = originalButtonText; }, 1000);
    };

    // --- Initial Setup: Auto-copy all sections ---
    function initialCopy() {
        const elementsToCopy = SELECTORS.map(s => document.querySelector(s)).filter(el => el);
        if (elementsToCopy.length === 0) return;

        const combinedText = elementsToCopy
            .map(el => el.innerText.replace(/\r?\n/g, '\n').trim())
            .join('\n\n');

        if (!combinedText) return;
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = combinedText;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        try {
            document.execCommand('copy');
            elementsToCopy.forEach(el => playGlowAnimation(el));
        } catch (err) {
            console.error('DTC Bookmarklet: Failed to auto-copy text.', err);
        }
        document.body.removeChild(tempTextarea);
    }
    // ...existing code...

    // --- Cleanup Logic ---
    function cleanup() {
        hideAllHitboxes();
        const ui = document.getElementById(UI_ID);
        if (ui) ui.remove();
        document.removeEventListener('keydown', escapeHandler);
        const style = document.getElementById('dtc-animation-styles');
        if(style) style.remove();
        delete window.dtcCopy;
        delete window.dtcCleaner;
        delete window.dtcHighlightElement;
    }

    const escapeHandler = (event) => {
        if (event.key === 'Escape') {
            cleanup();
        }
    };

    // --- Main Execution ---
    injectAnimationStyles();
    initialCopy();
    createUI();
    showAllInitialHitboxes();
    document.addEventListener('keydown', escapeHandler);
    window.dtcCleaner = cleanup;

})(window, document);
