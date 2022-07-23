import { Layout, Button, Input } from "antd";
import React from "react";
import Side from "../sideMenu/side";

const { Content, Footer, } = Layout;

const Signup = () => {
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
          ></div>{" "}
          <div>
            아이디
            <Input type="text" placeholder="user_id" />
            비밀번호
            <Input type="password" placeholder="password" />
            비밀번호 확인
            <Input type="password" />
            관리자 이름
            <Input placeholder="name" />
            <Button type="primary">완료</Button>
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
