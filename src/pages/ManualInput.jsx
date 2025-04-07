import { useState } from 'react';
import axios from 'axios';

export default function ManualInput() {
  const [jsonInput, setJsonInput] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsed = JSON.parse(jsonInput);
      const res = await axios.post('http://16.16.253.44:5000/predict', parsed);
      setResult(res.data.prediction || 'No prediction returned');
    } catch (err) {
      setResult('❌ Error: ' + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📝 Manual Packet JSON Input</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="12"
          placeholder='Paste JSON packet here...'
          className="w-full p-4 border border-slate-300 rounded-lg font-mono text-sm bg-white"
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
        />
        <button type="submit" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Predict
        </button>
      </form>
      {result && (
        <div className="mt-4 text-lg font-semibold">
          🧠 Prediction: <span className={result === 'Malicious' ? 'text-red-600' : 'text-green-600'}>{result}</span>
        </div>
      )}
    </div>
  );
}
