/* =============================================
   Write Chinese — Game Features
   Star Map · Plant Growth · Streak · Memory Flash
   ============================================= */

'use strict';

// ── Constellation Definitions ──────────────────

const CONSTELLATIONS = [
  {
    id: 'dragon', name: 'The Dragon', emoji: '🐉',
    desc: 'Numbers & counting', color: '#FF6B35',
    chars: ["一","二","三","四","五","六","七","八","九","十","百","千","万","零"],
  },
  {
    id: 'sky', name: 'The Sky', emoji: '🌏',
    desc: 'Time, seasons & the world', color: '#4ECDC4',
    chars: ["日","月","年","时","天","地","国","家","今","明","昨","春","夏","秋","冬","节"],
  },
  {
    id: 'clock', name: 'The Clock', emoji: '⏰',
    desc: 'Time words & frequency', color: '#00CEC9',
    chars: ["早","晚","分","午","周","秒","将","近","经","常","偶","尔","每"],
  },
  {
    id: 'family', name: 'The Family', emoji: '👨‍👩‍👧',
    desc: 'People & relationships', color: '#FF9A9E',
    chars: ["父","母","朋","友","爱","兄","弟","姐","妹","儿","女","夫","妻","子","孙","祖","爷","奶","叔","伯","姑","舅","婶","侄","婆"],
  },
  {
    id: 'self', name: 'The Mirror', emoji: '🪞',
    desc: 'Pronouns & people words', color: '#E17055',
    chars: ["我","你","他","她","它","们","人","生","老"],
  },
  {
    id: 'scholar', name: 'The Scholar', emoji: '📚',
    desc: 'Learning & language', color: '#A29BFE',
    chars: ["学","校","书","字","文","语","汉","英","数","音","乐","教","问","答","题","案","作","业","课","堂","师","同","识","验","法","考","绩"],
  },
  {
    id: 'hero', name: 'The Hero', emoji: '⚡',
    desc: 'Core grammar words', color: '#FFE66D',
    chars: ["是","不","在","有","来","去","好","很","也","都","这","那","的","了","和","就","最","还","再","又","已","被","让","把","给","从","到","对","与","或","而","但","因","所","为","以","按","如","何","其","之","乎"],
  },
  {
    id: 'extras', name: 'The Sage', emoji: '🧩',
    desc: 'Common function words', color: '#FDCB6E',
    chars: ["没","着","使","什","么","怎","哪","些","个","共","太","非","极","当","较","挺","差","系"],
  },
  {
    id: 'athlete', name: 'The Athlete', emoji: '🏃',
    desc: 'Thinking & speaking', color: '#6BCB77',
    chars: ["说","看","想","知","道","会","能","要","用","做","写","听","读"],
  },
  {
    id: 'mover', name: 'The Mover', emoji: '🥋',
    desc: 'Physical actions', color: '#FD79A8',
    chars: ["吃","喝","睡","跑","走","坐","站","开","关","找","带","放","进","出","回","过","起","见","画","唱","玩","跳","笑","哭","感","恨","帮","告","诉","请","谢","拜","祝","希","望","相","信","试","借","送","拿","打","叫","买","卖"],
  },
  {
    id: 'builder', name: 'The Builder', emoji: '🏗️',
    desc: 'Planning & problem solving', color: '#B8860B',
    chars: ["计","划","安","排","管","理","解","处","析","研","究","调","查","发","现","证","选","决","定","成","败","赢","输","比","赛","参","加","始","结","束","完","准","备","功"],
  },
  {
    id: 'mountain', name: 'The Mountain', emoji: '🏔️',
    desc: 'Nature & elements', color: '#81ECEC',
    chars: ["水","火","木","金","山","田","花","草","树","雨","雪","风","云","光","星","石","土","叶","果","根","虫"],
  },
  {
    id: 'compass', name: 'The Compass', emoji: '🧭',
    desc: 'Directions & positions', color: '#74B9FF',
    chars: ["前","后","左","右","东","西","南","北","上","下","中"],
  },
  {
    id: 'wizard', name: 'The Wizard', emoji: '🧙',
    desc: 'Sizes, senses & basic attributes', color: '#A29BFE',
    chars: ["大","小","高","低","冷","热","新","快","多","少","几","两","力","心","手","目","口","长","短","重","轻","硬","软","直","弯","平","斜","深","浅","慢"],
  },
  {
    id: 'artist', name: 'The Artist', emoji: '🎨',
    desc: 'Colors & beauty', color: '#FF7675',
    chars: ["红","绿","蓝","黄","白","黑","香","臭","亮","暗","美","丑","甜","苦","辣","咸","酸"],
  },
  {
    id: 'thinker', name: 'The Thinker', emoji: '🧠',
    desc: 'Abstract qualities', color: '#6C5CE7',
    chars: ["错","真","假","容","易","难","简","单","复","杂","趣","无","聊","干","净","脏","整","洁","乱","普","通","特","别","样"],
  },
  {
    id: 'body', name: 'The Body', emoji: '🫀',
    desc: 'Body parts', color: '#FAB1A0',
    chars: ["头","脸","眼","耳","鼻","嘴","牙","舌","颈","肩","胸","腰","背","腿","脚","指","甲","皮","肤","骨","血","肉","肺","胃","脑","神"],
  },
  {
    id: 'chef', name: 'The Chef', emoji: '👨‍🍳',
    desc: 'Food & cooking', color: '#E17055',
    chars: ["饭","菜","蛋","粥","汤","包","糕","饼","糖","盐","油","酱","醋","蒜","姜","葱","椒","豆","腐","虾","蟹","猪","米","茶"],
  },
  {
    id: 'wardrobe', name: 'The Wardrobe', emoji: '👕',
    desc: 'Clothes & materials', color: '#DDA0DD',
    chars: ["衣","服","裤","裙","帽","鞋","袜","领","袖","扣","布","棉"],
  },
  {
    id: 'city', name: 'The City', emoji: '🏙️',
    desc: 'Places & buildings', color: '#636E72',
    chars: ["城","市","省","区","街","楼","层","室","院","园","馆","店","场","港","机","医","银","行","超","公","司","厂","农","村","外","海","世","界","球","宇","宙"],
  },
  {
    id: 'panda', name: 'The Panda', emoji: '🐼',
    desc: 'Animals & daily life', color: '#55EFC4',
    chars: ["猫","狗","鸟","鱼","牛","马","羊","鸡","名","电","话","工","门","房","车","路","气","身","面","里","方","事","色","点","线","角","圆","半"],
  },
  {
    id: 'tech', name: 'The Engineer', emoji: '💻',
    desc: 'Technology & science', color: '#0984E3',
    chars: ["网","络","件","程","序","据","息","科","技","创","智","器","联"],
  },
  {
    id: 'health', name: 'The Healer', emoji: '⚕️',
    desc: 'Health & medicine', color: '#00B894',
    chars: ["健","康","全","危","险","病","药","术","治","疗","检","休","运","动","锻","炼","营","养","维","素"],
  },
  {
    id: 'planet', name: 'The Planet', emoji: '🌿',
    desc: 'Nature & environment', color: '#27AE60',
    chars: ["自","然","环","境","保","护","资","源","空","污","染","态","候","温","湿","压","物","种","度"],
  },
  {
    id: 'commerce', name: 'The Merchant', emoji: '💼',
    desc: 'Work & economy', color: '#C0392B',
    chars: ["职","合","展","步","济","贸","价","格","收","入","支","利","润"],
  },
  {
    id: 'transport', name: 'The Traveller', emoji: '🚀',
    desc: 'Transport & movement', color: '#8E44AD',
    chars: ["船","飞","铁","交","租","摩","托"],
  },
];

