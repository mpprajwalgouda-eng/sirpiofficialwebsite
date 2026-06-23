import urllib.request
import re

url = "https://www.sirpi.io/about"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

# Find the block around "Anand Lakshmanan"
match = re.search(r'(.{0,1000}Anand Lakshmanan.{0,1000})', html, re.IGNORECASE | re.DOTALL)
if match:
    block = match.group(1)
    images = re.findall(r'<img.*?src="(https://static\.wixstatic\.com/media/.*?)".*?>', block)
    print("Found images:", images)
else:
    print("Not found")
