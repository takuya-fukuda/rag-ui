import React from "react";
import "./Rag.css";
import Sidebar from "../components/Sidebar";
import DataRegisterApi from "../components/DataRegisterApi";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

//Reactのポイント
//状態管理はuseStateで行う

const RagDataRegister = () => {
  return (
    <div>
      <Header />
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
