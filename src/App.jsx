import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './pages/Dashboard'
import SolarData from './pages/SolarData'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="solardata" element={<SolarData />} />
                    <Route path="smartmeter" element={<SmartMeter />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
