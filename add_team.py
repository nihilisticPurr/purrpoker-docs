import sys
import re

file_path = r"C:\Users\kangy\Documents\PurrPoker\PurrPoker Github Clone\purr-poker-app-v1\documentation\lib\docs.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update FAQ headers
# Let's target only the <h3> in the faq block.
# We can find the slug: "faq" and update its HTML.
start_idx = content.find('slug: "faq"')
end_idx = content.find('  },', start_idx)

if start_idx != -1 and end_idx != -1:
    faq_block = content[start_idx:end_idx]
    # Replace <h3> inside the block
    new_faq_block = faq_block.replace('<h3>', '<h3 style="color:#f0d1b3;">')
    content = content[:start_idx] + new_faq_block + content[end_idx:]

# 2. Add David Dub to About Us
# We find the About Us block
about_us_idx = content.find('slug: "about-us"')
if about_us_idx != -1:
    # Find the closing </article> for 0xMeerkat
    meerkat_end = content.find('</article>', about_us_idx)
    
    if meerkat_end != -1:
        # We'll insert David Dub right after 0xMeerkat's </article>
        david_html = """
        <article style="display:flex;align-items:center;gap:24px;padding:30px;">
          <div style="flex-shrink:0;">
            <img src="/dub.png" alt="David Dub" style="width:160px; height:160px; border-radius:50%; object-fit:cover; border:2px solid rgba(255,255,255,.1);" />
          </div>
          <div style="flex:1;">
            <div style="display:flex;align-items:center;gap:12px;">
              <h3 style="margin:0;font-size:24px;color:#f0d1b3;">David Dub</h3>
            </div>
            <p style="margin:4px 0 12px;color:#a9bbc9;font-size:16px;">Co-founder</p>
            <p style="margin:0;font-size:14px;line-height:1.6;">A serial entrepreneur with a successful crypto fintech exit, David brings business acumen and startup expertise to the team. His passion for poker and user-owned platforms drives his vision for revolutionizing the online poker industry through decentralization and player empowerment.</p>
          </div>
        </article>"""
        
        insert_pos = meerkat_end + len('</article>')
        content = content[:insert_pos] + david_html + content[insert_pos:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updates applied successfully.")
