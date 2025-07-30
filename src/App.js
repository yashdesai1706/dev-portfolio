import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
    <>
    

      <section id="home"><Page1 /></section>
      <section id="about"><Page2 /></section>
      <section id="portfolio"><Page3 /></section>
      <section id="contact"><Page4 /></section>
    </>

  );
}

export default App;