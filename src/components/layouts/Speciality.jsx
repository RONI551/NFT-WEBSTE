import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Speciality = (props) => {

const [dataText] = useState({
    subTitle:"Our Speciality",
    title:"Complete Solution For Your Gaming Coin",
    desc:"Futcoin-FC is grateful for the appreciation and preference from loyal customers"
})
const data = props.data
    return (
        <section className="tf-section section-speciality">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-12">
                        <div className="block-text pt-128 pd-0">
                         <h5 className="sub-title md-10" data-aos="fade-up" data-aos-duration="1000">{dataText.subTitle}</h5>
                         <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">{dataText.title}</h3> 
                         <p className="fs-21" data-aos="fade-up" data-aos-duration="1000">{dataText.desc}</p>     
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-12">
                    <div className="section-speciality__box">
                    {
                      data.map((data,index)=>(
                        <div key={index} className={`box-item bg-2 ${data.class}`} data-aos="flip-left">
                        <h3 className="color-main">{data.stt}</h3>
                        <Link to="/" className='h5'>{data.title}</Link>
                        <p>{data.desc}</p>
                        </div>
                        ))  
                    }
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Speciality