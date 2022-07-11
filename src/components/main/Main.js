import { Breadcrumb, Layout, Menu, Button, Space, Table, Tag } from "antd";
import { useState } from "react";
import { BiHelpCircle, BiCheckCircle } from "react-icons/bi";
import { SiKubernetes } from "react-icons/si";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { AiOutlineUser, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

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

const test_columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Last Test",
    dataIndex: "Last_test",
    key: "Last_test",
  },
  {
    title: "Scheduled",
    dataIndex: "Scheduled",
    key: "Scheduled",
  },
  {
    title: "",
    dataIndex: "action",
    key: "action",
  },
];
const test_data = [
  {
    key: "1",
    name: "Custom-Test1",
    Last_test: "22.06.14 02:00",
    Scheduled: "0 2 * * *",
    action: "delete",
  },
  {
    key: "2",
    name: "Jim Green",
    Last_test: "22.06.12 15:22",
    Scheduled: "-",
    action: "delete",
  },
];

const history_columns = [
  {
    title: "No",
    dataIndex: "No",
    key: "No",
  },
  {
    title: "Test name",
    dataIndex: "Test_name",
    key: "Test_name",
  },
  {
    title: "Pass/Fail",
    dataIndex: "Pass_fail",
    key: "Pass_fail",
  },
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date",
  },
];
const history_data = [
  {
    key: "7",
    No: "7",
    Test_name: "custom_test1",
    Pass_fail: "3/1",
    Date: "22.06.14 02:00",
  },
  {
    key: "6",
    No: "6",
    Test_name: "custom_test1",
    Pass_fail: "3/1",
    Date: "22.06.13 02:00",
  },
  {
    key: "5",
    No: "5",
    Test_name: "custom_test_long_title",
    Pass_fail: "4/0",
    Date: "22.06.12 15:22",
  },
];

const Main = () => {
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
            Welcome to Kube-Blue!
          </div>
          <div
            style={{
              paddingLeft: 20,
            }}
          >
            <p>
              설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
            </p>
          </div>
          <div
            style={{
              paddingTop: 30,
              fontSize: "25px",
            }}
          >
            Test List (2)
            <Button type="primary">Add Test</Button>
          </div>
          <Table columns={test_columns} dataSource={test_data} />
          <div
            style={{
              paddingTop: 30,
              fontSize: "25px",
            }}
          >
            History (7)
            <Button type="default">more</Button>
          </div>
          <Table columns={history_columns} dataSource={history_data} />
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

export default Main;
