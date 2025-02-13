import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="vh-100 d-flex align-items-center justify-content-center text-center text-white" style={{ backgroundImage: "url('src/assets/cover.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="container">
        <h1 className="display-3 fw-bold text-glow text-uppercase">
          Nitin Sunil Thomas
        </h1>
        <p className="lead mt-3 text-shadow">
          Passionate developer specializing in modern web technologies. I love
          creating elegant and efficient digital experiences. Welcome to my
          portfolio!
        </p>
      </div>
    </header>
  );
};

export default Header;
