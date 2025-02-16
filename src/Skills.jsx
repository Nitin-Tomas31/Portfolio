import React from 'react';

const Skills = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Skills &amp; Tech Stacks</title>

      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* Font Awesome Icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            body {
              background-color: #f8f9fa;
            }

            .section-title {
              font-size: 3rem;
              font-weight: bold;
              text-align: center;
              margin-top: 50px;
              text-transform: uppercase;
              color: #343a40;
            }

            .skills-container {
              display: flex;
              justify-content: space-around;
              align-items: center;
              flex-wrap: nowrap; /* Prevent wrapping */
              margin-top: 30px;
            }

            .skill-card {
              background: white;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              border-radius: 10px;
              padding: 30px;
              text-align: center;
              width: 180px; /* Width of the card */
              height: 180px; /* Height to make the card square */
              margin: 15px;
              transition: transform 0.3s;
            }

            .skill-card:hover {
              transform: scale(1.1);
            }

            .skill-icon {
              font-size: 4rem;
              margin-bottom: 15px;
              color: rgb(0, 0, 0);
            }

            .skill-name {
              font-size: 1.5rem;
              font-weight: bold;
              color: #343a40;
            }
          `,
        }}
      />

      {/* Header */}
      <div className="container text-center">
        <h1 className="section-title">Skills &amp; Tech Stacks</h1>
      </div>

      {/* Skills Grid */}
      <div className="container skills-container">
        <div className="skill-card">
          <i className="fab fa-cuttlefish skill-icon" />
          <p className="skill-name">C</p>
        </div>
        <div className="skill-card">
          <i className="fab fa-python skill-icon" />
          <p className="skill-name">Python</p>
        </div>
        <div className="skill-card">
          <i className="fab fa-html5 skill-icon" />
          <p className="skill-name">HTML/CSS</p>
        </div>
        <div className="skill-card">
          <i className="fab fa-js skill-icon" />
          <p className="skill-name">JavaScript</p>
        </div>
        <div className="skill-card">
          <i className="fab fa-java skill-icon" />
          <p className="skill-name">Java</p>
        </div>
        <div className="skill-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png"
            alt=""
            className="skill-icon"
            style={{ width: '60px', height: '60px', objectFit: 'contain' }}  // Adjust the size of the image
          />
          <p className="skill-name">Flutter</p>
        </div>
      </div>

      {/* Bootstrap JS (Optional) */}
    </>
  );
};

export default Skills;
