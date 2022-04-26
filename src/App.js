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
   
   </div>
    

   </div>

  );
}


export default App