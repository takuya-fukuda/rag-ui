import React from "react";
import "./RagChat.css";
import Sidebar from "../components/layout/Sidebar";
import DataRegisterApi from "../components/dataregister/DataRegisterApi";
import { Footer } from "../components/layout/Footer";
import CustomHeader from "../components/layout/CustomHeader";

//Reactのポイント
//状態管理はuseStateで行う

const RagDataRegister = () => {
  return (
    <div className="PageContainer">
      <div className="HeaderArea">
        <CustomHeader />
      </div>
      <div className="RagDataRegister">
        <Sidebar /> {/* サイドバーを作成するコンポーネント */}
        <div className="Content">
          <DataRegisterApi />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default RagDataRegister;
