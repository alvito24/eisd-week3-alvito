import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <section>
        <h1>Alvito March Vieri Nanda Sulistyo</h1>
        <p>Tugas Website Study Groub EISD Week3</p>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="card-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}