/* =============================================
   Write Chinese — Shop, Currency & Stroke Styles
   ============================================= */

'use strict';

// ── Stroke Styles ──────────────────────────────

const ALL_ANIM_CLASSES = [
  'style-anim-neon-sign', 'style-anim-plasma', 'style-anim-glitch',
  'style-anim-ember', 'style-anim-hologram',
];

const STROKE_STYLES = [
  // ── Simple color ──────────────────────────────────────────────────────────
  { id: 'classic',   name: 'Classic',        desc: 'Default yellow',
    color: '#FFE66D', widthMult: 1.0, price: 0   },
  { id: 'ocean',     name: 'Ocean',          desc: 'Cool teal',
    color: '#4ECDC4', widthMult: 1.0, price: 80  },
  { id: 'cherry',    name: 'Cherry Blossom', desc: 'Soft pink',
    color: '#FF69B4', widthMult: 1.0, price: 80  },
  { id: 'ink',       name: 'Ink Brush',      desc: 'Bold calligraphy',
    color: '#C8A96E', widthMult: 1.4, price: 60  },

  // ── Single-color glow ─────────────────────────────────────────────────────
  { id: 'fire',      name: 'Fire',           desc: 'Blazing orange glow',
    color: '#FF6B35', widthMult: 1.0, glowColor: '#FF6B35', price: 120 },
  { id: 'neon',      name: 'Neon Green',     desc: 'Electric green glow',
    color: '#39FF14', widthMult: 1.0, glowColor: '#39FF14', price: 150 },

  // ── Blended dual-color glow ───────────────────────────────────────────────
  { id: 'galaxy',    name: 'Galaxy',         desc: 'Cosmic purple blend',
    color: '#A29BFE', widthMult: 1.0, glowColor: '#A29BFE',
    glowFilter: 'drop-shadow(0 0 8px #A29BFE) drop-shadow(0 0 16px #6C5CE7)', price: 200 },
  { id: 'rose-gold', name: 'Rose Gold',      desc: 'Pink & gold shimmer',
    color: '#FFB7C5', widthMult: 1.0, glowColor: '#FFB7C5',
    glowFilter: 'drop-shadow(0 0 8px #FFB7C5) drop-shadow(0 0 14px #FFD700)', price: 220 },
  { id: 'aurora',    name: 'Aurora',         desc: 'Teal & violet blend',
    color: '#00F5D4', widthMult: 1.0, glowColor: '#00F5D4',
    glowFilter: 'drop-shadow(0 0 8px #00F5D4) drop-shadow(0 0 16px #7B2FBE)', price: 250 },
  { id: 'gold',      name: 'Gold Master',    desc: 'Legendary gold glow',
    color: '#FFD700', widthMult: 1.2, glowColor: '#FFD700',
    glowFilter: 'drop-shadow(0 0 8px #FFD700) drop-shadow(0 0 18px #FF9500)', price: 280 },

  // ── Animated ──────────────────────────────────────────────────────────────
  { id: 'neon-sign', name: 'Neon Sign',      desc: '💡 Buzzing neon tube flicker',
    color: '#FF2D78', widthMult: 1.0, glowColor: '#FF2D78',
    animClass: 'style-anim-neon-sign', price: 350 },
  { id: 'plasma',    name: 'Plasma',         desc: '⚡ Electric color-cycling arc',
    color: '#BF5FFF', widthMult: 1.0, glowColor: '#BF5FFF',
    animClass: 'style-anim-plasma',    price: 400 },
  { id: 'glitch',    name: 'Glitch',         desc: '👾 Cyberpunk RGB split flash',
    color: '#00FFCC', widthMult: 1.0, glowColor: '#00FFCC',
    animClass: 'style-anim-glitch',    price: 380 },
  { id: 'ember',     name: 'Ember',          desc: '🔥 Breathing fire pulse',
    color: '#FF6B35', widthMult: 1.1, glowColor: '#FF6B35',
    animClass: 'style-anim-ember',     price: 420 },
  { id: 'hologram',  name: 'Hologram',       desc: '🌀 Sci-fi holo shimmer',
    color: '#00F5D4', widthMult: 1.0, glowColor: '#00F5D4',
    animClass: 'style-anim-hologram',  price: 500 },
];

// ── Storage ────────────────────────────────────

const SHOP_KEY = 'write_chinese_shop_v1';
const RACE_KEY = 'write_chinese_race_v1';

