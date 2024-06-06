
import './App.css';
import {BrowserRouter, Routes,Route,Navigate} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Navbar from './Component/Navbar';
import User from './Component/User';
import Filter from './Component/Filter';
import Contact from './Component/Contact';
import Company from './Component/Company';
import Channel from './Component/Channel'
import Other from './Component/Other';
import Login from './Component/Login';
import Protected from './Component/Protected';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={<Protected Comp={Home}/>}/>
        <Route path = "/login" element ={<Login/>}/>
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/about" element={<Protected Comp={About}/>}/>
        <Route path="/contact" element={<Contact/>}>
        <Route path="company" element={<Company/>}/>
        <Route path = "channel" element ={<Channel/>}/>
        <Route path ="other" element ={<Other/>}/>
        </Route>
        <Route path="/user/:name" element={<User/>}/>
        <Route path="/filter" element={<Filter/>}/>
        <Route path="/*" element={<Navigate to="/" />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
