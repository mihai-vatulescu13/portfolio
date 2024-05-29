import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <section className="logo">
        <a href="#hero">
          <h1 className="logo__text">
            <span className="open-bracket">{"<"}</span>
            {"MV"}
            <span className="closed-bracket">{"/>"}</span>
          </h1>
        </a>
      </section>
      <nav className="navlinks">
        <ul className="navlinks__list">
          <li className="navlinks__list__item">
            <a href="#hero">Home</a>
          </li>
          <li className="navlinks__list__item">
            <a href="#about">About</a>
          </li>
          <li className="navlinks__list__item">
            <a href="#">Skills</a>
          </li>
          <li className="navlinks__list__item">
            <a href="#">Projects</a>
          </li>
          <li className="navlinks__list__item">
            <a href="#">Contact</a>
          </li>
        </ul>

        <ul className="navlinks__social">
          <li className="navlinks__social__item">
            <a href="https://github.com/mihai-vatulescu13" target="_blank">
              <img src="src/assets/social-media-icons/github_icon.svg" alt="" />
            </a>
          </li>
          <li className="navlinks__social__item">
            <a
              href="https://www.linkedin.com/in/mihai-vatulescu-2659291b2/"
              target="_blank"
            >
              <img
                src="src/assets/social-media-icons/linkedin_icon.svg"
                alt=""
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
