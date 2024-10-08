import CustomHeader from "../components/layout/CustomHeader";
import { Footer } from "../components/layout/Footer";
//import { Header } from "../components/Header";
import Sidebar from "../components/layout/Sidebar";
import "./Rag.css";

export const Home = () => {
  return (
    <div>
      <CustomHeader />
      <div className="Home">
        <Sidebar /> {/* サイドバーを作成するコンポーネント */}
        <div className="Content">
          <h1>RAG APP</h1>
          <p>これはRAGアプリのサンプルUIです</p>
          <p>認証後のCookieの保持期間は５分ほどです</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
