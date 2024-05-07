
import './App.css';
import Main from './components/Main';
import Sign from './components/Sign.up';
import { Routes, Route } from "react-router-dom";
import Up from './components/SignIn';
<<<<<<< Updated upstream
=======
import Map from './components/Map';
import Quiz from './components/Quiz';
import AdminDashboard from './components/Admin/AdminDashboard';
import OneUser from './components/Admin/OneUser';



>>>>>>> Stashed changes


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Main />}/>
      <Route path="/sign" element={<Sign />} />
<<<<<<< Updated upstream
      <Route path="/up" element={<Up/>} />
=======
      <Route path="/signIn" element={<  Up/>} />
      <Route path="/map" element={<Map />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/user/:id" element={<OneUser />} />
>>>>>>> Stashed changes
      </Routes>
    </div>
  );
}

export default App;
