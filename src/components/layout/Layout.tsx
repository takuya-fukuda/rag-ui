import React from "react";
import CustomHeader from "./CustomHeader";
import Sidebar from "./Sidebar";
import "./Layout.css"; // Assuming you have a CSS file for layout styles

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="PageContainer">
      <div className="HeaderArea">
        <CustomHeader />
      </div>
      <div className="MainContent">
        <Sidebar />
        <div className="Content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
