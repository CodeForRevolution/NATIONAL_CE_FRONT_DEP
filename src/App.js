

// import Home from './Components/Home/Home';
import style from "./App.module.scss"
import Carosal from "./Components/Carosal/Carosal";
import Navbar from "./Components/Navbar/Navbar";
import Stars from "./Components/Our-starts/Stars";
import Sdisplay from './Components/SchoolDisplay/Sdisplay';
import Play from "./Components/PlaysAs/Play";
import New from "./Components/News/New";
import Staff from "./Components/Staff/Staff";
import Product from "./Components/Product/Product";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/footer/Footer"
import Contact2 from "./Components/Contact2/Contact";
import Dashboard from "./Components/Dashboard/Dashboard";
function App() {
  return (
    <div className={style.app }>
      <Sdisplay/>
      <Navbar/>  
    <Carosal/>
    <Stars/>
    <Play/>
    <New/>
    <Staff/>
    <Product/>
    
{/* <Contact2/> */}
     <Footer/>
      {/* <Contact/> */}
      {/* <Dashboard/> */}
    </div>

  );
}

export default App;
