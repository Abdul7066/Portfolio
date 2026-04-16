import SectionHeader from '../SectionHeader';
import SkillGroup from './SkillGroup';
import { skillGroups } from '../../data/skills';

/**
 * Skills — tech stack section rendered as a responsive grid of SkillGroup cards.
 */
export default function Skills() {
  return (
    <section id="skills">
      <SectionHeader num="01" title="Tech Stack" />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <SkillGroup
            key={group.id}
            className={group.className}
            icon={group.icon}
            title={group.title}
            tags={group.tags}
          />
        ))}
      </div>
    </section>
  );
}
