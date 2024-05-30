import "./About.scss";
import ExperienceItem from "./experience-component/ExperienceItem";
import { experienceItemsList, educationData } from "./experienceData";

export default function About() {
  const experienceItems = experienceItemsList.map((item, index) => (
    <ExperienceItem props={item} key={index} />
  ));

  return (
    <div id="about" className="about">
      <section className="about__me">
        <h1 className="about-title">About me&#128221;</h1>
        <p className="about__me__description">
          &#128073; I am a frontend developer, passionate and web technologies
          enthusiast. <br /> &#128073; With solid experience in terms of
          building user interfaces, I propose to transform those ideas into
          amazing digital experiences. <br /> &#128073; My goal is to keep
          learning and exploring to define new solutions and improve the
          quality. <br /> &#128073; I am also open to opportunities in terms of
          collaborations to work on interesting and innovative projects.
        </p>
      </section>

      <section className="experience">
        <div className="experience__cards">
          <h1 className="about-title">Work Experience &#128188;</h1>
          <div className="about__experience__items">{experienceItems}</div>
        </div>
        <div className="experience__details">
          {/* for the tablet and the phone the bracket will be placed down with its num of years specific text instead on the right side or removed */}
          <p className="experience__details__bracket">{"}"}</p>
          {/* here we need a calculator that calculate the overall experience form the all stages: */}
          <p className="experience__details__years">
            3 Years of <br /> overall <span>experience</span>
          </p>
        </div>
      </section>

      <section className="education">
        <h1 className="about-title">Education &#128214;</h1>
        <ExperienceItem props={educationData} />
      </section>
    </div>
  );
}

//&#8987; -> time icon