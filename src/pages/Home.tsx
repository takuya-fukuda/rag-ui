import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./Rag.css";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="Home">
        <Sidebar /> {/* サイドバーを作成するコンポーネント */}
        <div className="Content">
          <h1>RAG APP</h1>
          <p>これはRAGアプリのサンプルUIです</p>
          <p>使い方</p>
          <p>HTMLはテキストにしてからアップロードしてください</p>
          <p>RAGの回答</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
