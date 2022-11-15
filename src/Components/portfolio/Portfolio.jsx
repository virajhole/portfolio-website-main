import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";

function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Dashboard",
      github: "https://github.com/virajhole",
      demo: "https://github.com/virajhole",
    },
    {
      id: 2,
      image: IMG1,
      title: "Dashboard",
      github: "https://github.com/virajhole",
      demo: "https://github.com/virajhole",
    },
    {
      id: 3,
      image: IMG1,
      title: "Dashboard",
      github: "https://github.com/virajhole",
      demo: "https://github.com/virajhole",
    },
    {
      id: 4,
      image: IMG1,
      title: "Dashboard",
      github: "https://github.com/virajhole",
      demo: "https://github.com/virajhole",
    },
    {
      id: 5,
      image: IMG1,
      title: "Dashboard",
      github: "https://github.com/virajhole",
      demo: "https://github.com/virajhole",
    },
    {
      id: 6,
      image: IMG1,
      title: "Dashboard",
      github: "https://github.com/virajhole",
      demo: "https://github.com/virajhole",
    },
  ];

  return (
    <section id="Portfolio">
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((ele, i) => {
          return (
            <article key={i} className="portfolio__item">
              <div className="portfolio__item_img">
                <img src={ele.image} alt={ele.title} />
              </div>
              <h3>{ele.title}</h3>
              <div className="portfolio__item-cta">
                <a href={ele.github} className="btn" target="_blank">
                  Github
                </a>
                <a href={ele.demo} className="btn btn-primary" target="_blank">
                  {" "}
                  Live Demo{" "}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
