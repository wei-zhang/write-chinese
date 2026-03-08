#!/usr/bin/env python3
"""
Download stroke data for new characters and rebuild char-data-bundle.js
Usage: python3 scripts/expand_chars.py
"""
import json, os, urllib.request, urllib.error, urllib.parse, time, sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT       = os.path.dirname(SCRIPT_DIR)
DATA_DIR   = os.path.join(ROOT, 'data')
BUNDLE_OUT = os.path.join(ROOT, 'js', 'char-data-bundle.js')
CDN        = 'https://cdn.jsdelivr.net/npm/hanzi-writer-data@latest/{}.json'

# ── Target character list (≈1000 most common) ──────────────────────────────
CHARACTERS = [
    # Numbers
    "一","二","三","四","五","六","七","八","九","十","百","千","万","零",
    # Basic nouns & positions
    "人","大","小","中","上","下","口","日","月","年","时","天","地","国",
    "家","学","校","生","老","力","心","手","目","文","字","名","事","方",
    "面","头","里","身","气","水","火","木","金","山","田","花","草","树",
    "雨","雪","风","云","光","星","石","土","鱼","鸟","牛","马","羊","鸡",
    "猫","狗","虫","叶","果","根","茶","米","路","门","房","车","书","音",
    "乐","语","汉","英","数","电","话","工","色","点","线","角","圆","半",
    # Pronouns & particles
    "我","你","他","她","它","们","的","了","在","是","有","和","就","也",
    "都","很","最","还","再","又","已","被","让","把","给","从","到","对",
    "与","或","而","但","因","所","为","以","按","如","何","其","之","乎",
    # Common verbs
    "说","看","想","知","道","会","能","要","用","做","吃","喝","睡","跑",
    "走","坐","站","开","关","写","听","问","答","教","买","卖","送","拿",
    "打","叫","找","带","放","进","出","回","过","起","来","去","到","见",
    "学","用","读","说","画","唱","玩","跳","笑","哭","想","感","爱","恨",
    "帮","告","诉","让","叫","请","谢","拜","祝","希","望","相","信","试",
    "用","借","还","选","决","定","成","败","赢","输","比","赛","参","加",
    "开","始","结","束","完","成","准","备","计","划","安","排","管","理",
    "解","决","处","理","分","析","研","究","调","查","发","现","证","明",
    # Adjectives
    "好","不","这","那","多","少","几","两","早","晚","今","明","红","绿",
    "蓝","黄","白","黑","高","低","冷","热","新","快","慢","长","短","重",
    "轻","硬","软","甜","苦","辣","咸","酸","香","臭","亮","暗","美","丑",
    "对","错","真","假","容","易","难","简","单","复","杂","有","趣","无","聊",
    "健","康","安","全","危","险","重","要","普","通","特","别","一","样",
    "干","净","脏","整","洁","乱","方","圆","直","弯","平","斜","深","浅",
    # Time words
    "前","后","左","右","东","西","南","北","今","明","昨","天","早","晚",
    "上","下","午","周","月","年","分","秒","小","时","现","在","将","来",
    "过","去","以","前","以","后","最","近","经","常","有","时","偶","尔",
    "每","天","每","周","每","月","每","年","春","夏","秋","冬","节","假",
    # Places
    "城","市","省","区","街","道","楼","层","室","院","园","馆","店","场",
    "站","港","机","场","学","校","医","院","银","行","超","市","公","司",
    "工","厂","农","村","国","外","海","外","世","界","地","球","宇","宙",
    # Family
    "父","母","朋","友","爱","兄","弟","姐","妹","儿","女","夫","妻","子",
    "孙","祖","爷","奶","叔","伯","姑","舅","婶","侄","孙","外","公","婆",
    # Body parts
    "头","脸","眼","耳","鼻","嘴","牙","舌","颈","肩","胸","腰","背","腿",
    "脚","指","甲","皮","肤","骨","血","肉","心","肺","胃","脑","神","经",
    # Food
    "饭","菜","肉","蛋","奶","面","粥","汤","包","糕","饼","糖","盐","油",
    "酱","醋","蒜","姜","葱","辣","椒","豆","腐","虾","蟹","猪","牛","鸡",
    # Clothes
    "衣","服","裤","裙","帽","鞋","袜","带","领","袖","扣","布","棉","皮",
    # Transport
    "车","船","机","飞","行","地","铁","公","交","火","出","租","摩","托",
    # Education
    "考","试","成","绩","成","功","问","题","答","案","作","业","课","堂",
    "老","师","学","生","同","学","知","识","经","验","能","力","方","法",
    # Work/Economy
    "工","作","职","业","公","司","合","同","合","作","发","展","进","步",
    "经","济","贸","易","市","场","价","格","收","入","支","出","利","润",
    # Nature/Environment
    "自","然","环","境","保","护","资","源","能","源","空","气","污","染",
    "绿","色","生","态","气","候","温","度","湿","度","压","力","物","种",
    # Technology
    "电","脑","网","络","手","机","软","件","程","序","数","据","信","息",
    "科","技","发","明","创","新","人","工","智","能","机","器","人","联",
    # Health
    "健","康","医","生","病","院","药","手","术","治","疗","检","查","护",
    "理","休","息","运","动","锻","炼","营","养","维","生","素","蛋","白",
    # Common characters (HSK 1-4 additions)
    "了","着","过","被","把","让","叫","使","请","谢","对","不","起","没","关",
    "系","怎","么","什","为","什","么","哪","里","哪","些","哪","个","多","少",
    "几","个","一","些","一","点","一","下","一","样","一","起","一","共",
    "不","太","非","常","特","别","十","分","极","其","相","当","比","较",
    "太","太","很","好","挺","好","还","行","差","不","多","差","一","点",
]

