import { Link, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Overview from './Overview';
import Usage from './Usage';
import AgentSettings from './AgentSettings';
import Billing from './Billing';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { logout } = useAuth();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <aside className="w-60 bg-white dark:bg-gray-800 p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4">Zenet AI</h2>
        <nav className="flex flex-col space-y-2">
          <Link to="." className="hover:underline">Overview</Link>
          <Link to="usage" className="hover:underline">Usage Analytics</Link>
          <Link to="agent" className="hover:underline">Agent Settings</Link>
          <Link to="billing" className="hover:underline">Billing</Link>
          <button onClick={() => setDark(!dark)} className="text-left hover:underline">Toggle Dark Mode</button>
          <button onClick={logout} className="text-left hover:underline">Logout</button>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <Routes>
          <Route index element={<Overview />} />
          <Route path="usage" element={<Usage />} />
          <Route path="agent" element={<AgentSettings />} />
          <Route path="billing" element={<Billing />} />
          <Route path="*" element={<Navigate to="." />} />
        </Routes>
      </main>
    </div>
  );
}
