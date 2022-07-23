import { Layout, Button, Input, Collapse, Checkbox } from "antd";
import { useState } from "react";
import { BiHelpCircle, BiCheckCircle } from "react-icons/bi";
import { SiKubernetes } from "react-icons/si";
import { MdOutlineHistoryEdu, MdEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import {
  AiOutlineUser,
  AiOutlineSlack,
  AiTwotoneSetting,
} from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import Side from "../sideMenu/side";

const { Content, Footer } = Layout;
const { Panel } = Collapse;

const checkbox = () => {
  return (
    <div>
      <Checkbox />
    </div>
  );
};

const SendNotice = () => {
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
            Send Notice
            <Button type="primary">
              <AiOutlineSlack /> Slack
            </Button>
            <Button type="default">
              <RiKakaoTalkFill /> 카카오톡
            </Button>
            <Button type="default">
              <MdEmail /> 이메일
            </Button>
            <Button type="default">
              <AiTwotoneSetting /> 어플리케이션 설정
            </Button>
          </div>
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="Custom-test1" key="1" extra={checkbox()}>
              <div>
                <Checkbox value={"Slack"}>Slack 연결</Checkbox>
                <Checkbox value={"KakaoTalk"}>KakaoTalk 연결</Checkbox>
                <Checkbox value={"Email"}>Email 연결</Checkbox>
                <div
                  style={{
                    border: "solid",
                    backgroundColor: "white",
                  }}
                >
                  <Input placeholder="내용을 입력하세요(선택)" />
                </div>
              </div>
            </Panel>
            <Panel header="Custom-test-long-title" key="2" extra={checkbox()}>
              <div>
                <Checkbox value={"Slack"}>Slack 연결</Checkbox>
                <Checkbox value={"KakaoTalk"}>KakaoTalk 연결</Checkbox>
                <Checkbox value={"Email"}>Email 연결</Checkbox>
                <div
                  style={{
                    border: "solid",
                    backgroundColor: "white",
                  }}
                >
                  <Input placeholder="내용을 입력하세요(선택)" />
                </div>
              </div>
            </Panel>
          </Collapse>
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

export default SendNotice;
