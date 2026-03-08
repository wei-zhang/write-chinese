#!/usr/bin/env python3
"""Generate updated CONSTELLATIONS section for game.js covering all 552 characters."""
import json, os, re

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT       = os.path.dirname(SCRIPT_DIR)
BUNDLE_JS  = os.path.join(ROOT, 'js', 'char-data-bundle.js')
GAME_JS    = os.path.join(ROOT, 'js', 'game.js')

# Load available characters
with open(BUNDLE_JS, encoding='utf-8') as f:
    raw = f.read()[len('const CHAR_DATA_BUNDLE = '):-2]
bundle = json.loads(raw)
ALL_CHARS = set(bundle.keys())

# ── Constellation definitions ──────────────────────────────────────────────
# Each char must appear in exactly one constellation
CONSTELLATIONS = [
    {
        'id': 'dragon', 'name': 'The Dragon', 'emoji': '🐉',
        'desc': 'Numbers & counting', 'color': '#FF6B35',
        'chars': list('一二三四五六七八九十百千万零'),
    },
    {
        'id': 'sky', 'name': 'The Sky', 'emoji': '🌏',
        'desc': 'Time, seasons & the world', 'color': '#4ECDC4',
        'chars': list('日月年时天地国家今明昨春夏秋冬节'),
    },
    {
        'id': 'clock', 'name': 'The Clock', 'emoji': '⏰',
        'desc': 'Time words & frequency', 'color': '#00CEC9',
        'chars': list('早晚分午周秒将近经常偶尔每'),
    },
    {
        'id': 'family', 'name': 'The Family', 'emoji': '👨‍👩‍👧',
        'desc': 'People & relationships', 'color': '#FF9A9E',
        'chars': list('父母朋友爱兄弟姐妹儿女夫妻子孙祖爷奶叔伯姑舅婶侄婆'),
    },
    {
        'id': 'self', 'name': 'The Mirror', 'emoji': '🪞',
        'desc': 'Pronouns & people words', 'color': '#E17055',
        'chars': list('我你他她它们人生老'),
    },
    {
        'id': 'scholar', 'name': 'The Scholar', 'emoji': '📚',
        'desc': 'Learning & language', 'color': '#A29BFE',
        'chars': list('学校书字文语汉英数音乐教问答题案作业课堂师同识验法考绩'),
    },
    {
        'id': 'hero', 'name': 'The Hero', 'emoji': '⚡',
        'desc': 'Core grammar words', 'color': '#FFE66D',
        'chars': list('是不在有来去好很也都这那的了和就最还再又已被让把给从到对与或而但因所为以按如何其之乎'),
    },
    {
        'id': 'extras', 'name': 'The Sage', 'emoji': '🧩',
        'desc': 'Common function words', 'color': '#FDCB6E',
        'chars': list('没着使什么怎哪些个共太非极当较挺差系'),
    },
    {
        'id': 'athlete', 'name': 'The Athlete', 'emoji': '🏃',
        'desc': 'Thinking & speaking', 'color': '#6BCB77',
        'chars': list('说看想知道会能要用做写听读'),
    },
    {
        'id': 'mover', 'name': 'The Mover', 'emoji': '🥋',
        'desc': 'Physical actions', 'color': '#FD79A8',
        'chars': list('吃喝睡跑走坐站开关找带放进出回过起见画唱玩跳笑哭感恨帮告诉请谢拜祝希望相信试借送拿打叫买卖'),
    },
    {
        'id': 'builder', 'name': 'The Builder', 'emoji': '🏗️',
        'desc': 'Planning & problem solving', 'color': '#B8860B',
        'chars': list('计划安排管理解处析研究调查发现证选决定成败赢输比赛参加始结束完准备功'),
    },
    {
        'id': 'mountain', 'name': 'The Mountain', 'emoji': '🏔️',
        'desc': 'Nature & elements', 'color': '#81ECEC',
        'chars': list('水火木金山田花草树雨雪风云光星石土叶果根虫'),
    },
    {
        'id': 'compass', 'name': 'The Compass', 'emoji': '🧭',
        'desc': 'Directions & positions', 'color': '#74B9FF',
        'chars': list('前后左右东西南北上下中'),
    },
    {
        'id': 'wizard', 'name': 'The Wizard', 'emoji': '🧙',
        'desc': 'Sizes, senses & basic attributes', 'color': '#A29BFE',
        'chars': list('大小高低冷热新快多少几两力心手目口长短重轻硬软直弯平斜深浅慢'),
    },
    {
        'id': 'artist', 'name': 'The Artist', 'emoji': '🎨',
        'desc': 'Colors & beauty', 'color': '#FF7675',
        'chars': list('红绿蓝黄白黑香臭亮暗美丑甜苦辣咸酸'),
    },
    {
        'id': 'thinker', 'name': 'The Thinker', 'emoji': '🧠',
        'desc': 'Abstract qualities', 'color': '#6C5CE7',
        'chars': list('错真假容易难简单复杂趣无聊干净脏整洁乱普通特别样'),
    },
    {
        'id': 'body', 'name': 'The Body', 'emoji': '🫀',
        'desc': 'Body parts', 'color': '#FAB1A0',
        'chars': list('头脸眼耳鼻嘴牙舌颈肩胸腰背腿脚指甲皮肤骨血肉肺胃脑神'),
    },
    {
        'id': 'chef', 'name': 'The Chef', 'emoji': '👨‍🍳',
        'desc': 'Food & cooking', 'color': '#E17055',
        'chars': list('饭菜蛋粥汤包糕饼糖盐油酱醋蒜姜葱椒豆腐虾蟹猪米茶'),
    },
    {
        'id': 'wardrobe', 'name': 'The Wardrobe', 'emoji': '👕',
        'desc': 'Clothes & materials', 'color': '#DDA0DD',
        'chars': list('衣服裤裙帽鞋袜领袖扣布棉'),
    },
    {
        'id': 'city', 'name': 'The City', 'emoji': '🏙️',
        'desc': 'Places & buildings', 'color': '#636E72',
        'chars': list('城市省区街楼层室院园馆店场港机医银行超公司厂农村外海世界球宇宙'),
    },
    {
        'id': 'panda', 'name': 'The Panda', 'emoji': '🐼',
        'desc': 'Animals & daily life', 'color': '#55EFC4',
        'chars': list('猫狗鸟鱼牛马羊鸡名电话工门房车路气身面里方事色点线角圆半'),
    },
    {
        'id': 'tech', 'name': 'The Engineer', 'emoji': '💻',
        'desc': 'Technology & science', 'color': '#0984E3',
        'chars': list('网络件程序据息科技创智器联'),
    },
    {
        'id': 'health', 'name': 'The Healer', 'emoji': '⚕️',
        'desc': 'Health & medicine', 'color': '#00B894',
        'chars': list('健康全危险病药术治疗检休运动锻炼营养维素'),
    },
    {
        'id': 'planet', 'name': 'The Planet', 'emoji': '🌿',
        'desc': 'Nature & environment', 'color': '#27AE60',
        'chars': list('自然环境保护资源空污染态候温湿压物种度'),
    },
    {
        'id': 'commerce', 'name': 'The Merchant', 'emoji': '💼',
        'desc': 'Work & economy', 'color': '#C0392B',
        'chars': list('职合展步济贸价格收入支利润'),
    },
    {
        'id': 'transport', 'name': 'The Traveller', 'emoji': '🚀',
        'desc': 'Transport & movement', 'color': '#8E44AD',
        'chars': list('船飞铁交租摩托'),
    },
]

