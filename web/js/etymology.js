/* =============================================
   Write Chinese — Etymology / Origin Data
   ============================================= */

'use strict';

// ── Etymology Data Bundle ──────────────────────
// Types: pictographic 象形 | indicative 指事 | compound 会意
//        phonosemantic 形声 | simplified 简化字
//
// Fields:
//   type     : string (above)
//   emoji    : string (concept illustration)
//   ancient  : string (ancient glyph hint, pictographic only)
//   story    : string (origin explanation)
//   components: [{ char, role:'meaning'|'sound', gloss }]  (compound/phonosemantic)

const ETYMOLOGY = {

  // ── Pictographic 象形 ──────────────────────────

  '日': { type:'pictographic', emoji:'☀️', ancient:'⊙',
    story:'A circle with a dot in the center — the dot showed the sun was solid, not just a ring. Over centuries it squared off into the modern form with a center stroke.' },

  '月': { type:'pictographic', emoji:'🌙', ancient:'𝌆',
    story:'The crescent moon, drawn as a curved outline with a short line inside. The ancient form shows the crescent clearly; it gradually became the modern rectangle with two inner strokes.' },

  '山': { type:'pictographic', emoji:'⛰️', ancient:'𝌘',
    story:'Three peaks rising from a base — a direct sketch of a mountain range. The middle peak is tallest, just as it appears in nature.' },

  '水': { type:'pictographic', emoji:'💧', ancient:'𝌛',
    story:'Flowing water shown as a central stream with ripples on each side. The ancient form had more wavy lines; they were simplified into the modern four-stroke form.' },

  '火': { type:'pictographic', emoji:'🔥', ancient:'𝌃',
    story:'Flames leaping upward — the two outer strokes are tongues of fire, the inner strokes are the base. The character looks like a small campfire seen head-on.' },

  '木': { type:'pictographic', emoji:'🌲', ancient:'𝌖',
    story:'A tree: vertical trunk, horizontal branches spreading out, and roots reaching down. The top strokes are branches, the bottom strokes are roots.' },

  '人': { type:'pictographic', emoji:'🚶', ancient:'𝌋',
    story:'A person walking, seen from the side — two strokes for two legs mid-stride. One of the most ancient and universal characters in Chinese writing.' },

  '口': { type:'pictographic', emoji:'👄', ancient:'□',
    story:'A simple square outline of an open mouth. The ancient oracle-bone form is a rounded rectangle; over time it became the neat square we write today.' },

  '手': { type:'pictographic', emoji:'✋', ancient:'𝌡',
    story:'A hand with five fingers spread out. The ancient form showed all five digits; modern simplification reduced it to three horizontal strokes and a hook.' },

  '目': { type:'pictographic', emoji:'👁️', ancient:'𝌌',
    story:'An eye turned sideways — the oval shape of the eye with the pupil shown as a horizontal line inside. The ancient form was more oval; it was rotated upright and squared.' },

  '耳': { type:'pictographic', emoji:'👂', ancient:'𝌌',
    story:'The outer shape traces the curve of an ear, with horizontal lines inside showing the folds of the inner ear. The ancient form was more curved.' },

  '鱼': { type:'pictographic', emoji:'🐟', ancient:'𝌐',
    story:'A fish in profile: head at top, body in the middle, tail at the bottom (the four-dot base). One of the most detailed pictographs in the oracle-bone script.' },

  '鸟': { type:'pictographic', emoji:'🐦', ancient:'𝌐',
    story:'A bird with a prominent eye (the dot), body, tail, and feet. The ancient form shows a bird perched; the modern simplified form keeps the eye-dot.' },

  '牛': { type:'pictographic', emoji:'🐄', ancient:'𝌋',
    story:'A cow\'s head seen from the front — the two horns curving up, and a vertical stroke for the face. Ancient oracle-bone script shows the horns most prominently.' },

  '马': { type:'pictographic', emoji:'🐎', ancient:'𝌖',
    story:'A horse in profile: head, mane, body, and four legs. The traditional form 馬 had four dots (legs/hooves); the simplified 马 reduced these to a single horizontal stroke.' },

  '羊': { type:'pictographic', emoji:'🐑', ancient:'𝌘',
    story:'A sheep\'s head seen from the front — the two curved horns, a horizontal line for the face, and vertical lines below. The horns are the key identifying feature.' },

  '虫': { type:'pictographic', emoji:'🐛', ancient:'𝌅',
    story:'Originally depicted a snake or worm coiled up, with a raised head. Over time it became a general classifier for insects, worms, and small creatures.' },

  '田': { type:'pictographic', emoji:'🌾', ancient:'⊞',
    story:'A bird\'s-eye view of rice paddies divided by paths — a square divided into four sections by crossing lines. Ancient Chinese agriculture shaped this character.' },

  '雨': { type:'pictographic', emoji:'🌧️', ancient:'𝌙',
    story:'Rain falling from clouds — the top horizontal stroke is the sky, the vertical and horizontal frame is the cloud, and the four dots are raindrops falling.' },

  '门': { type:'pictographic', emoji:'🚪', ancient:'𝌌',
    story:'Two door panels of a traditional gate, seen from the front. The traditional form 門 shows the full double door; the simplified 门 keeps the essential outline.' },

  '力': { type:'pictographic', emoji:'💪', ancient:'𝌋',
    story:'Originally depicted a plow — an agricultural tool requiring physical strength. The curved stroke is the blade, the vertical stroke is the handle. The meaning shifted from "plow" to "strength/effort".' },

  '石': { type:'pictographic', emoji:'🪨', ancient:'𝌕',
    story:'A cliff face (the top horizontal stroke) with a rock (the square 口 below) at its base. A stone fallen from a cliff — the original meaning was "cliff-stone".' },

  '土': { type:'pictographic', emoji:'🌍', ancient:'𝌛',
    story:'A mound of earth — two horizontal lines represent the ground surface, and a vertical stroke represents a lump of soil pushed up. Ancient Chinese saw earth as something that could be piled up.' },

  '心': { type:'pictographic', emoji:'❤️', ancient:'𝌌',
    story:'An anatomical drawing of the heart — the curved base represents the heart\'s chambers, and the three dots represent blood vessels or the pulsing motion. The most emotionally central character.' },

  '金': { type:'pictographic', emoji:'⭐', ancient:'𝌂',
    story:'Metal/gold shown as nuggets in the earth — the top part shows a roof or earth, and the dots originally represented metal ore deposits underground.' },

  '云': { type:'pictographic', emoji:'☁️', ancient:'𝌙',
    story:'Originally just two curved strokes showing swirling cloud shapes. Later 雨 (rain) was added above to distinguish it from the word "say" (云), giving us the modern cloud character.' },

  '光': { type:'pictographic', emoji:'✨', ancient:'𝌂',
    story:'A person (人) with rays of light radiating from their head — a person carrying a torch or standing in light. The upper strokes represent the fire or glow.' },

  '星': { type:'compound', emoji:'⭐',
    story:'Sun (日) + life/growth (生) — stars were understood as small suns scattered across the sky. The 生 component also contributed to the pronunciation in ancient Chinese.',
    components:[{char:'日',role:'meaning',gloss:'sun'},{char:'生',role:'sound',gloss:'shēng ≈ xīng'}] },

  '鸡': { type:'pictographic', emoji:'🐔', ancient:'𝌐',
    story:'Originally showed a rooster with a prominent crest. The simplified form 鸡 uses 又 (hand/again) plus 鸟 (bird) — a bird one grabs (a domestic fowl).',
    components:[{char:'鸟',role:'meaning',gloss:'bird'},{char:'又',role:'meaning',gloss:'hand'}] },

  '猫': { type:'phonosemantic', emoji:'🐱',
    story:'The dog/animal radical 犭signals it\'s an animal; 苗 (miáo, seedling) signals the sound — cats were named for their cry "māo" which resembles "苗".',
    components:[{char:'犭',role:'meaning',gloss:'animal'},{char:'苗',role:'sound',gloss:'miáo ≈ māo'}] },

  '狗': { type:'phonosemantic', emoji:'🐶',
    story:'The animal radical 犭marks it as a creature; 句 (gōu/jù) contributes the sound. The "gou" sound in 狗 echoes the yelp of a dog.',
    components:[{char:'犭',role:'meaning',gloss:'animal'},{char:'句',role:'sound',gloss:'gōu ≈ gǒu'}] },

  '花': { type:'phonosemantic', emoji:'🌸',
    story:'The grass/plant radical 艹 marks it as a plant; 化 (huà, to transform) signals the sound. Flowers are the transformative part of a plant\'s life cycle.',
    components:[{char:'艹',role:'meaning',gloss:'plant'},{char:'化',role:'sound',gloss:'huà ≈ huā'}] },

  '草': { type:'phonosemantic', emoji:'🌿',
    story:'The grass radical 艹 indicates a plant; 早 (zǎo, early/dawn) signals the sound. Grasses were associated with early growth at dawn.',
    components:[{char:'艹',role:'meaning',gloss:'plant'},{char:'早',role:'sound',gloss:'zǎo ≈ cǎo'}] },

  '叶': { type:'phonosemantic', emoji:'🍃',
    story:'The tree/wood radical 木 marks it as plant-related; 十 (shí) contributes to the sound. A leaf is the flat, spreading part of a tree.',
    components:[{char:'木',role:'meaning',gloss:'tree'},{char:'十',role:'sound',gloss:'shí ≈ yè'}] },

  '果': { type:'pictographic', emoji:'🍎', ancient:'𝌖',
    story:'A tree (木) with a round fruit hanging in it — the 田-like shape on top represents fruit clusters. The character literally pictures fruit growing on a tree.' },

  '根': { type:'phonosemantic', emoji:'🌱',
    story:'The tree/wood radical 木 indicates a plant part; 艮 (gèn) signals the sound — it also carries the meaning of "firm/stubborn", just as roots anchor a tree.',
    components:[{char:'木',role:'meaning',gloss:'tree'},{char:'艮',role:'sound',gloss:'gèn ≈ gēn'}] },

  '雪': { type:'compound', emoji:'❄️',
    story:'Rain (雨) + broom (彗, simplified as 彐/手) — snow is rain that can be swept up (swept/brushed away). The sweeping motion distinguishes snow from rain.',
    components:[{char:'雨',role:'meaning',gloss:'rain'},{char:'彐',role:'meaning',gloss:'sweep'}] },

  '风': { type:'phonosemantic', emoji:'💨',
    story:'The original character showed a phoenix — wind was seen as caused by the great bird\'s wings. The simplified 风 keeps the outer frame 几 and inner 又.',
    components:[{char:'几',role:'meaning',gloss:'frame'},{char:'又',role:'sound',gloss:'fēng'}] },

  '舌': { type:'pictographic', emoji:'👅', ancient:'𝌌',
    story:'A mouth (口) with something sticking out of it — the top stroke represents the tongue protruding from the mouth. A simple, direct depiction.' },

  '牙': { type:'pictographic', emoji:'🦷', ancient:'𝌂',
    story:'Interlocking teeth drawn in cross-section — two curves hooking around each other, like upper and lower teeth meeting. The ancient form was more detailed.' },

  '鼻': { type:'compound', emoji:'👃',
    story:'Self (自, which originally depicted a nose!) + 畀 (sound component). The character 自 originally meant "nose" — people pointed to their nose to mean "self/I".',
    components:[{char:'自',role:'meaning',gloss:'self/nose'},{char:'畀',role:'sound',gloss:'bì ≈ bí'}] },

  '眼': { type:'phonosemantic', emoji:'👁️',
    story:'The eye radical 目 indicates this is about seeing; 艮 (gèn) provides the sound. Together they give us 眼, the general word for eye.',
    components:[{char:'目',role:'meaning',gloss:'eye'},{char:'艮',role:'sound',gloss:'gèn ≈ yǎn'}] },

  // ── Indicative 指事 ────────────────────────────

  '一': { type:'indicative', emoji:'☝️',
    story:'The simplest possible character — a single horizontal stroke indicating the number one. In ancient Chinese philosophy, one (一) was the origin of all things.' },

  '二': { type:'indicative', emoji:'✌️',
    story:'Two horizontal strokes for the number two. The upper stroke is thinner, the lower stroke is thicker — a subtle visual distinction to tell them apart.' },

  '三': { type:'indicative', emoji:'🖖',
    story:'Three horizontal strokes for the number three. Beyond three, Chinese switched to more complex characters — three strokes was the practical limit for this system.' },

  '上': { type:'indicative', emoji:'⬆️',
    story:'A short stroke above a line indicates "up" or "above". The line represents a surface; the mark above it shows the direction. The opposite of 下 (down).' },

  '下': { type:'indicative', emoji:'⬇️',
    story:'A short stroke below a line indicates "down" or "below". The mark under the horizontal surface points downward. The direct opposite of 上 (up).' },

  '本': { type:'indicative', emoji:'🌳',
    story:'A tree (木) with a dot or short stroke at its base — indicating the root. The "base/origin/root" meaning comes from marking the bottom of a tree.' },

  '末': { type:'indicative', emoji:'🌿',
    story:'A tree (木) with a stroke at its top — indicating the tip of the branches, hence "end" or "tip". The opposite of 本 (root/base).' },

  // ── Compound 会意 ─────────────────────────────

  '明': { type:'compound', emoji:'✨',
    story:'Sun (日) + Moon (月) — the two great lights of the sky together mean "bright" and "clear". When both luminaries shine, everything is illuminated.',
    components:[{char:'日',role:'meaning',gloss:'sun'},{char:'月',role:'meaning',gloss:'moon'}] },

  '好': { type:'compound', emoji:'❤️',
    story:'Woman (女) + child (子) — a woman with a child by her side. This was considered the ideal image of goodness and happiness in ancient Chinese society.',
    components:[{char:'女',role:'meaning',gloss:'woman'},{char:'子',role:'meaning',gloss:'child'}] },

  '休': { type:'compound', emoji:'😴',
    story:'Person (人/亻) + tree (木) — a person leaning against a tree to rest. A vivid picture of taking a break in the shade.',
    components:[{char:'亻',role:'meaning',gloss:'person'},{char:'木',role:'meaning',gloss:'tree'}] },

  '林': { type:'compound', emoji:'🌲',
    story:'Two trees (木 + 木) side by side — a grove or forest. Three trees together make 森 (dense forest). Numbers of trees visually indicate the density of woodland.',
    components:[{char:'木',role:'meaning',gloss:'tree'},{char:'木',role:'meaning',gloss:'tree'}] },

  '男': { type:'compound', emoji:'👨',
    story:'Field (田) + strength/plow (力) — the person who uses strength to work the fields. In agricultural society, this defined the male role.',
    components:[{char:'田',role:'meaning',gloss:'field'},{char:'力',role:'meaning',gloss:'strength'}] },

  '鸣': { type:'compound', emoji:'🐦',
    story:'Mouth (口) + bird (鸟) — a bird using its mouth; the call or song of a bird. Extended to mean any resonant sound.',
    components:[{char:'口',role:'meaning',gloss:'mouth'},{char:'鸟',role:'meaning',gloss:'bird'}] },

  '看': { type:'compound', emoji:'👀',
    story:'Hand (手/𠂉) shielding above + eye (目) — a person shading their eyes with their hand to see into the distance. The classic gesture of looking far away.',
    components:[{char:'𠂉',role:'meaning',gloss:'hand shade'},{char:'目',role:'meaning',gloss:'eye'}] },

  '家': { type:'compound', emoji:'🏠',
    story:'Roof (宀) + pig (豕) — in ancient China, keeping pigs under the family roof was a sign of a proper household. The pig was the most important domestic animal.',
    components:[{char:'宀',role:'meaning',gloss:'roof'},{char:'豕',role:'meaning',gloss:'pig'}] },

  '安': { type:'compound', emoji:'☮️',
    story:'Roof (宀) + woman (女) — a woman safe under a roof, at peace. The concept of security and calm was personified as a woman protected in her home.',
    components:[{char:'宀',role:'meaning',gloss:'roof'},{char:'女',role:'meaning',gloss:'woman'}] },

  '众': { type:'compound', emoji:'👥',
    story:'Three people (人人人) — many people together form a crowd. The number three in classical Chinese often meant "many" rather than literally three.',
    components:[{char:'人',role:'meaning',gloss:'person'},{char:'人',role:'meaning',gloss:'person'},{char:'人',role:'meaning',gloss:'person'}] },

  '国': { type:'compound', emoji:'🏴',
    story:'A boundary/enclosure (口/囗) + jade/king (玉) — a territory that contains something precious and ruled over. The simplified form replaced the traditional 國.',
    components:[{char:'囗',role:'meaning',gloss:'boundary'},{char:'玉',role:'meaning',gloss:'jade/precious'}] },

  '字': { type:'compound', emoji:'📝',
    story:'Roof (宀) + child (子) — a child born under a roof; characters/writing were seen as children born from the home of learning. Also related to the "birth" of new words.',
    components:[{char:'宀',role:'meaning',gloss:'roof'},{char:'子',role:'meaning',gloss:'child/birth'}] },

  '森': { type:'compound', emoji:'🌳',
    story:'Three trees (木木木) — even more trees than 林 (two trees = grove). Three of anything in classical Chinese indicated abundance or a great many.',
    components:[{char:'木',role:'meaning',gloss:'tree'},{char:'木',role:'meaning',gloss:'tree'},{char:'木',role:'meaning',gloss:'tree'}] },

  '炎': { type:'compound', emoji:'🔥',
    story:'Two fire characters (火火) stacked — fire upon fire, hence extremely hot or blazing. The name of a legendary Chinese ancestor, Emperor Yan, uses this character.',
    components:[{char:'火',role:'meaning',gloss:'fire'},{char:'火',role:'meaning',gloss:'fire'}] },

  '比': { type:'compound', emoji:'👫',
    story:'Two people (人人) standing side by side — to compare, to place things next to each other. When two people stand together you naturally compare them.',
    components:[{char:'人',role:'meaning',gloss:'person'},{char:'人',role:'meaning',gloss:'person'}] },

  '从': { type:'compound', emoji:'👣',
    story:'One person (人) following another (人) — to follow, to comply with. The image of one person walking behind another captures the idea of following.',
    components:[{char:'人',role:'meaning',gloss:'person (leader)'},{char:'人',role:'meaning',gloss:'person (follower)'}] },

  // ── Phono-semantic 形声 ────────────────────────

  '妈': { type:'phonosemantic', emoji:'👩',
    story:'Woman (女) signals the meaning; horse (马, mǎ) signals the sound. "Māo" (cat), "māo-māo" sounds of speech, and "mā" (mother) all share this syllable cluster.',
    components:[{char:'女',role:'meaning',gloss:'woman'},{char:'马',role:'sound',gloss:'mǎ ≈ mā'}] },

  '清': { type:'phonosemantic', emoji:'💧',
    story:'Water radical (氵) signals liquid clarity; 青 (qīng, blue-green) provides the sound and a hint of meaning — clear, blue water.',
    components:[{char:'氵',role:'meaning',gloss:'water'},{char:'青',role:'sound',gloss:'qīng ≈ qīng'}] },

  '情': { type:'phonosemantic', emoji:'💕',
    story:'Heart radical (忄) signals emotion; 青 (qīng) provides the sound. Feelings and emotions come from the heart — 情 is the emotional side of the heart.',
    components:[{char:'忄',role:'meaning',gloss:'heart/feeling'},{char:'青',role:'sound',gloss:'qīng ≈ qíng'}] },

  '请': { type:'phonosemantic', emoji:'🙏',
    story:'Speech radical (讠) signals verbal communication; 青 (qīng) provides the sound. To please/invite/request — something you say politely with words.',
    components:[{char:'讠',role:'meaning',gloss:'speech'},{char:'青',role:'sound',gloss:'qīng ≈ qǐng'}] },

  '海': { type:'phonosemantic', emoji:'🌊',
    story:'Water radical (氵) marks it as water-related; 每 (měi) provides the sound. The sea is the great body of water — the water radical anchors the meaning.',
    components:[{char:'氵',role:'meaning',gloss:'water'},{char:'每',role:'sound',gloss:'měi ≈ hǎi'}] },

  '洋': { type:'phonosemantic', emoji:'🌍',
    story:'Water radical (氵) indicates water; 羊 (yáng, sheep) provides the sound. 洋 originally meant a vast body of water, later extended to "foreign/western".',
    components:[{char:'氵',role:'meaning',gloss:'water'},{char:'羊',role:'sound',gloss:'yáng ≈ yáng'}] },

  '树': { type:'phonosemantic', emoji:'🌳',
    story:'Wood/tree radical (木) indicates a tree; 对/尌 provides the sound component. 树 replaced an older form — trees are the essential wood-producing plants.',
    components:[{char:'木',role:'meaning',gloss:'wood/tree'},{char:'尌',role:'sound',gloss:'zhù ≈ shù'}] },

  '桌': { type:'phonosemantic', emoji:'🪑',
    story:'Wood radical (木) shows it\'s made of wood; 卓 (zhuō, outstanding/tall) provides both sound and a hint — a table stands up tall.',
    components:[{char:'木',role:'meaning',gloss:'wood'},{char:'卓',role:'sound',gloss:'zhuō ≈ zhuō'}] },

  '语': { type:'phonosemantic', emoji:'💬',
    story:'Speech radical (讠) marks it as language-related; 吾 (wú, I/me in classical Chinese) provides the sound. Language is how "I" communicate with others.',
    components:[{char:'讠',role:'meaning',gloss:'speech'},{char:'吾',role:'sound',gloss:'wú ≈ yǔ'}] },

  '话': { type:'phonosemantic', emoji:'🗣️',
    story:'Speech radical (讠) indicates spoken words; 舌 (shé, tongue) provides the sound and a vivid hint — speech comes from the tongue.',
    components:[{char:'讠',role:'meaning',gloss:'speech'},{char:'舌',role:'sound',gloss:'shé ≈ huà'}] },

  '说': { type:'phonosemantic', emoji:'💬',
    story:'Speech radical (讠) shows verbal activity; 兑 (duì) provides the sound. To speak or explain — an act of verbal communication.',
    components:[{char:'讠',role:'meaning',gloss:'speech'},{char:'兑',role:'sound',gloss:'duì ≈ shuō'}] },

  '问': { type:'phonosemantic', emoji:'❓',
    story:'Mouth (口) inside a gate (门) — a mouth at a door asking "who\'s there?" The image of someone knocking and asking a question.',
    components:[{char:'门',role:'meaning',gloss:'gate/door'},{char:'口',role:'meaning',gloss:'mouth'}] },

  '读': { type:'phonosemantic', emoji:'📖',
    story:'Speech radical (讠) marks it as language; 卖 (mài) provides the sound. To read is to voice words — reading aloud was once the standard method.',
    components:[{char:'讠',role:'meaning',gloss:'speech'},{char:'卖',role:'sound',gloss:'mài ≈ dú'}] },

  '写': { type:'phonosemantic', emoji:'✍️',
    story:'The simplified 写 comes from 寫 — roof (宀) + a magpie (舄). Writing was seen as capturing speech under cover, as a bird captures something. The simplified form retains the key strokes.',
    components:[{char:'冖',role:'meaning',gloss:'cover'},{char:'与',role:'sound',gloss:'yǔ ≈ xiě'}] },

  '学': { type:'phonosemantic', emoji:'📚',
    story:'The simplified 学 comes from 學 — showing hands exchanging knowledge (爻) under a roof (宀) with a child (子) below. Learning happens under guidance at home.',
    components:[{char:'冖',role:'meaning',gloss:'roof/shelter'},{char:'子',role:'meaning',gloss:'child'}] },

  '教': { type:'compound', emoji:'🎓',
    story:'To strike/motivate (攴) + filial learning (孝, child learning from parent) — teaching was once physical instruction, guiding a child through learning by example.',
    components:[{char:'孝',role:'meaning',gloss:'filial learning'},{char:'攴',role:'meaning',gloss:'to guide/strike'}] },

  '书': { type:'simplified', emoji:'📕',
    story:'The simplified 书 comes from 書 — a brush (聿) writing — depicting a hand holding a brush over a flat surface. The simplification kept just the essential brush strokes.' },

  '车': { type:'simplified', emoji:'🚗',
    story:'The traditional 車 showed a chariot from above: two wheels, an axle, and a cart body. The simplified 车 preserves the core structure — a wheel, axle, and body in fewer strokes.' },

  '门': { type:'pictographic', emoji:'🚪', ancient:'𝌌',
    story:'Two door panels of a traditional gate, seen from the front. The traditional form 門 shows the full double door with all its bars; simplified 门 keeps the essential outline.' },

  '来': { type:'simplified', emoji:'➡️',
    story:'The traditional 來 was a pictograph of a wheat plant with the top grain and leaves. It was borrowed phonetically for "to come" (lái). Simplified 来 keeps the basic wheat shape.' },

  '电': { type:'simplified', emoji:'⚡',
    story:'The traditional 電 showed rain (雨) plus the winding path of lightning (申). The simplified 电 strips this down to just the essential lightning bolt shape within a minimal frame.' },

  '时': { type:'phonosemantic', emoji:'⏰',
    story:'Sun radical (日) marks it as time-related (the sun marks time); 寺 (sì, temple) provides the sound. Temple bells once marked the hours of day.',
    components:[{char:'日',role:'meaning',gloss:'sun/time'},{char:'寺',role:'sound',gloss:'sì ≈ shí'}] },

  '间': { type:'phonosemantic', emoji:'🚪',
    story:'Gate (门) + sun (日) — sunlight streaming through the gap of a gate or door. The space or gap between two things — and by extension, "between" or "a room".',
    components:[{char:'门',role:'meaning',gloss:'gate'},{char:'日',role:'meaning',gloss:'sun/light'}] },

  '年': { type:'pictographic', emoji:'🌾', ancient:'𝌘',
    story:'A person (人) carrying a bundle of grain (禾) — the annual harvest. A year was defined by the cycle of planting and harvesting. The character evolved from showing the harvest.' },

  '天': { type:'indicative', emoji:'☀️',
    story:'A person (大, a person with arms spread wide) with a mark above their head — the sky is what is above a person. The "above a person" indicator became the word for sky/heaven.' },

  '地': { type:'phonosemantic', emoji:'🌍',
    story:'Earth radical (土) indicates ground; 也 (yě) provides the sound. Earth is the fundamental ground beneath us — the complement of 天 (sky/heaven).',
    components:[{char:'土',role:'meaning',gloss:'earth'},{char:'也',role:'sound',gloss:'yě ≈ dì'}] },

  '大': { type:'pictographic', emoji:'🤸', ancient:'𝌋',
    story:'A person (人) with arms spread wide — a big person, showing maximum size with outstretched arms. The larger the stance, the bigger the sense of scale.' },

  '小': { type:'indicative', emoji:'🤏',
    story:'Three small dots — tiny specks showing something small and scattered. The dots represent fragments of something broken into tiny pieces.' },

  '中': { type:'indicative', emoji:'🎯',
    story:'A vertical line passing through the middle of a square/rectangle — the center. Hitting the center of a target. Extended to mean "middle" and "China" (the central kingdom).' },

  '长': { type:'pictographic', emoji:'👴', ancient:'𝌖',
    story:'Originally depicted an old person with long flowing hair — long hair was a sign of age and wisdom. The character means "long" in length and also "to grow/elder".' },

  '高': { type:'pictographic', emoji:'🏯', ancient:'𝌂',
    story:'A tall tower or pavilion — the ancient form showed a multi-storied building with a high roof. Tall structures were among the most impressive things in ancient China.' },

  '多': { type:'compound', emoji:'🌙🌙',
    story:'Two moons (夕 + 夕, evening/night) — many evenings have passed, hence "many" or "a lot". The repetition of the evening symbol creates the idea of multiplicity.',
    components:[{char:'夕',role:'meaning',gloss:'evening'},{char:'夕',role:'meaning',gloss:'evening'}] },

  '少': { type:'indicative', emoji:'🤏',
    story:'A small (小) version with a stroke removed — even less than small. The reduction of strokes from 小 indicates an even smaller quantity.' },

  '白': { type:'pictographic', emoji:'☀️', ancient:'𝌂',
    story:'The sun (日) rising — the moment when light breaks and everything turns white/bright. A dot above a horizontal stroke inside the sun shape shows the first light of dawn.' },

  '黑': { type:'compound', emoji:'🖤',
    story:'Fire/soot (炎) + window (囱) — the blackening soot from fire going up through a chimney window. Soot was the original black material. The character was later stylized.',
    components:[{char:'炎',role:'meaning',gloss:'soot/fire'},{char:'囱',role:'meaning',gloss:'chimney'}] },

  '红': { type:'phonosemantic', emoji:'🔴',
    story:'Silk radical (纟) originally referred to the color of certain silk threads; 工 (gōng, work) provides the sound. Red silk was among the most valued materials in ancient China.',
    components:[{char:'纟',role:'meaning',gloss:'silk/color'},{char:'工',role:'sound',gloss:'gōng ≈ hóng'}] },

  '绿': { type:'phonosemantic', emoji:'💚',
    story:'Silk radical (纟) indicates a textile color; 录 (lù) provides the sound. Green was originally the color of certain plant-dyed silk fabrics.',
    components:[{char:'纟',role:'meaning',gloss:'silk/color'},{char:'录',role:'sound',gloss:'lù ≈ lǜ'}] },

  '蓝': { type:'phonosemantic', emoji:'💙',
    story:'Grass radical (艹) indicates a plant origin — blue was extracted from the indigo plant 蓼蓝; 监 (jiān) provides the sound.',
    components:[{char:'艹',role:'meaning',gloss:'plant'},{char:'监',role:'sound',gloss:'jiān ≈ lán'}] },

  '黄': { type:'pictographic', emoji:'💛', ancient:'𝌂',
    story:'Originally showed a person wearing a pendant — yellow jade ornaments were prized. Yellow became associated with earth (in the five elements) and thus with imperial power.' },

  '我': { type:'phonosemantic', emoji:'🤺', ancient:'𝌋',
    story:'Originally depicted a weapon — a halberd or toothed spear. It was borrowed phonetically to write the first-person pronoun "wǒ" (I/me). Ancient warriors identified with their weapons.',
    components:[{char:'手',role:'meaning',gloss:'hand'},{char:'戈',role:'sound',gloss:'gē ≈ wǒ'}] },

  '你': { type:'phonosemantic', emoji:'👉',
    story:'Person radical (亻) indicates a human; 尔 (ěr, an archaic word for "you") provides both sound and meaning. The modern "you" in everyday speech.',
    components:[{char:'亻',role:'meaning',gloss:'person'},{char:'尔',role:'sound',gloss:'ěr ≈ nǐ'}] },

  '他': { type:'phonosemantic', emoji:'👨',
    story:'Person radical (亻) indicates a human; 也 (yě) provides the sound. The masculine third person. Originally the same character as 她 before gender-specific characters were created.',
    components:[{char:'亻',role:'meaning',gloss:'person'},{char:'也',role:'sound',gloss:'yě ≈ tā'}] },

  '她': { type:'phonosemantic', emoji:'👩',
    story:'Woman radical (女) indicates female; 也 (yě) provides the sound. This character was invented in the early 20th century to translate the European gendered "she/her".',
    components:[{char:'女',role:'meaning',gloss:'woman'},{char:'也',role:'sound',gloss:'yě ≈ tā'}] },

  '们': { type:'phonosemantic', emoji:'👥',
    story:'Person radical (亻) indicates people; 门 (mén, gate) provides the sound. The suffix 们 makes pronouns and some nouns plural — 我们 (we), 你们 (you all).',
    components:[{char:'亻',role:'meaning',gloss:'person'},{char:'门',role:'sound',gloss:'mén ≈ men'}] },

  '是': { type:'compound', emoji:'☀️',
    story:'Sun (日) + correct/right (正) — the sun is the most correct/reliable timekeeper. Extended to mean "to be" or "is/are". The sun\'s rising is the one thing that is always right.',
    components:[{char:'日',role:'meaning',gloss:'sun'},{char:'正',role:'meaning',gloss:'correct'}] },

  '不': { type:'pictographic', emoji:'🚫', ancient:'𝌂',
    story:'Originally showed a bird flying up to the sky — something going away and not returning; hence "not" or "no". The character became the standard negation particle.' },

  '有': { type:'compound', emoji:'🤲',
    story:'Hand (又/𠂇) + meat/flesh (月/肉) — a hand holding meat. To have something in hand. The meat component shows possession of something valuable.',
    components:[{char:'𠂇',role:'meaning',gloss:'hand'},{char:'月',role:'meaning',gloss:'meat/flesh'}] },

  '在': { type:'phonosemantic', emoji:'📍',
    story:'Earth/ground radical (土) indicates location; 才 (cái) provides the sound. To be located at a place, to exist in a position.',
    components:[{char:'土',role:'meaning',gloss:'earth/place'},{char:'才',role:'sound',gloss:'cái ≈ zài'}] },

  '和': { type:'phonosemantic', emoji:'🤝',
    story:'Grain/mouth (禾+口) or speech (口) + harmony (龠 simplified to 禾) — the harmony of voices/grains together. The character expresses joining and balance.',
    components:[{char:'禾',role:'meaning',gloss:'grain/harmony'},{char:'口',role:'sound',gloss:'hé'}] },

  '的': { type:'phonosemantic', emoji:'🎯',
    story:'White (白) + ladle/spoon (勺) — 的 was originally a word for a bright target or bull\'s-eye (white circle). It was borrowed as a grammatical particle ("\'s", "of").',
    components:[{char:'白',role:'meaning',gloss:'white/bright'},{char:'勺',role:'sound',gloss:'sháo ≈ de'}] },

  '了': { type:'pictographic', emoji:'👶', ancient:'𝌋',
    story:'Originally depicted a swaddled baby with arms wrapped — a child completed (wrapped up). Used as a particle to mark completed actions or changed states.' },

  '也': { type:'pictographic', emoji:'🐍', ancient:'𝌅',
    story:'Originally depicted a snake — a curved, sinuous form. It was borrowed phonetically to write various particles and pronouns. The snake shape became the grammatical particle "also/too".' },

  '都': { type:'phonosemantic', emoji:'🏙️',
    story:'City radical (阝/邑) indicates a place; 者 (zhě) provides the sound. Originally meant a capital city — a place where everyone gathers. Extended to mean "all, both".',
    components:[{char:'阝',role:'meaning',gloss:'city'},{char:'者',role:'sound',gloss:'zhě ≈ dōu'}] },

  '就': { type:'phonosemantic', emoji:'👉',
    story:'Tall/high (京) + dog/animal crouching (尤) — approaching and settling. The sense of moving toward something and settling there — hence "then, just, right away".',
    components:[{char:'京',role:'meaning',gloss:'tall/approaching'},{char:'尤',role:'sound',gloss:'yóu ≈ jiù'}] },

  '会': { type:'compound', emoji:'🤝',
    story:'Roof/cover (亼) + a person meeting (曾 simplified) — people gathering under one roof. To meet, to assemble; extended to "can, know how to" (from learning together).',
    components:[{char:'亼',role:'meaning',gloss:'assemble'},{char:'曰',role:'meaning',gloss:'speak'}] },

  '能': { type:'pictographic', emoji:'🐻', ancient:'𝌖',
    story:'Originally depicted a bear — a strong, capable creature. The bear\'s ability and strength gave rise to the meaning "can, be able to". The radical shows the animal form.' },

  '没': { type:'phonosemantic', emoji:'🌊',
    story:'Water radical (氵) indicates immersion; 殳 (shū) provides the sound. To sink beneath water — hence "to not have" or "to have not yet done".',
    components:[{char:'氵',role:'meaning',gloss:'water'},{char:'殳',role:'sound',gloss:'shū ≈ méi'}] },

  '来': { type:'simplified', emoji:'⬅️',
    story:'The traditional 來 depicted a wheat plant — grains drooping down as they ripen, "coming" toward harvest. The plant shape was borrowed for the verb "to come" (lái).' },

  '去': { type:'compound', emoji:'➡️',
    story:'A lid (大 modified) on top of a container — something departing, leaving the container. The visual of something leaving its vessel became the word for "to go".',
    components:[{char:'大',role:'meaning',gloss:'person/top'},{char:'厶',role:'meaning',gloss:'enclosure'}] },

  '到': { type:'phonosemantic', emoji:'🎯',
    story:'Arrive (至) + knife radical (刂) — to arrive at the point (like a blade reaching its mark). The knife component provides sound; together they mean "to arrive at".',
    components:[{char:'至',role:'meaning',gloss:'to arrive'},{char:'刂',role:'sound',gloss:'dāo ≈ dào'}] },

  '看': { type:'compound', emoji:'👁️',
    story:'Hand shading eyes (𠂉) + eye (目) — the classic gesture of shading your eyes to look into the distance. The combination of hand and eye gives us "to look, to see, to watch".',
    components:[{char:'𠂉',role:'meaning',gloss:'hand'},{char:'目',role:'meaning',gloss:'eye'}] },

  '听': { type:'phonosemantic', emoji:'👂',
    story:'Ear radical (耳) and mouth (口) combined with a sound component — to hear. The simplified 听 uses 口 (mouth saying) + 斤 (sound), replacing the complex traditional 聽.',
    components:[{char:'口',role:'meaning',gloss:'mouth/sound'},{char:'斤',role:'sound',gloss:'jīn ≈ tīng'}] },

  '吃': { type:'phonosemantic', emoji:'🍜',
    story:'Mouth radical (口) indicates eating/oral action; 乞 (qǐ, to beg) provides the sound. Eating involves the mouth — the radical makes this relationship explicit.',
    components:[{char:'口',role:'meaning',gloss:'mouth'},{char:'乞',role:'sound',gloss:'qǐ ≈ chī'}] },

  '喝': { type:'phonosemantic', emoji:'🥤',
    story:'Mouth radical (口) marks an oral action; 曷 (hé) provides the sound. To drink — an action of the mouth, like eating.',
    components:[{char:'口',role:'meaning',gloss:'mouth'},{char:'曷',role:'sound',gloss:'hé ≈ hē'}] },

  '睡': { type:'phonosemantic', emoji:'😴',
    story:'Eye radical (目) shows it relates to the eyes; 垂 (chuí, to droop) provides the sound and a perfect hint — drooping, heavy eyes are the sign of sleep.',
    components:[{char:'目',role:'meaning',gloss:'eye'},{char:'垂',role:'sound',gloss:'chuí ≈ shuì'}] },

  '走': { type:'compound', emoji:'🚶',
    story:'A person with large strides (夭, person bending forward) + foot (止) — a person walking with feet in motion. The forward-leaning body and stepping foot show movement.',
    components:[{char:'夭',role:'meaning',gloss:'person striding'},{char:'止',role:'meaning',gloss:'foot/step'}] },

  '跑': { type:'phonosemantic', emoji:'🏃',
    story:'Foot radical (足) indicates leg/foot movement; 包 (bāo) provides the sound. Running is rapid foot movement — the foot radical marks this as an action of the feet.',
    components:[{char:'足',role:'meaning',gloss:'foot'},{char:'包',role:'sound',gloss:'bāo ≈ pǎo'}] },

  '飞': { type:'pictographic', emoji:'🦅', ancient:'𝌐',
    story:'Originally depicted a bird or crane with wings spread wide for flight. The simplified 飞 preserves the essential upward-sweeping stroke of wings in motion.' },

  '坐': { type:'compound', emoji:'🧎',
    story:'Two people (人人) sitting on the ground (土) — people resting on the earth. An image of people gathered and seated together.',
    components:[{char:'人',role:'meaning',gloss:'person'},{char:'土',role:'meaning',gloss:'ground'}] },

  '站': { type:'compound', emoji:'🧍',
    story:'Stand (立) + cart/station (占) — a person standing at a fixed point or station. Extended to mean "to stand" and also "a station (bus, train)".',
    components:[{char:'立',role:'meaning',gloss:'stand upright'},{char:'占',role:'sound',gloss:'zhàn'}] },

  '开': { type:'compound', emoji:'🚪',
    story:'Two hands (廾) lifting the bar (一) from a gate (门) — opening a gate by removing the bar. The physical act of opening a door is captured in three strokes.',
    components:[{char:'廾',role:'meaning',gloss:'two hands'},{char:'一',role:'meaning',gloss:'bar/bolt'}] },

  '关': { type:'compound', emoji:'🔒',
    story:'Silk threads (丝 simplified to 关) wrapped over a bar — closing and binding. The opposite of 开; to close, to shut, to concern/relate to.',
    components:[{char:'丱',role:'meaning',gloss:'binding'},{char:'大',role:'meaning',gloss:'bar/gate'}] },

  '买': { type:'compound', emoji:'💰',
    story:'Net/mesh (买 top component, from 网 net) + cowrie shell (贝) — catching cowrie shells in a net. Cowrie shells were ancient Chinese currency, so "net + shells = to buy".',
    components:[{char:'⺳',role:'meaning',gloss:'net'},{char:'贝',role:'meaning',gloss:'cowrie/money'}] },

  '卖': { type:'compound', emoji:'🏪',
    story:'Opposite of 买 — buy (买) with a cross/出 on top showing outward movement. What goes out (as opposed to what you net/acquire) = to sell.',
    components:[{char:'出',role:'meaning',gloss:'outward'},{char:'买',role:'meaning',gloss:'exchange'}] },

  '钱': { type:'phonosemantic', emoji:'💴',
    story:'Metal radical (钅) indicates it was made of metal (coins); 戋 (jiān) provides the sound. Ancient coins were cast from metal — the radical anchors the monetary meaning.',
    components:[{char:'钅',role:'meaning',gloss:'metal/coin'},{char:'戋',role:'sound',gloss:'jiān ≈ qián'}] },

  '朋': { type:'compound', emoji:'👫',
    story:'Two moons (月月) side by side — friends who share the same moon, who stand together equally. Early meaning was "strings of shells of equal value"; extended to "friend".',
    components:[{char:'月',role:'meaning',gloss:'moon/equal'},{char:'月',role:'meaning',gloss:'moon/equal'}] },

  '友': { type:'compound', emoji:'🤝',
    story:'Two hands (又+又, right hand) reaching together — two people extending their hands in friendship. The overlap of hands is the gesture of friendship.',
    components:[{char:'又',role:'meaning',gloss:'right hand'},{char:'又',role:'meaning',gloss:'right hand'}] },

  '爱': { type:'compound', emoji:'❤️',
    story:'The traditional 愛 showed: walking (夊) + heart (心) + gracious hand (爫) — love is a heart in motion, reaching out graciously. The simplified 爱 keeps the friend radical (友) at the base.',
    components:[{char:'爫',role:'meaning',gloss:'reaching hand'},{char:'心',role:'meaning',gloss:'heart'},{char:'友',role:'meaning',gloss:'friend'}] },

  '吗': { type:'phonosemantic', emoji:'❓',
    story:'Mouth radical (口) indicates spoken language; 马 (mǎ) provides the sound. The question particle — spoken with rising intonation at the end of a question.',
    components:[{char:'口',role:'meaning',gloss:'mouth/speech'},{char:'马',role:'sound',gloss:'mǎ ≈ ma'}] },

  '呢': { type:'phonosemantic', emoji:'🤔',
    story:'Mouth radical (口) marks spoken language; 尼 (ní) provides the sound. A softer question particle used in "what about...?" or tag questions.',
    components:[{char:'口',role:'meaning',gloss:'mouth/speech'},{char:'尼',role:'sound',gloss:'ní ≈ ne'}] },

  '啊': { type:'phonosemantic', emoji:'😲',
    story:'Mouth radical (口) shows it\'s an exclamation; 阿 (ā) provides the sound. An interjection or sentence-final particle expressing surprise, emphasis, or affirmation.',
    components:[{char:'口',role:'meaning',gloss:'mouth/exclamation'},{char:'阿',role:'sound',gloss:'ā ≈ a'}] },

  '吧': { type:'phonosemantic', emoji:'💭',
    story:'Mouth radical (口) indicates speech; 巴 (bā) provides the sound. A sentence-final particle suggesting suggestion, assumption, or mild command.',
    components:[{char:'口',role:'meaning',gloss:'mouth/speech'},{char:'巴',role:'sound',gloss:'bā ≈ ba'}] },

  '哦': { type:'phonosemantic', emoji:'😮',
    story:'Mouth radical (口) marks it as a spoken expression; 我 (wǒ) provides the sound. An exclamation of realization or acknowledgment — "oh, I see".',
    components:[{char:'口',role:'meaning',gloss:'mouth'},{char:'我',role:'sound',gloss:'wǒ ≈ ó/ò'}] },

  '早': { type:'compound', emoji:'🌅',
    story:'Sun (日) just peeking above the horizon (十, a vertical line representing the ground level) — the sun rising at dawn. The earliest moment of the day.',
    components:[{char:'日',role:'meaning',gloss:'sun'},{char:'十',role:'meaning',gloss:'horizon'}] },

  '晚': { type:'phonosemantic', emoji:'🌙',
    story:'Sun radical (日) + 免 (miǎn) for sound — the sun being shielded or setting (like a rabbit scurrying away). Evening, when the sun disappears.',
    components:[{char:'日',role:'meaning',gloss:'sun'},{char:'免',role:'sound',gloss:'miǎn ≈ wǎn'}] },

  '今': { type:'indicative', emoji:'📅',
    story:'A person (人) under a roof with a specific mark — "this present moment, now". The covered person indicates someone gathered here, at this time.' },

  '明': { type:'compound', emoji:'✨',
    story:'Sun (日) + Moon (月) — the two great lights of the sky together mean "bright" and "clear". When both luminaries shine, everything is illuminated.',
    components:[{char:'日',role:'meaning',gloss:'sun'},{char:'月',role:'meaning',gloss:'moon'}] },

  '昨': { type:'phonosemantic', emoji:'📆',
    story:'Sun radical (日) marks time; 乍 (zhà) provides the sound. Yesterday — the previous sun/day that has already passed.',
    components:[{char:'日',role:'meaning',gloss:'sun/day'},{char:'乍',role:'sound',gloss:'zhà ≈ zuó'}] },

  '前': { type:'compound', emoji:'⬆️',
    story:'A boat (舟) + a cutting edge (刀/刂) + a step (止) — moving forward by cutting through water. The image of a boat forging ahead gave the meaning "in front, before, forward".',
    components:[{char:'止',role:'meaning',gloss:'foot/advance'},{char:'刀',role:'meaning',gloss:'cutting edge'}] },

  '后': { type:'pictographic', emoji:'⬇️', ancient:'𝌋',
    story:'Originally showed a person walking backward with a mark behind them. Later came to mean "behind, after, queen/empress" (the one who walks behind/in support of the king).' },

  '里': { type:'compound', emoji:'📍',
    story:'Field (田) + earth (土) — a measured piece of earth/land. Originally a unit of distance based on fields; later extended to mean "inside" and the Chinese mile (里, ~500m).',
    components:[{char:'田',role:'meaning',gloss:'field'},{char:'土',role:'meaning',gloss:'earth'}] },

  '外': { type:'compound', emoji:'🌍',
    story:'Evening (夕) + divination line (卜) — ancient Chinese read divination cracks at night outdoors; what was done outside at night. The "outside" meaning developed from this context.',
    components:[{char:'夕',role:'meaning',gloss:'evening/night'},{char:'卜',role:'meaning',gloss:'divination/outside mark'}] },

  '左': { type:'compound', emoji:'👈',
    story:'A hand (𠂇) + a carpenter\'s square or work tool — the left hand that holds a tool steady while the right hand works. The helper hand became "left".',
    components:[{char:'𠂇',role:'meaning',gloss:'hand'},{char:'工',role:'meaning',gloss:'work/tool'}] },

  '右': { type:'compound', emoji:'👉',
    story:'A hand (𠂇) + mouth (口) — the right hand used to bring food to the mouth. The working/eating hand became "right".',
    components:[{char:'𠂇',role:'meaning',gloss:'hand'},{char:'口',role:'meaning',gloss:'mouth'}] },

  '东': { type:'pictographic', emoji:'🌅', ancient:'𝌖',
    story:'A bundle of sticks (木) with a circle (the sun) in the middle — the sun rising behind trees, which is what you see in the east at dawn. The original orientation marker.' },

  '西': { type:'pictographic', emoji:'🌇', ancient:'𝌘',
    story:'Originally depicted a bird settling in its nest — birds roost at sunset. Since the sun sets in the west, a bird settling down for the night became the character for "west".' },

  '南': { type:'pictographic', emoji:'☀️', ancient:'𝌂',
    story:'Originally showed a musical instrument (a type of bell or drum) hung under a frame — instruments were associated with warmth and celebration. The warm direction is south.' },

  '北': { type:'compound', emoji:'🧭',
    story:'Two people (人+人) back to back — standing with backs together, each facing away from the other. Since north is cold and avoided, "back-to-back" (避) gave us north.',
    components:[{char:'人',role:'meaning',gloss:'person (back)'},{char:'人',role:'meaning',gloss:'person (back)'}] },

  '父': { type:'pictographic', emoji:'👨', ancient:'𝌋',
    story:'A hand raised holding a stick — a father\'s authority represented as the disciplining hand. The hand+stick image captured the ancient idea of paternal authority.' },

  '母': { type:'pictographic', emoji:'👩', ancient:'𝌌',
    story:'A kneeling woman (女) with two dots added to the chest — emphasizing the nursing mother. The two dots mark the breasts that nourish children.' },

  '子': { type:'pictographic', emoji:'👶', ancient:'𝌋',
    story:'A swaddled infant with arms outstretched — a child with arms reaching out. The character shows a baby wrapped in cloth with eager, curious arms.' },

  '女': { type:'pictographic', emoji:'👩', ancient:'𝌋',
    story:'A kneeling or seated woman with arms crossed — the classic pose of a respectful seated woman. One of the most ancient and frequently used semantic radicals.' },

  '王': { type:'indicative', emoji:'👑',
    story:'Three horizontal lines (heaven, people, earth) connected by a vertical stroke — the king is the one who connects heaven, humanity, and earth. A philosophical character.' },

  '天': { type:'indicative', emoji:'☁️',
    story:'A big person (大) with a mark above their head — the sky is what is above a person standing upright. The "top of a person" indicator became sky and heaven.' },

  '地': { type:'phonosemantic', emoji:'🌍',
    story:'Earth radical (土) indicates ground; 也 (yě) provides the sound and an ancient meaning of "it". Earth (地) as a noun and "ground" as a location word.',
    components:[{char:'土',role:'meaning',gloss:'earth'},{char:'也',role:'sound',gloss:'yě ≈ dì'}] },

  '人': { type:'pictographic', emoji:'🚶', ancient:'𝌋',
    story:'A person walking, seen from the side — two strokes for two legs mid-stride. One of the most ancient and universal characters in Chinese writing.' },

  '入': { type:'pictographic', emoji:'➡️', ancient:'𝌋',
    story:'The reverse of 人 (person) — whereas 人 has its strokes going outward, 入 has them going inward and downward, like entering something. To enter/go in.' },

  '出': { type:'pictographic', emoji:'⬆️', ancient:'𝌖',
    story:'A foot (止) stepping out of an enclosure — the foot is leaving a pit or enclosed space. The upward motion of stepping out gave "to exit, to go out".' },

  '可': { type:'compound', emoji:'✅',
    story:'A mouth (口) below a mark indicating a hook or obstacle — once you can speak clearly, the obstacle is overcome. Can, may, possible.',
    components:[{char:'丁',role:'meaning',gloss:'hook/obstacle'},{char:'口',role:'meaning',gloss:'mouth/expression'}] },

  '以': { type:'pictographic', emoji:'🔧', ancient:'𝌋',
    story:'Originally depicted a person using a tool — "by means of, with, using". The character shows the act of employing something as an instrument.' },

  '为': { type:'pictographic', emoji:'🐘', ancient:'𝌋',
    story:'The traditional 為 showed a hand guiding an elephant — to work with, to do, to act. The simplified 为 keeps only the essential curves of this action.' },

  '这': { type:'phonosemantic', emoji:'👇',
    story:'Movement radical (辶) indicates direction; 文 (wén) provides the sound. This — pointing to what is near and accessible, close to the speaker.',
    components:[{char:'辶',role:'meaning',gloss:'movement'},{char:'文',role:'sound',gloss:'wén ≈ zhè'}] },

  '那': { type:'phonosemantic', emoji:'👉',
    story:'City/place radical (阝/邑) indicates a location; 冉 (rǎn) provides the sound. That — pointing to something far away or in another place.',
    components:[{char:'阝',role:'meaning',gloss:'place'},{char:'冉',role:'sound',gloss:'rǎn ≈ nà'}] },

  '什': { type:'phonosemantic', emoji:'❓',
    story:'Person radical (亻) with 十 (shí, ten) for sound. In 什么 (shénme), this forms the question word "what?" — originally a variant character for various/miscellaneous.',
    components:[{char:'亻',role:'meaning',gloss:'person'},{char:'十',role:'sound',gloss:'shí ≈ shén'}] },

  '么': { type:'pictographic', emoji:'🤏',
    story:'Originally a variant of 幺 (yāo) meaning very small or tiny — a tiny thread. In 什么 (what) and 怎么 (how), 么 is a phonetic particle indicating a question.' },

  '哪': { type:'phonosemantic', emoji:'🤔',
    story:'Mouth radical (口) marks speech; 那 (nà) provides the sound. The question word "which/where" — asking about a specific one among many.',
    components:[{char:'口',role:'meaning',gloss:'mouth/question'},{char:'那',role:'sound',gloss:'nà ≈ nǎ'}] },

  '很': { type:'phonosemantic', emoji:'💯',
    story:'Step radical (彳) once indicated something about manner of proceeding; 艮 (gèn) provides the sound. Very — the intensifier that makes adjectives extreme.',
    components:[{char:'彳',role:'meaning',gloss:'step/manner'},{char:'艮',role:'sound',gloss:'gèn ≈ hěn'}] },

  '都': { type:'phonosemantic', emoji:'🏙️',
    story:'City radical (阝/邑) indicates an urban center; 者 (zhě) provides the sound. Originally "capital city" — where everyone (all) gathers. Extended to mean "all, both".',
    components:[{char:'阝',role:'meaning',gloss:'city'},{char:'者',role:'sound',gloss:'zhě ≈ dōu'}] },

  '只': { type:'phonosemantic', emoji:'☝️',
    story:'Mouth (口) + only-mark (八 downward) — a mouth saying just one thing. Only, just — limiting to a single item or amount.',
    components:[{char:'口',role:'meaning',gloss:'mouth'},{char:'八',role:'sound',gloss:'bā ≈ zhǐ'}] },

  '还': { type:'phonosemantic', emoji:'🔄',
    story:'Movement radical (辶) indicates direction or action; 不 (bù) provides part of the structure. Still, yet, also, still more — movement continuing or returning.',
    components:[{char:'辶',role:'meaning',gloss:'movement'},{char:'不',role:'sound',gloss:'hái'}] },

  '再': { type:'indicative', emoji:'🔁',
    story:'A frame (冂) with crossed lines inside — something doubled or re-done. Again, once more. The visual shows an action being repeated within a frame.' },

  '又': { type:'pictographic', emoji:'✋', ancient:'𝌋',
    story:'A right hand with three fingers — the original form of the hand. Used both as "right hand/hand" and as "again/also" (doing something a second time with the hand).' },

  '过': { type:'phonosemantic', emoji:'➡️',
    story:'Movement radical (辶) indicates passing; 寸 (cùn) provides the sound. To pass, to cross over — movement that passes through or beyond a point.',
    components:[{char:'辶',role:'meaning',gloss:'movement'},{char:'寸',role:'sound',gloss:'cùn ≈ guò'}] },

  '太': { type:'indicative', emoji:'☀️',
    story:'大 (big/person with arms spread) with a dot below added — bigger than big. The extra dot intensifies 大 (big) into 太 (too/very/extremely).' },

  '非': { type:'pictographic', emoji:'❌', ancient:'𝌖',
    story:'Two wings or parallel lines going in opposite directions — things going against each other. Not, no, wrong — the sense of opposition and negation.' },

  '对': { type:'compound', emoji:'✅',
    story:'Right hand (对 left component: 寸, inch/measure) + a mark — measuring correctly. To be correct, right, facing each other, to respond.',
    components:[{char:'又',role:'meaning',gloss:'hand'},{char:'寸',role:'meaning',gloss:'measure'}] },

  '错': { type:'phonosemantic', emoji:'❌',
    story:'Metal/gold radical (钅) originally referred to misaligned metal parts; 昔 (xī) provides the sound. Wrong, mistaken — originally meant cross-grained or misaligned.',
    components:[{char:'钅',role:'meaning',gloss:'metal'},{char:'昔',role:'sound',gloss:'xī ≈ cuò'}] },

  '高兴': { type:'compound', emoji:'😄',
    story:'High (高) + rising/flourishing (兴) — spirits rising high. The combination of elevation and growth captures the feeling of being happy and excited.' },

  '高': { type:'pictographic', emoji:'🏯', ancient:'𝌂',
    story:'A tall tower or multi-storied building — the ancient form clearly shows a high structure with multiple levels. The tallest buildings in ancient China were towers.' },

  '兴': { type:'compound', emoji:'🎉',
    story:'Originally showed four hands lifting something together — cooperative action that generates excitement and activity. Rising together brings about joy and flourishing.',
    components:[{char:'同',role:'meaning',gloss:'together'},{char:'舁',role:'meaning',gloss:'lift'}] },

  '快': { type:'phonosemantic', emoji:'⚡',
    story:'Heart radical (忄) shows it\'s an emotional/mental state; 夬 (guài) provides the sound. Fast and also happy — quick movement and quick satisfaction share this character.',
    components:[{char:'忄',role:'meaning',gloss:'heart'},{char:'夬',role:'sound',gloss:'guài ≈ kuài'}] },

  '慢': { type:'phonosemantic', emoji:'🐢',
    story:'Heart radical (忄) indicates manner or attitude; 曼 (màn) provides the sound. Slow — an unhurried, leisurely pace. Also means "rude/casual" in some contexts.',
    components:[{char:'忄',role:'meaning',gloss:'manner'},{char:'曼',role:'sound',gloss:'màn ≈ màn'}] },

  '忙': { type:'phonosemantic', emoji:'🏃',
    story:'Heart radical (忄) indicates a mental/emotional state; 亡 (wáng, to lose/perish) provides the sound. Busy — so occupied that you feel like you\'re losing yourself.',
    components:[{char:'忄',role:'meaning',gloss:'mind/heart'},{char:'亡',role:'sound',gloss:'wáng ≈ máng'}] },

  '累': { type:'compound', emoji:'😓',
    story:'Field (田) + silk threads (糸/丝) — endless repetitive labor in the fields, winding thread. The picture of exhausting, repetitive work.',
    components:[{char:'田',role:'meaning',gloss:'field/labor'},{char:'糸',role:'meaning',gloss:'thread/repeated'}] },

  '病': { type:'phonosemantic', emoji:'🤒',
    story:'Sickness radical (疒, a person lying in bed) indicates illness; 丙 (bǐng) provides the sound. Sick, illness — the radical shows a person incapacitated in bed.',
    components:[{char:'疒',role:'meaning',gloss:'sickness/bed'},{char:'丙',role:'sound',gloss:'bǐng ≈ bìng'}] },

  '药': { type:'phonosemantic', emoji:'💊',
    story:'Grass/plant radical (艹) indicates herbal origin; 约 (yuē) provides the sound. Medicine — in ancient China, almost all medicine came from plants and herbs.',
    components:[{char:'艹',role:'meaning',gloss:'plant/herb'},{char:'约',role:'sound',gloss:'yuē ≈ yào'}] },

  '医': { type:'compound', emoji:'🏥',
    story:'The simplified 医 comes from 醫 — a box of medical tools (匸) with arrows (矢) and wine/vinegar (酉) — medical treatment used acupuncture and medicinal liquids.',
    components:[{char:'匸',role:'meaning',gloss:'box/container'},{char:'矢',role:'meaning',gloss:'arrow/acupuncture'}] },

  '饭': { type:'phonosemantic', emoji:'🍚',
    story:'Food radical (饣/食) indicates food; 反 (fǎn) provides the sound. Cooked rice, the main staple — the fundamental meal that represents food itself.',
    components:[{char:'饣',role:'meaning',gloss:'food'},{char:'反',role:'sound',gloss:'fǎn ≈ fàn'}] },

  '面': { type:'pictographic', emoji:'🍜', ancient:'𝌌',
    story:'Originally showed a face — the eye prominent in the center surrounded by the face outline. Extended to mean "surface, face, noodles" (flat like a face/surface).' },

  '菜': { type:'phonosemantic', emoji:'🥬',
    story:'Grass/plant radical (艹) indicates a plant; 采 (cǎi, to pick) provides the sound and meaning — vegetables are plants that you pick to eat.',
    components:[{char:'艹',role:'meaning',gloss:'plant'},{char:'采',role:'sound',gloss:'cǎi ≈ cài'}] },

  '肉': { type:'pictographic', emoji:'🥩', ancient:'𝌋',
    story:'An animal body with layers of flesh shown by horizontal lines inside — a cross-section of muscle. One of the most literal pictographs in Chinese writing.' },

  '鱼': { type:'pictographic', emoji:'🐟', ancient:'𝌐',
    story:'A fish in profile: head at top, scaly body in the middle, tail at the bottom. The ancient oracle-bone fish was highly detailed; the modern form simplified the scales to 田.' },

  '茶': { type:'phonosemantic', emoji:'🍵',
    story:'Grass/plant radical (艹) indicates a plant; 余 (yú) provides the sound. Tea was one of China\'s most important plant products — the plant radical marks its origin.',
    components:[{char:'艹',role:'meaning',gloss:'plant'},{char:'余',role:'sound',gloss:'yú ≈ chá'}] },

  '水': { type:'pictographic', emoji:'💧', ancient:'𝌛',
    story:'Flowing water shown as a central stream with ripples on each side. The ancient form had more wavy lines; the modern form simplified them into the characteristic four-stroke shape.' },

  '汉': { type:'simplified', emoji:'🇨🇳',
    story:'The traditional 漢 was phonosemantic: water (氵) + 難 (nán) component for sound — named for the Han River. The simplified 汉 keeps the water radical but shortens the sound component.' },

  '字': { type:'compound', emoji:'📝',
    story:'Roof (宀) + child (子) — a child born under a roof; characters were seen as offspring of learning, born from the shelter of culture. Writing "reproduces" knowledge.',
    components:[{char:'宀',role:'meaning',gloss:'roof'},{char:'子',role:'meaning',gloss:'child/birth'}] },

  '习': { type:'pictographic', emoji:'🦅', ancient:'𝌐',
    story:'Originally showed a bird (羽, feathers/wings) practicing flying — a young bird repeatedly flapping its wings to learn. Practice and repetition are the essence of learning.' },

  '做': { type:'phonosemantic', emoji:'🔨',
    story:'Person radical (亻) indicates a human action; 故 (gù) provides the sound. To do, to make — an intentional human activity.',
    components:[{char:'亻',role:'meaning',gloss:'person'},{char:'故',role:'sound',gloss:'gù ≈ zuò'}] },

  '用': { type:'pictographic', emoji:'🔧', ancient:'𝌌',
    story:'Originally depicted a bucket or container used to carry water — a tool in use. The meaning extended to "to use, to employ, to apply".' },

  '知': { type:'compound', emoji:'🧠',
    story:'Arrow (矢) + mouth (口) — the sharp, direct speech of knowledge. To know is to be able to shoot straight words from the mouth. Some also read it as "knowing your target".',
    components:[{char:'矢',role:'meaning',gloss:'arrow/direct'},{char:'口',role:'meaning',gloss:'mouth'}] },

  '道': { type:'phonosemantic', emoji:'🛤️',
    story:'Movement radical (辶) indicates a path; 首 (shǒu, head) provides the sound and a hint — where the head leads, a path follows. Way, road, principle, the Tao.',
    components:[{char:'辶',role:'meaning',gloss:'movement/path'},{char:'首',role:'sound',gloss:'shǒu ≈ dào'}] },

  '方': { type:'pictographic', emoji:'⚓', ancient:'𝌘',
    story:'Originally depicted a boat with oars or a square sail — something that can be oriented or directed. Extended to mean "square, direction, side, method".' },

  '面': { type:'pictographic', emoji:'😊', ancient:'𝌌',
    story:'A face with an eye (目/囗) in the center — the front of the head. Face, surface, side. The eye in the center identifies this as a face, not just a square.' },

  '把': { type:'phonosemantic', emoji:'✋',
    story:'Hand radical (扌) indicates a grasping action; 巴 (bā) provides the sound. To hold, to grasp — and also the grammatical particle that moves the object before the verb.',
    components:[{char:'扌',role:'meaning',gloss:'hand'},{char:'巴',role:'sound',gloss:'bā ≈ bǎ'}] },

  '让': { type:'phonosemantic', emoji:'👐',
    story:'Speech radical (讠) indicates verbal communication; 上 (shàng) provides the sound. To let, to allow, to yield — something negotiated or communicated through words.',
    components:[{char:'讠',role:'meaning',gloss:'speech'},{char:'上',role:'sound',gloss:'shàng ≈ ràng'}] },

  '想': { type:'phonosemantic', emoji:'💭',
    story:'Heart/mind radical (心) shows this is a mental process; 相 (xiāng) provides the sound. To think, to want, to miss — all the things the mind does when reflecting.',
    components:[{char:'心',role:'meaning',gloss:'heart/mind'},{char:'相',role:'sound',gloss:'xiāng ≈ xiǎng'}] },

  '知道': { type:'compound', emoji:'🧠',
    story:'Know (知) + way/principle (道) — to know the way of something; to understand. Together they form the common word for "to know" in modern Chinese.',
    components:[{char:'知',role:'meaning',gloss:'know'},{char:'道',role:'meaning',gloss:'way'}] },

  '因为': { type:'compound', emoji:'🔗',
    story:'Because/cause (因) + for (为) — the causal connective. 因 originally showed a person resting inside an enclosure (a cause), 为 means "for/because of".',
    components:[{char:'因',role:'meaning',gloss:'cause'},{char:'为',role:'meaning',gloss:'for'}] },

  '所以': { type:'compound', emoji:'➡️',
    story:'Therefore — 所 (place/that which) + 以 (by means of). The result that comes from a place or cause. The therefore in Chinese reasoning.',
    components:[{char:'所',role:'meaning',gloss:'that which'},{char:'以',role:'meaning',gloss:'by means of'}] },

  '虽然': { type:'compound', emoji:'🤷',
    story:'Although — 虽 (even if, originally a type of insect) + 然 (so/thus/burning). Even if something burns/is true, yet… The concession connector.',
    components:[{char:'虽',role:'meaning',gloss:'even if'},{char:'然',role:'meaning',gloss:'so/thus'}] },

  '但是': { type:'compound', emoji:'↔️',
    story:'But — 但 (only/but, person+旦 dawn) + 是 (is/correct). "But it is…" — the contrastive conjunction combining a limiting word with an assertion.',
    components:[{char:'但',role:'meaning',gloss:'but/only'},{char:'是',role:'meaning',gloss:'is/correct'}] },

  '因': { type:'compound', emoji:'🔗',
    story:'A person (大) inside an enclosure (囗) — someone resting in a fixed place, hence a cause or reason that keeps something in place. Cause, because.',
    components:[{char:'囗',role:'meaning',gloss:'enclosure'},{char:'大',role:'meaning',gloss:'person'}] },

  '然': { type:'compound', emoji:'🔥',
    story:'Meat (肉/月) + dog (犬) + fire (灬) — meat of a dog roasting on fire. Originally "to burn/roast"; borrowed for the grammatical meaning "so, thus, correct".',
    components:[{char:'月',role:'meaning',gloss:'meat'},{char:'犬',role:'meaning',gloss:'dog'},{char:'灬',role:'meaning',gloss:'fire'}] },

  '虽': { type:'pictographic', emoji:'🦎', ancient:'𝌅',
    story:'Originally depicted a type of lizard or insect — a creature that persists despite obstacles. The meaning "although, even if" developed from the idea of persistence in adversity.' },

  '但': { type:'phonosemantic', emoji:'🌅',
    story:'Person radical (亻) indicates a human quality; 旦 (dàn, dawn/daybreak) provides the sound. But, however — originally just meaning "only" or "merely".',
    components:[{char:'亻',role:'meaning',gloss:'person'},{char:'旦',role:'sound',gloss:'dàn ≈ dàn'}] },

  '所': { type:'compound', emoji:'📍',
    story:'Door/axe (斤) + a location marker (户) — the place where an axe is kept; a specific location. Extended to mean "place, that which, what" in grammatical use.',
    components:[{char:'户',role:'meaning',gloss:'door/location'},{char:'斤',role:'meaning',gloss:'axe/tool'}] },

  '生': { type:'pictographic', emoji:'🌱', ancient:'𝌖',
    story:'A plant (草/wood stroke) growing out of the ground (土) — life emerging from earth. Birth, life, growth, to produce — all the meanings of new life sprouting.' },

  '死': { type:'compound', emoji:'💀',
    story:'Bones (歹/歺, a decayed or bad bone) + a kneeling person (人 bowing) — a person mourning at bones. Death — the combination of decay and grief.',
    components:[{char:'歹',role:'meaning',gloss:'bones/decay'},{char:'人',role:'meaning',gloss:'person mourning'}] },

  '老': { type:'pictographic', emoji:'👴', ancient:'𝌖',
    story:'An elderly person with long hair using a cane — the long hair (flowing down from the top), hunched body, and walking stick all indicate old age.' },

  '新': { type:'compound', emoji:'✨',
    story:'A tree (辛, standing log) being split with an axe (斤) — fresh-cut wood. What is newly cut is new. The freshness of newly worked material became "new".',
    components:[{char:'辛',role:'meaning',gloss:'standing/fresh'},{char:'斤',role:'meaning',gloss:'axe/cut'}] },

  '长': { type:'pictographic', emoji:'👴', ancient:'𝌖',
    story:'Originally depicted an elderly person with long flowing hair — long hair was a sign of age. The character means both "long" in length and "to grow/elder".' },

  '短': { type:'phonosemantic', emoji:'📏',
    story:'Arrow (矢) + bean/vessel (豆) — an arrow measured against a container. Arrows had standardized short lengths. Short, brief.',
    components:[{char:'矢',role:'meaning',gloss:'arrow'},{char:'豆',role:'sound',gloss:'dòu ≈ duǎn'}] },

  '冷': { type:'phonosemantic', emoji:'🧊',
    story:'Ice radical (冫, frozen water) indicates cold temperature; 令 (lìng) provides the sound. Cold — the sensation of ice.',
    components:[{char:'冫',role:'meaning',gloss:'ice'},{char:'令',role:'sound',gloss:'lìng ≈ lěng'}] },

  '热': { type:'phonosemantic', emoji:'🌡️',
    story:'Fire radical (灬) at the bottom shows heat; 执 (zhí) provides the sound. Hot — flames beneath create heat.',
    components:[{char:'灬',role:'meaning',gloss:'fire/heat'},{char:'执',role:'sound',gloss:'zhí ≈ rè'}] },

  '美': { type:'compound', emoji:'🐑',
    story:'Sheep (羊) + big (大) — a big, fat sheep was the ultimate sign of prosperity and beauty in ancient pastoral China. The word for "beautiful" literally meant a prize sheep.',
    components:[{char:'羊',role:'meaning',gloss:'sheep'},{char:'大',role:'meaning',gloss:'big'}] },

  '丑': { type:'pictographic', emoji:'🌀', ancient:'𝌋',
    story:'Originally depicted a twisted or knotted thing — tangled and irregular. The sense of being unorganized or ugly developed from the visual of something twisted.' },

  '真': { type:'compound', emoji:'🎯',
    story:'A person sitting straight (匕/人) over a tripod vessel (鼎 simplified to 具) — something stable and solidly placed. True, genuine, real.',
    components:[{char:'匕',role:'meaning',gloss:'straight/upright'},{char:'具',role:'meaning',gloss:'vessel/solid'}] },

  '假': { type:'phonosemantic', emoji:'🎭',
    story:'Person radical (亻) indicates human nature; 叚 (jiǎ) provides the sound. False, fake, if/suppose — a person pretending or assuming a role.',
    components:[{char:'亻',role:'meaning',gloss:'person'},{char:'叚',role:'sound',gloss:'jiǎ ≈ jiǎ'}] },

  '全': { type:'compound', emoji:'💎',
    story:'Enter (入) + jade/king (王) — entering the realm of jade completely. Complete, whole, entire — originally meant "pure jade", then extended to "complete purity".',
    components:[{char:'入',role:'meaning',gloss:'enter/complete'},{char:'王',role:'meaning',gloss:'jade/gem'}] },

  '半': { type:'indicative', emoji:'½',
    story:'A cow (牛) cut in half by a vertical stroke — literally bisecting an animal. Half — the act of splitting something down the middle.' },

  '共': { type:'compound', emoji:'🤝',
    story:'Two hands (廾) holding something together — communal holding and sharing. Common, together, jointly. The image of cooperation and shared effort.',
    components:[{char:'廾',role:'meaning',gloss:'two hands'},{char:'一',role:'meaning',gloss:'shared item'}] },

  '同': { type:'compound', emoji:'🤝',
    story:'A roof (冂) + a mouth (口) — people under the same roof speaking together. Same, together, with — the alignment of people under shared shelter.',
    components:[{char:'冂',role:'meaning',gloss:'cover/roof'},{char:'口',role:'meaning',gloss:'mouth'}] },

  '事': { type:'pictographic', emoji:'📋', ancient:'𝌋',
    story:'Originally showed a hand holding a writing instrument or standard — an official holding authority. Affairs, events, things to do — the official\'s work became "matters".' },

  '情': { type:'phonosemantic', emoji:'💕',
    story:'Heart radical (忄) signals emotion; 青 (qīng) provides the sound. Feeling, emotion, situation — everything the heart experiences.',
    components:[{char:'忄',role:'meaning',gloss:'heart'},{char:'青',role:'sound',gloss:'qīng ≈ qíng'}] },

  '意': { type:'compound', emoji:'💭',
    story:'Sound/voice (音) + heart (心) — what the heart hears within itself. Meaning, intention, thought — what the inner voice of the heart is saying.',
    components:[{char:'音',role:'meaning',gloss:'sound/voice'},{char:'心',role:'meaning',gloss:'heart'}] },

  '思': { type:'compound', emoji:'🤔',
    story:'Field (田, brain in the ancient view) + heart (心) — thinking involves both the brain-field and the heart. To think, to miss, to long for.',
    components:[{char:'田',role:'meaning',gloss:'brain/field'},{char:'心',role:'meaning',gloss:'heart'}] },

  '忘': { type:'compound', emoji:'🧠',
    story:'Perish/lost (亡) + heart (心) — when something leaves the heart, it is forgotten. To forget is for something to die in the heart.',
    components:[{char:'亡',role:'meaning',gloss:'lost/gone'},{char:'心',role:'meaning',gloss:'heart/memory'}] },

  '记': { type:'phonosemantic', emoji:'📝',
    story:'Speech radical (讠) indicates language-related action; 己 (jǐ, oneself) provides the sound. To remember, to record — keeping something for oneself through language.',
    components:[{char:'讠',role:'meaning',gloss:'speech/record'},{char:'己',role:'sound',gloss:'jǐ ≈ jì'}] },

  '告': { type:'compound', emoji:'📢',
    story:'A cow (牛) entering a mouth (口) — originally related to sacrificing an ox and announcing it. To tell, to announce, to report.',
    components:[{char:'牛',role:'meaning',gloss:'ox/offering'},{char:'口',role:'meaning',gloss:'mouth/announce'}] },

  '诉': { type:'phonosemantic', emoji:'🗣️',
    story:'Speech radical (讠) indicates verbal action; 斥 (chì) provides the sound. To tell, to complain, to report — verbal expression of a grievance or information.',
    components:[{char:'讠',role:'meaning',gloss:'speech'},{char:'斥',role:'sound',gloss:'chì ≈ sù'}] },

  '试': { type:'phonosemantic', emoji:'📋',
    story:'Speech radical (讠) indicates evaluation through language; 式 (shì) provides the sound. To try, to test, to attempt — an examination or trial run.',
    components:[{char:'讠',role:'meaning',gloss:'speech/test'},{char:'式',role:'sound',gloss:'shì ≈ shì'}] },

  '练': { type:'phonosemantic', emoji:'🏋️',
    story:'Silk radical (纟) originally referred to boiling and smoothing silk threads (making them usable); 东 provides sound. To practice until smooth — like refining silk.',
    components:[{char:'纟',role:'meaning',gloss:'thread/refine'},{char:'东',role:'sound',gloss:'dōng ≈ liàn'}] },

  '课': { type:'phonosemantic', emoji:'📚',
    story:'Speech radical (讠) marks it as verbal/language instruction; 果 (guǒ) provides the sound. A lesson, a class — structured language-based instruction.',
    components:[{char:'讠',role:'meaning',gloss:'speech/teach'},{char:'果',role:'sound',gloss:'guǒ ≈ kè'}] },

  '题': { type:'phonosemantic', emoji:'❓',
    story:'Head (页) contains 是 (shì) + sound component — a heading or topic that "is" at the top. Problem, title, question — what stands at the head of a discussion.',
    components:[{char:'是',role:'meaning',gloss:'correct/be'},{char:'页',role:'sound',gloss:'yè ≈ tí'}] },

  '答': { type:'phonosemantic', emoji:'✅',
    story:'Bamboo radical (竹/⺮) at top indicates a bamboo tablet (for writing); 合 (hé) provides the sound. To answer — originally to write a response on a bamboo slip.',
    components:[{char:'⺮',role:'meaning',gloss:'bamboo tablet'},{char:'合',role:'sound',gloss:'hé ≈ dá'}] },

  '问': { type:'compound', emoji:'❓',
    story:'Mouth (口) inside a gate (门) — a mouth at a door asking "who\'s there?". The image of someone at a threshold with a question captured the act of asking.',
    components:[{char:'门',role:'meaning',gloss:'gate/door'},{char:'口',role:'meaning',gloss:'mouth'}] },
};

