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
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container team">
            <h2> OUR CREATIVE TEAM </h2>
            <Slider {...settings}>
                <div >
                    <img src="/images/team2.png" alt="" />
                </div>
                <div>
                    <img src="/images/team3.png" alt="" />
                </div>
                <div >
                    <img src="/images/team4.png" alt="" />
                </div>
                <div>
                    <img src="/images/team2.png" alt="" />
                </div>
                <div>
                    <img src="/images/team3.png" alt="" />
                </div>
                <div >
                    <img src="/images/team4.png" alt="" />
                </div>


            </Slider>
        </div>
    );

}

export default TeamCards
