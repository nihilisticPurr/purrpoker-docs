import sys

file_path = r"C:\Users\kangy\Documents\PurrPoker\PurrPoker Github Clone\purr-poker-app-v1\documentation\lib\docs.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace('title: "Architecture Overview"', 'title: "Overview"')
content = content.replace('title: "Development Roadmap"', 'title: "Roadmap"')
content = content.replace('<h3>PRIVACY POLICY</h3>', '')
content = content.replace('group: "Footer"', 'group: "Legal"')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Replacements complete.")
