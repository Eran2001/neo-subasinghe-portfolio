import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import { useUIStore } from './stores/stores';
import { useEffect } from 'react';

export default function App() {
  const { themeMode } = useUIStore();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(themeMode);
  }, [themeMode]);

  return (
    <Router>
      <div className="noise-overlay" />
      <AppRoutes />
    </Router>
  );
}
