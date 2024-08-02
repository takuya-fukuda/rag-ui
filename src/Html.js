import React from "react";
import "./Rag.css";
import Sidebar from "./components/Sidebar";
import ApiFetch2 from "./components/ApiFetch2";

const Html = () => {
  return (
    <div className="Html">
      <Sidebar />
      <div className="Content">
        <ApiFetch2 />
      </div>
    </div>
  );
};

export default Html;
