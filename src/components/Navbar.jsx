import React from "react";
import logo from './assets/foodlogo.png';
import './navbar.css';
import { motion } from "framer-motion";

// Logo animation
const logoVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
};

// Menu items animation
const menuVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: i => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1 + 0.5,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const Navbar = () => {
  const menuItems = [
    { name: "Home", href: "#banner" },
    { name: "Why only us?", href: "#sectionWCU" },
    { name: "Explore Menu", href: "#sectionEM" },
    { name: "Follow us", href: "#sectionFU" },
    { name: "More Info", href: "#sectionMI" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <motion.img
          src={logo}
          className="logo"
          alt="logo"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        />
      </a>

      {/* Custom Menu Icon */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
     <i className="fas fa-burger fs-3 text-danger"></i>





      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav m-auto">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              className="nav-link"
              href={item.href}
              custom={index}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.1,
                color: "#ffc107"
              }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
