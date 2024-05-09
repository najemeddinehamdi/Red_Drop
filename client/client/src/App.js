
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
import OneUser from './components/Admin/OneUser';
import Sponsor from './components/Admin/Sponsor';
import AddSponsor from './components/Admin/AddSponsor';
import OneSponsor from './components/Admin/OneSponsor';
import ProductForm from './components/Admin/ProductForm'; 
import OneProduct from './components/Admin/OneProduct';
import EditProduct from './components/Admin/EditProduct';




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
      <Route path="/admin/user/:id" element={<OneUser />} />
      <Route path="/admin/sponsor" element={<Sponsor />} />
      <Route path="/admin/sponsor/add" element={<AddSponsor />} />
      <Route path="/admin/sponsor/:id" element={<OneSponsor />} />
      <Route path="/admin/sponsor/product/add/:id" element={<ProductForm />} />
      <Route path="/admin/product/:id" element={<OneProduct />} />
      <Route path="/product/edit/:id/:sponsorId" element={<EditProduct />} />
      
      </Routes>
    </div>
  );
}

export default App;
