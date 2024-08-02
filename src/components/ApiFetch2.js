import React, { useState } from "react";
import { Link } from "react-router-dom";

const ApiFetch2 = () => {
  const [inputText, setText] = useState(""); //入力ボックスのState関数
  const [responseData, setResponseData] = useState(null); //APIのレスポンスのState
  const [error, setError] = useState(null); //APIエラーの時のState

  const onChangeText = (event) => setText(event.target.value); //入力された項目を受け取る処理。この処理はある意味固定

  const apiUrl2 = "http://localhost:8000/manual/html/";

  const sendData = async () => {
    try {
      const newText = inputText; //入力された項目の受け取りと変数格納。
      const response = await fetch(apiUrl2, {
        method: "POST", // POSTメソッドを使用
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          revice_type: "html",
          hedline: "見出し",
          text: newText, //inputTextでもよかったかも
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      // レスポンスをJSON形式に変換
      const data = await response.json();
      setResponseData(data); //JSONの受け取り
      setError(null); //エラーなしで更新
      setText(""); //実行後に入力ボックスを空にする
    } catch (error) {
      setError(error.message);
      setResponseData(null);
    }
  };

  return (
    <div>
      <h1>RagApp2 マニュアルHTML化</h1>
      <textarea
        placeholder="テキストを入力"
        value={inputText}
        onChange={onChangeText}
      ></textarea>
      <br />
      <button onClick={sendData}>マニュアル作成</button>
      <br />
      {error && <pre>Error: {error}</pre>}
      {responseData && (
        <div>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
      <br />
      <Link to={`/`}>ホームへ戻る</Link>
    </div>
  );
};

export default ApiFetch2;
