"""Draw Ascent's icons and link-preview card into icons/. Run: python tools/make_icons.py"""
import pathlib
from PIL import Image, ImageDraw, ImageFont

BG, INK, ACCENT = (230, 225, 251), (59, 47, 134), (31, 90, 58)
LINE = [(3, 20), (9, 12), (13, 16), (21, 5)]  # the same rising line as the app's logo, on a 24-unit grid
out = pathlib.Path("icons"); out.mkdir(exist_ok=True)

def draw_logo(d, box, width):
    x0, y0, size = box
    pts = [(x0 + x / 24 * size, y0 + y / 24 * size) for x, y in LINE]
    d.line(pts, fill=INK, width=width, joint="curve")
    for p in (pts[0], pts[-1]):
        d.ellipse([p[0] - width / 2, p[1] - width / 2, p[0] + width / 2, p[1] + width / 2], fill=INK)
    d.ellipse([pts[-1][0] - width * 1.1, pts[-1][1] - width * 1.1, pts[-1][0] + width * 1.1, pts[-1][1] + width * 1.1], fill=ACCENT)

def icon(size, maskable=False, rounded=True):
    scale = 4  # draw large, then shrink, for smooth edges
    S = size * scale
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    if maskable or not rounded: d.rectangle([0, 0, S, S], fill=BG)
    else: d.rounded_rectangle([0, 0, S - 1, S - 1], radius=S * 0.22, fill=BG)
    pad = S * (0.24 if maskable else 0.16)  # maskable icons keep the logo inside the safe zone
    draw_logo(d, (pad, pad, S - 2 * pad), max(2, round(S * 0.075)))
    return im.resize((size, size), Image.LANCZOS)

icon(512).save(out / "icon-512.png")
icon(192).save(out / "icon-192.png")
icon(512, maskable=True).save(out / "icon-maskable-512.png")
icon(180, rounded=False).convert("RGB").save(out / "apple-touch-icon.png")
icon(32).save(out / "favicon-32.png")

# link-preview card, 1200 x 630
W, H = 1200, 630
card = Image.new("RGB", (W * 2, H * 2), BG)
d = ImageDraw.Draw(card)
def font(names, size):
    for n in names:
        try: return ImageFont.truetype(f"C:/Windows/Fonts/{n}", size)
        except OSError: pass
    return ImageFont.load_default()
draw_logo(d, (560, 330, 420), 34)
d.text((1080, 330), "Ascent", font=font(["segoeuib.ttf", "arialbd.ttf"], 210), fill=INK)
sub = font(["segoeui.ttf", "arial.ttf"], 64)
for i, line in enumerate(["Guided learning paths,", "from first encounters", "to expert level."]):
    d.text((1090, 610 + i * 86), line, font=sub, fill=(60, 58, 80))
card.resize((W, H), Image.LANCZOS).save(out / "share-card.png", optimize=True)
print("icons written:", sorted(p.name for p in out.iterdir()))