function getShopData() {
  try {
    const saved = JSON.parse(localStorage.getItem(SHOP_KEY));
    if (saved && saved.coins !== undefined) return saved;
  } catch (e) {}
  return { coins: 0, owned: ['classic'], selected: 'classic' };
}

function saveShopData(data) {
  try { localStorage.setItem(SHOP_KEY, JSON.stringify(data)); } catch (e) {}
}

// ── Coins ──────────────────────────────────────

function getCoins() {
  return getShopData().coins || 0;
}

function addCoins(amount, label) {
  if (!amount || amount <= 0) return;
  const data = getShopData();
  data.coins = (data.coins || 0) + amount;
  saveShopData(data);
  updateAllCoinDisplays();
  showCoinPopup(amount, label);
}

function updateAllCoinDisplays() {
  const coins = getCoins();
  document.querySelectorAll('.coin-amount').forEach(el => {
    el.textContent = coins;
  });
}

// ── Style Selection ────────────────────────────

function getSelectedStyle() {
  const data = getShopData();
  return STROKE_STYLES.find(s => s.id === data.selected) || STROKE_STYLES[0];
}

function getOwnedStyles() {
  return getShopData().owned || ['classic'];
}

function ownsStyle(id) {
  return getOwnedStyles().includes(id);
}

function buyStyle(id) {
  const style = STROKE_STYLES.find(s => s.id === id);
  if (!style || ownsStyle(id)) return false;
  const data = getShopData();
  if ((data.coins || 0) < style.price) return false;
  data.coins -= style.price;
  data.owned = [...(data.owned || ['classic']), id];
  saveShopData(data);
  updateAllCoinDisplays();
  return true;
}

function selectStyle(id) {
  if (!ownsStyle(id)) return false;
  const data = getShopData();
  data.selected = id;
  saveShopData(data);
  return true;
}

// ── Race Records ───────────────────────────────

function getRaceData() {
  try { return JSON.parse(localStorage.getItem(RACE_KEY)) || {}; }
  catch (e) { return {}; }
}

function saveRaceData(data) {
  try { localStorage.setItem(RACE_KEY, JSON.stringify(data)); } catch (e) {}
}

function getRaceRecord(char) {
  return getRaceData()[char] || null;
}

// Returns true if a new record was set AND a previous record existed (→ award coins)
function saveRaceRecord(char, totalTime, splits) {
  const data = getRaceData();
  const prev = data[char];
  const isNewRecord = !!(prev && totalTime < prev.bestTime);
  if (!prev || totalTime < prev.bestTime) {
    data[char] = { bestTime: totalTime, splits };
    saveRaceData(data);
  }
  return isNewRecord;
}

// ── Coin Popup Animation ───────────────────────

function showCoinPopup(amount, label) {
  const popup = document.createElement('div');
  popup.className = 'coin-popup';
  popup.textContent = label || `+${amount} 🪙`;
  document.body.appendChild(popup);

  const coinEl = document.querySelector('#tracing-screen .coin-amount, #landing-screen .coin-amount');
  if (coinEl) {
    const rect = coinEl.getBoundingClientRect();
    popup.style.left = rect.left + 'px';
    popup.style.top  = (rect.top - 8) + 'px';
  } else {
    popup.style.left = '50%';
    popup.style.top  = '60px';
    popup.style.transform = 'translateX(-50%)';
  }

  setTimeout(() => { if (popup.parentNode) popup.remove(); }, 1600);
}

// ── Apply Glow / Animation to container ────────

function applyStyleGlow() {
  const container = document.getElementById('hanzi-container');
  if (!container) return;
  const style = getSelectedStyle();

  // Target the transparent svgWrapper (created in initWriter) so drop-shadow
  // follows stroke shapes. Applying filter to the dark container glows the whole
  // rectangle; applying to the SVG element directly breaks HanziWriter's clipPath
  // rendering on iOS Safari.
  const wrapper = document.getElementById('hanzi-svg-wrapper') || container;

  container.classList.remove(...ALL_ANIM_CLASSES);
  wrapper.classList.remove(...ALL_ANIM_CLASSES);
  wrapper.style.filter = '';
  container.style.filter = '';

  if (style.animClass) {
    wrapper.classList.add(style.animClass);
  } else if (style.glowFilter) {
    wrapper.style.filter = style.glowFilter;
  } else if (style.glowColor) {
    wrapper.style.filter = `drop-shadow(0 0 8px ${style.glowColor})`;
  }
}

