import Image from "next/image";
import Link from "next/link";
import portrait from "@/public/images/victor-professional.png";
import trendstack from "@/public/images/slide1.jpg";
import clickd from "@/public/images/slide7.png";
import koyi from "@/public/images/slide8.png";
import fuzion from "@/public/images/fuzdash.jpg";
import park from "@/public/images/tp.jpg";

const projects = [
  {
    number: "01",
    name: "AltBank CRM",
    client: "Unshelled Consultancy",
    type: "Fintech · Internal product",
    copy: "A focused customer-relationship workspace for AltBank teams—bringing customer context, operational workflows, and day-to-day actions into one dependable interface.",
    stack: ["Next.js", "TypeScript", "React Query", "Design systems"],
    period: "2025",
    tone: "lime",
  },
  {
    number: "02",
    name: "Mood Magic",
    client: "moodmagic.ai",
    type: "AI · Consumer product",
    copy: "An AI-powered experience shaped around emotional context. I translated an ambitious product idea into an approachable, responsive interface with clear interaction patterns.",
    stack: ["Next.js", "TypeScript", "AI interfaces", "Responsive UI"],
    href: "https://moodmagic.ai/",
    period: "2026",
    tone: "violet",
  },
  {
    number: "03",
    name: "Audit Intelligence",
    client: "Enterprise platform",
    type: "Data · B2B SaaS",
    copy: "A dense audit workflow made easier to navigate through considered information architecture, reusable data views, and interfaces designed for confident decisions.",
    stack: ["React", "TypeScript", "Data visualisation", "Complex forms"],
    href: "https://www.auditelligence.com/",
    period: "2025",
    tone: "blue",
  },
  {
    number: "04",
    name: "Night Visions",
    client: "Digital experience",
    type: "Media · Product",
    copy: "A bold, atmosphere-led digital product where motion, content hierarchy, and performance work together without compromising accessibility or usability.",
    stack: ["Next.js", "Motion", "Accessibility", "Performance"],
    href: "https://nightvisions.ai/",
    period: "2026",
    tone: "orange",
  },
];

const shipped = [
  { name: "Click’d", image: clickd, href: "https://clickd.africa/", label: "Social platform" },
  { name: "Koyi", image: koyi, href: "https://koyi.africa/", label: "Learning & hiring" },
  { name: "Fuziondot", image: fuzion, href: "https://www.fuziondot.com/", label: "Marketing intelligence" },
  { name: "The Park DB", image: park, href: "https://www.theparkdb.com/", label: "Travel discovery" },
  { name: "Trendstack", image: trendstack, href: "https://gettrendstack.com/", label: "Creator economy" },
];

const roles = [
  {
    company: "Unshelled Consultancy",
    role: "Frontend Engineer · Consultant",
    date: "2025 — Present",
    copy: "Delivered frontend consultancy for AltBank’s CRM, turning complex operational requirements into clear, scalable product workflows.",
  },
  {
    company: "P.E Gaming Limited",
    role: "Frontend Engineer",
    date: "2025",
    copy: "Built product experiences across gaming and consumer platforms, with ownership from interface architecture through production delivery.",
  },
  {
    company: "RocketDevs",
    role: "Frontend Engineer · Consultant",
    date: "2024 — Present",
    copy: "Partnering with international clients to ship responsive, production-ready products across different domains and team structures.",
  },
  {
    company: "Fuziondot",
    role: "Frontend Developer",
    date: "2024 — 2025",
    copy: "Built a multi-tool marketing intelligence dashboard spanning SEO, research, analytics, advertising, payments, and data visualisation.",
  },
  {
    company: "Trendstack",
    role: "Frontend Developer",
    date: "2023 — 2024",
    copy: "Helped build a two-sided campaign platform connecting brands with creators, including discovery, campaign, and payment journeys.",
  },
  {
    company: "Independent Product Work",
    role: "Frontend Developer",
    date: "2022 — 2023",
    copy: "Started my professional frontend journey by designing and shipping complete React products, building the foundations for client delivery and product engineering.",
  },
];

const capabilities = [
  ["Frontend architecture", "React · Next.js · TypeScript · component systems"],
  ["Product engineering", "Discovery · rapid prototyping · complex workflows"],
  ["UI engineering", "Responsive systems · motion · accessibility · performance"],
  ["Data & state", "TanStack Query · Redux · REST APIs · WebSockets"],
  ["Quality & delivery", "Testing strategy · Git · CI/CD · Vercel"],
  ["Team impact", "Mentorship · code review · cross-functional collaboration"],
];

