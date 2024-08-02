import React, { useState } from "react";
import { Link } from "react-router-dom";

//Reactのポイント
//状態管理はuseStateで行う
const ApiFetch = () => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const apiUrl = "http://127.0.0.1:8000/manual/create/";

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          revice_type: "html",
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      setResponseData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setResponseData(null);
    }
  };

  return (
    <div>
      <h1>RagApp2 マニュアル作成</h1>
      <button onClick={fetchData}>マニュアル作成</button>
      {error && <pre>Error: {error}</pre>}
      {responseData && (
        <div>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
          <div>
            <h2>{responseData.data[0].headline}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: responseData.data[0].manual.replace(/\n/g, "<br>"),
              }}
            ></p>
          </div>
        </div>
      )}
      <br />
      <Link to={`/`}>ホームへ戻る</Link>
    </div>
  );
};

export default ApiFetch;
