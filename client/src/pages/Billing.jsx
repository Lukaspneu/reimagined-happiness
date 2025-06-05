import api from "../api";
import { useEffect, useState } from 'react';

export default function Billing() {
  const [billing, setBilling] = useState(null);

  useEffect(() => {
    async function fetchBilling() {
      const res = await api.get('/api/billing', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setBilling(res.data);
    }
    fetchBilling();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Billing</h1>
      {billing ? (
        <div className="space-y-2">
          <p>Total minutes: {billing.totalMinutes}</p>
          <p>Cost: {billing.cost} CZK</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded">Pay with Stripe</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