// Map each char to its constellation
const CHAR_CONSTELLATION = {};
CONSTELLATIONS.forEach(c => {
  c.chars.forEach(ch => { CHAR_CONSTELLATION[ch] = c.id; });
});

// ── Plant Growth ───────────────────────────────
// Based on traceCount (number of successful 100% traces)

const PLANT_STAGES = [
  { min: 0, emoji: '🌑', label: 'Not started' },
  { min: 1, emoji: '🌱', label: 'Seed' },
  { min: 3, emoji: '🌸', label: 'Blooming' },
  { min: 5, emoji: '🌳', label: 'Full tree' },
];

function getPlantStage(traceCount) {
  let stage = PLANT_STAGES[0];
  for (const s of PLANT_STAGES) {
    if ((traceCount || 0) >= s.min) stage = s;
  }
  return stage;
}

// ── Streak Tracking ────────────────────────────

const STREAK_KEY = 'write_chinese_streak_v1';
const COTD_KEY   = 'write_chinese_cotd_v1';

function loadStreak() {
  try {
    return JSON.parse(localStorage.getItem(STREAK_KEY)) || { count: 0, lastDate: null };
  } catch (e) {
    return { count: 0, lastDate: null };
  }
}

function saveStreak(streak) {
  try { localStorage.setItem(STREAK_KEY, JSON.stringify(streak)); } catch (e) {}
}

