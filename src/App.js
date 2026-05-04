import { useState } from "react";

const brand = {
  cream: "#FAF7F2",
  sand: "#EDE5D8",
  line: "#D4C5B0",
  clay: "#B8956A",
  espresso: "#3D2B1F",
  mocha: "#7A5C3F",
  sage: "#6B7F5E",
  blush: "#C49090",
  slate: "#5C6B7A",
  white: "#FFFFFF",
};

const today = new Date().toLocaleDateString("en-ZA", {
  weekday: "long", year: "numeric", month: "long", day: "numeric",
});

const week1 = [
  { day: "Today — Day 1", color: brand.clay, sections: [
    { time: "Morning", items: [
      "Meet the team — introductions with everyone",
      "CEO welcome session: KIKO story, mission, values",
      "Review this dashboard — your home base",
      "Get system access confirmed: monday, Cin7, Slack, Drive, Gmail",
    ]},
    { time: "Afternoon", items: [
      "Read: Org Chart & Key Contacts",
      "Read: Systems & Platform Map — know every tool before you touch them",
      "Set up Slack — join all relevant channels",
      "Connect Gmail to monday CRM — critical, do this today",
    ]},
  ]},
  { day: "Day 2–3", color: brand.mocha, sections: [
    { time: "Brand & Product", items: [
      "Read: KIKO Brand & Business Bible",
      "Product range walkthrough with CSO or CEO",
      "Try the products — personal experience is non-negotiable",
      "Review KIKO social presence and content pillars",
    ]},
  ]},
  { day: "Day 4–5", color: brand.slate, sections: [
    { time: "Operations", items: [
      "Deep dive: Stockist Lifecycle System — your operational bible",
      "Cin7 orientation: B2B portal, stockist profiles, order flow",
      "Cin7 B2B portal walkthrough with CSO — accounts, profiles, order flow",
      "Review top 10 accounts — who they are, last order, status",
      "First 1:1 with CSO — align on 30-day priorities",
    ]},
  ]},
];

const quickLinks = [
  { label: "Org Chart & Key Contacts", icon: "◈", desc: "Who's who, who to call", color: brand.espresso, url: "#" },
  { label: "Systems & Platform Map", icon: "◉", desc: "Every tool, what it owns", color: brand.slate, url: "#" },
  { label: "Stockist Lifecycle System", icon: "◆", desc: "Your 5-stage operational bible", color: brand.clay, url: "#" },
  { label: "Onboarding Framework", icon: "◎", desc: "Your full 90-day journey", color: brand.sage, url: "#" },
];

const needToKnow = [
  { label: "Your direct manager", value: "Luke — Chief Sales Officer (CSO)", icon: "👤" },
  { label: "Your close collaborator", value: "Toni — Junior Sales & Training Educator", icon: "🤝" },
  { label: "Your system for stockist accounts & orders", value: "Cin7 — B2B portal, profiles, transactions, order history", icon: "📦" },
  { label: "Your system for relationships & tasks", value: "monday CRM — log every touchpoint, manage pipeline, track reactivations", icon: "📋" },
  { label: "Your system for team comms", value: "Slack (live chat) + Gmail (external, synced to monday)", icon: "💬" },
  { label: "Escalation path", value: "KAM → CSO (Luke) → CEO (Kerri-lee)", icon: "↑" },
  { label: "First port of call for ops issues", value: "Taylor — Logistics Manager", icon: "🚚" },
  { label: "Health & product questions", value: "Trish — Health Lead", icon: "💚" },
];

const golden = [
  "Cin7 owns all transactions. monday owns all relationships.",
  "Never process a stockist order through Shopify — B2B goes through Cin7 only.",
  "Log every stockist touchpoint in monday CRM immediately — not later.",
  "T&Cs must be signed before any stock is dispatched. No exceptions.",
  "Slack is not a record. If it matters, it goes in monday.",
  "Escalate payment plan requests to CSO. CEO approves case by case.",
];

