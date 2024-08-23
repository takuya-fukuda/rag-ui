import React from "react";
import "./Rag.css";

import AnswerApi from "../components/AnswerApi";
import Sidebar from "../components/Sidebar";
import { Footer } from "../components/Footer";
import CustomHeader from "../components/CustomHeader";

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
