import "./RagChat.css";

import AnswerApi from "../components/ragchat/AnswerApi";
import Sidebar from "../components/layout/Sidebar";
import { Footer } from "../components/layout/Footer";
import CustomHeader from "../components/layout/CustomHeader";

const RagChat = () => {
  return (
    <div className="PageContainer">
      {/* <CustomHeader /> */}

      <div className="HeaderArea">
        <CustomHeader />
      </div>
      <div className="RagChat">
        <Sidebar />
        <div className="Content">
          <AnswerApi />
        </div>
      </div>
    </div>
  );
};

export default RagChat;
