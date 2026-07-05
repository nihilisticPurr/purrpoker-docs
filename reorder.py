import sys

file_path = r"C:\Users\kangy\Documents\PurrPoker\PurrPoker Github Clone\purr-poker-app-v1\documentation\lib\docs.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# First replace Economy with Protocol
content = content.replace('group: "Economy"', 'group: "Protocol"')

# Now extract the 3 objects
# They start with `  {\n    title: "Tokenomics",`
# They end after the `Fees` object, which is `    title: "Fees", ...   },\n`
start_idx = content.find('  {\n    title: "Tokenomics",')
end_fees = content.find('  {\n    title: "Fees",')
end_idx = content.find('  },', end_fees) + 5 # include `  },\n`

if start_idx != -1 and end_idx != -1:
    block = content[start_idx:end_idx]
    
    # Remove block from original location
    content = content[:start_idx] + content[end_idx:]
    
    # Find insert location (before gameplay/rules)
    insert_point = content.find('  {\n    title: "Texas Hold\'em",\n    slug: "gameplay/rules"')
    if insert_point == -1:
        # just in case the title is different
        insert_point_slug = content.find('slug: "gameplay/rules"')
        insert_point = content.rfind('  {', 0, insert_point_slug)
    
    if insert_point != -1:
        content = content[:insert_point] + block + content[insert_point:]
        
with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Reorder successful.")
