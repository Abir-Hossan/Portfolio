import Header from "./components/Header";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Expertise />
        <About />
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
