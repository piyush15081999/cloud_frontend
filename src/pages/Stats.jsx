import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Stats() {
  const [counts, setCounts] = useState({ Benign: 0, Malicious: 0 });

  useEffect(() => {
    axios.get('http://16.16.253.44:5000/logs').then(res => {
      const parsed = res.data.logs.map(line => {
        const match = line.match(/Prediction:\s(\w+)/);
        return match ? match[1] : null;
      }).filter(Boolean);

      const malicious = parsed.filter(p => p === 'Malicious').length;
      const benign = parsed.filter(p => p === 'Benign').length;

      setCounts({ Malicious: malicious, Benign: benign });
    });
  }, []);

  const data = {
    labels: ['Malicious', 'Benign'],
    datasets: [
      {
        data: [counts.Malicious, counts.Benign],
        backgroundColor: ['#f87171', '#34d399'], // red-400, green-400
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📊 Packet Prediction Summary</h1>
      <div className="max-w-sm mx-auto">
        <Pie data={data} />
      </div>
    </div>
  );
}
