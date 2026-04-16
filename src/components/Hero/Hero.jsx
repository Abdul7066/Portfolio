import HeroTerminal from './HeroTerminal';
import StatCard from './StatCard';

const stats = [
  { num: '3.5', label: 'Years Experience' },
  { num: '2',   label: 'Production Apps' },
  { num: '10+', label: 'Technologies' },
  { num: '2',   label: 'Companies' },
];

/**
 * Hero — full-viewport landing section with intro text, terminal, CTA and stat cards.
 */
export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Left content */}
      <div className="hero-inner">
        <div className="hero-tag fade-in">
          <span>▸</span> backend-focused fullstack developer
        </div>

        <h1 className="hero-name fade-in delay-1">
          Md Abdul<br />
          <span className="accent">Rahman</span>
        </h1>

        <p className="hero-role fade-in delay-2">
          Software Developer · <span className="hl">Backend Focused</span>
        </p>

        <HeroTerminal />

        <div className="hero-cta fade-in delay-4">
          <a href="#projects" className="btn btn-primary">▸ View Projects</a>
          <a href="#contact"  className="btn btn-secondary">Get in Touch →</a>
          <a
            href="/MdAbdulRahman_CV_2026.pdf"
            download="MdAbdulRahman_CV_2026.pdf"
            className="btn btn-cv"
          >
            ↓ Download CV
          </a>
        </div>
      </div>

      {/* Right stat cards */}
      <div className="hero-right fade-in delay-5">
        {stats.map((s) => (
          <StatCard key={s.label} num={s.num} label={s.label} />
        ))}
      </div>
    </section>
  );
}
