import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamCards = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="text-white">
                <div className="container">
                    <Slider {...settings}>
                        <Zoom>
                            <div className="IMG" data-aos='fade-up'>
                                <h3><img src="/images/team4.png" alt="" /></h3>
                            </div>
                        </Zoom>
                        <Fade top>
                            <div className="IMG pt-5 mb-4">
                                <h3><img src="/images/team2.png" alt="" /></h3>
                            </div>
                        </Fade>
                        <Zoom top>
                            <div className="IMG">
                                <h3><img src="/images/team3.png" alt="" /></h3>
                            </div>
                        </Zoom>
                        <div className="IMG pt-5">
                            <h3><img src="/images/team4.png" alt="" /></h3>
                        </div>


                    </Slider>
                </div>
            </div>
        </>
    )
}

export default TeamCards
