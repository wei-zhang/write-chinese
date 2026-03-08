/* =============================================
   Write Chinese — Main App Logic
   ============================================= */

'use strict';

// ── State ──────────────────────────────────────

const state = {
  currentChar:   null,   // { char, pinyin, meaning }
  completedChars: {},    // { char: { completedAt, bestScore, traceCount, lastTracedAt } }
  currentScore:  0,
  currentStroke: 0,
  totalStrokes:  0,
  writer:        null,
  isAnimating:   false,
  strokeScores:  [],
  memoryMode:    false,  // Memory Flash active
  // Race
  raceStartTime: null,
  raceSplits:    [],
  raceInterval:  null,
  raceRecord:    null,   // ghost record for current session
};

const STORAGE_KEY = 'write_chinese_progress_v2';
const GRADES_KEY  = 'write_chinese_grades_v1';

// ── Storage ────────────────────────────────────

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) state.completedChars = JSON.parse(saved);
  } catch (e) { state.completedChars = {}; }
}

function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.completedChars)); }
  catch (e) {}
}

function markCharComplete(char, score) {
  const prev = state.completedChars[char] || {};
  const newTraceCount = (prev.traceCount || 0) + 1;
  state.completedChars[char] = {
    completedAt:  prev.completedAt || new Date().toISOString(),
    bestScore:    Math.max(score, prev.bestScore || 0),
    traceCount:   newTraceCount,
    lastTracedAt: new Date().toISOString(),
  };
  saveProgress();
  return newTraceCount;
}

function isCharCompleted(char) {
  return !!state.completedChars[char];
}

// ── Grade System ───────────────────────────────

function getGrade(score) {
  if (score >= 100) return 'perfect';
  if (score >= 80)  return 'great';
  if (score >= 60)  return 'good';
  return null;
}

function gradeRank(grade) {
  return { good: 1, great: 2, perfect: 3 }[grade] || 0;
}

function gradeLabel(grade) {
  return { good: '👍 Good', great: '🌟 Great', perfect: '🎉 Perfect' }[grade] || '';
}

function getBestGrade(char) {
  if (state.completedChars[char]) return 'perfect';
  try {
    const grades = JSON.parse(localStorage.getItem(GRADES_KEY)) || {};
    return grades[char] || null;
  } catch (e) { return null; }
}

function saveBestGrade(char, grade) {
  try {
    const grades = JSON.parse(localStorage.getItem(GRADES_KEY)) || {};
    if (gradeRank(grade) > gradeRank(grades[char] || null)) {
      grades[char] = grade;
      localStorage.setItem(GRADES_KEY, JSON.stringify(grades));
    }
  } catch (e) {}
}

// ── Screen Navigation ──────────────────────────

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById(id);
  if (screen) screen.classList.add('active');
}

// ── Landing Screen ─────────────────────────────

function initLanding() {
  const input     = document.getElementById('search-input');
  const resultsEl = document.getElementById('search-results');
  const emptyEl   = document.getElementById('landing-empty');
  let rafId = null;

  // rAF debounce: fires on the very next paint frame (~16ms) instead of 150ms.
  input.addEventListener('input', () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      renderSearchResults(input.value.trim(), resultsEl, emptyEl);
      rafId = null;
    });
  });

  // On focus: if the field already has text (e.g. user tabbed back), show results instantly.
  input.addEventListener('focus', () => {
    if (input.value.trim()) {
      if (rafId) cancelAnimationFrame(rafId);
      renderSearchResults(input.value.trim(), resultsEl, emptyEl);
    }
  });

  // Event delegation — one pair of listeners on the container instead of 2×N per render.
  const handleResultSelect = (e) => {
    const item = e.target.closest('.result-item');
    if (!item) return;
    if (e.type === 'touchend') e.preventDefault(); // suppress the follow-up click
    const charData = CHARACTERS.find(c => c.char === item.dataset.char);
    if (charData) startTracing(charData);
  };
  resultsEl.addEventListener('click', handleResultSelect);
  resultsEl.addEventListener('touchend', handleResultSelect, { passive: false });

  // Idle DOM pre-warm: force the browser to calculate layout for .result-item once
  // so the first real render has warm CSS/layout caches.
  const warmup = () => {
    renderSearchResults('a', resultsEl, emptyEl);
    void resultsEl.offsetHeight; // force synchronous layout
    resultsEl.innerHTML = '';
    emptyEl.classList.remove('hidden');
  };
  if (window.requestIdleCallback) {
    requestIdleCallback(warmup, { timeout: 3000 });
  } else {
    setTimeout(warmup, 1200);
  }

  document.getElementById('surprise-btn').addEventListener('click', surpriseCharacter);
  document.getElementById('progress-btn').addEventListener('click', showProgressScreen);
  document.getElementById('starmap-btn').addEventListener('click', showStarMapScreen);
  document.getElementById('shop-btn').addEventListener('click', openShopScreen);
  document.getElementById('style-btn').addEventListener('click', openStylePicker);
}

