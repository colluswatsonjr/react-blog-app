import './App.css';

import Navbar from './Navbar';
import Home from './Home';
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
          <Navbar />

          <Home />

          <Extra />

          <Footer />
        </div>
      }
    </div>

  );
}

export default App;
