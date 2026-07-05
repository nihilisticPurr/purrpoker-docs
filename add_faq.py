import sys
import re

file_path = r"C:\Users\kangy\Documents\PurrPoker\PurrPoker Github Clone\purr-poker-app-v1\documentation\lib\docs.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Insert rake.png in Rake System
content = content.replace(
    "<h2>Rake System</h2>\n      <h3>Protocol Tables</h3>",
    "<h2>Rake System</h2>\n      <img src=\"/rake.png\" alt=\"Rake System\" style=\"width:100%; max-width: 600px; margin: 30px auto; display: block; border-radius: 12px;\" />\n      <h3>Protocol Tables</h3>"
)

# 2. Add FAQ
faq_text = """
1. Why should I play on your site?

Most poker sites rely on a convoluted and opaque rewards system—rakeback tiers, bad beat jackpots, lottery chests, cashback promos. But let’s be honest: the bulk of those “rewards” go to business owners, agents, and affiliates. In many cases, affiliates walk away with half the rake. That’s not a joke—half. And when they negotiate deals, players are treated like inventory: “I can bring 10,000 players to your site." It’s an outdated model built around middlemen, and it’s reached a saturation point. Nobody wants to lower rake anymore because nobody wants to give up their slice of the pie.

In short, it's very negative EV to play on mainstream sites!

At PurrPoker, we believe there’s a better way forward. Give us the chance to build a modern, transparent, and fully onchain poker platform that actually puts players first. We're not just talking—we're giving away 65% of the protocol over the next three years through our airdrop and incentives program. That's not marketing spin—it’s a real ownership offer. And in our view, it’s one of the most generous equity distributions in this space.

We run a lean, focused team—no bloat, no influencer circus, no artificial hype. That lets us pass the cost savings back to you. We avoid wasteful marketing spend but don’t cut corners where it matters—security is non-negotiable.

As the protocol matures, we plan to lower the rake even further and introduce a more aggressive, performance-based rakeback system. But early on, the real value comes from equity distribution. We're here to disrupt poker with web3 principles: transparency, ownership, and open access.

So if you believe in that vision—pull up a seat.

2. Why build on Hyperliquid EVM?

Hyperliquid EVM is one of the fastest-growing ecosystems in crypto right now—and for good reason. It’s fast, low-gas and purpose-built for high-performance DeFi and onchain applications.

We believe it represents the future model of blockchain tech: scalable, composable, and wallet-native. No unnecessary overhead, no L1 lag, no rollup spaghetti. Just a clean, vertical stack that works.

For us, that means:

• Seamless gameplay straight from your wallet
• Instant settlement
• Real composability with the rest of onchain DeFi
• True transparency—nothing hidden, everything onchain

3. What makes PurrPoker special?

Crypto-native to the core. We're aligned with web3 values: transparency, fairness, and ownership.

No counterparty risk. Play directly from your wallet. No deposits, no intermediaries, no lock-ins.

Lean team, real mission. We're not here to milk VC grants or hand tokens to influencers. All value flows back to the players.

Low rake, high rewards, no strings. No confusing rakeback or loyalty schemes. We’re the first to run this model, and it’s what inspired us to build PurrPoker.

Regulated and responsible. Licensed and compliant without compromising crypto ethos.

No fluff marketing. We’re not against it—but we’ve set a high hurdle. No forced sponsorships, no influencer circus. If you earn it, you get rewarded.

4. What's our vision?

To build the go-to poker protocol in crypto—fully onchain, fully transparent, and fully owned by its players.

We’re creating a player-first platform with:
• Open performance metrics visible only to you: lifetime BB/100 won, performance variance, seat stats
• Onchain rake + rewards, visible to anyone, anytime
• Transparent, provable outcomes
• Player governance and shared upside via protocol token

We also aim to challenge mainstream poker sites as crypto adoption accelerates via web3 ethos.

5. Will you be issuing a token? 

Yes, Issuing a token allows us to align the incentives of the platform with the players from day one. It’s not about speculation—it’s about coordination. A token lets us bootstrap the ecosystem without relying on extractive models like high rake, opaque rewards, or centralized decision-making. Instead, it enables us to run a lean protocol with lower rake, higher rewards, and onchain transparency. No lotteries, no hidden cashback loops—just clean, provable, player-aligned economics. Over time, it also opens the door to player governance and true protocol ownership, where the people who use PurrPoker are the ones who shape its future.

6. Do I need to KYC?

As we are still in an invite-only beta phase, not for now. However, in future as we grow larger and fall into various regulatory purview, we may implement KYC for large pots (>$10,000). Fret not, your funds will never be frozen (we have no ability to), just that your address may be denied from being dealt hands after a pre-defined time period.

7. Why does my wallet shows a phishing risk for PurrPoker?

Note that this is not an indication that our contract is malicious. It simply means the contract is new and has not yet built up reputation in your wallet’s risk-scoring system. 
Think of it like a brand-new website: until traffic and verification data exist, security plugins default to “unknown”.

The contract is deployed by our official team the code is verified on-chain and can be independently inspected.

We encourage anyone to test with a small amount first and review transactions via a block explorer.

After the game, you may revoke the allowances as a good wallet hygiene pratice.

As the user base grows, we plan to reach out to wallet providers so this warning should disappear. In the meantime, rest assured: if you interact only with our official contract, you are safe.

8. Having trouble adding HypeEVM to your wallet? Try https://chainlist.org/

Can't see your USDT0? Add manually via token contract: 0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb 

9. Can owners see our hole cards?

We take security & fairness very seriously. We designed the system so trust isn’t required, and even we can’t see or tamper with live cards.

Security & Fairness
PurrPoker is built with a strict “operator-blind” architecture. Hole cards and sensitive game data are encrypted end-to-end and only decrypted on the player’s client at the moment they are needed. Core game logic, dealing, and settlement are isolated from administrative systems, and no employee (including founders or developers) has direct access to live game state or player cards. All critical actions are automatically logged in tamper-evident systems, making unauthorized access detectable and auditable. Settlement and balances are enforced onchain via smart contracts, removing discretionary control and reducing attack surface. 
In short: we cannot peek, alter outcomes, or quietly intervene — the system is intentionally designed so that doing so would be technically infeasible and immediately detectable.

10. What are your fees?

3.5% capped

Eg. For $1/2 6-players, if the pot post-flop is $100, the rake is $3.5.
If the pot is $300, the rake is $4 (capped at 2BB).
If there are only 3 seated players, the rake is $2.5 as a 50% discount is applied to the cap.

PurrPoker embraces Hyperliquid's ethos of keeping fees minimal. We operate with a lean team, meaning less spend on marketing and fewer reward handouts - allowing us to pass the savings on to players. We also follow a "No flop, no drop" policy: if a hand doesn't see a flop, no rake is taken.
We absorb all gas fees during play — you only pay gas once when sitting down.

For tournaments, a 10% fee is applied.
"""

