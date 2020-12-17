import React from 'react'
import Navbar from './Navbar'
import SideNavbar from './SideNavbar'

const MainNav = () => {
    const [navbar, Setnavbar] = React.useState({ firstNav: true, secondNav: false, HamTime: 'fa fa-bars' });
    const UpdateNavbar = () => {
        Setnavbar({ firstNav: !navbar.firstNav, secondNav: !navbar.secondNav, HamTime: navbar.HamTime === "fa fa-bars" ? "fa fa-times" : "fa fa-bars" })
    }
    return (
        <div className="MainNav">
            {navbar.firstNav ? <Navbar navbar={navbar} UpdateNavbar={UpdateNavbar} /> : < SideNavbar navbar={navbar} UpdateNavbar={UpdateNavbar} />}
        </div>
    )
}

export default MainNav
