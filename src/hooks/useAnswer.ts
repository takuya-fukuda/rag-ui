import { useState } from "react";

type Res = {
  message: string | number | null;
  data: {
    answer: string | number | null;
    context: string | number | null;
  };
};

export const useAnswer = () => {
  const [inputText, setText] = useState<string | number>(""); //入力ボックスのState関数
  const [selectedCategory, setSelectedCategory] = useState<string>(""); //選択されたカテゴリーのState
  const [responseData, setResponseData] = useState<Res | null>(null); //APIのレスポンスのState
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState(false);

  //テキスト入力時
  const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(event.target.value); //入力された項目を受け取る処理。この処理はある意味固定

  //プルダウン選択時
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  //回答生成用(カスタムフックなし)
  const apiUrl: string = "http://localhost:8000/ragapp/RAG/";

  const sendData = async (): Promise<void> => {
    setLoading2(true);
    setError2(false);
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
      setError2(true);
    } finally {
      setLoading2(false);
    }
  };
  return {
    sendData,
    inputText,
    setText, // setText をエクスポート
    selectedCategory,
    setSelectedCategory, // setSelectedCategory をエクスポート
    responseData,
    loading2,
    error2,
    onChangeText, // onChangeText をエクスポート
    handleSelectChange, // handleSelectChange をエクスポート
  };
};
