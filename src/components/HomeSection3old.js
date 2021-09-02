import React from "react";
import "../assets/styles/HomeSection3.css";

export default function HomeSection3old() {
  return (
    <div className="section3-container">
      <div className="section3-title">
        <h2>
          Looking to coach ? <span>Start now!</span>
        </h2>
        <div className="subtitles">
          <div className="subtitle-wrap">
            <img src="/images/design/Path 258.svg" alt="" />
            <p>FREE 30-DAY TRAIL</p>
          </div>
          <div className="subtitle-wrap">
            <img src="/images/design/Path 258.svg" alt="" />
            <p>FLEXIBLE PLANS VIEW PRICING</p>
          </div>

          <div className="subtitle-wrap">
            <img src="/images/design/Path 258.svg" alt="" />
            <p>NO CREDIT CARD REQUIRED</p>
          </div>
        </div>
        <div className="title-signup">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <button>SIGN UP NOW</button>
        </div>
      </div>
      <div className="section3-divider">
        <div className="section3-hero">
          <img src="\images\section3-bg.png" alt="" />
          <button>Learn More</button>
        </div>
        <div className="section3-content">
          <div>
            <h2>A much needed platform for coaches, built by coaches</h2>
          </div>
          <div className="section3-subcontent">
            <img src="\images\design\bell.svg" alt="" />
            <div>
              <h3>It’s all happening in the channel</h3>
              <p>
                Follow everything related to individual topics, projects or
                teams in their dedicated channels.
              </p>
            </div>
          </div>
          <div className="section3-subcontent">
            <img src="\images\design\web.svg" alt="" />

            <div>
              <h3>History you can see and search</h3>
              <p>
                Projects end, teams change and Slack saves everything. Rather
                than trying to remember, easily find what you’re looking for.
              </p>
            </div>
          </div>
          <div className="section3-subcontent">
            <img src="\images\design\message.svg" alt="" />

            <div>
              <h3>Work more closely with other companies</h3>
              <p>
                Follow everything related to individual topics, projects or
                teams in their dedicated channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
