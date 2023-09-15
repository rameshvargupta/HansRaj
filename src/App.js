import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Component/Hotel.css';
import './Component/CarHire.css';
import './Component/MediaQuery.css';
import Flight from './Component/Flight';
import Hotel from './Component/Hotel';
import CarHire from './Component/CarHire';
import Home from './Component/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Flight' element={<Flight />} />
          <Route path='/Hotel' element={<Hotel />} />
          <Route path='/CarHire' element={<CarHire />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
