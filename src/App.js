import { useEffect } from  "react";
import "../src/assets/icons/font-awesome.css"
import "./App.css"
import Home from "./pages/Home";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos"
import {Routes,Route } from "react-router-dom"
import Login from "./components/Login/Login";
import Header from "./components/header/header";
function App() {

 useEffect(()=>{
  AOS.init({
    duration : 2000
  })
 },[])

  return (
    <div>
    <Header/>
    <Routes>
     
      <Route path="/" element={ <Home/>}/>
      <Route path="/login" element={<Login/>}/>

    
    </Routes>
    </div>
   
      
  
  );
}

export default App;
