import React, { useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import styled from "styled-components";

type Res = {
  message: string | number | null;
  data: {
    answer: string | number | null;
    context: string | number | null;
  };
};

const AnswerApi = () => {
  const [inputText, setText] = useState<string | number>(""); //入力ボックスのState関数
  const [responseData, setResponseData] = useState<Res | null>(null); //APIのレスポンスのState
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); //APIエラーの時のState
  const [selectedCategory, setSelectedCategory] = useState<string>(""); //選択されたカテゴリーのState

  const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(event.target.value); //入力された項目を受け取る処理。この処理はある意味固定

  const apiUrl: string = "http://localhost:8000/ragapp/RAG/";

  const sendData = async (): Promise<void> => {
    setLoading(true);
    setError(false);
    console.log("Selected Category at send:", selectedCategory); // ここで出力される値を確認
    try {
      const newText: string | number = inputText; //入力された項目の受け取りと変数格納。

      const response = await fetch(apiUrl, {
        method: "POST", // POSTメソッドを使用
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // クッキーを含めるために必要
        body: JSON.stringify({
          category: selectedCategory, //プルダウンで選択されたカテゴリーを使用
          //category: "エリア管理",
          question: newText, //HTMLマニュアルファイルではなく直書きされたもの
          ragfusion_flag: false,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      // レスポンスをJSON形式に変換
      const data = await response.json();
      setResponseData(data); //JSONの受け取り
      setText(""); //実行後に入力ボックスを空にする
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>チャット画面</h1>
      <p>
        プルダウンでバグ発生中。一回他の物を選択してから、選択したいやつ選択
      </p>
      <StyledTextarea
        placeholder="テキストを入力"
        value={inputText}
        onChange={onChangeText}
      ></StyledTextarea>
      <br />
      {/* <select id="dropdown">
                    <option value="option1">クルマの予約</option>
                </select><br/> */}
      <Category setSelectedCategory={setSelectedCategory} />
      <ButtonContainer>
        <SButton onClick={sendData}>回答生成</SButton>
      </ButtonContainer>
      <br />
      {error ? (
        <pre style={{ color: "red" }}>データの取得に失敗しました。</pre>
      ) : loading ? (
        <pre>Loading...</pre>
      ) : (
        responseData && (
          <div>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )
      )}
      <br />
      <Link to={`/Home`}>ホームへ戻る</Link>{" "}
      {/* 追加　Go To page1をクリックするとhttp://localhost:3000/に遷移する */}
    </div>
  );
};

export default AnswerApi;

const StyledTextarea = styled.textarea`
  width: 100%; /* 横幅いっぱいに広げる */
  height: 150px; /* 必要に応じて高さを設定 */
  padding: 10px;
  box-sizing: border-box; /* パディングを含めた幅と高さを考慮 */
  font-size: 16px; /* テキストのサイズを設定 */
  resize: none; /* ユーザーがテキストエリアのサイズを変更できないようにする（オプション） */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  background-color: #2a3f56;
`;
