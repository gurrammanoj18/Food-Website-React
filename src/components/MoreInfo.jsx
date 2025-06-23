import React from "react";
import { motion } from "framer-motion";
import './moreInfo.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const MoreInfo = () => (
  <motion.div
    id="sectionMI"
    className="more-info"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="container">
      <div className="row align-items-center my-5">
        <motion.div className="col-md-6 text-center" variants={fadeInUp}>
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png"
            className="img-fluid"
            alt="Healthy Food"
          />
        </motion.div>
        <motion.div className="col-md-6" variants={fadeInUp}>
          <h2 className="food-heading">Fresh Organic Delicious and Healthy Food</h2>
          <p className="food-text">
            Say no to harmful chemicals and go fully organic with our range of fresh fruits and veggies.
          </p>
          <button className="food-button">Watch Video</button>
        </motion.div>
      </div>

      <div className="row align-items-center my-5">
        <motion.div className="col-md-6 order-md-2 text-center" variants={fadeInUp}>
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png"
            className="img-fluid"
            alt="Delivery"
          />
        </motion.div>
        <motion.div className="col-md-6 order-md-1" variants={fadeInUp}>
          <h2 className="food-heading">Delivery and Payment</h2>
          <p className="food-text">
            Enjoy hassle-free payment with multiple options. Track your food live!
          </p>
          <button className="food-button">Order Now</button>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default MoreInfo;