function surpriseCharacter() {
  const char = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  startTracing(char);
}

function refreshLanding() {
  renderCOTD(state.completedChars);
}

function renderSearchResults(query, container, emptyEl) {
  if (!query) {
    container.innerHTML = '';
    emptyEl.classList.remove('hidden');
    return;
  }

  const results = searchCharacters(query);
  emptyEl.classList.add('hidden');

  if (results.length === 0) {
    container.innerHTML = `
      <div style="padding:24px;text-align:center;color:#999;">
        <div style="font-size:36px;margin-bottom:8px;">🔍</div>
        <p>No results for "<strong>${escapeHtml(query)}</strong>"</p>
        <p style="font-size:13px;color:#b2bec3;margin-top:6px;">
          Try pinyin like "ni" or "shui", or paste a character like 你</p>
      </div>`;
    return;
  }

  container.innerHTML = results.slice(0, 20).map(item => {
    const info = state.completedChars[item.char];
    const traceCount = info ? (info.traceCount || 1) : 0;
    const plant = getPlantStage(traceCount);
    return `
      <div class="result-item" data-char="${item.char}" role="button" tabindex="0">
        <div class="result-char">${item.char}</div>
        <div class="result-info">
          <div class="result-pinyin">${item.pinyin}</div>
          <div class="result-meaning">${item.meaning}</div>
        </div>
        <div style="font-size:20px;flex-shrink:0;">${traceCount > 0 ? plant.emoji : ''}</div>
      </div>`;
  }).join('');
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

// ── Tracing Screen ─────────────────────────────

function startTracing(charData) {
  state.currentChar  = charData;
  state.currentScore = 0;
  state.currentStroke = 0;
  state.isAnimating  = false;
  state.strokeScores = [];
  state.memoryMode   = false;

  // Reset race state
  state.raceStartTime = null;
  state.raceSplits    = [];
  state.raceRecord    = null;
  if (state.raceInterval) {
    clearInterval(state.raceInterval);
    state.raceInterval = null;
  }

  document.getElementById('tracing-char').textContent    = charData.char;
  document.getElementById('tracing-pinyin').textContent  = charData.pinyin;
  document.getElementById('completion-banner').style.display = 'none';
  document.getElementById('animate-btn').innerHTML       = '▶ Show';
  exitMemoryFlash();
  updateScore(0);

  // Show/hide memory button based on eligibility
  updateMemoryBtn(charData.char, state.completedChars);

  // Show/hide origin button based on etymology data
  const originBtn = document.getElementById('origin-btn');
  if (originBtn) {
    if (typeof hasEtymology === 'function' && hasEtymology(charData.char)) {
      originBtn.classList.remove('hidden');
    } else {
      originBtn.classList.add('hidden');
    }
  }

  showScreen('tracing-screen');
  setTimeout(() => initWriter(charData.char), 80);
}

async function loadCharData(char) {
  if (typeof CHAR_DATA_BUNDLE !== 'undefined' && CHAR_DATA_BUNDLE[char]) {
    return CHAR_DATA_BUNDLE[char];
  }
  try {
    const res = await fetch(`data/${encodeURIComponent(char)}.json`);
    if (res.ok) return await res.json();
  } catch (e) {}
  const res = await fetch(
    `https://cdn.jsdelivr.net/npm/hanzi-writer-data@latest/${encodeURIComponent(char)}.json`
  );
  if (!res.ok) throw new Error(`Cannot load: ${char}`);
  return await res.json();
}

async function initWriter(char) {
  if (state.writer) {
    try { state.writer.cancelAnimation(); } catch (e) {}
    state.writer = null;
  }

  const container = document.getElementById('hanzi-container');
  const size = calculateCanvasSize();
  container.style.width  = size + 'px';
  container.style.height = size + 'px';
  // Keep overlay elements, clear the rest
  const overlay = document.getElementById('memory-overlay');
  const badge   = document.getElementById('memory-mode-badge');
  container.innerHTML = '<div class="grid-diagonal"></div>';
  container.appendChild(overlay);
  container.appendChild(badge);

  let charData;
  try {
    charData = await loadCharData(char);
  } catch (e) {
    container.innerHTML = `
      <div style="color:rgba(255,255,255,0.5);text-align:center;padding:40px;font-size:15px;">
        <div style="font-size:50px;margin-bottom:12px;">⚠️</div>
        <p>Could not load character data.<br>Check your connection.</p>
      </div>`;
    return;
  }

  state.totalStrokes = charData.strokes.length;
  state.strokeScores = [];
  renderStrokeDots(state.totalStrokes);

  // Setup race bar
  state.raceRecord = getRaceRecord(char);
  const raceBar = document.getElementById('race-bar');
  if (state.raceRecord) {
    raceBar.classList.remove('hidden');
    document.getElementById('race-best').textContent =
      `Best: ${(state.raceRecord.bestTime / 1000).toFixed(1)}s`;
    document.getElementById('race-timer').textContent = '0.0s';
    updateRaceProgress(0, 0, state.totalStrokes);
  } else {
    raceBar.classList.add('hidden');
  }

  // Apply stroke style
  const selectedStyle = getSelectedStyle();
  const baseWidth = Math.max(6, Math.round(size * 0.015));

  // Transparent wrapper so glow filter follows stroke shapes, not the dark container rect
  const svgWrapper = document.createElement('div');
  svgWrapper.id = 'hanzi-svg-wrapper';
  container.appendChild(svgWrapper);

  state.writer = HanziWriter.create(svgWrapper, char, {
    width:               size,
    height:              size,
    padding:             Math.round(size * 0.08),
    showOutline:         true,
    strokeColor:         '#FFFFFF',
    outlineColor:        'rgba(255,255,255,0.13)',
    drawingColor:        selectedStyle.color,
    drawingWidth:        Math.round(baseWidth * selectedStyle.widthMult),
    showCharacter:       false,
    highlightOnComplete: true,
    highlightColor:      '#6BCB77',
    strokeFadeDuration:  400,
    charDataLoader:      (c, onComplete) => onComplete(charData),
  });

  // Apply glow / animation
  applyStyleGlow();

  state.writer.quiz({
    onMistake: () => {},
    onCorrectStroke: (strokeData) => {
      const completed = state.totalStrokes - strokeData.strokesRemaining;
      state.currentStroke = completed;
      updateStrokeDots(completed);

      const miss = strokeData.mistakesOnStroke || 0;
      const s = miss === 0 ? 100 : miss === 1 ? 70 : miss === 2 ? 45 : 20;
      state.strokeScores.push(s);
      const avg = state.strokeScores.reduce((a, b) => a + b, 0) / state.strokeScores.length;
      const completionRatio = state.strokeScores.length / state.totalStrokes;
      updateScore(Math.min(99, Math.round(avg * completionRatio)));

      // Race: start timer on first stroke
      if (!state.raceStartTime) {
        state.raceStartTime = Date.now();
        state.raceSplits    = [];
        // Start interval only if ghost record exists
        if (state.raceRecord) {
          state.raceInterval = setInterval(() => updateRaceTick(), 100);
        }
      }
      // Record split time
      if (state.raceStartTime) {
        state.raceSplits.push(Date.now() - state.raceStartTime);
      }
      // Immediately update race progress for "you" side
      if (state.raceRecord) {
        const elapsed = Date.now() - state.raceStartTime;
        const ghostStrokes = state.raceRecord.splits.filter(t => t <= elapsed).length;
        updateRaceProgress(completed, ghostStrokes, state.totalStrokes);
      }
    },
    onComplete: (summaryData) => {
      // Stop race timer
      if (state.raceInterval) {
        clearInterval(state.raceInterval);
        state.raceInterval = null;
      }
      const totalRaceTime = state.raceStartTime ? (Date.now() - state.raceStartTime) : null;

      updateStrokeDots(state.totalStrokes);

      const totalMistakes = (summaryData && summaryData.totalMistakes) || 0;
      let finalScore = Math.max(0, Math.min(100,
        100 - Math.round((totalMistakes / state.totalStrokes) * 22)
      ));

      // Memory mode bonus: +5 points for attempting memory mode
      if (state.memoryMode) finalScore = Math.min(100, finalScore + 5);

      updateScore(finalScore);
      state.currentScore = finalScore;

      setTimeout(() => {
        const charKey = state.currentChar.char;

        // Grade-based coins — only awarded when grade improves
        const currentGrade = getGrade(finalScore);
        const prevGrade    = getBestGrade(charKey);
        const gradeImproved = currentGrade && gradeRank(currentGrade) > gradeRank(prevGrade);

        if (gradeImproved) {
          const isEverFirst = prevGrade === null;
          const scoreCoins  = currentGrade === 'perfect' ? 20 : currentGrade === 'great' ? 10 : 5;
          const firstBonus  = isEverFirst ? 15 : 0;
          const label = isEverFirst
            ? `✨ First! +${scoreCoins + firstBonus} 🪙`
            : `${gradeLabel(currentGrade)} +${scoreCoins} 🪙`;
          addCoins(scoreCoins + firstBonus, label);
        }

        // Save grade for non-perfect scores (perfect tracked in completedChars)
        if (currentGrade && currentGrade !== 'perfect') {
          saveBestGrade(charKey, currentGrade);
        }

        if (finalScore >= 100) {
          const newCount = markCharComplete(charKey, finalScore);

          // COTD coins
          const cotd = getCOTDChar();
          if (charKey === cotd.char) {
            const cotdAlreadyDone = isCOTDDoneToday();
            markCOTDDone();
            recordStreakDay();
            if (!cotdAlreadyDone) {
              addCoins(30, '📅 COTD +30 🪙');
            }
          }

          // Race coins
          let newRecord = false;
          if (totalRaceTime) {
            newRecord = saveRaceRecord(charKey, totalRaceTime, state.raceSplits);
            if (newRecord) {
              addCoins(25, '🏆 New Record! +25 🪙');
            }
          }

          // Constellation coins
          checkConstellationCoins(charKey);

          showSuccessScreen(state.currentChar, newCount, newRecord, totalRaceTime);
        } else {
          const banner = document.getElementById('completion-banner');
          const grade = getGrade(finalScore);
          if (grade === 'great') {
            banner.textContent = `🌟 Great! ${finalScore}% — One more push for Perfect!`;
          } else if (grade === 'good') {
            banner.textContent = `👍 Good! ${finalScore}% — Try for 80%+ to reach Great!`;
          } else {
            banner.textContent = `Score: ${finalScore}% — Keep going!`;
          }
          banner.style.display = 'block';
        }
      }, 600);
    },
  });
}

// ── Race Helpers ────────────────────────────────

function updateRaceTick() {
  if (!state.raceStartTime || !state.raceRecord) return;
  const elapsed = Date.now() - state.raceStartTime;
  const timerEl = document.getElementById('race-timer');
  if (timerEl) timerEl.textContent = (elapsed / 1000).toFixed(1) + 's';
  const ghostStrokes = state.raceRecord.splits.filter(t => t <= elapsed).length;
  updateRaceProgress(state.currentStroke, ghostStrokes, state.totalStrokes);
}

function updateRaceProgress(youStrokes, ghostStrokes, total) {
  const youFill   = document.getElementById('race-fill-you');
  const ghostFill = document.getElementById('race-fill-ghost');
  const youCount  = document.getElementById('race-you-count');
  const ghostCount= document.getElementById('race-ghost-count');
  if (!youFill) return;
  youFill.style.width   = (total > 0 ? (youStrokes   / total) * 100 : 0) + '%';
  ghostFill.style.width = (total > 0 ? (ghostStrokes / total) * 100 : 0) + '%';
  if (youCount)   youCount.textContent   = `${youStrokes}/${total}`;
  if (ghostCount) ghostCount.textContent = `${ghostStrokes}/${total}`;
}

// ── Constellation Coin Check ────────────────────

function checkConstellationCoins(char) {
  if (typeof CONSTELLATIONS === 'undefined') return;
  const con = CONSTELLATIONS.find(c => c.chars.includes(char));
  if (!con) return;
  const othersAllDone = con.chars
    .filter(c => c !== char)
    .every(c => state.completedChars[c]);
  if (othersAllDone) {
    addCoins(100, `⭐ ${con.name} complete! +100 🪙`);
  }
}

// ── Canvas ─────────────────────────────────────

function calculateCanvasSize() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const available = Math.min(vw - 28, vh - 80 - 44 - 80 - 28);
  return Math.max(220, Math.min(available, 620));
}

