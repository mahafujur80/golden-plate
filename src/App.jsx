
import { Route, Routes } from 'react-router';
import './App.css'
import NavBar from './component/NavBar/NavBar';
import Home from './component/Home/Home';
import About from './component/Home/page/About';
import Services from './component/Home/page/Services';
import Contact from './component/Home/page/Contact';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';

function App() {

  return (
    <>
    <NavBar/>

     <Routes>
        <Route path="/" element={<Home ></Home>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
