import React from "react";
import { Navbar, Header, Services, Projects, Reviews, Contact  } from '../containers';
import { About, Brands, } from '../components';
import Footer from '../containers/footer/Footer';

function Home() {
    return(


      <div>
         <Navbar />
        <Header />
        <Services />
        <About />
        <Brands />
        <Projects />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    )
}

export default Home;