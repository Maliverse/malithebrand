import { Navbar, Header, Services, Projects } from './containers';
import { About, Brands } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

 
  const App = () => {
  return (
    <Router>

      <div className='malithebrand__center-div'>
      <div className='malithebrand__app-container'>
        
        <Navbar />
        
        <Routes>
      
        <Route path='/about' element = {<About />} />
        <Route path='/projects' element = {<Projects />} />
        
        </Routes>
   
        <Header />
        <Brands />
        <Services />
        <About />
        <Projects />
        </div>
        </div>

   </Router>
  );
}


export default App