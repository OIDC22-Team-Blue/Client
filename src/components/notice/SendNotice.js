import { Layout, Menu, Button, Input, Collapse, Checkbox } from 'antd';
import { useState } from 'react';
import { BiHelpCircle, BiCheckCircle } from 'react-icons/bi';
import { SiKubernetes } from 'react-icons/si';
import { MdOutlineHistoryEdu, MdEmail } from  'react-icons/md';
import { FiSend } from 'react-icons/fi';
import { AiOutlineUser, AiOutlineSlack, AiTwotoneSetting } from 'react-icons/ai';
import { RiKakaoTalkFill } from 'react-icons/ri';

const { Content, Footer, Sider } = Layout;
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

const checkbox = () => {
    return (
        <div>
            <Checkbox />
        </div>
    )
}


const SendNotice = () => {
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
            Send Notice
            <Button type="primary"><AiOutlineSlack /> Slack</Button>
            <Button type="default"><RiKakaoTalkFill /> 카카오톡</Button>
            <Button type="default"><MdEmail /> 이메일</Button>
            <Button type="default"><AiTwotoneSetting /> 어플리케이션 설정</Button>
          </div>
          <Collapse defaultActiveKey={['1']} >
                    <Panel header="Custom-test1" key="1" extra={checkbox()}>
                        <div>
                            <Checkbox value={"Slack"}>Slack 연결</Checkbox>
                            <Checkbox value={"KakaoTalk"}>KakaoTalk 연결</Checkbox>
                            <Checkbox value={"Email"}>Email 연결</Checkbox>
                            <div style={{
                                border:"solid",
                                backgroundColor:"white"
                            }}>
                                <Input placeholder='내용을 입력하세요(선택)'/>
                            </div>
                        </div>
                    </Panel>
                    <Panel header="Custom-test-long-title" key="2" extra={checkbox()}>
                    <div>
                            <Checkbox value={"Slack"}>Slack 연결</Checkbox>
                            <Checkbox value={"KakaoTalk"}>KakaoTalk 연결</Checkbox>
                            <Checkbox value={"Email"}>Email 연결</Checkbox>
                            <div style={{
                                border:"solid",
                                backgroundColor:"white"
                            }}>
                                <Input placeholder='내용을 입력하세요(선택)'/>
                            </div>
                        </div>
                    </Panel>
                </Collapse>
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

export default SendNotice;