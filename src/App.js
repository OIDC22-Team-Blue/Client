import Main from "./components/main/Main";
import AddTest from "./components/test/AddTest";
import TestDetail from "./components/test/TestDetail";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import UserInfo from "./components/auth/UserInfo";
import History from "./components/history/History";
import NoticeSetting from "./components/notice/NoticeSetting";
import SendNotice from "./components/notice/SendNotice";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="addtest" element={<AddTest />} />
        <Route path="testDetail" element={<TestDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="userInfo" element={<UserInfo />} />
        <Route path="history" element={<History />} />
        <Route path="noticeSetting" element={<NoticeSetting />} />
        <Route path="sendNotice" element={<SendNotice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