export default function Page() {
  return (
    <main>
      <nav className="nav shell">
        <Link href="#top" className="brand" aria-label="Victor Patrick, home">
          VP<span>.</span>
        </Link>
        <div className="navLinks">
          <Link href="#work">Work</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#about">About</Link>
        </div>
        <Link className="availability" href="mailto:victorbernardpatrick@gmail.com">
          <i /> Available for select work
        </Link>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Frontend engineer · Lagos, Nigeria</p>
          <h1>I build interfaces that make <em>complex products</em> feel simple.</h1>
          <p className="intro">
            I’m Victor Patrick, a product-minded frontend engineer with 4+ years of experience crafting fast, accessible,
            and scalable experiences for fintech, AI, SaaS, and consumer products.
          </p>
          <div className="heroActions">
            <Link href="#work" className="button primary">Explore selected work <span>↘</span></Link>
            <Link href="/Victor-Patrick-Resume.pdf" className="button secondary" target="_blank">View résumé ↗</Link>
          </div>
        </div>
        <div className="portraitWrap">
          <div className="portraitFrame">
            <Image src={portrait} alt="Victor Patrick, frontend engineer" priority fill sizes="(max-width: 800px) 90vw, 40vw" />
          </div>
          <div className="portraitNote"><span>Currently</span><strong>Building useful things<br/>for the web.</strong></div>
        </div>
        <div className="heroFoot">
          <span>Scroll to explore</span>
          <span>React · Next.js · TypeScript</span>
        </div>
      </section>

      <section className="work section shell" id="work">
        <div className="sectionHead">
          <div><p className="eyebrow">01 / Selected work</p><h2>Products, not just pages.</h2></div>
          <p>A selection of recent work across high-context product teams. Some client details remain intentionally concise.</p>
        </div>
        <div className="caseGrid">
          {projects.map((project) => (
            <article className={`caseCard ${project.tone}`} key={project.name}>
              <div className="caseTop"><span>{project.number} · {project.period}</span><span>{project.type}</span></div>
              <div className="caseMark" aria-hidden="true"><span>{project.name.slice(0, 2).toUpperCase()}</span></div>
              <div className="caseBody">
                <p>{project.client}</p>
                <h3>{project.name}</h3>
                <p className="caseCopy">{project.copy}</p>
                <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {project.href && <Link href={project.href} target="_blank">Visit product ↗</Link>}
              </div>
            </article>
          ))}
        </div>

        <div className="moreWork">
          <p className="eyebrow">Also shipped</p>
          <div className="shipGrid">
            {shipped.map((item) => (
              <Link href={item.href} target="_blank" className="shipCard" key={item.name}>
                <div className="shipImage"><Image src={item.image} alt="" fill sizes="25vw" /></div>
                <div><span>{item.label}</span><h3>{item.name}</h3></div><b>↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="experience section shell" id="experience">
        <div className="sectionHead">
          <div><p className="eyebrow">02 / Experience</p><h2>Built in the real world.</h2></div>
          <p>I work comfortably at the intersection of product thinking, visual craft, and dependable frontend architecture.</p>
        </div>
        <div className="timeline">
          {roles.map((role, index) => (
            <article key={role.company}>
              <span className="roleIndex">0{index + 1}</span>
              <div><h3>{role.company}</h3><p>{role.role}</p></div>
              <p className="roleCopy">{role.copy}</p>
              <time>{role.date}</time>
            </article>
          ))}
        </div>
      </section>

      <section className="about section shell" id="about">
        <div className="aboutStatement">
          <p className="eyebrow">03 / How I work</p>
          <h2>Engineering with a <em>product point of view.</em></h2>
          <p>I care about the complete experience: what a feature should do, how it should feel, how it scales, and what it costs to maintain.</p>
        </div>
        <div className="capabilities">
          {capabilities.map(([name, skills], index) => (
            <div key={name}><span>0{index + 1}</span><strong>{name}</strong><p>{skills}</p></div>
          ))}
        </div>
        <div className="education">
          <p>Learning, formally and continuously.</p>
          <div><strong>BSc, Software Development</strong><span>BYU–Idaho · In progress</span></div>
          <div><strong>Diploma, Frontend Engineering</strong><span>AltSchool Africa · 2023</span></div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell">
          <p className="eyebrow">Have a complex product problem?</p>
          <h2>Let’s make it <em>clear.</em></h2>
          <Link href="mailto:victorbernardpatrick@gmail.com" className="footerMail">victorbernardpatrick@gmail.com ↗</Link>
          <div className="footerBottom">
            <span>© {new Date().getFullYear()} Victor Patrick</span>
            <div><Link href="https://github.com/DjPatbern" target="_blank">GitHub</Link><Link href="https://www.linkedin.com/in/victor-patrick-740458229/" target="_blank">LinkedIn</Link><Link href="#top">Back to top ↑</Link></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
