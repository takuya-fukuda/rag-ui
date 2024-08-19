import React from "react";
import HomeIcon from "@mui/icons-material/Home";
//import AttachEmailIcon from "@mui/icons-material/AttachEmail";
//import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCardIcon from "@mui/icons-material/AddCard";
//import BackupIcon from "@mui/icons-material/Backup";
//import SettingsIcon from "@mui/icons-material/Settings";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { SvgIconProps } from "@mui/material/SvgIcon";

//アイコンのインポートの仕方は下記から検索してコマンドがわかる
//npm install @mui/icons-material
//https://mui.com/material-ui/material-icons/

//型定義
type Sidebar = Array<{
  title: string;
  icon: React.ReactElement<SvgIconProps>;
  link: string;
}>;

export const SidebarData: Sidebar = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "RAGデータ登録",
    icon: <PersonAddIcon />,
    link: "/RagDataRegister",
  },
  {
    title: "RAG検索",
    icon: <AddCardIcon />,
    link: "/RagChat",
  },
];