function todayStr() {
  return new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
}

function recordStreakDay() {
  const streak = loadStreak();
  const today = todayStr();
  if (streak.lastDate === today) return streak; // already counted today

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().slice(0, 10);

  if (streak.lastDate === yStr) {
    streak.count += 1;
  } else {
    streak.count = 1; // streak broken, restart
  }
  streak.lastDate = today;
  saveStreak(streak);
  return streak;
}

function getStreakCount() {
  const streak = loadStreak();
  const today = todayStr();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().slice(0, 10);
  // Streak is still live if played today or yesterday
  if (streak.lastDate === today || streak.lastDate === yStr) return streak.count;
  return 0; // expired
}

// ── Character of the Day ───────────────────────

function getCOTDChar() {
  // Deterministic: based on days since epoch mod total characters
  const epoch = Math.floor(Date.now() / 86400000);
  const idx = epoch % CHARACTERS.length;
  return CHARACTERS[idx];
}

function loadCOTDRecord() {
  try {
    return JSON.parse(localStorage.getItem(COTD_KEY)) || {};
  } catch (e) { return {}; }
}

function isCOTDDoneToday() {
  const record = loadCOTDRecord();
  return record.date === todayStr() && record.done === true;
}

function markCOTDDone() {
  try {
    localStorage.setItem(COTD_KEY, JSON.stringify({ date: todayStr(), done: true }));
  } catch (e) {}
}

// ── Star Map Rendering ─────────────────────────

function renderStarMap(completedChars) {
  const container = document.getElementById('starmap-grid');
  if (!container) return;

  container.innerHTML = CONSTELLATIONS.map(c => {
    const total = c.chars.length;
    const lit = c.chars.filter(ch => completedChars[ch]).length;
    const pct = Math.round((lit / total) * 100);
    const complete = lit === total;

    const stars = c.chars.map((ch, i) => {
      const isLit = !!completedChars[ch];
      return `<div class="star-dot ${isLit ? 'lit' : ''}" title="${ch}" data-char="${ch}"></div>`;
    }).join('');

    return `
      <div class="constellation-card ${complete ? 'complete' : ''}"
           data-id="${c.id}"
           style="--c-color: ${c.color}">
        <div class="c-glow"></div>
        <div class="c-header">
          <span class="c-emoji">${c.emoji}</span>
          <div class="c-info">
            <div class="c-name">${c.name}</div>
            <div class="c-desc">${c.desc}</div>
          </div>
          ${complete ? '<div class="c-complete-badge">✨</div>' : ''}
        </div>
        <div class="star-field">${stars}</div>
        <div class="c-footer">
          <div class="c-progress-bar">
            <div class="c-progress-fill" style="width:${pct}%"></div>
          </div>
          <div class="c-count">${lit}/${total}</div>
        </div>
      </div>`;
  }).join('');

  // Tap star dot → trace that character
  container.querySelectorAll('.star-dot[data-char]').forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const charData = CHARACTERS.find(c => c.char === dot.dataset.char);
      if (charData) startTracing(charData);
    });
  });

  // Tap constellation card → show its chars
  container.querySelectorAll('.constellation-card').forEach(card => {
    card.addEventListener('click', () => {
      const c = CONSTELLATIONS.find(x => x.id === card.dataset.id);
      if (c) showConstellationDetail(c, completedChars);
    });
  });
}

function renderStarMapSummary(completedChars) {
  const totalStars = CHARACTERS.length;
  const litStars   = Object.keys(completedChars).length;
  const el = document.getElementById('starmap-summary');
  if (el) el.textContent = `⭐ ${litStars} / ${totalStars} stars lit`;

  const completeConstellations = CONSTELLATIONS.filter(c =>
    c.chars.every(ch => completedChars[ch])
  ).length;
  const el2 = document.getElementById('starmap-constellations');
  if (el2) el2.textContent = `✨ ${completeConstellations} / ${CONSTELLATIONS.length} constellations`;
}

