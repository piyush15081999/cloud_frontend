import { Link } from 'react-router-dom';
import { FaShieldAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 text-blue-600">
        <FaShieldAlt className="text-lg" />
        <h1 className="text-xl font-bold">Cloud IDS</h1>
      </div>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-blue-600 font-medium">Dashboard</Link>
        <Link to="/manual" className="hover:text-blue-600 font-medium">Manual Input</Link>
        <Link to="/stats" className="hover:text-blue-600 font-medium">Stats</Link>
        <Link to="/malicious-ips" className="hover:text-blue-600 font-medium">Malicious IPs</Link>
      </nav>
    </header>
  );
}
