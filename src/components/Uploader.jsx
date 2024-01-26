import "./uploader.css";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";

const Uploader = () => {
  const [fileName, setFileName] = useState("No Selected File");
  const [icon, setIcon] = useState(
    <MdIcons.MdCloudUpload
      className="uploader__btn uploader__btn-upload"
      onClick={() => document.querySelector(".input-field").click()}
    />
  );
  const [message, setMessage] = useState("Upload My Project");

  return (
    <>
      <form className="uploader__container">
        <div className="uploader__btn-container">
          <input
            type="file"
            className="input-field"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setIcon(<FaIcons.FaCheck className="uploader__btn" />);
                setMessage("Project Upload Successful");
              }
            }}
          />

          {icon}

          <p>{message}</p>
        </div>
      </form>

      <section className="upload__display">
        <AiIcons.AiFillFileImage className="uploaded__display" />
        <span>
          <p>{fileName}</p>
          <MdIcons.MdDelete
            className="delete__upload-btn"
            onClick={() => {
              setFileName(fileName);
              setIcon(icon);
              setMessage(message);
              console.log(fileName);
            }}
          />
        </span>
      </section>
    </>
  );
};

export default Uploader;
