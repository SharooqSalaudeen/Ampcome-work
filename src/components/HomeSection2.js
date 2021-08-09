import React from "react";

import "../styles/HomeSection2.css";

export default function HomeSection2() {
  return (
    <div className="section2-container">
      <div className="section2-title">
        <p>OUR STELLAR COACHES AWAIT YOU</p>
        <h2>Find the right coach who helps you transform</h2>
      </div>
      <TestmonialItems
        details={[
          {
            img: "testmonial-1.jpg",
            title: "Douglas Anderson",
            position: "Communication Expert & Couch",
          },
          {
            img: "testmonial-2.jpg",
            title: "Joann Peters",
            position: "Award Winning Sports Coach",
          },
          {
            img: "testmonial-3.jpg",
            title: "Amanda Adams",
            position: "Certified Psycologist",
          },
          {
            img: "testmonial-4.jpg",
            title: "Evertt Caa",
            position: "Business Manager",
          },
        ]}
      />
      <div className="side-quote">
        <span>AND 2,300+ OTHERS</span>
      </div>
      <div className="section2-design">
        <img src="images/design/Group 1265.svg" alt="" />
      </div>
    </div>
  );
}

function TestmonialItems({ details }) {
  return (
    <div className="testmonial-section">
      {details.map((item, idx) => {
        const { img, title, position } = item;
        return (
          <div key={idx} className="testmonial-item">
            <div className="testmonial-image">
              <img src={`/images/testmony/${img}`} alt={title} />
            </div>
            <div className="testmonial-name">
              <p>{title}</p>
            </div>
            <div className="testmonial-job">
              <p>{position}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
