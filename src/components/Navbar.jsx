import { useState } from 'react';
import { Mail, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo} onClick={close}>
          ABDULRAHMAN's Portfolio
        </a>

        <ul className={styles.links}>
          <li><a href="#" onClick={close}>HOME</a></li>
          <li><a href="#projects" onClick={close}>PROJECTS</a></li>
          <li><a href="#experience" onClick={close}>EXPERIENCE</a></li>
          <li><a href="#contact" className={styles.active} onClick={close}>CONTACT</a></li>
        </ul>

        <div className={styles.right}>
          <button onClick={toggleTheme} className={styles.iconBtn} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="mailto:7066abdulrahman@gmail.com" className={`${styles.iconBtn} ${styles.hideOnMobile}`} aria-label="Messages">
            <Mail size={18} />
          </a>
          <a
            href={`${import.meta.env.BASE_URL}MdAbdulRahman_CV_2026.pdf`}
            download="MdAbdulRahman_CV_2026.pdf"
            className={`${styles.hireBtn} ${styles.hideOnMobile}`}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            HIRE ME
          </a>
          <button
            className={`${styles.iconBtn} ${styles.hamburger}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            <li><a href="#" onClick={close}>HOME</a></li>
            <li><a href="#projects" onClick={close}>PROJECTS</a></li>
            <li><a href="#experience" onClick={close}>EXPERIENCE</a></li>
            <li><a href="#contact" onClick={close}>CONTACT</a></li>
          </ul>
          <div className={styles.mobileActions}>
            <a href="mailto:7066abdulrahman@gmail.com" className={styles.mobileActionBtn} onClick={close}>
              <Mail size={16} /> EMAIL ME
            </a>
            <a
              href={`${import.meta.env.BASE_URL}MdAbdulRahman_CV_2026.pdf`}
              download="MdAbdulRahman_CV_2026.pdf"
              className={`${styles.mobileActionBtn} ${styles.mobileHire}`}
              onClick={close}
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      )}
    </>
  );
}

