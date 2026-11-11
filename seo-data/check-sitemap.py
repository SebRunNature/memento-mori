#!/usr/bin/env python3
"""Vérifie que les articles publiés sont dans le sitemap en ligne.

Usage : python3 seo-data/check-sitemap.py
Lit les fichiers de _posts/, calcule leur URL, et les compare à https://montre-de-vie.com/sitemap.xml.
"""
import datetime, glob, re, sys, urllib.request

SITE = "https://montre-de-vie.com"

def post_urls():
    urls = {}
    today = datetime.date.today()
    for f in glob.glob("_posts/*"):
        m = re.match(r"_posts/(\d{4})-(\d{2})-(\d{2})-(.*)\.(html|md)$", f)
        if not m:
            continue
        d = datetime.date(int(m[1]), int(m[2]), int(m[3]))
        if d > today:  # future: false dans _config.yml
            continue
        urls[f"{SITE}/blog/{m[1]}/{m[2]}/{m[3]}/{m[4]}/"] = d
    return urls

def sitemap_urls():
    req = urllib.request.Request(SITE + "/sitemap.xml", headers={"User-Agent": "Mozilla/5.0 (seo-check)"})
    xml = urllib.request.urlopen(req, timeout=30).read().decode("utf-8")
    return set(re.findall(r"<loc>([^<]+)</loc>", xml))

def main():
    posts = post_urls()
    live = sitemap_urls()
    missing = sorted(u for u in posts if u not in live)
    latest = max(posts.items(), key=lambda kv: kv[1])
    print(f"Articles publiés : {len(posts)} ; URL dans le sitemap : {len(live)}")
    print(f"Dernier article : {latest[0]} ({latest[1]})")
    print("  -> dans le sitemap" if latest[0] in live else "  -> ABSENT du sitemap")
    if missing:
        print(f"\n{len(missing)} article(s) absent(s) du sitemap :")
        for u in missing:
            print("  -", u)
        print("\n(Un article publié aujourd'hui peut prendre quelques minutes à apparaître : GitHub Pages republie après chaque fusion.)")
        return 1
    print("\nTous les articles sont dans le sitemap.")
    return 0

if __name__ == "__main__":
    sys.exit(main())