function updateScore(score) {
  state.currentScore = score;
  const el = document.getElementById('score-value');
  if (!el) return;
  el.textContent = score + '%';
  el.style.color = score >= 80 ? '#6BCB77' : score >= 50 ? '#FFE66D' : '#FF8C69';
}

function renderStrokeDots(total) {
  const c = document.getElementById('stroke-progress');
  c.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.className = 'stroke-dot' + (i === 0 ? ' current' : '');
    dot.id = `dot-${i}`;
    c.appendChild(dot);
  }
}

function updateStrokeDots(completedCount) {
  for (let i = 0; i < state.totalStrokes; i++) {
    const dot = document.getElementById(`dot-${i}`);
    if (!dot) continue;
    if (i < completedCount)        dot.className = 'stroke-dot completed';
    else if (i === completedCount) dot.className = 'stroke-dot current';
    else                           dot.className = 'stroke-dot';
  }
}

function initTracing() {
  document.getElementById('back-btn').addEventListener('click', () => {
    if (state.writer) try { state.writer.cancelAnimation(); } catch (e) {}
    if (state.raceInterval) { clearInterval(state.raceInterval); state.raceInterval = null; }
    exitMemoryFlash();
    showScreen('landing-screen');
  });

  document.getElementById('hint-btn').addEventListener('click', () => {
    if (state.writer && !state.isAnimating)
      state.writer.highlightStroke(state.currentStroke);
  });

  document.getElementById('clear-btn').addEventListener('click', () => {
    if (!state.isAnimating) startTracing(state.currentChar);
  });

  document.getElementById('animate-btn').addEventListener('click', () => {
    if (!state.writer) return;
    if (state.isAnimating) {
      state.writer.cancelAnimation();
      state.isAnimating = false;
      document.getElementById('animate-btn').innerHTML = '▶ Show';
      return;
    }
    state.isAnimating = true;
    document.getElementById('animate-btn').innerHTML = '⏹ Stop';
    state.writer.animateCharacter({
      onComplete: () => {
        state.isAnimating = false;
        document.getElementById('animate-btn').innerHTML = '▶ Show';
      },
    });
  });

  // Memory Flash button
  document.getElementById('memory-btn').addEventListener('click', () => {
    if (!state.writer || state.isAnimating) return;
    state.memoryMode = true;
    startTracing(state.currentChar);
    setTimeout(() => {
      enterMemoryFlash(state.writer, 3);
    }, 500);
  });

  // Origin button in tracing
  document.getElementById('origin-btn').addEventListener('click', () => {
    if (state.currentChar && typeof openEtymologySheet === 'function') {
      openEtymologySheet(state.currentChar.char, state.currentChar.pinyin, state.currentChar.meaning);
    }
  });

  // Style picker button in tracing
  document.getElementById('style-btn-trace').addEventListener('click', openStylePicker);

  document.getElementById('hanzi-container').addEventListener('touchmove', e => {
    e.preventDefault();
  }, { passive: false });
}

