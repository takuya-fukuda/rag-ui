import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string | number>("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/ragapp/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include", // ここが重要
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Logged in successfully:", data);
        navigate("/Home");
      } else {
        console.error("Login failed");
        alert("ログインに失敗しました。");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("エラーが発生しました。後でもう一度試してください。");
    }
  };

  return (
    <div>
      <Header />
      <div className="login">
        <form onSubmit={handleSubmit} className="form">
          <h1>ログイン</h1>
          <label>
            ユーザ名
            <input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            パスワード
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">ログイン</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
