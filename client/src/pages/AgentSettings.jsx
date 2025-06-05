import api from "../api";
import { useState, useEffect } from 'react';

export default function AgentSettings() {
  const [agent, setAgent] = useState({ name: '', tone: '', voiceType: '' });

  useEffect(() => {
    async function fetchAgent() {
      const res = await api.get('/api/agent', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (res.data) setAgent(res.data);
    }
    fetchAgent();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/api/agent', agent, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setAgent(res.data);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Agent Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Name</label>
          <input
            className="w-full p-2 border rounded"
            value={agent.name}
            onChange={(e) => setAgent({ ...agent, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block mb-1">Tone</label>
          <input
            className="w-full p-2 border rounded"
            value={agent.tone}
            onChange={(e) => setAgent({ ...agent, tone: e.target.value })}
          />
        </div>
        <div>
          <label className="block mb-1">Voice Type</label>
          <input
            className="w-full p-2 border rounded"
            value={agent.voiceType}
            onChange={(e) => setAgent({ ...agent, voiceType: e.target.value })}
          />
        </div>
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}
