import React from 'react';
import styles from './Contact.module.css';
import { Paperclip, Send } from 'lucide-react';

const Github = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const Linkedin = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const Twitter = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

export default function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contentWrapper}>
        {/* Left Column */}
        <div>
          <div className={styles.titleBox}>
            <h2>
              LET&apos;S <br />
              <em>BUILD</em><br />
              THE FUTURE.
            </h2>
          </div>
          
          <p className={styles.description}>
            Currently accepting new architectural challenges. Whether you have a specific project in mind or just want to talk about high-level systems design, my inbox is open.
          </p>

          <div className={styles.socialsRow}>
            <a href="https://github.com/Abdul7066" target="_blank" rel="noreferrer" className={styles.socialCard}>
              <Github size={24} className={styles.socialCardIcon} />
              <div style={{ marginTop: 'auto' }}>
                <div className={styles.socialCardLabel}>Source Code</div>
                <div className={styles.socialCardName}>Github</div>
              </div>
            </a>
            <a href="https://linkedin.com/in/abdulrahemanmdamjed" target="_blank" rel="noreferrer" className={styles.socialCard}>
              <Linkedin size={24} className={styles.socialCardIcon} />
              <div style={{ marginTop: 'auto' }}>
                <div className={styles.socialCardLabel}>Network</div>
                <div className={styles.socialCardName}>LinkedIn</div>
              </div>
            </a>
            <a href="https://twitter.com/AbdulFurquan" target="_blank" rel="noreferrer" className={styles.socialCard}>
              <Twitter size={24} className={styles.socialCardIcon} />
              <div style={{ marginTop: 'auto' }}>
                <div className={styles.socialCardLabel}>Updates</div>
                <div className={styles.socialCardName}>Twitter / X</div>
              </div>
            </a>
          </div>

          <div className={styles.freelanceBanner}>
            <div className={styles.freelanceVisual}>
              <img
                src={`${import.meta.env.BASE_URL}freelance-workspace.png`}
                alt="Developer workspace"
                className={styles.freelanceImg}
              />
            </div>
            <div className={styles.freelanceLabel}>
              <div className={styles.pulseDot}></div>
              AVAILABLE FOR FREELANCE
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div>
          <div className={styles.formContainer}>
            <div className={styles.infoGrid}>
              
              <div className={styles.infoGroup}>
                <label>System Architect</label>
                <div className={styles.infoValue}>Md Abdul Rahman</div>
              </div>

              <div className={styles.infoGroup}>
                <label>Direct Line</label>
                <div className={styles.infoValue}><a href="tel:+917066462136">+91 7066 462 136</a></div>
              </div>

              <div className={`${styles.infoGroup} ${styles.fullWidth}`}>
                <label>Email Transmission</label>
                <div className={styles.infoValue}><a href="mailto:7066abdulrahman@gmail.com">7066abdulrahman@gmail.com</a></div>
              </div>

              <div className={`${styles.infoGroup} ${styles.fullWidth}`}>
                <label>Geographic Coordinates</label>
                <div className={styles.infoValue}>Degloor Naka Nanded, 431604, Maharashtra</div>
              </div>

            </div>


            <div className={styles.formChips}>
              <span className={styles.chip}>Frontend Architecture</span>
              <span className={styles.chip}>API Design</span>
              <span className={styles.chip}>System Scaling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
