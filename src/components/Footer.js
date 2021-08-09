import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-subscribe">
          <div className="footer-sub-left">
            <h2>Never miss an update!</h2>
            <div>
              <p>Subscribe and stay in loop for our latest features and news</p>
              <p>We promise we won't spam your mailbox</p>
            </div>
          </div>
          <div className="footer-sub-right">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="text" name="emial" id="email" placeholder="Email" />
            <button type="submit">SUBSCRIBE</button>
          </div>
        </div>
        {/* <div className="footer-bottom"> */}
        <div className="footer-links">
          <div className="company-social">
            <img src="" alt="" />
            <p>
              MeetMyCoach allows Coaches and Consultants to explore new
              opportunities, connect with employers and Businesses
            </p>
            <div className="social-icons">
              <img src="\images\social-icons\fb.svg" alt="" />
              <img src="\images\social-icons\ig.svg" alt="" />
              <img src="\images\social-icons\linkedin.svg" alt="" />
              <img src="\images\social-icons\twitter.svg" alt="" />
            </div>
          </div>
          <div className="pages">
            <ul>
              <li>Support Center</li>
              <li>Why MeetMyCoach?</li>
              <li>Plans &amp; Pricing</li>
              <li>For Business</li>
              <li>Resources</li>
              <li>Use Cases</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="policies">
            <ul>
              <li>Term of Use</li>
              <li>Privacy Policy</li>
              <li>Coach Usage Policy</li>
              <li>Employer job Policy</li>
              <li>Language Pocliy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-copyright">
            <p>© Copyright 2020 MeetMyCoach. All rights reserved</p>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
}
