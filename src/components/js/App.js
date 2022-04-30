import '../css/app.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";

import Navigation from './Navigation';
import Cards from './Cards';
import Display from './Display';
import Extra from './Extra';
import Footer from './Footer';

import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className='app'>
      {loading ? 'Loading...' :
        <div>
          <Navigation />
          <Routes>
            <Route path='/home' element={<Cards />} />
            <Route path='/display' element={<div><Cards /><Display /></div>} />
            <Route path='/extras' element={<Extra />} />
          </Routes>
          <Footer />
        </div>
      }
    </div>

  );
}

export default App;
