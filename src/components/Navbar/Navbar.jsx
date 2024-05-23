import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <section className="logo">
        <h1>MV</h1>
      </section>
      <nav className="navlinks">
        <ul className="navlinks__list">
          <li className="navlinks__list__item">
            <a href="#">Home</a>
          </li>
          <li className="navlinks__list__item">
            <a href="#">About</a>
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
            <a href="#">
              <img src="src/assets/social-media-icons/github_icon.svg" alt="" />
            </a>
          </li>
          <li className="navlinks__social__item">
            <a href="#">
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
