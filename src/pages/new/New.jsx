import React from "react";
import "./new.scss";
import { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { Chart } from "../../components/chart/Chart";
import { List } from "../../components/list/List";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

export const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  console.log(file);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              className="img"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="Empty"
            />
            <button
              className="leftbutton"
              onClick={() => {
                setFile("");
              }}
            >
              Clear
            </button>
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <div className="uploadImg">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
              </div>

              {inputs.map((i) => (
                <div className="formInput" key={i.id}>
                  <label htmlFor="">{i.label}</label>
                  <input type={i.type} placeholder={i.placeholder} />
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
