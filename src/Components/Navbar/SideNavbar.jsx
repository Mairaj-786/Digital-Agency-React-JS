import React from 'react'
import { Link } from 'react-scroll'

const SideNavbar = (props) => {
    const { HamTime } = props.navbar;
    const UpdateNavbar = () => {
        props.UpdateNavbar();

    }

    return (
        <>
            <div className='SideNavbar fixed-top '>
                <h1 className='showNavBg '></h1>
                <div className='sideNav_inner '>
                    <img src="/images/logo-yellow.png" />
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
                    <div className={HamTime} onClick={UpdateNavbar}></div>

                </div>

            </div>
        </>
    )
}

export default SideNavbar
