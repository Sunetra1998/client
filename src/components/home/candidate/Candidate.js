import React from "react";
import "./Candidate.css";
import { Link } from "react-router-dom";

const Candidate = () => {
  return (
    <div>
      <div className="container first-container">
        <div className="company-heading">
          <h5>Your Company Name</h5>
        </div>

        <div className="button-container">
          <Link to="/" className="link">
            <button className="btn">Sign Up</button>
          </Link>
        </div>
      </div>
      <div className="container second-container">
        <div className="job-heading">
          <h6>Created Job Description</h6>
          <button className="btn">Edit</button>
        </div>
        <div className="source-candidate">
          <h6>Source candidate from</h6>
        </div>
      </div>
      <div className="container third-container">
        <div className="job-description">
          <h3>UX Designer</h3>
          <p style={{ fontSize: "8px" }}>Design & Research</p>
          <h6>Description</h6>
          <p style={{ fontSize: "8px" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            sit dolores placeat pariatur voluptates labore quidem aliquid
            tempora atque. Ea suscipit laudantium, quis numquam recusandae error
            eum officia a molestias. Nisi necessitatibus officia exercitationem
            non, inventore illo neque facilis fuga numquam. Consequuntur animi
            exercitationem reiciendis hic culpa sit, enim, magnam dolore,
            mollitia sapiente! Enim ab quae vel obcaecati. Dolorem beatae minima
            amet exercitationem vero explicabo temporibus et est, aspernatur
            architecto tempore sed. Aliquam magnam quos totam ullam dolores aut?
            Eum doloribus tenetur aperiam, beatae pariatur ducimus corporis
            dolorem!
          </p>
          <h6>Responsibilities</h6>
          <p style={{ fontSize: "8px" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            sit dolores placeat pariatur voluptates labore quidem aliquid
            tempora atque. Ea suscipit laudantium, quis numquam recusandae error
            eum officia a molestias. Nisi necessitatibus officia exercitationem
            non, inventore illo neque facilis fuga numquam. Consequuntur animi s
            totam ullam dolores aut? Eum doloribus tenetur aperiam, beatae
            pariatur ducimus corporis dolorem!
          </p>
          <ul>
            <li>
              <p style={{ fontSize: "8px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                illo vero aut in consequatur incidunt reprehenderit doloribus!
                Assumenda esse, dolores cum incidunt modi consequuntur adipisci
                ratione quae sunt, commodi ipsa?
              </p>
            </li>
            <li>
              <p style={{ fontSize: "8px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                illo vero aut in consequatur incidunt reprehenderit doloribus!
                Assumenda esse, dolores cum incidunt modi consequuntur adipisci
                ratione quae sunt, commodi ipsa?
              </p>
            </li>
            <li>
              <p style={{ fontSize: "8px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                illo vero aut in consequatur incidunt reprehenderit doloribus!
                Assumenda esse, dolores cum incidunt modi consequuntur adipisci
                ratione quae sunt, commodi ipsa?
              </p>
            </li>
            <li>
              <p style={{ fontSize: "8px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                illo vero aut in consequatur incidunt reprehenderit doloribus!
                Assumenda esse, dolores cum incidunt modi consequuntur adipisci
                ratione quae sunt, commodi ipsa?
              </p>
            </li>
            <li>
              <p style={{ fontSize: "8px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                illo vero aut in consequatur incidunt reprehenderit doloribus!
                Assumenda esse, dolores cum incidunt modi consequuntur adipisci
                ratione quae sunt, commodi ipsa?
              </p>
            </li>
          </ul>
        </div>
        <div className="source-candidates">
          <div className="resume-ip">
            <label>
              <h5>Upload Candidate's Resume</h5>
              <p style={{ fontSize: "8px" }}>
                Upload candidates' resume or a folder/zip to source from
              </p>
            </label>
            <br />
            <input type="file" placeholder=".pdf .jpg .png" />
          </div>
          <div className="link-content">
            <div className="link-label">
              <h6>Link your company database</h6>
              <p style={{ fontSize: "8px" }}>
                Use our Apis to surce data from your internal database
              </p>
            </div>
            <div className="link-btn">
              <button className="btn">Link</button>
            </div>
          </div>
          <div className="source-expertia">
            <div className="source-expertia-label">
              <h6>Source through Expertia</h6>
              <p style={{ fontSize: "8px" }}>
                Expertia will source candidates from it's pool and multiple
                platforms for this role
              </p>
            </div>
            <div className="platform-logo">
              <img
                className="platform-logo-item"
                src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
                alt="linkedin-logo"
                width="60"
              />
              <img
                className="platform-logo-item"
                src="data:image/png;base64,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"
                alt="linkedin-logo"
                width="60"
              />
              <img
                className="platform-logo-item"
                src="https://m.economictimes.com/thumb/msid-68302566,width-1200,height-900,resizemode-4,imgsize-45453/untitled-7.jpg"
                alt="linkedin-logo"
                width="60"
              />
              <img
                className="platform-logo-item"
                src="data:image/png;base64,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"
                alt="linkedin-logo"
                width="60"
              />
            </div>
          </div>
          <div className="source-talent-btn">
            <Link to="/resultSignup" className="link">
              <button className="btn">Source Talent</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
