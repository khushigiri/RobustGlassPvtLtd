
import AboutUs from './components/AboutUs/AboutUs';
import Copyright from './components/Copyright/Copyright';
import FAQs from './components/FAQs/FAQs';
import Footer from './components/Footer/Footer.jsx';
import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';
import Offer from './components/Offer/Offer';
import Products from './components/Products/Products';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="App">
      

      <NavBar/>
      <HeroSection/>
        <AboutUs/>
        <Products/>
        <Offer/>
        <Works/>
        <FAQs/>
        <Footer/>
        <Copyright/>

    </div>
  );
}

export default App;
