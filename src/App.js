import { useEffect, useState, useContext } from 'react';
import './App.css';
// import './darkLight.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/ThemeContext';

const App = () => {
  // const [toggle, setToggle] = useState(false);

  // const theme = toggle ? 'dark' :'light';

  // const handleTheme = () => {
  //   setToggle(prev => !prev);
  // };

  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', theme);
  // }, [theme]);

  return (
    <ThemeProvider>
    <div className="App">
      <h1>Dark Light Theme</h1>
      {/* <button onClick={handleTheme} style={{border: '.5px solid black'}}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button> */}
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
