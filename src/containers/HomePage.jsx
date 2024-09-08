import React from "react";

import Footer from "../components/Footer";

import "../assets/css/HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="home-page">
        <div className="profile">
          <img
            src="images/snow-clipart-penguin-in-winter-snow-modified.png"
            alt="penguin in snow"
            className="profile-image"
          />
          <div className="profile-info">
            <h1>Andrew D. Tran</h1>
            <p>
              <h2>
                <em>Software Engineer (Full-Stack)</em>
              </h2>
            </p>
            <p>
              Hello! I'm a software engineer with 4 years of full stack
              development experience specializing in Java, React.js, and PL/SQL.
              I'm dedicated to delivering efficient, user-centered solutions
              that improve operational effectiveness and enhance overall user
              experience. With that being said, I have proven ability to
              collaborate across teams and integrate third-party systems to
              streamline complex processes.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
