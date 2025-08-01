// Single line bookmarklet:
javascript:(function(w,d){const I='dtc-inspector-ui',H='dtc-hitbox-active',S='data-dtc-style',D='data-dtc-id',C='data-dtc-color',B='dtc-active-btn',SB='dtc-search-bar',AC='dtc-btn-copied';if(d.getElementById(I)){w.dtcInspectorCleaner&&w.dtcInspectorCleaner();return}let E=[];const c2c=t=>{if(navigator.clipboard&&w.isSecureContext){return navigator.clipboard.writeText(t)}else{return new Promise((res,rej)=>{try{const ta=d.createElement('textarea');ta.value=t;ta.style.position='fixed';ta.style.opacity='0';ta.style.left='-9999px';d.body.appendChild(ta);ta.select();ta.focus();d.execCommand('copy');d.body.removeChild(ta);res()}catch(e){rej(e)}})}};const eH=e=>{if(e.key==='Escape'){cl();return}if(e.key==='Enter'){e.preventDefault();const ui=d.getElementById(I);const vB=Array.from(d.querySelectorAll(%60#${I} button%60)).filter(b=>b.style.display!=='none');if(vB.length===0)return;const c=vB.map(b=>E[b.getAttribute(D)]?.innerText).filter(txt=>txt&&txt.trim()!=='').join('\n\n');if(c){c2c(c).then(()=>{ui.style.transition='box-shadow .1s ease-in-out';ui.style.boxShadow='0 0 0 3px #a6e22e';setTimeout(()=>ui.style.boxShadow='0 5px 15px rgba(0,0,0,0.5)',400);vB.forEach(b=>{const el=E[b.getAttribute(D)];if(el)pGA(el);b.classList.add(AC);setTimeout(()=>b.classList.remove(AC),500)})}).catch(err=>console.error('DTC: Copy failed',err))}}};const cAA=(el,btn)=>{if(!el)return;const txt=el.innerText;if(!txt.trim())return;c2c(txt).then(()=>{pGA(el);if(btn){btn.classList.add(AC);setTimeout(()=>btn.classList.remove(AC),500)}}).catch(err=>console.error('DTC: Copy failed',err))};const pM=e=>{const t=e.target;if(t.closest('#'+I)||!t.hasAttribute(D))return;e.preventDefault();e.stopPropagation();const btn=d.querySelector(%60#${I} button[${D}='${t.getAttribute(D)}']%60);cAA(t,btn);return!1};const hM=e=>{const t=e.target;if(!t||t.closest('#'+I))return;const sb=d.getElementById(SB);if(t.hasAttribute(D)&&sb){let txt=t.tagName.toLowerCase();if(t.id)txt+=%60#${t.id}%60;if(t.className&&typeof t.className==='string'){const cl=t.className.trim().split(' ').filter(Boolean).join('.');if(cl)txt+=%60.${cl}%60}if(sb.value!==txt){sb.value=txt;sb.dispatchEvent(new Event('input',{bubbles:!0}))}}if(!t.hasAttribute(D))return;hAH();const i=t.getAttribute(D),c=t.getAttribute(C);aH(t,c);const b=d.querySelector(%60#${I} button[${D}='${i}']%60);if(b){b.classList.add(B);if(b.style.display!=='none'){b.scrollIntoView({behavior:'smooth',block:'nearest'})}}};const sF=e=>{const v=e.target.value.toLowerCase();d.querySelectorAll(%60#${I} button%60).forEach(b=>{const t=b.title.toLowerCase();b.style.display=t.includes(v)?'block':'none'})};function cl(){const u=d.getElementById(I);if(u)u.remove();const s=d.getElementById('dtc-inspector-styles');if(s)s.remove();d.body.removeEventListener('mouseover',hM,!0);d.body.removeEventListener('click',pM,!0);d.removeEventListener('keydown',eH,!0);E.forEach(e=>{rmH(e);e.removeAttribute(D);e.removeAttribute(C)});delete w.dtcInspectorCleaner}function iAS(){const id='dtc-inspector-styles';if(d.getElementById(id))return;const s=d.createElement('style');s.id=id;s.textContent=%60@keyframes dtc-glow-effect{0%{opacity:.8}100%{opacity:0;box-shadow:0 0 40px 15px var(--dtc-glow-color,#fff)}}.dtc-glow-animation{position:absolute;pointer-events:none;z-index:999999;border-radius:5px;animation:dtc-glow-effect .8s ease-out forwards}@keyframes dtc-btn-flash{0%,50%{background-color:#a6e22e!important;color:#000!important}100%{background-color:#333!important;color:#fff!important}}.${AC}{animation:dtc-btn-flash .5s ease-out}#${I} button:hover,#${I} .${B}{background-color:#5a5a5a!important;border-left:3px solid var(--dtc-btn-color, #fff)!important;}#${SB}{width:100%;box-sizing:border-box;padding:8px;margin-bottom:4px;background:#2a2a2a;border:1px solid #555;color:#fff;border-radius:4px;font:13px sans-serif;}%60;d.head.appendChild(s)}function pGA(el){if(!el)return;const r=el.getBoundingClientRect(),g=d.createElement('div');g.className='dtc-glow-animation';const c=el.getAttribute(C)||'rgba(255,255,255,0.8)';g.style.cssText=%60left:${r.left+w.scrollX}px;top:${r.top+w.scrollY}px;width:${r.width}px;height:${r.height}px;--dtc-glow-color:${c};box-shadow:0 0 20px 8px ${c};%60;d.body.appendChild(g);setTimeout(()=>g.remove(),800)}function rC(){return%60hsla(${~~(Math.random()*360)},100%,70%,0.8)%60}function aH(el,c){if(!el)return;if(!el.hasAttribute(S)){const s={b:el.style.border,o:el.style.outline,x:el.style.boxShadow};el.setAttribute(S,JSON.stringify(s))}el.style.border=%602px solid ${c}%60;el.style.outline=%601px dashed #fff%60;el.style.boxShadow=%600 0 8px ${c}%60;el.classList.add(H)}function rmH(el){if(!el||!el.hasAttribute(S))return;const s=JSON.parse(el.getAttribute(S));el.style.border=s.b;el.style.outline=s.o;el.style.boxShadow=s.x;el.removeAttribute(S);el.classList.remove(H)}function hAH(){d.querySelectorAll('.'+H).forEach(e=>rmH(e));d.querySelectorAll('#'+I+' .'+B).forEach(b=>b.classList.remove(B))}function cSUI(){const ui=d.createElement('div');ui.id=I;ui.style.cssText='position:fixed;top:10px;right:10px;z-index:1000000;background:rgba(25,25,25,0.85);color:#fff;padding:10px;border-radius:8px;font:12px sans-serif;box-shadow:0 5px 15px rgba(0,0,0,0.5);backdrop-filter:blur(5px);max-width:280px;max-height:calc(100vh - 20px);overflow-y:auto;';const t=d.createElement('div');t.style.cssText='font-size:14px;font-weight:bold;margin-bottom:10px;padding-bottom:5px;border-bottom:1px solid #555;';t.innerHTML='Element Inspector <span style="font-size:10px;font-weight:normal;color:#ccc;">(Esc to close)</span>';ui.appendChild(t);const sb=d.createElement('input');sb.id=SB;sb.type='text';sb.placeholder='Search or hover on elements...';sb.addEventListener('input',sF);sb.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();const ui=d.getElementById(I);const vB=Array.from(d.querySelectorAll(%60#${I} button%60)).filter(b=>b.style.display!=='none');if(vB.length===0)return;const c=vB.map(b=>E[b.getAttribute(D)]?.innerText).filter(txt=>txt&&txt.trim()!=='').join('\n\n');if(c){c2c(c).then(()=>{ui.style.transition='box-shadow .1s ease-in-out';ui.style.boxShadow='0 0 0 3px #a6e22e';setTimeout(()=>ui.style.boxShadow='0 5px 15px rgba(0,0,0,0.5)',400);vB.forEach(b=>{const el=E[b.getAttribute(D)];if(el)pGA(el);b.classList.add(AC);setTimeout(()=>b.classList.remove(AC),500)})}).catch(err=>console.error('DTC: Copy failed',err))}}});ui.appendChild(sb);const n=d.createElement('div');n.style.cssText='font-size:12px;color:#ccc;margin-top:-2px;margin-bottom:8px;text-align:right;';n.innerHTML='copy filtered: <b style="color:#a6e22e;letter-spacing:1px;">enter</b>';ui.appendChild(n);const els=Array.from(d.querySelectorAll('body *')).filter(e=>(e.offsetWidth>0||e.offsetHeight>0)&&w.getComputedStyle(e).visibility!=='hidden');E=els;els.forEach((el,i)=>{const c=rC();el.setAttribute(D,i);el.setAttribute(C,c);const b=d.createElement('button');b.setAttribute(D,i);b.style.cssText=%60display:block;width:100%;background:#333;color:#fff;border:0;border-left:3px solid transparent;padding:5px 8px;margin:2px 0;border-radius:3px;cursor:pointer;text-align:left;font:11px/1.4 monospace;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:background .2s;--dtc-btn-color:${c};%60;let txt=el.tagName.toLowerCase();if(el.id)txt+=%60<span style="color:#66d9ef;">#${el.id}</span>%60;if(el.className&&typeof el.className=='string')txt+=%60<span style="color:#a6e22e;">.${el.className.trim().split(' ').join('.')}</span>%60;b.innerHTML=txt;b.title=el.tagName.toLowerCase()+(el.id?%60#${el.id}%60:'')+(el.className&&typeof el.className=='string'?%60.${el.className.trim().split(' ').join('.')}%60:'');b.addEventListener('mouseover',()=>{hAH();aH(el,c);b.classList.add(B);el.scrollIntoView({behavior:'smooth',block:'center'})});b.addEventListener('click',()=>{cAA(el,b)});ui.appendChild(b)});d.body.appendChild(ui);sb.focus()}iAS();cSUI();d.body.addEventListener('mouseover',hM,!0);d.body.addEventListener('click',pM,!0);d.addEventListener('keydown',eH,!0);w.dtcInspectorCleaner=cl;})(window,document)

// Multi-line bookmarklet:
(function(w, d) {
    // Constants for element IDs, classes, and data attributes
    const UI_ID = 'dtc-inspector-ui';
    const HITBOX_CLASS = 'dtc-hitbox-active';
    const STYLE_ATTR = 'data-dtc-style';
    const ID_ATTR = 'data-dtc-id';
    const COLOR_ATTR = 'data-dtc-color';
    const ACTIVE_BTN_CLASS = 'dtc-active-btn';
    const SEARCH_BAR_ID = 'dtc-search-bar';
    const COPIED_CLASS = 'dtc-btn-copied';

    // If the inspector is already open, close it and exit
    if (d.getElementById(UI_ID)) {
        w.dtcInspectorCleaner && w.dtcInspectorCleaner();
        return;
    }

    let allElements = [];

    // --- Core Functions ---

    // Copies text to the clipboard, works in secure contexts
    const copyToClipboard = text => {
        if (navigator.clipboard && w.isSecureContext) {
            return navigator.clipboard.writeText(text);
        } else {
            // Fallback for non-secure contexts (like file:// pages)
            return new Promise((res, rej) => {
                try {
                    const ta = d.createElement('textarea');
                    ta.value = text;
                    ta.style.position = 'fixed';
                    ta.style.opacity = '0';
                    ta.style.left = '-9999px';
                    d.body.appendChild(ta);
                    ta.select();
                    ta.focus();
                    d.execCommand('copy');
                    d.body.removeChild(ta);
                    res();
                } catch (e) {
                    rej(e);
                }
            });
        }
    };

    // Universal keydown handler (Escape to close, Enter to copy filtered)
    const keydownHandler = e => {
        if (e.key === 'Escape') {
            cleanup();
            return;
        }

        // On Enter, copy the text of all visible elements
        if (e.key === 'Enter') {
            e.preventDefault();
            const ui = d.getElementById(UI_ID);
            const visibleButtons = Array.from(d.querySelectorAll(`#${UI_ID} button`)).filter(b => b.style.display !== 'none');

            if (visibleButtons.length === 0) return;

            const contentToCopy = visibleButtons
                .map(b => allElements[b.getAttribute(ID_ATTR)]?.innerText)
                .filter(txt => txt && txt.trim() !== '')
                .join('\n\n');

            if (contentToCopy) {
                copyToClipboard(contentToCopy).then(() => {
                    // Visual feedback for successful copy
                    ui.style.transition = 'box-shadow .1s ease-in-out';
                    ui.style.boxShadow = '0 0 0 3px #a6e22e';
                    setTimeout(() => ui.style.boxShadow = '0 5px 15px rgba(0,0,0,0.5)', 400);
                    visibleButtons.forEach(b => {
                        const el = allElements[b.getAttribute(ID_ATTR)];
                        if (el) playGlowAnimation(el);
                        b.classList.add(COPIED_CLASS);
                        setTimeout(() => b.classList.remove(COPIED_CLASS), 500);
                    });
                }).catch(err => console.error('DTC: Copy failed', err));
            }
        }
    };

    // Copies a single element's text and provides feedback
    const copyAndAnimate = (element, button) => {
        if (!element) return;
        const text = element.innerText;
        if (!text.trim()) return;

        copyToClipboard(text).then(() => {
            playGlowAnimation(element);
            if (button) {
                button.classList.add(COPIED_CLASS);
                setTimeout(() => button.classList.remove(COPIED_CLASS), 500);
            }
        }).catch(err => console.error('DTC: Copy failed', err));
    };

    // Click handler for elements on the page (to copy text)
    const pageMouseClickHandler = e => {
        const target = e.target;
        // Ignore clicks inside the inspector UI
        if (target.closest('#' + UI_ID) || !target.hasAttribute(ID_ATTR)) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        const button = d.querySelector(`#${UI_ID} button[${ID_ATTR}='${target.getAttribute(ID_ATTR)}']`);
        copyAndAnimate(target, button);
        return false;
    };

    // Mouseover handler for elements on the page (to highlight them)
    const pageMouseOverHandler = e => {
        const target = e.target;
        if (!target || target.closest('#' + UI_ID)) return;

        // Update search bar with hovered element's selector
        const searchBar = d.getElementById(SEARCH_BAR_ID);
        if (target.hasAttribute(ID_ATTR) && searchBar) {
            let selectorText = target.tagName.toLowerCase();
            if (target.id) selectorText += `#${target.id}`;
            if (target.className && typeof target.className === 'string') {
                const classes = target.className.trim().split(' ').filter(Boolean).join('.');
                if (classes) selectorText += `.${classes}`;
            }
            if (searchBar.value !== selectorText) {
                searchBar.value = selectorText;
                searchBar.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }

        if (!target.hasAttribute(ID_ATTR)) return;
        
        hideAllHighlights();
        
        const id = target.getAttribute(ID_ATTR);
        const color = target.getAttribute(COLOR_ATTR);
        
        addHighlight(target, color);
        
        const button = d.querySelector(`#${UI_ID} button[${ID_ATTR}='${id}']`);
        if (button) {
            button.classList.add(ACTIVE_BTN_CLASS);
            // Scroll the button into view in the inspector panel
            if (button.style.display !== 'none') {
                 button.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    };

    // Filter function for the search bar
    const searchFilter = e => {
        const value = e.target.value.toLowerCase();
        d.querySelectorAll(`#${UI_ID} button`).forEach(button => {
            const title = button.title.toLowerCase();
            button.style.display = title.includes(value) ? 'block' : 'none';
        });
    };

    // --- Cleanup and UI Creation ---

    // Removes all event listeners, UI elements, and attributes
    function cleanup() {
        const ui = d.getElementById(UI_ID);
        if (ui) ui.remove();

        const styles = d.getElementById('dtc-inspector-styles');
        if (styles) styles.remove();

        d.body.removeEventListener('mouseover', pageMouseOverHandler, true);
        d.body.removeEventListener('click', pageMouseClickHandler, true);
        d.removeEventListener('keydown', keydownHandler, true);

        allElements.forEach(el => {
            removeHighlight(el);
            el.removeAttribute(ID_ATTR);
            el.removeAttribute(COLOR_ATTR);
        });
        delete w.dtcInspectorCleaner;
    }

    // Injects the necessary CSS for highlighting and UI styling
    function injectAppStyles() {
        const styleId = 'dtc-inspector-styles';
        if (d.getElementById(styleId)) return;
        const style = d.createElement('style');
        style.id = styleId;
        style.textContent = `
            @keyframes dtc-glow-effect {
                0% { opacity: .8; }
                100% { opacity: 0; box-shadow: 0 0 40px 15px var(--dtc-glow-color, #fff); }
            }
            .dtc-glow-animation {
                position: absolute;
                pointer-events: none;
                z-index: 999999;
                border-radius: 5px;
                animation: dtc-glow-effect .8s ease-out forwards;
            }
            @keyframes dtc-btn-flash {
                0%, 50% { background-color: #a6e22e !important; color: #000 !important; }
                100% { background-color: #333 !important; color: #fff !important; }
            }
            .${COPIED_CLASS} {
                animation: dtc-btn-flash .5s ease-out;
            }
            #${UI_ID} button:hover,
            #${UI_ID} .${ACTIVE_BTN_CLASS} {
                background-color: #5a5a5a !important;
                border-left: 3px solid var(--dtc-btn-color, #fff) !important;
            }
            #${SEARCH_BAR_ID} {
                width: 100%;
                box-sizing: border-box;
                padding: 8px;
                margin-bottom: 4px;
                background: #2a2a2a;
                border: 1px solid #555;
                color: #fff;
                border-radius: 4px;
                font: 13px sans-serif;
            }
        `;
        d.head.appendChild(style);
    }
    
    // Creates a temporary glow animation on an element
    function playGlowAnimation(el) {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const glow = d.createElement('div');
        glow.className = 'dtc-glow-animation';
        const color = el.getAttribute(COLOR_ATTR) || 'rgba(255,255,255,0.8)';
        glow.style.cssText = `
            left: ${rect.left + w.scrollX}px;
            top: ${rect.top + w.scrollY}px;
            width: ${rect.width}px;
            height: ${rect.height}px;
            --dtc-glow-color: ${color};
            box-shadow: 0 0 20px 8px ${color};
        `;
        d.body.appendChild(glow);
        setTimeout(() => glow.remove(), 800);
    }

    // --- Highlighting Logic ---
    
    function getRandomColor() {
        return `hsla(${~~(Math.random() * 360)}, 100%, 70%, 0.8)`;
    }

    function addHighlight(el, color) {
        if (!el) return;
        if (!el.hasAttribute(STYLE_ATTR)) {
            const originalStyles = {
                b: el.style.border,
                o: el.style.outline,
                x: el.style.boxShadow
            };
            el.setAttribute(STYLE_ATTR, JSON.stringify(originalStyles));
        }
        el.style.border = `2px solid ${color}`;
        el.style.outline = `1px dashed #fff`;
        el.style.boxShadow = `0 0 8px ${color}`;
        el.classList.add(HITBOX_CLASS);
    }

    function removeHighlight(el) {
        if (!el || !el.hasAttribute(STYLE_ATTR)) return;
        const originalStyles = JSON.parse(el.getAttribute(STYLE_ATTR));
        el.style.border = originalStyles.b;
        el.style.outline = originalStyles.o;
        el.style.boxShadow = originalStyles.x;
        el.removeAttribute(STYLE_ATTR);
        el.classList.remove(HITBOX_CLASS);
    }

    function hideAllHighlights() {
        d.querySelectorAll('.' + HITBOX_CLASS).forEach(e => removeHighlight(e));
        d.querySelectorAll('#' + UI_ID + ' .' + ACTIVE_BTN_CLASS).forEach(b => b.classList.remove(ACTIVE_BTN_CLASS));
    }

    // --- Main UI Construction ---

    function createSideUI() {
        // Main container
        const ui = d.createElement('div');
        ui.id = UI_ID;
        ui.style.cssText = 'position:fixed; top:10px; right:10px; z-index:1000000; background:rgba(25,25,25,0.85); color:#fff; padding:10px; border-radius:8px; font:12px sans-serif; box-shadow:0 5px 15px rgba(0,0,0,0.5); backdrop-filter:blur(5px); max-width:280px; max-height:calc(100vh - 20px); overflow-y:auto;';

        // Header
        const title = d.createElement('div');
        title.style.cssText = 'font-size:14px; font-weight:bold; margin-bottom:10px; padding-bottom:5px; border-bottom:1px solid #555;';
        title.innerHTML = 'Element Inspector <span style="font-size:10px; font-weight:normal; color:#ccc;">(Esc to close)</span>';
        ui.appendChild(title);

        // Search bar
        const searchBar = d.createElement('input');
        searchBar.id = SEARCH_BAR_ID;
        searchBar.type = 'text';
        searchBar.placeholder = 'Search or hover on elements...';
        searchBar.addEventListener('input', searchFilter);
        searchBar.addEventListener('keydown', e => {
            // Prevent the main keydown handler from closing the app when pressing Enter in the search bar
            if (e.key === 'Enter') {
                e.preventDefault();
                 const visibleButtons = Array.from(d.querySelectorAll(`#${UI_ID} button`)).filter(b => b.style.display !== 'none');
                 if (visibleButtons.length === 0) return;

                 const contentToCopy = visibleButtons
                     .map(b => allElements[b.getAttribute(ID_ATTR)]?.innerText)
                     .filter(txt => txt && txt.trim() !== '')
                     .join('\n\n');

                 if (contentToCopy) {
                     copyToClipboard(contentToCopy).then(() => {
                         ui.style.transition = 'box-shadow .1s ease-in-out';
                         ui.style.boxShadow = '0 0 0 3px #a6e22e';
                         setTimeout(() => ui.style.boxShadow = '0 5px 15px rgba(0,0,0,0.5)', 400);
                         visibleButtons.forEach(b => {
                            const el = allElements[b.getAttribute(ID_ATTR)];
                            if (el) playGlowAnimation(el);
                            b.classList.add(COPIED_CLASS);
                            setTimeout(() => b.classList.remove(COPIED_CLASS), 500);
                         });
                     }).catch(err => console.error('DTC: Copy failed', err));
                 }
            }
        });
        ui.appendChild(searchBar);

        // Help text for copying filtered items
        const helpText = d.createElement('div');
        helpText.style.cssText = 'font-size:12px; color:#ccc; margin-top:-2px; margin-bottom:8px; text-align:right;';
        helpText.innerHTML = 'copy filtered: <b style="color:#a6e22e;letter-spacing:1px;">enter</b>';
        ui.appendChild(helpText);

        // Find all visible elements on the page
        const elements = Array.from(d.querySelectorAll('body *')).filter(e =>
            (e.offsetWidth > 0 || e.offsetHeight > 0) && w.getComputedStyle(e).visibility !== 'hidden'
        );
        allElements = elements;

        // Create a button in the UI for each element
        elements.forEach((el, i) => {
            const color = getRandomColor();
            el.setAttribute(ID_ATTR, i);
            el.setAttribute(COLOR_ATTR, color);

            const btn = d.createElement('button');
            btn.setAttribute(ID_ATTR, i);
            btn.style.cssText = `display:block; width:100%; background:#333; color:#fff; border:0; border-left:3px solid transparent; padding:5px 8px; margin:2px 0; border-radius:3px; cursor:pointer; text-align:left; font:11px/1.4 monospace; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; transition:background .2s; --dtc-btn-color:${color};`;

            // Build the button text with selector info
            let buttonText = el.tagName.toLowerCase();
            if (el.id) buttonText += `<span style="color:#66d9ef;">#${el.id}</span>`;
            if (el.className && typeof el.className == 'string') buttonText += `<span style="color:#a6e22e;">.${el.className.trim().split(' ').join('.')}</span>`;
            btn.innerHTML = buttonText;
            
            // Set a plain text title for searching
            btn.title = el.tagName.toLowerCase() + (el.id ? `#${el.id}` : '') + (el.className && typeof el.className == 'string' ? `.${el.className.trim().split(' ').join('.')}` : '');
            
            // Add event listeners for hover and click on the button
            btn.addEventListener('mouseover', () => {
                hideAllHighlights();
                addHighlight(el, color);
                btn.classList.add(ACTIVE_BTN_CLASS);
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
            btn.addEventListener('click', () => {
                copyAndAnimate(el, btn);
            });
            
            ui.appendChild(btn);
        });

        d.body.appendChild(ui);
        
        // **MODIFICATION: Set focus to the search bar**
        searchBar.focus();
    }

    // --- Initialization ---

    injectAppStyles();
    createSideUI();

    // Activate global event listeners
    d.body.addEventListener('mouseover', pageMouseOverHandler, true);
    d.body.addEventListener('click', pageMouseClickHandler, true);
    d.addEventListener('keydown', keydownHandler, true);

    // Make the cleanup function globally accessible
    w.dtcInspectorCleaner = cleanup;

})(window, document);
