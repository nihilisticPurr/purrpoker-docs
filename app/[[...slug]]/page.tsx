import Link from "next/link";
import { notFound } from "next/navigation";
import { docs, getDocBySlug, navGroups } from "../../lib/docs";

type PageProps = {
  params: { slug?: string[] };
};

export function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug === "" ? [] : doc.slug.split("/") }));
}

function Sidebar({ activeSlug }: { activeSlug: string }) {
  return (
    <aside className="sidebar">
      <Link href="/" className="brand">
        <img src="/Logo.png" alt="Logo" width={84} style={{ height: 'auto' }} />
        <span>
          <strong>Purr Poker</strong>
          <small>Documentation</small>
        </span>
      </Link>
      <nav>
        {navGroups.filter(g => g !== "Legal").map((group) => (
          <div className="nav-group" key={group}>
            <h4>{group}</h4>
            {docs
              .filter((doc) => doc.group === group)
              .map((doc) => (
                <Link key={doc.slug || "home"} href={`/${doc.slug}`} className={activeSlug === doc.slug ? "active" : ""}>
                  {doc.title}
                </Link>
              ))}
          </div>
        ))}
      </nav>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '20px 0 10px', marginTop: 'auto' }}>
        <a href="https://x.com/PurrPoker" target="_blank" rel="noreferrer" style={{ color: 'var(--muted)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://discord.gg/purrpoker" target="_blank" rel="noreferrer" style={{ color: 'var(--muted)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.05.05 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
        </a>
      </div>
      <div className="powered" style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
        <img src="/hl-logo.png" alt="Hyperliquid" width={24} height={24} style={{ borderRadius: '50%' }} />
        <div>Powered by <strong>Hyperliquid</strong></div>
      </div>
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px 0 20px' }}>
        {docs.filter(doc => doc.group === "Legal").map(doc => (
          <Link key={doc.slug} href={`/${doc.slug}`} style={{ fontSize: '13px', color: activeSlug === doc.slug ? '#f0d1b3' : 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}>
            {doc.title}
          </Link>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <img src="/rr.png" alt="RR" style={{ maxWidth: '56px', opacity: 0.9, borderRadius: '12px' }} />
      </div>
    </aside>
  );
}

export default function DocsPage({ params }: PageProps) {
  const doc = getDocBySlug(params.slug);
  if (!doc) return notFound();

  const activeSlug = params.slug?.join("/") ?? "";
  const currentIndex = docs.findIndex((item) => item.slug === doc.slug);
  const prev = currentIndex > 0 ? docs[currentIndex - 1] : undefined;
  const next = currentIndex < docs.length - 1 ? docs[currentIndex + 1] : undefined;

  return (
    <div className="shell">
      <input type="checkbox" id="sidebar-toggle" className="sidebar-toggle-input" />
      <Sidebar activeSlug={activeSlug} />
      <label htmlFor="sidebar-toggle" className="sidebar-overlay"></label>
      <main className="content-wrap">
        <header className="topbar">
          <div className="crumb-wrap">
            <label htmlFor="sidebar-toggle" className="sidebar-toggle-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </label>
            <div className="crumb">Purr Poker / {doc.group}</div>
          </div>
          <div className="top-actions">
            <a className="launch" href="https://app.purrpoker.xyz" target="_blank" rel="noreferrer">Launch App</a>
          </div>
        </header>
        <article className="doc-card">
          <span className="eyebrow">{doc.group}</span>
          <h1>{doc.title}</h1>
          {doc.description && <p className="description">{doc.description}</p>}
          
          <div className="doc-content" dangerouslySetInnerHTML={{ __html: doc.html }} />
        </article>
        <footer className="pagination">
          {prev ? <Link href={`/${prev.slug}`}>← {prev.title}</Link> : <span />}
          {next ? <Link href={`/${next.slug}`}>{next.title} →</Link> : <span />}
        </footer>
      </main>
    </div>
  );
}
