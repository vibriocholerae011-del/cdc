/* ==================================================================
   APP LOGIC — از این پایین به بعد نیازی به ویرایش نیست
   ================================================================== */
(function(){
  const tg = window.Telegram && window.Telegram.WebApp;
  if (tg){
    try{
      tg.ready();
      tg.expand();
      tg.MainButton && tg.MainButton.hide();
    }catch(e){}
  }

  /* ---------- safe storage (works standalone; degrades quietly in sandboxed previews) ---------- */
  function safeGet(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }
  function safeSet(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }

  /* ---------- DOM refs ---------- */
  const viewEl = document.getElementById('view');
  const backBtn = document.getElementById('backBtn');
  const brandHead = document.getElementById('brandHead');
  const headEyebrow = document.getElementById('headEyebrow');
  const headTitle = document.getElementById('headTitle');
  const searchBtn = document.getElementById('searchBtn');
  const settingsBtn = document.getElementById('settingsBtn');
  const sheetOverlay = document.getElementById('sheetOverlay');
  const sheetClose = document.getElementById('sheetClose');
  const modeSeg = document.getElementById('modeSeg');
  const colorSwatches = document.getElementById('colorSwatches');
  const fontOpts = document.getElementById('fontOpts');
  const sizeDec = document.getElementById('sizeDec');
  const sizeInc = document.getElementById('sizeInc');
  const sizeTrack = document.getElementById('sizeTrack');
  const sizePreview = document.getElementById('sizePreview');

  const TAB_LABELS = { definitions:'تعاریف و خلاصه', guidelines:'دستورالعمل رسمی', forms:'فرم‌ها' };
  const TAB_ORDER = ['definitions','guidelines','forms'];
  const TAB_ICONS = {
    definitions: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.2c3-1.4 6-1.4 8 0v13.6c-2-1.4-5-1.4-8 0V5.2z"/><path d="M20 5.2c-3-1.4-6-1.4-8 0v13.6c2-1.4 5-1.4 8 0V5.2z"/></svg>',
    guidelines: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1"/><path d="M9 12.2l2 2 4-4.2"/></svg>',
    forms: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  };

  const FONT_STACKS = {
    vazir: "'Vazirmatn', Tahoma, 'Segoe UI', sans-serif",
    /* بی‌یکان و بی‌نازنین فونت‌های اختصاصی/تجاری‌اند و برای وب متن‌باز embed نمی‌شوند؛
       اگر از قبل روی دستگاه کاربر نصب باشند نمایش داده می‌شوند، در غیر این صورت به‌صورت
       خوانا به فونت جایگزین سیستمی برمی‌گردند. */
    yekan: "'B Yekan','BYekan','Yekan', Tahoma, 'Segoe UI', sans-serif",
    nazanin: "'B Nazanin','BNazanin','Nazanin', Tahoma, 'Segoe UI', sans-serif",
  };
  const SIZE_STEPS = [14, 16, 18, 20];
  const COLOR_THEMES = {
    teal:   { light:{p:'#0E6E66', d:'#0A4F49', b:'#12A296'}, dark:{p:'#2FD9C6', d:'#1FBBA9', b:'#45E6D3'} },
    blue:   { light:{p:'#1E5FA8', d:'#164A85', b:'#2E7FD1'}, dark:{p:'#5AA8F0', d:'#3D8AD9', b:'#7CC0FF'} },
    plum:   { light:{p:'#7A3B69', d:'#5E2C50', b:'#9C5185'}, dark:{p:'#E08FCB', d:'#C46FAE', b:'#F0A8DA'} },
    forest: { light:{p:'#3E6B3A', d:'#2E4F2B', b:'#5A9153'}, dark:{p:'#7FD473', d:'#5FB554', b:'#98E68C'} },
  };

  const ICONS = {
    vpd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"/><path d="M9 12.2l2 2 4-4.2"/></svg>',
    resp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10.5a2.3 2.3 0 1 0-2-3.5"/><path d="M3 12.3h14.5a2.3 2.3 0 1 1-2 3.5"/><path d="M3 16.6h8.5"/></svg>',
    food_water: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c3 4.2 6.2 7.8 6.2 11.2A6.2 6.2 0 1 1 5.8 14.2C5.8 10.8 9 7.2 12 3z"/></svg>',
    bloodborne_hep: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c2.7 3.7 5.2 7 5.2 10.1A5.2 5.2 0 1 1 6.8 13.1C6.8 10 9.3 6.7 12 3z"/><path d="M12 10.8v4.2M9.9 12.9h4.2"/></svg>',
    zoonotic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.8" cy="7.6" r="1.5"/><circle cx="12" cy="5.6" r="1.5"/><circle cx="16.2" cy="7.6" r="1.5"/><path d="M12 10.6c-3.1 0-5.6 2.1-5.6 4.6 0 2 1.7 3 3.4 2.2.7-.4 1.5-.4 2.2 0 1.7.8 3.4-.2 3.4-2.2 0-2.5-2.3-4.6-5.4-4.6z"/></svg>',
    bites: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4.2l8.8 14.6H3.2L12 4.2z"/><path d="M12 10.2v4M12 16.8h.01"/></svg>',
    other: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="1.3" fill="currentColor" stroke="none"/><circle cx="16" cy="8" r="1.3" fill="currentColor" stroke="none"/><circle cx="8" cy="16" r="1.3" fill="currentColor" stroke="none"/><circle cx="16" cy="16" r="1.3" fill="currentColor" stroke="none"/></svg>',
  };

  let searchQuery = '';

  function toFa(n){
    const map = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return String(n).replace(/[0-9]/g, d => map[d]);
  }
  function escapeAttr(s){ return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;'); }
  function findCategory(catId){ return CATEGORIES.find(c => c.id === catId); }
  function findDisease(catId, disId){
    const cat = findCategory(catId);
    return cat ? cat.diseases.find(d => d.id === disId) : null;
  }
  function chevronSvg(){
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>';
  }
  function emptyIconSvg(){
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2" stroke-dasharray="3 3"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>';
  }
  function searchEmptyIconSvg(){
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>';
  }

  /* ---------- search index ---------- */
  function normalize(s){
    return String(s)
      .replace(/\u064A/g,'ی')
      .replace(/\u0643/g,'ک')
      .replace(/[\u200c\u200f\u200e]/g,' ')
      .trim()
      .toLowerCase();
  }
  const SEARCH_INDEX = [];
  CATEGORIES.forEach(cat=>{
    cat.diseases.forEach(d=>{
      SEARCH_INDEX.push({
        catId:cat.id, catName:cat.name, catColor:cat.color,
        disId:d.id, disName:d.name,
        norm: normalize(d.name + ' ' + cat.name)
      });
    });
  });
  function searchDiseases(q){
    const nq = normalize(q);
    if (!nq) return [];
    return SEARCH_INDEX.filter(item => item.norm.includes(nq));
  }

  /* ---------- settings state (mode / color theme / font / text size) ---------- */
  const root = document.documentElement;

  function getInitialMode(){
    const stored = safeGet('mode');
    if (stored === 'light' || stored === 'dark') return stored;
    if (tg && tg.colorScheme) return tg.colorScheme;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  }

  let settings = {
    mode: getInitialMode(),
    color: safeGet('colorTheme') || 'teal',
    font: safeGet('font') || 'vazir',
    sizeIndex: (()=>{ const s = parseInt(safeGet('sizeIndex'),10); return (s>=0 && s<=3) ? s : 1; })(),
  };

  function applyAll(){
    root.setAttribute('data-theme', settings.mode);
    const c = COLOR_THEMES[settings.color][settings.mode];
    root.style.setProperty('--primary', c.p);
    root.style.setProperty('--primary-deep', c.d);
    root.style.setProperty('--primary-bright', c.b);
    root.style.setProperty('--font-fa', FONT_STACKS[settings.font]);
    root.style.setProperty('--root-fs', SIZE_STEPS[settings.sizeIndex] + 'px');

    modeSeg.querySelectorAll('.seg-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === settings.mode));
    colorSwatches.querySelectorAll('.swatch').forEach(b => b.classList.toggle('active', b.dataset.color === settings.color));
    fontOpts.querySelectorAll('.opt-btn').forEach(b => b.classList.toggle('active', b.dataset.font === settings.font));
    sizeTrack.querySelectorAll('.dot').forEach(d => d.classList.toggle('active', Number(d.dataset.i) === settings.sizeIndex));
    if (sizePreview) sizePreview.style.fontSize = (SIZE_STEPS[settings.sizeIndex] * 0.875 / 16) + 'rem';
  }

  function updateSetting(key, value){
    settings[key] = value;
    applyAll();
    const storeKey = { mode:'mode', color:'colorTheme', font:'font', sizeIndex:'sizeIndex' }[key];
    safeSet(storeKey, value);
  }

  applyAll();

  /* ---------- settings sheet open/close + controls ---------- */
  function openSheet(){
    sheetOverlay.classList.add('open');
    if (tg){ try{ tg.BackButton.show(); }catch(e){} }
  }
  function closeSheet(){
    sheetOverlay.classList.remove('open');
    if (tg){ try{ (history.state && history.state.view!=='home') ? 0 : tg.BackButton.hide(); }catch(e){} }
  }
  settingsBtn.addEventListener('click', openSheet);
  sheetClose.addEventListener('click', closeSheet);
  sheetOverlay.addEventListener('click', (e)=>{ if (e.target === sheetOverlay) closeSheet(); });

  modeSeg.addEventListener('click', (e)=>{
    const btn = e.target.closest('.seg-btn');
    if (btn) updateSetting('mode', btn.dataset.mode);
  });
  colorSwatches.addEventListener('click', (e)=>{
    const btn = e.target.closest('.swatch');
    if (btn) updateSetting('color', btn.dataset.color);
  });
  fontOpts.addEventListener('click', (e)=>{
    const btn = e.target.closest('.opt-btn');
    if (btn) updateSetting('font', btn.dataset.font);
  });
  sizeDec.addEventListener('click', ()=>{
    if (settings.sizeIndex > 0) updateSetting('sizeIndex', settings.sizeIndex - 1);
  });
  sizeInc.addEventListener('click', ()=>{
    if (settings.sizeIndex < SIZE_STEPS.length - 1) updateSetting('sizeIndex', settings.sizeIndex + 1);
  });

  /* ---------- renderers ---------- */
  function renderHome(){
    headEyebrow.textContent = 'نظام مراقبت بیماری‌ها';
    headTitle.textContent = 'کتابخانه دیجیتال';
    backBtn.classList.remove('visible');

    const cardsHtml = CATEGORIES.map(cat => `
      <li>
        <button class="cat-card" style="--tab:${cat.color}" data-nav="category" data-cat="${cat.id}">
          <span class="cat-icon" style="color:${cat.color}">${ICONS[cat.id] || ''}</span>
          <span class="cat-body">
            <span class="cat-name">${cat.name}</span>
            <span class="cat-count">${toFa(cat.diseases.length)} بیماری</span>
          </span>
          <span class="cat-chev">${chevronSvg()}</span>
        </button>
      </li>`).join('');

    viewEl.innerHTML = `
      <div class="view-enter">
        <div class="hero">
          <h2>کتابخانه نظام مراقبت بیماری‌ها</h2>
          <p>دسترسی سریع به تعاریف، دستورالعمل‌های رسمی و فرم‌های مورد نیاز، دسته‌بندی‌شده برای استفاده کارکنان.</p>
          <div class="hero-stats">
            <span><span class="n">${toFa(CATEGORIES.length)}</span> دسته‌بندی</span>
            <span><span class="n">${toFa(SEARCH_INDEX.length)}</span> بیماری</span>
          </div>
          <div class="search-wrap">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
            <input id="searchInput" type="text" placeholder="جستجوی نام بیماری…" autocomplete="off" value="${escapeAttr(searchQuery)}">
            <button class="search-clear" id="searchClear" aria-label="پاک کردن جستجو">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
            </button>
          </div>
        </div>
        <div id="homeResults"></div>
      </div>
    `;

    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('searchClear');
    const results = document.getElementById('homeResults');

    function paint(){
      const q = searchQuery.trim();
      clearBtn.classList.toggle('visible', !!q);
      if (!q){
        results.innerHTML = `<div class="section-label">همه دسته‌ها</div><ul class="cat-list">${cardsHtml}</ul>`;
        return;
      }
      const matches = searchDiseases(q);
      if (matches.length === 0){
        results.innerHTML = `
          <div class="empty-search">
            ${searchEmptyIconSvg()}
            <div class="t">نتیجه‌ای یافت نشد</div>
            <div class="d">با کلمه‌ی دیگری امتحان کنید یا نام بیماری را کامل‌تر وارد کنید.</div>
          </div>`;
        return;
      }
      const rows = matches.map(r => `
        <li>
          <button class="disease-row" data-nav="disease" data-cat="${r.catId}" data-dis="${r.disId}">
            <span class="rt"><span class="name">${r.disName}</span></span>
            <span style="display:flex;align-items:center">
              <span class="tag" style="--rowtag:${r.catColor}">${r.catName}</span>
              ${chevronSvg()}
            </span>
          </button>
        </li>`).join('');
      results.innerHTML = `<div class="section-label">${toFa(matches.length)} نتیجه</div><ul class="disease-list" style="margin-top:0">${rows}</ul>`;
    }

    paint();
    input.addEventListener('input', ()=>{ searchQuery = input.value; paint(); });
    clearBtn.addEventListener('click', ()=>{ searchQuery=''; input.value=''; paint(); input.focus(); });
  }

  function renderCategory(catId){
    const cat = findCategory(catId);
    if (!cat){ renderHome(); return; }

    headEyebrow.innerHTML = `<span class="cat-pill" style="--pill:${cat.color}"><span class="dot"></span>بخش ${cat.num}</span>`;
    headTitle.textContent = cat.name;
    backBtn.classList.add('visible');

    const rows = cat.diseases.map(d => `
      <li>
        <button class="disease-row" data-nav="disease" data-cat="${cat.id}" data-dis="${d.id}">
          <span class="name">${d.name}</span>
          ${chevronSvg()}
        </button>
      </li>`).join('');

    viewEl.innerHTML = `
      <div class="view-enter">
        <div class="section-label">${toFa(cat.diseases.length)} بیماری در این دسته</div>
        <ul class="disease-list">${rows}</ul>
      </div>
    `;
  }

  function sectionPanelHtml(key, content){
    if (content){
      return `<div class="panel" data-panel="${key}">${content}</div>`;
    }
    return `<div class="panel" data-panel="${key}">
      <div class="empty-state">
        ${TAB_ICONS[key] || emptyIconSvg()}
        <div class="t">این بخش هنوز تکمیل نشده</div>
        <div class="d">${TAB_LABELS[key]} مربوط به این بیماری به‌زودی اضافه می‌شود.</div>
      </div>
    </div>`;
  }

  function renderDisease(catId, disId, activeTab){
    const cat = findCategory(catId);
    const dis = findDisease(catId, disId);
    if (!cat || !dis){ renderHome(); return; }
    activeTab = activeTab || 'definitions';

    headEyebrow.innerHTML = `<span class="cat-pill" style="--pill:${cat.color}"><span class="dot"></span>${cat.name}</span>`;
    headTitle.textContent = dis.name;
    backBtn.classList.add('visible');

    const tabs = TAB_ORDER.map(k => `<button class="tab-btn${k===activeTab?' active':''}" data-tab="${k}">${TAB_ICONS[k]}${TAB_LABELS[k]}</button>`).join('');
    const panels = TAB_ORDER.map(k => sectionPanelHtml(k, dis.sections[k])).join('');

    viewEl.innerHTML = `
      <div class="view-enter" style="--catcolor:${cat.color}">
        <div class="tabs" role="tablist">${tabs}</div>
        <div class="panels">${panels}</div>
      </div>
    `;
    viewEl.querySelector(`.panel[data-panel="${activeTab}"]`).classList.add('active');

    viewEl.querySelectorAll('.tab-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const key = btn.dataset.tab;
        viewEl.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active', b===btn));
        viewEl.querySelectorAll('.panel').forEach(p=>p.classList.toggle('active', p.dataset.panel===key));
      });
    });
  }

  /* ---------- router ---------- */
  function render(state){
    state = state || {view:'home'};
    if (state.view === 'category') renderCategory(state.catId);
    else if (state.view === 'disease') renderDisease(state.catId, state.disId);
    else renderHome();

    viewEl.focus({preventScroll:true});
    viewEl.scrollTop = 0;
    window.scrollTo(0,0);

    if (tg){
      try{ state.view === 'home' ? tg.BackButton.hide() : tg.BackButton.show(); }catch(e){}
    }
  }
  function navigateTo(state){
    history.pushState(state, '', '#'+state.view+(state.catId?'/'+state.catId:'')+(state.disId?'/'+state.disId:''));
    render(state);
  }

  viewEl.addEventListener('click', (e)=>{
    const el = e.target.closest('[data-nav]');
    if (!el) return;
    const nav = el.dataset.nav;
    if (nav === 'category') navigateTo({view:'category', catId:el.dataset.cat});
    if (nav === 'disease') navigateTo({view:'disease', catId:el.dataset.cat, disId:el.dataset.dis});
  });

  function handleBack(){
    if (sheetOverlay.classList.contains('open')){ closeSheet(); return; }
    history.back();
  }
  backBtn.addEventListener('click', handleBack);
  window.addEventListener('popstate', (e)=> render(e.state));
  if (tg){ try{ tg.BackButton.onClick(handleBack); }catch(e){} }
  document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape' && sheetOverlay.classList.contains('open')) closeSheet(); });

  searchBtn.addEventListener('click', ()=>{
    const cur = history.state && history.state.view;
    if (cur !== 'home') navigateTo({view:'home'});
    requestAnimationFrame(()=>{
      const inp = document.getElementById('searchInput');
      if (inp) inp.focus();
    });
  });

  brandHead.style.cursor = 'pointer';
  brandHead.addEventListener('click', ()=>{
    const cur = history.state && history.state.view;
    if (cur !== 'home') navigateTo({view:'home'});
  });

  history.replaceState({view:'home'}, '', '#home');
  render({view:'home'});
})();
