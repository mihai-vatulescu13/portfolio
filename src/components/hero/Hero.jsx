import "./Hero.scss";
import laoptopCover from "../../../src/assets/laptop-video-cover/laptop_typing.mp4";

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <h1 className="hero__title">
        Hi&#128587;, my name is <br />{" "}
        <span className="hero__title__name">Mihai Vățulescu</span>,
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
      <video className="hero__video-cover" autoPlay loop muted id="video">
        <source src={laoptopCover} type="video/mp4" />
      </video>

    </div>
  );
}
