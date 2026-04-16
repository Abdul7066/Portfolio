import SectionHeader from '../SectionHeader';
import ContactItem from './ContactItem';
import { contactLinks } from '../../data/contact';

/**
 * Contact — two-column section with a headline on the left and contact links on the right.
 */
export default function Contact() {
  return (
    <section id="contact">
      <SectionHeader num="04" title="Contact" />
      <div className="contact-inner">
        {/* Left: headline + description */}
        <div className="contact-text">
          <div className="big">
            Let&apos;s build<br />
            <span>something.</span>
          </div>
          <p>
            Open to backend-focused fullstack roles — remote or on-site. 3.5 years of production
            Node.js experience, ready to ship.
          </p>
        </div>

        {/* Right: contact links */}
        <div className="contact-links">
          {contactLinks.map((item) => (
            <ContactItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
