import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Events from './pages/Events';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1>Coruja ConVida</h1>
          <img
            src="/logo-coruja.png"
            alt="Logotipo Coruja Academy"
            className="coruja-logo"
            title="Coruja conVida - Powered by Coruja Academy"
          />
        </header>
        <Routes>
          <Route path="/" element={<Navigate to="/events" />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;