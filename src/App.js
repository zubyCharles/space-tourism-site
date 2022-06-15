import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './Routes/Home';
import Destinations from './Routes/Destinations';
import Crew from './Routes/Crew';
import Tech from './Routes/Tech';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/tech" element={<Tech />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
