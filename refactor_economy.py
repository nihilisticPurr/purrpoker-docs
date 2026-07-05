import sys
import re

file_path = r"C:\Users\kangy\Documents\PurrPoker\PurrPoker Github Clone\purr-poker-app-v1\documentation\lib\docs.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Remove the three old objects
for slug in ["tokenomics", "staking", "gameplay/rake"]:
    pattern = r'\s*\{\s*title:[^\}]+slug: "' + slug + r'".*?html: `.*?`\s*\},?'
    # We have to be careful with nested backticks if any, but in our case html doesn't contain unescaped backticks.
    content = re.sub(pattern, '', content, count=1, flags=re.DOTALL)

# The new objects
new_objects = """
  {
    title: "Tokenomics",
    slug: "tokenomics",
    group: "Economy",
    description: "$POKER supply, allocation, and buyback model.",
    html: `
      <p class="lead">The $POKER token is the governance and utility token of the Purr Poker ecosystem, designed to give players ownership of the platform through revenue sharing, premium features, and governance rights.</p>
      <h2>Token Overview</h2>
      <div class="stat-grid"><div><span>Token Type</span><strong>ERC-20 token on the Hyperliquid EVM, with governance functionality and tiered staking benefits.</strong></div><div><span>Total Supply</span><strong>100,000,000 $POKER tokens<br/><small style="font-size:13px;font-weight:normal;color:#a9bbc9">Fixed supply with buyback model</small></strong></div><div><span>TGE Date</span><strong>H2 2026</strong></div></div>
      <h2>Token Distribution</h2>
      <img src="/tokenomics.png" alt="Token Distribution" style="width:100%; max-width: 440px; margin: 30px auto; display: block; border-radius: 30%;" />
      <div class="feature-grid">
        <article><h3>Community (65%)</h3><p>65,000,000 $POKER tokens dedicated to rewarding active players and ecosystem participants.</p><ul><li>Airdrops: Season 1 begins in H2 2025, rewarding gameplay and participation</li><li>Gameplay Rewards: Active players earn points toward airdrops</li></ul></article>
        <article><h3>Core Contributors (20%)</h3><p>20,000,000 $POKER tokens allocated to the development team and early contributors.</p><ul><li>Locked for 1 year after TGE</li><li>Vested linearly over 2 years following the lock period</li><li>Ensures long-term alignment of the team with the project</li><li>Incentivizes continuous development and improvement</li></ul></article>
        <article><h3>Foundation (15%)</h3><p>15,000,000 $POKER tokens reserved for ecosystem growth and development.</p><ul><li>Marketing: Strategic partnerships and user acquisition</li><li>Development: Funding for new features and improvements</li><li>Partnerships: Strategic collaborations with crypto and gaming projects</li><li>Ecosystem Development: Supporting community-led initiatives</li><li>Liquidity Bootstrap: Initial liquidity for the token</li></ul></article>
        <article><h3>Airdrop Strategy</h3><p>Season 1 airdrops (H2 2026) will primarily reward active gameplay and participation:</p><ul><li>Majority of points earned through hands played and tournaments entered</li><li>Minor points for community participation (Discord, etc.)</li><li>Anti-Sybil measures to prevent exploitation</li><li>Specific requirements undisclosed to prevent gaming the system</li><li>Designed to reward genuine poker players, not airdrop farmers</li></ul></article>
      </div>
      <h2>Revenue Model & Buyback</h2>
      <div class="feature-grid">
        <article>
          <h3>Buyback Mechanism</h3>
          <p>A minimum of 65% of platform revenue post-TGE is used for bi-weekly TWAP (Time-Weighted Average Price) buybacks. The purchased tokens are burned, permanently reducing the supply and creating deflationary pressure. This direct connection between platform usage and token value ensures that as Purr Poker grows, token holders benefit.</p>
        </article>
        <article>
          <h3>Long-term Commitment</h3>
          <p>The buyback percentage will remain at minimally 65% for at least 3 years after TGE. After this time, as the project approaches maturity, the buyback may be reduced to provide more rewards to active players instead of tokenholders.</p>
        </article>
      </div>
    `
  },
  {
    title: "Staking Utility",
    slug: "staking-utility",
    group: "Economy",
    description: "How staking unlocks premium gameplay benefits and platform utility.",
    html: `
      <p class="lead">The $POKER token allows holders to earn premium benefits, access exclusive features, and enhance their poker experience while supporting the ecosystem.</p>
      <h2>How Staking Works</h2><p>Staking $POKER tokens is a straightforward process:</p><ul><li><strong>Minimum Duration:</strong> All staking requires a minimum commitment of 1 month.</li><li><strong>Withdrawal Period:</strong> Unstaking requires a 7-day cooldown period to prevent abuse.</li><li><strong>Benefit Tiers:</strong> Different staking amounts unlock different benefits.</li><li><strong>Immediate Effect:</strong> Benefits are available immediately after staking the required amount.</li></ul>
      <h2>Staking Benefit Tiers</h2><div class="tier-grid"><article><span>Level 1</span><h3>1,000</h3><h4>Rabbit Hunting</h4><p>See what would have happened if you stayed in the hand! Reveal the community cards that would have come after you folded.</p></article><article><span>Level 2</span><h3>5,000</h3><h4>HUD Stats</h4><p>Access real-time player analytics including VPIP, PFR, AF, and other key poker metrics to make more informed decisions.</p></article><article><span>Level 3</span><h3>7,500</h3><h4>Timebank Advantage</h4><p>Gain +5 seconds additional decision time for tough spots, giving you an edge when facing difficult decisions.</p></article><article><span>Level 4</span><h3>10,000</h3><h4>Mega Rake Discount</h4><p>Receive an impressive 35% rake discount when you win hands, significantly boosting your profitability. This creates immediate tangible value for token holders.</p></article></div>
      <h2>Additional Utility</h2>
      <div class="feature-grid">
        <article><h3>Buy & Configure Tables</h3><p>Use $POKER to create custom tables with configurations including rake rates, buy-in requirements, password protection, and even NFT/token holding requirements for communities. As the table owner, you receive 75% of the rake collected. Purchase once and use your table forever.</p></article>
        <article><h3>Tournament Creation</h3><p>Create and customize tournaments with $POKER tokens. Set buy-ins, structures, blind levels, and prize distributions. As the tournament creator, you'll receive a portion of the tournament fees.</p></article>
      </div>
    `
  },
  {
    title: "Fees",
    slug: "fees",
    group: "Economy",
    description: "Transparent breakdown of platform rake and fees.",
    html: `
      <p class="lead">Purr Poker implements a transparent, community-oriented fee system that supports token buyback mechanisms while offering fair rates to players.</p>
      <h2>Rake System</h2>
      <img src="/rake.png" alt="Rake Info" style="width:100%; max-width: 600px; margin: 30px auto; display: block; border-radius: 12px;" />
      <h3>Protocol Tables</h3><p>Tables created and managed by the Purr Poker protocol implement a simple and fair rake structure:</p><ul><li>A fixed 3.5% rake is collected from all pots</li><li>The rake is calculated automatically and transparently</li><li>65% of collected rake is used to buy back and burn $POKER tokens</li></ul>
      <h3>User-Created Tables</h3><p>The platform also enables users to create and manage their own tables with customized parameters:</p><ul><li>Table creators can set their own rake rate (up to a maximum)</li><li>75% of rake collected goes to the table creator</li><li>25% of rake goes to the platform to maintain infrastructure</li><li>Creating custom tables requires paying an amount of $POKER tokens</li><li>Custom tables can have password protection, nft/token holding requirements, and invite-only access</li></ul>
      <h2>Tournament Fees</h2>
      <p>Purr Poker collects fees from tournament entries to support operations and ecosystem sustainability:</p><ul><li>Standard 10% fee on tournament entries</li><li>For protocol tournaments: 85% used for buyback</li><li>For user-created tournaments: 75% to creator, 25% to platform</li><li>Special tournaments may have different fee structures</li></ul>
    `
  },
"""

# Insert the new objects right after the first `export const docs: Doc[] = [`
insert_idx = content.find('export const docs: Doc[] = [')
if insert_idx != -1:
    insert_idx = content.find('[', insert_idx) + 1
    content = content[:insert_idx] + "\n" + new_objects + content[insert_idx:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Restructured successfully.")
