import { Outlet, NavLink } from "react-router-dom";
import { ReactDOM } from "react";
import React from "react";
import './PagesCss/Navbar.css';
import { Icon } from "@iconify/react";
const Navbar = () => {

  return (
    <>
      <div className="navbar" id="navbar">
        <div className="profile"></div>
        <h2 className="name">Nuhan Chowdhury</h2>
        <p>UI/UX/DESIGNER <span style={{ color: 'black' }}>IN BANGLADESH</span></p>
        <nav>
          <ul className="nav_ul">
            <li className='nav_li active2'>
              <NavLink className='nav_link' to="/"><Icon icon="ant-design:home-filled" /> Home</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/about" ><Icon icon="ic:baseline-roundabout-right" /> about</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/services"><Icon icon="ic:baseline-design-services" /> services</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/skills"><Icon icon="foundation:social-skillshare" /> skills</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/education"><Icon icon="zondicons:education" /> education</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/experience"><Icon icon="eos-icons:job" /> experience</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/work"><Icon icon="ic:baseline-work-history" /> work</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/blog"><Icon icon="carbon:blog" /> blog</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/contact"><Icon icon="fluent:contact-card-48-filled" /> Contact</NavLink>
            </li>
          </ul>
        </nav>

        <footer> <small>&copy; Copyright 2018, All rights reserved by Nuhan Chowdhury</small> </footer>  

        <div className="icons">
        <Icon icon="fa:facebook-official" />
        <Icon icon="fa-brands:instagram-square" />
        <Icon icon="ant-design:whats-app-outlined" />
        <Icon icon="fa:github-square" />
        <Icon icon="fa:twitter-square" />
        </div>
      </div>

      <Outlet />
    </>
  )

};

export default Navbar;