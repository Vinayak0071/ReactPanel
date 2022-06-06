import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Featured = () => {
  let props = {
    percent: 60, // is require
    fontColor: "#365b74",
    fontSize: "1.6rem",
    fontWeight: 400,
    size: 100,
    stroke: 5,
    strokeBottom: 5,
    speed: 60,
    cut: 0,
    rotation: -90,
    opacity: 10,
    fill: "white",
    unit: "%",
    textPosition: "0.35em",
    animationOff: false,
    strokeDasharray: "5,1",
    inverse: false,
    round: false,
    number: true,
    linearGradient: ["blue", "blue"],
  };
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={1} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
