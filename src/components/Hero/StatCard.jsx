/**
 * StatCard — single numeric stat displayed in the hero right panel.
 * @param {string|number} num   - The stat value e.g. "3.5"
 * @param {string}        label - The stat label e.g. "Years Experience"
 */
export default function StatCard({ num, label }) {
  return (
    <div className="stat-card">
      <div className="stat-num">{num}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
