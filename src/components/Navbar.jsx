import { Mail } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>
        ARCHITECT.SYS
      </a>

      <ul className={styles.links}>
        <li><a href="#">HOME</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#contact" className={styles.active}>CONTACT</a></li>
      </ul>

      <div className={styles.right}>
        <a href="mailto:7066abdulrahman@gmail.com" className={styles.iconBtn} aria-label="Messages">
          <Mail size={20} />
        </a>
        <a 
          href={`${import.meta.env.BASE_URL}MdAbdulRahman_CV_2026.pdf`} 
          download="MdAbdulRahman_CV_2026.pdf"
          className={styles.hireBtn}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          HIRE ME
        </a>
      </div>
    </nav>
  );
}
