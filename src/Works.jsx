import React from 'react';
import './Works.css'; // Import the CSS file

const Works = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Projects</title>

      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      
      {/* Container for the entire project section */}
      <div className="container-fluid">
        {/* Card with heading and carousel in left and right sections */}
        <div className="card-container">
          <div className="card card-left">
            <div className="card-body">
              {/* Heading */}
              <h1 className="heading-animation">Welcome to My Projects</h1>
              <p className="description-animation">
                Explore my three innovative projects that solve real-world problems through technology:
                <br />
                <strong>GroWise</strong>, a farmer's companion app that helps with crop management;
                <br />
                <strong>Scanopy</strong>, an OCR-based text scanner app for quick and accurate text recognition;
                <br />
                and <strong>Slack</strong>, an intelligent expense tracker app designed to manage your finances easily.
              </p>
            </div>
          </div>

          <div className="card card-right">
            <div className="card-body">
              {/* Carousel */}
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  {/* GroWise Project */}
                  <div className="carousel-item active">
                    <img
                      src="https://images.pexels.com/photos/207247/pexels-photo-207247.jpeg"
                      className="d-block w-100"
                      alt="GroWise"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>GroWise: A Farmer's Companion App</h5>
                      <p>
                        GroWise is an innovative mobile app designed to assist farmers with crop management, weather updates, and market prices.
                        The app offers helpful tips for sustainable farming and connects farmers with experts to improve their agricultural productivity.
                      </p>
                    </div>
                  </div>

                  {/* Scanopy Project */}
                  <div className="carousel-item">
                    <img
                      src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
                      className="d-block w-100"
                      alt="Scanopy"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Scanopy: An OCR-based Text Scanner App</h5>
                      <p>
                        Scanopy is a powerful OCR (Optical Character Recognition) based text scanner app that can convert printed or handwritten
                        text into digital format. It offers fast and accurate scanning with multilingual support and the ability to export text to
                        various formats.
                      </p>
                    </div>
                  </div>

                  {/* Slack Project */}
                  <div className="carousel-item">
                    <img
                      src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
                      className="d-block w-100"
                      alt="Slack"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Slack: An Intelligent Expense Tracker App</h5>
                      <p>
                        Slack is a smart expense tracking app that helps users manage their finances by categorizing spending, setting budgets,
                        and tracking monthly expenses. It offers insightful reports and real-time notifications to help users stay on top of their
                        financial goals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Carousel Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap JS and dependencies */}
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz4fnFO9gybB0AFwR7C9JdWfXCUxGivP73D0mRr46V4xykAK5G8Q0s0KiD"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
        integrity="sha384-cn7l7gDp0eyj3a1l7/8sv1C7/XWvGm3SO7b4PqfUM1CpYY//1V5NfEXxGHwR1AR6"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default Works;
