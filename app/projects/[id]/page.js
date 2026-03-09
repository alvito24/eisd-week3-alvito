import { projects } from "@/data/projects";
import Link from "next/link";

export default async function ProjectDetail({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <section>
        <h1>Project tidak ditemukan</h1>
        <Link href="/">← Balik ke Home</Link>
      </section>
    );
  }

  return (
    <article>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.detail}</p>

      <div>
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <p>Tahun: {project.year}</p>
      <Link href="/">← Balik ke Home</Link>
    </article>
  );
}