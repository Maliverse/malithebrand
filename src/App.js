import { Navbar, Header, Services, Projects } from './containers';
import { About, Brands, } from './components';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

 
  const App = () => {
  return (
    <Router>

      <div className='malithebrand__center-div'>
      <div className='malithebrand__app-container'>
        
        <Navbar />
        <Header />
        <Services />
        <About />
        <Projects />
        <Brands />
        </div>
        </div>

   </Router>
  );
}


export default App