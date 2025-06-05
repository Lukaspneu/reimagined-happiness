import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login('demo-token');
    navigate('/');
  };

  const stars = Array.from({ length: 40 }).map((_, i) => ({
    left: Math.random() * 100 + 'vw',
    animationDuration: Math.random() * 20 + 10 + 's',
    animationDelay: Math.random() * 20 + 's',
  }));

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        {stars.map((s, i) => (
          <div key={i} className="star" style={s} />
        ))}
        <div className="rocket">🚀</div>
      </div>
      <form onSubmit={handleSubmit} className="relative bg-white dark:bg-gray-800 p-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Zenet AI Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Login</button>
      </form>
    </div>
  );
}
