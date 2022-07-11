import { Layout, Menu, Select, Collapse, Button } from "antd";
import { useState } from "react";
import { BiHelpCircle, BiCheckCircle } from "react-icons/bi";
import { SiKubernetes } from "react-icons/si";
import { MdOutlineHistoryEdu, MdOutlineFileDownload } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";

const { Content, Footer, Sider } = Layout;
const { Panel } = Collapse;
const { Option } = Select;

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
