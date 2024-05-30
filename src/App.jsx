import "./App.scss";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <>
      <div className="">
        <section className="">
          <Navbar />
        </section>
        <section className="">
          <Hero />
        </section>
        <section className="">
          <About />
        </section>
        <section className="skills"></section>
        <section className="projects"></section>
        <section className="contact"></section>
      </div>
    </>
  );
}

export default App;
