import { Layout, Button, Input } from "antd";
import Side from "../sideMenu/side";

const { Content, Footer, } = Layout;

const NoticeSetting = () => {
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
            Send Notice <Button type="primary">완료</Button>
          </div>
          <div
            style={{
              backgroundColor: "white",
              border: "solid",
              margin: 20,
              padding: 20,
            }}
          >
            Slack 주소 <Input />
            Slack 채널 <Input />
            Slack 키 <Input />
          </div>
          <div
            style={{
              backgroundColor: "white",
              border: "solid",
              margin: 20,
              padding: 20,
            }}
          >
            카카오톡 주소 <Input />
            카카오톡 인증 <Input />
            카카오톡 키 <Input />
          </div>
          <div
            style={{
              backgroundColor: "white",
              border: "solid",
              margin: 20,
              padding: 20,
            }}
          >
            발신 메일 주소 <Input />
            수신자 채널 <Input />
            이메일 키 <Input />
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

export default NoticeSetting;
