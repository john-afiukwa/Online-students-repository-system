import React from "react";
import SectionHead from "../../UI/SectionHead";
import * as FaIcons from "react-icons/fa";
import "./project.css";
import Uploader from "../../components/Uploader";

const Project = () => {
  return (
    <div className="project">
      <div className="container project__container">
        <div className="section__head-container">
          <SectionHead icon={<FaIcons.FaFileAlt />} title="Project" />
        </div>

          <div className="form-group student__details-container">
            <input
              type="text"
              className="student__detail"
              placeholder="--Your Name appears here--"
              disabled
            />
            <input
              type="text"
              className="student__detail"
              placeholder="--Your Reg No appears here--"
              disabled
            />
            <input
              type="text"
              className="student__detail"
              placeholder="--Your Department appears here--"
              disabled
            />
        </div>
        
        <Uploader />
      </div>
    </div>
  );
};

export default Project;
