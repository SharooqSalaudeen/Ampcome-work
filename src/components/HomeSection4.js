import React from "react";
import "../styles/HomeSection4.css";

const chipsdata = [
  "Account & Bookkeeping",
  "Cryptocurrency & Blockchain",
  "Team Management",
  "Mental Fitness",
  "Team Management",
  "Mental Fitness",
  "Pre-School Teaching",
  "Account & Bookkeeping",
  "Cryptocurrency & Blockchain",
  "Team Management",
  "Mental Fitness",
  "Team Management",
  "Mental Fitness",
  "Pre-School Teaching",
  "Account & Bookkeeping",
  "Cryptocurrency & Blockchain",
  "Team Management",
];

export default function HomeSection4() {
  return (
    <div className="section4-container">
      <div className="section4-left">
        <div className="section4-title">
          <h2>
            Explore <span>trending skills</span>
          </h2>
          <p>
            Stay up to date on what's happening in technology, leadership, skill
            development and more.
          </p>
        </div>
        <div className="section4-chips">
          <Chip data={chipsdata} />
        </div>
        <a className="section4-bottom-link" href="/#">
          and 274 other skills
        </a>
      </div>
      <div className="section4-right">
        <img src="/images/section4-bg.png" alt="" />
      </div>
    </div>
  );
}

function Chip({ data }) {
  return (
    <>
      {data.map((item, idx) => {
        return (
          <a key={idx} href="/#" className="section4-chipitem">
            {item} <span>+</span>
          </a>
        );
      })}
    </>
  );
}
