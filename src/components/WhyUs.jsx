import React from "react";
import { motion } from "framer-motion";
import './whyUs.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const WhyUs = () => (
  <motion.div
    id="sectionWCU"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <motion.div className="wcu-container text-center">
      <motion.h1
        className="wcu-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why only us?
      </motion.h1>
      <motion.p
        className="wcu-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We serve the best quality food from the best rated restaurants all over India
      </motion.p>

      <div className="row justify-content-center">
        {[
          {
            title: "Food Services",
            img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png",
            text: "We serve best food allover in India."
          },
          {
            title: "Best Offers",
            img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png",
            text: "We offer FLAT 50% discounts regularly."
          },
          {
            title: "Fresh Food",
            img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png",
            text: "Fresh and healthy ingredients every day."
          }
        ].map((item, index) => (
          <motion.div
            className="wcu-1 col-md-3 m-2"
            key={index}
            custom={index}
            variants={cardVariants}
          >
            <img src={item.img} className="wcu-card-image" alt={item.title} />
            <h1 className="wcu-1-heading">{item.title}</h1>
            <p className="wcu-1-text">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

export default WhyUs;
