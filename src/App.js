import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './components/Home'
import Features from './components/Features'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import PageNotFound from "./components/PageNotFound";

import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <BrowserRouter basename="/aicc_react_template">
      <div className="App">
        <Navbar />

        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/features' element={<Features />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/404' element={<PageNotFound />}/>
          
          {/* Default route to Home component */} 
          <Route path="/" element={<Navigate to="/home" />} /> 
          {/* Catch all unmatched routes and redirect to Home */} 
          <Route path="*" element={<Navigate to="/404" />} />

        </Routes>

        <Footer />
        <ScrollToTop smooth width="20" height="20" color="white" style={{background : '#473DCE', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none'}}/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
