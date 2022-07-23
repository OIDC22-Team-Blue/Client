import { Layout, Button, Input } from "antd";
import React, { useState } from "react";
import axios from "axios";

import Side from "../sideMenu/side";


axios.defaults.withCredentials = true;

const { Content, Footer } = Layout;

const Signup = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password_check, setPassword_check] = useState("");

  const registerUser = async () => {
    if (password !== password_check) {
      alert("비밀번호를 확인하세요");
    } else if (id.length < 1 || name.length < 1 || password.length < 1) {
      alert("다시 입력하세요");
    } else {
      try {
        const resp = await axios.post("//127.0.0.1:5000/register", {
          name,
          id,
          password,
        });
        console.log(name, id, password);
        alert("회원가입 성공");
        // window.location.href = "/";
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          alert("Invalid credentials");
        } else {
          alert("로그인 실패");
        }
      }
    }
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
            회원가입
          </div>
          <div>
            <form action="">
              관리자 이름
              <Input
                type="text"
                placeholder="관리자1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              아이디
              <Input
                type="text"
                placeholder="아이디"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              비밀번호
              <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              비밀번호 확인
              <Input
                type="password"
                placeholder="비밀번호 재입력"
                value={password_check}
                onChange={(e) => setPassword_check(e.target.value)}
              />
              <Button type="primary" onClick={() => registerUser()}>
                완료
              </Button>
            </form>
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

export default Signup;
