import React from "react";
import { Link } from "react-router-dom";

const Montono = ({ data }) => {
    return (
        <section className="tf-section monotono">
            <div className="container-fluid">

                <div className="row">
                    {
                        data.slice(0, 8).map((data, index) => (
                            <div className="col-xl-3 col-md-6">
                                <div className="image-box" data-aos="fade-up" data-aos-duration="1000">
                                    <img src={data.img} alt="" />
                                    <div className="image-box__title">
                                        <Link to="/" className="h6">
                                            {data.title}
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default Montono;