// ── Shop Screen ────────────────────────────────

function renderShop() {
  const grid = document.getElementById('shop-grid');
  if (!grid) return;
  const coins    = getCoins();
  const owned    = getOwnedStyles();
  const selected = getShopData().selected;

  grid.innerHTML = STROKE_STYLES.map(style => {
    const isOwned    = owned.includes(style.id);
    const isSelected = style.id === selected;
    const canAfford  = coins >= style.price;

    const glowCss = style.glowColor
      ? `box-shadow: 0 0 14px ${style.glowColor}, 0 0 5px ${style.glowColor};` : '';
    const swatchAnimClass = style.animClass ? ' swatch-animated' : '';

    const badge = style.animClass
      ? '<div class="style-type-badge badge-anim">⚡ Animated</div>'
      : (style.glowFilter
          ? '<div class="style-type-badge badge-blend">✨ Blended</div>'
          : '');

    let btn;
    if (isSelected) {
      btn = `<button class="shop-btn shop-btn-selected" disabled>✓ Selected</button>`;
    } else if (isOwned) {
      btn = `<button class="shop-btn shop-btn-use" data-id="${style.id}">Use</button>`;
    } else if (canAfford) {
      btn = `<button class="shop-btn shop-btn-buy" data-id="${style.id}">🪙 ${style.price}</button>`;
    } else {
      btn = `<button class="shop-btn shop-btn-locked" data-id="${style.id}" disabled>🔒 ${style.price}</button>`;
    }

    return `
      <div class="shop-style-card ${isSelected ? 'selected' : isOwned ? 'owned' : ''}">
        <div class="style-swatch${swatchAnimClass}" style="background:${style.color};${glowCss}"></div>
        ${badge}
        <div class="style-info">
          <div class="style-name">${style.name}</div>
          <div class="style-desc">${style.desc}</div>
        </div>
        ${btn}
      </div>`;
  }).join('');

  grid.querySelectorAll('.shop-btn-buy').forEach(btn => {
    btn.addEventListener('click', () => {
      if (buyStyle(btn.dataset.id)) renderShop();
    });
  });
  grid.querySelectorAll('.shop-btn-use').forEach(btn => {
    btn.addEventListener('click', () => {
      selectStyle(btn.dataset.id);
      renderShop();
    });
  });
}

function initShop() {
  const backBtn = document.getElementById('shop-back-btn');
  if (backBtn) backBtn.addEventListener('click', () => showScreen('landing-screen'));
}

function openShopScreen() {
  renderShop();
  updateAllCoinDisplays();
  showScreen('shop-screen');
}

// ── Style Picker Panel ─────────────────────────

function renderStylePicker() {
  const list = document.getElementById('style-picker-list');
  if (!list) return;
  const owned    = getOwnedStyles();
  const selected = getShopData().selected;

  list.innerHTML = owned.map(id => {
    const style = STROKE_STYLES.find(s => s.id === id);
    if (!style) return '';
    const glowCss = style.glowColor
      ? `box-shadow: 0 0 12px ${style.glowColor};` : '';
    const swatchAnimClass = style.animClass ? ' swatch-animated' : '';
    return `
      <div class="picker-swatch${swatchAnimClass} ${style.id === selected ? 'selected' : ''}"
           data-id="${style.id}"
           style="background:${style.color};${glowCss}"
           title="${style.name}">
        ${style.id === selected ? '<div class="picker-check">✓</div>' : ''}
      </div>`;
  }).join('');

  list.querySelectorAll('.picker-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      selectStyle(swatch.dataset.id);
      renderStylePicker();
      applyStyleGlow();
    });
  });
}

function openStylePicker() {
  renderStylePicker();
  const panel    = document.getElementById('style-picker');
  const backdrop = document.getElementById('style-picker-backdrop');
  if (panel)    panel.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
}

function closeStylePicker() {
  const panel    = document.getElementById('style-picker');
  const backdrop = document.getElementById('style-picker-backdrop');
  if (panel)    panel.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
}

function initStylePicker() {
  document.getElementById('style-picker-backdrop')
    ?.addEventListener('click', closeStylePicker);
  document.getElementById('style-picker-shop-link')
    ?.addEventListener('click', () => {
      closeStylePicker();
      openShopScreen();
    });
}
