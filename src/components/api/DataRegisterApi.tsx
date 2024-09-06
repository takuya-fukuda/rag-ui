import React, { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Register = {
  message: string | number;
};

type FormData = {
  name: string;
  email: string;
  file: File | null;
};

const DataRegisterApi = () => {
  const [responseData, setResponseData] = useState<Register | null>(null); //APIのレスポンスのState
  const [error, setError] = useState<string | null>(null); //APIエラーの時のState

  //以下はドラッグアンドドロップの処理
  const { setValue, watch } = useForm<FormData>({
    defaultValues: {
      file: null,
    },
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        setValue("file", acceptedFiles[0]);
      }
    },
    [setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "text/html": [".html"],
    },
  });

  const dropAreaBackground = isDragActive ? "gray" : "";

  const watchFile = watch("file");

  const filePreview = useMemo(() => {
    if (!watchFile) {
      return null;
    }

    const url = URL.createObjectURL(watchFile);
    const isImage = watchFile.type.startsWith("image/");

    return isImage ? (
      <img src={url} alt="" className="file-preview" />
    ) : (
      <p>ファイルが選択されました: {watchFile.name}</p>
    );
  }, [watchFile]);

  //APIの処理
  const apiUrl: string = "http://localhost:8000/ragapp/upload/";

  const sendData = async (): Promise<void> => {
    if (!watchFile) {
      setError("ファイルが選択されていません");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("file", watchFile); // ファイルをFormDataに追加

      const response = await fetch(apiUrl, {
        method: "POST", // POSTメソッドを使用
        body: formData,
        credentials: "include", // クッキーを含めるために必要
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      // レスポンスをJSON形式に変換
      const data = await response.json();
      setResponseData(data); //JSONの受け取り
      setError(null); //エラーなしで更新
    } catch (error) {
      setError((error as Error).message);
      setResponseData(null);
    }
  };

  return (
    <div>
      <h1>データ登録画面(HTML想定)</h1>
      <p>
        ドラッグアンドドロップするか、枠内をクリックしてファイルを選択してください
      </p>
      <br />
      <div {...getRootProps()} className={`drop-area ${dropAreaBackground}`}>
        <input {...getInputProps()} />
        <p>
          ファイルを選択または
          <br />
          ドラッグアンドドロップ
        </p>
      </div>
      {filePreview}
      <br />
      <ButtonContainer>
        <SButton onClick={sendData}>データ登録</SButton>
      </ButtonContainer>
      <br />
      {error && <pre>Error: {error}</pre>}
      {responseData && (
        <div>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
      <br />
      <Link to={`/Home`}>ホームへ戻る</Link>{" "}
      {/* 追加　Go To page1をクリックするとhttp://localhost:3000/に遷移する */}
    </div>
  );
};

export default DataRegisterApi;

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
