import React from 'react'

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
                    <ul className="sideNav_inner_ul">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">portfolio</a></li>
                        <li><a href="#">client</a></li>
                        <li><a href="#">blog</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                    <div className={HamTime} onClick={UpdateNavbar}></div>

                </div>

            </div>
        </>
    )
}

export default SideNavbar
