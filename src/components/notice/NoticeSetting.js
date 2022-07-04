import { Layout, Menu, Button, Input, } from 'antd';
import { useState } from 'react';
import { BiHelpCircle, BiCheckCircle } from 'react-icons/bi';
import { SiKubernetes } from 'react-icons/si';
import { MdOutlineHistoryEdu } from  'react-icons/md';
import { FiSend } from 'react-icons/fi';
import { AiOutlineUser, } from 'react-icons/ai';

const { Content, Footer, Sider } = Layout;

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


const NoticeSetting = () => {
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
            Send Notice <Button type="primary">완료</Button>
          </div>
          <div
            style ={{
                backgroundColor:"white",
                border:"solid",
                margin: 20,
                padding: 20
            }}
          >
            Slack 주소 <Input />
            Slack 채널 <Input />
            Slack 키 <Input />
          </div>
          <div
            style ={{
                backgroundColor:"white",
                border:"solid",
                margin: 20,
                padding: 20
            }}
          >
            카카오톡 주소 <Input />
            카카오톡 인증 <Input />
            카카오톡 키 <Input />
          </div>
          <div
            style ={{
                backgroundColor:"white",
                border:"solid",
                margin: 20,
                padding: 20
            }}
          >
            발신 메일 주소 <Input />
            수신자 채널 <Input />
            이메일 키 <Input />
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

export default NoticeSetting;