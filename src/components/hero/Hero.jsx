import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__title">
        Hi&#128587;, my name is <br />{" "}
        <span className="hero__title__name">Mihai Vatulescu</span>,
        <br /> I'm a <span className="hero__title__occupation">
          frontend
        </span>{" "}
        developer &#128187;
      </h1>
      <img
        className="hero__img"
        src="src/assets/profile-picture/me_doing_programming_stuff.jpg"
        alt="profile-cover"
      />
    </div>
  );
}
