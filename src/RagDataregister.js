import React from "react";
import "./Rag.css";
import Sidebar from "./components/Sidebar";
import ApiFetch3 from "./components/ApiFetch3";

//Reactのポイント
//状態管理はuseStateで行う

const RagDataregister = () => {
  return (
    <div className="RagDataregister">
      <Sidebar /> {/* サイドバーを作成するコンポーネント */}
      <div className="Content">
        <ApiFetch3 />
      </div>
    </div>
  );
};

export default RagDataregister;
