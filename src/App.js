import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route ,useLocation  } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Contactus from './pages/Contactus/Contactus';
import Admission from './pages/Admission/Admission';

import { useLayoutEffect } from 'react';
import Apply from './pages/Apply/Apply';


function App() {
  

  return (
    <div className="App">
     
<Router>
  <Navbar/>
  
        <Routes>
        
          < Route  exact path="/"
            element= {
              <Home/> 
            }
          />
        
      
		  <Route path="about" element={<About/>} />
		  <Route path="contact" element={<Contactus/>} />
      <Route path="admission" element={<Admission/>} />
      <Route path="apply" element={<Apply/>} />
     
        </Routes>
<Footer/>
      </Router>
    </div>
  );
}

export default App;
