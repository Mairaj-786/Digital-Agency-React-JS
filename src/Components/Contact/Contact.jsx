import React from 'react'

const Contact = () => {
    return (
        <div className="ContactSvg" id="Contact">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#dbd527" fill-opacity="1" d="M0,62L2200,288L1440,64L1440,320L720,320L0,320Z"></path>
            </svg>
            <div className="Contact">
                <div className="container">
                    <div className="contact_inner">
                        <div className="row">
                            {/* get in touch side */}
                            <div className="col-lg-6 mb-5 pb-5">
                                <h2>GET IN TOUCH</h2>
                                <div className="form">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12 contact_inner_left_Side">
                                            <div className="row">
                                                <div className="contact_inner_left_Side_inner">
                                                    <div className="col-lg-12 left_inputs">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Your Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 left_inputs ">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Email Address *" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 left_inputs">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Subject" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 contact_inner_right_Side">
                                            <input type="text" className="form-control" placeholder="Your Message" />
                                        </div>
                                    </div>
                                    <a href="#" className="btn btn-warning  font-weight-bold w-100">Send Message</a>
                                </div>
                            </div>
                            {/* Location side */}
                            <div className="col-lg-6 ">
                                <div className="location_right_side">
                                    <h2>OUR LOCATION</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered .</p>
                                    <i className="fa fa-map-marker"><span>123 Park Avenue, New York, United States</span></i><br />
                                    <i className="fa fa-phone"><span>+92306 2736 080</span></i><br />
                                    <i className="fa fa-paper-plane"><span>mairajrind4@gmail.com</span></i><br />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="ContactSvgBottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,62L2200,288L1440,64L1440,320L720,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export default Contact
