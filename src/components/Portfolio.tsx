import { ArrowUpRight, Dribbble } from "lucide-react";
import { projects } from "../data/site";
export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-row">
          <div>
            <p className="eyebrow">Recent Projects</p>
            <h2>My Portfolio</h2>
          </div>
          <a className="btn btn-accent" href="#">
            <Dribbble /> Visit My Dribbble
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-image">
                <img
                  loading="lazy"
                  src={p.image}
                  alt={`${p.title} project preview`}
                />
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <a href={p.href}>
                  View In Dribbble <ArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
