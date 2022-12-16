import React, { useRef } from 'react';
import logo from '../../assets/logo.svg';
import { FaTimes, FaBars } from 'react-icons/fa';
import './navbar.css';
// import { useRef } from 'react';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className='gpt3__navbar'>
      <img src={logo} alt="logo" />
      <nav ref={navRef}>
        <div className="gpt3__navbar-list">
          <a href="/#">Home</a>
          <a href="/#">What is GPT</a>
          <a href="/#">OpenAi</a>
          <a href="/#">Case Studies</a>
          <a href="/#">Library</a>
        </div>
        <div className="gpt3__navbar-sign">
          <a href="/#">Sign in</a>
          <button className='gpt3__navbar-sign-btn' type='button'>Sign up</button>
        </div>
        {/* <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button> */}
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
    </div>
  )
}

export default Navbar













// import React, { useState } from "react";
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from "../../assets/logo.svg";
// import "./navbar.css";

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   return (
//     <div className="gpt3__navbar">
//       <div className="gpt3__navbar-links">
//         <div className="gpt3__navbar-links_logo">
//           <img src={logo} alt="logo" />
//         </div>
//         <div className="gpt3__navbar-links_container">
//           <p>
//             <a href="#home">Home</a>
//           </p>
//           <p>
//             <a href="#wgpt3">What is GPT</a>
//           </p>
//           <p>
//             <a href="#possibility">OpenAi</a>
//           </p>
//           <p>
//             <a href="#features">Case Studies</a>
//           </p>
//           <p>
//             <a href="#blog">Library</a>
//           </p>
//         </div>
//       </div>
//       <div className="gpt3__navbar-sign">
//         <p>Sign in</p>
//         <button type="button">Sign up</button>
//       </div>
//       <div className="gpt3__navbar-menu">
//         <div className="gpt3__navbar-menu_container">
//           {toggleMenu ? (
//             <RiCloseLine
//               color="#fff"
//               size={27}
//               onClick={() => setToggleMenu(false)}
//             />
//           ) : (
//             <RiMenu3Line
//               color="#fff"
//               size={27}
//               onClick={() => setToggleMenu(true)}
//             />
//           )}
//           {toggleMenu && (
//             <div className="gpt3__navbar-menu_container scale-up-center">
//               <div className="gpt3__navbar-menu_container-links">
//                 <p>
//                   <a href="#home">Home</a>
//                 </p>
//                 <p>
//                   <a href="#wgpt3">What is GPT</a>
//                 </p>
//                 <p>
//                   <a href="#possibility">OpenAi</a>
//                 </p>
//                 <p>
//                   <a href="#features">Case Studies</a>
//                 </p>
//                 <p>
//                   <a href="#blog">Library</a>
//                 </p>
//                 <div className="gpt3__navbar-menu_container-links-sign">
//                   <p>Sign in</p>
//                   <button type="button">Sign up</button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
