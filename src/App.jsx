import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="container">
        <section className="navbar">
          <Navbar/>
        </section>
        <section className="hero">
          <h1>Portfolio</h1>
        </section>
        <section className="about"></section>
        <section className="skills"></section>
        <section className="projects"></section>
        <section className="contact"></section>
      </div>
    </>
  );
}

export default App;
