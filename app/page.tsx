"use client";

import dynamic from "next/dynamic";
import FadeIn from "@/components/FadeIn";

const EthExperience = dynamic(() => import("@/components/EthExperience"), { ssr: false });

const featurePillars = [
  {
    title: "Programmable Money",
    description:
      "Ethereum transforms static value into living protocols - automated markets, unstoppable lending, programmable derivatives - all interwoven into a borderless economy.",
    icon: "01"
  },
  {
    title: "Decentralized Trust",
    description:
      "A global collective of validators secures billions in value without intermediaries, delivering infrastructure with 24/7 uptime and cryptographic assurance.",
    icon: "02"
  },
  {
    title: "Scalability Unleashed",
    description:
      "Modular rollups and danksharding amplify throughput while shrinking fees to pennies, scaling Ethereum to millions of users without sacrificing security.",
    icon: "03"
  }
];

const macroForces = [
  {
    title: "Open Finance Dominance",
    detail:
      "Over $70B in total value is orchestrated by Ethereum smart contracts, composing new capital markets that operate at the speed of code.",
    accent: "DeFi"
  },
  {
    title: "Institutional Momentum",
    detail:
      "Enterprises, sovereign funds and Fortune 100 brands deploy on Ethereum, drawn by transparent accounting, tokenized assets, and programmable governance.",
    accent: "Institutional"
  },
  {
    title: "Sustainable Innovation",
    detail:
      "Post-Merge, Ethereum reduced energy consumption by 99.95%. Every transaction now powers collective intelligence rather than carbon footprints.",
    accent: "Impact"
  }
];

const roadmap = [
  {
    epoch: "Now",
    title: "The Rollup Renaissance",
    narrative:
      "zkEVMs and optimistic rollups compress computation, propelling Ethereum to handle thousands of transactions per second today.",
    metric: "4,000+ TPS"
  },
  {
    epoch: "2024-2025",
    title: "Proto-Danksharding (EIP-4844)",
    narrative:
      "Data blobs supercharge rollup throughput while slashing fees, cementing Ethereum as the default settlement layer for the decentralized web.",
    metric: "~$0.02 fees"
  },
  {
    epoch: "2025+",
    title: "The Verge & The Purge",
    narrative:
      "Succinct proofs and state expiry compress the chain, unleashing lightweight nodes and frictionless participation for the entire planet.",
    metric: "Millions of validators"
  }
];

const visionStatements = [
  {
    headline: "A Global Settlement Layer",
    copy:
      "Ethereum becomes the programmable substrate for value transfer, identity, and coordination - settling assets, gaming economies, and nation-scale operations."
  },
  {
    headline: "Composability as a Superpower",
    copy:
      "Every new protocol is instantly interoperable, stacking innovation like Lego bricks. This compounding effect accelerates faster than any centralized roadmap."
  },
  {
    headline: "Community-Governed Future",
    copy:
      "ETH aligns incentives across validators, stakers, builders, and users, forging digital societies where governance is transparent, inclusive, and unstoppable."
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="glow glow-left" />
        <div className="glow glow-right" />
        <div className="inner hero-grid">
          <FadeIn className="hero-copy">
            <span className="tag">Ethereum Ascendance</span>
            <h1>
              The Future of <span>Crypto</span> is <span>Programmable</span>
            </h1>
            <p>
              Ethereum is the neural network of value - an ever-evolving, energy-efficient base layer
              where decentralized finance, public goods, and global coordination are built without
              permission.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="#vision">
                Explore the Vision
              </a>
              <a className="btn-secondary" href="#momentum">
                Why ETH Wins
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>$70B+</strong>
                <span>DeFi Total Value Locked</span>
              </div>
              <div>
                <strong>99.95%</strong>
                <span>Energy Reduction After The Merge</span>
              </div>
              <div>
                <strong>6,000+</strong>
                <span>Global dApps</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="hero-scene">
            <EthExperience />
          </FadeIn>
        </div>
      </section>

      <section id="vision">
        <div className="inner grid grid-3">
          {featurePillars.map((item, idx) => (
            <FadeIn
              key={item.title}
              delay={idx * 0.1 + 0.1}
              duration={0.7}
              as="article"
              className="glass pillar-card"
            >
              <div className="pillar-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="momentum" className="momentum">
        <div className="inner">
          <FadeIn className="section-head">
            <span className="tag">Macro Momentum</span>
            <h2>ETH is the Gravity Well of Digital Finance</h2>
            <p>
              Network effects, institutional trust, and a relentless community push Ethereum into a
              future where economies run autonomously and citizens own their data.
            </p>
          </FadeIn>
          <div className="grid grid-3 momentum-grid">
            {macroForces.map((force, index) => (
              <FadeIn
                key={force.title}
                delay={index * 0.12 + 0.2}
                duration={0.7}
                as="article"
                className="glass momentum-card"
              >
                <span className="accent">{force.accent}</span>
                <h3>{force.title}</h3>
                <p>{force.detail}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="roadmap">
        <div className="inner">
          <FadeIn className="section-head">
            <span className="tag">The Road Ahead</span>
            <h2>The Ethereum Master Plan is Unfolding</h2>
            <p>
              Vitalik&apos;s roadmap relentlessly optimizes scalability, security, and sustainability.
              Each upgrade compounds Ethereum&apos;s lead as the premier settlement layer.
            </p>
          </FadeIn>
          <div className="timeline">
            {roadmap.map((phase, i) => (
              <FadeIn
                key={phase.title}
                delay={i * 0.15 + 0.3}
                duration={0.7}
                className="timeline-item glass"
              >
                <span className="epoch">{phase.epoch}</span>
                <h3>{phase.title}</h3>
                <p>{phase.narrative}</p>
                <div className="metric">{phase.metric}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="fade-divider" />

      <section className="vision">
        <div className="inner">
          <FadeIn className="section-head">
            <span className="tag">Why It Matters</span>
            <h2>Ethereum is Humanity&apos;s Coordination Engine</h2>
            <p>
              From unbanked populations to transnational organizations, ETH empowers anyone to
              programmable sovereignty: transparent rules, unstoppable execution, equitable upside.
            </p>
          </FadeIn>
          <div className="grid grid-2 vision-grid">
            {visionStatements.map((vision, idx) => (
              <FadeIn
                key={vision.headline}
                delay={idx * 0.12 + 0.4}
                duration={0.7}
                as="article"
                className="glass vision-card"
              >
                <h3>{vision.headline}</h3>
                <p>{vision.copy}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="inner glass">
          <FadeIn className="cta-content">
            <h2>Stake Your Claim in the Ethereum Future</h2>
            <p>
              Join builders, validators, and visionaries accelerating Ethereum&apos;s evolution.
              Align with a movement architecting the next century of finance and human coordination.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="https://ethereum.org" target="_blank" rel="noreferrer">
                Visit ethereum.org
              </a>
              <a
                className="btn-secondary"
                href="https://ethereum.org/en/developers/"
                target="_blank"
                rel="noreferrer"
              >
                Start Building
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
