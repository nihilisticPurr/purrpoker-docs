export type DocPage = {
  title: string;
  slug: string;
  group: string;
  description?: string;
  html: string;
};

export const docs: DocPage[] = [


  {
    title: "What is Purr Poker?",
    slug: "",
    group: "Introduction",
    description: "",
    html: `
      <p class="lead"><img src="/CatChip.png" alt="Cat Chip" style="width:180px; float:right; margin-left: 20px; border-radius: 12px;" />Purr Poker is a decentralized poker platform built on Hyperliquid EVM. We combine traditional poker gameplay with cutting-edge blockchain technology to deliver instant-settlement gameplay, provably fair mechanics, and a user-owned ecosystem. With a 3.5% rake (vs. industry standard 5%), transparent redistribution to $POKER tokenholders, and non-mandatory KYC, Purr Poker eliminates the frustrations of centralized platforms.</p>
      <h2>Why Purr Poker?</h2>
      <div class="feature-grid">
        <article>
          <h3 style="margin-top:0">Problems with Traditional Platforms</h3>
          <ul>
            <li>High rakes, often 5% or more, reducing player profitability.</li>
            <li>Long withdrawal times that can take several business days.</li>
            <li>KYC and deposit limits that alienate crypto-native users.</li>
            <li>Counterparty risks and opaque RNG systems.</li>
            <li>Centralized control with no player ownership.</li>
          </ul>
        </article>
        <article>
          <h3 style="margin-top:0">Purr Poker's Solution</h3>
          <ul>
            <li>Just 3.5% rake, with at least 65% redistributed to $POKER holders via buyback mechanism.</li>
            <li>Instant settlement through Hyperliquid EVM's fast finality.</li>
            <li>Non-mandatory KYC aligned with crypto's permissionless ethos.</li>
          </ul>
        </article>
      </div>
      <h2>Key Features</h2>
      <div class="feature-grid">
        <article><h3>Instant Settlement</h3><p>Powered by Hyperliquid EVM, Purr Poker offers sub-second transaction finality. This ensures your winnings are available immediately, without the delays typical of centralized poker sites.</p></article>
        <article><h3>Provably Fair Gameplay</h3><p>By launch, we will have obtained an industry-recognized certificate in relation to our Random Number Generator (RNG), which certifies that our RNG has been tested for complete fairness and is compliant with industry standards for highly-regulated jurisdictions.</p></article>
        <article><h3>Community Ownership</h3><p>The $POKER token gives the community a real stake in the platform. With 65% of tokens allocated to the community via airdrops and staking rewards, and a 65% minimum buyback model from platform revenue, value flows directly to players and tokenholders.</p></article>
        <article><h3>Premium Gameplay Benefits</h3><p>Stake $POKER to unlock premium features like rake discounts, rabbit hunting, HUD stats, and extended timebanks. Create your own custom tables with configurable settings and earn 75% of the rake collected.</p></article>
      </div>
      <h2>Platform Overview</h2>
      <ol class="steps">
        <li><strong>Game Modes</strong><br/>Starting with No-Limit Texas Hold'em cash games, Purr Poker will expand to include tournaments (Q4 2025), Pot-Limit Omaha and multi-tabling (Q1 2026), with support for cross-chain gameplay planned for Q2 2026.</li>
        <li><strong>Tokenomics</strong><br/>The $POKER token powers the ecosystem with a total supply of 100M tokens. 65% is allocated to the community, with Season 1 airdrops beginning in H2 2025 rewarding active gameplay and participation.</li>
        <li><strong>Technical Architecture</strong><br/>Purr Poker leverages Hyperliquid EVM for lightning-fast, low-cost transactions. Our hybrid architecture combines on-chain security for funds with off-chain efficiency for gameplay, delivering the best of both worlds.</li>
        <li><strong>User Experience</strong><br/>Wallet-based onboarding makes it easy to start playing instantly. Our sleek interface will support multi-tabling by Q4 2025, with a mobile app planned for H2 2026 to bring the Purr Poker experience to iOS and Android.</li>
      </ol>
    `
  },
  {
    title: "Purr Points",
    slug: "purr-points",
    group: "Introduction",
    description: "The points system for Season 1 airdrop allocation.",
    html: `
      <p class="lead">Purr Points are the core mechanism for earning your share of the $POKER token airdrop. Play poker, participate in the community, and accumulate points to maximize your allocation at TGE.</p>
      <div class="callout success"><strong>LIVE NOW</strong><br/>Season 1 launched in December 2025 and runs for at least 6 months. All points earned during this period will determine your $POKER allocation at TGE (2026).</div>
      <div class="stat-grid"><div><span>Started</span><strong>December 2025</strong></div><div><span>Duration</span><strong>6+ months</strong></div><div><span>TGE</span><strong>2026</strong></div></div>
      <h2>How do I earn Purr Points?</h2><p>Purr Points are earned by actively participating in the Purr Poker ecosystem. Every hand you play, every tournament you enter, and every interaction on the platform contributes to your point total.</p><p>Your total Purr Points at the end of Season 1 determine your share of the Season 1 airdrop. With 65% of the total $POKER supply (65,000,000 tokens) allocated to the community across all seasons, a significant portion will be distributed to Season 1 participants.</p>
      <h3>1. Gameplay (Primary Source)</h3><ul><li><strong>Cash Games:</strong> Points earned based on hands played, rake contributed, and overall activity at cash game tables.</li><li><strong>Tournaments:</strong> Points earned for tournament entries and participation, with bonuses for deep runs and wins.</li></ul><h3>2. Community Participation (Secondary Source)</h3><p>A smaller portion of points can be earned through community engagement. This helps build a vibrant ecosystem while complementing your gameplay rewards.</p>
      <h2>Airdrop Distribution</h2><div class="stat-grid"><div><span>Total Community Allocation</span><strong>65%<br/><small style="font-size:13px;font-weight:normal;color:#a9bbc9">Across all seasons</small></strong></div><div><span>TGE Date</span><strong>2026<br/><small style="font-size:13px;font-weight:normal;color:#a9bbc9">Token Generation Event</small></strong></div><div><span>Season 1 Duration</span><strong>6+ Mo.<br/><small style="font-size:13px;font-weight:normal;color:#a9bbc9">Starting December 2025</small></strong></div></div>
      <h3>How Your Allocation is Calculated</h3><p>Your $POKER airdrop allocation is proportional to your share of total Purr Points earned during Season 1:</p><p><code>Your Allocation = (Your Points / Total Points) × Season 1 Pool</code></p><p>A significant portion of the 65% community allocation will be distributed to Season 1 participants, with the remainder reserved for future seasons and ongoing rewards.</p>
      <h2>Anti-Sybil Protection</h2><h3>Fair Distribution for Real Players</h3><p>Purr Poker implements robust anti-Sybil measures to ensure fair distribution. Our goal is to reward genuine poker players, not airdrop farmers.</p><ul><li><strong>Gameplay Focus:</strong> The majority of points come from actual poker activity, making farming expensive and impractical.</li><li><strong>Undisclosed Criteria:</strong> Specific point calculations are not publicly disclosed to prevent gaming the system.</li><li><strong>Behavioral Analysis:</strong> Advanced detection systems identify suspicious patterns and fraudulent activity.</li><li><strong>Quality Over Quantity:</strong> Genuine engagement is weighted more heavily than raw volume.</li></ul><div class="callout warning"><p><strong>⚠️ Warning:</strong> Any Sybil activity intended to earn Purr Points unfairly may result in penalties. In addition, predatory or unethical behaviors — including but not limited to bum-hunting, hit-and-run, grimming, camping, chip-dumping, collusion, or the use of real-time assistance bots — are strictly prohibited on Purr Poker.</p><p>If such activity is detected, Purr Poker reserves the right to penalize or forfeit all associated Purr Points and, in severe cases, suspend or permanently block the account from future play.</p></div>
      <h2>Best Strategies</h2><div class="feature-grid"><article><span>1</span><h3 style="color:#f0d1b3;">Play Consistently</h3><p>Regular gameplay is the most effective way to earn Purr Points. Focus on playing poker — whether cash games or tournaments — at stakes you're comfortable with. Consistency matters more than occasional large volume.</p></article><article><span>2</span><h3 style="color:#f0d1b3;">Join the Community</h3><p>Engage with the Purr Poker community on Discord. While community points are secondary, they complement your gameplay earnings and help you stay informed about events and promotions.</p></article><article><span>3</span><h3 style="color:#f0d1b3;">Participate in Events</h3><p>Special tournaments and platform events often have point multipliers or bonus rewards. Keep an eye on announcements for opportunities to boost your point earnings.</p></article><article><span>4</span><h3 style="color:#f0d1b3;">Start Early</h3><p>Season 1 is live now. The earlier you start accumulating points, the larger your share of the airdrop will be. Don't wait until the last minute — compound your participation over time.</p></article></div>
      
      <div class="callout" style="display:flex;align-items:center;gap:20px;background:#351a13;border:1px solid #4a251a;margin-top:40px;"><div style="background:#654838;width:48px;height:48px;border-radius:50%;display:grid;place-items:center;flex-shrink:0;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8d5c4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div><div><h3 style="margin:0 0 8px;color:#f0d1b3;">Ready to Start Earning?</h3><p style="margin:0 0 16px;color:#e8d5c4;font-size:15px;">Season 1 is live! Launch the app now and start accumulating Purr Points for your $POKER airdrop.</p><a href="https://app.purrpoker.xyz" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:10px 20px;background:#e5cda8;color:#351a13;font-weight:600;border-radius:8px;text-decoration:none;">Launch App →</a></div></div>
    `
  },
  {
    title: "Tokenomics",
    slug: "tokenomics",
    group: "Protocol",
    description: "$POKER supply, allocation, and buyback model.",
    html: `
      <p class="lead">The $POKER token is the governance and utility token of the Purr Poker ecosystem, designed to give players ownership of the platform through revenue sharing, premium features, and governance rights.</p>
      <h2>Token Overview</h2>
      <div class="stat-grid"><div><span>Token Type</span><strong>ERC-20 token on the Hyperliquid EVM, with governance functionality and tiered staking benefits.</strong></div><div><span>Total Supply</span><strong>100,000,000 $POKER tokens<br/><small style="font-size:13px;font-weight:normal;color:#a9bbc9">Fixed supply with buyback model</small></strong></div><div><span>TGE Date</span><strong>H2 2026</strong></div></div>
      <h2>Token Distribution</h2>
      <img src="/tokenomics.png" alt="Token Distribution" style="width:100%; max-width: 440px; margin: 30px auto; display: block; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,.1);" />
      <div class="feature-grid">
        <article><h3 style="color:#f0d1b3;">Community (65%)</h3><p>65,000,000 $POKER tokens dedicated to rewarding active players and ecosystem participants.</p><ul><li>Airdrops: Season 1 begins in H2 2025, rewarding gameplay and participation</li><li>Gameplay Rewards: Active players earn points toward airdrops</li></ul></article>
        <article><h3 style="color:#f0d1b3;">Core Contributors (20%)</h3><p>20,000,000 $POKER tokens allocated to the development team and early contributors.</p><ul><li>Locked for 1 year after TGE</li><li>Vested linearly over 2 years following the lock period</li><li>Ensures long-term alignment of the team with the project</li><li>Incentivizes continuous development and improvement</li></ul></article>
        <article><h3 style="color:#f0d1b3;">Foundation (15%)</h3><p>15,000,000 $POKER tokens reserved for ecosystem growth and development.</p><ul><li>Marketing: Strategic partnerships and user acquisition</li><li>Development: Funding for new features and improvements</li><li>Partnerships: Strategic collaborations with crypto and gaming projects</li><li>Ecosystem Development: Supporting community-led initiatives</li><li>Liquidity Bootstrap: Initial liquidity for the token</li></ul></article>
        <article><h3 style="color:#f0d1b3;">Airdrop Strategy</h3><p>Season 1 airdrops (H2 2026) will primarily reward active gameplay and participation:</p><ul><li>Majority of points earned through hands played and tournaments entered</li><li>Minor points for community participation (Discord, etc.)</li><li>Anti-Sybil measures to prevent exploitation</li><li>Specific requirements undisclosed to prevent gaming the system</li><li>Designed to reward genuine poker players, not airdrop farmers</li></ul></article>
      </div>
      <h2>Revenue Model & Buyback</h2>
      <div class="feature-grid">
        <article>
          <h3 style="color:#f0d1b3;">Buyback Mechanism</h3>
          <p>A minimum of 65% of platform revenue post-TGE is used for bi-weekly TWAP (Time-Weighted Average Price) buybacks. The purchased tokens are burned, permanently reducing the supply and creating deflationary pressure. This direct connection between platform usage and token value ensures that as Purr Poker grows, token holders benefit.</p>
        </article>
        <article>
          <h3 style="color:#f0d1b3;">Long-term Commitment</h3>
          <p>The buyback percentage will remain at minimally 65% for at least 3 years after TGE. After this time, as the project approaches maturity, the buyback may be reduced to provide more rewards to active players instead of tokenholders.</p>
        </article>
      </div>
    `
  },
  {
    title: "Staking Utility",
    slug: "staking-utility",
    group: "Protocol",
    description: "How staking unlocks premium gameplay benefits and platform utility.",
    html: `
      <p class="lead">The $POKER token allows holders to earn premium benefits, access exclusive features, and enhance their poker experience while supporting the ecosystem.</p>
      <h2>How Staking Works</h2><p>Staking $POKER tokens is a straightforward process:</p><ul><li><strong>Minimum Duration:</strong> All staking requires a minimum commitment of 1 month.</li><li><strong>Withdrawal Period:</strong> Unstaking requires a 7-day cooldown period to prevent abuse.</li><li><strong>Benefit Tiers:</strong> Different staking amounts unlock different benefits.</li><li><strong>Immediate Effect:</strong> Benefits are available immediately after staking the required amount.</li></ul>
      <h2>Staking Benefit Tiers</h2><div class="tier-grid"><article><span>Level 1</span><h3>1,000</h3><h4 style="color:#f0d1b3;">Rabbit Hunting</h4><p>See what would have happened if you stayed in the hand! Reveal the community cards that would have come after you folded.</p></article><article><span>Level 2</span><h3>5,000</h3><h4 style="color:#f0d1b3;">HUD Stats</h4><p>Access real-time player analytics including VPIP, PFR, AF, and other key poker metrics to make more informed decisions.</p></article><article><span>Level 3</span><h3>7,500</h3><h4 style="color:#f0d1b3;">Timebank Advantage</h4><p>Gain +5 seconds additional decision time for tough spots, giving you an edge when facing difficult decisions.</p></article><article><span>Level 4</span><h3>10,000</h3><h4 style="color:#f0d1b3;">Mega Rake Discount</h4><p>Receive an impressive 35% rake discount when you win hands, significantly boosting your profitability. This creates immediate tangible value for token holders.</p></article></div>
      <h2>Additional Utility</h2>
      <div class="feature-grid">
        <article><h3 style="color:#f0d1b3;">Buy & Configure Tables</h3><p>Use $POKER to create custom tables with configurations including rake rates, buy-in requirements, password protection, and even NFT/token holding requirements for communities. As the table owner, you receive 75% of the rake collected. Purchase once and use your table forever.</p></article>
        <article><h3 style="color:#f0d1b3;">Tournament Creation</h3><p>Create and customize tournaments with $POKER tokens. Set buy-ins, structures, blind levels, and prize distributions. As the tournament creator, you'll receive a portion of the tournament fees.</p></article>
      </div>
    `
  },
  {
    title: "Fees",
    slug: "fees",
    group: "Protocol",
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
  {
    title: "Table Rules",
    slug: "gameplay/rules",
    group: "Gameplay",
    description: "Texas Hold'em rules and platform-specific table behavior.",
    html: `
      <p class="lead">Purr Poker follows standard Texas Hold'em rules with platform-specific adaptations for fair, transparent, and enjoyable decentralized gameplay.</p>
      <h2>Texas Hold'em Basics</h2><p>Each player receives two private hole cards and uses them with five community cards to make the best five-card poker hand.</p><h3>Game Sequence</h3><ol><li>Pre-Flop: two hole cards dealt and betting begins.</li><li>Flop: three community cards and another betting round.</li><li>Turn: fourth community card and another betting round.</li><li>River: final community card and final betting round.</li><li>Showdown: remaining players reveal hands and best hand wins.</li></ol>
      <h3>Player Actions</h3><ul><li>Check: pass action without betting if no current bet exists.</li><li>Bet/Raise: place or increase a wager.</li><li>Call: match the current bet.</li><li>Fold: discard your hand and forfeit the pot.</li></ul>
      <h3>Hand Rankings</h3><table><tbody><tr><td>1</td><td>Royal Flush</td><td>A, K, Q, J, 10 of the same suit</td></tr><tr><td>2</td><td>Straight Flush</td><td>Five sequential cards of the same suit</td></tr><tr><td>3</td><td>Four of a Kind</td><td>Four cards of the same rank</td></tr><tr><td>4</td><td>Full House</td><td>Three of a kind plus a pair</td></tr><tr><td>5</td><td>Flush</td><td>Five cards of the same suit</td></tr><tr><td>6</td><td>Straight</td><td>Five sequential cards of mixed suits</td></tr><tr><td>7</td><td>Three of a Kind</td><td>Three cards of same rank</td></tr><tr><td>8</td><td>Two Pair</td><td>Two different pairs</td></tr><tr><td>9</td><td>One Pair</td><td>Two cards of same rank</td></tr><tr><td>10</td><td>High Card</td><td>Highest card when no combination exists</td></tr></tbody></table>
      <h2>Game Structure</h2><h3>No-Limit Hold'em</h3><ul><li>Players can bet any amount up to their entire stack.</li><li>Minimum bet equals the big blind.</li><li>Minimum raise must be at least the size of the previous bet or raise.</li></ul><h3>Pot-Limit Hold'em</h3><ul><li>Maximum bet or raise is limited to pot size.</li><li>The platform automatically calculates pot-sized betting limits.</li></ul>
      <h3>Blinds</h3><p>Small blind is posted left of the dealer button; big blind is posted left of the small blind. Antes may appear on some tables. The button moves clockwise after each hand.</p>
      <h2>Table Types & Formats</h2><h3>Cash Games</h3><ul><li>Join and leave at any time.</li><li>Minimum buy-in: 20–100 big blinds depending on table.</li><li>Maximum buy-in: 100–250 big blinds depending on table.</li></ul><p>Cash game chips represent real cryptocurrency and are withdrawn automatically when leaving.</p><h3>Tournaments</h3><ul><li>Fixed buy-in and equal starting stacks.</li><li>Blinds increase at set intervals.</li><li>Players cannot cash out until eliminated.</li><li>Prizes distributed based on finishing position.</li></ul><h3>Sit & Go's</h3><ul><li>Single-table tournaments that start when seats fill.</li><li>Usually 6 or 9 players.</li><li>Faster blind increases and shorter duration.</li></ul>
      <h2>Platform-Specific Rules</h2>
      <ol class="steps">
        <li><strong>Time Banks</strong><br/>Players have 15 seconds to act on their turn, with an additional time bank of 30 seconds that can be used for difficult decisions. The time bank replenishes at a rate of 3 seconds per hand played, up to the maximum.</li>
        <li><strong>Disconnection Policy</strong><br/>If a player disconnects during a hand, they will automatically check when possible or fold when facing a bet. The player's time bank is used first before auto-actions are taken. After two consecutive hands of inactivity, the player is automatically removed from the table (cash games only).</li>
        <li><strong>Rake Structure</strong><br/>For tables created by the Purr Poker protocol, a simple and transparent rake structure is implemented:<ul><li>A fixed 3.5% rake is collected from all pots</li><li>For custom tables created by users, the table creator can define their own rake structure</li><li>65% of all rake collected from protocol tables is distributed to $POKER holders via buyback mechanism</li><li>For custom tables, 75% of rake goes to the table creator, 25% to the platform</li></ul></li>
        <li><strong>Table Chat Rules</strong><br/>To maintain a positive playing environment, Purr Poker enforces these chat rules:<ul><li>No abusive language, harassment, or offensive content</li><li>No discussion of hands in progress</li><li>No collusion or sharing of hole card information</li><li>No spam, external links, or promotional content</li></ul><small style="display:block;margin-top:8px;color:#a9bbc9;">Note: Violations may result in chat restrictions or account suspension.</small></li>
      </ol>
      <article class="callout" style="padding:24px;border:1px solid rgba(255,255,255,.05);border-radius:12px;margin-top:40px;background:none;">
        <h2 style="margin-top:0;border:none;padding:0;">Fair Play & Anti-Cheating Measures</h2>
        <p style="margin-bottom:24px;">Purr Poker employs several measures to ensure fair gameplay:</p>
        <div class="feature-grid" style="margin:0;">
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;color:#f0d1b3;font-size:16px;">Collusion Prevention</h3>
            <p style="margin:0;font-size:14px;color:#e8d5c4;">Advanced algorithms detect suspicious betting patterns and player relationships, with regular audits of hand histories to identify potential collusion.</p>
          </div>
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;color:#f0d1b3;font-size:16px;">Bot Detection</h3>
            <p style="margin:0;font-size:14px;color:#e8d5c4;">Behavior analysis tools identify non-human playing patterns, with CAPTCHA challenges for suspicious accounts and manual review of flagged accounts.</p>
          </div>
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;color:#f0d1b3;font-size:16px;">Random Number Generation</h3>
            <p style="margin:0;font-size:14px;color:#e8d5c4;">Industry-standard RNG certificate ensures truly random card dealing, with each shuffle and deal verifiable.</p>
          </div>
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;color:#f0d1b3;font-size:16px;">Multi-Account Prevention</h3>
            <p style="margin:0;font-size:14px;color:#e8d5c4;">Wallet-based authentication prevents multi-accounting, with device fingerprinting and IP monitoring to detect suspicious login patterns.</p>
          </div>
        </div>
      </article>
    `
  },
  {
    title: "Technology Design",
    slug: "architecture",
    group: "Technical",
    description: "Hybrid on-chain/off-chain system design.",
    html: `
      <article class="callout" style="padding:24px;border:1px solid rgba(255,255,255,.05);border-radius:12px;margin-bottom:40px;background:none;">
        <p style="margin:0;">Purr Poker employs a hybrid architecture that combines the security of blockchain with the performance of traditional gaming infrastructure, creating a seamless and trustless poker experience.</p>
      </article>
      <h2>Hybrid Approach Overview</h2>
      <article class="callout" style="padding:24px;border:1px solid rgba(255,255,255,.05);border-radius:12px;margin-bottom:40px;background:none;">
        <h3 style="margin-top:0;color:#f0d1b3;">The Best of Both Worlds</h3>
        <p>Purr Poker strategically allocates responsibilities between blockchain (on-chain) and traditional server (off-chain) components to maximize both security and performance. This hybrid approach provides the trust and transparency of blockchain while maintaining the real-time gameplay experience players expect.</p>
        <div class="feature-grid" style="margin-bottom:0;">
          <article style="background:none; border:none; padding:0;">
            <h3 style="font-size:16px;">On-Chain Components (Hyperliquid EVM)</h3>
            <ul>
              <li><strong>Fund Security:</strong> Player deposits and withdrawals funds directly using a "Poker Table" smart contract</li>
              <li><strong>Settlement:</strong> Final balance adjustments after hands</li>
              <li><strong>Rake Collection:</strong> Transparent fee distribution</li>
              <li><strong>Buyback Mechanism:</strong> Automated token buyback and burn</li>
              <li><strong>Token Operations:</strong> Staking, governance, and utility</li>
            </ul>
          </article>
          <article style="background:none; border:none; padding:0;">
            <h3 style="font-size:16px;">Off-Chain Components (Server)</h3>
            <ul>
              <li><strong>Game Logic:</strong> Card dealing, betting rounds, hand evaluation</li>
              <li><strong>Real-time Interactions:</strong> Player actions and responsiveness</li>
              <li><strong>State Management:</strong> Tracking the evolving game state</li>
              <li><strong>User Experience:</strong> Low-latency gameplay and visualizations</li>
              <li><strong>Tournament Management:</strong> Brackets, timers, and coordination</li>
              <li><strong>Anti-Fraud Systems:</strong> Collusion detection and fair play monitoring</li>
            </ul>
          </article>
        </div>
      </article>
      <h2>Key Technology Components</h2>
      <ol class="steps">
        <li>
          <strong>Table Smart Contract</strong><br/>
          Built on Hyperliquid EVM, the Table Contract acts as a secure escrow for player funds and handles all financial transactions. It includes the following features:
          <ul>
            <li>Secure deposit and withdrawal functions</li>
            <li>Cryptographically secured balance updates</li>
            <li>Transparent rake collection and distribution</li>
            <li>Permission systems to protect player funds</li>
            <li>Verification of server signatures for balance changes</li>
          </ul>

        </li>
        <li>
          <strong>Game Server</strong><br/>
          Our high-performance gaming server handles all gameplay logic and maintains the state of active games. Key components include:
          <ul>
            <li>Real-time WebSocket communication</li>
            <li>Cryptographic random number generation</li>
            <li>Texas Hold'em rule enforcement</li>
            <li>Anti-cheat and collusion detection systems</li>
            <li>Signature generation for secure settlements</li>
            <li>State persistence and recovery mechanisms</li>
          </ul>
          <a href="/architecture/backend" style="color:#e5cda8;text-decoration:none;font-size:14px;margin-top:10px;display:inline-block;">View server architecture details →</a>
        </li>
        <li>
          <strong>Client Application</strong><br/>
          Our responsive web application provides a seamless interface for players to interact with the platform:
          <ul>
            <li>Intuitive poker interface with animations and visual cues</li>
            <li>Wallet integration for seamless blockchain interactions</li>
            <li>State synchronization with the game server</li>
            <li>Multi-table support (future release)</li>
            <li>Mobile-responsive design</li>
            <li>Built with modern web technologies (React, TypeScript)</li>
          </ul>
        </li>
        <li>
          <strong>Settlement System</strong><br/>
          Our settlement system bridges the on-chain and off-chain components with cryptographic security:
          <ul>
            <li>Server signs game outcome with private key</li>
            <li>Smart contract verifies signature authenticity</li>
            <li>Only valid, authorized outcomes can update balances</li>
            <li>Provides non-repudiation and tamper resistance</li>
            <li>Records all settlements for transparency and auditability</li>
          </ul>
        </li>
      </ol>
      <h2>Technical Advantages</h2>
      <div class="feature-grid">
        <article>
          <h3>High Performance</h3>
          <p>By handling gameplay off-chain, we avoid blockchain latency and gas costs for every action, while still providing the security of on-chain settlements. This results in a smooth, responsive experience comparable to traditional poker sites.</p>
        </article>
        <article>
          <h3>True Security</h3>
          <p>Player funds are always held in smart contracts rather than centralized accounts. The game server <strong>cannot</strong> withdraw or transfer funds, eliminating counterparty risk.</p>
        </article>
      </div>
    `
  },
  {
    title: "Backend Architecture",
    slug: "architecture/backend",
    group: "Technical",
    description: "Real-time game server, Redis, blockchain service, and settlement flow.",
    html: `
      <article class="callout" style="padding:24px;border:1px solid rgba(255,255,255,.05);border-radius:12px;margin-bottom:40px;background:none;">
        <p style="margin:0;">Purr Poker's backend architecture is designed to handle real-time game processing while maintaining tight integration with blockchain systems for security and fund management.</p>
      </article>
      <h2>System Overview</h2>
      <div class="diagram tall"><span>Game Server Cluster: game logic, state management, WebSockets</span><span>Blockchain Service: contract interactions, signing, balance monitoring</span><span>Redis: game state cache, Pub/Sub, session management</span><span>API Gateway: authentication and rate limiting</span><span>Analytics & Hand History: event processing, storage, replay</span></div>
      <h2>Core Components</h2>
      <div class="feature-grid">
        <article>
          <h3>Game Server</h3>
          <p>The heart of Purr Poker's backend, responsible for managing game logic, player actions, and state.</p>
          <ul>
            <li>Built with Node.js for high concurrency and low latency</li>
            <li>Implements Texas Hold'em rules and hand evaluation</li>
            <li>Manages betting rounds, turn timers, and showdowns</li>
            <li>Handles player connectivity and reconnection</li>
            <li>Signs settlement transactions for blockchain processing</li>
          </ul>
        </article>
        <article>
          <h3>WebSocket Service</h3>
          <p>Maintains real-time communication between clients and the game server.</p>
          <ul>
            <li>Socket.IO implementation with fallback options</li>
            <li>Automatic reconnection with session persistence</li>
            <li>Message queueing for disconnected clients</li>
            <li>Secure protocol with JWT authentication</li>
            <li>Optimized binary transmission for game state updates</li>
          </ul>
        </article>
        <article>
          <h3>Blockchain Service</h3>
          <p>Bridges the game server with the Hyperliquid blockchain.</p>
          <ul>
            <li>Monitors contract events for deposits and withdrawals</li>
            <li>Prepares and signs settlement transactions</li>
            <li>Implements retry logic for transaction failures</li>
            <li>Maintains player balance synchronization</li>
            <li>Manages secure key storage for transaction signing</li>
          </ul>
        </article>
        <article>
          <h3>Redis Database</h3>
          <p>In-memory data store for fast access to critical game data.</p>
          <ul>
            <li>Stores active game states for quick recovery</li>
            <li>Powers Pub/Sub for inter-service communication</li>
            <li>Manages player sessions and tables</li>
            <li>Implements distributed locking for concurrent operations</li>
            <li>Persists critical data with AOF and RDB backup</li>
          </ul>
        </article>
      </div>
      <h2>Data Flow</h2>
      <ol class="steps">
        <li>
          <strong>Player Action</strong><br/>
          A player makes a move (bet, fold, check, etc.) through the client interface. This action is sent to the server via WebSocket.
        </li>
        <li>
          <strong>Game Processing</strong><br/>
          The game server validates the action, updates the game state, and determines next steps. The updated game state is stored in Redis and broadcast to all players at the table.
        </li>
        <li>
          <strong>Hand Completion</strong><br/>
          When a hand completes, the server calculates the pot distribution, determines rake, and prepares a settlement transaction. The complete hand history is stored in the database.
        </li>
        <li>
          <strong>Blockchain Settlement</strong><br/>
          The Blockchain Service signs and submits the settlement transaction to the Table Contract. It monitors the transaction until it is confirmed and updates player balances accordingly.
        </li>
      </ol>
      <h2>High Availability & Scalability</h2>
      <div class="feature-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
        <article>
          <h3>Load Balancing</h3>
          <p>Multiple game server instances are deployed behind a load balancer to distribute traffic and ensure high availability. WebSocket connections use sticky sessions to maintain consistency.</p>
        </article>
        <article>
          <h3>Redis Clustering</h3>
          <p>Redis is deployed in a clustered configuration with replica nodes for fault tolerance. Sentinel monitors the nodes and performs automatic failover if the master node becomes unavailable.</p>
        </article>
        <article>
          <h3>Microservices</h3>
          <p>The backend is designed as a collection of microservices that can be scaled independently based on demand. This allows for efficient resource allocation and easier updates.</p>
        </article>
      </div>
      <h2>Security Measures</h2>
      <article class="callout" style="padding:24px;border:1px solid rgba(255,255,255,.05);border-radius:12px;background:none;">
        <div class="feature-grid" style="margin:0;">
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;color:#f0d1b3;font-size:16px;">Authentication & Authorization</h3>
            <ul style="color:#e8d5c4;">
              <li>JWT-based authentication with short expiration</li>
              <li>Role-based access control for admin functions</li>
              <li>Rate limiting to prevent abuse</li>
              <li>IP-based restrictions for sensitive operations</li>
            </ul>
          </div>
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;color:#f0d1b3;font-size:16px;">Data Protection</h3>
            <ul style="color:#e8d5c4;">
              <li>All traffic encrypted with TLS 1.3</li>
              <li>Sensitive data stored with AES-256 encryption</li>
              <li>Private keys managed in HSM</li>
              <li>Regular security audits and penetration testing</li>
            </ul>
          </div>
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;color:#f0d1b3;font-size:16px;">Anti-Cheating Measures</h3>
            <ul style="color:#e8d5c4;">
              <li>Server-side card validation</li>
              <li>Collusion detection algorithms</li>
              <li>Behavior analysis for bot detection</li>
              <li>Real-time game monitoring</li>
            </ul>
          </div>
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;color:#f0d1b3;font-size:16px;">Fault Tolerance</h3>
            <ul style="color:#e8d5c4;">
              <li>Automated backup and recovery procedures</li>
              <li>Graceful degradation under high load</li>
              <li>Circuit breakers for failing services</li>
              <li>Comprehensive monitoring and alerting</li>
            </ul>
          </div>
        </div>
      </article>
    `
  },
  {
    title: "Table Smart Contract",
    slug: "contracts/table",
    group: "Technical",
    description: "Table contract security model and key methods.",
    html: `
      <article class="callout" style="padding:24px;border:1px solid rgba(255,255,255,.05);border-radius:12px;margin-bottom:40px;background:none;">
        <p style="margin:0;">The Table Contract is the core of Purr Poker's security model. It serves as a trustless escrow for player funds while ensuring only authorized settlement operations can modify player balances.</p>
      </article>
      <h2>Contract Overview</h2>
      <p>Each poker table in Purr Poker is represented by a unique smart contract deployed on the Hyperliquid blockchain. This contract handles all financial aspects of the game, including:</p>
      <ul>
        <li>Managing player deposits and withdrawals through a request-approval system</li>
        <li>Holding player funds in escrow during gameplay</li>
        <li>Settling balances after each hand based on game results</li>
        <li>Collecting and distributing rake based on pot size</li>
        <li>Enforcing table-specific rules (buy-in limits, max players, etc.)</li>
        <li>Managing player seating at the table</li>
      </ul>
      <h2>Security Model</h2>
      <div class="feature-grid">
        <article>
          <h3 style="margin-top:0;">Access Control</h3>
          <p style="margin-bottom:0;">Critical functions are restricted to the designated operator address using the onlyOperator modifier. This ensures that only authorized entities can perform actions like settling hands and kicking players.</p>
        </article>
        <article>
          <h3 style="margin-top:0;">Mathematical Validation</h3>
          <p style="margin-bottom:0;">The contract enforces mathematical invariants, such as requiring balance adjustments to sum to zero during hand settlement, ensuring the game remains a zero-sum system (minus the rake).</p>
        </article>
      </div>
      <h2>Key Contract Methods</h2>
      <table><thead><tr><th>Method</th><th>Description</th><th>Access</th></tr></thead><tbody>
        <tr><td><code>requestToJoin()</code></td><td>Players can request to join a table by sending funds as a buy-in</td><td>Public</td></tr>
        <tr><td><code>approvePlayerWithSeat(address player, uint8 seatNumber)</code></td><td>Operator approves a player's join request and assigns them to a specific seat</td><td>Operator Only</td></tr>
        <tr><td><code>requestToLeave()</code></td><td>Players request to leave the table and withdraw their funds</td><td>Public</td></tr>
        <tr><td><code>approveLeaveRequest(address player)</code></td><td>Operator approves a player's request to leave and returns their funds</td><td>Operator Only</td></tr>
        <tr><td><code>settleHand(address[] memory players, int256[] memory adjustments, uint256 totalPot)</code></td><td>Updates player balances after a hand, calculating and collecting rake. Adjustments must sum to zero.</td><td>Operator Only</td></tr>
        <tr><td><code>kickPlayer(address player)</code></td><td>Forcibly removes a player from the table and returns their funds, without requiring them to make a request</td><td>Operator Only</td></tr>
        <tr><td><code>withdrawRake()</code></td><td>Withdraws accumulated rake to the designated rake receiver address</td><td>Operator Only</td></tr>
        <tr><td><code>updateTableParameters()</code></td><td>Updates table parameters like buy-in limits and rake percentage</td><td>Operator Only</td></tr>
        <tr><td><code>emergencyWithdraw()</code></td><td>Allows players to withdraw their funds if the operator has been inactive for the timeout period</td><td>Public (after timeout)</td></tr>
      </tbody></table>
      <h2>How Settlement Works</h2>
      <ol class="steps">
        <li><strong>Hand Completion</strong><br/>When a hand completes, the server calculates the balance adjustments for each player and the total pot size.</li>
        <li><strong>Zero-Sum Validation</strong><br/>The contract verifies that the sum of all balance adjustments equals zero, ensuring that the game remains a zero-sum system where money cannot be created or destroyed (excluding rake).</li>
        <li><strong>Rake Calculation</strong><br/>Based on the total pot size, the contract calculates the rake amount using the configured rake percentage. The rake is proportionally deducted from the winner's profits.</li>
        <li><strong>Balance Updates</strong><br/>The contract updates each player's balance according to their adjustment, minus their share of the rake if they won. The total rake is accumulated for later withdrawal by the rake receiver.</li>
      </ol>
      <h2>Security Measures</h2>
      <article class="callout" style="padding:24px;border:1px solid rgba(255,255,255,.05);border-radius:12px;margin-bottom:16px;background:none;">
        <h3 style="margin-top:0;display:flex;align-items:center;gap:8px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg> Reentrancy Protection</h3>
        <p style="margin-bottom:0;">The contract uses OpenZeppelin's ReentrancyGuard to prevent reentrancy attacks during fund transfers, ensuring that critical operations cannot be exploited through callback functions.</p>
      </article>
      <article class="callout" style="padding:24px;border:1px solid rgba(255,255,255,.05);border-radius:12px;margin-bottom:16px;background:none;">
        <h3 style="margin-top:0;display:flex;align-items:center;gap:8px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg> Request-Approval Flow</h3>
        <p style="margin-bottom:0;">Players must request to join or leave the table, with the operator explicitly approving these requests. This provides an additional layer of security and allows for validation before executing critical operations.</p>
      </article>
      <article class="callout" style="padding:24px;border:1px solid rgba(255,255,255,.05);border-radius:12px;margin-bottom:0;background:none;">
        <h3 style="margin-top:0;display:flex;align-items:center;gap:8px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> Emergency Timeout System</h3>
        <p style="margin-bottom:0;">The contract includes a timeout mechanism that allows players to withdraw their funds if the operator has been inactive for an extended period (4 hours), preventing funds from being permanently locked.</p>
      </article>
    `
  },
  {
    title: "Roadmap",
    slug: "roadmap",
    group: "Project",
    description: "Milestones from launch to token and ecosystem expansion.",
    html: `
      <article class="callout" style="padding:24px;border:1px solid rgba(255,255,255,.05);border-radius:12px;margin-bottom:40px;background:none;">
        <p style="margin:0;">The Purr Poker development roadmap outlines our journey from concept to launch and beyond, with a focus on building a secure, decentralized poker platform on the Hyperliquid blockchain.</p>
      </article>
      <h2>Project Milestones</h2>
      <ul style="list-style-type:disc;padding-left:20px;margin-bottom:40px;">
        <li style="margin-bottom:40px;color:#f0d1b3;">
          <h3 style="display:inline-block;margin:0 0 16px 0;font-size:18px;">2025 <span style="font-size:14px;color:#a9bbc9;font-style:italic;">(Q3)</span></h3>
          <h4 style="margin:0 0 16px 0;font-size:16px;">Platform Launch</h4>
          <div class="feature-grid">
            <article>
              <h5 style="margin-top:0;font-size:15px;color:#f0d1b3;">Platform Launch</h5>
              <ul style="margin-bottom:0;color:#e8d5c4;">
                <li>Public beta release of Purr Poker platform</li>
                <li>Initial cash games and tournament structures</li>
                <li>Smart contract deployment on Hyperliquid</li>
                <li>Mobile-responsive web application</li>
                <li>Basic game mode (No-Limit Texas Hold'em)</li>
              </ul>
            </article>
          </div>
        </li>
        <li style="margin-bottom:40px;color:#f0d1b3;">
          <h3 style="display:inline-block;margin:0 0 16px 0;font-size:18px;">2025 <span style="font-size:14px;color:#a9bbc9;font-style:italic;">(Q4)</span></h3>
          <h4 style="margin:0 0 16px 0;font-size:16px;">Season 1 & Platform Upgrades</h4>
          <div class="feature-grid">
            <article>
              <h5 style="margin-top:0;font-size:15px;color:#f0d1b3;">Distribution Season 1</h5>
              <ul style="margin-bottom:0;color:#e8d5c4;">
                <li>First community rewards points distribution period</li>
                <li>Player activity-based points rewards</li>
                <li>Leaderboard rewards for top players</li>
              </ul>
            </article>
            <article>
              <h5 style="margin-top:0;font-size:15px;color:#f0d1b3;">Platform Upgrades</h5>
              <ul style="margin-bottom:0;color:#e8d5c4;">
                <li>Add Tournaments</li>
                <li>In-Game features: Run it twice, bombpot, etc.</li>
                <li>Additional game mode: Pot Limit Omaha.</li>
              </ul>
            </article>
          </div>
        </li>
        <li style="margin-bottom:40px;color:#f0d1b3;">
          <h3 style="display:inline-block;margin:0 0 16px 0;font-size:18px;">2026 <span style="font-size:14px;color:#a9bbc9;font-style:italic;">(Q1-Q2)</span></h3>
          <h4 style="margin:0 0 16px 0;font-size:16px;">$POKER Token Launch & Season 1 End</h4>
          <div class="feature-grid">
            <article>
              <h5 style="margin-top:0;font-size:15px;color:#f0d1b3;">Poker Token Launch</h5>
              <ul style="margin-bottom:0;color:#e8d5c4;">
                <li>Public token launch on DEXs</li>
                <li>Initial liquidity bootstrap program</li>
                <li>Implementation of token utility features</li>
                <li>Staking contracts deployment</li>
                <li>Liquidity providers rewards</li>
              </ul>
            </article>
            <article>
              <h5 style="margin-top:0;font-size:15px;color:#f0d1b3;">Community Distribution</h5>
              <ul style="margin-bottom:0;color:#e8d5c4;">
                <li>Season 1 ends</li>
                <li>Community Distribution for Season 1: 70% of the total supply allocated to the community (70%)</li>
              </ul>
            </article>
          </div>
        </li>
        <li style="margin-bottom:40px;color:#f0d1b3;">
          <h3 style="display:inline-block;margin:0 0 16px 0;font-size:18px;">2026 <span style="font-size:14px;color:#a9bbc9;font-style:italic;">(Q1-Q2)</span></h3>
          <h4 style="margin:0 0 16px 0;font-size:16px;">Advanced Features & Ecosystem Development</h4>
          <div class="feature-grid">
            <article>
              <h5 style="margin-top:0;font-size:15px;color:#f0d1b3;">Advanced Platform Features</h5>
              <ul style="margin-bottom:0;color:#e8d5c4;">
                <li>Mobile native apps (iOS & Android)</li>
                <li>Advanced staking tiers and benefits</li>
                <li>Built-in tournament creation tools</li>
                <li>Integration with additional blockchains</li>
              </ul>
            </article>
            <article>
              <h5 style="margin-top:0;font-size:15px;color:#f0d1b3;">Ecosystem Expansion</h5>
              <ul style="margin-bottom:0;color:#e8d5c4;">
                <li>Season 2 of token distributions</li>
                <li>Enhanced platform features and rewards</li>
              </ul>
            </article>
          </div>
        </li>
      </ul>
      <article class="callout" style="padding:24px;border:1px solid rgba(255,255,255,.05);border-radius:12px;margin-bottom:40px;background:none;">
        <h2 style="margin-top:0;border:none;padding-bottom:0;">Long-term Vision</h2>
        <p>Beyond our initial roadmap, Purr Poker aims to become the premier decentralized poker platform with several ambitious goals:</p>
        <div class="feature-grid">
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;font-size:16px;color:#f0d1b3;">Platform Expansion</h3>
            <p style="font-size:14px;color:#e8d5c4;margin-bottom:0;">Continued expansion of the platform with more game variants, features, and innovative gameplay mechanics that enhance the player experience.</p>
          </div>
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;font-size:16px;color:#f0d1b3;">Major Tournament Series</h3>
            <p style="font-size:14px;color:#e8d5c4;margin-bottom:0;">Establish prestigious, high-prize tournament series that rival traditional poker championships, attracting professional players to the platform.</p>
          </div>
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;font-size:16px;color:#f0d1b3;">Poker Innovation</h3>
            <p style="font-size:14px;color:#e8d5c4;margin-bottom:0;">Pioneer new poker variants and gameplay innovations that are only possible in a blockchain environment, pushing the boundaries of the game.</p>
          </div>
        </div>
      </article>
    `
  },
  {
    title: "About Us",
    slug: "about-us",
    group: "Project",
    description: "Company details and philosophy.",
    html: `
      <h2>Our Team</h2>
      <div class="callout" style="padding:24px;border:1px solid rgba(255,255,255,.05);border-radius:12px;margin-bottom:40px;background:rgba(255,255,255,.02);">
        <p style="margin:0;">Purr Poker is built by a small, dedicated team of poker enthusiasts and crypto experts committed to creating a player-owned poker platform that combines the best of both worlds.</p>
      </div>

      <h2>Core Team</h2>
      <div class="feature-grid" style="grid-template-columns: 1fr; margin-bottom: 40px;">
        <article style="display:flex;align-items:center;gap:24px;padding:30px;">
          <div style="flex-shrink:0;">
            <img src="/0xmeerkat.png" alt="0xMeerkat" style="width:160px; height:160px; border-radius:50%; object-fit:cover; border:2px solid rgba(255,255,255,.1);" />
          </div>
          <div style="flex:1;">
            <div style="display:flex;align-items:center;gap:12px;">
              <h3 style="margin:0;font-size:24px;color:#f0d1b3;">0xMeerkat</h3>
              <a href="https://x.com/macro_meerkat" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;color:#a9bbc9;transition:color 0.2s;" onMouseOver="this.style.color='#fff'" onMouseOut="this.style.color='#a9bbc9'">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <p style="margin:4px 0 12px;color:#a9bbc9;font-size:16px;">Founder</p>
            <p style="margin:0;font-size:14px;line-height:1.6;">With almost 10 years experience as an Tradfi market-maker, with an extensive background in FX, bonds and derivatives, 0xMeerkat brings financial expertise to Purr Poker. An avid poker player and crypto trader, he combines his passion for both worlds to create a truly player-focused platform.</p>
          </div>
        </article>
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
        </article>
      </div>
      <h2>Our Philosophy</h2>
      <div class="feature-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
        <article>
          <div style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.05);display:grid;place-items:center;margin-bottom:16px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a9bbc9" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3 style="margin-top:0;">Community First</h3><p>We believe that players should own the platform they play on. That's why we're allocating 65% of tokens to the community and redistributing 65% of revenue through our buyback model.</p>
        </article>
        <article>
          <div style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.05);display:grid;place-items:center;margin-bottom:16px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a9bbc9" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
          </div>
          <h3 style="margin-top:0;">Transparency & Trust</h3><p>Everything we do is transparent - from our provably fair gameplay mechanics to on-chain revenue distribution. Trust is built through verifiable systems, not promises.</p>
        </article>
        <article>
          <div style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.05);display:grid;place-items:center;margin-bottom:16px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a9bbc9" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <h3 style="margin-top:0;">Minimal Marketing, Maximum Value</h3><p>We're focused on building a superior product rather than flashy marketing campaigns. Our growth strategy relies on word-of-mouth from satisfied players who recognize the value of our low-rake, high-reward ecosystem.</p>
        </article>
      </div>
      <article class="callout" style="padding:30px;border:1px solid rgba(255,255,255,.05);border-radius:12px;margin-top:40px;background:rgba(255,255,255,0.02);">
        <h3 style="margin-top:0;font-size:20px;">Join Our Team</h3>
        <p>While our core team is small by design, we're always interested in connecting with talented individuals who share our passion for poker and decentralized technology. If you're interested in contributing to Purr Poker, reach out through:</p>
        <div style="display:flex;gap:16px;margin-top:24px;">
          <a href="https://discord.gg/purrpoker" target="_blank" rel="noreferrer" style="display:flex;align-items:center;gap:8px;background:rgba(255,255,255,0.05);padding:10px 20px;border-radius:8px;color:#e8d5c4;text-decoration:none;font-weight:500;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.05.05 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
            Discord
          </a>
          <a href="mailto:admin@purrpoker.xyz" style="display:flex;align-items:center;gap:8px;background:rgba(255,255,255,0.05);padding:10px 20px;border-radius:8px;color:#e8d5c4;text-decoration:none;font-weight:500;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Email Us
          </a>
        </div>
      </article>
    `
  },
  {
    title: "FAQ",
    slug: "faq",
    group: "Project",
    description: "Frequently Asked Questions",
    html: `
      <h3 style="color:#f0d1b3;">1. Why should I play on your site?</h3>\n      <p>Most poker sites rely on a convoluted and opaque rewards system—rakeback tiers, bad beat jackpots, lottery chests, cashback promos. But let’s be honest: the bulk of those “rewards” go to business owners, agents, and affiliates. In many cases, affiliates walk away with half the rake. That’s not a joke—half. And when they negotiate deals, players are treated like inventory: “I can bring 10,000 players to your site." It’s an outdated model built around middlemen, and it’s reached a saturation point. Nobody wants to lower rake anymore because nobody wants to give up their slice of the pie.</p>\n      <p>In short, it's very negative EV to play on mainstream sites!</p>\n      <p>At PurrPoker, we believe there’s a better way forward. Give us the chance to build a modern, transparent, and fully onchain poker platform that actually puts players first. We're not just talking—we're giving away 65% of the protocol over the next three years through our airdrop and incentives program. That's not marketing spin—it’s a real ownership offer. And in our view, it’s one of the most generous equity distributions in this space.</p>\n      <p>We run a lean, focused team—no bloat, no influencer circus, no artificial hype. That lets us pass the cost savings back to you. We avoid wasteful marketing spend but don’t cut corners where it matters—security is non-negotiable.</p>\n      <p>As the protocol matures, we plan to lower the rake even further and introduce a more aggressive, performance-based rakeback system. But early on, the real value comes from equity distribution. We're here to disrupt poker with web3 principles: transparency, ownership, and open access.</p>\n      <p>So if you believe in that vision—pull up a seat.</p>\n      <h3 style="color:#f0d1b3;">2. Why build on Hyperliquid EVM?</h3>\n      <p>Hyperliquid EVM is one of the fastest-growing ecosystems in crypto right now—and for good reason. It’s fast, low-gas and purpose-built for high-performance DeFi and onchain applications.</p>\n      <p>We believe it represents the future model of blockchain tech: scalable, composable, and wallet-native. No unnecessary overhead, no L1 lag, no rollup spaghetti. Just a clean, vertical stack that works.</p>\n      <p>For us, that means:</p>\n      <p style="margin-left: 20px;">• Seamless gameplay straight from your wallet
• Instant settlement
• Real composability with the rest of onchain DeFi
• True transparency—nothing hidden, everything onchain</p>\n      <h3 style="color:#f0d1b3;">3. What makes PurrPoker special?</h3>\n      <p>Crypto-native to the core. We're aligned with web3 values: transparency, fairness, and ownership.</p>\n      <p>No counterparty risk. Play directly from your wallet. No deposits, no intermediaries, no lock-ins.</p>\n      <p>Lean team, real mission. We're not here to milk VC grants or hand tokens to influencers. All value flows back to the players.</p>\n      <p>Low rake, high rewards, no strings. No confusing rakeback or loyalty schemes. We’re the first to run this model, and it’s what inspired us to build PurrPoker.</p>\n      <p>Regulated and responsible. Licensed and compliant without compromising crypto ethos.</p>\n      <p>No fluff marketing. We’re not against it—but we’ve set a high hurdle. No forced sponsorships, no influencer circus. If you earn it, you get rewarded.</p>\n      <h3 style="color:#f0d1b3;">4. What's our vision?</h3>\n      <p>To build the go-to poker protocol in crypto—fully onchain, fully transparent, and fully owned by its players.</p>\n      <p>We’re creating a player-first platform with:<br/>• Open performance metrics visible only to you: lifetime BB/100 won, performance variance, seat stats<br/>• Onchain rake + rewards, visible to anyone, anytime<br/>• Transparent, provable outcomes<br/>• Player governance and shared upside via protocol token</p>\n      <p>We also aim to challenge mainstream poker sites as crypto adoption accelerates via web3 ethos.</p>\n      <h3 style="color:#f0d1b3;">5. Will you be issuing a token?</h3>\n      <p>Yes, Issuing a token allows us to align the incentives of the platform with the players from day one. It’s not about speculation—it’s about coordination. A token lets us bootstrap the ecosystem without relying on extractive models like high rake, opaque rewards, or centralized decision-making. Instead, it enables us to run a lean protocol with lower rake, higher rewards, and onchain transparency. No lotteries, no hidden cashback loops—just clean, provable, player-aligned economics. Over time, it also opens the door to player governance and true protocol ownership, where the people who use PurrPoker are the ones who shape its future.</p>\n      <h3 style="color:#f0d1b3;">6. Do I need to KYC?</h3>\n      <p>As we are still in an invite-only beta phase, not for now. However, in future as we grow larger and fall into various regulatory purview, we may implement KYC for large pots (>$10,000). Fret not, your funds will never be frozen (we have no ability to), just that your address may be denied from being dealt hands after a pre-defined time period.</p>\n      <h3 style="color:#f0d1b3;">7. Why does my wallet shows a phishing risk for PurrPoker?</h3>\n      <p>Note that this is not an indication that our contract is malicious. It simply means the contract is new and has not yet built up reputation in your wallet’s risk-scoring system. <br/>Think of it like a brand-new website: until traffic and verification data exist, security plugins default to “unknown”.</p>\n      <p>The contract is deployed by our official team the code is verified on-chain and can be independently inspected.</p>\n      <p>We encourage anyone to test with a small amount first and review transactions via a block explorer.</p>\n      <p>After the game, you may revoke the allowances as a good wallet hygiene pratice.</p>\n      <p>As the user base grows, we plan to reach out to wallet providers so this warning should disappear. In the meantime, rest assured: if you interact only with our official contract, you are safe.</p>\n      <h3 style="color:#f0d1b3;">8. I am having trouble adding HyperEVM network to my wallet.</h3>
      <p>Try https://chainlist.org/</p>\n      <p>Can't see your USDT0? Add manually via token contract: 0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb</p>\n      <h3 style="color:#f0d1b3;">9. Can owners see our hole cards?</h3>\n      <p>We take security & fairness very seriously. We designed the system so trust isn’t required, and even we can’t see or tamper with live cards.</p>\n      <p>Security & Fairness<br/>PurrPoker is built with a strict “operator-blind” architecture. Hole cards and sensitive game data are encrypted end-to-end and only decrypted on the player’s client at the moment they are needed. Core game logic, dealing, and settlement are isolated from administrative systems, and no employee (including founders or developers) has direct access to live game state or player cards. All critical actions are automatically logged in tamper-evident systems, making unauthorized access detectable and auditable. Settlement and balances are enforced onchain via smart contracts, removing discretionary control and reducing attack surface. <br/>In short: we cannot peek, alter outcomes, or quietly intervene — the system is intentionally designed so that doing so would be technically infeasible and immediately detectable.</p>\n      <h3 style="color:#f0d1b3;">10. What are your fees?</h3>\n      <p style="color:white; font-weight:bold;">3.5% capped</p>\n      <p>Eg. For $1/2 6-players, if the pot post-flop is $100, the rake is $3.5.<br/>If the pot is $300, the rake is $4 (capped at 2BB).<br/>If there are only 3 seated players, the rake is $2.5 as a 50% discount is applied to the cap.</p>\n      <p>PurrPoker embraces Hyperliquid's ethos of keeping fees minimal. We operate with a lean team, meaning less spend on marketing and fewer reward handouts - allowing us to pass the savings on to players. We also follow a "No flop, no drop" policy: if a hand doesn't see a flop, no rake is taken.<br/>We absorb all gas fees during play — you only pay gas once when sitting down.</p>\n      <p>For tournaments, a 10% fee is applied.</p>\n      <img src="/rake.png" alt="Rake Info" style="width:100%; max-width: 600px; margin: 40px auto 10px; display: block; border-radius: 12px;" />
    `
  },
  {
    title: "Community Guidelines",
    slug: "community",
    group: "Community & Legal",
    description: "Rules for fair play, communication, and contributions.",
    html: `
      <article class="callout" style="padding:24px;border:1px solid rgba(255,255,255,.05);border-radius:12px;margin-bottom:40px;background:none;">
        <p style="margin:0;">The Purr Poker community is built on principles of fairness, respect, and collaboration. These guidelines help ensure a positive environment for all participants while maintaining the integrity of the platform.</p>
      </article>
      <h2>Community Values</h2>
      <div class="feature-grid">
        <article>
          <h3 style="margin-top:0;">Fair Play</h3>
          <p>Integrity is at the core of poker. Collusion, chip dumping, multi-accounting, and using bots or external assistance are strictly prohibited. We enforce fair play through advanced monitoring tools and will take action against violations.</p>
        </article>
        <article>
          <h3 style="margin-top:0;">Constructive Communication</h3>
          <p>Feedback and discussions help improve the platform. Express your thoughts clearly and constructively, focusing on ideas rather than individuals. Listen actively to others and be open to different perspectives within the community.</p>
        </article>
      </div>
      <h2>Chat & Communication Rules</h2>
      <ol class="steps">
        <li>
          <strong>Table Chat Etiquette</strong>
          <ul>
            <li>No abusive language, harassment, or personal attacks</li>
            <li>Avoid discussing active hands while play is in progress</li>
            <li>No sharing of hole card information during multi-way pots</li>
            <li>Keep conversations respectful, even during tough beats</li>
            <li>English is recommended for global tables, but other languages are acceptable for private games</li>
          </ul>
        </li>
        <li>
          <strong>Forum & Discord Rules</strong>
          <ul>
            <li>Stay on topic in dedicated channels and threads</li>
            <li>No spam, excessive self-promotion, or advertising</li>
            <li>Respect moderator decisions and platform rules</li>
            <li>Use appropriate channels for bug reports, feature requests, and support</li>
            <li>Protect your privacy and never share personal financial information</li>
          </ul>
        </li>
      </ol>
      <h2>Community Contributions</h2>
      <article class="callout" style="padding:24px;border:1px solid rgba(255,255,255,.05);border-radius:12px;background:none;">
        <p style="margin-top:0;margin-bottom:24px;">The Purr Poker ecosystem thrives through active community participation. Here are ways to contribute:</p>
        <div class="feature-grid" style="margin:0;">
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;font-size:16px;color:#f0d1b3;">Development & Testing</h3>
            <ul style="color:#e8d5c4;">
              <li>Report bugs through the dedicated bug bounty program</li>
              <li>Participate in beta testing of new features</li>
              <li>Contribute code or documentation improvements</li>
              <li>Submit security vulnerability reports responsibly</li>
              <li>Test and validate blockchain integrations</li>
            </ul>
          </div>
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;font-size:16px;color:#f0d1b3;">Content & Education</h3>
            <ul style="color:#e8d5c4;">
              <li>Create tutorials and guides for new players</li>
              <li>Host community events and tournaments</li>
              <li>Translate platform content to other languages</li>
              <li>Produce educational content about poker strategy</li>
              <li>Answer questions from new community members</li>
            </ul>
          </div>
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;font-size:16px;color:#f0d1b3;">Economics</h3>
            <ul style="color:#e8d5c4;">
              <li>Provide economic analysis and feedback</li>
              <li>Help audit platform tokenomics and incentives</li>
              <li>Represent the community in ecosystem initiatives</li>
            </ul>
          </div>
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;font-size:16px;color:#f0d1b3;">Community Building</h3>
            <ul style="color:#e8d5c4;">
              <li>Welcome and help onboard new players</li>
              <li>Moderate community channels and discussions</li>
              <li>Represent Purr Poker in poker and blockchain forums</li>
              <li>Organize community teams for tournaments</li>
              <li>Provide feedback on community initiatives</li>
            </ul>
          </div>
        </div>
      </article>
    `
  },
  {
    title: "Legal & Compliance",
    slug: "legal",
    group: "Community & Legal",
    description: "Company details, platform approach, and compliance notes.",
    html: `
      <article class="callout" style="padding:24px;border:1px solid rgba(255,255,255,.05);border-radius:12px;margin-bottom:40px;background:none;">
        <p style="margin:0;">Purr Poker operates as a decentralized poker platform, adhering to applicable regulations while maintaining the permissionless ethos of decentralized finance.</p>
      </article>
      <p style="font-size:13px;color:#a9bbc9;margin-bottom:8px;">Last Updated: May 2025</p>
      <p style="font-size:12px;color:#a9bbc9;font-style:italic;">The information provided on this page is for informational purposes only and does not constitute legal advice.</p>
      
      <h2>Company Information</h2>
      <div class="feature-grid">
        <article>
          <h3 style="margin-top:0;">Company Details</h3>
          <ul style="list-style:none;padding:0;margin:0;line-height:2;">
            <li><strong>Legal Entity:</strong> Purr Games Limited</li>
            <li><strong>Jurisdiction:</strong> Belize</li>
            <li><strong>Registration Date:</strong> 2025</li>
            <li><strong>Company Type:</strong> Private Limited Company</li>
          </ul>
        </article>
        <article>
          <h3 style="margin-top:0;">Legal Framework</h3>
          <p>Purr Games operates under Belize legal framework, which provides a balanced approach to blockchain innovation while maintaining appropriate regulatory oversight. The company is currently applying for a license to be regulated by Anjouan Gaming Authority.</p>
        </article>
      </div>

      <h2>Platform Approach</h2>
      <div class="feature-grid">
        <article>
          <h3 style="margin-top:0;">Decentralized Structure</h3>
          <p>Purr Poker follows a decentralized model where:</p>
          <ul>
            <li>Smart contracts govern funds and settlement</li>
            <li>No central custodian holds player funds</li>
            <li>Game outcomes are verified by consensus</li>
            <li>Governance decisions include community input</li>
            <li>Protocol parameters are transparent and on-chain</li>
          </ul>
        </article>
        <article>
          <h3 style="margin-top:0;">KYC/AML Approach</h3>
          <p>As a decentralized platform:</p>
          <ul>
            <li>No KYC requirements for player participation</li>
            <li>Wallet addresses used for identification</li>
            <li>Blockchain-based settlement preserves privacy</li>
            <li>Compliance with applicable regulations in supported jurisdictions</li>
            <li>Anti-fraud systems detect suspicious activity patterns</li>
          </ul>
        </article>
      </div>

      <h2>Terms of Service Summary</h2>
      <ol class="steps">
        <li>
          <strong>Platform Access</strong>
          <p>By connecting your wallet to Purr Poker, you acknowledge that you are at least 18 years of age and are accessing the platform from a jurisdiction where online poker and cryptocurrency use are legal. You are responsible for ensuring your compliance with your local laws.</p>
        </li>
        <li>
          <strong>Funds & Transactions</strong>
          <p>All funds are managed through smart contracts, not held by Purr Games. By interacting with our platform, you acknowledge that cryptocurrency transactions are irreversible, and you are responsible for the security of your private keys and wallet. The platform does not guarantee recoverability of funds sent to incorrect addresses.</p>
        </li>
        <li>
          <strong>Fair Play</strong>
          <p>Players must adhere to fair gameplay standards. Collusion, multi-accounting, use of bots or automated playing programs, and other forms of cheating are strictly prohibited. The platform reserves the right to suspend access to those engaging in suspicious activities or violating the fair play policy.</p>
        </li>
        <li>
          <strong>Dispute Resolution</strong>
          <p>Any disputes will be handled through a combination of:</p>
          <ul>
            <li>Technical verification of smart contract operations</li>
            <li>Review of blockchain transaction records</li>
            <li>Analysis of server logs and gameplay records</li>
            <li>Community governance for complex disputes</li>
          </ul>
        </li>
        <li>
          <strong>Limitation of Liability</strong>
          <p>Purr Games provides the platform on an "as is" basis without guarantees. We are not liable for any losses due to platform unavailability, blockchain congestion, wallet issues, or other technical factors beyond our control. Users acknowledge the inherent risks of using blockchain applications.</p>
        </li>
      </ol>

      <h2>Jurisdiction Notes</h2>
      <article class="callout" style="padding:24px;border:1px solid rgba(255,255,255,.05);border-radius:12px;background:none;">
        <p style="margin-top:0;">Purr Poker is a decentralized protocol accessible globally. However, users are responsible for complying with their local laws. The following information is provided as general guidance:</p>
        <div class="feature-grid" style="margin:24px 0;">
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;font-size:16px;color:#f0d1b3;">Generally Accessible</h3>
            <ul style="color:#e8d5c4;">
              <li>Most European countries</li>
              <li>Canada</li>
              <li>South America</li>
              <li>Many Asian jurisdictions</li>
              <li>Australia and New Zealand</li>
            </ul>
          </div>
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;font-size:16px;color:#f0d1b3;">Restrictions May Apply</h3>
            <ul style="color:#e8d5c4;">
              <li>United States (varies by state)</li>
              <li>China</li>
              <li>India (regulatory changes pending)</li>
              <li>Turkey</li>
              <li>United Arab Emirates</li>
            </ul>
          </div>
          <div style="padding:0;background:none;border:none;">
            <h3 style="margin-top:0;font-size:16px;color:#f0d1b3;">User Responsibility</h3>
            <p style="font-size:14px;color:#e8d5c4;">It is the user's responsibility to ensure they are legally permitted to access and use Purr Poker within their jurisdiction. The protocol does not actively restrict access from specific regions but expects users to comply with their local laws.</p>
          </div>
        </div>
        <div style="background:rgba(255,255,255,0.03);padding:16px;border-radius:8px;font-size:13px;color:#a9bbc9;margin-bottom:16px;">
          Disclaimer: This information is provided for guidance only and is not legal advice. Laws and regulations concerning online gambling and cryptocurrency usage vary widely and change frequently. Users should consult with legal counsel in their jurisdiction for definitive guidance.
        </div>
        <div style="background:rgba(255,255,255,0.03);padding:16px;border-radius:8px;font-size:13px;color:#a9bbc9;">
          USER RESPONSIBILITY: We do not solicit users in jurisdictions where online poker is restricted. Users are responsible for compliance.
        </div>
      </article>
    `
  }
,
  {
    title: "Privacy Policy",
    slug: "privacy-policy",
    group: "Legal",
    description: "",
    html: `
      
      <h3>Last updated on August 26, 2025</h3>
      <p>Capitalized terms not defined below shall be as defined in the [Terms and Conditions].</p>
      <p>We value you as a user and take your privacy seriously. During the provision of our services, we may collect certain personal information that may be considered private or confidential. This Privacy Policy outlines our practices and policies regarding the collection, use, and sharing of information gathered from or about you.</p>
      <p>In this Privacy Policy, terms like "us," "we," or "our" refer to Purr Games Limited and any subsidiaries or affiliates operating or managed by us, including but not limited to https://docs.purrpoker.xyz and related properties ("PurrPoker").</p>
      <h3>Our Privacy Principles</h3>
      <p>We protect, according to strict standards of security and confidentiality, all nonpublic personal information we collect about our users.</p>
      <p>We maintain physical, electronic, and organizational safeguards to secure this information.</p>
      <p>We require any third-party service providers to protect this information and use it only for authorized purposes.</p>
      <p>Only authorized employees and contractors have access to personal information.</p>
      <h3>Information We May Collect</h3>
      <p>We may collect and maintain both Personal and Non-Personal Information necessary for delivering our services and operating our business.</p>
      <h3>Personal Information</h3>
      <p>This includes any data that can identify you personally, such as your:</p>
      <p style="margin-left:20px;">- Full name</p>
      <p style="margin-left:20px;">- Address</p>
      <p style="margin-left:20px;">- Email</p>
      <p style="margin-left:20px;">- Phone number</p>
      <p style="margin-left:20px;">- Date of birth</p>
      <p style="margin-left:20px;">- Purchase history</p>
      <p style="margin-left:20px;">- Gaming activity</p>
      <p style="margin-left:20px;">- Government-issued ID (where applicable)</p>
      <p>You may provide this information through account creation, customer support contact, or participation in promotions or beta programs.</p>
      <h3>Non-Personal Information</h3>
      <p>This refers to data that does not directly identify you and is typically collected automatically through your interaction with our website or services.</p>
      <h3>Traffic Data</h3>
      <h3>We automatically collect data such as:</h3>
      <p style="margin-left:20px;">- IP address</p>
      <p style="margin-left:20px;">- Browser type</p>
      <p style="margin-left:20px;">- Operating system</p>
      <p style="margin-left:20px;">- Visited pages and session duration</p>
      <p>This helps us optimize performance and tailor our content.</p>
      <h3>Cookies and Other Technologies</h3>
      <h3>We use cookies and similar technologies to:</h3>
      <p style="margin-left:20px;">- Remember user preferences</p>
      <p style="margin-left:20px;">- Analyze traffic</p>
      <p style="margin-left:20px;">- Authenticate sessions</p>
      <p style="margin-left:20px;">- Detect and prevent fraud</p>
      <p>You may adjust your browser settings to limit or delete cookies, but doing so may affect site functionality.</p>
      <h3>Third-Party Advertising</h3>
      <p>Ad partners may use cookies and other methods to deliver relevant ads. These sites are governed by their own privacy policies, and we are not responsible for their practices or content.</p>
      <h3>How We May Use Your Information</h3>
      <h3>We use your information:</h3>
      <p style="margin-left:20px;">- To operate PurrPoker and deliver core services</p>
      <p style="margin-left:20px;">- To improve our platform, user experience, and product features</p>
      <p style="margin-left:20px;">- For internal analytics and market research</p>
      <p style="margin-left:20px;">- To respond to support inquiries or user feedback</p>
      <p style="margin-left:20px;">- To communicate important updates or promotional material</p>
      <p style="margin-left:20px;">- To comply with regulatory obligations or legal requests</p>
      <p style="margin-left:20px;">- To protect the integrity and security of our platform</p>
      <p style="margin-left:20px;">- For other purposes with your consent or as required by law</p>
      <h3>Information Disclosure to Affiliated Entities</h3>
      <p>We may share your information with affiliated businesses for operational or compliance reasons, including partners involved in rewards systems, anti-fraud programs, or user self-exclusion mechanisms.</p>
      <h3>Information Disclosure to Non-Affiliated Entities</h3>
      <p>As permitted by applicable law, we may share your data with non-affiliated third parties such as:</p>
      <p style="margin-left:20px;">- Payment processors</p>
      <p style="margin-left:20px;">- Cloud hosting services</p>
      <p style="margin-left:20px;">- Data analytics providers</p>
      <p style="margin-left:20px;">- Regulatory bodies</p>
      <p style="margin-left:20px;">- Legal or law enforcement entities, when required</p>
      <p>We ensure such entities handle your data responsibly and only for the purposes specified.</p>
      <h3>Changes to the Privacy Policy</h3>
      <p>This Privacy Policy may be updated over time. We will post updates at https://docs.purrpoker.xyz with the revised date. Your continued use of PurrPoker constitutes your acceptance of any changes.</p>
      <h3>Legal Gaming Age Policy</h3>
      <p>PurrPoker does not allow individuals below the legal age in their jurisdiction to participate. No one under the legal gaming age may use our services or access our platform features. We reserve the right to verify age and deny access if age requirements are not met.</p>
      <h3>Unsubscribing from Email</h3>
      <p>To opt out of marketing communications, click the unsubscribe link provided in our emails. You will be removed from our mailing list within 7 days of your request.</p>
      <h3>Geo-Location</h3>
      <p>By using geo-based features, you consent to us collecting, processing, and utilizing your location data to improve service delivery. You can revoke this consent by disabling location services or contacting support.</p>
      <h3>Responsible Gaming</h3>
      <p>PurrPoker is committed to responsible gaming. Resources and tools are available to help users manage their gaming activity. Visit our Responsible Gaming Policy for more information.</p>
      <h3>Online Security</h3>
      <p>We implement reasonable safeguards to secure Personal Information. However, no system is immune to unauthorized access, and we cannot guarantee absolute security.</p>
      <h3>Terms of Use</h3>
      <p>Use of the PurrPoker platform constitutes acceptance of this Privacy Policy. By accessing our services, you confirm you are of legal gaming age in your jurisdiction.</p>
      <h3>Contact Us</h3>
      <p>If you have questions, comments, or concerns about this Privacy Policy, please contact us via admin@purrpoker.xyz.</p>
    `
  },
  {
    title: "Terms & Conditions",
    slug: "terms-and-conditions",
    group: "Legal",
    description: "",
    html: `
      <p>1. INTRODUCTION</p>
      <p>1.1 Purr Poker is a decentralized poker dApp on Hyperliquid EVM, built by poker and crypto enthusiasts to deliver instant-settlement gameplay, provably fair mechanics, and a user-owned ecosystem. With a 3.5% Rake (vs. industry standard 5%), transparent redistribution to $POKER tokenholders, and no KYC barriers, Purr Poker eliminates the frustrations of centralized platforms.</p>
      <p>1.2 Below you will find PurrPoker’s Software End User License Agreement (hereafter referred to as “Agreement”), which outlines the terms and conditions (hereafter referred to as “Terms”) for use of the PurrPoker platform. We kindly ask you to review them carefully.</p>
      <p>1.3 For the purposes of the Agreement, the definition of ”DApp” (decentralised application) will refer to the PurrPoker web-based site from the website app.purrpoker.xyz and the PurrPoker mobile software application as well as all ancillary software to the poker software (whether web-based software or client/server software).</p>
      <p>2. ACCEPTANCE OF TERMS</p>
      <p>2.1 To access PurrPoker, You accept to be bound by this contract by either: (i.) entering PurrPoker’s Software installation process or (ii.) using the Software and, in doing so, agreeing not to breach the Terms of the Agreement.</p>
      <p>2.2 Furthermore, you may be required to accept the Terms of the Agreement from time to time by clicking a checkbox or other method indicated to You at that time. However, by accessing PurrPoker Software, creating and registering an account with PurrPoker (the “Account”), or choosing to participate in or use the services offered on the platform (the “PurrPoker”), You acknowledge that You understand and accept the Terms contained herein, which can be modified or changed, as deemed necessary by Purr Games Limited.</p>
      <p>2.3 You agree not to do, or omit to do, or attempt to do or omit to do, any act or thing which may interfere with the proper operation of the PurrPoker, or activities carried out as part of the PurrPoker, in accordance with the Terms of the Agreement.</p>
      <p>3. LEGALITY OF USE</p>
      <p>3.1 Underage gambling is illegal in many jurisdictions. Therefore, We recommend You review Your country’s laws before using the PurrPoker. You may only use PurrPoker if You are 18 years of age or over (or such other higher minimum legal age in Your jurisdiction) and if it is legal for You to do so according to the laws that apply in Your jurisdiction.</p>
      <p>3.2 User shall not use PurrPoker if it is prohibited under the applicable law. Any User that is in any manner limited or prohibited from the purchase, possession, transfer, use or other transaction involving any amount of $POKER under the applicable law should not access this website and is prohibited from accessing, referencing, engaging, or otherwise using PurrPoker.</p>
      <p>4. ACCOUNT AND REGISTRATION</p>
      <p>4.1 In order to participate in PurrPoker, You must first register an Account with a wallet address. By registering as a User of the PurrPoker, You agree to provide accurate, current, and complete personal information as prompted (the “Registration Data”) and maintain and promptly update the Registration Data to keep it accurate, current and complete.</p>
      <p>4.2 PurrPoker prides itself on being different from other poker platforms. We utilize decentralized technology and this is beneficial to You and Us. Therefore, We do not have to collect as much personal information as other prominent poker websites. In fact, the only Registration Data We need from You to register an Account is a username and Country, which will be tagged to your associated cryptographic wallet address (“Wallet Address”) to be used in conjunction with Your Account; it’s as easy as that.</p>
      <p>4.3 You accept responsibility for all activities, charges, and damages that occur under Your Account. We cannot and will not be liable for any loss or damage arising from Your failure to comply with this Section.</p>
      <p>4.4 You acknowledge that we may deny access to Your Wallet Address without prior notice if We believe Your Wallet Address are being used by someone other than You, or for any other reason.</p>
      <p>4.5 You may not hold more than one (1) Account in connection with Your use of the PurrPoker; only one User is permitted to access and use a single Account. In the event We discover that You have opened or attempted to open more than one Account, PurrPoker reserves the right to deny access to all Your Accounts.</p>
      <p>4.6 If You notice that You have more than one Account under different names, You must notify PurrPoker immediately.</p>
      <p>4.7 If You attempt to open any additional Accounts after Your original Account has been closed, we will deny access to all your additional Accounts.</p>
      <p>5. USE OF PURRPOKER</p>
      <p>5.1 You acknowledge and understand that this is an exclusive community. Accordingly, You shall act and behave in good faith and, at all times material, show courtesy, respect and civility to any and all other players, members and/or Employees of Purr Games Limited who join in Your experience.</p>
      <p>5.2 In the interests of ensuring fairness, We may take any measures as We deem appropriate in order to create a fair and balanced game play environment. Without prejudice to any of Your current and pending transactions involving PurrPoker, We reserve the right to suspend, modify, remove and/or add to any of the PurrPoker at Our sole discretion by notification to You via email with immediate effect and, to the extent permitted by law, We will not be liable for any such action.</p>
      <p>5.3 No communications or information published on PurrPoker is intended to constitute legal or tax advice, and We accept no liability for any reliance on such content.</p>
      <p>5.4 We take Responsible Gaming seriously. If (i.) You have been diagnosed with a gambling disorder or (ii.) You are undergoing treatment for a gambling disorder, You are highly encouraged to stop using the PurrPoker. If You feel You have lost or may lose control over Your gambling or gambling expenses or feel at risk of losing control, You must notify Us immediately and we will take appropriate measures to rectify the situation.</p>
      <p>5.5 You may at any time, at Your discretion, choose to exclude Yourself from using the PurrPoker provided on the website by following these instructions. Such exclusion can be made either permanently or temporarily by contacting admin@PurrPoker.xyz. During the exclusion period, You will not be able to use Your PurrPoker Account. We would like to urge You to seek professional help if You continue to gamble during any period of self-exclusion (from ourselves or other operators).</p>
      <p>6. YOUR REPRESENTATIONS AND WARRANTIES</p>
      <p>Prior to Your use of the PurrPoker, and on an ongoing basis, You represent, warrant, covenant, and agree that:</p>
      <p>6.1 There is a risk of losing money when using the PurrPoker and, that We have no responsibility to You for any such loss;</p>
      <p>6.2 Your use of PurrPoker is done at Your sole decision, discretion, and risk;</p>
      <p>6.3 You will not breach any law, statute, contract or regulation;</p>
      <p>6.4 You may need to provide Us with certain personal details about Yourself, as well as consent to Our use of location-based services (LBS) to detect Your geographic location, for the purpose of using PurrPoker. PurrPoker will process Your personal details in compliance with data protection laws;</p>
      <p>6.5 You are solely responsible for any applicable taxes which may be payable on cash or prizes awarded to You through Your use of the PurrPoker;</p>
      <p>6.6 Telecommunications networks and Internet access services required for You to access and use the PurrPoker are entirely beyond the control of PurrPoker, and PurrPoker shall have no liability whatsoever for any outages, slowness, capacity constraints or other deficiencies affecting the same;</p>
      <p>6.7 You will not take any action that may cause Us to lose any of the services from our internet service providers or other suppliers or service providers;</p>
      <p>6.8 You will not take any action that imposes an unreasonable or disproportionately large load on PurrPoker, Our infrastructure, Our websites, Our Software or Our systems (including any networks and servers used to provide any of the PurrPoker), whether operated by Us, or on Our behalf; and</p>
      <p>6.9 You are aged 18 or over (or other age requirements that might be applicable) and that You are not currently self-excluded from using the PurrPoker.</p>
      <p>7. PROHIBITED USE AND CONDUCT</p>
      <p>7.1 Fraudulent Behavior: Without limitation, PurrPoker reserves the unfettered right to determine what constitutes “Fraudulent Behavior.” Where PurrPoker determines or deems that You have conducted Yourself in a manner that constitutes “Fraudulent Behavior,” which includes but is not limited to instances where You have engaged in, or intend to engage in, fraudulent, dishonest, illegal, or improper activities while using PurrPoker, including but without limitation to any of the activities set out more fully below. Where Your conduct is deemed to constitute “Fraudulent Behavior,” PurrPoker, at its sole discretion, is entitled to take any action that it deems fit, which may include but is not limited to blocking Your access to the platform, terminating Your Account, revoking any prize and/or award that has been promised to You, and/or taking any legal proceedings that are deemed appropriate.</p>
      <p>7.1.1 Predatory Behavior: Predatory activity is commonly recognised as user activities focused primarily on gaining unethical advantages and employing unfair tactics to exploit other users to extract profit unfairly. This is, but not restricted to, bum hunting, hit-and-run, grimming, buttoning. These and other practices are seen as unethical by the online poker community and are prohibited at PurrPoker.</p>
      <p>7.1.1.1 Bum Hunting: Bum hunting is the act of intentionally targeting one group of players while avoiding giving action to others. It may include deliberately targeting a user by intentionally sitting out at cash tables and only joining the game when the preferred user arrives. It may also involve purposefully targeting a user by following their activity. For example, waiting in the lobby until a desired user enters a game and then joining them in the game and playing only till they leave.</p>
      <p>7.1.1.2 Grimming / Buttoning: Is when a player plays only one hand when heads-up with the sole intention to steal the BB and then sits out.</p>
      <p>7.1.1.3 Hit-and-run / Ratholing: This is a situation when a player joins the table with a short-stack and leaves the table as soon as he hits a certain chips threshold only to immediately join a new table of the same stakes again with a short-stack.</p>
      <p>7.1.1.4 Table Blocking / Camping: Joining heads up tables without the intention of playing, denying other players action by sitting out (and not leaving the table) or simply sitting at a table to prevent other players access to the table.</p>
      <p>7.2 Collusion: Collusion between Users by sharing hole cards or by any other methods is strictly forbidden. PurrPoker reserves the right, in addition to other measures, to restrict seating and/or to prohibit Users from playing at a particular poker table or in a tournament, including restricting two or more Users from playing together at the same table or in the same tournament. In addition, PurrPoker reserves the right to consider any collusion or attempt at collusion between Users as a material breach of the Agreement and accordingly We shall have the right to terminate a User’s Account if a User engages or attempts to engage in any such activity, regardless of the outcome of such attempt. If the User is suspected to win any said funds, they will be considered a debt owed by You to PurrPoker and We reserve the right to take any and all measures permitted by law to retrieve them.</p>
      <p>7.3 Chip-Dumping: Chip-dumping occurs when any User intentionally loses a hand in order to deliberately transfer his/her chips to another User. Any User who participates or attempts to participate in chip-dumping with any other User, including being the recipient of funds, while using the PurrPoker may be permanently banned from using the Service and Your Account may be denied access indefinitely</p>
      <p>7.4 EPA and RTA Bots: PurrPoker prohibits those External Player Assistance (“EPA”) or Real-Time Assistance (“RTA”) bots which are designed to provide an “unfair advantage” to Users. PurrPoker defines “external” to mean computer software (other than the Software), and non-software-based databases or profiles (e.g. web sites and subscription services). PurrPoker defines an “unfair advantage” as any instance in which a User accesses or compiles information on other Users beyond that which the User has personally observed through the User’s own game play. The use of artificial intelligence including, without limitation, “robots” (or “Bots”) is strictly forbidden. All actions taken in relation to PurrPoker by a User must be executed personally by players through the user interface accessible by use of the Software, and without the assistance of any form. You agree that PurrPoker may take steps to detect and prevent the use of prohibited EPA or RTA Bots. These steps may include, but are not limited to, examination of software programs running concurrently with the PurrPoker Software on the User’s computer. You agree that You will not attempt to bypass, interfere with, or block such steps, including, without limitation, the use of third party software that bypasses, interferes with, or blocks such steps.</p>
      <p>7.5 Impersonation: You may not engage in any form of impersonation of an entity, official, Employee, any person whoever, or misrepresent any relationship or affiliation with another person or entity whoever in connection with Your Account and/or Your use of the PurrPoker.</p>
      <p>7.6 Commercial Use: PurrPoker grants You access to Our exclusive poker community and does so for Your personal use only. Any commercial use of Our Software is strictly forbidden without express written permission from Us. You shall not post any unauthorized advertising or promotion materials, by way of email, spam, chat function, junk mail comment, or any other form of solicitation whatsoever via the Software or chat facilities provided to You by PurrPoker. In addition, You are prohibited from posting any harmful, illegal and/or destructive material on or through PurrPoker, including but not limited to Software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any and all computer Software or hardware or telecommunications equipment designed for fraudulent, unlawful, dishonest or improper activity (including, but not limited to “phishing” and other scams).</p>
      <p>7.7 Hacking: PurrPoker strictly prohibits Users from facilitating any viruses, Trojan horses, malware, worms or other computer programming routines that attempt to or may damage, disrupt, corrupt, misuse, detrimentally interfere with, surreptitiously intercept or expropriate, or gain unauthorised access to any system, data, information or the PurrPoker.</p>
      <p>7.8 Third Party Content: We forbid the posting of any prohibited Third Party Content (as that term is hereinafter defined) on Our platform. In accordance with the Agreement, We may reject or delete any text, files, images, photos, video, sounds, or any other materials ( “Third Party Content”) posted by You on the platform, which by Our sole opinion breaches the Terms of Agreement. In addition, You are not entitled to make untrue and/or malicious and/or damaging comments with regard to PurrPoker’s operation in any media or forum. Any violation of this Section may result in removal of the Third Party Content, a suspension of Your use of the PurrPoker and/or such other action as may be reasonably required by Us to ensure compliance. Furthermore, You must not copy, reproduce, communicate to any Third Party, alter, modify, create derivative works, publicly display or frame any Content from the PurrPoker without Our or any applicable Third Party’s written consent.</p>
      <p>7.9 Account Linking: If upon review, We determine You are controlling an Account that is linked to another Account, We reserve the right to, in accordance with Section 4.5 in the Agreement, deny access to all of Your Accounts. An Account is deemed to be “linked” to another Account if PurrPoker has reason to believe that both Accounts are controlled by the same legal personality or group of legal personalities, including without limitation, individuals.</p>
      <p>7.10 Interference: You must not interfere , disrupt or attempt to interfere or disrupt PurrPoker or other users’ use of PurrPoker. PurrPoker reserves the right to examine users’ accounts and play to prevent unethical and impermissible activities.</p>
      <p>8. BUY-INS</p>
      <p>8.1 Buy-ins may be made in and are collected in various cryptocurrencies such as, and not limited to, HYPE, USDT0 and $POKER. Other cryptocurrencies may be accepted too to be swapped via a decentralised exchange at a nominal fee to provide an automated and seamless gaming experience.</p>
      <p>8.2 Your account balance is the amount of cryptocurrency paid into Your Account (by You or Us), plus any winnings (including bonuses which have not met the applicable wagering restrictions) and/or minus any losses accrued from using the PurrPoker, less any Rakes or entry or other fees.</p>
      <p>8.3 A withdrawal is automatically processed the moment you leave the game. It is done on-chain sent to the associated wallet address almost instantly.</p>
      <p>8.4 The information supplied by you when entering or during any promotion will be processed, stored and used by us. You acknowledge that your username as well as any other reasonable detail may be published on a leaderboard, website, advertisement, social media network, or any other publication, promotion, or publicity instrument as we see fit.</p>
      <p>8.5 PurrPoker reserves the right to change the prize of a promotion if it cannot be delivered due to unforeseen circumstances. In this case, We will ensure that You are rewarded with suitable replacement prize.</p>
      <p>9. CONTRIBUTIONS</p>
      <p>9.1 As a host, PurrPoker applies a commission charge (“Rake”) to each poker game in accordance with the guidelines outlined in Section 9 “Contributions”.</p>
      <p>9.2 Rake on every hand at cash game tables on PurrPoker are made in the selected buy-in cryptocurrency. If players have $POKER on their buy-in balance, Rake will be deducted in $POKER and Rake paid in selected buy-in cryptocurrency will be returned to users‘ balance.</p>
      <p>9.3 Rake is calculated from the amount in the pot at the end of each hand for cash game tables.</p>
      <p>9.4 No Rake is charged if the action finishes before the flop.</p>
      <p>9.5 Rake on PurrPoker cash games are set at 3.5% after the flop.</p>
      <p>9.6 For each pot, the Rake is calculated based on the winner of the hand. For example: Player A puts 10 USDT to the pot, Player B puts 10 USDT into the pot. The total pot is 20 USDT. 3.5% Rake from this pot is 0.7 USDT.</p>
      <p>9.6.1 For purposes of rewards and bonus release, Rake is calculated using the weighted contributed system.</p>
      <p>9.7 Rake on PurrPoker tournaments are set at 10%, and this contribution is included in the tournament buy-in.</p>
      <p>9.8 PurrPoker reserves the right to levy different Rake on certain tables.</p>
      <p>9.9 Rake percentages are subject to change at the discretion of PurrPoker.</p>
      <p>9.10 Collected Rake is split into two for dedicated purposes:</p>
      <p>9.10.1 The first part of the Rake collected will be used to do buybacks of $POKER in the open market. The tokens will be burned immediately.</p>
      <p>9.10.2 The remaining will go to the foundation or team for various community incentives, events and operational expenses. The team reserves sole discretion on how to utilize this funds in the best interest of PurrPoker platform.</p>
      <p>10. GRANT OF LICENSE</p>
      <p>10.1 We provide You with the use of PurrPoker and grant You a personal, non-exclusive, non-transferable, and non-sublicensable right to install and use Our Software only to access the PurrPoker servers and use PurrPoker, which is at all times strictly and exclusively limited to Your personal use. PurrPoker Software and code are valuable trade secrets and are the sole property of Us and Our affiliated companies, licensors, and/or parent companies.</p>
      <p>10.2 In addition, all other material used in any media, correspondence, production, or demonstration by PurrPoker, including but not limited to Software, images, graphics, photographs, animations, videos, music, audio, advertisements, text and any and all related intellectual property rights including copyrights, patents, trademarks and trade secrets are owned by Us and Our affiliated companies, licensors, and/or parent companies. You have no rights in or to any such material and agree not to infringe PurrPoker’s or any third party’s intellectual property rights. All proprietary rights are reserved.</p>
      <p>11. AUTHORITY</p>
      <p>As a consequence of the exclusive community of PurrPoker, any decisions regarding Your interaction with the PurrPoker community are at the sole and unfettered discretion of PurrPoker, and any decision regarding Your Account held with PurrPoker is final. You agree to cooperate in any investigation PurrPoker conducts into You and/or Your Account.</p>
      <p>12. NO WARRANTIES</p>
      <p>12.1 PurrPoker disclaims any and all warranties, expressed or implied, in connection with the PurrPoker which is provided to You “AS IS”, and We provide You with no warranty or representation whatsoever regarding its quality, fitness for purpose, completeness, or accuracy.</p>
      <p>12.2 Regardless of Our efforts to provide You with a service of the highest quality, safety, and security, We make no warranty that the PurrPoker will be uninterrupted, timely, error-free, that defects will be corrected, or that the Software and the website shall be free from viruses, bugs or other contaminants.</p>
      <p>12.3 Information between Your computer and Our servers will pass through a large number of “peers” on the internet, machines that are not owned by PurrPoker and that do not belong to Your ISP. PurrPoker cannot be held responsible for disruptions to such connections. PurrPoker is only responsible for Our own server disruptions.</p>
      <p>12.4 PurrPoker reserves the right to suspend, discontinue, modify, remove or add to PurrPoker at its absolute discretion with immediate effect, and without an obligation to provide You with notice where we consider it necessary to do so, including (for example) where we receive information that You have entered into any self-exclusion agreement with any gambling provider or where we deem it necessary for the management, maintenance, or update of Software. We shall not be liable in any way whatsoever for any loss suffered as a consequence of any decision made by PurrPoker in this regard.</p>
      <p>12.5 WE WILL PROVIDE PURRPOKER WITH REASONABLE SKILL AND CARE AS DESCRIBED IN THE AGREEMENT. WE DO NOT MAKE ANY OTHER PROMISES OR WARRANTIES ABOUT PURRPOKER.</p>
      <p>13. ACCOUNT ACCESS</p>
      <p>13.1 Notwithstanding any provision of the Agreement to the contrary and not by limitation, PurrPoker has the right to restrict access of Your Account and/or terminate the Agreement, limit the features and/or Services available where You are in breach of the Terms of the Agreement, or where Your conduct is deemed to be inappropriate towards the PurrPoker community.</p>
      <p>13.2 You agree to fully indemnify, defend, and hold PurrPoker, its shareholders, directors and Employees innocent from and against all claims, demands, liabilities, damages, losses, costs and expenses, including legal fees and any other charges whatsoever, howsoever caused, that may arise as a result of:</p>
      <p>(a.) Your breach of the Agreement, in whole or in part;</p>
      <p>(b.) violation by You of any law or any third party rights; and</p>
      <p>(c.) use by You of the PurrPoker or use by any other person accessing the PurrPoker using Your username and password, whether or not with Your authorisation.</p>
      <p>14. LIMITATIONS AND EXCLUSIONS</p>
      <p>14.1 UNDER NO CIRCUMSTANCES, INCLUDING NEGLIGENCE, SHALL PURRPOKER BE LIABLE FOR ANY SPECIAL, INCIDENTAL, DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION, OR ANY OTHER PECUNIARY LOSS) ARISING OUT OF THE USE (OR MISUSE) OF THE PurrPoker EVEN IF PURRPOKER HAD PRIOR KNOWLEDGE OF THE POSSIBILITY OF SUCH DAMAGES.</p>
      <p>14.2 FURTHERMORE, WE SHALL NOT BE LIABLE FOR ANY ATTEMPTS BY YOU TO USE PurrPoker BY METHODS, MEANS OR WAYS NOT INTENDED BY US. WE ARE NOT REQUIRED TO PROVIDE REDUNDANT OR BACKUP NETWORKS AND/OR SYSTEMS.</p>
      <p>14.3 OUR MAXIMUM LIABILITY TO YOU OR ANY THIRD PARTY ARISING OUT OF THE AGREEMENT OR YOUR USE OF THE PurrPoker, WHETHER FOR BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, WILL BE LIMITED IN ANY TWELVE (12) MONTH PERIOD TO THE AMOUNT, IF ANY, YOU HAVE PAID FROM YOUR ACCOUNT IN BETS, RAKES AND/OR FEES, AS APPLICABLE, IN THE SAME TWELVE (12) MONTH PERIOD AND IN RELATION TO THE SERVICES RELEVANT TO WHICH THE LIABILITY IN QUESTION HAS ARISEN.</p>
      <p>14.4 PURRPOKER (INCLUDING ITS OFFICERS, DIRECTORS, AGENTS AND EMPLOYEES) WILL NOT BE LIABLE TO YOU IN CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE FOR ANY INDIRECT LOSSES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, PROFITS, REVENUE, BUSINESS, OPPORTUNITY, GOODWILL, REPUTATION OR BUSINESS INTERRUPTION OR FOR ANY LOSSES WHICH ARE NOT CURRENTLY FORESEEABLE BY US ARISING OUT OF THE AGREEMENT OR YOUR USE OF THE PurrPoker.</p>
      <p>14.5 IF ANY PART OF THE AGREEMENT IS DEEMED UNLAWFUL, VOID OR FOR ANY REASON UNENFORCEABLE, THEN THAT PART SHALL BE DEEMED TO BE SEVERABLE FROM THE REST OF THE AGREEMENT AND SHALL NOT AFFECT THE VALIDITY AND ENFORCEABILITY OF THE REMAINING PROVISIONS.</p>
      <p>15. DISPUTES AND RESOLUTION</p>
      <p>15.1 The User accepts that the historical data of each game shall be as recorded on PurrPoker’s servers. In the event of a discrepancy between the cards displayed on Your computer and the game records on PurrPoker’s servers, the latter shall prevail. If a User wishes to make a complaint, please contact our customer support service team at admin@PurrPoker.xyz.</p>
      <p>15.2 PurrPoker will respond to any User complaints, claims, disputes, or grievances. You agree that if You have any complaints, claims, disputes or grievances with PurrPoker regarding any of Our Services, Employees, or promotions You will contact Us in writing by email as soon as practicable first. In all circumstances You must notify PurrPoker of Your complaints, claims, disputes, or grievances no later than one (1) month from the day the complaint, claim, dispute, or grievance was discovered or should have been discovered.</p>
      <p>16. GOVERNING LAW</p>
      <p>The Agreement and any matters relating hitherto shall be governed by, and construed in accordance with the English laws. You irrevocably agree that, subject as provided below, the courts of Belize shall have exclusive jurisdiction in relation to any complaint, claim, dispute or grievance concerning the Agreement and any matter arising therefrom and irrevocably waive any right that it may have to object to an action being brought in those courts, or to claim that the action has been brought in an inconvenient forum, or that those courts do not have jurisdiction. Nothing in this Section shall limit the right of PurrPoker to take proceedings against You in any other court of competent jurisdiction, nor shall the taking of proceedings in any one or more jurisdictions preclude the taking of proceedings in any other jurisdictions, whether concurrently or not, to the extent permitted by the law of such other jurisdiction.</p>
      <p>17. MISCELLANEOUS</p>
      <p>17.1 No waiver by PurrPoker of any breach of any provision of the Agreement (including the failure of PurrPoker to require strict and literal performance of or compliance with any provision of the Agreement) shall in any way be construed as a waiver of any subsequent breach of such provision or of any breach of any other provision of the Agreement.</p>
      <p>17.2 Nothing in the Agreement shall create or confer any rights or other benefits in favor of any third parties not party to the Agreement.</p>
      <p>17.3 Nothing in the Agreement shall create or be deemed to create a partnership, agency, trust arrangement, fiduciary relationship, or joint venture between You and Purr Games Pte Ltd.</p>
      <p>17.4 The Agreement constitutes the entire understanding and agreement between You and Us regarding PurrPoker, and supersedes any prior agreement, understanding, or arrangement between You and Us.</p>
      <p>17.5 The English language version of the Agreement shall be the prevailing version in the event of any discrepancy.</p>
    `
  },
  {
    title: "Responsible Gaming",
    slug: "responsible-gaming",
    group: "Legal",
    description: "",
    html: `
      <h3>Responsible Gambling Policy</h3>
      <p>Purr Games Pte Ltd is committed to supporting a Responsible Gaming environment.</p>
      <p>We take the issue of Responsible Gaming very seriously and are dedicated to providing a Responsible Gaming service for all our players. We encourage you to play responsibly.</p>
      <p>We feel it is important that our players’ poker experience is a positive one. To that extent, we strive to provide an extensive range of controls to help you play responsibly.</p>
      <p>Whilst providing tools to help control gambling is something that we are committed to, players who are concerned that they may intentionally avoid them should seek guidance from a Responsible Gambling organization such as the RGC (Responsible Gaming Council).</p>
      <p>Whilst the majority of people do gamble responsibly, for some, gambling can become a problem. Please see below our guidelines and instructions on how to monitor your, a family member’s or a friend’s gambling to make sure that it does not become problematic in nature.</p>
      <h3>Protection of Minors</h3>
      <p>It is strictly against our rules for anyone under the age of 18 to engage in gambling activity or play on our website. It is an offense for minors to participate in gambling activity.</p>
      <p>The Website is not designed to attract children or adolescents. We are continually active in our efforts to track down and discourage minors from attempting to play on our website.</p>
      <p>We realize that the internet is a readily available resource for many, and as such, we encourage parents to take measures to contribute to the protection of their children from underage gambling, for example:</p>
      <p>Do not leave children unattended near a computer or smart device when they could easily access casino or sports betting websites/applications.</p>
      <p>Do not let minors partake in any gambling activity.</p>
      <p>Inform your children of the illegality of underage gambling and the potential harm of engaging in it.</p>
      <p>Limit the amount of time your children are able to access the internet.</p>
      <p>Pay extra attention to the content that minors are accessing via mobile devices.</p>
      <h3>Preventing and Managing Compulsive Gambling</h3>
      <p>We recognize the fact that while gambling is a form of entertainment for the majority of people participating in it, a small percentage may develop a problem.</p>
      <p>We take this issue very seriously, and have implemented a number of measures in order to help prevent and manage compulsive gambling (also see “How can I Restrict My Account”):</p>
      <p>We implement a self-exclusion program that allows players to easily restrict or block their access to our site</p>
      <p>We urge users of our site to remember the following:</p>
      <p>Gambling is strictly a form of entertainment and should in no way be used as a method to make money or pay off debts.</p>
      <p>Gambling results are determined by chance and therefore there is no possible way to ensure winnings.</p>
      <p>The decision to gamble should always come from your own free will and the desired outcome should always be to have fun.</p>
      <p>Users should always make sure they know the rules of the games before playing.</p>
      <p>Clients ought to consistently know about the measure of time and cash spent betting.</p>
      <p>Chasing losses is not an effective strategy and could lead to further disappointments.</p>
      <p>Gambling activity should not be undertaken under the influence of alcohol or any other substance.</p>
      <h3>Is My Gambling Problematic?</h3>
      <p>If you are unsure if your, a friend’s, or family member’s gambling is problematic, consider the following questions:</p>
      <h3>Has your gambling caused you to get into debt?</h3>
      <p>Do you often find yourself trying to win back losses?</p>
      <p>Does your gambling make you feel depressed or suicidal?</p>
      <p>Do you find yourself putting gambling before family and friends?</p>
      <p>Have you experienced criticism from others over your gambling activity?</p>
      <p>Do you feel lost and in despair when you run out of money to gamble with?</p>
      <p>Do you avoid your daily responsibilities (work, college, etc.) in order to gamble?</p>
      <p>Do you use gambling as a way to avoid dealing with issues in your everyday life?</p>
      <p>Has your interest in family, friends, and hobbies decreased due to your gambling?</p>
      <p>Have you ever tried to cover up how much money or time you spend on gambling?</p>
      <p>Are you reluctant to use your “Gambling Money” for anything other than gambling?</p>
      <p>Do you feel the urge to gamble more after arguments, frustrations or disappointments occur?</p>
      <p>Have you lied or stolen for the sole purpose of getting money to gamble or pay back debts accrued from gambling?</p>
      <p>Do you gamble until your gambling funds have run out, then resort to spending money that was not originally intended for gambling?</p>
      <p>The more questions that you have answered ‘yes’ to, either concerning you or a friend/family member, the more likely it is that you or they have a gambling problem that requires attention.</p>
      <h3>Self-Exclusion</h3>
      <p>If you become concerned about your gambling behavior and wish to restrict your gambling, you can request a self-exclusion period by contacting admin@purrpoker.xyz with the subject ‘Self-Exclusion’ with your desired exclusion timeframes. The timeframes can be anywhere from 1 week, 1 month, 3 months, 6 months, 1 year, 2 years, 5 years or even indefinitely.</p>
      <p>During your self-exclusion period, all your accounts detected by us will be denied access.</p>
      <p>If you choose to self-exclude, we encourage you to consider self-exclusion from any other online gaming operators with which you hold an account.</p>
      <h3>How Can I Get Further Help?</h3>
      <p>There are many organizations that can provide support and assistance to individuals who develop a problem with gambling. If at any time you recognize that you cannot control your gaming behavior, and cannot enjoy our website in a safe and responsible manner, we strongly recommend that you immediately contact one of the following professional organizations for professional guidance:</p>
      <h3>Gambling Therapy Helpline</h3>
      <h3>www.gamblingtherapy.org/en</h3>
      <p>We encourage you to PLAY RESPONSIBLY.</p>
    `
  }
];


export const navGroups = Array.from(new Set(docs.map((doc) => doc.group)));

export function getDocBySlug(slugParts?: string[]): DocPage | undefined {
  const slug = slugParts?.join("/") ?? "";
  return docs.find((doc) => doc.slug === slug);
}
