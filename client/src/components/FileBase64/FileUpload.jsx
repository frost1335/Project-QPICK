import React from "react";

import FileBase64 from "react-file-base64";

import "./FileUpload.scss";

const FileUpload = (props) => {
  return (
    <div className="FileBase64">
      <label htmlFor={props.forId}>{props.label}</label>
      <FileBase64
        multiple={props.multiple}
        onDone={({ base64 }) => props.setData({ ...props.data }, base64)}
      />
    </div>
  );
};

export default FileUpload;
