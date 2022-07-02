import Main from './components/main/Main';
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
