import os
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = "/root/la-nuova/public/images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# La Nuova brand colors
LN_ESPRESSO = (44, 24, 16)
LN_ESPRESSO_LIGHT = (61, 43, 31)
LN_TERRACOTTA = (199, 107, 74)
LN_TERRACOTTA_SOFT = (232, 168, 138)
LN_OLIVE = (122, 138, 94)
LN_SAGE = (154, 171, 126)
LN_CREAM = (245, 239, 230)
LN_MARBLE = (250, 247, 242)
LN_GOLD = (201, 169, 110)
LN_CHARCOAL = (26, 15, 10)
LN_WARM_GRAY = (122, 107, 94)
LN_WARM_LIGHT = (168, 152, 136)

def get_font(size, bold=False):
    base = "/usr/share/fonts/truetype/dejavu"
    f = f"{base}/DejaVuSans-Bold.ttf" if bold else f"{base}/DejaVuSans.ttf"
    return ImageFont.truetype(f, size)

def wrap(text, font, draw, max_w):
    words = text.split()
    lines = []
    cur = ""
    for w in words:
        t = cur + " " + w if cur else w
        bb = draw.textbbox((0, 0), t, font=font)
        if bb[2] - bb[0] <= max_w:
            cur = t
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines

f_play = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf", 72)
f_play_md = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf", 40)
f_play_sm = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf", 52)
f_bold = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 36)
f_bold_md = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 24)
f_bold_sm = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 18)
f_body = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 24)

print("=== Generating La Nuova branded images ===\n")

# ═══ 1. HERO ═══
W, H = 1800, 1200
img = Image.new("RGB", (W, H), LN_ESPRESSO)
draw = ImageDraw.Draw(img, "RGBA")

for i in range(H):
    r = int(LN_ESPRESSO[0] * (1 - i/H) + LN_TERRACOTTA[0] * i/H * 0.5)
    g = int(LN_ESPRESSO[1] * (1 - i/H) + LN_TERRACOTTA[1] * i/H * 0.5)
    b = int(LN_ESPRESSO[2] * (1 - i/H) + LN_TERRACOTTA[2] * i/H * 0.3)
    draw.rectangle([(0, i), (W, i)], fill=(r, g, b, 180))

cx, cy = 300, 300
for r in range(120, 0, -1):
    a = int(40 * (1 - r/120))
    draw.ellipse([(cx-r, cy-r), (cx+r, cy+r)], fill=(*LN_TERRACOTTA, a))
draw.ellipse([(cx-80, cy-80), (cx+80, cy+80)], fill=(*LN_TERRACOTTA, 60))
draw.ellipse([(cx-40, cy-40), (cx+40, cy+40)], fill=(*LN_GOLD, 80))

draw.text((600, 260), "la nuova", fill=LN_CREAM, font=f_play)
draw.text((600, 340), "Italian-inspired aesthetic medicine", fill=LN_TERRACOTTA_SOFT, font=f_play_md)

tag_lines = wrap("Where Italian artistry meets modern science", f_bold_md, draw, 700)
draw.text((600, 430), tag_lines[0], fill=LN_SAGE, font=f_bold_md)

