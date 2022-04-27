import { Header, Services, Projects, Testimonials } from './containers';
import { Anime, Navbar } from './components';

import './App.css';


  const App = () => {

    

  return (
   <div className='malithebrand__center-div'>

  
   <div className='malithebrand__app-container'>
     <Navbar />
     <Header />
     <Services />
     <Anime  />
     <Projects />
     <Testimonials />
   
   </div>
    

   </div>

  );
}


export default App