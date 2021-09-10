import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Shivam Tandon</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://lh3.googleusercontent.com/ogw/ADea4I63pG9G8j4iBSkBVPBMjgcw0jqxEQMkDkPdX-i7wQ=s83-c-mo" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
