import { Layout, Select, Collapse, Button } from "antd";
import { MdOutlineFileDownload } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import Side from "../sideMenu/side";

const { Content, Footer } = Layout;
const { Panel } = Collapse;
const { Option } = Select;

const text =
  "로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그로그";

const genExtra = () => (
  <div>
    <span style={{ color: "blue" }}>3</span> /{" "}
    <span style={{ color: "red" }}>1</span>
    <span style={{ paddingLeft: 30 }}> | </span>
    <span style={{ paddingLeft: 30 }}>22.06.12 02:00</span>
    <span style={{ paddingLeft: 30 }}>
      <GiCancel />
    </span>
  </div>
);

const History = () => {
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
            History
            <br />
            <Select defaultValue="all" style={{ width: 200 }}>
              <Option value="all">모든 테스트 케이스</Option>
              <Option value="custom_test1">custom_test1</Option>
              <Option value="custom-test-long-title">
                custom_test_long_title
              </Option>
            </Select>
          </div>
          <div>
            <Collapse defaultActiveKey={["1"]}>
              <Panel header="custom-test1" key="1" extra={genExtra()}>
                <Button type="primary">Log</Button>
                <Button type="default">Result</Button>
                <MdOutlineFileDownload size="30px" />
                <div style={{ backgroundColor: "white" }}>{text}</div>
              </Panel>
              <Panel header="custom-test1" key="2" extra={genExtra()}>
                <Button type="primary">Log</Button>
                <Button type="default">Result</Button>
                <MdOutlineFileDownload />
                <div style={{ backgroundColor: "white" }}>{text}</div>
              </Panel>
              <Panel header="custom-test-long-title" key="3" extra={genExtra()}>
                <Button type="primary">Log</Button>
                <Button type="default">Result</Button>
                <MdOutlineFileDownload />
                <div style={{ backgroundColor: "white" }}>{text}</div>
              </Panel>
            </Collapse>
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

export default History;