// ── Success Screen ─────────────────────────────

function showSuccessScreen(charData, traceCount, newRecord, raceTime) {
  document.getElementById('success-char').textContent    = charData.char;
  document.getElementById('success-pinyin').textContent  = charData.pinyin;
  document.getElementById('success-meaning').textContent = charData.meaning;

  // Show plant growth message
  const plant = getPlantStage(traceCount);
  const prev  = getPlantStage(traceCount - 1);
  const plantMsg = document.getElementById('success-plant-msg');
  if (prev.emoji !== plant.emoji) {
    plantMsg.textContent = `${prev.emoji} → ${plant.emoji} Your plant grew!`;
  } else {
    plantMsg.textContent = `${plant.emoji} ${plant.label} (${traceCount}× traced)`;
  }

  // Race / record info
  const coinsDiv = document.getElementById('success-coins');
  if (coinsDiv) {
    let html = '';
    if (raceTime) {
      html += `<span>🏎️ ${(raceTime / 1000).toFixed(1)}s</span>`;
    }
    if (newRecord) {
      html += `<span class="success-record-badge">🏆 New Record!</span>`;
    }
    coinsDiv.innerHTML = html;
  }

  // Show/hide origin story button
  const successOriginBtn = document.getElementById('success-origin-btn');
  if (successOriginBtn) {
    if (typeof hasEtymology === 'function' && hasEtymology(charData.char)) {
      successOriginBtn.classList.remove('hidden');
    } else {
      successOriginBtn.classList.add('hidden');
    }
  }

  // Feature unlock notification on first completion
  const unlockDiv = document.getElementById('success-unlocks');
  if (unlockDiv) {
    if (traceCount === 1) {
      unlockDiv.innerHTML = `
        <div class="unlock-banner">
          <div class="unlock-title">🔓 Features Unlocked!</div>
          <div class="unlock-item">🏎️ <strong>Race Mode</strong> — trace again to race your ghost time</div>
          <div class="unlock-item">🧠 <strong>Memory Mode</strong> — trace from memory for a bonus</div>
        </div>`;
      unlockDiv.classList.remove('hidden');
    } else {
      unlockDiv.classList.add('hidden');
    }
  }

  // Show Memory Mode button only if eligible (traceCount >= 1 means it's now eligible)
  const memoryBtn = document.getElementById('success-memory-btn');
  if (memoryBtn) {
    if (traceCount >= 1) {
      memoryBtn.classList.remove('hidden');
    } else {
      memoryBtn.classList.add('hidden');
    }
  }

  showScreen('success-screen');
  spawnConfetti();
}

