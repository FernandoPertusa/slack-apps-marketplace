export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { font-family: 'DM Sans', sans-serif; background: #0A0A0F; }

        .font-display { font-family: 'Syne', sans-serif; }

        .noise {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .glow-orb {
          position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none;
        }

        /* Navbar */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 20px 48px;
          display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          background: rgba(10,10,15,0.8);
          backdrop-filter: blur(20px);
        }

        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 20px; font-weight: 800;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #fff 0%, #888 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        .nav-links { display: flex; gap: 32px; align-items: center; }
        .nav-links a {
          font-size: 14px; color: rgba(255,255,255,0.5); text-decoration: none;
          transition: color 0.2s; letter-spacing: 0.01em;
        }
        .nav-links a:hover { color: white; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 22px; border-radius: 8px;
          background: white; color: #0A0A0F;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500;
          text-decoration: none; transition: all 0.2s;
          border: none; cursor: pointer;
        }
        .btn-primary:hover { background: #e8e8e8; transform: translateY(-1px); }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 22px; border-radius: 8px;
          background: transparent; color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500;
          text-decoration: none; transition: all 0.2s;
          border: 1px solid rgba(255,255,255,0.15); cursor: pointer;
        }
        .btn-outline:hover { border-color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.05); }

        /* Hero */
        .hero {
          position: relative; padding: 180px 48px 120px;
          display: flex; flex-direction: column; align-items: center;
          text-align: center; overflow: hidden;
        }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px; border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          font-size: 12px; color: rgba(255,255,255,0.6);
          letter-spacing: 0.08em; text-transform: uppercase;
          margin-bottom: 32px;
        }

        .hero-badge-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #4ADE80;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
        }

        .hero h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(52px, 7vw, 96px);
          font-weight: 800; line-height: 0.95;
          letter-spacing: -0.03em;
          max-width: 900px;
        }

        .hero h1 .accent {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        .hero-sub {
          margin-top: 28px;
          font-size: 18px; color: rgba(255,255,255,0.45);
          max-width: 520px; line-height: 1.6; font-weight: 300;
        }

        .hero-cta { margin-top: 48px; display: flex; gap: 16px; align-items: center; }

        .hero-stats {
          margin-top: 80px;
          display: flex; gap: 64px; align-items: center;
          padding-top: 48px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .stat-item { text-align: center; }
        .stat-number {
          font-family: 'Syne', sans-serif;
          font-size: 36px; font-weight: 700;
          background: linear-gradient(135deg, #fff 0%, #888 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .stat-label { font-size: 13px; color: rgba(255,255,255,0.35); margin-top: 4px; }

        /* Apps section */
        .section {
          padding: 100px 48px;
          max-width: 1200px; margin: 0 auto;
        }

        .section-label {
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.3); margin-bottom: 16px;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 700; line-height: 1.1; letter-spacing: -0.02em;
        }

        .apps-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 2px; margin-top: 64px;
          border-radius: 16px; overflow: hidden;
        }

        .app-card {
          background: rgba(255,255,255,0.03);
          padding: 48px 40px;
          position: relative; overflow: hidden;
          transition: background 0.3s;
          cursor: default;
        }

        .app-card:hover { background: rgba(255,255,255,0.055); }

        .app-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        }

        .app-icon {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; margin-bottom: 28px;
        }

        .icon-productivity { background: linear-gradient(135deg, #667eea22, #764ba222); border: 1px solid #667eea44; }
        .icon-wellness { background: linear-gradient(135deg, #4ade8022, #22c55e22); border: 1px solid #4ade8044; }
        .icon-personalities { background: linear-gradient(135deg, #f093fb22, #f5576c22); border: 1px solid #f093fb44; }

        .app-tag {
          display: inline-block; padding: 3px 10px; border-radius: 100px;
          font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase;
          margin-bottom: 16px;
        }

        .tag-productivity { background: rgba(102,126,234,0.15); color: #a5b4fc; border: 1px solid rgba(102,126,234,0.2); }
        .tag-wellness { background: rgba(74,222,128,0.12); color: #86efac; border: 1px solid rgba(74,222,128,0.2); }
        .tag-personalities { background: rgba(240,147,251,0.12); color: #f5d0fe; border: 1px solid rgba(240,147,251,0.2); }

        .app-name {
          font-family: 'Syne', sans-serif;
          font-size: 22px; font-weight: 700; margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .app-desc {
          font-size: 14px; color: rgba(255,255,255,0.45);
          line-height: 1.65; font-weight: 300;
        }

        .app-features {
          margin-top: 24px; display: flex; flex-direction: column; gap: 8px;
        }

        .feature-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; color: rgba(255,255,255,0.5);
        }

        .feature-dot { width: 4px; height: 4px; border-radius: 50%; flex-shrink: 0; }
        .dot-productivity { background: #667eea; }
        .dot-wellness { background: #4ade80; }
        .dot-personalities { background: #f093fb; }

        .app-card-footer {
          margin-top: 36px; padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; justify-content: space-between;
        }

        .free-badge {
          font-size: 12px; color: rgba(255,255,255,0.35);
        }
        .free-badge strong { color: rgba(255,255,255,0.7); }

        .learn-more {
          font-size: 13px; color: rgba(255,255,255,0.4);
          text-decoration: none; display: flex; align-items: center; gap: 6px;
          transition: color 0.2s;
        }
        .learn-more:hover { color: white; }

        /* Pricing */
        .pricing-section {
          padding: 100px 48px;
          background: rgba(255,255,255,0.015);
          border-top: 1px solid rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }

        .pricing-inner { max-width: 1200px; margin: 0 auto; }

        .pricing-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 2px; margin-top: 64px; max-width: 800px;
        }

        .pricing-card {
          padding: 48px 40px;
          background: rgba(255,255,255,0.03);
          position: relative; overflow: hidden;
        }

        .pricing-card.featured {
          background: rgba(102,126,234,0.08);
          border: 1px solid rgba(102,126,234,0.2);
          border-radius: 16px;
        }

        .pricing-card:not(.featured) { border-radius: 16px; }

        .pricing-tier {
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.4); margin-bottom: 20px;
        }

        .pricing-price {
          font-family: 'Syne', sans-serif;
          font-size: 52px; font-weight: 800; letter-spacing: -0.03em;
          line-height: 1;
        }

        .pricing-price sup {
          font-size: 20px; vertical-align: top; margin-top: 10px;
          display: inline-block; font-weight: 400;
        }

        .pricing-period { font-size: 14px; color: rgba(255,255,255,0.3); margin-top: 8px; }

        .pricing-divider {
          height: 1px; background: rgba(255,255,255,0.06);
          margin: 28px 0;
        }

        .pricing-feature {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: 14px; color: rgba(255,255,255,0.55);
          margin-bottom: 14px; line-height: 1.4;
        }

        .check { color: #4ade80; flex-shrink: 0; margin-top: 1px; }
        .check-muted { color: rgba(255,255,255,0.2); flex-shrink: 0; margin-top: 1px; }

        .pricing-cta { margin-top: 36px; }

        .btn-pricing {
          width: 100%; padding: 14px; border-radius: 10px;
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500;
          cursor: pointer; transition: all 0.2s; text-align: center;
          text-decoration: none; display: block;
        }

        .btn-pricing-free {
          background: rgba(255,255,255,0.06); color: white;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .btn-pricing-free:hover { background: rgba(255,255,255,0.1); }

        .btn-pricing-pro {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white; border: none;
        }
        .btn-pricing-pro:hover { opacity: 0.9; transform: translateY(-1px); }

        /* How it works */
        .steps-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 48px; margin-top: 64px;
        }

        .step-number {
          font-family: 'Syne', sans-serif;
          font-size: 72px; font-weight: 800;
          color: rgba(255,255,255,0.04); line-height: 1;
          margin-bottom: 16px;
        }

        .step-title {
          font-family: 'Syne', sans-serif;
          font-size: 18px; font-weight: 700; margin-bottom: 10px;
        }

        .step-desc { font-size: 14px; color: rgba(255,255,255,0.4); line-height: 1.65; }

        /* Footer */
        footer {
          padding: 48px;
          border-top: 1px solid rgba(255,255,255,0.04);
          display: flex; align-items: center; justify-content: space-between;
          max-width: 1200px; margin: 0 auto;
        }

        .footer-logo {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: 18px; letter-spacing: -0.5px;
          background: linear-gradient(135deg, #fff 0%, #555 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        .footer-copy { font-size: 13px; color: rgba(255,255,255,0.2); }

        .footer-links { display: flex; gap: 24px; }
        .footer-links a { font-size: 13px; color: rgba(255,255,255,0.3); text-decoration: none; }
        .footer-links a:hover { color: rgba(255,255,255,0.6); }

        @media (max-width: 900px) {
          nav { padding: 16px 24px; }
          .nav-links { display: none; }
          .hero { padding: 140px 24px 80px; }
          .hero-stats { gap: 32px; }
          .section { padding: 60px 24px; }
          .apps-grid { grid-template-columns: 1fr; }
          .pricing-grid { grid-template-columns: 1fr; max-width: 400px; }
          .steps-grid { grid-template-columns: 1fr; gap: 32px; }
          .pricing-section { padding: 60px 24px; }
          footer { padding: 32px 24px; flex-direction: column; gap: 16px; text-align: center; }
        }
      `}</style>

      <div className="noise" />

      {/* Navbar */}
      <nav>
        <div className="nav-logo">SlackApps</div>
        <div className="nav-links">
          <a href="#apps">Apps</a>
          <a href="#pricing">Pricing</a>
          <a href="#how-it-works">How it works</a>
        </div>
        <a href="#pricing" className="btn-primary">
          Get started free
        </a>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="glow-orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(102,126,234,0.12) 0%, transparent 70%)', top: -200, left: '50%', transform: 'translateX(-50%)' }} />

        <div className="hero-badge">
          <div className="hero-badge-dot" />
          3 apps. One Slack workspace.
        </div>

        <h1 className="font-display">
          Make Slack work<br /><span className="accent">smarter for</span><br />your team
        </h1>

        <p className="hero-sub">
          A suite of powerful Slack apps to supercharge productivity, improve team wellness, and understand how your team communicates.
        </p>

        <div className="hero-cta">
          <a href="#apps" className="btn-primary">Explore apps →</a>
          <a href="#how-it-works" className="btn-outline">See how it works</a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">Slack Apps</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Free</div>
            <div className="stat-label">To get started</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5 min</div>
            <div className="stat-label">Setup time</div>
          </div>
        </div>
      </section>

      {/* Apps */}
      <section className="section" id="apps">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label">Our apps</div>
          <h2 className="section-title">Everything your team needs,<br />right inside Slack</h2>

          <div className="apps-grid">
            {/* App 1 */}
            <div className="app-card">
              <div className="app-icon icon-productivity">⚡</div>
              <span className="app-tag tag-productivity">Productivity</span>
              <div className="app-name">Google Workspace<br />Integration</div>
              <p className="app-desc">Connect Gmail, Google Calendar, and Google Sheets directly to your Slack workspace. Reply to emails, manage meetings, and visualize data — without leaving Slack.</p>
              <div className="app-features">
                <div className="feature-item"><div className="feature-dot dot-productivity" />Reply or archive Gmail threads</div>
                <div className="feature-item"><div className="feature-dot dot-productivity" />Create & edit Calendar events</div>
                <div className="feature-item"><div className="feature-dot dot-productivity" />Visualize Google Sheets charts</div>
              </div>
              <div className="app-card-footer">
                <div className="free-badge">From <strong>Free</strong></div>
                <a href="#pricing" className="learn-more">Learn more →</a>
              </div>
            </div>

            {/* App 2 */}
            <div className="app-card">
              <div className="app-icon icon-wellness">🌿</div>
              <span className="app-tag tag-wellness">Wellness</span>
              <div className="app-name">Wellness &<br />Anti-Sedentary</div>
              <p className="app-desc">Combat sedentary work habits with intelligent micro-guides delivered straight to Slack. Keep your team moving, energized, and healthy throughout the workday.</p>
              <div className="app-features">
                <div className="feature-item"><div className="feature-dot dot-wellness" />Personalized movement reminders</div>
                <div className="feature-item"><div className="feature-dot dot-wellness" />Micro wellness guides & tips</div>
                <div className="feature-item"><div className="feature-dot dot-wellness" />Team-wide wellness challenges</div>
              </div>
              <div className="app-card-footer">
                <div className="free-badge">From <strong>Free</strong></div>
                <a href="#pricing" className="learn-more">Learn more →</a>
              </div>
            </div>

            {/* App 3 */}
            <div className="app-card">
              <div className="app-icon icon-personalities">🧠</div>
              <span className="app-tag tag-personalities">Team Building</span>
              <div className="app-name">60 Personalities<br />Test</div>
              <p className="app-desc">Unlock your team's communication potential with an MBTI-based personality assessment. Build stronger relationships by understanding how each teammate thinks and communicates.</p>
              <div className="app-features">
                <div className="feature-item"><div className="feature-dot dot-personalities" />60-question MBTI-based test</div>
                <div className="feature-item"><div className="feature-dot dot-personalities" />Team personality profiles</div>
                <div className="feature-item"><div className="feature-dot dot-personalities" />Communication style insights</div>
              </div>
              <div className="app-card-footer">
                <div className="free-badge">From <strong>Free</strong></div>
                <a href="#pricing" className="learn-more">Learn more →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" id="how-it-works" style={{ paddingTop: 0 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label">How it works</div>
          <h2 className="section-title">Up and running<br />in minutes</h2>

          <div className="steps-grid">
            <div>
              <div className="step-number">01</div>
              <div className="step-title">Choose your app</div>
              <p className="step-desc">Browse our suite of Slack apps and pick the ones that fit your team's needs. Start with any app, add more anytime.</p>
            </div>
            <div>
              <div className="step-number">02</div>
              <div className="step-title">Add to Slack</div>
              <p className="step-desc">One click to install directly into your Slack workspace. No complex setup, no engineering required. Just authorize and go.</p>
            </div>
            <div>
              <div className="step-number">03</div>
              <div className="step-title">Start using it</div>
              <p className="step-desc">Your team can start using the app immediately. Invite colleagues, configure preferences, and unlock the full potential of Slack.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section" id="pricing">
        <div className="pricing-inner">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Simple, transparent pricing</h2>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tier">Free</div>
              <div className="pricing-price">$0</div>
              <div className="pricing-period">Forever free · No credit card</div>
              <div className="pricing-divider" />
              <div className="pricing-feature"><span className="check">✓</span> Access to all 3 apps</div>
              <div className="pricing-feature"><span className="check">✓</span> Up to 5 team members</div>
              <div className="pricing-feature"><span className="check">✓</span> Core features included</div>
              <div className="pricing-feature"><span className="check-muted">—</span> <span style={{ color: 'rgba(255,255,255,0.25)' }}>Advanced integrations</span></div>
              <div className="pricing-feature"><span className="check-muted">—</span> <span style={{ color: 'rgba(255,255,255,0.25)' }}>Priority support</span></div>
              <div className="pricing-cta">
                <a href="#" className="btn-pricing btn-pricing-free">Get started free</a>
              </div>
            </div>

            <div className="pricing-card featured">
              <div className="pricing-tier" style={{ color: '#a5b4fc' }}>Pro</div>
              <div className="pricing-price"><sup>$</sup>12</div>
              <div className="pricing-period">per workspace / month</div>
              <div className="pricing-divider" style={{ background: 'rgba(102,126,234,0.2)' }} />
              <div className="pricing-feature"><span className="check">✓</span> Everything in Free</div>
              <div className="pricing-feature"><span className="check">✓</span> Unlimited team members</div>
              <div className="pricing-feature"><span className="check">✓</span> Advanced integrations</div>
              <div className="pricing-feature"><span className="check">✓</span> Full analytics & reporting</div>
              <div className="pricing-feature"><span className="check">✓</span> Priority support</div>
              <div className="pricing-cta">
                <a href="#" className="btn-pricing btn-pricing-pro">Upgrade to Pro</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-logo">SlackApps</div>
        <div className="footer-copy">© 2026 SlackApps. All rights reserved.</div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </main>
  );
}
