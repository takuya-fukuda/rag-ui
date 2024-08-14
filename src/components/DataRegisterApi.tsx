import React, { useState } from "react";
import { Link } from "react-router-dom";

const DataRegisterApi = () => {
  const [inputText, setText] = useState(""); //入力ボックスのState関数
  const [responseData, setResponseData] = useState(null); //APIのレスポンスのState
  const [error, setError] = useState<string | null>(null); //APIエラーの時のState

  const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(event.target.value); //入力された項目を受け取る処理。この処理はある意味固定

  const apiUrl = "http://localhost:8000/ragapp/upload/";

  const sendData = async () => {
    try {
      const newText = inputText; //入力された項目の受け取りと変数格納。
      const response = await fetch(apiUrl, {
        method: "POST", // POSTメソッドを使用
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              headline: "sample", //見出し
              manual: newText, //HTMLマニュアルファイルではなく直書きされたもの
            },
          ],
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
      setError((error as Error).message);
      setResponseData(null);
    }
  };

  return (
    <div>
      <h1>データ登録画面(HTML想定)</h1>
      <textarea
        placeholder="テキストを入力"
        value={inputText}
        onChange={onChangeText}
      ></textarea>
      <br />
      <button onClick={sendData}>データ登録</button>
      <br />
      {error && <pre>Error: {error}</pre>}
      {responseData && (
        <div>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
      <br />
      <Link to={`/`}>ホームへ戻る</Link>{" "}
      {/* 追加　Go To page1をクリックするとhttp://localhost:3000/に遷移する */}
    </div>
  );
};

export default DataRegisterApi;
