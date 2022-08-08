import Home from './components/Home/home';
import Account from './components/User/Account';
import Login from './components/User/Login';
import './App.css';
import { BrowserRouter, Routes ,Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/User/Account"element={<Account/>}></Route>
          <Route path="/login"element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;