draw.rectangle([(0, H-8), (W, H)], fill=LN_TERRACOTTA)
draw.rectangle([(0, H-4), (W//3, H)], fill=LN_GOLD)

img.save(os.path.join(OUTPUT_DIR, "hero-branded.jpg"), quality=92)
print("1. hero-branded.jpg (1800x1200)")

# ═══ 2. SERVICES ═══
W2, H2 = 1200, 1800
img2 = Image.new("RGB", (W2, H2), LN_CREAM)
draw2 = ImageDraw.Draw(img2, "RGBA")

for y in range(600):
    ratio = y / 600
    r = int(LN_ESPRESSO[0] * (1 - ratio) + LN_CREAM[0] * ratio)
    g = int(LN_ESPRESSO[1] * (1 - ratio) + LN_CREAM[1] * ratio)
    b = int(LN_ESPRESSO[2] * (1 - ratio) + LN_CREAM[2] * ratio)
    draw2.rectangle([(0, y), (W2, y)], fill=(r, g, b))

c2x, c2y = W2//2, 280
for r in range(200, 0, -1):
    a = int(80 * (1 - r/200))
    draw2.ellipse([(c2x-r, c2y-r), (c2x+r, c2y+r)], fill=(*LN_TERRACOTTA, a))
draw2.ellipse([(c2x-60, c2y-60), (c2x+60, c2y+60)], fill=(*LN_GOLD, 120))
draw2.ellipse([(c2x-30, c2y-30), (c2x+30, c2y+30)], fill=LN_CREAM)
draw2.polygon([(c2x, c2y-20), (c2x+8, c2y-5), (c2x+20, c2y), (c2x+8, c2y+5),
               (c2x, c2y+20), (c2x-8, c2y+5), (c2x-20, c2y), (c2x-8, c2y-5)], fill=LN_TERRACOTTA)

draw2.text((W2//2, 400), "Signature Treatments", fill=LN_CREAM, font=f_play_sm, anchor="mt")
draw2.text((W2//2, 460), "— Skokie —", fill=LN_TERRACOTTA_SOFT, font=f_bold_sm, anchor="mt")

cw, ch = 480, 420
sx = (W2 - 2*cw - 40) // 2
srv = [
    ("Signature Micro-Needling", "$199", "Collagen induction therapy"),
    ("HydraFacial MD", "$169", "Deep cleansing & antioxidant infusion"),
    ("Laser Genesis", "$249", "Redness reduction & pore refinement"),
    ("Chemical Peel", "$179", "Resurfacing for pigmentation & scars"),
]

for idx, (nm, pr, ds) in enumerate(srv):
    col, row = idx % 2, idx // 2
    x = sx + col * (cw + 40)
    y = 560 + row * (ch + 30)
    draw2.rounded_rectangle([(x, y), (x+cw, y+ch)], radius=20, fill=(*LN_MARBLE, 230), outline=(*LN_TERRACOTTA, 60), width=2)
    draw2.rounded_rectangle([(x+cw-120, y+15), (x+cw-20, y+55)], radius=15, fill=(*LN_TERRACOTTA, 220))
    draw2.text((x+cw-70, y+35), pr, fill=LN_CREAM, font=f_bold, anchor="mm")

    bb = draw2.textbbox((0, 0), nm, font=f_play_md)
    nx = x + (cw - (bb[2]-bb[0])) // 2
    draw2.text((nx, y+90), nm, fill=LN_ESPRESSO, font=f_play_md)

    bb2 = draw2.textbbox((0, 0), ds, font=f_body)
    dx = x + (cw - (bb2[2]-bb2[0])) // 2
    draw2.text((dx, y+220), ds, fill=LN_WARM_GRAY, font=f_body)
    draw2.ellipse([(x+cw//2-6, y+ch-30), (x+cw//2+6, y+ch-18)], fill=LN_TERRACOTTA)

img2.save(os.path.join(OUTPUT_DIR, "services-branded.jpg"), quality=92)
print("2. services-branded.jpg (1200x1800)")

# ═══ 3. PACKAGES ═══
W3, H3 = 1200, 1500
img3 = Image.new("RGB", (W3, H3), LN_CHARCOAL)
draw3 = ImageDraw.Draw(img3, "RGBA")
for y in range(H3):
    r = int(LN_ESPRESSO[0] * (1 - y*0.5/H3))
    g = int(LN_ESPRESSO[1] * (1 - y*0.5/H3))
    b = int(LN_ESPRESSO[2] * (1 - y*0.5/H3))
    draw3.rectangle([(0, y), (W3, y)], fill=(r, g, b))
draw3.rectangle([(0, 0), (W3, 6)], fill=LN_GOLD)

draw3.text((W3//2, 120), "Featured Packages", fill=LN_CREAM, font=f_play, anchor="mt")
draw3.text((W3//2, 190), "Thoughtfully paired treatments for better value", fill=LN_SAGE, font=f_bold_md, anchor="mt")

pkgs = [
    ("The North Shore Glow", "$349", "HydraFacial + LED therapy duo"),
    ("The Old Orchard", "$549", "Micro-needling + chemical peel"),
    ("Monthly Membership", "$129/mo", "One treatment every month + 20% off"),
    ("Couples Spa Retreat", "$699", "Two treatments in private couples suite"),
]
pcw, pch = 500, 300
psy = 280
for idx, (nm, pr, ds) in enumerate(pkgs):
    col, row = idx % 2, idx // 2
    x = (W3 - 2*pcw - 40)//2 + col*(pcw + 40)
    y = psy + row*(pch + 25)
    draw3.rounded_rectangle([(x, y), (x+pcw, y+pch)], radius=18, fill=(*LN_ESPRESSO_LIGHT, 200), outline=(*LN_GOLD, 80), width=1)
    draw3.rounded_rectangle([(x+8, y+15), (x+12, y+pch-15)], radius=4, fill=(*LN_TERRACOTTA, 200))
    draw3.text((x+40, y+40), nm, fill=LN_CREAM, font=f_play_md)
    draw3.text((x+40, y+110), pr, fill=LN_TERRACOTTA_SOFT, font=f_bold)
    draw3.text((x+40, y+180), ds, fill=LN_WARM_LIGHT, font=f_body)

    draw3.rounded_rectangle([(x+40, y+pch-55), (x+220, y+pch-18)], radius=15, fill=(*LN_TERRACOTTA, 220))
    draw3.text((x+130, y+pch-37), "View Details", fill=LN_CREAM, font=f_bold_sm, anchor="mm")

draw3.text((W3//2, H3-100), "Book Your Consultation", fill=LN_GOLD, font=f_play_md, anchor="mt")
draw3.text((W3//2, H3-50), "Skokie | 4905 Old Orchard Center", fill=LN_SAGE, font=f_body, anchor="mt")

img3.save(os.path.join(OUTPUT_DIR, "packages-branded.jpg"), quality=92)
print("3. packages-branded.jpg (1200x1500)")

# ═══ 4. ABOUT ═══
W4, H4 = 1600, 900
img4 = Image.new("RGB", (W4, H4), LN_CREAM)
draw4 = ImageDraw.Draw(img4, "RGBA")
draw4.rectangle([(0, 0), (W4//2, H4)], fill=LN_ESPRESSO)

for x in range(W4//2, W4):
    ratio = (x - W4//2) / (W4//2)
    r = int(LN_CREAM[0]*(1-ratio*0.15) + LN_TERRACOTTA[0]*ratio*0.15)
    g = int(LN_CREAM[1]*(1-ratio*0.15) + LN_TERRACOTTA[1]*ratio*0.08)
    b = int(LN_CREAM[2]*(1-ratio*0.15) + LN_TERRACOTTA[2]*ratio*0.05)
    draw4.rectangle([(x, 0), (x+1, H4)], fill=(r, g, b))

draw4.text((100, 180), "la nuova", fill=LN_CREAM, font=f_play)
draw4.text((100, 260), "Our Story", fill=LN_TERRACOTTA_SOFT, font=f_play_md)
about = "Born from the belief that exceptional skincare is built on exceptional science, La Nuova was created to redefine the aesthetic experience in Skokie."
ab_lines = wrap(about, f_body, draw4, 600)
y = 360
for l in ab_lines:
    draw4.text((100, y), l, fill=LN_SAGE, font=f_body)
    y += 38
draw4.rectangle([(100, 560), (500, 562)], fill=(*LN_GOLD, 180))

stats = [("10+", "Years"), ("3,500+", "Clients"), ("97%", "Satisfaction")]
sx = 100
for num, label in stats:
    draw4.text((sx, 600), num, fill=LN_TERRACOTTA_SOFT, font=f_play_md)
    draw4.text((sx, 650), label, fill=LN_WARM_GRAY, font=f_bold_sm)
    sx += 180

values = ["Evidence-Based Care", "Italian-Inspired Design", "Natural Results", "Personalized Programs"]
vy = 180
for v in values:
    draw4.rounded_rectangle([(W4//2+60, vy), (W4//2+650, vy+70)], radius=35, fill=(*LN_TERRACOTTA, 80), outline=(*LN_TERRACOTTA, 60), width=1)
    draw4.text((W4//2+100, vy+35), v, fill=LN_ESPRESSO, font=f_play_md, anchor="lm")
    draw4.ellipse([(W4//2+600, vy+28), (W4//2+615, vy+43)], fill=(*LN_GOLD, 150))
    vy += 110

draw4.rectangle([(W4//2, H4-6), (W4, H4)], fill=LN_TERRACOTTA)
draw4.rectangle([(0, H4-4), (W4//2, H4)], fill=LN_GOLD)

img4.save(os.path.join(OUTPUT_DIR, "about-branded.jpg"), quality=92)
print("4. about-branded.jpg (1600x900)")

# ═══ 5. CONTACT ═══
W5, H5 = 1200, 800
img5 = Image.new("RGB", (W5, H5), LN_CREAM)
draw5 = ImageDraw.Draw(img5, "RGBA")
for y in range(350):
    ratio = y / 350
    r = int(LN_ESPRESSO[0]*(1-ratio) + LN_CREAM[0]*ratio)
    g = int(LN_ESPRESSO[1]*(1-ratio) + LN_CREAM[1]*ratio)
    b = int(LN_ESPRESSO[2]*(1-ratio) + LN_CREAM[2]*ratio)
    draw5.rectangle([(0, y), (W5, y)], fill=(r, g, b))

draw5.text((W5//2, 100), "Get in Touch", fill=LN_CREAM, font=f_play, anchor="mt")
draw5.text((W5//2, 170), "4905 Old Orchard Center, Unit L9  |  Skokie, IL 60077", fill=LN_TERRACOTTA_SOFT, font=f_bold_sm, anchor="mt")

contact_items = [
    ("(708) 853-6660", "Phone"),
    ("support@elcconsulting2.com", "Email"),
    ("Mon-Thu 10-8 / Fri-Sat 10-9 / Sun 11-7", "Hours"),
]
cw5 = 320
tw5 = len(contact_items) * cw5 + (len(contact_items)-1) * 30
sx5 = (W5 - tw5) // 2
for idx, (val, lab) in enumerate(contact_items):
    x = sx5 + idx * (cw5 + 30)
    y = 280
    draw5.rounded_rectangle([(x, y), (x+cw5, y+160)], radius=16, fill=(*LN_MARBLE, 230), outline=(*LN_TERRACOTTA, 50), width=1)
    draw5.ellipse([(x+cw5//2-22, y+20), (x+cw5//2+22, y+64)], fill=(*LN_TERRACOTTA, 80))
    draw5.ellipse([(x+cw5//2-12, y+30), (x+cw5//2+12, y+54)], fill=(*LN_TERRACOTTA, 120))
    draw5.ellipse([(x+cw5//2-6, y+36), (x+cw5//2+6, y+48)], fill=LN_TERRACOTTA)

    bb = draw5.textbbox((0, 0), lab, font=f_bold_sm)
    draw5.text((x + (cw5-(bb[2]-bb[0]))//2, y+85), lab, fill=LN_WARM_GRAY, font=f_bold_sm)

    fv = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 16)
    bb2 = draw5.textbbox((0, 0), val, font=fv)
    draw5.text((x + (cw5-(bb2[2]-bb2[0]))//2, y+120), val, fill=LN_ESPRESSO, font=fv)

draw5.rectangle([(0, H5-6), (W5, H5)], fill=LN_TERRACOTTA)
img5.save(os.path.join(OUTPUT_DIR, "contact-branded.jpg"), quality=92)
print("5. contact-branded.jpg (1200x800)")

# ═══ 6. FAVICON ═══
fav = Image.new("RGBA", (64, 64), (0,0,0,0))
fd = ImageDraw.Draw(fav)
# Terracotta circle
fd.ellipse([(2, 2), (62, 62)], fill=LN_TERRACOTTA)
# Inner gold circle
fd.ellipse([(12, 12), (52, 52)], fill=LN_GOLD)
# Center L mark
f_fav = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf", 28)
bb = fd.textbbox((0, 0), "L", font=f_fav)
fx = 32 - (bb[2]-bb[0])//2
fy = 32 - (bb[3]-bb[1])//2
fd.text((fx, fy), "L", fill=LN_ESPRESSO, font=f_fav)
fav.save(os.path.join(OUTPUT_DIR, "favicon.png"))
print("6. favicon.png (64x64)")

# Also create an SVG favicon
svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="30" fill="#c76b4a"/>
  <circle cx="32" cy="32" r="20" fill="#c9a96e"/>
  <text x="32" y="40" text-anchor="middle" font-family="serif" font-size="28" font-weight="bold" fill="#2c1810">L</text>
</svg>'''
with open(os.path.join(OUTPUT_DIR, "favicon.svg"), "w") as f:
    f.write(svg)
print("7. favicon.svg (64x64)")

print("\n=== Done! All images created in /root/la-nuova/public/images/ ===")