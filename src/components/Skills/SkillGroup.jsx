/**
 * SkillGroup — a single card in the skills grid.
 * @param {string}   className - BEM modifier class e.g. 'sg-backend'
 * @param {string}   icon      - Emoji icon
 * @param {string}   title     - Group heading
 * @param {string[]} tags      - Array of skill tag strings
 */
export default function SkillGroup({ className, icon, title, tags }) {
  return (
    <div className={`skill-group ${className}`}>
      <div className="sg-icon">{icon}</div>
      <div className="sg-title">{title}</div>
      <div className="skill-tags">
        {tags.map((tag) => (
          <span key={tag} className="stag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
