import sys

file_path = r"C:\Users\kangy\Documents\PurrPoker\PurrPoker Github Clone\purr-poker-app-v1\documentation\lib\docs.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

replacements = {
    # FAQ 8
    '<h3 style="color:#f0d1b3;">8. Having trouble adding HypeEVM to your wallet? Try https://chainlist.org/</h3>':
    '<h3 style="color:#f0d1b3;">8. I am having trouble adding HyperEVM network to my wallet.</h3>\n      <p>Try https://chainlist.org/</p>',
    
    # FAQ 10
    '<h3 style="color:#f0d1b3;">3.5% capped</h3>':
    '<p style="color:white; font-weight:bold;">3.5% capped</p>',

    # Purr Points
    '<h3>Play Consistently</h3>': '<h3 style="color:#f0d1b3;">Play Consistently</h3>',
    '<h3>Join the Community</h3>': '<h3 style="color:#f0d1b3;">Join the Community</h3>',
    '<h3>Participate in Events</h3>': '<h3 style="color:#f0d1b3;">Participate in Events</h3>',
    '<h3>Start Early</h3>': '<h3 style="color:#f0d1b3;">Start Early</h3>',

    # Tokenomics
    '<h3>Community (65%)</h3>': '<h3 style="color:#f0d1b3;">Community (65%)</h3>',
    '<h3>Core Contributors (20%)</h3>': '<h3 style="color:#f0d1b3;">Core Contributors (20%)</h3>',
    '<h3>Foundation (15%)</h3>': '<h3 style="color:#f0d1b3;">Foundation (15%)</h3>',
    '<h3>Airdrop Strategy</h3>': '<h3 style="color:#f0d1b3;">Airdrop Strategy</h3>',

    # Staking Utility
    '<h3>Buy & Configure Tables</h3>': '<h3 style="color:#f0d1b3;">Buy & Configure Tables</h3>',
    '<h3>Tournament Creation</h3>': '<h3 style="color:#f0d1b3;">Tournament Creation</h3>',
    '<h4>Rabbit Hunting</h4>': '<h4 style="color:#f0d1b3;">Rabbit Hunting</h4>',
    '<h4>HUD Stats</h4>': '<h4 style="color:#f0d1b3;">HUD Stats</h4>',
    '<h4>Timebank Advantage</h4>': '<h4 style="color:#f0d1b3;">Timebank Advantage</h4>',
    '<h4>Mega Rake Discount</h4>': '<h4 style="color:#f0d1b3;">Mega Rake Discount</h4>',

    # Architecture
    '<h3>The Best of Both Worlds</h3>': '<h3 style="color:#f0d1b3;">The Best of Both Worlds</h3>'
}

for old_str, new_str in replacements.items():
    if old_str in content:
        content = content.replace(old_str, new_str)
    else:
        # Fallback if there are any tiny variations
        print(f"Warning: Could not find exact string: {old_str}")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updates applied successfully.")
