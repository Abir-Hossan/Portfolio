import { Sparkles } from "lucide-react";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h3 className="eyebrow">Hey, I am ABIR</h3>
          <h1>
            I build  <span>Modern Websites</span>
            <br />
             and Web Experiences
          </h1>
          <p className="lead">
            I build responsive, accessible and high-performing websites with a focus on clean interfaces, smooth interactions and maintainable code.
          </p>
          <a className="btn btn-primary" href="#contact">
            Get In Touch
          </a>
        </div>
        <div className="hero-visual" aria-label="Portrait of Abir Hossan">
          <div className="portrait-panel"></div>
          <Sparkles className="spark s1" />
          <Sparkles className="spark s2" />
          <span className="plus p1">✦</span>
          <span className="plus p2">✦</span>
          <img src="/images/hero-person.png" alt="Abir Hossan, product designer" />
        </div>
      </div>
    </section>
  );
}
