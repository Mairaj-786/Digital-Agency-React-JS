import React from 'react'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-6">
                        <ul className="d-flex">
                            <li className="nav-link">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li className="nav-link">
                                <a href="#"><i className="fa fa-google"></i></a>
                            </li>
                            <li className="nav-link">
                                <a href="#"><i className="fa fa-github"></i></a>
                            </li>
                            <li className="nav-link">
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6 ">
                        <p className="Para_footer">© 2020 MegaOne. Made With Love By </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
