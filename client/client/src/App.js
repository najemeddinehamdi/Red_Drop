
import './App.css';
import Main from './components/Main';
import Sign from './components/Sign.up';
import { Routes, Route } from "react-router-dom";
import Up from './components/SignIn';
import Map from './components/Map';
import Quiz from './components/Quiz';
import User from './components/User';
import Statistcs from './components/statistcs';
import AdminDashboard from './components/Admin/AdminDashboard';




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
      <Route path="/s" element={<Statistcs />} />
      <Route path="/admin" element={<AdminDashboard />} />
      
      </Routes>
    </div>
  );
}

export default App;
