import React from "react";
import { motion } from "framer-motion";
import './banner.css';

const Banner = () => (
  <motion.div
    className="banner-container text-center d-flex flex-column justify-content-center"
    id="banner"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="banner"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
    >
      <motion.h1
        className="banner-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Order Delicious Food any time
      </motion.h1>
      <motion.p
        className="banner-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        eat well and be healthy
      </motion.p>
      <motion.div
        className="d-flex justify-content-center gap-3 mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a href="#sectionEM">
          <button className="button2">View Menu</button>
        </a>
        <a href="https://www.swiggy.com" target="_blank" rel="noreferrer">
          <button className="button1">Order</button>
        </a>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default Banner;
