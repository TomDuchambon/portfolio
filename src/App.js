import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import background from './assets/images/paper-bg.png';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Landing from './components/Landing';

function App() {
  return (
    <>
    <div className="background" style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'repeat',
      opacity: 1,
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: 0,
      }}></div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

      </Routes>
    </>
  );
}

export default App;
