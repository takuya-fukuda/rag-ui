import React from "react";
import "./Rag.css";
import Sidebar from "../components/Sidebar";
import DataRegisterApi from "../components/DataRegisterApi";
import { Footer } from "../components/Footer";
import CustomHeader from "../components/CustomHeader";

//Reactのポイント
//状態管理はuseStateで行う

const RagDataRegister = () => {
  return (
    <div>
      <CustomHeader />
      <div className="RagDataRegister">
        <Sidebar /> {/* サイドバーを作成するコンポーネント */}
        <div className="Content">
          <DataRegisterApi />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RagDataRegister;
