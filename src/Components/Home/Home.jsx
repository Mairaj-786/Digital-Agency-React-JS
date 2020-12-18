import React, { useState, useEffect } from 'react'
import MainNav from '../Navbar/MainNav';

const Home = () => {
    const [TextParallex, SetTextParallex] = useState(0);
    const HandleScroll = () => SetTextParallex(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", HandleScroll);
        return () => {
            window.removeEventListener("scroll", HandleScroll)
        }

    }, [])
    return (
        <div className="Home">
            <MainNav />
            <div className="main_text" style={{ transform: `translateY(-${TextParallex * 0.3}px)` }}>
                <div className="container Home_main_text mx-auto">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 ml-auto">
                            <div className="left_side">
                                <h2>we<br /> Make </h2>
                                <p>Beautiful <spna>&</spna> Responsive</p>

                            </div>
                        </div>
                        <div className="col-lg-7 col-md-8 col-12 ">
                            <div className="right_side">
                                <span>Creative</span>
                                <h2>WEBSITE</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id interdum vitae, interdum eget elit.</p>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,62L2200,288L1440,64L1440,320L720,320L0,320Z"></path>
            </svg>


        </div>
    )
}

export default Home
