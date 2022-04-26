import { Header, Services, } from './containers';
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
     <div className='animationText'> <p>EXCELLENCE & CREATIVITY <span>//All In One</span>  </p> </div>
   </div>
    

   </div>

  );
}


export default App