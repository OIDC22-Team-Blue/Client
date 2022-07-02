import { Breadcrumb, Layout, Menu, Button, Space, Table, Tag } from 'antd';
import { useState } from 'react';
import { BiHelpCircle, BiCheckCircle } from 'react-icons/bi';
import { SiKubernetes } from 'react-icons/si';
import { MdOutlineHistoryEdu } from  'react-icons/md';
import { FiSend } from 'react-icons/fi';
import { AiOutlineUser, AiFillDelete } from 'react-icons/ai';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const logo = [
    getItem('Kube-Blue', '1'),
]
const user = [
    getItem('Jisu', '1', <AiOutlineUser />),
]

const items = [
  getItem('help', '1', <BiHelpCircle />),
  getItem('Kubernetes setting', '2', <SiKubernetes />),
  getItem('Test', 'sub1', <BiCheckCircle />, [
    getItem('Custom-test1', '3'),
    getItem('Custom-test-long-title', '4'),
  ]),
  getItem('History', '5', <MdOutlineHistoryEdu />),
  getItem('Notice', '6', <FiSend />),
];

const test_columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Last Test',
      dataIndex: 'Last_test',
      key: 'Last_test',
    },
    {
      title: 'Scheduled',
      dataIndex: 'Scheduled',
      key: 'Scheduled',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
    },
  ];
const test_data = [
    {
      key: '1',
      name: 'Custom-Test1',
      Last_test: '22.06.14 02:00',
      Scheduled: "0 2 * * *",
      action: "delete"
    },
    {
      key: '2',
      name: 'Jim Green',
      Last_test: '22.06.12 15:22',
      Scheduled: "-",
      action: "delete"
    },
];

const history_columns = [
    {
        title: 'No',
        dataIndex: 'No',
        key: 'No',
    },
    {
        title: 'Test name',
        dataIndex: 'Test_name',
        key: 'Test_name'
    },
    {
        title: 'Pass/Fail',
        dataIndex: 'Pass_fail',
        key: 'Pass_fail'
    },
    {
        title: 'Date',
        dataIndex: 'Date',
        key: 'Date'
    }
]
const history_data = [
    {
        key: '7',
        No: '7',
        Test_name: 'custom_test1',
        Pass_fail: '3/1',
        Date: '22.06.14 02:00'
    },
    {
        key: '6',
        No: '6',
        Test_name: 'custom_test1',
        Pass_fail: '3/1',
        Date: '22.06.13 02:00'
    },
    {
        key: '5',
        No: '5',
        Test_name: 'custom_test_long_title',
        Pass_fail: '4/0',
        Date: '22.06.12 15:22'
    },
]
  

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo">
            <Menu theme="light" mode="inline" items={logo} style={{fontSize:'20px'}}/>
        </div>
        <div>
            <Menu theme="light" mode="inline" items={user} />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 10,
              fontSize: '50px',
              color: '#8EA4DE',
            }}
          >
            Welcome to Kube-Blue!
          </div>
          <div style={{
              paddingLeft: 20
          }}>
              <p>설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
          </div>
          <div style={{
              paddingTop: 30,
              fontSize: '25px'
          }}>
              Test List (2)
              <Button type="primary">Add Test</Button>
          </div>
          <Table columns={test_columns} dataSource={test_data} />
          <div style={{
              paddingTop: 30,
              fontSize: '25px'
          }}>
            History (7)
            <Button type="default">more</Button>
          </div>
          <Table columns={history_columns} dataSource={history_data} />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Version 1.0
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;