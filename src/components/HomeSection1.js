import React from "react";

import "../styles/HomeSection1.css";

export default function HomeSection1() {
  return (
    <div className="section1-container">
      <div className="section1-background-image"></div>
      <div className="container-division">
        <div className="left-section">
          <div className="content">
            <p id="alert">
              <span>New</span>New feature available for communication with
              coaches
            </p>

            <MainLinks
              title="Find Coaches"
              description="I am looking for somebody to coach me"
              url="#"
            />
            <MainLinks
              title="Find Coaching Jobs"
              description="I am coach and looking for new opportunities"
              url="#"
            />
            <MainLinks
              title="Post a Job"
              description="I am an employer and looking for coach"
              url="#"
            />
          </div>
        </div>
        <div className="right-section">
          <div className="content">
            <GallaryGrids
              details={[
                { img: "grid-img-1.png", title: "relationship" },
                { img: "grid-img-2.png", title: "cooking" },
                { img: "grid-img-3.png", title: "buisness" },
                { img: "grid-img-4.png", title: "sports" },
              ]}
            />
            <GallaryGrids
              details={[
                { img: "grid-img-5.png", title: "finance" },
                { img: "grid-img-6.png", title: "technology" },
                { img: "grid-img-7.png", title: "fitness" },
                { img: "grid-img-8.png", title: "art" },
              ]}
            />
            <GallaryGrids
              details={[
                { img: "grid-img-9.png", title: "health" },
                { img: "grid-img-10.png", title: "youth" },
                { img: "grid-img-11.png", title: "pet care" },
                { img: "grid-img-12.png", title: "career" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MainLinks({ title, description, url }) {
  return (
    <div className="card">
      <a href={url}>
        <div className="card-container">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <img src="\images\design/Path 290.svg" alt="" />
      </a>
    </div>
  );
}

function GallaryGrids({ details }) {
  return (
    <div className="section1-grid-container">
      {details.map((item, idx) => {
        const { img, title } = item;
        // console.log(img, title);
        return (
          <div key={idx} className="grid-img-wraper">
            <img src={`/images/grid-images/${img}`} alt={title} />
            <span>{title}</span>
          </div>
        );
      })}
    </div>
  );
}
