"""Name the work in repeated generic quiz questions in a pathdata file.

Usage: python tools/dedupe_free.py <slug>
The first occurrence of each question is kept. A later identical question
gets the work's title: "free" questions become "Is “<title>” free?", and
"it" / "the book" / "the report" ... is replaced by “<title>”.
Run the audit afterwards; anything still duplicated needs a hand edit.
"""
import re, sys

p = f"tools/pathdata/{sys.argv[1]}.py"
s = open(p, encoding="utf-8").read()
WORK = r'\("([a-z]+\d+)", "([^"]+)"'
QUESTION = r'(?:\n   |\[)\("([^"]+\?)"'
GENERIC = re.compile(r"\b(it|they|the book|the report|the statement|the first edition|the essay|the paper|the film|the series|the course|the guide|the site)\b")
seen, out, pos, title = set(), [], 0, None
for m in re.finditer(WORK + "|" + QUESTION, s):
    if m.group(1):  # start of a work: remember its title
        title = m.group(2)
        continue
    q = m.group(3)
    if q in seen and title:
        if re.search(r"\bfree\b", q):
            new = f"Is “{title}” free?"
        else:
            new = GENERIC.sub(f"“{title}”", q, count=1)
        if new != q:
            start = m.start(3)
            out.append(s[pos:start] + new)
            pos = m.end(3)
            q = new
    seen.add(q)
out.append(s[pos:])
open(p, "w", encoding="utf-8").write("".join(out))
