import { useEffect, useState } from 'react';
import axios from 'axios';
import PacketCard from '../components/PacketCard';

export default function Dashboard() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('http://16.16.253.44:5000/logs').then((res) => {
        const parsed = res.data.logs.map((line) => {
          const match = line.match(/Prediction:\s(\w+).*?Source IP:\s([\d.]+).*?Log:\s(.*)/);
          return match ? { prediction: match[1], ip: match[2], log: match[3] } : null;
        }).filter(Boolean);
        setLogs(parsed);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-2">📡 Real-time Packet Logs</h2>
      {logs.length === 0 ? (
        <p className="text-gray-600">Waiting for logs...</p>
      ) : (
        logs.map((entry, i) => <PacketCard key={i} packet={entry} />)
      )}
    </div>
  );
}
