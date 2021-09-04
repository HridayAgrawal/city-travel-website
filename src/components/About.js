import React from "react";
import about from "../about.jpg";
import "./About.css";

function About() {
  return (
    <main>
      <div className="heading-1">
        <h1>About The City</h1>
      </div>
      <section className="container-2">
        <div className="pic">
          <img src={about} alt="City" />
        </div>

        <div className="content">
          <h1>Gotham</h1>
          <hr />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            aspernatur vero esse, dolores maxime est! Voluptate, aperiam
            eligendi sequi necessitatibus harum provident eius exercitationem
            blanditiis tenetur nulla assumenda nobis. Sint doloremque enim,
            laboriosam itaque rerum laudantium? Aperiam sint quidem est aliquid,
            animi enim placeat necessitatibus illo non quam soluta porro facere
            odio, cumque et. Recusandae eligendi libero adipisci ad enim,
            expedita sapiente nobis rem odio labore voluptatem architecto nihil
            atque aut delectus quo, ipsam velit doloremque similique officia,
            eveniet illo natus. Neque voluptatibus quaerat debitis vero voluptas
            enim, nemo praesentium ab fuga, saepe corrupti quos officia soluta
            nisi magni consectetur.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
