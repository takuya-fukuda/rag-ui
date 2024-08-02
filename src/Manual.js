import React from "react";
import "./Rag.css";
import Sidebar from "./components/Sidebar";
import ApiFetch from "./components/ApiFetch";

const Manual = () => {
  return (
    <div className="Manual">
      <Sidebar /> {/* サイドバーを作成するコンポーネント */}
      <div className="Content">
        <ApiFetch />
      </div>
    </div>
  );
};

export default Manual;
