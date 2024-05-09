
import './App.css';
import Main from './components/Main';
import Sign from './components/Sign.up';
import { Routes, Route } from "react-router-dom";
import Up from './components/SignIn';
import Map from './components/Map';
import Quiz from './components/Quiz';
import User from './components/User';
import Market from './components/market/MarketPlace'

import AdminDashboard from './components/Admin/AdminDashboard';
import OneUser from './components/Admin/OneUser';
import Sponsor from './components/Admin/Sponsor';
import Sponsors from './components/market/Sponsors';





function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Main />}/>
      <Route path="/sign" element={<Sign />} />
      <Route path="/signIn" element={<  Up/>} />
      <Route path="/map" element={<Map />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/user" element={<User />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/user/:id" element={<OneUser />} />
      <Route path="/admin/sponsor" element={<Sponsor />} />
      <Route path="/user/market" element={<Market />} />
      <Route path="/user/sponsor" element={<Sponsors />} />
      
      </Routes>
    </div>
  );
}

export default App;
