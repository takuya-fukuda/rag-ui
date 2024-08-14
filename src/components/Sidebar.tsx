import React from "react";
import "../pages/Rag.css";
import { SidebarData } from "./SidebarData";

//https://github.com/Shin-sibainu/sidebar-using-react/tree/main
function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname === value.link ? "active" : ""}
              className="row"
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              {" "}
              {/* keyは配列の展示番号 */}
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
