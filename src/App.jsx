import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import './App.css';
import Home from './pages/Home';
import Quiz from './pages/Questions';
import Result from './pages/Results';

function App() {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;