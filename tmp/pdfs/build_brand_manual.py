from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "output" / "pdf" / "manual-de-marca-lux-aurea.pdf"
LOGO = ROOT / "public" / "images" / "brand" / "logo.png"

PAGE_W, PAGE_H = A4
INK = colors.HexColor("#171513")
MARBLE = colors.HexColor("#0F0E0D")
PAPER = colors.HexColor("#F6F1E8")
CREAM = colors.HexColor("#FCF9F4")
SAND = colors.HexColor("#D7C3A8")
GOLD = colors.HexColor("#B4812C")
BRONZE = colors.HexColor("#8E5F1F")
WALNUT = colors.HexColor("#5A4030")
TAUPE = colors.HexColor("#8B7968")


def text(c, value, x, y, size=10, font="Helvetica", color=INK):
    c.setFillColor(color)
    c.setFont(font, size)
    c.drawString(x, y, value)


def paragraph(c, value, x, y, width, size=8.5, leading=12, color=TAUPE, font="Helvetica"):
    words = value.split()
    lines = []
    line = ""
    for word in words:
        candidate = f"{line} {word}".strip()
        if stringWidth(candidate, font, size) <= width:
            line = candidate
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    for index, current in enumerate(lines):
        text(c, current, x, y - index * leading, size, font, color)
    return y - len(lines) * leading


def swatch(c, x, y, color, hex_value, label):
    c.setFillColor(color)
    c.roundRect(x, y, 54, 42, 5, fill=1, stroke=0)
    text(c, label, x, y - 13, 7.4, "Helvetica-Bold", INK)
    text(c, hex_value, x, y - 24, 7.2, "Courier", TAUPE)


def section_title(c, title, x, y):
    text(c, title.upper(), x, y, 8, "Helvetica-Bold", BRONZE)
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.7)
    c.line(x, y - 7, x + 32, y - 7)


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=A4)
    c.setTitle("Manual de marca - Lux Aurea")
    c.setAuthor("Lux Aurea Despacho Legal")

    # Header dark, aligned with the website hero.
    c.setFillColor(MARBLE)
    c.rect(0, PAGE_H - 245, PAGE_W, 245, fill=1, stroke=0)
    c.setFillColor(GOLD)
    c.rect(0, PAGE_H - 245, 7, 245, fill=1, stroke=0)
    c.drawImage(ImageReader(str(LOGO)), 43, PAGE_H - 159, width=92, height=92, mask="auto", preserveAspectRatio=True)
    text(c, "LUX", 155, PAGE_H - 101, 27, "Helvetica", CREAM)
    text(c, "AUREA", 155, PAGE_H - 131, 27, "Helvetica", CREAM)
    text(c, "DESPACHO LEGAL", 157, PAGE_H - 149, 7.3, "Helvetica-Bold", GOLD)
    text(c, "MANUAL DE MARCA", 43, PAGE_H - 199, 8, "Helvetica-Bold", GOLD)
    text(c, "Familia, libertad y patrimonio", 43, PAGE_H - 218, 16, "Helvetica", CREAM)
    paragraph(c, "Una identidad sobria, humana y estratégica para comunicar confianza, claridad y protección.", 350, PAGE_H - 196, 185, 8.5, 12, SAND)

    # Main content area.
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H - 245, fill=1, stroke=0)
    left = 43
    right_col = 318
    top = PAGE_H - 278

    section_title(c, "Paleta principal", left, top)
    text(c, "Marfil + negro profundo + dorado cálido", left, top - 27, 13, "Helvetica-Bold", INK)
    paragraph(c, "La paleta combina superficies marfil y arena con contrastes oscuros. El dorado se reserva para jerarquía, llamados a la acción y detalles de firma.", left, top - 48, 232, 8.2, 11, TAUPE)
    swatch(c, left, top - 118, PAPER, "#F6F1E8", "Marfil")
    swatch(c, left + 66, top - 118, CREAM, "#FCF9F4", "Blanco calido")
    swatch(c, left + 132, top - 118, SAND, "#D7C3A8", "Arena")
    swatch(c, left + 198, top - 118, GOLD, "#B4812C", "Dorado")
    swatch(c, left, top - 211, BRONZE, "#8E5F1F", "Bronce")
    swatch(c, left + 66, top - 211, WALNUT, "#5A4030", "Nogal")
    swatch(c, left + 132, top - 211, TAUPE, "#8B7968", "Taupe")
    swatch(c, left + 198, top - 211, MARBLE, "#0F0E0D", "Mármol")

    c.setStrokeColor(colors.HexColor("#D7C3A8"))
    c.setLineWidth(0.6)
    c.line(296, top - 2, 296, 248)

    section_title(c, "Tipografia", right_col, top)
    text(c, "Lato", right_col, top - 33, 30, "Helvetica", INK)
    text(c, "Tipografía principal - web y piezas digitales", right_col, top - 48, 7.6, "Helvetica-Bold", BRONZE)
    paragraph(c, "Usar pesos Regular para textos corridos, Bold para navegación y llamados, e Italic para frases editoriales o acentos humanos.", right_col, top - 69, 215, 8.2, 11, TAUPE)
    text(c, "Aa  Bb  Cc  123", right_col, top - 123, 16, "Helvetica", WALNUT)
    text(c, "Regular     Bold     Italic", right_col, top - 140, 7.5, "Helvetica-Bold", TAUPE)
    text(c, "Jerarquía", right_col, top - 179, 8, "Helvetica-Bold", BRONZE)
    text(c, "Titulares: grandes, sobrios y con aire editorial", right_col, top - 197, 8.2, "Helvetica", INK)
    text(c, "Cuerpo: claro, legible y con interlineado amplio", right_col, top - 213, 8.2, "Helvetica", INK)

    # Usage band.
    y = 140
    c.setFillColor(CREAM)
    c.roundRect(43, y, PAGE_W - 86, 108, 8, fill=1, stroke=0)
    section_title(c, "Dirección visual", 61, y + 83)
    text(c, "Cómo debe sentirse Lux Aurea", 61, y + 60, 13, "Helvetica-Bold", INK)
    paragraph(c, "Privada  |  Estrategica  |  Humana  |  Firme  |  Confidencial", 61, y + 41, 215, 8.5, 12, WALNUT, "Helvetica-Bold")
    paragraph(c, "Mantener composiciones limpias, fondos oscuros o marfil, fotografía natural y espacio negativo para que el mensaje respire.", 318, y + 65, 202, 8.2, 11, TAUPE)
    paragraph(c, "Evitar saturación de color, tipografías decorativas, promesas de resultados y recursos visuales estridentes.", 318, y + 29, 202, 8.2, 11, TAUPE)

    c.save()


if __name__ == "__main__":
    build()
