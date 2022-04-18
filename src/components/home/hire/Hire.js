import React from "react";
import "./Hire.css";
import { Link } from "react-router-dom";

const Hire = () => {
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
        <div className="company-input">
          <label className="company-label">Tell us youe company name</label>
          <br />
          <input type="text" placeholder="Your company Name" />
        </div>

        <div className="role-input">
          <label className="role-label">What role you are hiring for</label>
          <br />
          <input type="text" placeholder="Choose the role" />
        </div>
      </div>

      <div className="container third-container">
        <div className="jd-input">
          <label className="jd-label">
            Upload a JD file
            <p style={{ fontSize: "12px" }}>
              Use your file browser to just drag and drop it....
            </p>
          </label>

          <br />
          <input type="file" placeholder=".pdf .jpg .png" />
        </div>
        <div className="link-input">
          <label className="role-label">
            <h6>Link a URL</h6>
            <p style={{ fontSize: "12px" }}>
              copy & paste a URL to from any job platform
            </p>
            <img
              src="https://img.favpng.com/19/1/23/logo-employment-website-job-hunting-brand-png-favpng-SLN9F4rKFZ9c8RT8HCVCmfDBs.jpg"
              width="200px"
              height="100px"
              alt="platforms"
            />
          </label>
          <br />
          <input type="text" placeholder="Choose the role" />
        </div>
      </div>
      <div className="container fourth-container">
        <h6>Create a new JD with Expertia</h6>
        <p style={{ fontSize: "12px" }}>
          Create JD in few seconds using our smart editor
        </p>
        <textarea placeholder="Start tying your requirement"></textarea>
      </div>
      <div class="btn-container">
        <Link to="/candidate" className="link">
          <button className="btn">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Hire;
