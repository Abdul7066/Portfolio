/**
 * ProjectCard — a single card in the projects grid.
 * @param {object}   project           - Project data object
 * @param {string}   project.type      - Badge text e.g. "Production"
 * @param {string}   project.period    - Date range
 * @param {string}   project.name      - Project title
 * @param {string}   project.subtitle  - Short descriptor
 * @param {string}   project.description - Paragraph text
 * @param {string[]} project.features  - Feature bullet points
 * @param {string[]} project.stack     - Tech stack tags
 */
export default function ProjectCard({ project }) {
  const { type, period, name, subtitle, description, features, stack, link } = project;

  return (
    <div className="proj-card">
      <div className="proj-glow" />

      <div className="proj-header">
        <span className="proj-type">{type}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="proj-live-link"
              title="Live Preview"
            >
              ↗ Live
            </a>
          )}
          <span className="proj-period">{period}</span>
        </div>
      </div>

      <div className="proj-name">{name}</div>
      <div className="proj-subtitle">{subtitle}</div>
      <p className="proj-desc">{description}</p>

      <ul className="proj-feats">
        {features.map((feat, i) => (
          <li key={i}>{feat}</li>
        ))}
      </ul>

      <div className="proj-stack">
        {stack.map((tag) => (
          <span key={tag} className="proj-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