function initSuccess() {
  const goHome = () => {
    showScreen('landing-screen');
    refreshLanding();
    document.getElementById('search-input').value = '';
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('landing-empty').classList.remove('hidden');
  };

  document.getElementById('success-home-btn').addEventListener('click', goHome);
  document.getElementById('success-next-btn').addEventListener('click', surpriseCharacter);
  document.getElementById('success-starmap-btn').addEventListener('click', showStarMapScreen);

  document.getElementById('success-retrace-btn').addEventListener('click', () => {
    if (state.currentChar) startTracing(state.currentChar);
  });

  document.getElementById('success-memory-btn').addEventListener('click', () => {
    if (!state.currentChar) return;
    state.memoryMode = true;
    startTracing(state.currentChar);
    setTimeout(() => enterMemoryFlash(state.writer, 3), 500);
  });

  document.getElementById('success-origin-btn').addEventListener('click', () => {
    if (state.currentChar && typeof openEtymologySheet === 'function') {
      openEtymologySheet(state.currentChar.char, state.currentChar.pinyin, state.currentChar.meaning);
    }
  });
}

function spawnConfetti() {
  const container = document.getElementById('confetti-container');
  container.innerHTML = '';
  const colors = ['#FF6B35','#FFE66D','#6BCB77','#4ECDC4','#A8EDEA','#FED6E3','#C3B1E1'];
  for (let i = 0; i < 90; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    const size = 8 + Math.random() * 12;
    Object.assign(el.style, {
      left:              Math.random() * 100 + '%',
      width:             size + 'px',
      height:            size + 'px',
      background:        colors[Math.floor(Math.random() * colors.length)],
      animationDuration: (2 + Math.random() * 3) + 's',
      animationDelay:    (Math.random() * 1.5) + 's',
      borderRadius:      Math.random() > 0.5 ? '50%' : '2px',
    });
    container.appendChild(el);
  }
  setTimeout(() => { container.innerHTML = ''; }, 7000);
}

