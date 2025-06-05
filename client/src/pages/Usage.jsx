import api from "../api";
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Usage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get('/api/usage', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const labels = res.data.map((log) => new Date(log.date).toLocaleDateString());
      const minutes = res.data.map((log) => log.minutes);
      setData({ labels, minutes });
    }
    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Minutes per day',
        data: data.minutes,
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99,102,241,0.5)',
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Usage Analytics</h1>
      <Line data={chartData} />
    </div>
  );
}
