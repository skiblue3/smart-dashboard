import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import SolarData from './pages/SolarData'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="solardata" element={<SolarData />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