export default function Day1Dashboard() {
  const [activeDay, setActiveDay] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (key) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalItems = week1.reduce((acc, d) => acc + d.sections.reduce((a, s) => a + s.items.length, 0), 0);
  const checked = Object.values(checkedItems).filter(Boolean).length;
  const pct = Math.round((checked / totalItems) * 100);

  return (
    <div style={{
      fontFamily: "'Palatino Linotype', Georgia, serif",
      background: brand.cream,
      minHeight: "100vh",
      color: brand.espresso,
    }}>
      {/* Hero header */}
      <div style={{
        background: brand.espresso,
        padding: "48px 48px 40px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(196,168,130,0.1)" }} />
        <div style={{ position: "absolute", top: -30, right: 80, width: 150, height: 150, borderRadius: "50%", border: "1px solid rgba(196,168,130,0.07)" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(196,168,130,0.04)" }} />

        <div style={{ fontSize: 10, letterSpacing: 6, textTransform: "uppercase", color: brand.clay, marginBottom: 16 }}>
          KIKO Vitals · Key Accounts Manager
        </div>
        <h1 style={{ margin: "0 0 10px", fontSize: 36, fontWeight: 400, color: brand.cream, letterSpacing: -0.5, lineHeight: 1.15 }}>
          Welcome to KIKO.
        </h1>
        <p style={{ margin: "0 0 24px", fontSize: 15, color: "rgba(250,247,242,0.55)", lineHeight: 1.7, maxWidth: 520 }}>
          Everything you need for your first week — in one place. Work through this dashboard at your own pace. Your first priority is understanding before doing.
        </p>
        <div style={{ fontSize: 11, color: brand.clay, letterSpacing: 1 }}>
          {today}
        </div>

        {/* Progress bar */}
        <div style={{ marginTop: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "rgba(250,247,242,0.4)" }}>
              Week 1 Progress
            </span>
            <span style={{ fontSize: 12, color: brand.clay }}>{pct}% complete — {checked}/{totalItems} tasks</span>
          </div>
          <div style={{ height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 2 }}>
            <div style={{
              height: "100%", width: `${pct}%`,
              background: `linear-gradient(90deg, ${brand.clay}, ${brand.blush})`,
              borderRadius: 2, transition: "width 0.4s ease",
            }} />
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div style={{ padding: "32px 48px 0" }}>
        <div style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: brand.clay, marginBottom: 16 }}>
          Your Reference Dashboards
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {quickLinks.map((link, i) => (
            <a key={i} href={link.url} style={{
              background: brand.white,
              border: `1px solid ${brand.line}`,
              borderTop: `3px solid ${link.color}`,
              borderRadius: 8,
              padding: "16px 16px",
              textDecoration: "none",
              display: "block",
              transition: "all 0.15s",
            }}>
              <div style={{ fontSize: 18, marginBottom: 8, color: link.color }}>{link.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: brand.espresso, lineHeight: 1.3, marginBottom: 4 }}>{link.label}</div>
              <div style={{ fontSize: 10.5, color: brand.mocha, lineHeight: 1.4 }}>{link.desc}</div>
            </a>
          ))}
        </div>
        <p style={{ margin: "12px 0 0", fontSize: 11, color: brand.mocha, fontStyle: "italic" }}>
          ↑ Links will be activated once dashboards are hosted on Vercel. Bookmark this page.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24, padding: "28px 48px 48px" }}>

        {/* Left — Week 1 Checklist */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: brand.clay, marginBottom: 16 }}>
            Your First Week — Day by Day
          </div>

          {/* Day tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            {week1.map((d, i) => (
              <button key={i} onClick={() => setActiveDay(i)} style={{
                background: activeDay === i ? d.color : brand.white,
                border: `1px solid ${activeDay === i ? d.color : brand.line}`,
                borderRadius: 6, padding: "8px 18px",
                fontSize: 11, cursor: "pointer", fontFamily: "inherit",
                color: activeDay === i ? brand.white : brand.mocha,
                transition: "all 0.15s",
              }}>
                {d.day}
              </button>
            ))}
          </div>

          {/* Day content */}
          {week1[activeDay].sections.map((section, si) => (
            <div key={si} style={{
              background: brand.white,
              border: `1px solid ${brand.line}`,
              borderRadius: 10,
              overflow: "hidden",
              marginBottom: 12,
            }}>
              <div style={{
                background: week1[activeDay].color,
                color: brand.white,
                padding: "10px 20px",
                fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
              }}>
                {section.time}
              </div>
              <div style={{ padding: "8px 20px 16px" }}>
                {section.items.map((item, ii) => {
                  const key = `${activeDay}-${si}-${ii}`;
                  const done = checkedItems[key];
                  return (
                    <div key={ii} onClick={() => toggleCheck(key)} style={{
                      display: "flex", alignItems: "flex-start", gap: 12,
                      padding: "10px 0",
                      borderBottom: ii < section.items.length - 1 ? `1px solid ${brand.sand}` : "none",
                      cursor: "pointer",
                    }}>
                      <div style={{
                        width: 20, height: 20, minWidth: 20,
                        border: `2px solid ${done ? week1[activeDay].color : brand.line}`,
                        borderRadius: 4, marginTop: 1,
                        background: done ? week1[activeDay].color : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.15s",
                      }}>
                        {done && <span style={{ color: brand.white, fontSize: 11, fontWeight: 700 }}>✓</span>}
                      </div>
                      <span style={{
                        fontSize: 13.5, color: done ? brand.mocha : brand.espresso,
                        lineHeight: 1.5,
                        textDecoration: done ? "line-through" : "none",
                        opacity: done ? 0.6 : 1,
                        transition: "all 0.15s",
                      }}>
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right — Need to know + Golden rules */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

          {/* Need to know */}
          <div>
            <div style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: brand.clay, marginBottom: 14 }}>
              Need to Know — Right Now
            </div>
            <div style={{ background: brand.white, border: `1px solid ${brand.line}`, borderRadius: 10, overflow: "hidden" }}>
              {needToKnow.map((item, i) => (
                <div key={i} style={{
                  padding: "12px 16px",
                  borderBottom: i < needToKnow.length - 1 ? `1px solid ${brand.sand}` : "none",
                }}>
                  <div style={{ fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color: brand.clay, marginBottom: 4 }}>
                    {item.icon} {item.label}
                  </div>
                  <div style={{ fontSize: 12.5, color: brand.espresso, lineHeight: 1.4, fontWeight: 600 }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Golden rules */}
          <div>
            <div style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: brand.clay, marginBottom: 14 }}>
              Golden Rules — Know These Cold
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {golden.map((rule, i) => (
                <div key={i} style={{
                  background: brand.white,
                  border: `1px solid ${brand.line}`,
                  borderLeft: `3px solid ${brand.clay}`,
                  borderRadius: 6,
                  padding: "11px 14px",
                  fontSize: 12, color: brand.espresso, lineHeight: 1.55,
                }}>
                  {rule}
                </div>
              ))}
            </div>
          </div>

          {/* First week reminder */}
          <div style={{
            background: brand.espresso,
            borderRadius: 10, padding: "20px 20px",
            color: brand.cream,
          }}>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: brand.clay, marginBottom: 10 }}>
              A note from Kerri-lee
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: "rgba(250,247,242,0.8)", fontStyle: "italic" }}>
              "We brought you in because you are the expert. Learn the business, understand the brand — then bring your thinking. We want your ideas, your perspective, and your instincts on how we position KIKO properly from a KAM standpoint. You are not here to fit a mould. You are here to help build one."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