// ── Constellation Detail Modal ─────────────────

function showConstellationDetail(constellation, completedChars) {
  const modal = document.getElementById('constellation-modal');
  const title = document.getElementById('modal-title');
  const subtitle = document.getElementById('modal-subtitle');
  const grid = document.getElementById('modal-char-grid');

  title.textContent = `${constellation.emoji} ${constellation.name}`;
  subtitle.textContent = constellation.desc;
  modal.style.setProperty('--c-color', constellation.color);

  grid.innerHTML = constellation.chars.map(ch => {
    const item = CHARACTERS.find(c => c.char === ch);
    const info = completedChars[ch];
    const traceCount = info ? (info.traceCount || 1) : 0;
    const plant = getPlantStage(traceCount);
    const isLit = !!info;

    return `
      <div class="modal-char-item ${isLit ? 'done' : ''}" data-char="${ch}">
        <div class="modal-char">${ch}</div>
        <div class="modal-plant">${plant.emoji}</div>
        <div class="modal-pinyin">${item ? item.pinyin : ''}</div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.modal-char-item').forEach(item => {
    item.addEventListener('click', () => {
      const charData = CHARACTERS.find(c => c.char === item.dataset.char);
      if (charData) {
        closeModal();
        startTracing(charData);
      }
    });
  });

  modal.classList.add('open');
}

function closeModal() {
  document.getElementById('constellation-modal').classList.remove('open');
}

// ── COTD Widget ────────────────────────────────

function renderCOTD(completedChars) {
  const cotd = getCOTDChar();
  const done = isCOTDDoneToday();
  const streak = getStreakCount();

  const widget = document.getElementById('cotd-widget');
  if (!widget) return;

  widget.innerHTML = `
    <div class="cotd-streak">
      <span class="streak-fire">🔥</span>
      <span class="streak-count">${streak}</span>
      <span class="streak-label">day streak</span>
    </div>
    <div class="cotd-body ${done ? 'cotd-done' : ''}" id="cotd-tap" role="button">
      <div class="cotd-label">Today's Character</div>
      <div class="cotd-char">${cotd.char}</div>
      <div class="cotd-pinyin">${cotd.pinyin}</div>
      <div class="cotd-meaning">${cotd.meaning}</div>
      ${done
        ? '<div class="cotd-status">✅ Completed today!</div>'
        : '<div class="cotd-status cotd-cta">Tap to practice →</div>'
      }
    </div>
  `;

  if (!done) {
    document.getElementById('cotd-tap').addEventListener('click', () => {
      startTracing(cotd);
    });
  }
}

// ── Memory Flash Mode ──────────────────────────

let memoryFlashActive = false;
let memoryCountdownTimer = null;

function isMemoryModeEligible(char, completedChars) {
  const info = completedChars[char];
  return info && (info.traceCount || 1) >= 1;
}

function enterMemoryFlash(writer, durationSec) {
  if (!writer) return;
  memoryFlashActive = true;

  const overlay = document.getElementById('memory-overlay');
  overlay.classList.remove('hidden');

  let count = durationSec;
  const countEl = document.getElementById('memory-count');

  const tick = () => {
    countEl.textContent = count;
    if (count <= 0) {
      // Hide only the outline guide — completed strokes stay visible as user draws
      writer.hideOutline();
      overlay.classList.add('hidden');
      document.getElementById('memory-mode-badge').classList.remove('hidden');
      return;
    }
    count--;
    memoryCountdownTimer = setTimeout(tick, 1000);
  };
  tick();
}

function exitMemoryFlash() {
  memoryFlashActive = false;
  clearTimeout(memoryCountdownTimer);
  const overlay = document.getElementById('memory-overlay');
  if (overlay) overlay.classList.add('hidden');
  const badge = document.getElementById('memory-mode-badge');
  if (badge) badge.classList.add('hidden');
}

function updateMemoryBtn(char, completedChars) {
  const btn = document.getElementById('memory-btn');
  if (!btn) return;
  if (isMemoryModeEligible(char, completedChars)) {
    btn.classList.remove('hidden');
  } else {
    btn.classList.add('hidden');
  }
}
