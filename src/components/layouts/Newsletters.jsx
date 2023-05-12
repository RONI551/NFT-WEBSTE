

const Newsletter = () => {

    const sendEmail = (e) => {
        e.preventDefault()
        if (window.Email) {
            window.Email.send({
                Host: "smtp.elasticemail.com",
                Username: "royroni780@gmail.com",
                Password: "E071E5A79ED2ABE416C0D552BE086AD46EB4",
                To: 'roniroy7800@gmail.com',
                From:'royroni780@gmail.com',
                Subject: " contact form data",

                Body:`<h4>this Email is Submitted on Futcoin fc</h4><h2>${document.getElementById('exampleInputEmail').value}</h2>` 
            }).then(
                message => alert(message)
            )
        }

    }
    return (
        <section className="tf-section newsletter">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="newsletter__body" data-aos="fade-up">

                            <div className="blcok-text">
                                <h3 className="mb-13">Get Newsletter</h3>
                                <p className="fs-21">Get Updated With News, tips and triks</p>
                            </div>

                            <form className="body__form" onSubmit={sendEmail}>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="exampleInputEmail" placeholder="Your Email here" required />
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}
export default Newsletter;