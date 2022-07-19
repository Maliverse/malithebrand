
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Branding from './pages/Branding';

 
  const App = () => {
  return (


      <div className='malithebrand__center-div'>
      <div className='malithebrand__app-container'>

        <BrowserRouter>

        <Routes>
          
        <Route path='/' element= {<Home />}></Route>
        <Route path='/branding' element= {<Branding />}></Route>
      </Routes>

        </BrowserRouter>
        </div>
        </div>

  
  );
}


export default App