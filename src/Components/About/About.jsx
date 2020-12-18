import React from 'react'

import LightSpeed from 'react-reveal/LightSpeed';

const About = () => {
    return (
        <div className="AboutSvg" id="About">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#dbd527" fill-opacity="1" d="M0,62L2200,288L1440,64L1440,320L720,320L0,320Z"></path>
            </svg>
            <div className="About">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12  ">
                            <div className="About__text">
                                <h1>We are <br /> <span>Digital</span> agency</h1>
                                <p>Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy. Lorem ipsum is simply dummy text of the printing and design.</p>
                                <a href="#" id="btn">Learn More</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 ">
                            <div className="About__Icons">
                                <i class="fa fa-heart "></i>
                                <br />
                                <i></i>
                                <i class="fa fa-heart"></i>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-12 ml-auto ">
                            <LightSpeed left>
                                <div className="About__potIMG">
                                    <img src="/images/pot.png" className="mt-5 pt-5" />
                                </div>
                            </LightSpeed>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="AboutSvgBottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,62L2200,288L1440,64L1440,320L720,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export default About
