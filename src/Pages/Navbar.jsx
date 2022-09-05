import { Outlet, NavLink } from "react-router-dom";
import React from "react";
import './PagesCss/Navbar.css';
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
              <NavLink className='nav_link' to="/"><iconify-icon icon="clarity:home-solid"></iconify-icon>Home</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/about" ><iconify-icon icon="ic:baseline-roundabout-right"></iconify-icon>about</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/services"><iconify-icon icon="carbon:cloud-satellite-services"></iconify-icon>services</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/skills"><iconify-icon icon="foundation:social-skillshare"></iconify-icon>skills</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/education"><iconify-icon icon="zondicons:education"></iconify-icon>education</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/experience"><iconify-icon icon="eos-icons:job"></iconify-icon>experience</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/work"><iconify-icon icon="ic:baseline-work"></iconify-icon>work</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/blog"><iconify-icon icon="carbon:blog"></iconify-icon>blog</NavLink>
            </li>

            <li className='nav_li'>
              <NavLink className='nav_link' to="/contact"><iconify-icon icon="ic:baseline-connect-without-contact"></iconify-icon>Contact</NavLink>
            </li>
          </ul>
        </nav>

        <footer> <small>&copy; Copyright 2018, All rights reserved by Nuhan Chowdhury</small> </footer>  

        <div className="icons">
        <iconify-icon icon="brandico:facebook-rect" style={{color: "#4267b2"}} ></iconify-icon>
        <iconify-icon icon="fa-brands:instagram-square" style={{color: "#e4405f"}}></iconify-icon>
        <iconify-icon icon="ant-design:whats-app-outlined" style={{color:"#34B7F1"}}></iconify-icon>
        <iconify-icon icon="fa:github-square" style={{color:"#171515"}}></iconify-icon>
        <iconify-icon icon="fa:twitter-square" style={{color:"#1DA1F2"}}></iconify-icon>
        </div>
      </div>

      <Outlet />
    </>
  )

};

export default Navbar;