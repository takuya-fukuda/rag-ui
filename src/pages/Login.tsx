import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("https://your-api-endpoint.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
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
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
