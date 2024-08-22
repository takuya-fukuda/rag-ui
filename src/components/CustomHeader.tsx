import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const CustomHeader = () => {
  const navigate = useNavigate();

  const apiUrl: string = "http://localhost:8000/ragapp/logout/";

  const logout = async (): Promise<void> => {
    const response = await fetch(apiUrl, {
      method: "POST", // POSTメソッドを使用
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // クッキーを含めるために必要
      body: JSON.stringify({}),
    });
    if (response.ok) {
      console.log("Logout is success:");
      navigate("/");
    } else {
      console.error("Logout failed with status:", response.status);
    }
  };
  return (
    <SHeader>
      <Spacer /> {/* 左側のスペーサー */}
      <H1>RAGSYSTEM</H1>
      <Sbutton onClick={logout}>ログアウト</Sbutton>
    </SHeader>
  );
};

export default CustomHeader;

const SHeader = styled.header`
  background-color: #2a3f56;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;

const H1 = styled.h1`
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Sbutton = styled.button`
  background-color: #ff5c5c;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #ff7878;
  }
`;

const Spacer = styled.div`
  flex: 1; /* 左側のスペースを確保するための要素 */
`;
