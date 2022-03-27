
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footer';
import TopHeader from './Components/TopHeader';
import About from './Pages/About';
import Contact from './Pages/Contact';
import FlightsDetails from './Pages/FlightsDetails';

function App() {
  return (
    <>
      <BrowserRouter>
      <TopHeader />
      <Routes>
        <Route path="/" element={ <FlightsDetails /> } />
        <Route path="/about/" element={ <About /> } />
        <Route path="/contact/" element={ <Contact/> } />
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
