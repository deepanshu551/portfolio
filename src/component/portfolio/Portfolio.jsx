import React from "react";
import "./portfolio.css";
import omniImg from "../../assets/omni.png";
import cryptoImg from "../../assets/crypto.png";

import snakeImg from "../../assets/snakemania.png";
import memoriesImg from "../../assets/memories.png";

const Portfolio = () => {
  const data = [
    {
      id: "1",
      title: "OMNI-FOOD",
      github: "https://github.com/deepanshu551/OminiFood",
      demo: "https://mywebmeal.netlify.app",
      img: omniImg,
    },
    { id: "2", title: "Memories", github: "https://github.com/deepanshu551/memories", demo: "https://gregarious-pasca-46ad41.netlify.app/", img: memoriesImg },
    {
      id: "3",
      title: "CRYPTO WATCH",
      github: "https://github.com/deepanshu551/cryptoFrontend",
      demo: "https://eloquent-conkies-17a035.netlify.app/",
      img: cryptoImg,
    },
    {
      id: "4",
      title: "SNAKE MANIA",
      github: "https://github.com/deepanshu551/SnakeGame",
      demo: "https://snakemaniago.netlify.app/",
      img: snakeImg,
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((d) => {
          return (
            <article key={d.id} className="portfolio__items">
              <div className="portfolio__item-image">
                <img src={d.img} alt="Image1" />
              </div>
              <h3>{d.title}</h3>
              <div className="portfolio__item-cta">
                <a href="https://github.com" className="btn" target="__blank">
                  Github
                </a>
                <a href={d.demo} className="btn btn-primary" target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
