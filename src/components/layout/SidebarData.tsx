import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
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
    link: "/Home",
  },
  {
    title: "RAGデータ登録",
    icon: <SearchIcon />,
    link: "/RagDataRegister",
  },
  {
    title: "RAG検索",
    icon: <QuestionAnswerIcon />,
    link: "/RagChat",
  },
];
