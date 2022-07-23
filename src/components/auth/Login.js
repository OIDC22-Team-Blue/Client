import { Layout, Button, Input } from "antd";
import React, { useState } from "react";
import axios from "axios";
import Side from "../sideMenu/side";

const { Content, Footer } = Layout;

export const Login = () => {
  const [user_id, setUser_id] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");

  const handleClick = (resp) => {
    axios
      .post("http://127.0.0.1:5000/login", {
        user_id,
        password,
      })
      .then((resp) => {
        if (resp.status !== 200) {
          alert("에러!!");
        }
        const token = resp.data.access_token;
        console.log(token);
        sessionStorage.setItem("token", token);
        alert("로그인 성공");
        window.location.href = "/";
      });
    return true;
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Side />
      <Layout className="site-layout">
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 10,
              fontSize: "50px",
              color: "#8EA4DE",
            }}
          >
            {token && token != "" && token != undefined
              ? "로그인"
              : "유저 이름 넣기"}
          </div>
          <div>
            아이디
            <Input
              type="text"
              placeholder="아이디"
              value={user_id}
              onChange={(e) => setUser_id(e.target.value)}
              style={{marginLeft: "10px", width: "200px"}}
            />
            <br/>
            비밀번호
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{marginLeft: "10px", width: "200px"}}
            />
            <br />
            <Button type="primary" onClick={handleClick}>
              완료
            </Button>
          </div>
          <div
            style={{
              color: "gray",
            }}
          >
            <a>회원가입</a>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Version 1.0
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Login;
