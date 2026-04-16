/**
 * SectionHeader — reusable numbered section heading used across all sections.
 * @param {string} num   - Section number e.g. "01"
 * @param {string} title - Section title e.g. "Tech Stack"
 */
export default function SectionHeader({ num, title }) {
  return (
    <div className="section-header">
      <span className="section-num">{num}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
    </div>
  );
}
