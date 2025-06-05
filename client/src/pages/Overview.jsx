import api from "../api";
import { useEffect, useState } from 'react';

export default function Overview() {
  const [usage, setUsage] = useState(null);

  useEffect(() => {
    async function fetchUsage() {
      const res = await api.get('/api/billing', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setUsage(res.data);
    }
    fetchUsage();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Overview</h1>
      {usage ? (
        <p>You used {usage.totalMinutes} minutes. Cost: {usage.cost} CZK</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
