import { Navbar, Header, Services, Projects, Reviews,  } from './containers';
import { About, Brands, } from './components';
import './App.css';
import Footer from './containers/footer/Footer';


 
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
        <Reviews />
        <Footer />
        </div>
        </div>

  
  );
}


export default App