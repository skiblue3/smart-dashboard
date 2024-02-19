import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Logout from './pages/Logout';
import SolarData from './pages/SolarData';
import WaterMotor from './pages/WaterMotor';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout user={user} />}>
          <Route index element={<Dashboard user={user} />} />
          <Route path="solardata" element={<SolarData />} />
          <Route path="watermotor" element={<WaterMotor user={user} />} />
          <Route path="login" element={<Login user={user} setUser={setUser} />} />
          <Route path="logout" element={<Logout user={user} setUser={setUser} />} />
          <Route path="admin" element={<Admin user={user} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