html_lines = ["<h1>🧠 FAQ</h1>"]
for p in faq_text.strip().split('\n\n'):
    p = p.strip()
    if re.match(r'^\d+\.', p):
        # Header
        html_lines.append(f'<h3>{p}</h3>')
    elif p.startswith('•'):
        html_lines.append(f'<p style="margin-left: 20px;">{p}</p>')
    else:
        # replace newlines inside a paragraph with <br/>
        p = p.replace('\n', '<br/>')
        html_lines.append(f'<p>{p}</p>')

html_lines.append('<img src="/rake.png" alt="Rake Info" style="width:100%; max-width: 600px; margin: 40px auto 10px; display: block; border-radius: 12px;" />')
html_content = "\\n      ".join(html_lines)

faq_doc = f""",
  {{
    title: "FAQ",
    slug: "faq",
    group: "Project",
    description: "Frequently Asked Questions",
    html: `
      {html_content}
    `
  }}"""

# Find "About Us" and insert it after its closing brace
# Search for slug: "about-us" block closing
idx = content.find('slug: "about-us"')
if idx != -1:
    end_idx = content.find('},', idx)
    if end_idx != -1:
        content = content[:end_idx+2] + faq_doc + content[end_idx+2:]
    else:
        # Try to find end of array if it's the last one
        print("Could not find end of About Us")
        
with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("FAQ and rake.png inserted successfully.")
