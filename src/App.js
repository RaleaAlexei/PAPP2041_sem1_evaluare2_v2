import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import ListaTari from './components/ListaTari';
import Tara from './components/Tara';
import Acasa from './components/Acasa';
const App = () => {
  const [tari, setTari] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        const countries = data.filter(country => country.area > 505992);
        setTari(countries);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<Acasa />} />
            <Route path = "tari/" element={<ListaTari tari={tari} />} />
            <Route path="/tara/:nume" element={<Tara tari={tari} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;