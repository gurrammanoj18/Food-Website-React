import React from "react";
import './followUs.css';

const FollowUs = () => (
  <div className="follow-us-section py-5 " id="sectionFU">
    <div className="container text-center">
      <h1 className="follow-heading">Follow Us</h1>
      <div className="d-flex justify-content-center gap-4">
        <i className="fab fa-twitter follow-icon mx-3"> Twitter</i>
        <i className="fab fa-instagram follow-icon mx-3"> Instagram</i>
        <i className="fab fa-facebook follow-icon mx-3"> Facebook</i>
      </div>
    </div>
  </div>
);

export default FollowUs;
