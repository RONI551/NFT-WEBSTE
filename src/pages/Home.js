
import Header from "../components/header/header"
import About from "../components/layouts/About"
import Speciality from "../components/layouts/Speciality"
import Slider from "../components/slider/Slider"
import {dataCard} from "../assets/data/data-card"
import Portfolio from "../components/layouts/Portfolio"
import dataPortfolio  from "../assets/data/portfolio-data"
import Montono from "../components/layouts/Montono"
import dataMontono from "../assets/data/data-montono"
import Roadmap from "../components/layouts/Roadmap"
import  dataRoadMaps  from "../assets/data/data-roadmap"
import Newsletter from "../components/layouts/Newsletters"
import Messenger from "../components/Messenger/Messenger"

const Home = () =>{
    return (
    
         <div>
           
           <Slider/>
           <About/>
           <Speciality data={dataCard}/>
           <Portfolio data={dataPortfolio} />
           <Montono data={dataMontono} />
           <Roadmap data={dataRoadMaps} />
           <Newsletter/>
           <Messenger/> 
         </div>
      
    )
}

export default Home