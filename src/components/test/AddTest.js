import { Layout, Button, Table, Input, Collapse } from "antd";
import Side from "../sideMenu/side";

const { Content, Footer, } = Layout;
const { Panel } = Collapse;

const variable_columns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
  },
  {
    title: "Value",
    dataIndex: "Value",
    key: "Value",
  },
];
const variable_data = [
  {
    key: "1",
    Name: "KLIB_POD_PATTERN",
    Test_name: "mytest",
  },
  {
    key: "2",
    Name: "KLIB_POD_REPLICAS",
    Test_name: "1",
  },
];

const text =
  'Given waited for pods matching "${KLIB_POD_PATTERN}" in namespace "${KLIB_POD_NAMESPACE}" to be READY\nWhen getting pods matching "${KLIB_POD_PATTERN}" in namespace "${KLIB_POD_NAMESPACE}\nThen all pods containers are using "eu.gcr.io/kyma-project/incubator/develop/octopus:dc5dc284" image';

const AddTest = () => {
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
            Add Test
          </div>
          <div
            style={{
              paddingTop: 30,
            }}
          >
            Test name : <Input placeholder="New test" />
          </div>
          <div
            style={{
              paddingTop: 30,
            }}
          >
            Set Scehduled : <Input placeholder="* * * * *" />
          </div>
          <div
            style={{
              paddingTop: 15,
              fontSize: "20px",
            }}
          >
            cron 정규식 설명설명
          </div>
          <div>
            ** Variables **
            <Table columns={variable_columns} dataSource={variable_data} />
            <Button type="primary">Add Variable</Button>
          </div>
          <div>
            ** Test Cases **
            <Collapse defaultActiveKey={["1"]}>
              <Panel header="Pod images has corrent version" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="Pod has enough replicas" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="Pod has not been restarted" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Button type="primary">Add Test Case</Button>
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

export default AddTest;
