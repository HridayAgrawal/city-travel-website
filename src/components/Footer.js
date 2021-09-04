import React from "react";
import { Button } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <main className="container-4">
        <div className="about-us">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            pariatur sint similique maxime modi debitis quas cum distinctio
            blanditiis, corporis numquam consequuntur ipsum, voluptate fugit
            odit quisquam. Repellat, pariatur officiis?
          </p>
        </div>

        <div className="news-letter">
          <h2>Newsletter</h2>
          <p>Get our latest updates</p>
          <div className="form-element">
            <input type="text" placeholder="Email" />
            <br />
            <Button
              variant="secondary"
              style={{
                padding: "6.3px",
                marginLeft: "3.6rem",
                marginTop: "0.5rem",
              }}
            >
              Submit
            </Button>
          </div>
        </div>

        <div className="follow-us">
          <h2>Follow us</h2>
          <p>Connect with us</p>
          <div className="icons">
            <i class="fab fa-instagram fa-lg"></i>
            <i class="fab fa-twitter fa-lg"></i>
            <i class="fab fa-github fa-lg"></i>
            <i class="fas fa-envelope-square fa-lg"></i>
          </div>
        </div>
      </main>
      <div className="copyright">
        <p>Copyright ©2021 Hriday Agrawal</p>
      </div>
    </footer>
  );
}

export default Footer;
