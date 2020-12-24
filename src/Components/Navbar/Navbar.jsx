import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
const Navbar = (props) => {
    const { HamTime } = props.navbar;
    const UpdateNavbar = () => {
        props.UpdateNavbar();

    }

    const [fixed, Setfixed] = React.useState(0);
    React.useEffect(() => {
        window.addEventListener('scroll', handlescroll)
    }, [])

    const handlescroll = () => {
        if (window.scrollY > 150) {
            Setfixed(true)
        } else {
            Setfixed(false)
        }
    }

    return (
        <>
            <div className={`Navbar ${fixed ? "fixed-top bgSet" : ''}`}>
                <div className={`container ${fixed ? 'hide' : ''}`}>
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-6">
                            <div className="whatsApp">
                                <i className="fa fa-whatsapp"><span className="pl-2">+92306 2736 080</span></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-6 ">
                            <div className="social_icons">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="#"><img src="/images/logo.png" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className={HamTime} onClick={UpdateNavbar}></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link activeClass="active" to="home" spy={true} offset={0} duration={1300} smooth={true} className="nav-link" >home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link activeClass="active" to="about" spy={true} offset={0} duration={1300} smooth={true} className="nav-link" >About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link activeClass="active" to="portfolio" spy={true} offset={0} duration={1300} smooth={true} className="nav-link" >portfolio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link activeClass="active" to="team" spy={true} offset={0} duration={1300} smooth={true} className="nav-link" >team</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link activeClass="active" to="contact" spy={true} offset={0} duration={1300} smooth={true} className="nav-link" >contact</Link>
                                    </li>

                                    <li className="nav-item">
                                        <i className={HamTime} onClick={UpdateNavbar}></i>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
