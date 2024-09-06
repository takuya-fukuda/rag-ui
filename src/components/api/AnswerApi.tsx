import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCategory } from "../../hooks/useCategory";
import { useAnswer } from "../../hooks/useAnswer";

const AnswerApi = () => {
  const { fetchData, options, loading, error } = useCategory();
  const {
    sendData,
    inputText,
    //setText, // setText をエクスポート
    //selectedCategory,
    //setSelectedCategory, // setSelectedCategory をエクスポート
    responseData,
    loading2,
    error2,
    onChangeText, // onChangeText をエクスポート
    handleSelectChange, // handleSelectChange をエクスポート
  } = useAnswer();

  //カテゴリ生成用(カスタムフックで実行してみる)
  useEffect(() => {
    fetchData(); // カスタムフックの fetchData を実行
  }, []);

  //回答生成用(カスタムフックなし)
  const onClickAnswer = () => sendData();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>チャット画面</h1>
      <h2>カテゴリ</h2>
      <p>
        プルダウンでバグ発生中。一回他の物を選択してから、選択したいやつ選択
      </p>
      {error ? (
        <pre style={{ color: "red" }}>データの取得に失敗しました。</pre>
      ) : loading ? (
        <pre>Loading...</pre>
      ) : (
        <select id="dropdown" onChange={handleSelectChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      <br />
      <h2>質問</h2>
      <p>質問内容を入力してください</p>
      <StyledTextarea
        placeholder="テキストを入力"
        value={inputText}
        onChange={onChangeText}
      ></StyledTextarea>
      <br />
      <ButtonContainer>
        {/* <SButton onClick={sendData}>回答生成</SButton> */}
        <SButton onClick={onClickAnswer}>回答生成</SButton>
      </ButtonContainer>
      <br />
      {error2 ? (
        <pre style={{ color: "red" }}>データの取得に失敗しました。</pre>
      ) : loading2 ? (
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
