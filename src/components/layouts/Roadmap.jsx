import React from 'react'

function Roadmap({ data }) {
    console.log(data)
    return (
        <section className='tf-section road-map' >

       <div className="container-fluid">
            <div className="row">

                <div className="col-md-12">
                    <div className="blcok-text center">
                        <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"> <span>Read Map</span></h1>
                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000"> Road Map </h5>
                        <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">The Journey of <br /> Futcoin Fc</h3>

                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="road-map__content s1">

                        {
                            data.map((data, index) => (
                                <div key={index} className={`box-time ${data.class}`} data-aos="fade-in" >

                                    <span data-aos="zoom-in" data-aos-offset="300"><i className="fa fa-check"></i></span>
                                    <p className="fs-16 color-main mb-0">{data.time}
                                    </p>
                                    <h5 className="title mb-20">{data.title}</h5>
                                    <p className="fs-18">{data.desc}</p>
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

export default Roadmap