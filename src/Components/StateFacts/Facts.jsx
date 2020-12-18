import React from 'react';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

const Facts = () => {
    return (
        <div className="Facts" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-12 ml-auto pb-5 mb-5">
                        <div className="Fact_inner">
                            <Zoom>
                                <h1>AGENCY STATS & FACTS</h1>
                            </Zoom>
                            <Fade left>
                                <p className="text-muted">Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy. Lorem Ipsum has been the industry’s standard dummy. Lorem ipsum is simply dummy text of the printing and typesetting.</p>
                            </Fade>
                        </div>
                    </div>
                    <Zoom >
                        <div className="skills col-lg-6 col-md-6 col-12 mx-auto ">

                            <strong>Python Django:</strong>
                            <div className="Fact_inner">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span className="Pypercentage">75%</span></div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom >
                        <div className="skills col-lg-6 col-md-6 col-12 mx-auto ">
                            <strong>React Js:</strong>
                            <div className="Fact_inner">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '50%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span className="Reactpercentage">50%</span></div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom >
                        <div className="skills col-lg-6 col-md-6 col-12 mx-auto ">
                            <strong>Css (Sass):</strong>
                            <div className="Fact_inner">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '60%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span className="Csspercentage">60%</span></div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    < Zoom >
                        <div className="skills col-lg-6 col-md-6 col-12 mx-auto ">
                            <strong>Bootstrap:</strong>
                            <div className="Fact_inner">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '50%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span className="Bootpercentage">50%</span></div>
                                </div>
                            </div>
                        </div>
                    </ Zoom>

                </div>
            </div>
        </div >
    )
}

export default Facts
