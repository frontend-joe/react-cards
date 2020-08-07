import React, { useCallback, useState } from "react";
import Dropzone from "react-dropzone";
import "./FileUploadCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const FileUploadCard = () => {
  const [isDropped, setIsDropped] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const onDrop = useCallback(acceptedFiles => {
    setIsDropped(true);
    setTimeout(() => {
      setIsUploaded(true);
      setIsDropped(false);
      setTimeout(() => {
        setIsUploaded(false);
      }, 2000);
    }, 2000);
  });

  return (
    <div
      className={`card ${isDropped ? "dropped" : isUploaded ? "uploaded" : ""}`}
    >
      <div className="loading-area">
        <FontAwesomeIcon
          className="icon"
          icon={isUploaded ? faCheckCircle : faFileUpload}
        />
        <div className="progress-bar" />
      </div>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps }) => (
          <div className="dropzone" {...getRootProps()}>
            Drop files here
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default FileUploadCard;
