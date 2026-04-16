import SectionHeader from '../SectionHeader';
import ExperienceItem from './ExperienceItem';
import { experiences } from '../../data/experience';

/**
 * Experience — work history section rendered as a vertical list of ExperienceItem rows.
 */
export default function Experience() {
  return (
    <section id="experience">
      <SectionHeader num="02" title="Experience" />
      <div className="exp-list">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
}
