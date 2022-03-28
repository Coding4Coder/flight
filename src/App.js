
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footer';
import TopHeader from './Components/TopHeader';
import About from './Pages/About';
import AddFlight from './Pages/Action/AddFlight';
import EditFlight from './Pages/Action/EditFlight';
import ViewFlight from './Pages/Action/ViewFlight';
import Contact from './Pages/Contact';
import FlightsDetails from './Pages/FlightsDetails';

function App() {
  return (
    <>
      <BrowserRouter>
      <TopHeader />
      <Routes>
        <Route path="/" element={ <FlightsDetails /> } />
        <Route path="/flights-list/" element={ <FlightsDetails /> } />
        <Route path="/about/" element={ <About /> } />
        <Route path="/contact/" element={ <Contact/> } />
        <Route path="/flight/add/" element={ <AddFlight /> } />
        <Route path="/flight/view/:id" element={ <ViewFlight /> } />
        <Route path="/flight/edit/:id" element={ <EditFlight /> } />
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
