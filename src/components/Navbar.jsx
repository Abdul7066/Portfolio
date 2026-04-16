import { useTheme } from '../hooks/useTheme';

/**
 * Navbar — sticky top navigation with logo, links, availability badge and theme toggle.
 */
export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <div className="nav-logo">
        Abdul Rahman's Portfolio
      </div>

      <ul className="nav-links">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-right">
        <div className="nav-status">
          <div className="status-dot" />
          Available for roles
        </div>

        <a
          href="/MdAbdulRahman_CV_2026.pdf"
          download="MdAbdulRahman_CV_2026.pdf"
          className="btn-nav-cv"
          title="Download CV"
        >
          ↓ CV
        </a>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          title="Toggle theme"
          aria-label="Toggle dark/light mode"
        >
          <span className="theme-toggle-icon icon-dark">🌙</span>
          <span className="theme-toggle-icon icon-light">☀️</span>
          <div className="theme-toggle-thumb" />
        </button>
      </div>
    </nav>
  );
}
