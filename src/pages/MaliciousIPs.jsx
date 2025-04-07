import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function MaliciousIPs() {
  const [ips, setIps] = useState([]);

  useEffect(() => {
    axios.get('http://16.16.253.44:5000/logs').then(res => {
      const logs = res.data.logs;
      const ipSet = new Set();

      logs.forEach(line => {
        const match = line.match(/Prediction:\sMalicious.*?Source IP:\s([\d.]+)/);
        if (match) ipSet.add(match[1]);
      });

      setIps(Array.from(ipSet));
    });
  }, []);

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <div className="flex items-center gap-3 mb-6">
        <FaExclamationTriangle className="text-red-500 text-2xl" />
        <h1 className="text-2xl font-bold text-red-600">Malicious IP Addresses</h1>
      </div>

      {ips.length === 0 ? (
        <div className="text-gray-600 text-center mt-4">✅ No malicious IPs detected.</div>
      ) : (
        <div className="border-t pt-4">
          <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {ips.map((ip, i) => (
              <li
                key={i}
                className="bg-red-100 border border-red-300 text-red-700 rounded px-4 py-2 font-mono shadow-sm hover:shadow-md transition"
              >
                {ip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
