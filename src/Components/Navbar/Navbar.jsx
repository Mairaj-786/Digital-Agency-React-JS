import React from 'react'
const Navbar = (props) => {
    const { HamTime } = props.navbar;
    const UpdateNavbar = () => {
        props.UpdateNavbar();

    }
    return (
        <>
            <div className="Navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="whatsApp">
                                <i className="fa fa-whatsapp"><span className="pl-2">+92306-273-608-0</span></i>
                            </div>
                        </div>
                        <div className="col-lg-4 ml">
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
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">portfolio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">client</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">contact</a>
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
