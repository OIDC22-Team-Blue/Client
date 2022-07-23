import { Layout, Button, Table, Collapse } from "antd";
import { useState } from "react";
import { VscDebugStart } from "react-icons/vsc";
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

const TestDetail = () => {
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
            Custom-test2
            <Button type="default">
              <VscDebugStart /> 실행
            </Button>
            <Button type="primary">수정</Button>
            <Button type="default">삭제</Button>
          </div>
          <div
            style={{
              paddingTop: 30,
            }}
          >
            Test name : Custom-test2
          </div>
          <div
            style={{
              paddingTop: 30,
            }}
          >
            Set Scehduled : 매월 | 매일 | 모든 요일 | 12 : 00
          </div>
          <div>
            ** Variables **
            <Table columns={variable_columns} dataSource={variable_data} />
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

export default TestDetail;
