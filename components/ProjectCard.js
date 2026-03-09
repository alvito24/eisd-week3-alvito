import Link from "next/link";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className={styles.tech}>
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <p className={styles.year}>{project.year}</p>
      <Link href={`/projects/${project.id}`}>Lihat Detail →</Link>
    </article>
  );
}