import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        © 2026 MD_ABDUL_RAHMAN // ALL_RIGHTS_RESERVED
      </div>
      
      <div className={styles.links}>
        <a href="https://github.com/Abdul7066" target="_blank" rel="noreferrer">GITHUB</a>
        <a href="https://linkedin.com/in/abdulrahemanmdamjed" target="_blank" rel="noreferrer">LINKEDIN</a>
        <a href="https://twitter.com/AbdulFurquan" target="_blank" rel="noreferrer">TWITTER</a>
        <a href={`${import.meta.env.BASE_URL}MdAbdulRahmanMERNDeveloper_2026.pdf`} download="MdAbdulRahmanMERNDeveloper_2026.pdf">RESUME</a>
      </div>

      <div className={styles.right}>
        <div className={styles.statusDot} />
        <span>V2.0.4 STABLE</span>
      </div>
    </footer>
  );
}
