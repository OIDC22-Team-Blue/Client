import { Layout, Menu, Button, Table, Input, Collapse } from "antd";
import { useState } from "react";
import { BiHelpCircle, BiCheckCircle } from "react-icons/bi";
import { SiKubernetes } from "react-icons/si";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { AiOutlineUser, AiFillDelete } from "react-icons/ai";
import { VscDebugStart } from "react-icons/vsc";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { Panel } = Collapse;

function getItem(path, label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
    path,
  };
}

const logo = [getItem("/", "Kube-Blue", "1")];
const user = [getItem("/userInfo", "Jisu", "1", <AiOutlineUser />)];

const items = [
  getItem("/history", "help", "1", <BiHelpCircle />),
  getItem("/history", "Kubernetes setting", "2", <SiKubernetes />),
  getItem("/testDetail", "Test", "sub1", <BiCheckCircle />, [
    getItem("/testDetail", "Custom-test1", "3"),
    getItem("/testDetail", "Custom-test-long-title", "4"),
  ]),
  getItem("/history", "History", "5", <MdOutlineHistoryEdu />),
  getItem("/sendNotice", "Notice", "6", <FiSend />),
];

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
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="menu_box">
          <Link to="/">
            <div className="logo">
              <Menu
                theme="light"
                mode="inline"
                items={logo}
                style={{ fontSize: "20px" }}
              />
            </div>
          </Link>
          <Link to="/userInfo">
            <div>
              <Menu theme="light" mode="inline" items={user} />
            </div>
          </Link>

          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            // items={items}
          >
            <Link to={items[0].path}>
              <Menu.Item key={items[0].key}>
                <div
                  className="menu"
                  style={{
                    paddingLeft: "24px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>{items[0].icon}</span>
                  <span style={{ marginLeft: "10px" }}>{items[0].label}</span>
                </div>
              </Menu.Item>
            </Link>
            <Link to={items[1].path}>
              <Menu.Item key={items[1].key}>
                <div
                  className="menu"
                  style={{
                    paddingLeft: "24px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>{items[1].icon}</span>
                  <span style={{ marginLeft: "10px" }}>{items[1].label}</span>
                </div>
              </Menu.Item>
            </Link>

            <Menu.SubMenu
              title={
                <div
                  className="menu"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>{items[2].icon}</span>
                  <span style={{ marginLeft: "10px" }}>{items[2].label}</span>
                </div>
              }
            >
              <Link to="/testDetail">
                <Menu.Item>Custom-test1</Menu.Item>
              </Link>
              <Link to="/testDetail">
                <Menu.Item>Custom-test-long-title</Menu.Item>{" "}
              </Link>
            </Menu.SubMenu>
            <Link to={items[3].path}>
              <Menu.Item key={items[3].key}>
                <div
                  className="menu"
                  style={{
                    paddingLeft: "24px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>{items[3].icon}</span>
                  <span style={{ marginLeft: "10px" }}>{items[3].label}</span>
                </div>
              </Menu.Item>
            </Link>
            <Link to={items[4].path}>
              <Menu.Item key={items[4].key}>
                <div
                  className="menu"
                  style={{
                    paddingLeft: "24px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>{items[4].icon}</span>
                  <span style={{ marginLeft: "10px" }}>{items[4].label}</span>
                </div>
              </Menu.Item>
            </Link>
          </Menu>
        </div>
      </Sider>
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
