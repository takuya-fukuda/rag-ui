import React from "react";
import "./Rag.css";
import Sidebar from "./components/Sidebar";
import ApiFetch4 from "./components/ApiFetch4";

const RagChat = () => {
  return (
    <div className="RagChat">
      <Sidebar />
      <div className="Content">
        <ApiFetch4 />
      </div>
    </div>
  );
};

export default RagChat;
