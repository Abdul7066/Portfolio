/**
 * ContactItem — a single contact link/info row.
 * Renders as an <a> tag when href is provided, otherwise a <div>.
 *
 * @param {object}  item           - Contact data object
 * @param {string|null} item.href  - Link URL (null for non-link items)
 * @param {string}  item.target    - Link target e.g. '_blank'
 * @param {string}  item.icon      - Icon character/emoji
 * @param {string}  item.label     - Uppercase label e.g. 'Email'
 * @param {string}  item.value     - Display value
 * @param {boolean} item.showArrow - Whether to show the → arrow
 */
export default function ContactItem({ item }) {
  const { href, target, icon, label, value, showArrow } = item;

  const inner = (
    <>
      <div className="ci-icon">{icon}</div>
      <div>
        <div className="ci-label">{label}</div>
        <div className="ci-value">{value}</div>
      </div>
      {showArrow && <div className="ci-arrow">→</div>}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} className="contact-item" rel="noreferrer">
        {inner}
      </a>
    );
  }

  return <div className="contact-item">{inner}</div>;
}
