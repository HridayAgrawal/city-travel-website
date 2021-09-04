import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import about from "../about.jpg";
import postMaloneConcert from "../postMaloneConcert.jpg";
import musicFestival1 from "../musicFestival1.jpg";
import musicFestival2 from "../musicFestival2.jpg";
import fashionShow from "../fashionShow.jpg";
import "./Cards.css";

function Cards() {
  return (
    <main>
      <div className="card-heading">
        <h1>Upcoming Events</h1>
      </div>
      <section className="event-cards">
        <div className="card1">
          <Card style={{ width: "21rem" }}>
            <Card.Img
              variant="top"
              style={{ height: "14rem" }}
              src={postMaloneConcert}
            />
            <Card.Body>
              <Card.Title>Post Malone's Concert</Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit molestiae delectus, ab quos exercitationem sunt
                mollitia id laborum tempora odio cum, esse laboriosam veniam
                consectetur iure sint, cumque nemo dolorum.
              </Card.Text>
              <Button variant="primary" style={{ marginLeft: "6.1rem" }}>
                Register
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="card2">
          <Card style={{ width: "21rem" }}>
            <Card.Img
              variant="top"
              style={{ height: "14rem" }}
              src={musicFestival2}
            />
            <Card.Body>
              <Card.Title>Music Festival</Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit molestiae delectus, ab quos exercitationem sunt
                mollitia id laborum tempora odio cum, esse laboriosam veniam
                consectetur iure sint, cumque nemo dolorum.
              </Card.Text>
              <Button variant="primary" style={{ marginLeft: "6.1rem" }}>
                Register
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="card3">
          <Card style={{ width: "21rem" }}>
            <Card.Img
              variant="top"
              style={{ height: "14rem" }}
              src={fashionShow}
            />
            <Card.Body>
              <Card.Title>Fashion Week</Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit molestiae delectus, ab quos exercitationem sunt
                mollitia id laborum tempora odio cum, esse laboriosam veniam
                consectetur iure sint, cumque nemo dolorum.
              </Card.Text>
              <Button variant="primary" style={{ marginLeft: "6.1rem" }}>
                Register
              </Button>
            </Card.Body>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default Cards;
