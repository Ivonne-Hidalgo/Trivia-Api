import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import './App.css';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Results from './pages/Results';

function App() {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Questions" element={<Questions />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;