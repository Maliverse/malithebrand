import { Navbar, Header, Services, Projects } from './containers';
import { About, Brands, } from './components';
import './App.css';

 
  const App = () => {
  return (


      <div className='malithebrand__center-div'>
      <div className='malithebrand__app-container'>
        <Navbar />
        <Header />
        <Services />
        <About />
        <Brands />
        <Projects />
        
        </div>
        </div>

  
  );
}


export default App