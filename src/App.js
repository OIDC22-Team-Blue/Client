import Main from './components/main/Main';
import AddTest from './components/test/AddTest';
import TestDetail from './components/test/TestDetail';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import UserInfo from  './components/auth/UserInfo';
import History from './components/history/History';
import NoticeSetting from './components/notice/NoticeSetting';
import SendNotice from './components/notice/SendNotice';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import 'antd/dist/antd.css';


function App() {
  return (
    <BrowserRouter>           
        <Main />
    </BrowserRouter>
  );
}

export default App;
