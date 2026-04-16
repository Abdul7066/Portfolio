import SectionHeader from '../SectionHeader';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

/**
 * Projects — showcase section rendered as a 2-column grid of ProjectCard components.
 */
export default function Projects() {
  return (
    <section id="projects">
      <SectionHeader num="03" title="Projects" />
      <div className="proj-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
