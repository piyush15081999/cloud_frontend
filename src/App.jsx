import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import ManualInput from './pages/ManualInput';
import Stats from './pages/Stats';
import MaliciousIPs from './pages/MaliciousIPs';

export default function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen text-slate-800">
        <Header />
        <main className="max-w-5xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manual" element={<ManualInput />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/malicious-ips" element={<MaliciousIPs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
