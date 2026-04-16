/**
 * ExperienceItem — a single row in the experience timeline.
 * @param {object}    exp         - Experience data object
 * @param {string}    exp.period  - Date range string
 * @param {string}    exp.company - Company name
 * @param {string}    exp.location- Office location
 * @param {string}    exp.role    - Job title
 * @param {ReactNode[]} exp.bullets - Array of JSX bullet point nodes
 */
export default function ExperienceItem({ exp }) {
  const { period, company, location, role, bullets } = exp;

  return (
    <div className="exp-item">
      <div className="exp-meta">
        <div className="exp-period">{period}</div>
        <div className="exp-company">{company}</div>
        <div className="exp-location">{location}</div>
      </div>

      <div className="exp-content">
        <div className="exp-role">{role}</div>
        <ul className="exp-bullets">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
