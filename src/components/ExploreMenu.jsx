import React from "react";
import { motion } from "framer-motion";
import './exploreMenu.css';

const ExploreMenu = () => {
  const menuItems = [
    {
      title: "Non-veg Starters",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png",
    },
    {
      title: "Main Course",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png",
    },
    {
      title: "Egg-Noodles",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png",
    },
    {
      title: "Veg Starters",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png",
    },
    {
      title: "Chiken-Noodles",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png",
    },
    {
      title: "Soups",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png",
    },
    {
      title: "Fish & Sea Food",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png",
    },
    {
      title: "Chiken Starters",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png",
    },
   
    {
      title: "Noodles",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png",
    },
    
     {
      title: "COMBO Starters",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png",
    },
    {
      title: "Khaju Biryani",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png",
    },
    {
      title: "Non-veg Soups",
      image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png",
    },

  ];

  return (
    <div id="sectionEM" className="container py-5">
      <h1 className="menu-heading text-center mb-4">Explore Menu</h1>
      <div className="row">
        {menuItems.map((item, index) => (
          <motion.div
            className="col-12 col-sm-6 col-lg-4 mb-4"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="card h-100 shadow-sm hover-card">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <a href="/explore" className="link text-warning">View All →</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