// ── Type Display Labels ────────────────────────

const TYPE_LABELS = {
  pictographic:  '象形 Pictographic',
  indicative:    '指事 Indicative',
  compound:      '会意 Compound',
  phonosemantic: '形声 Phono-semantic',
  simplified:    '简化字 Simplified',
};

// ── Public API ────────────────────────────────

function hasEtymology(char) {
  return !!ETYMOLOGY[char];
}

function openEtymologySheet(char, pinyin, meaning) {
  const data = ETYMOLOGY[char];
  if (!data) return;

  const modal = document.getElementById('etymology-modal');
  if (!modal) return;

  // Type badge
  const badge = document.getElementById('etym-type-badge');
  badge.textContent = TYPE_LABELS[data.type] || data.type;
  badge.className = `etym-type-badge type-${data.type}`;

  // Char + pinyin + meaning
  document.getElementById('etym-char').textContent    = char;
  document.getElementById('etym-pinyin').textContent  = pinyin  || '';
  document.getElementById('etym-meaning').textContent = meaning || '';

  // Visual strip (pictographic only)
  const visual = document.getElementById('etym-visual');
  if (data.type === 'pictographic' && data.emoji) {
    document.getElementById('etym-emoji').textContent  = data.emoji;
    document.getElementById('etym-ancient').textContent = data.ancient || '?';
    document.getElementById('etym-modern').textContent  = char;
    visual.classList.remove('hidden');
  } else {
    visual.classList.add('hidden');
  }

  // Component pills (compound / phonosemantic)
  const compEl = document.getElementById('etym-components');
  if (data.components && data.components.length > 0) {
    compEl.innerHTML = data.components.map((c, i) => {
      const sep = i < data.components.length - 1
        ? '<span class="etym-plus">+</span>'
        : '';
      return `
        <div class="etym-pill ${c.role}">
          <div class="etym-pill-char">${c.char}</div>
          <div class="etym-pill-gloss">${c.gloss}</div>
          <div class="etym-pill-role">${c.role === 'meaning' ? '形 meaning' : '声 sound'}</div>
        </div>${sep}`;
    }).join('');
    compEl.classList.remove('hidden');
  } else {
    compEl.innerHTML = '';
    compEl.classList.add('hidden');
  }

  // Story
  document.getElementById('etym-story').textContent = data.story || '';

  // Open
  modal.classList.add('open');
}

function closeEtymologySheet() {
  const modal = document.getElementById('etymology-modal');
  if (modal) modal.classList.remove('open');
}

function initEtymology() {
  const modal   = document.getElementById('etymology-modal');
  const closeBtn = document.getElementById('etym-close-btn');
  if (!modal) return;

  closeBtn && closeBtn.addEventListener('click', closeEtymologySheet);

  // Close on backdrop tap
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeEtymologySheet();
  });
}
