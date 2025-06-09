import { useTranslation } from "react-i18next";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const { t } = useTranslation();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skillData = [
    { key: "HTML5 & CSS3", img: meter1, stars: "⭐⭐⭐⭐⭐" },
    { key: "JavaScript", img: meter3, stars: "⭐⭐⭐⭐" },
    { key: "TypeScript", img: meter2, stars: "⭐⭐⭐" },
    { key: "React", img: meter2, stars: "⭐⭐⭐⭐" },
    { key: "Angular", img: meter3, stars: "⭐⭐⭐⭐" },
    { key: "RxJS", img: meter2, stars: "⭐⭐⭐" },
    { key: "SCSS / Sass", img: meter1, stars: "⭐⭐⭐⭐⭐" },
    { key: "Tailwind CSS", img: meter3, stars: "⭐⭐⭐⭐" },
    { key: "Responsive Design", img: meter3, stars: "⭐⭐⭐⭐" },
    { key: "REST APIs", img: meter2, stars: "⭐⭐⭐" },
    { key: "Git & GitHub", img: meter2, stars: "⭐⭐⭐" },
    { key: "Figma (UI/UX Design)", img: meter1, stars: "⭐⭐⭐⭐⭐" },
    { key: "Bootstrap", img: meter3, stars: "⭐⭐⭐⭐" },
  ];

  const skillItems = skillData.map((skill) => ({
    name: t(`skills.items.${skill.key}`, skill.key),
    img: skill.img,
    stars: skill.stars,
  }));

  return (
    <section className="skill" id="skills">
      <div className="container-fluid">
        <div className="skill-bx">
          <div className="skill-header">
            <h2>{t("skills.title", "Skills")}</h2>
            <p>
              {t(
                "skills.description",
                "Estas son las tecnologías y herramientas con las que trabajo para crear experiencias digitales excepcionales."
              )}
            </p>
          </div>

          <div className="skill-slider">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {skillItems.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon-wrapper">
                    <img src={skill.img} alt={skill.name} />
                    <div className="skill-glow"></div>
                  </div>
                  <h5>{skill.name}</h5>
                  <div className="stars">{skill.stars}</div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background decoration"
      />
    </section>
  );
};
