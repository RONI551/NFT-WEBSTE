import react, { useState } from "react";
import { Link } from "react-router-dom";
import item from "../../assets/data/item";

const About = () => {

    const [data] = useState(
        {
            subtitle:"About Us",
            title:"Safe & Efficient In-Game Currencies Trading Store",
            desc1:"futcoin's customer service team consists of well-trained gamers who are working in shift to provide you 24/7 online service",
            desc2:"The whole process of purchase is very simple and easy to comprehend"
        }
        )
    return(
        <section className="tf-section section-about">
          <div className="container">
            <div className="row reverse">
              <div className="col-xl-7 col-md-12">
               <div className="group-image">
                 <div className="left">
                   <div className="item bg-1"><img src={item.item8} alt="" /></div>
                 </div>
                 <div className="right">
                  <div className="item bg-2"><img src={item.item9} alt="" /></div>
                  <div className="item bg-2"><img src={item.item10} alt="" /></div>
                 </div>
               </div>
              </div>
               <div className="col-xl-5 col-md-12">
                <div className="blcok-text pt-12">
                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">{data.subtitle}</h5>
                <h3 className=" title mb-58" data-aos="fade-up" data-aos-duration="1000">{data.title}</h3>
                <p className="fs-21 mb-58" data-aos="fade-up" data-aos-duration="1000">{data.desc1}</p>
                <p className="fs-18 mb-33 line-h17" data-aos="fade-up" data-aos-duration="1000">{data.desc2}</p>
                <Link to="/" className="btn-action style-2" data-aos="fade-up" data-aos-duration="1200">More About Us</Link>
                </div>
               </div> 
            </div>
          </div>
        </section>
    )

}
export default About;
