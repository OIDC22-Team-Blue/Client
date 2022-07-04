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


const Signup = () => {
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
            회원가입
          </div>
          <div>
              관리자 이름
              <Input placeholder='관리자1'/>
              아이디
              <Input placeholder='아이디'/>
              비밀번호
              <Input placeholder='비밀번호'/>
              비밀번호 확인
              <Input placeholder='비밀번호 재입력' />
              <Button type="primary">완료</Button>
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

export default Signup;