# Deduplicate while preserving order
seen = set()
UNIQUE_CHARS = []
for c in CHARACTERS:
    if c not in seen and '\u4e00' <= c <= '\u9fff':
        seen.add(c)
        UNIQUE_CHARS.append(c)

print(f"Target characters: {len(UNIQUE_CHARS)}")

# ── Download missing stroke data ────────────────────────────────────────────
os.makedirs(DATA_DIR, exist_ok=True)

downloaded = 0
skipped    = 0
failed     = []

for i, char in enumerate(UNIQUE_CHARS):
    fpath = os.path.join(DATA_DIR, f'{char}.json')
    if os.path.exists(fpath):
        skipped += 1
        continue

    url = CDN.format(urllib.parse.quote(char))
    try:
        with urllib.request.urlopen(url, timeout=10) as resp:
            data = resp.read()
        with open(fpath, 'wb') as f:
            f.write(data)
        downloaded += 1
        if downloaded % 10 == 0:
            print(f"  Downloaded {downloaded} new files...")
        time.sleep(0.05)  # be nice to CDN
    except Exception as e:
        failed.append(char)

print(f"Downloaded: {downloaded}, Already had: {skipped}, Failed: {len(failed)}")
if failed:
    print(f"Failed chars: {''.join(failed)}")

# ── Rebuild bundle ──────────────────────────────────────────────────────────
print("Building char-data-bundle.js ...")
bundle = {}
missing_data = []

for char in UNIQUE_CHARS:
    fpath = os.path.join(DATA_DIR, f'{char}.json')
    if os.path.exists(fpath):
        try:
            with open(fpath, 'r', encoding='utf-8') as f:
                bundle[char] = json.load(f)
        except Exception:
            missing_data.append(char)
    else:
        missing_data.append(char)

print(f"Bundle size: {len(bundle)} characters")
if missing_data:
    print(f"No data for: {''.join(missing_data)}")

bundle_js = 'const CHAR_DATA_BUNDLE = ' + json.dumps(bundle, ensure_ascii=False, separators=(',', ':')) + ';\n'

with open(BUNDLE_OUT, 'w', encoding='utf-8') as f:
    f.write(bundle_js)

size_kb = os.path.getsize(BUNDLE_OUT) / 1024
print(f"Bundle written: {BUNDLE_OUT} ({size_kb:.0f} KB)")
print("Done!")