# ── Verification ───────────────────────────────────────────────────────────
assigned = {}
for con in CONSTELLATIONS:
    for ch in con['chars']:
        if ch in assigned:
            print(f"DUPLICATE: {ch} in both '{assigned[ch]}' and '{con['id']}'")
        assigned[ch] = con['id']

covered    = set(assigned.keys())
in_bundle  = ALL_CHARS
only_bundle = in_bundle - covered      # have stroke data but no constellation
only_covered = covered - in_bundle     # in constellation but no stroke data

print(f"Total constellations: {len(CONSTELLATIONS)}")
print(f"Total chars assigned: {len(covered)}")
print(f"Bundle chars: {len(in_bundle)}")
print(f"In bundle but unassigned: {len(only_bundle)} → {''.join(sorted(only_bundle))}")
print(f"Assigned but not in bundle: {len(only_covered)} → {''.join(sorted(only_covered))}")

# ── Generate JS output ─────────────────────────────────────────────────────
def make_js():
    lines = ['const CONSTELLATIONS = [']
    for con in CONSTELLATIONS:
        # Only include chars that actually have stroke data
        chars = [c for c in con['chars'] if c in in_bundle]
        chars_js = ','.join(f'"{c}"' for c in chars)
        lines.append(f"  {{")
        lines.append(f"    id: '{con['id']}', name: '{con['name']}', emoji: '{con['emoji']}',")
        lines.append(f"    desc: '{con['desc']}', color: '{con['color']}',")
        lines.append(f"    chars: [{chars_js}],")
        lines.append(f"  }},")
    lines.append('];')
    return '\n'.join(lines)

js_block = make_js()

# ── Patch game.js ──────────────────────────────────────────────────────────
with open(GAME_JS, encoding='utf-8') as f:
    content = f.read()

# Replace the CONSTELLATIONS block
pattern = r'const CONSTELLATIONS = \[.*?\];'
new_content = re.sub(pattern, js_block, content, flags=re.DOTALL)

if new_content == content:
    print("WARNING: Pattern not found in game.js, no changes made")
else:
    with open(GAME_JS, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {GAME_JS}")
