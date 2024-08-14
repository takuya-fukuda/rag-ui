import React from "react";
import "./Rag.css";

import AnswerApi from "../components/AnswerApi";
import Sidebar from "../components/Sidebar";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const RagChat = () => {
  return (
    <div>
      <Header />
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
