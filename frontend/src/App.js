import { useContext } from 'react';
import DataContext from './context/Datacontext';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ReferForm from './components/Referform';
import Footer from './components/Footer';
function App() {
  const {showForm}=useContext(DataContext);
  return (
    <BrowserRouter>
      {
          showForm && 
          (
            <ReferForm/>
          )
        }
      <Navbar />
      <Hero />
      <About/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
