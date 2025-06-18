import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Res = {
  question: string | null;
  answer: string;
  references: any;
};

const AnswerApi = () => {
  const [inputText, setText] = useState<string>(""); //入力ボックスのState関数
  const [questions, setQuestions] = useState<
    { question: string; answer: string }[]
  >([]); //
  const [responseData, setResponseData] = useState<Res | null>(null); //APIのレスポンスのState
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState(false);

  //テキスト入力時
  const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(event.target.value); //入力された項目を受け取る処理。この処理はある意味固定

  //回答生成用(カスタムフックなし)
  const apiUrl: string = "http://127.0.0.1:8000/api/rag/normalchat/";

  const sendData = async (): Promise<void> => {
    setLoading2(true);
    setError2(false);
    try {
      const newText: string = inputText; //入力された項目の受け取りと変数格納。

      const response = await fetch(apiUrl, {
        method: "POST", // POSTメソッドを使用
        headers: {
          "Content-Type": "application/json",
        },
        // credentials: "include", // クッキーを含めるために必要
        body: JSON.stringify({
          question: newText, //HTMLマニュアルファイルではなく直書きされたもの
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      // レスポンスをJSON形式に変換
      const data = await response.json();
      setResponseData(data.answer); //JSONの受け取り
      setQuestions([
        ...questions,
        { question: inputText, answer: data.answer },
      ]);
      setText(""); //実行後に入力ボックスを空にする
    } catch {
      setError2(true);
    } finally {
      setLoading2(false);
    }
  };

  return (
    <div>
      <AllContainer>
        {/* <h1 style={{ textAlign: "center" }}>チャット画面</h1> */}
        <ContentContainer>
          <div>
            <QuestionArea>
              {questions.map((item, idx) => (
                <div key={idx} style={{ marginBottom: "16px" }}>
                  <QuestionBubble>Q: {item.question}</QuestionBubble>
                  <AnswerBubble>
                    {error2 ? (
                      <pre style={{ color: "red" }}>
                        データの取得に失敗しました。
                      </pre>
                    ) : loading2 ? (
                      <pre>Loading...</pre>
                    ) : (
                      responseData && <div>A: {item.answer}</div>
                    )}
                  </AnswerBubble>
                </div>
              ))}
            </QuestionArea>
          </div>
        </ContentContainer>
        <InputContainer>
          <StyledTextarea
            placeholder="質問を入力"
            value={inputText}
            onChange={onChangeText}
          ></StyledTextarea>

          <SButton onClick={sendData}>回答生成</SButton>
        </InputContainer>
      </AllContainer>
    </div>
  );
};

export default AnswerApi;

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1; /* 残りのスペースを占める */
  overflow-y: auto; /* 縦方向のスクロールを有効にする */
  padding: 16px;
`;

const QuestionArea = styled.div`
  width: 100%; /* 横幅いっぱいに広げる */
`;

const InputContainer = styled.div`
  display: flex;
  padding: 12px;
  background-color: #fff;
`;

const StyledTextarea = styled.textarea`
  width: 80%; /* 横幅いっぱいに広げる */
`;

const SButton = styled.button`
  margin-left: 10px;
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

const QuestionBubble = styled.div`
  align-self: flex-end;
  background-color: #d0e6ff;
  padding: 8px 12px;
  border-radius: 12px;
  max-width: 70%;
  margin-bottom: 4px;
`;

const AnswerBubble = styled.div`
  align-self: flex-start;
  background-color: #eee;
  padding: 8px 12px;
  border-radius: 12px;
  max-width: 70%;
  margin-bottom: 12px;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: break-word;
`;
