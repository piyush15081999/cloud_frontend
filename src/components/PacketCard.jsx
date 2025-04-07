import { FaBug, FaCheckCircle } from 'react-icons/fa';

export default function PacketCard({ packet }) {
  const isMalicious = packet.prediction === 'Malicious';
  return (
    <div className={`rounded-lg p-4 shadow-md ${isMalicious ? 'bg-red-100 border border-red-300' : 'bg-green-100 border border-green-300'}`}>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center font-semibold text-lg">
          {isMalicious ? <FaBug className="text-red-600" /> : <FaCheckCircle className="text-green-600" />}
          {isMalicious ? 'Malicious Packet' : 'Benign Packet'}
        </div>
        <span className="text-sm text-slate-600">IP: {packet.ip}</span>
      </div>
      <p className="text-sm text-slate-700 mt-2">{packet.log}</p>
    </div>
  );
}
