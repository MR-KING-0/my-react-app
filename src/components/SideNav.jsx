import { React, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

import {
    userhovtab, usertab, hearthovsvg, heart, subtab, subtabhov,
    helpcircletab, helpcirclehovtab, termsandconditionstab, termsandconditionstabhov, shieldtab, shieldhovtab, logouttab
} from '../components/images/images.jsx';
const SideNav = ({ children }) => {

    // const[isOpen ,setIsOpen] = useState(false);
    // const toggle = () => setIsOpen (!isOpen);

    const location = useLocation();

    const generalItem = [
        {
            path: "/Profile",
            name: "Profile",
            img: usertab,
            img1: userhovtab

        },
        {
            path: "/Favorites",
            name: "Favorites",
            img: heart,
            img1: hearthovsvg
        },
        {
            path: "/GoandFreeNow",
            name: "Go and Free Now",
            img: subtab,
            img1: subtabhov
        },

    ]
    const otherItem = [
        {
            path: "/About",
            name: "About",
            img: helpcircletab,
            img1: helpcirclehovtab

        },
        {
            path: "/Terms&conditions",
            name: "Terms and Conditions",
            img: termsandconditionstab,
            img1: termsandconditionstabhov
        },
        {
            path: "/PrivacyPolicy",
            name: "Privacy Policy",
            img: shieldtab,
            img1: shieldhovtab
        },
        // {
        //     path: "/logout",
        //     name: "Logout",
        //     img: subtab,
        //     img1: subtabhov
        // },

    ]

    return (

        <div className="col-lg-3 col-md-12 col-sm-12 tab-navbar p-0">
            <h1 className="font-28">Quick Links</h1>
            <div className="tab-list nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <h6 className="font-18">General</h6>

                {
                    generalItem.map((item, index) => (
                        <NavLink key={index} to={item.path} className="link" >
                            <button className={`font-18 nav-tab-btn ${(location.pathname === item.path) ? 'active' : ''}`} type="button">

                                <img src={item.img} alt="" srcSet="" />
                                <img className="active-none" src={item.img1} alt="" srcSet="" />
                                <span>{item.name}</span>
                            </button>
                        </NavLink>
                    ))
                }


                <h6 className="font-18">Other</h6>
                {
                    otherItem.map((item, index) => (
                        <NavLink key={index} to={item.path} className="link" >
                            <button className={`font-18 nav-tab-btn ${(location.pathname === item.path) ? 'active' : ''}`} type="button">
                                <img src={item.img} alt="" srcSet="" />
                                <img className="active-none" src={item.img1} alt="" srcSet="" />
                                <span>{item.name}</span>
                            </button>
                        </NavLink>
                    ))
                }
                <button className="font-18 nav-tab-btn" type="button"><a href="./Login.html"><img src={logouttab} alt="" srcSet="" />Logout</a></button>
            </div>
        </div>

    );
};

export default SideNav;