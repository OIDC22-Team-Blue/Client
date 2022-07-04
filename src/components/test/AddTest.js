import { Layout, Menu, Button, Table, Input, Collapse } from 'antd';
import { useState } from 'react';
import { BiHelpCircle, BiCheckCircle } from 'react-icons/bi';
import { SiKubernetes } from 'react-icons/si';
import { MdOutlineHistoryEdu } from  'react-icons/md';
import { FiSend } from 'react-icons/fi';
import { AiOutlineUser, AiFillDelete } from 'react-icons/ai';

const { Header, Content, Footer, Sider } = Layout;
const { Panel } = Collapse;

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


const variable_columns = [
    {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
    },
    {
        title: 'Value',
        dataIndex: 'Value',
        key: 'Value'
    },
]
const variable_data = [
    {
        key: '1',
        Name: 'KLIB_POD_PATTERN',
        Test_name: 'mytest',
    },
    {
        key: '2',
        Name: 'KLIB_POD_REPLICAS',
        Test_name: '1',
    },
]

const text = 'Given waited for pods matching "${KLIB_POD_PATTERN}" in namespace "${KLIB_POD_NAMESPACE}" to be READY\nWhen getting pods matching "${KLIB_POD_PATTERN}" in namespace "${KLIB_POD_NAMESPACE}\nThen all pods containers are using "eu.gcr.io/kyma-project/incubator/develop/octopus:dc5dc284" image'
  

const AddTest = () => {
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
            Add Test
          </div>
          <div style={{
              paddingTop: 30,
          }}>
              Test name : <Input placeholder="New test" />
          </div>
          <div style={{
              paddingTop: 30,
          }}>
              Set Scehduled : <Input placeholder="* * * * *" />
          </div>
          <div style={{
              paddingTop: 15,
              fontSize: '20px'
          }}>
            cron 정규식 설명설명
          </div>
          <div>
              ** Variables **
              <Table columns={variable_columns} dataSource={variable_data} />
              <Button type="primary">Add Variable</Button>
          </div>
          <div>
                ** Test Cases **
                <Collapse defaultActiveKey={['1']} >
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
            textAlign: 'center',
          }}
        >
          Version 1.0
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AddTest;