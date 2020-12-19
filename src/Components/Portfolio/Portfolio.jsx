import React from 'react'

const Portfolio = () => {
    return (
        <div className="Portfolio">
            <div className="PortfolioSvg" id="PortfolioSvg">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fill-opacity="1" d="M0,62L2200,288L1440,64L1440,320L720,320L0,320Z"></path>
                </svg>
                <div className="Portfolio">
                    <div className="container">
                        <h1>MY<br />AMAZING PORTFOLIO</h1>

                        <div className="Portfolio_IMG ">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12 ">
                                    <img src="/images/port2.png" alt="" />
                                </div>
                                <div className="col-lg-6 col-md-12 col-12  img-2">
                                    <img src="/images/port4.png" alt="" />
                                </div>
                                <div className="col-lg-6 col-md-12 col-12 m-auto  pt-5 mt-5">
                                    <img src="/images/port3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg className="PortfolioSvgSvgBottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fill-opacity="1" d="M0,62L2200,288L1440,64L1440,320L720,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    )
}

export default Portfolio