// ── Progress Screen (Garden) ───────────────────

function showProgressScreen() {
  const completed = Object.keys(state.completedChars);
  const total     = TOTAL_CHARACTERS;

  document.getElementById('progress-count').textContent  = `${completed.length} out of ${total}`;
  const pct = total > 0 ? Math.round((completed.length / total) * 100) : 0;
  document.getElementById('progress-bar-fill').style.width = pct + '%';

  const grid  = document.getElementById('progress-grid');
  const empty = document.getElementById('progress-empty');

  if (completed.length === 0) {
    grid.innerHTML = '';
    grid.classList.add('hidden');
    empty.classList.remove('hidden');
  } else {
    grid.classList.remove('hidden');
    empty.classList.add('hidden');

    const sorted = completed
      .map(char => ({ char, info: state.completedChars[char] }))
      .sort((a, b) => (b.info.traceCount || 1) - (a.info.traceCount || 1));

    grid.innerHTML = sorted.map(({ char, info }) => {
      const item  = CHARACTERS.find(c => c.char === char);
      if (!item) return '';
      const plant = getPlantStage(info.traceCount || 1);
      return `
        <div class="char-card" data-char="${char}" role="button" tabindex="0">
          <div class="char-card-plant">${plant.emoji}</div>
          <div class="char-card-char">${char}</div>
          <div class="char-card-pinyin">${item.pinyin}</div>
        </div>`;
    }).join('');

    grid.querySelectorAll('.char-card').forEach(card => {
      card.addEventListener('click', () => {
        const item = CHARACTERS.find(c => c.char === card.dataset.char);
        if (item) startTracing(item);
      });
    });
  }

  updateAllCoinDisplays();
  showScreen('progress-screen');
}

function initProgress() {
  document.getElementById('home-btn').addEventListener('click', () => {
    showScreen('landing-screen');
  });
}

// ── Star Map Screen ────────────────────────────

function showStarMapScreen() {
  renderStarMap(state.completedChars);
  renderStarMapSummary(state.completedChars);
  updateAllCoinDisplays();
  showScreen('starmap-screen');
}

function initStarMap() {
  document.getElementById('starmap-back-btn').addEventListener('click', () => {
    showScreen('landing-screen');
  });
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('constellation-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('constellation-modal')) closeModal();
  });
}

// ── Init ───────────────────────────────────────

function init() {
  loadProgress();
  searchCharacters('a'); // warm up JIT before first user keystroke
  initLanding();
  initTracing();
  initSuccess();
  initProgress();
  initStarMap();
  initShop();
  initStylePicker();
  if (typeof initEtymology === 'function') initEtymology();
  refreshLanding();     // render COTD widget
  updateAllCoinDisplays();
  showScreen('landing-screen');
}

document.addEventListener('DOMContentLoaded', init);

// Resize / rotation handler
let resizeTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const active = document.getElementById('tracing-screen').classList.contains('active');
    if (active && state.currentChar) initWriter(state.currentChar.char);
  }, 250);
});
