import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import NavBar from './components/NavBar';

function App() {
  return (
    <div class="app">
      <BrowserRouter>
        <header className="app-header">
          <NavBar />
        </header>
        <main>
          <div id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
