import React from "react";
import "./Rag.css";

import AnswerApi from "../components/api/AnswerApi";
import Sidebar from "../components/layout/Sidebar";
import { Footer } from "../components/layout/Footer";
import CustomHeader from "../components/layout/CustomHeader";

const RagChat = () => {
  return (
    <div>
      <CustomHeader />
      <div className="RagChat">
        <Sidebar />
        <div className="Content">
          <AnswerApi />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RagChat;
